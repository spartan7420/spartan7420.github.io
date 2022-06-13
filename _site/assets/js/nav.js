const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    }
    else {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
});

// this checks whether system dark mode is set 
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
// this checks for session storage telling to override
// the system preferences 
let theme = sessionStorage.getItem('theme');


function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("theme-toggle").style.color = "#efefef";
    // this clears the session storage
    sessionStorage.setItem("theme", "");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("theme-toggle").style.color = "#303135";
    sessionStorage.setItem("theme", "");
  }
}
systemInitiatedDark.addListener(prefersColorTest);

function modeSwitcher() {
  // it’s important to check for overrides again
  let theme = sessionStorage.getItem("theme");
  // checks if reader selected dark mode
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    sessionStorage.setItem("theme", "light");
    document.getElementById("theme-toggle").style.color = "#303135";
    // checks if reader selected light mode
  } else if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    sessionStorage.setItem("theme", "dark");
    document.getElementById("theme-toggle").style.color = "#efefef";
    // checks if system set dark mode
  } else if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute("data-theme", "light");
    sessionStorage.setItem("theme", "light");
    document.getElementById("theme-toggle").style.color = "#303135";
    // the only option left is system set light mode
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    sessionStorage.setItem("theme", "dark");
    document.getElementById("theme-toggle").style.color = "#efefef";
  }
}

if (theme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  sessionStorage.setItem("theme", "dark");
  document.getElementById("theme-toggle").style.color = "#efefef";
} else if (theme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  sessionStorage.setItem("theme", "light");
  document.getElementById("theme-toggle").style.color = "#303135";
}