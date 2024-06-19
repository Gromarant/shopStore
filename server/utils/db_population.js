const queries = require('../queries/startingQueries');
const executeQuery = require('./queryExecutor');
const data = require('../data/initialSystem.json');

const dbCreation = async (queryMethod) => await executeQuery(queries[queryMethod]);
const dbInsertData = async (queryMethod, params=[]) => await executeQuery(queries[queryMethod], params);

// const dbInsertData = async (table_name, params, values) => await executeQuery(queries.insertMethod(table_name, params, values), params);

const createDbTables = async () => {
    const allTablesQuery = data["tables"].map(table => queries[table.queryMethod]).join('\n');
    await executeQuery(allTablesQuery);
};

const dropTables = async () => {
    const allTablesName = data["tables"].map(table => table.name).reverse();
    await executeQuery(`DROP TABLE ${allTablesName.join(', ')};`);
};

const insertZip = async () => await Promise.all(data["zip_codes"].map( zip => dbInsertData(zip.queryMethod, [zip.code])));

const insertCategories = async () => await Promise.all(data["categories"].map( category => dbInsertData(category.queryMethod, [category.id, category.name])));

const insertStores = async () => await Promise.all(data["zip_codes"].map( zip => zip["stores"]
                                            .map( store => dbInsertData(store.queryMethod, [store.name, store.address, zip.code]))));

const dbPopulation = async () => {
    console.time('dbPopulation: ');
    await createDbTables();
    console.log('---- tables created --------');
    await Promise.all([
        insertZip(),
        insertCategories(),
        ]);
    console.log('---- zip and categories inserted --------');
    await insertStores();
    console.log('---- stores inserted --------');
        
    console.timeEnd('dbPopulation: ');
};

dbPopulation();
// dropTables();