import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "./Sidebar";

describe("Tests for sidebar", () => {
  test("check if sidebar is getting rendered", () => {
    render(<Sidebar />);
    const linkElement = screen.getByText(/DASHBOARD/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("check if 'BLOGS' menu item is getting rendered", () => {
    render(<Sidebar />);
    const linkElement = screen.getByText(/BLOGS/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Check if user api call is getting response", async () => {
    let mockData = { name: "Leanne Graham" };
    jest.spyOn(global as any, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(<Sidebar />);

    await waitFor(() => {
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    });
  });

  test("Check user name doest get displayed on error", async () => {
    const mockError = new Error("API error");
    jest.spyOn(global as any, "fetch").mockRejectedValueOnce(mockError);

    render(<Sidebar />);

    await waitFor(() => {
      expect(
        screen.queryByLabelText("Error fetching data: API error")
      ).not.toBeInTheDocument();
    });
  });
});
