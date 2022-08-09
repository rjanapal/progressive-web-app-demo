self.addEventListener('install',(event)=>{
    console.log('service worker installed successfully',event);
})

self.addEventListener('activate',(event)=>{
    console.log('service worker Activation successfully',event);
    return self.clients.claim();
})

self.addEventListener('fetch',(event)=>{
    console.log('service worker fetching events',event);
})