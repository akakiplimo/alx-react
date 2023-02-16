import Immutable from "immutable";

export function mergeDeeplyElements(page1, page2) {
  const page1Map = Immutable.Map(page1);
  const page2Map = Immutable.Map(page2);
  return page1Map.mergeDeep(page2Map);
}
