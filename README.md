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

## 🧪 Testing

- Unit tests available for:
  - `Header`
  - `Cart`
  - `RestaurantCard`
  - `Contact`
- Mock data used from JSON files for test cases

```bash
npm test
```
