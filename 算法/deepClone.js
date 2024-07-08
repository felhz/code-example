const deepClone = (obj, map = new WeakMap()) => {
  const target = Array.isArray(obj) ? [] : {};
  if (map.get(obj)) {
    return map.get(obj);
  }
  map.set(obj, target);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        target[key] = deepClone(obj[key], map);
      } else {
        target[key] = obj[key];
      }
    }
  }
  return target;
};
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('error');
  }
  const self = this;
  const fBound = function () {
    self.apply(
      this instanceof self ? this : context,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
  fBound.prototype = Object.create(this.prototype);
  return fBound;
};

Function.prototype._bind = function (context) {
  let fn = this;
  return function () {
    return fn.apply(context, arguments);
  };
};
let a = 1;
let c = () => {
  while (a < 10) {
    a++;
    console.log(a);
    return;
  }
};
