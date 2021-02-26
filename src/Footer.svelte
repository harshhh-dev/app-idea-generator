<script>
  import Icon from 'fa-svelte'
  import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons'
</script>

<footer>
  <div class="main">
    <Icon icon={faCode} />
    <p>with</p>
    <div class="heart">
      <Icon icon={faHeart} />
    </div>
  </div>
  <a
    class="blog"
    href="https://harshhhdev.github.io/blog/my-experience-with-svelte"
    >Check out my Blog</a
  >
</footer>

<style>
  footer {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  footer p {
    margin: 0 5px;
  }
  footer .main {
    display: flex;
  }
  footer div.heart {
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
  }
  footer a {
    text-decoration: none;
    margin: 10px 0;
  }
  footer .blog {
    margin-top: 10px;
  }
  footer a {
    color: #3269ff;
    position: relative;
    transition: all 0.6s;
    text-decoration: none;
  }

  footer a:before {
    content: '';
    width: 0;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #3269ff;
    transition: all 0.3s;
  }

  footer a:hover:before {
    width: 100%;
    left: 0;
    background: #3269ff;
  }
</style>
