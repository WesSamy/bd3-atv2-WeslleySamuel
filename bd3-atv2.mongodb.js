const database = "BD3-noSQL-Produtos"

const collection = "bd3-nosql-atv2"

use(database)

db.createCollection(collection)

// db['bd3-nosql-atv2'].insertMany([
//   {cod_produto: 1, nome: "microondas", valor: 650.00},
//   {cod_produto: 2, nome: "liquidificador", valor: 180.00},
//   {cod_produto: 3, nome: "ventilador", valor: 220.00},
//   {cod_produto: 4, nome: "cafeteira", valor: 250.00},
//   {cod_produto: 5, nome: "aspirador de pó", valor: 480.00},
//   {cod_produto: 6, nome: "secador de cabelo", valor: 130.00},
//   {cod_produto: 7, nome: "forno elétrico", valor: 790.00},
//   {cod_produto: 8, nome: "panela elétrica", valor: 310.00},
//   {cod_produto: 9, nome: "ferro de passar", valor: 150.00},
//   {cod_produto: 10, nome: "batedeira", valor: 270.00}

// ])




