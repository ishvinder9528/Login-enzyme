import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Login } from "./Login";
import { shallow } from "enzyme";

configure({ adapter: new Adapter() });

const checkTestFunction1 = require("./checkTestFunction1");

describe("check login data", () => {
  it("login data", (props) => {});
});
