const queries = require('../queries/startingQueries');
const data = require('../data/initialSystem.json');
const { httpRequest, executeQuery, concatQueryInsertValues } = require('../utils'); 
const dataPath = data["dataToInsert"];

const dbCreation = async (queryMethod) => await executeQuery(queries[queryMethod]);
const dbInsertData = async (queryMethod, params=[]) => await executeQuery(queries[queryMethod], params);

const getCategoryData = (category_id) => httpRequest(`https://tienda.mercadona.es/api/categories/${category_id}/?lang=es&wh=mad1`);

const createDbTables = async () => {
    const allTablesQuery = data["tables"].map(table => queries[table.queryMethod]).join('\n');
    await executeQuery(allTablesQuery);
};

const dropTables = async () => {
    const allTablesName = data["tables"].map(table => table.name).reverse();
    await executeQuery(`DROP TABLE ${allTablesName.join(', ')};`);
};

const insertZip = async () => {
    let values = await Promise.all(dataPath.zip["zip_codes"].map( zip => `(uuid_generate_v4(), ${zip})`));
    return executeQuery(concatQueryInsertValues(dataPath.zip.name, dataPath.zip.params, values));
};

const insertCategories = async () => {
    let values = await Promise.all(dataPath.category["categories"].map( category => `(uuid_generate_v4(), ${category.id}, '${category.name}')
    `));
    return executeQuery(concatQueryInsertValues(dataPath.category.name, dataPath.category.params, values));
};
 
const insertStores = async () => {
    let values = await Promise.all(dataPath.store["stores"].map( store => `(uuid_generate_v4(), '${store.name}', '${store.address}', (SELECT id FROM zip WHERE code=${store.zip}))`));
    return executeQuery(concatQueryInsertValues(dataPath.store.name, dataPath.store.params, values));
};


const dbPopulation = async () => {
    await createDbTables();
    await Promise.all([
        insertZip(),
        insertCategories(),
    ]);
    await insertStores();
    await insertProductsByCategoryData(categoryData);
};

dbPopulation();