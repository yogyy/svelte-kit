<script>
  import Button from '$components/ui/button/button.svelte';
  import { cn } from '@/utils';
  import ChevronDown from './assets/icons/ChevronDown.svelte';
  import Language from './assets/icons/Language.svelte';

  let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<header
  class={cn(
    'z-10 flex items-center justify-around w-full',
    y > 717 ? '' : 'sticky top-0'
  )}>
  <div class="logo">
    <p>JHONTRAKTOR</p>
  </div>
  <nav>
    <ul class="gap-[23px] items-center hidden lg:flex">
      <li><a aria-current="true" href="#Home">Home</a></li>
      <li><a href="#Home">About Us</a></li>
      <li><a href="#Home">Service</a></li>
      <li><a href="#Home">Project</a></li>
    </ul>
  </nav>
  <div class="flex gap-6">
    <button type="button" class="flex items-center gap-2">
      <Language />
      <p class="p-[10px]">English</p>
      <ChevronDown />
    </button>
    <button
      type="button"
      class="rounded-[15px] py-[15px] px-[30px] text-2xl bg-[#ff7420] hover:bg-[#ff7420]/70 transition-colors duration-300"
      >Contact Us</button>
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

      &:hover {
        text-decoration-line: underline;
        text-underline-offset: 23px;
        text-decoration-thickness: 3px;
      }
      &[aria-current='true'] {
        color: #ff7420;
        text-decoration-line: underline;
        text-underline-offset: 23px;
        text-decoration-thickness: 3px;
      }
    }
  }
</style>
