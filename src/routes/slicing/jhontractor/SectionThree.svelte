<script>
  import Button from '$components/ui/button/button.svelte';
  import Input from '$components/ui/input/input.svelte';
  import Textarea from '$components/ui/textarea/textarea.svelte';
  import { cn } from '@/utils';
  import SelectService from './SelectService.svelte';
  import CheckCircle from './assets/icons/CheckCircle.svelte';
  import { writable } from 'svelte/store';

  const name = writable('');
  const email = writable('');
  const phone = writable('');
  const service = writable('');
  const message = writable('');

  function handleSubmit() {
    const formData = {
      name: $name,
      email: $email,
      phone: $phone,
      service: $service,
      message: $message
    };

    if ($name !== '') {
      console.log('Form Data:', formData);
    }
  }
</script>

<section>
  <div
    class={cn(
      'relative px-10 mx-auto lg:px-28 py-11 bg-gradient-to-b from-[#191A19] to-[#191A19]/70 backdrop-blur-sm',
      'md:to-[#191A19]/60 xl:to-[#191A19]/40'
    )}>
    <div class="flex flex-col items-center">
      <h1 class="text-3xl md:text-4xl xl:text-6xl">
        Leading Way In Building & Civil Construction
      </h1>
      <ul class="flex flex-wrap justify-center gap-8 mt-4">
        <li class="p-2">
          <p><CheckCircle /> Professional Staff</p>
        </li>
        <li class="p-2">
          <p><CheckCircle /> 100% Satisfaction</p>
        </li>
        <li class="p-2">
          <p><CheckCircle /> Accurate Testing</p>
        </li>
        <li class="p-2">
          <p><CheckCircle /> Trasparent Pricing</p>
        </li>
      </ul>
    </div>
    <div class="flex flex-col gap-10 mt-12 lg:flex-row">
      <div
        class="w-full py-10 mx-auto bg-orange-500 lg:w-2/3 form px-14 rounded-2xl">
        <h1 class="text-2xl text-start">Request A Quote</h1>
        <p class="mt-6 text-xl">
          Complete control over products allow us to our customers the best
          quality <br /> prices and services. We take great pride in everything that
          we do in Jhontraktor
        </p>
        <div
          class="grid grid-cols-1 gap-4 mt-4 text-black lg:grid-cols-2 form-area">
          <Input
            bind:value={$name}
            class="bg-white"
            type="text"
            placeholder="Name" />
          <Input
            bind:value={$email}
            class="bg-white"
            type="email"
            placeholder="Email" />
          <Input
            bind:value={$phone}
            class="bg-white "
            type="number"
            placeholder="Phone" />
          <SelectService />
        </div>
        <Textarea
          bind:value={$message}
          class="mt-4 text-black bg-white resize-none xl:h-36 max-h-36"
          placeholder="Additional Details!" />
        <Button
          on:click={handleSubmit}
          type="submit"
          class="w-full mt-6 text-xl bg-black py-7">Submit Request</Button>
      </div>
      <div
        class="w-full py-10 mx-auto bg-orange-500 lg:w-1/3 px-14 rounded-2xl">
        <h2 class="">Contact Info</h2>
        <div class="mt-6">
          <ul class="flex flex-col gap-6 text-xl font-normal">
            <li>
              <div class="">
                <h3>Our Location</h3>
                <p class="text-sm font-light">
                  18 Office Park Building 21th Floor Unit C. Jl. TB Simatupang
                  Kav. 18, Jakarta Selatan ,12520
                </p>
              </div>
            </li>
            <li>
              <div class="">
                <h4>Quick Contact</h4>
                <p class="text-sm font-light">
                  Email : (+62) 877-2469-7246 <br />Call Us :
                  contact@jhontraktor.co
                </p>
              </div>
            </li>
            <li>
              <h5>Opening Hours</h5>
              <p class="text-sm font-light">
                Monday - Friday <br /> 09:00 AM - 06:00 PM
              </p>
            </li>
          </ul>
          <p class="mt-6 text-xl">
            Do You Have Any Question, Just Contact Us To Get Help!
          </p>
        </div>
        <Button type="submit" class="w-full text-xl bg-black py-7 mt-7"
          >Contact Us</Button>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    background: url('https://s3-alpha-sig.figma.com/img/d1df/539d/bd18e097a29f28e9715a148f7f936d65?Expires=1693785600&Signature=pWw1blZ2efbVTPV91SknqwZgQoIQfyZNG4JkXrCl-opyYqGpOGsbK0gZnBP5qOSGPKXi3MsBES50M4O9c5dTk8s6ud320HiZh5AE8yEjXez8jpn6x6j9EwkrG~CZuvjDUCcNVWF06N5X89hXEX~BJ~g2EatpC~Oq511ir897L5zuuPjCVjkTuHILLchgrBx6FGUd4xC0bI~gdhlSBOObkLWypD6gglkJtr8Spcmc6ztAZm0O8nKe3EtJwevo38Lz2tH4X0uxEhrGbhL-HcsG48pQGoVigZ~Q04Wy0Pr8fPNouBcuAHTlSHXj9WX5JQCEa09OgI-3ntRTqfuzgfd-~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }
  li p {
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>
