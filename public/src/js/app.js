var deferredPrompt;

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').then(()=>{
        console.log('service worker registered');
    })
}

window.addEventListener('beforeinstallprompt',(event)=>{
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt= event;
    return false;
})

var promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('called after 3 seconds')
    },3000);
})

promise.then((text)=>{
console.log(text);
});

console.log('called asynchronously');