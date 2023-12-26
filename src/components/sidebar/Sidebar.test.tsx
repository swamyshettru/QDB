import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "./Sidebar";

describe("Test for sidebar", () => {
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

  test("Check if user api call is getting response", () => {
    let data = { name: "Leanne Graham" };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => data,
      })
    );
    render(<Sidebar />);
    expect(screen.getByText("Leanne Graham")).toBeVisible();
  });

  test("Check user name doest get displayed on error", () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        json: () => {
          status: 400;
        },
      })
    );
    render(<Sidebar />);
    expect(screen.getByText("Leanne Graham")).not.toBeVisible();
  });
});
