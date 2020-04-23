function isIOS () {
  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}

function isInStandaloneMode () {
  return ('standalone' in window.navigator) && (window.navigator.standalone)
}

function renderPopupIOSInstall () {
  const popupElement = `
    <div class="popup_ios_install">
      <button class="popup_ios__close">
        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
        </svg>
      </button>

      <img class="popup_ios__brand" src="favicon.png" alt="App Brand">
      <br>
      <strong class="popup_ios__title">Install Trellu</strong>

      <p class="popup_ios__text">
        Just tap
        <img class="popup_ios__share" src="icons/icon-ios-share.svg" alt="Icon share">
        then 'Add to Home Screen'</p>
    </div>`

  document.querySelector('body').insertAdjacentHTML('afterbegin', popupElement)
}

function showPopupIOSInstall () {
  const popupInstallApp = document.querySelector('.popup_ios_install')
  const popupButtonClose = document.querySelector('.popup_ios__close')
  const popupInstallAppStyle = popupInstallApp.style

  popupInstallAppStyle.visibility = 'visible'
  popupInstallAppStyle.opacity = 1

  popupButtonClose.addEventListener('click', function () {
    closePopupIOSInstall()

    window.localStorage.setItem('popupIOSInstall', 'hidden')
  })
}

function closePopupIOSInstall () {
  const popupInstallApp = document.querySelector('.popup_ios_install')
  const popupInstallAppStyle = popupInstallApp.style

  popupInstallAppStyle.visibility = 'hidden'
  popupInstallAppStyle.opacity = 0
}

if (isInStandaloneMode()) {
  window.localStorage.setItem('popupIOSInstall', 'hidden')
}

const popupIOSInstall = window.localStorage.getItem('popupIOSInstall')

if (isIOS() && !isInStandaloneMode() && popupIOSInstall !== 'hidden') {
  renderPopupIOSInstall()
  showPopupIOSInstall()
}
