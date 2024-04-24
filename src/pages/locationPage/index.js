import React from "react";

const LocationPage = React.lazy(() =>
  import("./locationPage").then(module => ({ default: module.LocationPage }))
);
export { LocationPage };