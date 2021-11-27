
const themeMap = {
    dark: "light",
    light: "dark",
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
    svg.classList.replace('theme', next)
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;
  // DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;
const svg = document.getElementById('spacerlight')
const loaderDark = document.querySelector('.loader-wrapper-dark')
const loaderLight = document.querySelector('.loader-wrapper-light')


// Apply the cached theme on reload


const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

// Button Event Handlers
window.addEventListener('load', function() {
  loaderDark.style.display = 'none'
})
window.addEventListener('load', function() {
  loaderLight.style.display = 'none'
})


  darkButton.onclick = () => {
    if(body.className === 'dark'){
      alert("Theme already currently selcted")
    } else {
    loaderDark.style.display = 'flex'
  setTimeout( function() {
    body.classList.replace('light', 'dark');
      svg.classList.replace('spacerlight', 'spacerdark')
      localStorage.setItem('theme', 'dark');
      loaderDark.style.display = 'none'
    } , 1000)
 }
}

lightButton.onclick = () => {
  if(body.className ==='light'){
    alert("Theme already currently selcted")
  } else {
  loaderLight.style.display = 'flex'
  setTimeout( function() {
  body.classList.replace('dark', 'light');
  svg.classList.replace('spacerdark', 'spacerlight')
  localStorage.setItem('theme', 'light');
  loaderLight.style.display = 'none'
}, 1000)
 }
  }
