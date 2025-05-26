// Integration Testing - going to test the cart flow when i click on cart button on header it should test both header component and cart component.
// 1. first we need to check res menu component rendered on the page then only we can add items into the cart
// 2. When load The restaurant menu componet there is network call made. -- so we have to mock the fetch

import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

//4. fake a fetch global call
//5. we now did till RestaurantMenu component rendered on UI
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA), // returning the promise
  });
});

// 3. use act. that comes from test-utils library that takes async function once again
it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  //6. Now we have to click the accordion header to see the list of items then only we can able to add items to the cart
  const accordionHeader = screen.getByText("Veg Pizza (13)");
  fireEvent.click(accordionHeader);
  const foodItems = await screen.findAllByTestId("foodItems");
  expect(foodItems.length).toBe(13);
});
