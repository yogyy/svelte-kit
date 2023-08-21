<script>
  import { flip } from 'svelte/animate';
  import { fly } from 'svelte/transition';
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1].map((number) => ({ number }));

  const shuffle = () => {
    numbers = numbers.sort(() => 0.5 - Math.random());
  };
  const remove = () => {
    numbers = numbers.slice(1);
  };
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  <h1>About this app</h1>

  <p>
    This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your
    own by typing the following into your command line and following the prompts:
  </p>

  <pre>npm create svelte@latest</pre>

  <p>
    The page you're looking at is purely static HTML, with no client-side
    interactivity needed. Because of that, we don't need to load any JavaScript.
    Try viewing the page's source, or opening the devtools network panel and
    reloading.
  </p>

  <p>
    The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading
    and form handling. Try using it with JavaScript disabled!
  </p>
</div>
<div class="bg-cyan-500">
  <button on:click={shuffle}>shuffle</button>
  <button on:click={remove}>remove</button>

  <div class="flex items-center justify-center">
    <div class="grid-cols-2 grid w-20">
      {#each numbers as numberObject (numberObject)}
        <p out:fly={{ x: -500, duration: 5000 }} animate:flip>
          {numberObject.number}
        </p>
      {/each}
    </div>
  </div>
</div>
