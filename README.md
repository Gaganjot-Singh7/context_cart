# Context Cart using Context API

This project demonstrates a simple shopping cart implementation using React's Context API. It allows managing the state of the shopping cart across multiple components without prop drilling.

## Features

- Add items to the cart

- Calculate total price

## Usage

1. **Installation**: Clone the repository and install dependencies.

    ```bash
    git clone <repository-url>
    cd context-cart
    npm install
    ```

2. **Run the App**: Start the development server.

    ```bash
    npm start
    ```

3. **Usage in Code**:

    - Import the `CartContextProvider` component in your app:

        ```javascript
        import CartContextProvider from './CartContextProvider';
        ```

    - Wrap your app with the `CartContextProvider`:

        ```javascript
        ReactDOM.render(
            <CartContextProvider>
                <App />
            </CartContextProvider>,
            document.getElementById('root')
        );
        ```

    - Access the cart context in any component using the `useCart` hook:

        ```javascript
        import { useCart } from './CartContextProvider';

        const CartComponent = () => {
            const { cartItems, addItemToCart, removeItemFromCart, updateItemQuantity } = useCart();

            // Your component logic here
        };
        ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.

## License

This project is licensed under the [MIT License](LICENSE).
