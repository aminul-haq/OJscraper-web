if (!window.localStorage.getItem("access_token")) {
  window.location.replace("/login.html");
}

function logout() {
  window.localStorage.removeItem("access_token");
  window.localStorage.removeItem("refresh_token");
  window.location.href = "/login.html";
}
