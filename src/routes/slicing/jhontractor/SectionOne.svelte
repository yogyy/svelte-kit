<script>
  import ArrowRightCircle from './assets/icons/ArrowRightCircle.svelte';
  import CheckCircle from './assets/icons/CheckCircle.svelte';
</script>

<section id="sect-1" class="w-full h-screen hero pl-[112px] flex items-center">
  <div class="hero-div">
    <p>We Prepare</p>
    <p>
      For The <span class="text-[var(--primary-jhontractor)]">Future</span>
    </p>
    <p>
      We provide the best architectural design, contruction, and <br />building
      maintance services for you.
    </p>
    <div class="action">
      <button type="button"
        ><span>Our Service</span><ArrowRightCircle /></button>
      <button type="button">View Project</button>
    </div>
  </div>
</section>
<section class="relative sect-2">
  <div class="flex pt-16 gap-7">
    <div class="flex items-center gap-1 ml-[110px]">
      <span class="porto">25+</span><span>Years of <br />Experience</span>
    </div>
    <div class="flex items-center gap-1">
      <span class="porto">378+</span><span>Project <br />Complete</span>
    </div>
    <div class="flex items-center gap-1">
      <span class="porto">69+</span><span>Winning <br />Global Award</span>
    </div>
  </div>
  <div class="testi">
    <div class="flex flex-col items-start">
      <div class="inline-flex p-[10px] justify-center items-center gap-2">
        <span><CheckCircle /></span>
        <p>Quality Control System, 100% Satisfaction Guarantee</p>
      </div>
      <div class="inline-flex p-[10px] justify-center items-center gap-2">
        <span><CheckCircle /></span>
        <p>Highly Proffesional Staff, Accurate Testing Processes</p>
      </div>
      <div class="inline-flex p-[10px] justify-center items-center gap-2">
        <span><CheckCircle /> </span>
        <p>Unrivalled Workmanship, Proffesional and Qualified</p>
      </div>
    </div>
  </div>
  <div class="flex mt-[122px]">
    <div class="flex-1">
      <img
        src="https://s3-alpha-sig.figma.com/img/a670/cb1a/aba5cfc049aaeeaf2a80c83c389d0c0e?Expires=1693785600&Signature=DM~z1gsN0Yf79~l7QQFJAhD2CNiYBnSaT5IfZqI6sBlR6nCVikBq0XF3nCQDHclhC7zVwZImJCyO1a~vNSTh5EvV-CXqDNPm4NFWDE1fjpbV~5CDeNiujKXYLnOKEaHXrtPbJ7-NlcMha9pcBsEEgaHmT18J-WCDr4IEb1BS5dH1E5tMV0MNWVG8X1sNSZJfGOCiJej4DEZWCvUjqsWXGhqyktjpwbeinYrlDCAN-5yfp5Xtwn5yFdQ-lvbWBi5czfQjSw0t2o08B6J0PvJyaOHspWMDspY7thG3CnZwjZ-aq6Hm7esKN2rng0S4v24mwqNqGORUECyLUEQBbroNrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="constructor"
        class="w-[1570px] h-[674px] object-cover" />
    </div>
    <div class="flex-1">
      <div class="experience">
        <p>25 years</p>
        <p>of Experience</p>
      </div>
      <div class="summary mt-[30px]">
        We have a team of experienced professionals who have been in the
        industry for over 25 years. Our contractors have a wealth of knowledge
        and skills that they have acquired over the years, making them experts
        in their field.
        <br />
        <br />
        With 25 years of experience, our contractors have a deep understanding of
        industry standards and regulations. We ensure that all our projects comply
        with the latest safety and building codes, and that the final product meets
        or exceeds our client's expectations.
      </div>
      <div class="flex flex-col items-start mt-[26px]">
        <span class="ttd">jhon lbf</span>Henry Kurnia Adhi - Founder
      </div>
    </div>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Comforter+Brush&display=swap');

  .hero {
    /* background: linear-gradient(270deg, #000 11.13%, rgba(0, 0, 0, 0) 100%),
      url('./assets/images/hero.png'), lightgray 50% / cover no-repeat; */
    background-image: url('./assets/images/hero.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .hero-div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & p {
      line-height: normal;
      font-style: normal;
      color: #fff;
      font-family: Poppins;

      &:first-child,
      &:nth-child(2) {
        text-align: center;
        font-size: 64px;
        font-weight: 600;
      }
      &:nth-child(3) {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .hero-div .action {
    display: flex;
    margin-top: 75px;
    gap: 24px;

    & button {
      padding: 15px 30px;
      border-radius: 15px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      gap: 10px;
      background-color: var(--accent-jhontractor);
      color: var(--secondary-jhontractor);
      transition: all 0.3s;

      &:first-child {
        background-color: var(--primary-jhontractor);
        color: var(--accent-jhontractor);
        &:hover {
          background-color: rgb(255 116 32 / 0.7);
        }
      }
      &:hover {
        background-color: rgb(255 255 255 / 0.7);
      }
    }
  }

  .sect-2 {
    background-color: var(--secondary-jhontractor);
    height: 100%;
  }

  .porto {
    color: var(--primary-jhontractor);
    text-align: center;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .testi {
    position: absolute;
    background-color: var(--primary-jhontractor);
    font-size: 20px;
    width: 680px;
    height: 257px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    right: 112px;
    top: -130px;
  }

  .experience {
    font-size: 64px;

    & p:first-child {
      color: var(--primary-jhontractor);
    }
  }

  .summary {
    margin-right: 105px;
    display: inline-flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
  }

  .ttd {
    color: #fff;
    text-align: center;
    font-family: Comforter Brush;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
</style>
