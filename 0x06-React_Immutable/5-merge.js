import Immutable from "immutable";

export function concatElements(page1, page2) {
  const list1 = Immutable.List(page1);
  const list2 = Immutable.List(page2);
  return list1.concat(list2);
}

export function mergeElements(page1, page2) {
  const list1 = Immutable.Map(page1);
  const list2 = Immutable.Map(page2);
  return list1.merge(list2);
}
