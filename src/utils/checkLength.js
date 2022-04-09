const checkLength = (type, value, limit) => {
  if (type === "=") {
    return value.length === limit;
  }
  if (type === "<") {
    return value.length < limit;
  }
  if (type === ">") {
    return value.length > limit;
  }
  if (type === ">=") {
    return value.length >= limit;
  }
  if (type === "<=") {
    return value.length <= limit;
  }
};
export default checkLength;
