// const staticCacheName = "static-site"
// const ASSETS = [
//     "/",
//     "/index.html",
//     "/index.css",
//     "/src/App.jsx",
//     "/src/index.jsx",
//     "/src/pages/mainPage",
//     "/src/components/NavBar",
//     "/src/assets/back_4",
//     "/src/assets/close.svg",
//     "/src/assets/logo.png",
//     "/src/assets/menu.svg",
//     "/src/assets/rick-sanchez.svg",
//     "/src/assets/logOut-icon.svg"
// ]

// self.addEventListener('install', async (event) => {
//     const cache = await caches.open(staticCacheName);
//     await cache.addAll(ASSETS)
// });

// self.addEventListener('activate', (event) => {
//     console.log("sw has been activated")
// });

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request).then(cacheRes => {
//             return cacheRes || fetch(event.request);
//         })
//     );
// });