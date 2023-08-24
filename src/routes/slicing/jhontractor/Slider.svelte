<script lang="ts">
  export let src: string;
  export let alt: string;
  export let name: string;
  export let type: string;
</script>

<div class="w-[485px] h-[613px] overflow-hidden rounded-[15px] relative embla">
  <img class="rectangle" {src} {alt} />
  <div
    class="absolute z-10 w-full h-full top-0 bg-gradient-to-b from-transparent to-black flex justify-center items-end">
    <p class="text-white p-4 flex text-center text-2xl flex-col">
      {name} <br />
      <span>{type}</span>
    </p>
  </div>
</div>

<style>
  .embla {
    flex: 0 0 485px;
    min-width: 0;
  }
</style>
