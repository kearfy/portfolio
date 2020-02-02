'use strict';
const version = 1;

this.addEventListener('install', e => e.waitUntil(caches.open('site-offline-' + version).then(cache => cache.add('/offline.html'))));
this.addEventListener('fetch', e => {
    //check if client expects a plain text/html page, else try to respond with any other resource we can obtain.
    if (e.request.mode === 'navigate' || (e.request.method === 'GET' && e.request.headers.get('accept').includes('text/html'))) {
        if (e.request.url.includes('serveronline')) {
            e.respondWith(fetch('/'));
        } else {
            //send the page their requesting, else respond with the offline page.
            e.respondWith(fetch(e.request.url).catch(err => caches.match('/offline.html')));
        }
    } else {
        //check if resource is available in cache, else
        e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
    }
})
