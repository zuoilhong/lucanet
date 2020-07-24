<template>
  <div class="page-header-box">
    <div class="container">
      <div class="ln-header__wrapper">
        <div class="ln-header__item">
          <div class="ln-header__logo">
            <router-link to="/home/index">
              <img
                class="img-responsive"
                src="https://www.lucanet.com/images/lucanet-ag_logo.svg"
                title="LucaNet AG Home"
                alt="Logo: LucaNet AG"
              />
            </router-link>
          </div>
        </div>
        <div class="ln-header__item">
          <div class="ln-navigation">
            <div class="ln-main-menu">
              <ul class="ln-main-menu__list">
                <li class="ln-main-menu__item ln-main-menu__item--has-sub">
                  <router-link to="/" class="ln-main-menu__link" title="Solutions">Solutions</router-link>
                  <div class="container ln-mega-menu">
                    <div class="ln-mega-menu__wrapper-left">
                      <div class="ln-mega-menu__grid">
                        <div class="ln-mega-menu__grid-item">
                          <ul class="ln-mega-menu__list">
                            <li class="ln-mega-menu__headline" @click="goto('Close')">Close</li>
                            <li class="ln-mega-menu__item">
                              <router-link
                                to="/financial"
                                title="Financial Consolidation"
                              >Financial Consolidation</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link to="/ifrs16" title="IFRS 16 ">IFRS 16</router-link>
                            </li>
                          </ul>
                        </div>
                        <div class="ln-mega-menu__grid-item">
                          <ul class="ln-mega-menu__list">
                            <li class="ln-mega-menu__headline" @click="goto('Plan')">Plan</li>
                            <li class="ln-mega-menu__item">
                              <router-link
                                to="/Financial_Planning"
                                title="Financial Planning and Budgeting"
                              >Financial Planning and Budgeting</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link
                                to="/forecasting"
                                title="Forecasting and Scenario Planning"
                              >Forecasting and Scenario Planning</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link 
                                to="/group_Controlling"
                                title="Group Controlling">Group Controlling</router-link>
                            </li>
                          </ul>
                        </div>
                        <div class="ln-mega-menu__grid-item">
                          <ul class="ln-mega-menu__list">
                            <li class="ln-mega-menu__headline" @click="goto('Report')">Report</li>
                            <li class="ln-mega-menu__item">
                              <router-link to="/management" title="Management Reporting">Management Reporting</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link to="/business" title="BI and Dashboarding ">BI and Dashboarding</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link
                                to="/disclosure"
                                title="Disclosure Management and ESEF-Reporting "
                              >Disclosure Management and ESEF-Reporting</router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="ln-mega-menu__grid">
                        <div class="ln-mega-menu__grid-item">
                          <ul class="ln-mega-menu__list">
                            <li class="ln-mega-menu__headline" @click="goto('Collect')">Collect</li>
                            <li class="ln-mega-menu__item">
                              <router-link to="/collect/migration" title="Data Integration ">Data Integration</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link
                                to="/collect/quality"
                                title="Data Collection and Validation"
                              >Data Collection and Validation</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link
                                to="/collect/intercompany"
                                title="Intercompany Reconciliation "
                              >Intercompany Reconciliation</router-link>
                            </li>
                          </ul>
                        </div>
                        <div class="ln-mega-menu__grid-item">
                          <ul class="ln-mega-menu__list">
                            <li class="ln-mega-menu__headline" style="cursor:default;color:#202a60">Technology</li>
                            <li class="ln-mega-menu__item">
                              <router-link to="/technology/software-architecture" title="Software-Architecture">Software-Architecture</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link
                                to="/technology/cloud"
                                title="LucaNet.Cloud vs. On-Premises"
                              >LucaNet.Cloud vs. On-Premises</router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="ln-main-menu__item">
                  <router-link to="/consulting" class="ln-main-menu__link" title="Consulting">Consulting</router-link>
                </li>
                <li class="ln-main-menu__item ln-main-menu__item--has-sub">
                  <router-link to class="ln-main-menu__link" title="Info-Center">Info-Center</router-link>
                  <div class="container ln-mega-menu">
                    <div class="ln-mega-menu__wrapper-left">
                      <div class="ln-mega-menu__grid">
                        <div class="ln-mega-menu__grid-item">
                          <ul class="ln-mega-menu__list">
                            <li class="ln-mega-menu__headline" style="cursor:default;color:#202a60">Resources</li>
                            <li class="ln-mega-menu__item">
                              <router-link to="/resources/blog" title="LucaNet Blog">Blog</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link
                                to
                                title="White papers and e-books"
                              >White papers and e-books</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="Brochures">Brochures</router-link>
                            </li>
                          </ul>
                        </div>
                        <div class="ln-mega-menu__grid-item">
                          <ul class="ln-mega-menu__list">
                            <li class="ln-mega-menu__headline" style="cursor:default;color:#202a60">Press</li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="Overview">Overview</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="Press releases">Press releases</router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="ln-main-menu__item">
                  <router-link to="/references" class="ln-main-menu__link" title="Solutions">References</router-link>
                </li>
                <li class="ln-main-menu__item ln-main-menu__item--has-sub">
                  <router-link to class="ln-main-menu__link" title="Solutions">Company</router-link>
                  <div class="container ln-mega-menu">
                    <div class="ln-mega-menu__wrapper-left">
                      <div class="ln-mega-menu__grid">
                        <div class="ln-mega-menu__grid-item">
                          <ul class="ln-mega-menu__list">
                            <li class="ln-mega-menu__headline">Company</li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="Overview">Overview</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="LucaNet history">LucaNet history</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="Management team">Management team</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="Locations">Locations</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="Award-winning company">Award-winning company</router-link>
                            </li>
                          </ul>
                        </div>
                        <div class="ln-mega-menu__grid-item">
                          <ul class="ln-mega-menu__list">
                            <li class="ln-mega-menu__headline">Career</li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="Working at LucaNet">Working at LucaNet</router-link>
                            </li>
                          </ul>
                        </div>
                        <div class="ln-mega-menu__grid-item">
                          <ul class="ln-mega-menu__list">
                            <li class="ln-mega-menu__headline">Contact</li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="Contact form">Contact form</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="Support">Support</router-link>
                            </li>
                            <li class="ln-mega-menu__headline" style="margin:12px 0">Legal notice</li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="Imprint">Imprint</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="Terms and conditions">Terms and conditions</router-link>
                            </li>
                            <li class="ln-mega-menu__item">
                              <router-link to title="Data protection">Data protection</router-link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
  data(){
    return {

    }
  },
  methods:{
    goto(type){
      switch(type) {
        case 'Close':
          this.$router.push({
            path:'/close'
          })
          break;
        case 'Plan':
           this.$router.push({
            path:'/plan'
          })
          break; 
        case 'Report':
           this.$router.push({
            path:'/report'
          })
          break; 
        case 'Collect':
           this.$router.push({
            path:'/collect'
          })
          break; 
      }
    }
  }
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
.container {
  padding: 0 0;
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
  background: #008bd2 url("../../assets/mobile-navigation-bg.png") no-repeat
    top/cover;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  overflow: auto;
  transition: right 0.5s ease;
  visibility: hidden;
}
.ln-main-menu {
  padding: 0;
  flex-grow: 1;
}
.ln-main-menu,
.ln-main-menu__list {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
}
.ln-main-menu,
.ln-main-menu__list {
  flex-direction: row;
  padding: 0;
  background: transparent;
  box-shadow: none;
  position: relative;
}

