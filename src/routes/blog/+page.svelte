<script lang="ts">
  import { Button, buttonVariants } from '$components/ui/button';
  import { cn } from '$lib/utils.js';
  import * as Dialog from '$components/ui/dialog';
  import { Label } from '$components/ui/label';
  import { Input } from '$components/ui/input';

  export let data;
</script>

<svelte:head>
  <title>Blog</title>
  <meta name="description" content="Blog page" />
</svelte:head>

<h1>blog</h1>

<ul>
  {#each data.summaries as { slug, title }}
    <li><a href="/blog/{slug}">{title}</a></li>
  {/each}
</ul>

<div>
  <Button
    variant="outline"
    on:click={() => {
      console.log(data);
    }}>click me</Button>
  <Dialog.Root>
    <Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>
      Edit Profile
    </Dialog.Trigger>
    <Dialog.Content class="sm:max-w-[425px]">
      <Dialog.Header>
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description>
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
      </Dialog.Header>
      <div class="grid gap-4 py-4">
        <div class="grid items-center grid-cols-4 gap-4">
          <Label class="text-right">Name</Label>
          <Input id="name" value="Pedro Duarte" class="col-span-3" />
        </div>
        <div class="grid items-center grid-cols-4 gap-4">
          <Label class="text-right">Username</Label>
          <Input id="username" value="@peduarte" class="col-span-3" />
        </div>
      </div>
      <Dialog.Footer>
        <Button type="submit">Save changes</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Root>
</div>
