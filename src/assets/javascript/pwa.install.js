window.isUpdateAvailable = new Promise(function(resolve) {
  if ('serviceWorker' in navigator && ['localhost', '127'].indexOf(location.hostname) === -1) {
    const x = 'sw.js'
    navigator.serviceWorker.register(x)
      .then(registration => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing
          installingWorker.onstatechange = () => {
            switch (installingWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  // new update available
                  resolve(true)
                } else {
                  // no update available
                  resolve(false)
                }
                break;
            }
          }
        }
      }).catch(err => console.error('[SW ERROR]', err))
  }
})
