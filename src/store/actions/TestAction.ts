import { Dispatch } from "redux";
import { AxiosError } from "axios";
import { ITest } from "../../model/TestModel";
import TestService from "../../services/TestService";

export const TEST_LOADING = "TEST_LOADING";
export const TEST_SUCCESS = "TEST_SUCCESS";
export const TEST_FAIL = "TEST_FAIL";

interface TestLoading {
  type: typeof TEST_LOADING;
}

interface TestSuccess {
  type: typeof TEST_SUCCESS;
  payload: ITest[];
}

interface TestFail {
  type: typeof TEST_FAIL;
}

export type TestDispatchTypes = TestLoading | TestFail | TestSuccess;

export const GetTest = () => async (dispatch: Dispatch<TestDispatchTypes>) => {
  try {
    dispatch({ type: TEST_LOADING });
    const res = await TestService.get();
    dispatch({ type: TEST_SUCCESS, payload: res.data.products});
  } catch (e) {
    const err = e as AxiosError;
    dispatch({ type: TEST_FAIL });
    console.error(err.response?.status);
  }
};
