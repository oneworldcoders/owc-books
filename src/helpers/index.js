export const ifObjectExist = (arr, object) => {
  console.log(arr, 'arr')
  console.log(object, 'object')

  const found = arr.some(
    obj =>
      obj.title === object.title &&
      obj.publishedDate === object.publishedDate
  );
  if (found) return true;
  return false
}