const fn = function () {
  console.log(this.name);
};

Function.prototype.call2 = function (ctx) {
  ctx.fn = this;
  const args = Array.prototype.slice.apply(arguments, [1]);
  const result = ctx.fn();
  delete ctx.fn;
  return result;
};

fn.call2({ name: 'linke' });
