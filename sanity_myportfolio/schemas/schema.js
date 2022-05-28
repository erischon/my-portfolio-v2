import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import services from "./services";
import experiences from "./experiences";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([experiences, services]),
});
