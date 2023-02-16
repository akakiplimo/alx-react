import { Seq } from "immutable";

export default function printBestStudents(obj) {
  const bestStudents = Seq(obj).filter((elm) => elm.score > 70);
  const bestStudentsObj = bestStudents.toJS();
  Object.keys(bestStudentsObj).forEach((key) => {
    bestStudentsObj[key].firstName =
      bestStudentsObj[key].firstName.charAt(0).toUpperCase() +
      bestStudentsObj[key].firstName.slice(1);
    bestStudentsObj[key].lastName =
      bestStudentsObj[key].lastName.charAt(0).toUpperCase() +
      bestStudentsObj[key].lastName.slice(1);
  });
  console.log(bestStudentsObj);
};
