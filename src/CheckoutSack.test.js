import { render, screen, fireEvent, cleanup, waitFor,} from "@testing-library/react";
import CheckOut from "./checkoutSack";

describe("This is Checkout test file, Check UI elements", () => {
      afterEach(cleanup);

      it("has company logo", () => {
            render(<CheckOut />); // function Checkout()
            const img = screen.queryByTestId("logo");
            expect(img).toBeDefined();
      });

      it("has textfield for name", () => {
            render(<CheckOut />);
            const input1 = screen.queryByPlaceholderText("Full Name:");
            expect(input1).toBeDefined();
      });

      it("has textfield for address", () => {
            render(<CheckOut />);
            const input2 = screen.queryByPlaceholderText("Address:");
            expect(input2).toBeDefined();
      });

      it("has three payment methods", () => {
            render(<CheckOut />);
            const input3 = screen.queryAllByRole("payment");
            expect(input3).toBeDefined();
      });

      it("has order details", () => {
            render(<CheckOut />);
            const details = screen.queryByTestId("order-details");
            expect(details).toBeDefined();
      });

});   

describe("button in CheckOut", () => {
      afterEach(cleanup);

      it("will execute confirm checkout button", async() => {
            render(<CheckOut />);
            const btn = screen.queryByTestId("checkout-btn")
            waitFor (() => fireEvent.click(btn).toBeInTheDocument());
      });

      it("has  close button", async() => {
            render(<CheckOut />);
            const btn2 = screen.queryByTestId("close-button")
            waitFor (() => fireEvent.click(btn2).toBeInTheDocument());
      });
});