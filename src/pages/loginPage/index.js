import React from "react";

const LoginPage = React.lazy(() =>
  import("./loginPage").then(module => ({ default: module.LoginPage }))
);
export { LoginPage };
