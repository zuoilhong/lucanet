<template>
  <div class="page-header-box">
    <div class="container">
      <div class="ln-header__wrapper">
        <div class="ln-header__item">
          <div class="ln-header__logo">
            <router-link to="/home/index">
              <img class="img-responsive" src="https://www.lucanet.com/images/lucanet-ag_logo.svg" title="LucaNet AG Home" alt="Logo: LucaNet AG">
            </router-link>
          </div>
        </div>
        <div class="ln-header__item">
          <div class="ln-navigation">
            <div class="ln-main-menu">
              <ul class="ln-main-menu__list">
                <li class="ln-main-menu__item ln-main-menu__item--has-sub ln-main-menu__item--active">
                  <router-link to="" class="ln-main-menu__link" title="Solutions">Solutions</router-link>
                  <div class="container ln-mega-menu" style="background:red;width:100%">

                  </div>
                </li>
                <li class="ln-main-menu__item">
                  <router-link to="" class="ln-main-menu__link" title="Consulting">Consulting</router-link>
                </li>
                <li class="ln-main-menu__item ln-main-menu__item--has-sub">
                  <router-link to="" class="ln-main-menu__link" title="Info-Center">Info-Center</router-link>
                </li>
                <li class="ln-main-menu__item">
                  <router-link to="" class="ln-main-menu__link" title="Solutions">References</router-link>
                </li>
                <li class="ln-main-menu__item ln-main-menu__item--has-sub">
                  <router-link to="" class="ln-main-menu__link" title="Solutions">Company</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
.page-header-box {
  position: fixed;
  width: 100%;
  height: 85px;
  top: 0;
  z-index: 600;
  background-color: #fff;
  transition: box-shadow 1s ease;
  border-bottom: 1px solid #f5f5f5;
}
.ln-header__wrapper {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-items: center;
    justify-content: space-between;
}
.ln-header__logo {
    display: block;
    height: auto;
    width: 210px;
    padding: 16px 15px;
    border: 0;
}
.img-responsive {
    display: block;
    max-width: 100%;
    height: 53px;
}
.container{
  padding: 0 0
}
.ln-navigation {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: fixed;
    top: 0;
    bottom: 0;
    right: -100%;
    width: 100%;
    background: #008bd2 url('../../assets/mobile-navigation-bg.png') no-repeat top/cover;
    box-shadow: 0 1px 5px rgba(0,0,0,.15);
    overflow: auto;
    transition: right .5s ease;
    visibility: hidden;
}
.ln-main-menu {
    padding: 0;
    flex-grow: 1;
}
.ln-main-menu, .ln-main-menu__list {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    width: 100%;
}
.ln-main-menu, .ln-main-menu__list {
    flex-direction: row;
    padding: 0;
    background: transparent;
    box-shadow: none;
    position: relative;
}
.ln-main-menu {
    justify-content: center;
    height: 100%;
    margin-top: 0;
}
.ln-main-menu, .ln-main-menu__list {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    width: 100%;
}
.ln-main-menu__list {
    list-style: none;
    padding: 0 15px;
    margin: 0;
}
.ln-main-menu__item {
    position: relative;
    display: flex;
    align-items: stretch;
    border-bottom: 1px solid hsla(0,0%,100%,.3);
}
.ln-main-menu__link {
    position: relative;
    flex-grow: 1;
    height: 100%;
    padding: .9375rem .3125rem;
    font-size: 16px;
    font-weight: 400;
}
.ln-main-menu__link, .ln-main-menu__link:hover {
    color: #04a88c;
    text-decoration: none;
    border-bottom: 0;
}
.ln-header .container {
    padding: 0;
}
.ln-main-menu__item--active ,.ln-main-menu__item:hover{
    box-shadow: inset 0 -3px 0 0 #04a88c;
}
.ln-main-menu__list .ln-main-menu__item--has-sub:hover::after{
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #04a88c;
  bottom: -6px;
  content: "";
  display: block;
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  z-index: 651;
}

@media screen and (min-width: 75rem) {
  .container {
    width: 1160px;
    max-width: 1160px;
  }
  .ln-header__wrapper {
    align-items: stretch;
  }
  .ln-navigation {
    display: flex;
    position: relative;
    height: 100%;
    background: none;
    box-shadow: none;
    overflow: inherit;
    left: auto;
    right: 0;
    transition: none;
    visibility: visible;
}
.ln-main-menu, .ln-main-menu__list {
    flex-direction: row;
    padding: 0;
    background: transparent;
    box-shadow: none;
    position: relative;
}
.ln-main-menu__list {
    display: flex;
    flex-basis: auto;
    justify-content: flex-end;
    width: 100%;
    transition: none;
    top: 0;
}
.ln-main-menu__item {
    display: inline-block;
    border-bottom: 0;
    padding: 0;
}
.ln-main-menu__link {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    justify-content: center;
    color: #202a60;
    padding: 0 15px;
    font-size: 18px;
    line-height: 1.7;
    position: relative;
}
.ln-main-menu__item--has-sub .ln-main-menu__link:after {
    display: block;
    margin-left: .643em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
    transition: border-top-color .2s ease;
}
}
@media screen and (min-width: 93.75rem){
  .container {
      width: 1400px;
      max-width: 1400px;
  }
}
</style>