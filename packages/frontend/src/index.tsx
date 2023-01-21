/* @refresh reload */
import { render } from "solid-js/web";
import App from "@features/App";
import "./index.css";

render(() => <App />, document.getElementById("root") as HTMLElement);
