<script>
  import { page } from '$app/stores';
  $: index = data.summaries.findIndex(
    (post) => post.slug === $page.params.slug
  );
  $: next = data.summaries[index - 1];
  $: back = data.summaries[index + 1];
  export let data;
</script>

<svelte:head>
  <title>Blog - {data.post.title}</title>
  <meta name="description" content={data.post.content.replace(/<\/?p>/g, '')} />
</svelte:head>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
{#if next}
  <p>Next post: <a href="/blog/{next.slug}">{next.title}</a></p>
{:else}
  <p>Back post: <a href="/blog/{back.slug}">{back.title}</a></p>
{/if}
<!-- <pre>{JSON.stringify($page, null, 2)}</pre> -->
