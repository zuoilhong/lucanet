<template>
  <div>
    <div
      class="ln-hero-banner ln-hero-banner--h450 ln-hero-banner--theme-default ln-hero-banner--valign-middle ln-hero-banner--align-right"
    >
      <div class="container ln-hero-banner__container-wrapper lnet-slider--transition">
        <div class="ln-hero-banner__element-wrapper">
          <span class="ln-headline--hero ln-hero-banner__headline">Stay up-to-date with LucaNet</span>
        </div>
      </div>
      <div class="ln-hero-banner__background-image" style="background-image: url('https://www.lucanet.com/media/cache/slider_450_lg/images/slider-image/header-uebersicht-presse-1920-450.jpg')"></div>
    </div>
    <!--  -->
    <main>
      <div class="container ln-breadcrumb"> 

      </div>
      <div class="full-width-block">
        <div class="container"> 
          <div class="row">
            <div class="col-xs-12 col-sm-7 col-md-8 mb15"><h1>LucaNet press area</h1><p>On our homepage, journalists will find extensive information about LucaNet, our software and our range of consulting and training services.</p><p>As experts in our field, we will be happy to answer your questions on topics such as business intelligence, consolidation, planning and controlling, electronic reporting to the German tax authority and international accounting (IFRS/GAAP).</p><p>If you need further information on specific topics in the field of consolidation, planning, reporting and analysis, simply drop us a line.</p></div>
            <div class="col-xs-12 col-sm-5 col-md-4"><div class="ln-teaser"><div class="ln-teaser__item"><div class="ln-teaser__body"><span class="ln-teaser__headline">Further information can be found here:</span></div><span class="ln-teaser__footer ln-teaser__footer--editor-links"><a class="btn btn-green mt10" href="https://www.lucanet.com/en/info-center/press-releases/" role="button">Press Releases</a><a class="btn btn-green mt10" href="https://www.lucanet.com/en/info-center/company-profile" role="button">LucaNet's company profile</a><a class="btn btn-green mt10" href="https://www.lucanet.com/en/info-center/press-kit/" role="button">Go to press material</a></span></div></div></div>
          </div>
        </div>
      </div>
      <div class="full-width-block">
        <div class="container">
          <div class="row">
            <div class="col-xs-12"><h2>Your press contact</h2></div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="ln-teaser__grid-item"><div class="ln-teaser__item"><picture class="ln-teaser__image"><img class="img-responsive" itemprop="image" src="https://www.lucanet.com/media/cache/person/images/person/juliane-batliner.jpg" title=" Juliane Batliner, Public Relations Manager" alt=" Juliane Batliner, Public Relations Manager"></picture><div class="ln-teaser__body"><span class="ln-teaser__headline">
                 Juliane Batliner
            </span><span class="ln-teaser__meta">
                Public Relations Manager
            </span><div class="ln-teaser__text mt20"></div></div></div></div></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped> 

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
.ln-breadcrumb {
    display: block;
    padding: 20px 15px;
}
.full-width-block {
    position: relative;
    width: 100%;
    padding: 32px 0;
    color: #333;
    box-shadow: none;
}
.ln-teaser {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
}
.ln-teaser__item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    height: 100%;
    margin: 0;
    border: 0;
    color: #333;
    background-color: #fff;
    box-shadow: 2px 2px 36px 20px rgba(0,0,0,.03);
    cursor: pointer;
    transition: box-shadow .5s ease,transform .5s ease;
    outline: 0!important;
}
.ln-teaser__body {
    display: flex;
    flex-direction: column;
    padding: 30px 35px;
}
.ln-teaser__headline {
    display: inline-block;
    color: #202a60;
    display: block;
    font-family: Roboto,Helvetica Neue,Arial,sans-serif;
    font-style: normal;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 400;
    line-height: 24【px;
}
.ln-teaser__footer {
    display: flex;
    align-items: flex-end;
    flex: 1 1 auto;
    padding: 10px 35px 30px;
    justify-content: flex-start;
}
.ln-teaser__footer--editor-links {
    flex-direction: column;
    align-items: stretch;
}
p{
  font-size: 18px;
}
.ln-teaser__grid-item {
    position: relative;
    flex: 0 0 100%;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 20px;
    outline: 0!important;
}
.ln-teaser__meta {
    display: inline-block;
    font-size: 13px;
    color: #999;
}







@media (min-width: 62rem) {
  .ln-hero-banner--theme-dark {
    background: none;
  }
  .ln-hero-banner--valign-middle .ln-hero-banner__container-wrapper {
    top: 50%;
    transform: translateY(-50%);
  }
  .container {
    width: 960px;
    max-width: 960px;
  }
  .ln-hero-banner--align-center .ln-hero-banner__element-wrapper {
    margin-left: auto;
    margin-right: auto;
  }
  .ln-hero-banner--align-right .ln-hero-banner__element-wrapper {
    margin-left: auto;
    margin-right: 0;
}
  .ln-hero-banner__element-wrapper {
    width: 66%;
  }
  .ln-hero-banner__headline {
    letter-spacing: 0;
    color: #008bd2;
  }
  .ln-hero-banner__headline, .ln-hero-banner__subline {
    padding: .625rem;
    background-color: hsla(0,0%,100%,.8);
}
  .ln-hero-banner--theme-dark .ln-hero-banner__headline,
  .ln-hero-banner--theme-dark .ln-hero-banner__subline {
    color: #fff;
    background-color: transparent;
    padding: 0;
  }
  .ln-headline--hero {
    font-size: 52px;
    margin-bottom: 10px;
    font-family: sans-serif;
    font-style: normal;
    line-height: 1.1;
    margin-top: 0;
    font-weight: 300;
    text-transform: uppercase;
  }
  .ln-hero-banner--theme-dark .ln-hero-banner__background-image {
    display: block;
  }
  .ln-breadcrumb {
    display: block;
    padding: 20px 15px;
  }
  .full-width-block {
    padding: 32px 0;
  }
  .full-width-block--large-space-below {
    padding: 32px 0;
    padding-bottom: 65px;
  }
  .ln-headline--normal {
    font-size: 38px;
  }
  .ln-teaser .ln-teaser__grid-item {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .ln-teaser--grid-2 .ln-teaser__grid-item {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media screen and (min-width: 75rem) {
  .container {
    width: 1160px;
    max-width: 1160px;
  }
}
@media screen and (min-width: 93.75rem) {
  .container {
    width: 1400px;
    max-width: 1400px;
  }
}
</style>