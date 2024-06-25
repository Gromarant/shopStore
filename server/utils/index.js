const httpRequest = require('./httpRequest');
const executeQuery = require('./queryExecutor');
const responseHandler = require('./responseHandler');

const getRandomTimeout = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

const concatQueryValuesToInsert = (table_name, columns_names=[], values) => `INSERT INTO ${table_name} (${columns_names.join(', ')})
VALUES
${values};`;

const getCategoryData = (category_id) => httpRequest(`https://tienda.mercadona.es/api/categories/${category_id}/?lang=es&wh=mad1`);

async function httpCallOfCategory(index, dataPath) {
let categoryDataToInsert; 
    categoryDataToInsert = await getCategoryData(index);
    const current_category = {id: categoryDataToInsert.id, name: categoryDataToInsert.name};

    const values = await Promise.all(categoryDataToInsert['categories'].map(subcategory => {
        for (const product of subcategory['products']) {
            let total_content = product["price_instructions"].unit_size;
            let measure_unit = product["price_instructions"].reference_format;

            if( total_content < 1 ) {
                total_content *= 1000;
                measure_unit = unitForLowerContent(measure_unit)
            };

            const storePath = dataPath.store.stores;
            return `(uuid_generate_v4(), (SELECT id FROM category WHERE id_in_store=${current_category.id}), (SELECT id FROM store WHERE address='${storePath[0].address}'), (SELECT id FROM measure WHERE name='${measure_unit}'), ${product.id}, '${product.display_name}', '${product.thumbnail}', ${total_content}, '${product.packaging}', ${product["price_instructions"].unit_price})`
        }
    }));
    return executeQuery(concatQueryValuesToInsert(dataPath.product.name, dataPath.product.params, values));
};

const setTimeOutForCategoriesHttpCall = async (categories, dataPath) => {
    for(index=0; index <= categories.length -1; index++) {
        setTimeout( httpCallOfCategory, getRandomTimeout(300000, 60000), categories[index], dataPath );
    };
};

const unitForLowerContent = (unit) => unit === 'L' ? "ml" : "g";

module.exports = {
    httpRequest,
    executeQuery,
    responseHandler,
    getRandomTimeout,
    concatQueryValuesToInsert,
    getCategoryData,
    httpCallOfCategory,
    setTimeOutForCategoriesHttpCall,
    unitForLowerContent
}