import { render, screen } from "@testing-library/react";
import { HomeContent } from "./HomeContent";

describe("Home", () => {
  it("renders a heading", () => {
    render(<HomeContent />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
