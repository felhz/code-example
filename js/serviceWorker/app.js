const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('sw.js', {
        scope: './',
      });
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
        // 发送消息给sw
        navigator.serviceWorker.controller.postMessage('Hello from the client');
      }

      navigator.serviceWorker.ready.then((registration) => {
        // 更新sw
        //registration.update()
        console.log('registration', registration);
      });
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

registerServiceWorker();
// 接收sw消息
navigator.serviceWorker.addEventListener('message', (event) => {
  console.log(event.data.msg, event.data.url);
});
