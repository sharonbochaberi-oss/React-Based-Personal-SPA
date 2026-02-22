import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { ProductProvider } from "../context/ProductContext";

describe("App Routing", () => {
  test("renders products page when route is /products", () => {
    render(
      <ProductProvider>
        <MemoryRouter initialEntries={["/products"]}>
          <App />
        </MemoryRouter>
      </ProductProvider>
    );

    // Use getByRole to target the page heading
    const heading = screen.getByRole("heading", { name: /Products/i });
    expect(heading).toBeInTheDocument();
  });
});