# 🍽️ React Food Ordering App

A responsive and dynamic Swiggy-inspired food ordering web app built using **React.js**, **Redux Toolkit**, **Tailwind CSS**, and **custom hooks**. Designed for performance, scalability, and modular code.

---

## 📖 About The Project

This project simulates a real-world online food delivery platform with features like restaurant browsing, dynamic menus, cart functionality, and search capabilities. Built for learning React best practices—component-driven development, hooks, routing, and Redux store integration.

---

## 💡 Technologies Used

### 🖥️ Frontend Technologies

| Technology                                                                                                       | Description                                    |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)                        | For building the user interface                |
| ![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white)                        | For state management                           |
| ![Tailwind](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)        | Utility-first CSS styling                      |
| ![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat&logo=react-router&logoColor=white) | For client-side routing                        |
| ![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)                           | Testing framework                              |
| ![React Testing Library](https://img.shields.io/badge/React%20Testing%20Library-E33332?style=flat)               | For testing UI components                      |
| ![Context API](https://img.shields.io/badge/Context--API-007ACC?style=flat&logo=react&logoColor=white)           | For user data sharing without prop drilling    |
| ![Lazy Load](https://img.shields.io/badge/Lazy%20Loading-blue?style=flat)                                        | Dynamic import-based code splitting            |
| ![Custom Hooks](https://img.shields.io/badge/Custom%20Hooks-ff69b4?style=flat)                                   | Encapsulate logic like online status, menu API |

---

## 🔙 Backend Technologies (planned for future versions)

| Technology                                                                                          | Description                    |
| --------------------------------------------------------------------------------------------------- | ------------------------------ |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)     | JavaScript runtime environment |
| ![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)  | For building RESTful APIs      |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)     | NoSQL database                 |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=JSON%20web%20tokens&logoColor=white) | For authentication             |
| ![Bcrypt](https://img.shields.io/badge/Bcrypt-3467eb?style=flat)                                    | Password hashing               |

---

## 🗂️ Key Features

- 🧭 **Dynamic Restaurant Listing** – List fetched from Swiggy-style API.
- 🔍 **Search Filter** – Search restaurants by name.
- ⭐ **Top Rated Filter** – Show restaurants with ratings above 4.5.
- 🧾 **Restaurant Menu Page** – Detailed menu for each restaurant.
- ➕ **Cart Functionality** – Add/remove items with Redux Toolkit.
- 💾 **Persisted State** – Redux store keeps track of added items.
- 🔃 **Offline Detection** – Custom hook `useOnlineStatus`.
- 🔄 **Reusable Custom Hook** – `useRestaurantMenu` to fetch menu dynamically.

---

## 🌟 Features & Highlights

### 🧭 Core Frontend Features

- 🍽️ **Dynamic Restaurant Listing** – Real-time restaurant data fetched via API
- 🔍 **Search Functionality** – Live filtering of restaurants based on search text
- ⭐ **Top Rated Filter** – Filters restaurants with rating above 4.5
- 🧾 **Dynamic Menu Rendering** – Menus load based on restaurant selection with route params

---

### 🛒 Cart Management with Redux Toolkit

- ➕ **Add to Cart** – Dynamically add items from menu to cart
- 🛒 **Persistent Cart State** – Centralized state management using Redux Toolkit
- ❌ **Clear Cart Button** – One-click cart reset using dispatch actions
- 🧠 **Smart State Subscription** – Efficient component re-renders using `useSelector`

---

### 🎣 Custom Hooks & Context API

- 🌐 **`useOnlineStatus`** – Displays offline message if internet is disconnected
- 🍴 **`useRestaurantMenu`** – Reusable data-fetching logic for restaurant menu API
- 👤 **Context API Integration** – Global user context for managing username

---

### 🎨 UI/UX Enhancements with Tailwind CSS

- 🌈 **Utility-First Styling** – Built entirely with Tailwind CSS for responsive design
- 🎯 **Component-Based Layout** – Modular components like `RestaurantCard`, `ItemList`, `RestaurantCategory`
- 🧩 **Responsive Grid System** – Cards and lists adapt fluidly across screen sizes
- 💬 **Clean Forms** – Styled inputs for username and contact pages

---

### ⚛️ React Ecosystem Features

- 🧩 **React Router DOM** – SPA routing for Home, About, Contact, Grocery, and Menu pages
- 📦 **Lazy Loading** – Components like `Grocery` loaded on-demand using `React.lazy` & `Suspense`
- ⚡ **Conditional Rendering** – Smart rendering with fallback Shimmer UI
- 🧪 **Unit Testing** – Component tests using Jest and React Testing Library

---

### 🚀 Performance & Scalability

- 📦 **Code Splitting** – Reduces bundle size by loading components only when needed
- ⚠️ **Error Boundary UI** – Custom error page via `Error.js` component
- 🔍 **Optimized Rendering** – Key props used in list mapping to minimize unnecessary re-renders
- ⚙️ **Production Ready Setup** – Easily deployable to Vercel or Netlify

---

> ✨ This frontend-focused architecture ensures smooth performance, modularity, and scalability for a real-world food delivery app.

---

## 🧪 Testing

This project includes unit and integration tests to ensure the stability and correctness of core UI components and interactions.

### 🔬 Frameworks & Tools

- **Jest** – JavaScript testing framework for running test suites
- **React Testing Library** – Used for rendering components and simulating user interactions
- **Mock JSON Data** – Simulated Swiggy API responses for reliable test environments

### ✅ Components Covered

| Component        | Tested Behavior                                  |
| ---------------- | ------------------------------------------------ |
| `Header`         | Logo visibility, navigation links, cart count    |
| `Cart`           | Add/remove items, clear cart, empty cart message |
| `RestaurantCard` | Dynamic data rendering (name, cuisine, rating)   |
| `Contact`        | Form inputs and submit button presence           |
| `Search`         | Search bar functionality and filtered results    |
| `sum.js`         | Sample utility logic for demo unit test          |

## 📬 Let's Connect

If you found this repository helpful, feel free to connect with me:

- 🌐 [GitHub](https://github.com/kamallakshmi)
- 💼 [LinkedIn](https://www.linkedin.com/in/kamal-ramesh/)
- 🐦 [Medium](https://medium.com/@Kamalramesh)

Let's collaborate and build amazing projects together! 🤝