.ln-main-menu,
.ln-main-menu__list {
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
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
}
.ln-main-menu__link {
  position: relative;
  flex-grow: 1;
  height: 100%;
  padding: 0.9375rem 0.3125rem;
  font-size: 16px;
  font-weight: 400;
}
.ln-main-menu__link,
.ln-main-menu__link:hover {
  color: #04a88c;
  text-decoration: none;
  border-bottom: 0;
}
.ln-header .container {
  padding: 0;
}
.ln-main-menu__item--active,
.ln-main-menu__item:hover {
  box-shadow: inset 0 -3px 0 0 #04a88c;
}
.ln-main-menu__list .ln-main-menu__item--has-sub:hover::after {
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
.ln-main-menu__item--has-sub:hover {
  .ln-mega-menu {
    display: block;
  }
}
.header-nav {
  width: 100%;
  overflow: hidden;
  background: #f2f2f2;
}
.ln-header .container {
  padding: 0;
}
.ln-mega-menu {
  display: none;
  position: fixed;
  top: 85px;
  height: 100vh;
  padding: 0;
  z-index: 650;
  overflow: auto;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  right: -100%;
  transition: right 0.5s ease;
}
.ln-mega-menu__wrapper-left {
  flex-grow: 1;
  padding: 50px 20px;
  align-items: stretch;
}
.ln-mega-menu__grid {
  display: flex;
  align-items: stretch;
  flex-direction: row;
}
.ln-mega-menu__grid-item {
  flex-direction: column;
}
.ln-mega-menu__list {
  flex-basis: 100%;
  list-style: none;
  margin: 0;
  padding: 0 0 15px;
}
.ln-mega-menu__grid:last-child .ln-mega-menu__list {
  margin-bottom: 0;
  border: 0;
}
.ln-mega-menu__headline {
  color: #fff;
  display: block;
  font-size: 20px;
  line-height: 1.1;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 12px;
  font-family: Roboto, Helvetica Neue, Arial, sans-serif;
  &:hover{
    color: #04a88c;
    cursor: pointer;
  }
}
.ln-mega-menu__item {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  padding: 0.3125rem 0 0.3125rem 0.9375rem;
}
.ln-mega-menu__item,
.ln-mega-menu__item a {
  position: relative;
  font-size: 18px;
  color: #fff;
  font-weight: 300;
}
.ln-mega-menu__item a {
  text-decoration: none;
  width: 100%;
  display: block;
  border-bottom: 0;
  font-family: initial;
  &:hover {
    color: #04a88c;
  }
}
.ln-mega-menu__item:before {
  position: absolute;
  left: 0;
  content: "\00BB";
  font-size: 18px;
  font-weight: 300;
  padding-right: 5.4px;
  color: #fff;
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
  .ln-main-menu,
  .ln-main-menu__list {
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
    margin-left: 0.643em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
    transition: border-top-color 0.2s ease;
  }
  .ln-mega-menu {
    height: auto;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    background: #f2f2f2;
    box-shadow: none;
  }
  .ln-mega-menu__grid-item {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    margin-bottom: 2.5rem;
  }
  .ln-mega-menu__grid:last-child .ln-mega-menu__grid-item {
    margin-bottom: 0;
  }
  .ln-mega-menu__list {
    height: 100%;
    margin: 0 20px;
    padding: 0 0 1.875rem 15px;
    border-bottom: 1px solid #bbb;
  }
  .ln-mega-menu__grid:last-child .ln-mega-menu__list {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .ln-mega-menu__headline {
    color: #202a60;
  }
  .ln-mega-menu__item {
    flex-direction: column;
    border: 0;
    padding: 0 0 0 15px;
    font-size: 18px;
    color: #333;
  }
  .ln-mega-menu__item:before {
    color: #333;
  }
  .ln-mega-menu__item a {
    display: inline-block;
    width: auto;
    font-size: 18px;
    color: #333;
  }
}
@media screen and (min-width: 93.75rem) {
  .container {
    width: 1400px;
    max-width: 1400px;
  }
}
</style>