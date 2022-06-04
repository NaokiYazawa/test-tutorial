import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";
// import user from "@testing-library/user-event";

describe("Counter", () => {
  describe('initialized with defaultCount=0 and description="My Counter"', () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} description="My Counter" />);
    });

    it('renders "Current Count: 0"', () => {
      expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
    });

    it('renders title as "My Counter"', () => {
      expect(screen.getByText(/my Counter/i)).toBeInTheDocument();
    });

    describe("when + is clicked", () => {
      beforeEach(() => {
        fireEvent.click(
          screen.getByRole("button", { name: "Add from Counter" })
        );
      });

      it('renders "Current Count: 1"', () => {
        expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
      });
    });

    describe("when - is clicked", () => {
      beforeEach(() => {
        fireEvent.click(
          screen.getByRole("button", { name: "Subtract from Counter" })
        );
      });

      it('renders "Current Count: -1"', () => {
        expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
      });
    });
  });
});
