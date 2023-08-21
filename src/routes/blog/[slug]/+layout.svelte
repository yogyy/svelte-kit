<script>
  import { page } from '$app/stores';

  export let data;
  $: current = $page.params.slug;
</script>

<div class="sm:grid sm:grid-cols-[1fr_16em] sm:gap-[2em]">
  <div class="">
    <slot />
  </div>

  <aside>
    <h2>More posts</h2>
    <ul>
      {#each data.summaries as { slug, title }}
        <li>
          <a
            class={current === slug
              ? 'text-[var(--color-theme-1)]'
              : 'text-current hover:decoration-[var(--color-theme-1)]'}
            href="/blog/{slug}">{title}</a>
        </li>
      {/each}
    </ul>
  </aside>
</div>
