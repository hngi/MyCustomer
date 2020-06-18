const publicValidKey = 'BPhABURrW0v2XD0ICIS8Y8Sp8PUZbRtcX0sirE0Z2Ok5GAmOm-MY-K1GXdhZ2tyxiYrY2ijo7fGFyUnFT5gf-6o'

// check if browser has a service worker
if ('serviceWorker' in navigator) {
  run().catch(err => console.error(err))
}

async function run () {
  // register worker to listen for push events
  const registeration = await navigator.serviceWorker
    .register('./worker.js', { scope: '/' })    

  const subscription = await registeration.pushManager.
    subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicValidKey)
    })

  // Frontend should pass in the user id 
  // for use in querying the debt table
  const payload = {
    user_id: 5,
    sub: subscription
  }

  // data is sent to backend to prepare notification
  // Notice that a relative path is provided because the public dirctory
  // which mimics the frontend is on the same server.
  // When the frontend is separated from the backend, this '/subscribe' url will need to be an
  // absolute path.
  await fetch('/subscribe', {
    method: 'POST', 
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
 
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
 
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}