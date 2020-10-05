var darkMode = false

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

        document.getElementById('toggle').innerHTML = 'Turn Off The Lights'
        localStorage.setItem("theme", "light");
        darkMode = false
    } else {
        document.getElementById('body').className = 'dark'

        document.getElementById('generateButton').className = 'dark-button'
        document.getElementById('idea').className = 'dark-text'

        document.getElementById('toggle').innerHTML = 'Turn On The Lights'
        localStorage.setItem("theme", "dark");
        darkMode = true
    }
}