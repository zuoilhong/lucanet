<template>
  <div>
    <!--  -->
    <main>
      <div class="container ln-breadcrumb"></div>
      <div class="full-width-block">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-7 col-md-8 mb15">
              <h1>The story of LucaNet</h1>
              <h2 class="mt0">What made us who we are today</h2>
              <p>
                Our story begins with two young students who met while studying business management. Though they went their separate ways after graduating, their work as a business consultant and a financial auditor quickly led them to realize that the systems available on the market fail to meet the needs of controlling and consolidation departments at midsize companies and large corporate groups. Rolf-Jürgen Moll and Oliver Schmitz thus decided to strike out on their own in 1999. They envisioned a product that would combine planning, controlling, and consolidation in one software tool. Besides being intuitive, the solution would need to deliver validated figures whenever required. Moll and Schmitz also wanted it to simplify all financial processes.
              </p>
            </div>
            <div class="col-xs-12 col-sm-5 col-md-4">
              <div class="ln-teaser">
                <div class="ln-teaser__item">
                  <div class="ln-teaser__body"><span class="ln-teaser__text"><p><strong>LucaNet company brochure</strong></p><p>Learn everything about LucaNet in our image brochure.</p></span></div>
                  <span class="ln-teaser__footer ln-teaser__footer--editor-links">
                    <a
                      class="btn btn-green mt10"
                      href="https://www.lucanet.com/en/info-center/press-releases/"
                      role="button"
                    >To the brochures</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="full-width-block">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 image-block">
              <img src="../../assets/lucanet-management-board.jpg" class="img-responsive" />
              <p class="figcaption">The Management Board of LucaNet AG: Dominik Duchon, Oliver Schmitz and Rolf-Jürgen Moll</p>
            </div>
            <div class="col-xs-12 col-sm-6"><p>The software proved to be successful, which led to more customers, employees, and revenue. LucaNet’s executive board grew as well: In 2010, the duo became a trio following the addition of Dominik Duchon, who has been the director of sales at the company since 2008, and fully complements LucaNet management team.</p><p>Today, more than 2,700 customers in 50 countries are working with LucaNet’s all-in-one solution for consolidation, planning, reporting, and analysis. The result: we’ve helped create countless financial statements and financial plans. The expertise we’ve gained in the process has also made us the perfect partner to contact about any and all questions related to accounting and controlling. Whether it’s in more technical aspects or the implementation of actual projects, our consultants stand ready to put their well-founded skills and knowledge at our customers’ disposal.</p></div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="full-width-block"><div class="container"><div class="row"><div class="col-xs-12  tal"><p>While we’ve come a long way already, we are still striving towards our main goal. The constant effort to discover new ways to make established ideas just a bit cleverer takes courage, creativity, and a desire to innovate. Driven by our desire to keep getting better at what we do, we’re always working to improve our software solutions and services on behalf of our customers, partners, and employees. After all, only those who stay curious are capable of creating something new.</p></div></div></div></div>
      <!--  -->
      <div class="full-width-block full-width-block--large-space-below">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h2 class=" tal ln-headline--normal">So where does our name come from?</h2>
               </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6"><p>Around 500 years ago lived a man who was incredibly influential but remains a relatively unknown figure of the Renaissance: Luca Pacioli.</p><p>He was a Franciscan friar who wrote a book that was destined to have far-reaching effects on the world of commerce. Known now simply as the Summa, the tome’s full title is Summa de arithmetica, geometria, proportioni et proportionalita (or “Summary of arithmetic, geometry, proportions, and proportionality”). A rather small section comprising just 27 pages has since become the most influential part of the Summa. In it, Pacioli explains the “Venetian method” of double-entry accounting, taking a company founded by a young merchant in Venice as an example. This type of accounting – which involves an inventory, balance sheet, and profit and loss statement – remains the global standard to this day. With our company name, we wish to pay a small tribute to Luca Pacioli and his work.</p><p>&nbsp;</p></div>
            <div class="col-xs-12 col-sm-6">
              <img src="../../assets/luca-pacioli-coins-2.jpg" class="img-responsive"/>
              <p class="figcaption">500 Lire coin with the Italian Franciscan monk Luca Pacioli</p>
            </div>
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
  box-shadow: 2px 2px 36px 20px rgba(0, 0, 0, 0.03);
  cursor: pointer;
  transition: box-shadow 0.5s ease, transform 0.5s ease;
  outline: 0 !important;
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
  font-family: Roboto, Helvetica Neue, Arial, sans-serif;
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
p {
  font-size: 18px;
}
.ln-teaser__grid-item {
  position: relative;
  flex: 0 0 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 20px;
  outline: 0 !important;
}
.ln-teaser__meta {
  display: inline-block;
  font-size: 13px;
  color: #999;
}
.ln-metastream--four {
  background-image: url("../../assets/meta_four_xl.png");
}

.ln-metastream--middle {
  background-position: 50%;
}
.ln-metastream {
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.full-width-block--large-space-below {
  padding-bottom: 65px;
}
.full-width-block--large-space-above {
  padding-top: 65px;
}
.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}

.embed-responsive {
  position: relative;
  display: block;
  height: 377px;
  padding: 0;
  overflow: hidden;
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

@media (min-width: 62rem) {
  .ln-hero-banner--theme-dark {
    background: none;
  }
  .ln-hero-banner--valign-middle .ln-hero-banner__container-wrapper {
    top: 10%;
    transform: translateY(-10%);
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
  .ln-hero-banner__headline,
  .ln-hero-banner__subline {
    padding: 0.625rem;
    background-color: hsla(0, 0%, 100%, 0.8);
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