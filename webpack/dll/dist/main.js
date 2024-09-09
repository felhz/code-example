(() => {
  var r = {
      713: (r, e, t) => {
        r.exports = t(729)(41);
      },
      729: (r) => {
        'use strict';
        r.exports = vendor_library;
      },
    },
    e = {};
  function t(o) {
    var s = e[o];
    if (void 0 !== s) return s.exports;
    var i = (e[o] = { exports: {} });
    return r[o](i, i.exports, t), i.exports;
  }
  (() => {
    'use strict';
    var r = t(713);
    console.log(r.Children, 11111);
  })();
})();
