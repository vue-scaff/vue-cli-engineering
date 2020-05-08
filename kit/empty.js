export default target => {
  if (target === undefined) {
    return true;
  }

  for (let i in target) {
    return false;
  }

  return true;
};
