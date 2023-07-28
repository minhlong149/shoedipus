# G-Sneaker

A simple shopping cart as part of GO Intern Assignment.

## Table of Contents

- [G-Sneaker](#g-sneaker)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Features](#features)
  - [UI Design](#ui-design)
  - [Authors](#authors)

## Getting Started

After cloning the project, install all the dependencies, then build the project and run the server. *I'm using `yarn` as my package manager, but `npm` should work just fine.*

```bash
yarn
yarn build
yarn start
```

> You can also use `yarn dev` to run the server in development mode.

## Features

- Display all products data in `Our Products` section:
  - Each product will have name, description, price, image and `Add To Cart` button.
  - User are able to click on `Add To Cart` button to add the target product to their cart. Added product will have a check mark icon instead.

- Display all added products in `Your Cart` section:
  - Each product in cart should have name, price, image, increase/decrease amount button and remove button.
  - User are able to increase/decrease amount of a product in cart. When product's amount is decreased to zero, that product will be removed from cart naturally.
  - User able to remove a product from cart.
  - Show total price of all products in car. When user increase/decrease product's amount or remove product, total price should be re-calculate correctly.
  - When there are no products in cart, we should show `Your cart is empty` message.

- Follow responsive [UI design](#ui-design) from [desktop demo](./screenshots/desktop-demo.gif) and [mobile demo](./screenshots/mobile-demo.gif).

## UI Design

- Images & Icons:
  - [`./src/assets`](./src/assets)
  - Product images are fetched directly from remote url in data
- Fonts:
  - [Rubik](https://fonts.google.com/specimen/Rubik?query=Rubik)
- Colors:
  - White text: `#FFFFFF`
  - Black background: `#303841`
  - Yellow primary color: `#F6C90E`
  - Gray accent: `#777777`
- CSS Properties:
  - Border Radius: `28px`
  - Card Padding: 12px `28px`
  - Spacing between 2 Cards: `40px`
  - Circle Product Item Size In Cart: `90px`
  - Plus, Minus, Remove Button Size: `28px`
  - Spacing between 2 Product Items in Your Cart: `40px`
  - Spacing between 2 Product Items in Our Products: `80px`

## Authors

- Long Nguyen [@minhlong149](https://github.com/minhlong149)
