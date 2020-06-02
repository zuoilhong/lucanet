<template>
  <div class="ln-hero-banner
    ln-hero-banner--h450
    ln-hero-banner--theme-default
    ln-hero-banner--valign-middle
    ln-hero-banner--align-right">
      <div class="container ln-hero-banner__container-wrapper lnet-slider--transition">
        <div class="ln-hero-banner__element-wrapper"><span class="ln-headline--hero ln-hero-banner__headline">Every financial solution you need</span></div>
        <div class="ln-hero-banner__background-image" style="background-image: url('https://www.lucanet.com/media/cache/slider_450_lg/images/slider-image/header-uebersicht-solutions-1920-450-meta.jpg')"></div>
      </div>
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

<style scoped>
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
.ln-hero-banner--align-left, .ln-hero-banner--align-right {
    text-align: center;
}
.ln-hero-banner__container-wrapper {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    z-index: 4;
}
.ln-hero-banner__headline, .ln-hero-banner__subline {
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
@media (min-width: 62rem){
  .ln-hero-banner--align-right {
      text-align: right;
  }
  .ln-hero-banner--h450 {
    height: 450px;
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
.ln-hero-banner__headline, .ln-hero-banner__subline {
    padding: 14px;
    background-color: hsla(0,0%,100%,.8);
}
.ln-hero-banner__headline {
    letter-spacing: 0;
    color: #008bd2;
}
}
@media screen and (min-width: 93.75rem){

  .container {
      width: 1400px;
      max-width: 1400px;
  }
  .ln-headline--hero {
    font-size: 36px;
}
}
@media screen and (min-width: 75rem){

  .container {
      width: 1160px;
      max-width: 1160px;
  }
  .ln-headline--hero {
    font-size: 24px;
}
}
</style>