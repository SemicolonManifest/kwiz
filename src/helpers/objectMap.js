/* API response parsed JSON can not be .map(), this helper does the equivalent */

const objectMap = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));

export default objectMap;