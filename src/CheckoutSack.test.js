import { render, screen, fireEvent, cleanup, getByTestId, waitFor,} from "@testing-library/react";
import CheckOut from "./checkoutSack";

describe("This is Checkout test file, Check UI elements", () => {
      afterEach(cleanup);

      it("has name textfield", () => {
            render(<CheckOut />); 
            const name = screen.getByTestId("name");
            expect(name).toBeInTheDocument();
      });

      it("has address textfield", () => {
            render(<CheckOut />);
            const addr = screen.getByTestId("address"); 
            expect(addr).toBeInTheDocument();
      });

      it("has payment methods", () => {
            render(<CheckOut />);
            const paym = screen.getByTestId("payment-methods"); 
            expect(paym).toBeInTheDocument();
      });
      // count
      it("shipping fee", () => {
            render(<CheckOut />);
            const shipping = screen.getByTestId("shipping-fee"); // <div className="py-3 bg-warning"> 
            expect(shipping).toBeInTheDocument();
      });

      it("displays Total amount of checkout items", () => {
        render(<CheckOut />);
        const cartProducts = screen.getByTestId("total"); // <div className="py-3 bg-warning"> 
        expect(cartProducts).toBeInTheDocument();
  });
});   

describe("buttons in shoppingCart", () => {
      afterEach(cleanup);
      it("will execute alert message onclick", async() => {
            render(<CheckOut />);
            const btn = screen.queryByTestId("btn-remove-btn")
            waitFor (() => fireEvent.click(btn).toBeInTheDocument());
      });
      it("will execute confirm checkout button", async() => {
            render(<CheckOut />);
            const btn = screen.queryByTestId("btn-checkout-btn")
            waitFor (() => fireEvent.click(btn).toBeInTheDocument());
      });
});