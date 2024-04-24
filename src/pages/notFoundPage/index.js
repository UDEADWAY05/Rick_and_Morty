import React from "react";

const NotFoundPage = React.lazy(() =>
  import("./notFoundPage").then(module => ({ default: module.NotFoundPage }))
);
export { NotFoundPage };
