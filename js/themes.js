var darkMode

const checkColourScheme = color => {
  if(color == "light"){
      document.getElementById('body').className = 'light'

      document.getElementById('generateButton').className = 'light-button'
      document.getElementById('idea').className = 'light-text'

      document.getElementById('toggle').innerHTML = 'Turn Off The Lights'
      localStorage.setItem("theme", "light");
  }
  else{
      document.getElementById('body').className = 'dark'

      document.getElementById('generateButton').className = 'dark-button'
      document.getElementById('idea').className = 'dark-text'

      document.getElementById('toggle').innerHTML = 'Turn On The Lights'
      localStorage.setItem("theme", "dark");
  }
}


changeColourScheme = () => {
  if (darkMode) {
      document.getElementById('body').className = 'light'

      document.getElementById('generateButton').className = 'light-button'
      document.getElementById('idea').className = 'light-text'

      // document.getElementById('toggle').innerHTML = 'Lights Turned On'

      document.querySelector(".toggle-wrapper").classList.remove("active")
      // document.getElementById('toggle').classList.remove("active")
      localStorage.setItem("theme", "dark");
      darkMode = false
  } else {
      document.getElementById('body').className = 'dark'
      // document.getElementById('toggle').classList.add("active")
      document.querySelector(".toggle-wrapper").classList.add("active")

      document.getElementById('generateButton').className = 'dark-button'
      document.getElementById('idea').className = 'dark-text'
      // document.getElementById('toggle').innerHTML = 'Lights Turned Off'

      localStorage.setItem("theme", "light");
      darkMode = true
  }
}

const savedItem = localStorage.getItem('theme');
console.log(savedItem)
if (savedItem === null) {
  darkMode = false;
} else {
  if(savedItem === 'dark') {
    darkMode = true;
    changeColourScheme()
  } else {
    darkMode = false;
    changeColourScheme()
  }
}


