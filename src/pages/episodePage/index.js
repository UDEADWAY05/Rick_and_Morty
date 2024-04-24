import React from "react";

const EpisodePage = React.lazy(() =>
  import("./episodePage").then(module => ({ default: module.EpisodePage }))
);
export { EpisodePage };
