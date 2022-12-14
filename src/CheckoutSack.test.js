import { render, screen, fireEvent, cleanup, getByTestId, waitFor,} from "@testing-library/react";
import ShoppingCart from "./shoppingSack";

describe("This is Checkout test file, Check UI elements", () => {
      afterEach(cleanup);

      it("has name textfield", () => {
            render(<ShoppingCart />); // function Checkout()
            const cart = screen.getByTestId("modal");
            expect(cart).toBeInTheDocument();
      });

      it("has address textfield", () => {
            render(<ShoppingCart />);
            const header = screen.getByTestId("shoppingCart"); // <div className="py-3 bg-warning"> 
            expect(header).toBeInTheDocument();
      });

      it("has payment methods", () => {
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