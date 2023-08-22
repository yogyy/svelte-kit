<script>
  import Button from '$components/ui/button/button.svelte';
  import ChevronDown from './assets/icons/ChevronDown.svelte';
  import Language from './assets/icons/Language.svelte';
</script>

<header class="sticky top-0 z-10 flex items-center justify-around">
  <div class="logo">
    <p>JHONTRAKTOR</p>
  </div>
  <nav>
    <ul class="flex gap-[23px] items-center">
      <li><a aria-current="true" href="#Home">Home</a></li>
      <li><a href="#Home">About Us</a></li>
      <li><a href="#Home">Service</a></li>
      <li><a href="#Home">Project</a></li>
    </ul>
  </nav>
  <div class="flex gap-6">
    <button class="flex items-center gap-2">
      <Language />
      <p class="p-[10px]">English</p>
      <ChevronDown />
    </button>
    <button class="contact-us">Contact Us</button>
  </div>
</header>

<style>
  header {
    height: 158px;
    flex-shrink: 0;
    background-color: var(--secondary-jhontractor);
  }

  .logo p {
    color: #ff7420;
    font-family: Unlock;
    font-size: 40.976px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  ul {
    width: 505px;
    height: 65px;
    flex-shrink: 0;
    & li a {
      color: #fff;
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      padding: 10px;
      border-bottom: #ff7420;
      border: 20px;
      &[aria-current='true'] {
        color: #ff7420;
        text-decoration-line: underline;
        text-underline-offset: 23px;
        text-decoration-thickness: 3px;
      }
    }
  }

  .contact-us {
    color: #fff;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: inline-flex;
    padding: 15px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 15px;
    background: #ff7420;
  }
</style>
