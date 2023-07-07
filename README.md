# Stripe webshop

This is a e-commerce web application built using the Angular framework. It provides users with a comprehensive catalog of goods that can be easily filtered and sorted. With a user-friendly interface and seamless integration of essential features like a shopping cart and secure checkout using Stripe, webshop offers a seamless shopping experience for customers.

[DEMO LINK](https://alexanderkolomiiets.github.io/stripe-webshop/) (without Stripe on checkout)

## Features

1. **Goods Catalog:** Explore a wide range of products available in the catalog. The catalog provides convenient filtering and sorting options, allowing users to quickly find the desired goods based on category.

2. **Shopping Cart:** Add products to your shopping cart with just a few clicks. The cart displays the selected goods along with their quantities, prices, and total amounts. You can easily increase or decrease the quantity of items in the cart, providing flexibility and control over your purchase.

3. **Cart Management:** Clear the entire shopping cart with a single action. If you change your mind about the items in the cart, you can easily remove them all at once, allowing you to start fresh or add different products.

4. **Secure Checkout:** Complete your purchase with confidence using the secure Stripe checkout integration. WebCatalog ensures that your payment information is protected and guarantees a safe transaction process.

## Technologies Used

Stripe webshop is built using the following technologies:

- Angular: A popular and robust JavaScript framework for building web applications.
- Stripe: A secure payment processing platform that enables smooth and reliable transactions.
- HTML/CSS: Standard web technologies used for structuring and styling the application.

## Getting Started

To run Stripe webshop locally on your machine, follow these steps:

1. Clone the repository from GitHub: `git clone https://github.com/AlexanderKolomiiets/stripe-webshop.git`
2. Navigate to the project directory: `cd stripe-webshop`
3. Install the dependencies: `npm install`
4. Configure the Stripe integration by providing your private and public Stripe API keys inside `server/server.js` and `cart.component.ts` respectively.
5. Build and run the application: `ng serve`
6. Run the server in terminal `node server/server.js` 
7. Open your web browser and visit `http://localhost:4200` to access Stripe webshop.
