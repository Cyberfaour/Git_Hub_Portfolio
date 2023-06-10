function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function acceptCookies() {
  setCookie("cookieConsent", "true", 365);
  document.getElementById("cookieBanner").style.display = "none";
}

function rejectCookies() {
  setCookie("cookieConsent", "false", 365);
  document.getElementById("cookieBanner").style.display = "none";
}

function checkCookieConsent() {
  var cookieConsent = getCookie("cookieConsent");
  if (cookieConsent) {
    document.getElementById("cookieBanner").style.display = "none";
  }
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

checkCookieConsent();

function updateViewCount() {
  var countElement = document.getElementById("count");
  if (localStorage.viewCount) {
    localStorage.viewCount = Number(localStorage.viewCount) + 1;
  } else {
    localStorage.viewCount = 1;
  }
  countElement.textContent = localStorage.viewCount;
}

updateViewCount();