import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "./components/Form";

test("renders labels", () => {
  render(<Form />);
  const countryLabel = screen.getByText("Country:");
  expect(countryLabel).toBeInTheDocument();
  const GHGType = screen.getByText("GHG Type:");
  expect(GHGType).toBeInTheDocument();
  const startDate = screen.getByText("Start Date:");
  expect(startDate).toBeInTheDocument();
  const endDate = screen.getByText("End Date:");
  expect(endDate).toBeInTheDocument();
});

test("submit input values", () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<Form />);
  fireEvent.change(getByLabelText("Country:"), { target: { value: "DE" } });
  fireEvent.change(getByLabelText(/GHG Type:/i), {
    target: { value: "ozone" },
  });
  fireEvent.change(getByLabelText(/Start Date:/i), {
    target: { value: "01-01-2019" },
  });
  fireEvent.change(getByLabelText(/End Date:/i), {
    target: { value: "01-01-2020" },
  });

  fireEvent.click(getByText(/Submit/i));

  expect(onSubmit).toBeCalled();
});
