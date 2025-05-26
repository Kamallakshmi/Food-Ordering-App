import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// !Whatever we are doing here is called Unit Testing. Testing the component in isolation

// when there are multiple test cases in the same file we should describe it, we can also do nested describe also
describe("Contact Us Page Test Case", () => {
  // After and Before are helper function for the test cases to check
  beforeAll(() => {
    // it will run the callback function before all the test cases
    //console.log("Before All");
  });
  beforeEach(() => {
    // it will run the callback function before each the test cases
    //console.log("Before Each");
  });
  afterAll(() => {
    // it will run the callback function After all the test cases
    // console.log("After All");
  });
  afterEach(() => {
    // it will run the callback function After each the test cases
    // console.log("After Each");
  });
  //! Whenever we are testing UI component inside the react we have to render that component on JSDOM. How? Using render Method
  // Instead of test we can also write it like 'it' it is just alias for test
  // test("Should load contact component", () => { OR it("Should load contact component", () => {
  // This render method take a component which is going to render (here we are going to check Contact component so we pass that as argument)
  test("Should load contact component", () => {
    render(<Contact />); // this will render in JSDOM(like a browser)

    // screen is the object comes from testing library
    const heading = screen.getByRole("heading"); // we check the h tag in contact component.

    //Assertion
    expect(heading).toBeInTheDocument(); // TO check whether is there in the document or not.
    // we are trying to render our contact component into JSDOM - using render() method
    // once component render then chose which element to find (here we chose heading) - using getBYRole() method
    // we are trying find heading inside the contact component - using toBeInTheDocument() method
  });

  test("Should load Button inside my contact component", () => {
    render(<Contact />); // this will render in JSDOM(like a browser)

    // screen is the object comes from testing library
    const button = screen.getByRole("button"); // we check the h tag in contact component.

    //Assertion
    expect(button).toBeInTheDocument(); // TO check whether is there in the document or not.
    // we are trying to render our contact component into JSDOM - using render() method
    // once component render then chose which element to find (here we chose heading) - using getBYRole() method
    // we are trying find heading inside the contact component - using toBeInTheDocument() method
  });

  test("Should load input name inside contact component", () => {
    render(<Contact />); // this will render in JSDOM(like a browser)

    // Querying - this is called query. while quering we will get react element
    // screen is the object comes from testing library
    const inputName = screen.getByPlaceholderText("name"); // we check the h tag in contact component.

    //Assertion
    expect(inputName).toBeInTheDocument(); // TO check whether is there in the document or not.
    // we are trying to render our contact component into JSDOM - using render() method
    // once component render then chose which element to find (here we chose heading) - using getBYRole() method
    // we are trying find heading inside the contact component - using toBeInTheDocument() method
  });

  test("should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    //getAllByRole check all input type( to check multiple items)
    // role of inputboxes is textbox

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
