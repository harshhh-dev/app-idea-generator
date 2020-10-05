var darkMode = false

function ChangeColourScheme() {
    if (darkMode) {
        document.getElementById('body').className = 'light'

        document.getElementById('generateButton').className = 'light-button'
        document.getElementById('idea').className = 'light-text'

        document.getElementById('toggle').innerHTML = 'Turn Off The Lights'

        darkMode = false
    } else {
        document.getElementById('body').className = 'dark'

        document.getElementById('generateButton').className = 'dark-button'
        document.getElementById('idea').className = 'dark-text'

        document.getElementById('toggle').innerHTML = 'Turn On The Lights'

        darkMode = true
    }
}