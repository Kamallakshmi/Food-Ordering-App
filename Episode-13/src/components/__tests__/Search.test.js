// This test is integration testing(combination of multiple components)

import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// we are replacing gloabl.fetch by owned defined mock fetch function
global.fetch = jest.fn(() => {
  // Global Fetch function will return a promis so our mock funciton also return a promise
  return Promise.resolve({
    //Global fetch function resolves JSON
    json: () => {
      // That JSON returns a promise one again and we resolve that to get the data
      return Promise.resolve(MOCK_DATA);
    },
  });
}, []);

it("Should search Res List for chai text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  //if we try to render body component, it will fail becasue of fetch api inside body component
  // why it throws error? because Jest uses JSDOM is just like a browser not have entire features of browser(Fecth() given by browser)
  // Solution we have to fake like mock function for fetch()

  // Assertion
  const searchBtn = screen.getByRole("button", { name: "Search" });

  //Update the search bar(input box) - writing something inside input box is a event in itself. when we click on it, it is a onChange event. We have to trigger the onChange event to update the input box
  //if we haveplaceholder, we can use getByText, when we have nothing we can use getByTestId
  // go back to input box and give test id
  const search = screen.getByTestId("searchInput");

  //! adding text inside the input box
  // when type something we have to change the value of inputbox
  // so we have to trigger the event
  // In the second parameter, we have to simulate the value of "e" that we get in search input box in body.js.
  // why we want to simulate e? because e is the value given by browser. while testing JSDOM will not generate 'e' becasue JSDOM is just like a browser not a browser
  fireEvent.change(search, { target: { value: "chai" } }); // why we give value is burger? - 'e' will get value of what we typing inside the input box, we name e has target and give the value as burger manually.

  //! Now we want to make click the search button to search the text what we given
  fireEvent.click(searchBtn);

  // when we type chai in input box it will get 2 res cards listed
  // How to compare 2 res cards? res card is div element we will give data-testid inside it in body file
  const cards = screen.getAllByTestId("resCard");
  console.log(cards.length);
  expect(cards.length).toBe(2);
});

//! why this is integration testing?
// 1. You're testing multiple components together
// Body might use other components like:

// . SearchBar
// . RestaurantCard

// 2. You're simulating network data fetching
// You mock fetch(), which means you're testing how Body integrates with real data (not just rendering a prop).

// The UI depends on fetched data to render restaurant cards.

// ⌨️ 3. You're simulating user interaction
// You simulate typing into an input and clicking a button:

// fireEvent.change(search, { target: { value: "chai" } });
// fireEvent.click(searchBtn);

// ✅ 4. You test the DOM changes based on app logic
// You expect the DOM to change:

// expect(cards.length).toBe(2);
// That means you're testing:

// Component rendering
// Search logic
// Data filtering
// Re-rendering after state update

// 🧠 In contrast, a unit test would just:
// Render a RestaurantCard

// Pass dummy props
// Check name or image exists

// render(<RestaurantCard resData={mockData} />);
// expect(screen.getByText("Subway")).toBeInTheDocument();
// That’s isolated, not integrated.
