<template>
  <div class="page-footer">
    <div class="container">
      <div class="footer-top">
        <router-link to="/home/index" class="footer__logo" title="LucaNet AG Home">
          <img
            class="img-responsive"
            src="https://www.lucanet.com/images/logo_lucanet-ag_claim-white.svg"
            alt="Logo: LucaNet AG"
          />
        </router-link>
      </div>
      <div class="footer__content">
        <div class="footer__group">
          <span class="footer__headline">company</span>
          <ul class="footer__nav">
            <li>
              <a href="/en/pages/company/overview" title="Overview">Overview</a>
            </li>
            <li>
              <a href="/en/pages/company/lucanet-history" title="LucaNet history">LucaNet history</a>
            </li>
            <li>
              <a href="/en/pages/company/management-team" title="Management team">Management team</a>
            </li>
            <li>
              <a href="/en/pages/company/locations" title="Locations">Locations</a>
            </li>
            <li>
              <a
                href="/en/pages/company/award-winning-company"
                title="Award-winning company"
              >Award-winning company</a>
            </li>
          </ul>
        </div>
        <div class="footer__group">
          <span class="footer__headline">Contact</span>
          <ul class="footer__nav">
            <li>
              <a href="/en/contact/" title="Contact form">Contact form</a>
            </li>
            <li>
              <a href="//customer.lucanet.com/en/support" title="Support" target="_blank">Support</a>
            </li>
          </ul>
        </div>
        <div class="footer__group">
          <span class="footer__headline">Legal Notice</span>
          <ul id="cookie-settings" class="footer__nav">
            <li>
              <a href="/en/pages/law/imprint" title="Imprint">Imprint</a>
            </li>
            <li>
              <a
                href="/en/law/terms-and-conditions"
                title="Terms and conditions"
              >Terms and conditions</a>
            </li>
            <li>
              <a href="/en/law/data-protection" title="Data protection">Data protection</a>
            </li>
            <li>
              <a href="#" data-toggle="modal" data-target="#cookieModal">Cookie Settings</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__meta">
        <div class="footer__social">
          <ul>
            <li>
              <a href="https://www.youtube.com/user/LucaNetAG" target="_blank">
                <i class="fa fa-youtube iconfont icon-fa-youtube"></i>
                <span class="sr-only">YouTube</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lucanet.live/" target="_blank">
                <i class="fa fa-instagram iconfont icon-instagram"></i>
                <span class="sr-only">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__copyright">
          <p>© Copyright 2020 - LucaNet AG</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.page-footer {
  padding: 80px 0;
  background-image: linear-gradient(75deg, #202a60, #105b99 50%, #008bd2);
  .footer-top {
    flex-direction: column;
    margin-bottom: 40px;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
  }
  .footer__content,
  .footer__meta,
  .footer__top {
    display: flex;
    flex-wrap: wrap;
  }
  .footer__logo {
    display: block;
    width: 200px;
    margin: 0 0 21px;
    a {
      border: 0;
      font-weight: 300;
      font-style: normal;
      color: #fff;
    }
    img {
      max-width: 100%;
      width: 288px;
      height: 57px;
      border-style: none;
    }
  }
}
.footer__headline {
  display: block;
  margin: 1.875rem 0 0.3125rem;
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
}
.footer__nav {
  list-style: none;
  margin: 0;
  padding: 0;
}
.footer__nav li {
  position: relative;
  padding: 0 0 0.3125rem 0.9375rem;
  color: #fff;
}

.footer__nav li:before {
  display: block;
  position: absolute;
  content: "\BB";
  top: -2px;
  left: 0;
  margin-right: 5px;
}
.footer__nav a {
  border: 0;
  font-weight: 300;
  font-style: normal;
  color: #fff;
}
.footer__meta {
  margin-top: 2.5rem;
}
.footer__social > ul {
  margin-bottom: 2.5rem;
  list-style: none;
  padding: 0;
  text-align: left;
}
.footer__social > ul li {
  display: inline-block;
  padding: 0.3125rem;
}
.footer__social > ul li:not(:last-child) {
  margin-right: 7px;
}

.footer__social > ul li:first-child {
  padding: 10px 0 0;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
}
.footer__copyright>p {
    margin: 0 0 10px;
    font-size: .75rem;
    color: #fff;
    text-align: left;
}

@media screen and (min-width: 48rem) {
  .footer__copyright>p {
    margin:15px 0 0;
    font-size: 16px;
    text-align: right;
  }
  .footer__copyright,
  .footer__social {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .footer__social > ul {
    margin: 0;
  }
  .footer__nav li a {
    font-size: 18px;
  }
  .footer__nav li {
    padding: 0 0 10px 15px;
  }
}
@media screen and (min-width: 62rem) {
  .footer__group {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .footer__headline {
    margin: 0 0 10px;
    // font-size: 1.25rem;
  }
  ul {
    font-size: 18px;
  }
}
@media screen and (min-width: 75rem) {
  .container {
    width: 1160px;
    max-width: 1160px;
  }
  .ln-header__wrapper {
    align-items: stretch;
  }
}
@media screen and (min-width: 93.75rem) {
  .container {
    width: 1400px;
    max-width: 1400px;
  }
}
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1857897_fa8xdwjfxoi.eot?t=1591081510514'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1857897_fa8xdwjfxoi.eot?t=1591081510514#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUIAAsAAAAACYQAAAS7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqGZIYFATYCJAMMCwgABCAFhG0HQBtVCMiOkcuQDCy//H/y+X+37L68hyUwqqGiRlVgZlrPMGEsSDOpeNKuwq5XVZAV07+eAxF12+u/oMyTNMGmiaIAgwADjCTTpD/uVc08T4Dmy5qOcyz8lAtgOEAB26ObxvSCtSAlrIB3GLu8yKuBAHgl2iDz0NFuWDH6PAIgR221BGvCilUQCKvBXLC1gtxoWZs3uYcA3vV+nvzoFCvAMRXo1xq/D6nCgG/4L32ontQtRcc1nBsA2wVQQBsAA7IWeivQINsGxctaVl1pxhDcUIlkEk+qqM3GPzyAQ4B00LV2hG9h5hyUzOICB7/0kR+17OJmmwFpQCaAnBif9SUEpt6R5cjPKnI6U2x2u00U6z0QUs67+TJPeC/o+yIHCDH2D4G+TojsyYUQHiuzVoZXE+KOrAI9fA5jjSfsPvm0aKvu3PSsayxSfuZF6Q6j0ebn3eKzhAjoPG8RwzmkdY1DiGRjTe4aN70P9L3Z8OocrKxqI9TwRA5B1AY9e9Wq3DVretYK7cMH+fDlmPpKb6js/KrsyJrcfK3QTkPmhFrvMjzhIIpVq4Ruj7xaCK8EIatX10ej7ljMk0iUx+MVt+ONdiSG3Yo5t0anrt0b3m8ciOzzbI/rTEPjYffNKJMY1T3bYuohKzHdScBjGyeMirUXm9yNhuMjd18uOB43Ep03XGme/5dFYkN2XcrfFtOjeckuh2a3mdd5T9tClStStw4pfJkfKPyz6xeFgbwv/jue+SxFUA7mNo823za0ymUfZt5hlFpft2jWN1PftGqW18n3oQCd5TL3ntfb7Jql0O+URFuALhn4GmMtzU/+g7E2jP7RgtGWtKQ5o+Ndg1bxWdMLtbwRmfaVg1wmypozVsgeuIr+Ke1G2dDGGU76V2PkDamMtQAj0xp9U1rExBnFXQaY2nZutZAO3J0um1gH6zMiP6J9rna66L+sI+x5M5M3fVmjSjYrg1dsQ9+weFLSC9IdQ5CUJaIbnGSYdd1WcVQaLTWk+V+53Smp7klf/z1pUmkJOPb75ebP233R9ve2n68dnV06fcyY6aUTBnB/ma4J00ukktIZ2dyAvyBSIboUM71VWnbp/KfYShQohE/3X0IeRQjvgU9Tt3KKUOqnBx79xT3K9bABgGSyOCmA5FV6jQ78934HrcbNC2em9vnfOjAAwCcvC5t54eRVhma1gBUHjWV/mqxhF1MUuo1WSWpJtQL1CYT3aAGvBJCEHszwRXd/NkRuwsrJIHAsioGyaoJm+DZgIugCZlb9gdfasN2CTCqKVBuAVl4FQKQ5ApwUV4BK8wjN8J+DSY7fwSwtFHhlyTxS0Cy1vEuVJU2uEisXiLXeYMBnOjTeb5woV89RJDWu8EhlstpQmxA7tuuQLgyTA7I6xIqGudWdNM0n+tSgXxwKricrSlAMqcE62au1q9G0UK/27X1FL9TOG/SD56KSSTSyKqJKC4hqeQUF+Jz+Gj7z/RPJqs2hkKgViLJkGZmqQe3woo7a6dAAPUwbaIS4lNEN5qrWiUbjw7N8VEF+oqHQLVOMbJAoVDypjsxL005Nh3RIL+1RL19Tbbvp9f77OwDA0x9KwxFKGPhdarsgOEebUynbagMNmlStSn4AAA==') format('woff2'),
  url('//at.alicdn.com/t/font_1857897_fa8xdwjfxoi.woff?t=1591081510514') format('woff'),
  url('//at.alicdn.com/t/font_1857897_fa8xdwjfxoi.ttf?t=1591081510514') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1857897_fa8xdwjfxoi.svg?t=1591081510514#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-fa-youtube:before {
  content: "\ea3c";
}

.icon-instagram:before {
  content: "\e648";
}
.icon-fa-youtube{
  font-size: 30px;
}
.icon-instagram{
  font-size: 24px;
}

</style>