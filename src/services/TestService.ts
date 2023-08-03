import http from "../config/http.common";
import { ITest } from "../model/TestModel";

const get = () => {
  return http.get("/products", {
    // params: {
    //   size: 2000,
    //   "deleted.equals": false,
    // },
  });
};

const TestService = {
  get,
};

export default TestService;
