import React from "react";

const CharacterPage = React.lazy(() =>
  import("./characterPage").then(module => ({ default: module.CharacterPage }))
);
export { CharacterPage };
