<template>
    <div class="footer">
        
        <div class="box-container">

            <div class="box">
                <h3>Opening Hours</h3>
                <p>Everyday : 8:00am to 10:00pm</p>
                <h3>Contact</h3>
                <p><i class="fas fa-phone"></i> Phone: 0976038762, 0773856988</p>
                <p><i class="fas fa-map-marker"></i> Address: Can Tho, Viet Nam</p>
            </div>

            <div class="box">
                <h3>Quick Links</h3>
                <router-link @click="scrollToTop()" to="/"> <i class="fas fa-arrow-right"></i> Home</router-link>
                <router-link @click="scrollToTop()" to="/product"> <i class="fas fa-arrow-right"></i> Product</router-link>
                <router-link @click="scrollToTop()" to="/about"> <i class="fas fa-arrow-right"></i> About</router-link>
            </div>

            <div class="box">
                <div class="bottom">
            <div class="share">
                <a href="https://www.facebook.com/" class="fab fa-facebook-f" ></a>
                <a href="https://twitter.com/?lang=en" class="fab fa-twitter"></a>
                <a href="https://www.instagram.com/" class="fab fa-instagram"></a>
                <a href="https://github.com/" class="fab fa-github"></a>
            </div>

                </div>
            </div> 

        </div>
    </div>
</template>

<script>
export default {
    name: "FooterCom",
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped>
/* footer */
.footer {
    background: #f7f7f7;
    padding: 2rem 9%;
}

.footer .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1.5rem;
    margin-left: 15%;
}

.footer .box-container .box h3 {
    font-size: 1.5rem;
    color: #130f40;
    padding: 1rem 0;
}

.footer .box-container .box p {
    font-size: 1rem;
    color: #666;
    padding: 1rem 0;
}

.footer .box-container .box a {
    display: block;
    font-size: 1rem;
    color: #666;
    padding: 1rem 0;
}

.footer .box-container .box a:hover {
    color: #27ae60;
}

.footer .box-container .box a:hover i {
    padding-right: 2rem;
}

.footer .box-container .box a i {
    padding-right: .5rem;
    color: #27ae60;
}

.footer .box .bottom {
    padding-top: 1rem;
    text-align: center;
}

.footer .box .bottom .share {
    margin: 1.5rem 0;
}

.footer .box .bottom .share a {
    height: 2.5rem;
    width: 2.5rem;
    line-height: 2.5rem;
    font-size: 1.5rem;
    border-radius: 3rem;
    margin: 1rem 2rem;  
    color: #fff;
    background: #08021e;
    padding-top: 3px;
}

.footer .box .bottom .share a:hover {
    background: #19bc2f;
}

@media (max-width: 576px) {
    .footer .box-container {

        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

    }

}
</style>