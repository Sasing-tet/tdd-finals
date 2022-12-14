import { render, screen, fireEvent, cleanup, waitFor,} from "@testing-library/react";
import ShoppingCart from "./shoppingSack";

describe("This is shoppingSack test file, Check UI elements", () => {
      afterEach(cleanup);

      it("UI information of ShoppingCart", () => {
            render(<ShoppingCart />);
            const cart = screen.getByTestId("modal");
            expect(cart).toBeInTheDocument();
      });

      it("display header of ShoppingCart", () => {
            render(<ShoppingCart />);
            const header = screen.getByTestId("shoppingCart");
            expect(header).toBeInTheDocument();
      });

      it("displays shopping Cart products", () => {
            render(<ShoppingCart />);
            const cartProducts = screen.getByTestId("cart-products");
            expect(cartProducts).toBeInTheDocument();
      });
      it("displays count info", async() => {
            render(<ShoppingCart />);
            const select = screen.queryByTestId("count")
            waitFor (() => fireEvent.click(select).toBeInTheDocument());
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