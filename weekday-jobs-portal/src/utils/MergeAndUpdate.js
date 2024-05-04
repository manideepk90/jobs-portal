export function mergeAndUpdateData(one, two, key = "id") {
  const idMap = {};
  for (const item of one) {
    idMap[item[key]] = item;
  }
  for (const item of two) {
    if (idMap.hasOwnProperty(item[key])) {
      idMap[item[key]] = {
        ...idMap[item[key]],
        ...item,
      };
    } else {
      idMap[item[key]] = item;
    }
  }
  return Object.values(idMap);
}
