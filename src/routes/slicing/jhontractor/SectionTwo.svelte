<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Slider from './Slider.svelte';
  import TimeLine from './TimeLine.svelte';
  import featureproject from './feature-project';
  import people1 from './assets/images/joseph-gonzalez-iFgRcqHznqg-unsplash 1.png';
  import people2 from './assets/images/ian-dooley-d1UPkiFd04A-unsplash 1.png';
  import people3 from './assets/images/ayo-ogunseinde-sibVwORYqs0-unsplash 1.png';

  let projects = [
    { name: 'All Works' },
    { name: 'Construction' },
    { name: 'Architecture' },
    { name: 'Building' },
    { name: 'Renovations' },
    { name: 'Interior' },
    { name: 'Explore All Projects' }
  ];
</script>

<section class="relative flex flex-col items-center w-full pb-24 sect-1">
  <div class="flex mt-10 justify-between w-4/5 relative">
    <div class="absolute w-full h-1 bg-white bottom-7" />
    <TimeLine>Evaluation And Signing<br />Of The Contract</TimeLine>
    <TimeLine>Preparation Of The<br />Work Plan</TimeLine>
    <TimeLine>Implementation Of<br />Quality Works</TimeLine>
    <TimeLine>Delivering The Project<br />To The Customer</TimeLine>
  </div>
  <div class="flex w-4/5 items-center mt-16">
    <div class="text-6xl font-semibold w-fit text-zinc-900">
      Featured Project
    </div>
    <div class="ml-auto">
      <ul class="flex">
        {#each projects as project}
          <li class="text-white p-[10px]">
            <a href={`#${project.name.replace(/\s+/g, '-').toLowerCase()}`}
              >{project.name}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="overflow-hidden embla w-full" use:emblaCarouselSvelte>
    <div class="flex space-x-5 mx-5">
      {#each featureproject as fp}
        <Slider
          src={fp.image}
          alt={fp.element}
          name={fp.element}
          type={fp.type} />
      {/each}
    </div>
  </div>

  <div class="self-end">
    <a
      href="#see-all-project"
      class="flex items-center gap-[10px] p-[10px] mr-[105px] mt-4 text-[#191A19] font-semibold"
      >Explore All Project <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 27C18.1826 27 21.2348 25.7357 23.4853 23.4853C25.7357 21.2348 27 18.1826 27 15C27 11.8174 25.7357 8.76516 23.4853 6.51472C21.2348 4.26428 18.1826 3 15 3C11.8174 3 8.76516 4.26428 6.51472 6.51472C4.26428 8.76516 3 11.8174 3 15C3 18.1826 4.26428 21.2348 6.51472 23.4853C8.76516 25.7357 11.8174 27 15 27ZM20.5605 13.9395L16.0605 9.4395C15.7776 9.16626 15.3987 9.01507 15.0054 9.01849C14.6121 9.02191 14.2359 9.17966 13.9578 9.45777C13.6797 9.73588 13.5219 10.1121 13.5185 10.5054C13.5151 10.8987 13.6663 11.2776 13.9395 11.5605L15.879 13.5H10.5C10.1022 13.5 9.72064 13.658 9.43934 13.9393C9.15804 14.2206 9 14.6022 9 15C9 15.3978 9.15804 15.7794 9.43934 16.0607C9.72064 16.342 10.1022 16.5 10.5 16.5H15.879L13.9395 18.4395C13.7962 18.5779 13.682 18.7434 13.6033 18.9264C13.5247 19.1094 13.4834 19.3062 13.4816 19.5054C13.4799 19.7046 13.5178 19.9021 13.5933 20.0864C13.6687 20.2708 13.7801 20.4383 13.9209 20.5791C14.0617 20.7199 14.2292 20.8313 14.4136 20.9067C14.5979 20.9822 14.7954 21.0201 14.9946 21.0184C15.1938 21.0166 15.3906 20.9753 15.5736 20.8967C15.7566 20.818 15.9221 20.7038 16.0605 20.5605L20.5605 16.0605C20.8417 15.7792 20.9997 15.3977 20.9997 15C20.9997 14.6023 20.8417 14.2208 20.5605 13.9395Z"
            fill="#191A19" />
        </svg></span
      ></a>
  </div>
</section>
<section class="sect-2 flex justify-center">
  <div class="mt-[52px] flex flex-col items-center">
    <p class=" font-semibold text-[28px]">What Our Client Says</p>
    <p class="text-center text-xl mt-6">
      I am very satisfied with the services. Their team is very professional and
      efficient in completing our project <br /> on time and at a very
      affordable cost. The quality of their work is very good and I highly
      recommend this <br /> company for any construction project.
    </p>
    <p class="text-xl mt-3">Tom DeLonge</p>
    <p class="text-md">CEO, Lexmark</p>
    <div class="people flex gap-3 items-center mt-7">
      <button
        ><span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.707 5.29303C12.8945 5.48056 12.9998 5.73487 12.9998 6.00003C12.9998 6.26519 12.8945 6.5195 12.707 6.70703L9.414 10L12.707 13.293C12.8892 13.4816 12.99 13.7342 12.9877 13.9964C12.9854 14.2586 12.8802 14.5094 12.6948 14.6948C12.5094 14.8803 12.2586 14.9854 11.9964 14.9877C11.7342 14.99 11.4816 14.8892 11.293 14.707L7.293 10.707C7.10553 10.5195 7.00021 10.2652 7.00021 10C7.00021 9.73487 7.10553 9.48056 7.293 9.29303L11.293 5.29303C11.4805 5.10556 11.7348 5.00024 12 5.00024C12.2652 5.00024 12.5195 5.10556 12.707 5.29303Z"
              fill="white" />
          </svg></span
        >prev</button>
      <img class="w-12 h-12" src={people1} alt="" />
      <img class="w-16 border-[#FF7420] border-[5px]" src={people2} alt="" />
      <img class="w-12 h-12" src={people3} alt="" />
      <button
        >next <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.29303 14.707C7.10556 14.5195 7.00024 14.2652 7.00024 14C7.00024 13.7349 7.10556 13.4806 7.29303 13.293L10.586 10L7.29303 6.70704C7.11087 6.51844 7.01008 6.26584 7.01236 6.00364C7.01463 5.74144 7.1198 5.49063 7.30521 5.30522C7.49062 5.11981 7.74143 5.01465 8.00363 5.01237C8.26583 5.01009 8.51843 5.11088 8.70703 5.29304L12.707 9.29304C12.8945 9.48057 12.9998 9.73488 12.9998 10C12.9998 10.2652 12.8945 10.5195 12.707 10.707L8.70703 14.707C8.5195 14.8945 8.26519 14.9998 8.00003 14.9998C7.73487 14.9998 7.48056 14.8945 7.29303 14.707Z"
              fill="white" />
          </svg></span
        ></button>
    </div>
  </div>
</section>

<style>
  .sect-1 {
    background-color: var(--primary-jhontractor);
  }

  .sect-2 {
    background-color: var(--secondary-jhontractor);
    height: auto;
    padding-bottom: 27px;
  }

  ul > li {
    & a {
      color: white;
      font-size: 20px;
      font-weight: 600;

      &:hover {
        text-underline-offset: 23px;
        text-decoration-thickness: 3px;
      }
    }
  }

  ul li:first-child > a {
    color: var(--secondary-jhontractor);
    text-decoration-line: underline;
    text-underline-offset: 23px;
    text-decoration-thickness: 3px;
  }

  .embla {
    margin-top: 55px;
  }
  .people img {
    border-radius: 50%;
  }

  .people button {
    display: flex;
    align-items: center;
    font-weight: 300;
  }
</style>
