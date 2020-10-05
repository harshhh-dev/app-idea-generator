var darkMode = false

function ChangeColourScheme() {
    if (darkMode) {
        document.getElementById('body').className = 'light'

        document.getElementById('generateButton').className = 'light-button'
        document.getElementById('idea').className = 'light-text'

        darkMode = false
    } else {
        document.getElementById('body').className = 'dark'

        document.getElementById('generateButton').className = 'dark-button'
        document.getElementById('idea').className = 'dark-text'

        darkMode = true
    }
}