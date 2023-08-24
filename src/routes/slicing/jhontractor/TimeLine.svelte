<div class="relative flex flex-col items-center p-3 h-fit">
  <div class="text-xl font-medium text-center text-white">
    <slot />
  </div>
  <div class="text-sm font-medium text-white mt-3">Step 1</div>
  <div class="relative w-9 h-9 circle">
    <div
      class="absolute top-0 left-0 bg-white rounded-full w-9 h-9 bg-opacity-20 animate-pulse" />
    <div class="w-5 h-5 left-[8px] top-[8px] absolute bg-white rounded-full" />
  </div>
</div>

<style>
  .circle {
    margin-top: 19px;
  }
</style>
