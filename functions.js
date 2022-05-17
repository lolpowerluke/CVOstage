function checkDarkLightCookie() {
  if(document.cookie.split("; ").find(row => row.startsWith("dark"))) {
    document.getElementById("body").className = "dark";
  } else if(document.cookie.split("; ").find(row => row.startsWith("light"))) {
    document.getElementById("body").className = "light";
  } else {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.cookie="dark; expires=" + tomorrow + "; path=/";
  }
}
function darklight() {
  if (document.getElementById("body").classList.contains('dark')) {
    document.getElementById("body").classList.remove('dark');
    document.getElementById("body").classList.add('light');
    document.getElementById("darklightswitch").textContent="switch to dark mode";
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.cookie="light; expires=" + tomorrow + "; path=/";
  } else {
    document.getElementById("body").className = "dark";
    document.getElementById("darklightswitch").textContent="switch to light mode";
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.cookie="dark; expires=" + tomorrow + "; path=/";
  }
}