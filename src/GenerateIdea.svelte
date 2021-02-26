<script>
  const apps = [
    'Facebook',
    'Linkedin',
    'Tinder',
    'Snapchat',
    'Instagram',
    'Whatsapp',
    'WeChat',
    'Skype',
    'Google Meet',
    'Zoom',
    'Twitter',
    'Vine',
    'Spotify',
    'Periscope',
    'Uber',
    'Lyft',
    'Yik Yak',
    'Kik',
    'Pinterest',
    'Tumblr',
    'Timehop',
    'Postmates',
    'Doordash',
    'Shyp',
    'PasteBin',
    'Instacart',
    'FlipKart',
    'PCPartBuilder',
    'freeCodeCamp',
    'Washio',
    'Blue Apron',
    'Yelp',
    'Google Maps',
    'Trello',
    'Miro',
    'Dark Sky',
    '1Password',
    'Dropbox',
    'Asana',
    'Outlook',
    'Google Classroom',
    'Sunrise',
    'Wunderlist',
    'Zillow',
    'Scanner Pro',
    'Google Translate',
    'Pandora',
    'Duolingo',
    'PicsArt',
    'Soundcloud',
    'Calm',
    'iMovie',
    'Twitch',
    'YouTube',
    'Kahoot',
    'Quizlet',
    'GitHub',
    'Discord',
    'CashApp',
    'Gmail',
    'Netflix',
    'Reddit',
    'GrubHub',
    'Indeed',
    'Grammarly',
    'Wikipedia',
    'IMDB',
    'Fandom',
    'TripAdvisor',
    'Quora',
    'Rotten Tomatoes',
    'Britannica',
    'PayPal',
    'IGN',
    'Apple Music',
    'Snapseed',
    'Firefox',
    'GitLab',
    'Booking.com',
    'eBay',
    'Dashlane',
    'LastPass',
    'Strava',
    'TikTok',
  ]

  const audience = [
    'vintage lovers',
    'finding good movies',
    'finding flight tickets',
    'finding good hotels',
    'finding good resturaunts',
    'finding concerts',
    'finding parties',
    'finding good seats at sporting events',
    'programmers',
    'teachers',
    'writers',
    'gamers',
    'artists',
    'composers',
    'architects',
    'doctors',
    'janitors',
    'taxi drivers',
    'chefs',
    'streamers',
    'cats',
    'dogs',
    'stray pets',
    'babies',
    'singles',
    'couples',
    'journalists',
    'vegetarians',
    'early birds',
    'night owls',
    'waiters',
    'businessmen',
    'learning new languages',
    'movie reccomendations',
    'talking',
    'dating',
    'video calls',
    'reminders',
    'meditating',
    'selling houses',
    'buying houses',
    'job hunters',
    'hunters',
    'foodies',
    'online shopping',
    'memes',
    'planning events',
    'scientists',
    'sharing content',
    'accountants',
    'mathamaticians',
    'courses',
    'managers',
    'enthusiasts',
    'game developers',
    'expats',
    'geeks',
    'nerds',
    'buying electronics',
    'buying groceries',
    'aspring vloggers',
    'bloggers',
    'vloggers',
    'traveling',
    'editing videos',
    'bartenders',
    'alcoholics',
    'making friends',
    'watching cat videos',
    'football (soccer) players',
    'soccer (football) players',
    'american football players',
    'basketball players',
    'athletes',
    'golfers',
    'swimmers',
    'eating',
    'enjoying a holiday',
    'spending time with friends',
    'watching dog videos',
    'contributing to opensource',
    'brokers',
    'creating content',
    'watch a movie',
    'working',
    'writing',
  ]

  const GenerateAppIdea = () => {
    let appType = Math.floor(Math.random() * apps.length)
    let thingType = Math.floor(Math.random() * audience.length)
    if (
      apps[appType].startsWith('A') ||
      apps[appType].startsWith('E') ||
      apps[appType].startsWith('I') ||
      apps[appType].startsWith('O') ||
      apps[appType].startsWith('U')
    ) {
      document.querySelector('.idea-copy').innerText = 'Click to copy'
      document.querySelector(
        '.idea'
      ).innerText = `An ${apps[appType]} for ${audience[thingType]}.`
    } else {
      document.querySelector('.idea-copy').innerText = 'Click to copy'
      document.querySelector(
        '.idea'
      ).innerText = `An ${apps[appType]} for ${audience[thingType]}.`
    }
  }

  const CopyIdea = () => {
    var idea = document.createElement('textarea')
    idea.value = document.querySelector('p.idea').innerText
    idea.setAttribute('readonly', '')
    idea.style = { position: 'absolute', left: '-9999px' }
    document.body.appendChild(idea)
    idea.select()
    document.execCommand('copy')
    document.querySelector('.idea-copy').innerText = 'Copied'
    document.body.removeChild(idea)
  }
</script>

<div class="idea-container" on:click={() => CopyIdea()}>
  <div class="idea-copy">Click to copy</div>
  <p class="idea">/* Ideas for the next Google */</p>
</div>
<button on:click={() => GenerateAppIdea()}>New Idea</button>

<style>
  button {
    background: none;
    border: none;
    outline: none;
    font-size: 24px;
    color: #3269ff;
    transition: 0.3s linear;
    padding: 15px;
    user-select: none;
    border-radius: 7px;
    width: 200px;
  }

  button:hover {
    transform: translateY(-2px);
    background: #3269ff;
    box-shadow: 0px 0px 20px 5px #00000050;
    color: white;
    cursor: pointer;
  }

  div.idea-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p.idea {
    background: -webkit-linear-gradient(180deg, #8026c7, #f40385);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 48px;
    text-align: center;
    margin-bottom: 50px;
    font-weight: 700;
    transition: 0.3s linear opacity;
  }

  p.idea:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  div.idea-container:hover div.idea-copy {
    display: flex;
    visibility: visible;
    opacity: 1 !important;
  }

  div.idea-copy {
    position: absolute;
    visibility: hidden;
    margin-top: -5%;
    opacity: 0;
    font-size: 24px;
    background: -webkit-linear-gradient(180deg, #000000, #000000);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    transition: 0.3s linear;
  }
</style>
