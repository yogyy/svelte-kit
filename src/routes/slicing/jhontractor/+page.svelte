<script>
  import Header from './Header.svelte';
  import SectionOne from './SectionOne.svelte';
  import SectionTwo from './SectionTwo.svelte';
</script>

<div class="w-8/12 xl:w-full">
  <Header />
  <main class="flex-1 flex flex-col">
    <SectionOne />
    <SectionTwo />
  </main>
</div>
