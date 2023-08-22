<script>
  import { page } from '$app/stores';
  import { cn } from '$lib/utils';
  import '../app.postcss';
  import Header from './Header.svelte';
  import './styles.css';
</script>

{#if !$page.url.pathname.startsWith('/slicing')}
  <div class="flex flex-col min-h-screen">
    <Header />

    <main
      class={cn(
        'flex-1 flex flex-col p-4 w-full max-w-5xl my-0 mx-auto box-border',
        $page.url.pathname.startsWith('/blog') && ''
      )}>
      <slot />
    </main>

    <footer
      class="flex flex-col justify-center items-center p-3 min-[480px]:py-3 min-[480px]:px-0">
      <p>
        visit <a class="font-bold" href="https://kit.svelte.dev"
          >kit.svelte.dev</a> to learn SvelteKit
      </p>
    </footer>
  </div>
{:else}
  <slot />
{/if}
