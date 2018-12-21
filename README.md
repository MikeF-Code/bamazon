# Bamazon

This is a CLI app for simulating simple transactions on an ecommerce site.  It utilizes MySQL for DB and data storage/serving, as well as Node.js for the CLI.

*Note: Please ensure you have installed all dependencies in order for this app to run correctly.*

## Usage

You'll need to have a MySQL server instance available to house the db and data that will be created upon running the contents of __schema.sql__.  You will need to edit the *connection* variable within __bamazonCustomer.js__ with the requisite connection config for your MySQL server instance.  After running *node bamazonCustomer.js* in your command line, you will be presented with a list of products and their prices, like so:

![Product List](.\images\product_list.PNG)

Simply follow the prompts on-screen to select a product and desired quantity to order.  If there is enough product in stock to fulfill the order, you will be presented with a total cost for your order.  If there is not enough product in stock, you will be informed as such and kicked back to the Product List.