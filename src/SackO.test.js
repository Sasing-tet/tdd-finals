import { render, screen, fireEvent, cleanup, waitFor, } from "@testing-library/react";
import ProductPage from "./SackO";
import "./ItemsData";
import Item from "./Item";

describe("This is a Shopping order Project", () => {
  afterEach(cleanup);

  it("has a menu header", () => {
    render(<ProductPage />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("has a search bar", () => {
    render(<ProductPage />);
    const input = screen.getByTestId("srchbar");
    expect(input).toBeInTheDocument();
  });

  it("has t-shirt items", () => {
    render(<ProductPage />);
    const items = screen.getByTestId("items");
    expect(items).toBeInTheDocument();
  });
  
  it("has a footer", () => {
    render(<ProductPage />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

});

describe("Mock add to sack button", () => {
  afterEach(cleanup);

  it("has add to sack button on item hover", async() => {
    render(<Item />);
    fireEvent.mouseEnter(screen.getByTestId("products-on-hover"));
    await waitFor(() => screen.getByTestId("add-to-sack"));
  });

  it("has item detail modal", async() => {
    render(<Item />);
    const btn = screen.queryByTestId("add-to-sack")
    waitFor (() => fireEvent.click(btn).toBeInTheDocument());
  });});

describe("Mock cart button", () => {
  afterEach(cleanup);
    
  it("has shopping cart", async() => {
    render(<ProductPage />);
    const btn = screen.getByTestId("sack")
    waitFor (() => fireEvent.click(btn).toBeInTheDocument());
  });
});

