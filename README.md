# E-commerce Cart & Wishlist Project

This project is a simple e-commerce application that allows users to view products, add them to the cart, and wishlist, and manage their cart items.

## Live Website Link

Live Link:

## Requirement Document

Requirement Document: https://drive.google.com/file/d/1nXGPN9eh4VS64tr18uFy9qKnHVrySU9x/view?usp=sharing

## React Fundamentals Used in the Project

1. JSX: Used for creating UI components and rendering HTML elements in React components.
2. Components: The application is built around React components, such as `CartItem`, `WishlistItem`, `Details`, etc.
3. State Management: Used `useState` hook to manage local state (cart, wishlist).
4. Props: Data is passed down to child components via props (e.g., product data to `CartItem`, `WishlistItem`).
5. Event Handling: Functions are triggered via events like `onClick` to add/remove items from the cart and wishlist.
6. Effect Hook (`useEffect`): To load and update the cart and wishlist data from `localStorage`.
7. Conditional Rendering: Used to show different buttons depending on whether an item is in the cart or wishlist.
8. React Router: Used for navigating between different pages, such as `Product Details`, `Cart`, and `Wishlist`.
9. Array Methods: Utilized `map()`, `filter()`, and `reduce()` to handle product lists and calculate the total price in the cart.

## Data Handling and Management

The application uses local storage to persist the data of the cart and wishlist across browser sessions.

- Cart and Wishlist: Data is stored in the browser's `localStorage` so that users can keep their items even after closing the browser.
- Add/Remove from Cart: When items are added to or removed from the cart, the changes are immediately reflected in `localStorage`.
- React State Management: React's `useState` hook is used for local state management, which ensures the UI updates dynamically as cart and wishlist items change.

## Features of the Website

1. Product Listing: Displays a list of products available for purchase.
2. Add/Remove to Cart: Allows users to add products to their cart and remove items if they change their mind.
3. Add/Remove to Wishlist: Users can add products to their wishlist and remove them from the wishlist if needed.
4. Cart Total Calculation: Automatically calculates the total price of all items in the cart.
5. Persistent Data: Cart and wishlist data are stored in `localStorage`, allowing users to retain their selections even after refreshing the page or closing the browser.

---
