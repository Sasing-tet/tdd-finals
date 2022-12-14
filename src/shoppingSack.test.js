import { render, screen, fireEvent, cleanup, getByTestId, waitFor,} from "@testing-library/react";
import ShoppingCart from "./shoppingSack";

describe("This is shoppingSack test file, Check UI elements", () => {
      afterEach(cleanup);

      it("UI information of ShoppingCart ", () => {
            render(<ShoppingCart />); // function Checkout()
            const cart = screen.getByTestId("modal");
            expect(cart).toBeInTheDocument();
      });

      it("display header of ShoppingCart", () => {
            render(<ShoppingCart />);
            const header = screen.getByTestId("shoppingCart"); // <div className="py-3 bg-warning"> 
            expect(header).toBeInTheDocument();
      });

      it("displays shopping Cart products", () => {
            render(<ShoppingCart />);
            const cartProducts = screen.getByTestId("cart-products"); // <div className="py-3 bg-warning"> 
            expect(cartProducts).toBeInTheDocument();
      });
      // count
      it("displays count info", () => {
            render(<ShoppingCart />);
            const cartProducts = screen.getByTestId("count"); // <div className="py-3 bg-warning"> 
            expect(cartProducts).toBeInTheDocument();
      });
});   

describe("buttons in shoppingCart", () => {
      afterEach(cleanup);
      it("will execute close button", async() => {
            render(<ShoppingCart />);
            const btn = screen.queryByTestId("btn-remove-btn")
            waitFor (() => fireEvent.click(btn).toBeInTheDocument());
      });
      it("will execute checkout button", async() => {
            render(<ShoppingCart />);
            const btn = screen.queryByTestId("btn-checkout-btn")
            waitFor (() => fireEvent.click(btn).toBeInTheDocument());
      });
});