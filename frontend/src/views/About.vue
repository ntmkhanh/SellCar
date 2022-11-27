<template>
    <section class="about-section">
        <div class="heading">
            <span>About Us</span>
            <h3>Good Quality</h3>
        </div>

        <div class="row">
            <div class="about-content">
                <img src="../img/2.png" alt="">
                <div class="about-content-text">
                    <p>KN is a website specializing in providing high-end cars from Mercedes brands.
                        Here, customers will be provided with full information and prices of car models.
                        Moreover, we are always dedicated to consulting all questions for customers.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="about-article">
                <h3>Brings People Together</h3>
            </div>
        </div>

        <div class="row gallery">
            <div class="wrapper">
                <img src="../img/about11.png" alt="">
                <img src="../img/about2.png" alt="">
                <img src="../img/about3.png" alt="">
                <img src="../img/about4.png" alt="">
                <img src="../img/about5.png" alt="">
                <img src="../img/2.png" alt="">
                <img src="../img/about7.png" alt="">
                <img src="../img/about8.png" alt="">
                <img src="../img/about9.png" alt="">
                <img src="../img/about10.png" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "About",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
.about-section {
    text-align: center;
}
.about-section .heading span {
    font-family: 'Satisfy', cursive;
    font-size: 3rem;
    color: #27ae60;
    text-align: center;
}

.heading h3 {
    font-size: 3rem;
    color: #130f40;
    margin-bottom: 1%;
}
/* .about-section p{
    padding: 2rem 10%;
    text-align: justify;
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
} */

.about-section .about-content {
    display: flex;
    width: 100%;

}

.about-section .about-content img {
    /* backg6round-color: rgb(249, 249, 249); */
    width: 50%;
    margin-left: 5%;
}

.about-section .about-content .about-content-text {
    font-size: 20px;
    padding: 2rem;
    text-align: justify;
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
}

.about-section .about-article {
    margin-top: 50px;
    padding: 10px;
    text-align: center;
    background-color: #27ae60;
    width: 100%;
}

.about-section .about-article h3 {
    font-family: 'Satisfy', cursive;
    font-size: 32px;
    color: white;
}


.about-section .gallery {
    overflow: hidden;
    padding: 100px;
}

.about-section .gallery .wrapper {
    position: relative;
    flex-grow: 1;
    margin: auto;
    max-width: 1200px;
    max-height: 1200px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2vmin;
    justify-items: center;
    align-items: center;
}

.about-section .gallery .wrapper img {
    z-index: 1;
    grid-column: span 2;
    max-width: 100%;
    margin-bottom: -52%;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transform: scale(1);
    transition: all .25s;
}

.about-section .gallery .wrapper img:nth-child(7n + 1) {
    grid-column: 2 / span 2;
}

.about-section .gallery .wrapper img:hover {
    z-index: 2;
    transform: scale(2);
}

@media (max-width: 768px) {
    .about-section .about-content img {
        width: 250px;
    }

    .about-section .gallery .wrapper img:hover {
        transform: scale(2.5);
    }
}

@media (max-width: 576px) {
    .about-section .about-content img {
        width: inherit;
    }

    .about-section .about-content {
        display: block;
    }

    .about-section .about-content .about-content-text {
        padding-left: 0px;
    }

    .about-section .gallery {
        padding: 50px 0px;
    }

    .about-section .gallery .wrapper img {
        max-width: 100%;

    }

    .about-section .gallery .wrapper {
        grid-gap: 2vmin;
    }

    .about-section .gallery .wrapper img:hover {
        transform: scale(2);
    }

}
</style>