import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as useFetchModule from "./hooks/useFetch";

jest.mock("react-router-dom", () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useParams: jest.fn(),
    useHistory: () => ({
      push: jest.fn(),
    }),
  };
});

const mockedUseFetch = jest.spyOn(useFetchModule, "useFetch");

const setup = (mockData: any, mockError: any, mockLoading: any) => {
  mockedUseFetch.mockReturnValue([mockData, mockError, mockLoading]);

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

describe("Test for App component", () => {
  test("renders app correctly", () => {
    const mockData = { name: "John Doe", email: "john.doe@example.com" };

    setup(mockData, null, false);

    const linkElement = screen.getByText(/DASHBOARD/i);
    expect(linkElement).toBeInTheDocument();
  });
});
