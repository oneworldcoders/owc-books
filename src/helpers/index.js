export const ObjectExist = (arr, object) => {
  const found = arr.some(obj => {
    return (
      obj.title === object.title && obj.publishedDate === object.publishedDate
    );
  });
  if (found) return true;
  return false;
};
