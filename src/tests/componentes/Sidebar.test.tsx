import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "../../components/Sidebar";
import * as useFetchModule from "../../hooks/useFetch";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Tests for sidebar", () => {
  const props = { onError: jest.fn() };
  const mockedUseFetch = jest.spyOn(useFetchModule, "useFetch");

  const setup = (mockData: any, mockError: any, mockLoading: any) => {
    mockedUseFetch.mockReturnValue([mockData, mockError, mockLoading]);

    render(<Sidebar {...props} />);
  };

  it("renders Sidebar component with error state", async () => {
    setup(null, true, false);

    // Wait for the error to be detected and handled
    await waitFor(() => {
      expect(props.onError).toHaveBeenCalledWith(true);
    });
  });

  it("renders Sidebar component with loading state", () => {
    setup(null, false, true);
    const spinElement = screen.getByTestId("spinner");

    expect(spinElement).toBeInTheDocument();
  });

  it("renders Sidebar component with data", async () => {
    const mockData = { name: "John Doe", email: "john.doe@example.com" };
    setup(mockData, null, false);

    // Wait for the data to be fetched and displayed
    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });
  });
});
