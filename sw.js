const staticCacheName = "static-site-v4"
const dynamicCacheName = "dinamic-site"

const ASSETS = [
    "/",
    "/index.html",
    "/src/index.css",
    "/src/App.jsx",
    "/src/index.jsx",
    "/src/pages/mainPage",
    "/src/components/NavBar",
    "/src/assets/img/back_4.png",
    "/src/assets/img/close.svg",
    "/src/assets/img/logo.png",
    "/src/assets/img/menu.svg",
    "/src/assets/img/rick-sanchez.svg",
    "/src/assets/img/logOut-icon.svg",
    "/src/pages/errorPage",
    "/src/pages/notFoundPage/notFoundPage.jsx",
    "/src/pages/notFoundPage/NotFound.module.scss"
]

self.addEventListener('install', async (event) => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll(ASSETS)
});

self.addEventListener('activate', async (event) => {
    const cashesKeysArr = await caches.keys()
    await Promise.all(cashesKeysArr.filter(key => key !== staticCacheName && key !== staticCacheName).map(key => caches.delete(key)))
});

self.addEventListener('fetch', (event) => {
    event.respondWith(cacheFirst(event.request))
});

async function cacheFirst(request) {
    const cached = await caches.match(request);
    try {
        return cached ?? await fetch(request).then(response => {
            return networkFirst(request);
        });
    } catch (error) {
        return networkFirst(request)
    }

}

async function networkFirst(request) {
    const cache = await caches.open(dynamicCacheName);
    try {
        const response = await fetch(request)
        await cache.put(request, response.clone())
        return response
    } catch (error) {
        const cached = await cache.match(request);
        return cached ?? await caches.match("/src/pages/notFoundPage/notFoundPage.jsx");
    }
}