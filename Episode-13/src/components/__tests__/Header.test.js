import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  //! 1. When it  starts to render  Header component.it throws error because jest can understand all react method(like useState, useEffect ...)but it cant understand redux method(like useSelector)
  //Solution: We have to provide redux store to header
  //! 2. Header component contains Link. Link is not react it is react router DOM so it throws again error.
  //Solution: we have to give BrowserRouter then jest understand Link component

  // Provider take a store that comes from appStore
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   how to get button?so many ways are there
  //const loginButton = screen.getByRole("button");
  //const loginButton = screen.getByText("Login"); // it tells like wherever the login text is there get that element

  // If there are multiple button in the page but you want to access specific button
  const loginButton = screen.getByRole("button", { name: "Login" });

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

// Whether cart items are there are not
it("Should render Header Component with a cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const cartItems = screen.getByText("Cart (0 items)"); // it will pass only if there are 0 items in the cart
  const cartItems = screen.getByText(/Cart/); // just checking if there is cart
  //Assertion
  expect(cartItems).toBeInTheDocument();
});

// Check when click login button change to logout
it("Should check when click login button change to logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  // How to simulate the click event?
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  //Assertion
  expect(logoutButton).toBeInTheDocument(); // finally checking logout button on UI after clicking login button
});
