import { ITest } from "../../model/TestModel";
import { TestDispatchTypes } from "../actions/TestAction";
import { TEST_FAIL, TEST_LOADING, TEST_SUCCESS } from "../actions/TestAction";

interface Iteststate {
  loading: boolean;
  tests?: ITest[];
}

const initalState: Iteststate = {
  loading: false,
  tests: [],
};

const testReducer = (
  state: Iteststate = initalState,
  action: TestDispatchTypes
): Iteststate => {
  switch (action.type) {
    case TEST_FAIL:
      return {
        loading: false,
      };
    case TEST_LOADING:
      return {
        loading: true,
      };
    case TEST_SUCCESS:
      return {
        loading: false,
        tests: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default testReducer;
