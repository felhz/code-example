const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1');
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open('v1');
  await cache.put(request, response);
};

const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener('activate', async (event) => {
  event.waitUntil(enableNavigationPreload());
  console.log('sw: activate');
});

self.addEventListener('install', (event) => {
  console.log('ws:install');
});

self.addEventListener('fetch', async (event) => {
  if (event.request.url.includes('baidu.com')) {
    console.log('baidu');
  }
  //
  const client = await clients.get(event.clientId);
  client.postMessage({
    msg: 'Hey I just got a fetch from you!',
    url: event.request.url,
  });

  if (event.request.url.includes('.css')) {
    let myBlob = new Blob(['.a{color: red;}']);
    let init = { status: 200 };
    const response = new Response(myBlob, init);
    event.respondWith(response);
    if (await caches.match(event.request)) {
      event.respondWith(await caches.match(event.request));
    } else {
      await putInCache(event.request, response);
      event.respondWith(response);
    }
  }
});
self.addEventListener('message', (event) => {
  console.log('from client', event);
});
