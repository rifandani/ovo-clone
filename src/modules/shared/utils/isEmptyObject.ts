const isEmptyObject = (
  obj: Record<string | number | symbol, unknown>,
): boolean => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export default isEmptyObject;
