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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.page-footer {
  padding: 40px 0.75rem;
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
    height: 85px;
    border-style: none;
}
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
</style>