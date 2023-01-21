import { render } from "solid-testing-library";
import App from "./index";

describe("<App />", () => {
  it('should render "Hello world!"', () => {
    const { getByText, unmount } = render(() => <App />);
    expect(getByText("Hello world!")).toBeInTheDocument();
    unmount();
  });
});
