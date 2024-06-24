const queries = require('../queries/startingQueries');
const markerCategory = require('../data/initialSystem.json');
const { executeQuery, concatQueryValuesToInsert, setTimeOutForCategoriesHttpCall } = require('../utils');
const dataPath = markerCategory["dataToInsert"];

const mercadonaCategories = () => dataPath["category"].categories.map(category => category.id);
const categories = mercadonaCategories();

const dbCreation = async (queryMethod) => await executeQuery(queries[queryMethod]);
const dbInsertData = async (queryMethod, params=[]) => await executeQuery(queries[queryMethod], params);

const dropTables = async () => {
    const allTablesName = markerCategory["tables"].map(table => table.name).reverse();
    await executeQuery(`DROP TABLE ${allTablesName.join(', ')};`);
};

const createDbTables = async () => {
    const allTablesQuery = markerCategory["tables"].map(table => queries[table.queryMethod]).join('\n');
    await executeQuery(allTablesQuery);
};

const insertZip = async () => {
    const values = await Promise.all(dataPath.zip["zip_codes"].map( zip => `(uuid_generate_v4(), ${zip})`));
    return executeQuery(concatQueryValuesToInsert(dataPath.zip.name, dataPath.zip.params, values));
};

const insertCategories = async () => {
    const values = await Promise.all(dataPath.category["categories"].map( category => `(uuid_generate_v4(), ${category.id}, '${category.name}')
    `));
    return executeQuery(concatQueryValuesToInsert(dataPath.category.name, dataPath.category.params, values));
};

const insertStores = async () => {
    const values = await Promise.all(dataPath.store["stores"].map( store => `(uuid_generate_v4(), '${store.name}', '${store.address}', (SELECT id FROM zip WHERE code=${store.zip}))`));
    return executeQuery(concatQueryValuesToInsert(dataPath.store.name, dataPath.store.params, values));
};

const insertMeasures = async() => {
    const values = await Promise.all(dataPath.measure["measures"].map( measure => `(uuid_generate_v4(), '${measure.unit}')`));
    return executeQuery(concatQueryValuesToInsert(dataPath.measure.name, dataPath.measure.params, values)); 
}

const insertProductsByCategoryData = async () => {
    await setTimeOutForCategoriesHttpCall(categories, dataPath);
};

const dbPopulation = async () => {
    console.time('dbPopulation: ');
    await createDbTables();
    await Promise.all([
        insertZip(),
        insertCategories(),
    ]);
    await insertStores();
    await insertMeasures();
    await insertProductsByCategoryData();
    console.timeEnd('dbPopulation: ');
};

dbPopulation();