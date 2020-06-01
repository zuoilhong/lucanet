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
        
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
@media screen and (min-width: 75rem) {
  .container {
    width: 1160px;
    max-width: 1160px;
  }
  .ln-header__wrapper {
    align-items: stretch;
  }
}
</style>