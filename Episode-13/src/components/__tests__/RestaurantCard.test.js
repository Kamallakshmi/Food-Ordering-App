import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {
  // In RestaurantCard component takes props as resData, it is basically restaurant.info from body component
  render(<RestaurantCard resData={MOCK_DATA} />);

  // Query
  // To check that Mock card is successfully rendered or not
  const name = screen.getByText("Subway");

  //Assertion
  expect(name).toBeInTheDocument();
});

// Test Higher Order Component withPromotedLabel()
const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
it("Should render RestaurantCard with promoted label from HOC", () => {
  render(<PromotedRestaurantCard resData={MOCK_DATA} />);

  // Check if promotion label is rendered correctly
  const promoLabel = screen.getByText((text) => text.includes("FLAT DEAL"));

  expect(promoLabel).toBeInTheDocument();
});
