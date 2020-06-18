self.addEventListener('push', event => {
  const data = event.data.json()

  // show notification to the browser
  // frontend can modify appropriately
  self.registration.showNotification(data.title, {
    body: data.desc,
    icon: 'http://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png'
  })

})
