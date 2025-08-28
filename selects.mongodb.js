const database = "BD3-noSQL-Produtos"

const collection = "bd3-nosql-atv2"

use(database)

db.createCollection(collection)

// {/* Verificando se o produto é maior que 700.00 */}
// db['bd3-nosql-atv2'].find(
//    {valor: {$gt:700}}
// );

{/*Verificando se o produto é menor que 450 */}
// db['bd3-nosql-atv2'].find(
//    {valor: {$lt:450}}
// );

{/*Vericando se o produto é maior igual a 500 e menor igual a 950*/}
db['bd3-nosql-atv2'].find(
   {valor: {$gte:500, $lte:950}}
);