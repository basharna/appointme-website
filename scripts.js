document.addEventListener("DOMContentLoaded", function () {
  const googlePlaySection = document.querySelector(".google-play-section");
  const appStoreSection = document.querySelector(".app-store-section");

  // Check if the user is on an iOS or macOS device
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isMac = /Macintosh/.test(navigator.userAgent);
  const isAppleDevice = isIOS || isMac;

  if (isAppleDevice) {
    // On Apple devices, hide Google Play button
    if (googlePlaySection) googlePlaySection.style.display = "none";
  } else {
    // On non-Apple devices, hide App Store button
    if (appStoreSection) appStoreSection.style.display = "none";
  }
});
