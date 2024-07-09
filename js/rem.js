// 隔离作用域，避免全局变量的污染
// eslint-disable-next-line
!(function () {
  const win = window;
  const doc = win.document;
  const docEl = doc.documentElement;
  let tid;
  const baseFontSize = 100;
  const designWidth = 750;
  function refreshRem() {
    const clientWidth = docEl.getBoundingClientRect().width;
    const rem = Math.min((clientWidth * baseFontSize) / designWidth, 100);
    console.log('rem', rem);
    document.documentElement.style.fontSize = rem + 'px';
  }
  win.addEventListener(
    'resize',
    function () {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 100);
    },
    false
  );

  win.addEventListener(
    'pageshow',
    function (e) {
      if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      }
    },
    false
  );
  refreshRem();
})();
