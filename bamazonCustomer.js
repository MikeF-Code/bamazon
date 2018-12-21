const mysql = require("mysql");
const inquirer = require("inquirer");
require("dotenv").config();

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PW,
    database: "bamazon"
  });

function stock() {
    console.log(`  ID  |  Product Name  |  Price  `)
    const stock = 'SELECT * FROM products'
    connection.query(stock, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(`   ${res[i].item_id}  | ${res[i].product_name} | $${res[i].price} `);
        }
    })
    setTimeout(function(){
        order();
    }, 500)
}

function order() {
    inquirer
      .prompt([{
          name: "id",
          type: "input",
          message: "What is the ID Number of the Product you wish to order?"
      }, {
          name: "quantity",
          type: "input",
          message: "How many of this Product would you like to purchase?"
      }])
      .then(function(answer) {
        let amount = parseInt(answer.quantity);
        let query = "SELECT item_id, price, stock_quantity FROM products WHERE item_id = ? AND stock_quantity >= ?";
        connection.query(query, [answer.id, answer.quantity], function(err, res) {
            if (err) throw err;
            let result = res;
            if (result != '') {
                let totalCost = amount * res[0].price;
                let newStock = "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?";
                connection.query (newStock, [answer.quantity, answer.id], function(err, res) {
                    if (err) throw err;
                    console.log("Purchase successful!  Your total cost is $" + totalCost);
                });
                setTimeout(function(){
                    stock();
                }, 500)
            } else {
                console.log("Insufficient Quantity!");
                setTimeout(function(){
                    stock();
                }, 500)
            }
        })
      })
  }

connection.connect(function(err) {
    if (err) throw err;
    stock();
});