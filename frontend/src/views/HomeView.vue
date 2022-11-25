<!-- -->
<template>
  <div>
      <div class="home-main">
          <div class="content">WELCOME TO SHOWROOM</div>
          <div class="image">
              <img @click="scrollReveal()" src="../img/backgr.jpg" alt="" class="home-img">
          </div>
      </div>


      <div class="home-category">
          <router-link @click="scrollToTop()" to="/product" class="box">
              <img src="../img/sendan.png" alt="">
              <h3>Sedans</h3>
          </router-link>

          <router-link @click="scrollToTop()" to="/product" class="box">
              <img src="../img/suv.png" alt="">
              <h3>SUV</h3>
          </router-link>

          <router-link @click="scrollToTop()" to="/product" class="box">
              <img src="../img/coupe1.png" alt="">
              <h3>Coupé</h3>
          </router-link>

          <router-link @click="scrollToTop()" to="/product" class="box">
              <img src="../img/dadung.png" alt="">
              <h3>Multi-purpose vehicle</h3>
          </router-link>

      </div>

      <div class="home-about">
          <div class="image">
              <img src="../img/logo.jpg" alt="">
          </div>
          <div class="content">
              <span>why choose us?</span>
              <h3 class="title">Class and luxury!</h3>
              <p>KN is a website specializing in providing high-end cars from Mercedes brands.
                        Here, customers will be provided with full information and prices of car models.
                        Moreover, we are always dedicated to consulting all questions for customers.</p>

              </div>
          </div>
      </div>
</template>

<script>
export default {
  name: "HomeView",

  methods: {
      scrollToTop() {
          window.scrollTo(0, 0);
      } 
  }
};


</script>

<style scoped>

.home-about .image img {
  width: 100%;
}

.home-main,
.home-about,
.home-banner,
.home-category {
  padding: 2rem 10%;
}

.home-main {
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 2rem;
  position: relative;
  overflow: hidden;
}


.home-main .content  {
  font-size: 50px;
  position: absolute;
  margin-left: 20px;
  margin-top: 50px;
  color: coral;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.home-main .image {
  flex: 1 1 41rem;
  margin-top: -5rem;
  width: 100%;
}

.home-main .image .home-img {
  width: 100%;
  margin-top: 5rem;
}


/* home category */
.home-category {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1.5rem;
  padding-bottom: 5rem;
}

.home-category .box {
  padding: 2rem;
  text-align: center;
  border-radius: .5rem;
  background: #f7f7f7;
}

.home-category .box:hover {
  background: #27ae60;
}

.home-category .box:hover h3 {
  color: #fff;
}

.home-category .box img {
  height: 7rem;
}

.home-category .box h3 {
  font-size: 1.8rem;
  color: #130f40;
}


/* home banner */
.home-banner .row-banner {
  background: url(../assets/images/row-banner.png) no-repeat;
  height: 45rem;
  background-size: cover;
  background-position: center;
  position: relative;
}

.home-banner .row-banner .content {
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translateY(-50%);
}

.home-banner .row-banner .content span {
  font-family: 'Satisfy', cursive;
  font-size: 4rem;
  color: #27ae60;
  color: #130f40;
}

.home-banner .row-banner .content h3 {
  font-size: 6rem;
  color: red;
  text-transform: uppercase;
}

.home-banner .row-banner .content p {
  font-size: 2rem;
  padding-bottom: 1rem;
}


.home-banner .grid-banner .grid {
  border-radius: 1rem;
  overflow: hidden;
  height: 45rem;
}

.home-banner .grid-banner .grid:hover img {
  transform: scale(1.2);
}

.home-banner .grid-banner .grid img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.home-banner .grid-banner .grid .content {
  position: absolute;
  top: 2rem;
  padding: 0 2rem;
}

.home-banner .grid-banner .grid .content.center {
  text-align: center;
  width: 100%;
}

.home-banner .grid-banner .grid .content.center span {
  color: #666;
}

.home-banner .grid-banner .grid .content.center h3 {
  color: #130f40;
}

.home-banner .grid-banner .grid .content span {
  font-size: 2.5rem;
  color: #fff;
}

.home-banner .grid-banner .grid .content h3 {
  font-size: 3rem;
  color: #fff;
  padding-top: .5rem;
}

.home-about {
  
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  background: #f7f7f7;
}



.home-about .content {

  flex: 1 1 40rem;
}

.home-about .content span {
  font-family: 'Satisfy', cursive;
  font-size: 3rem;
  color: #27ae60;
}

.home-about .content .title {
  font-size: 3rem;
  padding-top: .5rem;
  color: #130f40;
}

.home-about .content p {
  padding: 1rem 0;
  line-height: 2;
  font-size: 1.4rem;
  color: #666;
}

.home-about .content .icons-container {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.home-about .content .icons-container .icons {
  flex: 1 1 20rem;
  border-radius: .5rem;
  background: #fff;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}

.home-about .content .icons-container .icons h3 {
  font-size: 1.7rem;
  color: #130f40;
}

@media (max-width: 768px) {
  #menu-btn {
      display: inline-block;
  }

  .home-banner .grid-banner .content h3 {
      font-size: 15px !important;
  }

  .home-banner .grid-banner .content.center {
      padding-left: 0px !important;
  }

}

@media (max-width: 576px) {
  .home-main .content h3 {
      font-size: 3rem;
  }

  .home-main .content p {
      font-size: 1.5rem;
  }
}
</style>




