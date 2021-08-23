function decoratErr(errors) {
  const res = {};
  Object.keys(errors).forEach((err) => (res[err] = errors[err].msg));
  return res;
}

module.exports = { decoratErr };
