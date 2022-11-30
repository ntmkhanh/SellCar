<template>

  <div>
    <div class="home-main">
      <div class="content">WELCOME TO 
        <span>SHOWROOM</span></div>
      <div class="image">
        <img src="../img/bagr.png" alt="" class="home-img">
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
.home-main .image .home-img:hover {
  filter: brightness(120%);
  filter: contrast(120%);
  filter: drop-shadow(10px 10px 10px rgb(34, 36, 34));
}


.home-about .image img {
  width: 100%;
}

.home-main,
.home-about,
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
  font-size: 60px;
  position: absolute;
  margin-left: 20px;
  margin-top: -80px;
  color: white;
  text-shadow: 1px 1px 2px rgb(188, 31, 7), 0 0 25px rgb(202, 40, 15), 0 0 5px rgb(55, 236, 48);
  font-family: Georgia, 'Times New Roman', Times, serif;
}
@keyframes color { 
	0% { color: #25d2dc;  } 
	50% { color: rgb(188, 216, 26);  }
	100% { color: #3ed81b;  } 
 } 

.home-main .content span{
  color: rgb(220, 232, 10);
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-family: 'Satisfy', cursive;
  font-size: 100px;
  -webkit-animation: color 1000ms infinite;
	-moz-animation: color 1000ms infinite; 
	-o-animation: color 1000ms infinite; 
	animation: color 1000ms infinite;
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

.home-about {
  display: flex;
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

@media (max-width: 768px) {
  #menu-btn {
    display: inline-block;
  }

}

@media (max-width: 576px) {
  .home-main .content h3 {
    font-size: 3rem;
  }

}
</style>




