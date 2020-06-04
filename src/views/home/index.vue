<template>
  <div>
    <div
      class="ln-hero-banner ln-hero-banner--h550 ln-hero-banner--theme-default ln-hero-banner--valign-middle ln-hero-banner--align-right"
    >
      <div class="container ln-hero-banner__container-wrapper lnet-slider--transition">
        <div class="ln-hero-banner__element-wrapper">
          <span
            class="ln-headline--hero ln-hero-banner__headline"
          >Taking the complexity out of finance</span>
        </div>
        <div class="ln-hero-banner__element-wrapper">
          <span
            class="ln-hero-banner__subline"
          >With Financial Performance Management software from LucaNet</span>
        </div>
        <a
          href="https://www.lucanet.com/en/info-center/brochure/"
          class="btn btn-white ln-hero-banner__cta"
          role="button"
        >See all brochures</a>
        <a
          href="https://www.lucanet.com/en/solutions"
          class="btn btn-primary ln-hero-banner__cta"
          role="button"
        >Our solutions</a>
      </div>
      <div
        class="ln-hero-banner__background-image"
        style="background-image: url('https://www.lucanet.com/media/cache/slider_550_lg/images/slider-image/header-startseite-meta-1920-550.jpg')"
      ></div>
    </div>
    <main>
      <div class="ln-customer-alert pos-rel">
        <div class="container ln-container">
          <div class="ln-customer-alert__wrapper">
            <span class="ln-customer-alert__badge">NEW!</span>
            <div class="ln-customer-alert__text">
              <p style="text-align:center">
                <strong>LucaNet is once again FPM Market Leader!</strong>
              </p>
              <p>LucaNet is recognized as FPM Market Leader for the third time!</p>
            </div>
            <a
              href="https://www.lucanet.com/en/lp/barc-score-fpm-market-leader-2020"
              class="btn ln-customer-alert__link btn-white-outline"
              title="Learn more"
              style="padding: 12px 20px;font-size: 16px;"
            >Learn more</a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.ln-hero-banner {
  width: 100%;
  height: 300px;
  position: relative;
  z-index: 1;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
.ln-hero-banner--align-left,
.ln-hero-banner--align-right {
  text-align: center;
}
.ln-hero-banner__container-wrapper {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
}
.ln-hero-banner__headline,
.ln-hero-banner__subline {
  display: inline-block;
  color: #fff;
}
.ln-hero-banner__background-image {
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-position: 50%;
  background-repeat: no-repeat;
}
.ln-headline--hero,
.ln-headline--teaser--small-mb {
  margin-bottom: 16px;
}
.ln-headline--hero {
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  margin-top: 0;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 300;
  text-transform: uppercase;
}
.btn {
  display: inline-block;
  margin-top: 1.25rem;
  padding: 10px 1.5625rem;
  vertical-align: middle;
  border-radius: 0;
  border: 2px solid #04a88c;
  color: #fff;
  background-color: #04a88c;
  box-shadow: none;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn {
  white-space: normal;
  font-size: 14px;
}
.btn-white {
  color: #202a60;
  background-color: #fff;
  border: 2px solid #fff;
  text-decoration: none;
  &:hover {
  }
}
.ln-hero-banner__cta {
  display: inline-block;
  /* padding: .625rem 1rem;  */
  padding: 10px 14px;
  margin: 1.875rem 10px 0 0;
}
.ln-hero-banner__cta:first-of-type {
  margin-left: 0;
}
.pos-rel {
  position: relative !important;
}
.ln-customer-alert {
  background-color: #008bd2;
}
.ln-customer-alert__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: center;
  padding-top: 12px;
  padding-left: 16px;
}
.ln-customer-alert__badge {
  padding: 2px 8px;
  border-radius: 6px;
  background-color: #fff;
  color: #008bd2;
  font-weight: 700;
  white-space: nowrap;
}
.ln-customer-alert__wrapper > * {
  margin-bottom: 12px !important;
  margin-right: 16px;
}
.ln-customer-alert__text p,
.ln-customer-alert__text strong {
  color: #fff;
}
.ln-customer-alert__text p {
  margin: 0;
}
.ln-customer-alert__link {
  margin: 0;
  color: #fff;
  white-space: nowrap;
  transition: none;
  &:hover{
    color: #008bd2;
    background: #fff
  }
}
.ln-customer-alert__link,
.ln-customer-alert__link:active,
.ln-customer-alert__link:focus {
  border: 2px solid #fff;
  background: transparent;
}

@media (min-width: 62rem) {
  p {
    font-size: 18px;
  }
  .ln-hero-banner--align-right {
    text-align: right;
  }
  .ln-hero-banner--h550 {
    height: 550px;
  }

  .ln-hero-banner--valign-middle .ln-hero-banner__container-wrapper {
    top: 50%;
    transform: translateY(-50%);
  }
  .ln-hero-banner--align-right .ln-hero-banner__element-wrapper {
    margin-left: auto;
    margin-right: 0;
  }
  .ln-hero-banner__element-wrapper {
    width: 66%;
  }
  .ln-hero-banner__headline,
  .ln-hero-banner__subline {
    padding: 10px;
    background-color: hsla(0, 0%, 100%, 0.8);
  }
  .ln-hero-banner__headline {
    letter-spacing: 0;
    color: #008bd2;
  }
  .ln-hero-banner__subline {
    color: #333;
  }
  .ln-hero-banner__cta {
    margin: 30px 10px 0 0;
  }
  .ln-customer-alert__wrapper {
    flex-direction: row;
    justify-content: space-around;
  }
}

@media screen and (min-width: 93.75rem) {
  .container {
    width: 1400px;
    max-width: 1400px;
  }
  .ln-headline--hero {
    font-size: 36px;
  }
}
@media screen and (min-width: 75rem) {
  .container {
    width: 1160px;
    max-width: 1160px;
  }
  .ln-headline--hero {
    font-size: 44px;
  }
  .ln-hero-banner__subline {
    font-size: 28px;
    font-weight: 300;
    line-height: 1.1;
  }
}
</style>