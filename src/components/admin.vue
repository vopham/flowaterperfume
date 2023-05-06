<template>
    <div class="container_admin">
        <div class="row appp">
            <div class="col-6">
                <span class="app_bar">Chào mừng bạn đến với trang quản lí</span>
            </div>
            <div class="col-3 text_app">Quản lí sản phẩm</div>
            <div class="col-3 text_app">Quản lí khách hàng</div>
        </div>
        <div class="row">
            <div class="col-4">
                <router-link to="/manaproducts" class="card">
                    <img
                        class="card__background"
                        src="https://bbcl.vn/wp-content/uploads/2021/07/61-2.jpg"
                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                        width="1920"
                        height="2193"
                    />
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                        <h2 class="card__title">Sản phẩm</h2>
                        <p class="card__description">
                                Quản lí sản phẩm
                        </p>
                        </div>
                        <button class="card__button">Xem</button>
                    </div>
                </router-link>
            </div>
            <div class="col-4">
                <router-link to="manausers" class="card">
                    <img
                        class="card__background"
                        src="https://cdn-icons-png.flaticon.com/512/6075/6075889.png"
                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                        width="1920"
                        height="2193"
                    />
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                        <h2 class="card__title">Người dùng</h2>
                        <p class="card__description">
                           Quản lí người dùng
                        </p>
                        </div>
                        <button class="card__button">Xem</button>
                    </div>
                </router-link>
            </div>
            <div class="col-4">
                <router-link to="manabills" class="card">
                    <img
                        class="card__background"
                        src="https://cdn-icons-png.flaticon.com/512/6948/6948527.png"
                        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                        width="1920"
                        height="2193"
                    />
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                        <h2 class="card__title">Đơn hàng</h2>
                        <p class="card__description">
                            Quản lí đơn hàng
                        </p>
                        </div>
                        <button class="card__button">Xem</button>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return {
          
        }
    },
}
</script>

<style scoped>
.app_bar{
    font-family: 'Josefin_Sans';
    font-size: 30px;
    position: relative;
    top: 25px;
    left: 30px;
}
.appp{
    width: 101%;
    height: 100px;
    background-color: rgb(191 225 206);;
}
.text_app{
    font-family: 'Josefin_Sans';
    font-size: 20px;
    position: relative;
    top: 37px;
   
}


/* csscard */
:root {
  /* Colors */
  --brand-color: hsl(46, 100%, 50%);
  --black: hsl(0, 0%, 0%);
  --white: hsl(0, 0%, 100%);
  /* Fonts */
  --font-title: 'Josefin_Sans';
  --font-text:  'Josefin_Sans';
}

/* RESET */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}



h2 {
  font-size: 2.25rem;
  font-family: var(--font-title);
  color: var(--white);
  line-height: 1.1;
}

p {
  font-family: var(--font-text);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--white);
}

.flow > * + * {
  margin-top: var(--flow-space, 1em);
}

/* CARD COMPONENT */

.card {
  margin: 50px auto;
  display: grid;
  place-items: center;
  width: 80vw;
  max-width: 21.875rem;
  height: 28.125rem;
  overflow: hidden;
  border-radius: 0.625rem;
  box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
}

.card > * {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.card__background {
  object-fit: cover;
  max-width: 100%;
  height: 100%;
}

.card__content {
  width: 100%;
  --flow-space: 0.9375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
  height: 50%;
  padding: 8% 0.25rem 1.875rem;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 100%, 0.3) 10%,
    hsl(0, 0%, 100%) 100%
  );
}

.card__content--container {
  --flow-space: 1.25rem;
}

.card__title {
  position: relative;
  width: fit-content;
  width: -moz-fit-content; 
  font-family: 'Josefin_Sans';
}

.card__title::after {
  content: "";
  position: absolute;
  height: 0.3125rem;
  width: calc(100% + 1.25rem);
  bottom: calc((1.25rem - 0.5rem) * -1);
  left: -1.25rem;
  background-color: var(--brand-color);
}

.card__button {
  padding: 0.75em 1.6em;
  width: fit-content;
  width: -moz-fit-content; /* Prefijo necesario para Firefox  */
  font-variant: small-caps;
  font-weight: bold;
  border-radius: 0.45em;
  border: none;
  background-color: var(--brand-color);
  font-family: var(--font-title);
  font-size: 1.125rem;
  color: var(--black);
}

.card__button:focus {
  outline: 2px solid black;
  outline-offset: -5px;
}

@media (any-hover: hover) and (any-pointer: fine) {
  .card__content {
    transform: translateY(62%);
    transition: transform 100ms ease-out;
    transition-delay: 100ms;
  }

  .card__title::after {
    opacity: 0;
    transform: scaleX(0);
    transition: opacity 1000ms ease-in, transform 500ms ease-out;
    transition-delay: 500ms;
    transform-origin: right;
  }

  .card__background {
    transition: transform 500ms ease-in;
  }

  .card__content--container > :not(.card__title),
  .card__button {
    opacity: 0;
    transition: transform 500ms ease-out, opacity 500ms ease-out;
  }

  .card:hover,
  .card:focus-within {
    transform: scale(1.05);
    transition: transform 500ms ease-in;
    cursor: pointer;
  }

  .card:hover .card__content,
  .card:focus-within .card__content {
    transform: translateY(0);
    transition: transform 500ms ease-in;
  }

  .card:focus-within .card__content {
    transition-duration: 0ms;
  }

  .card:hover .card__background,
  .card:focus-within .card__background {
    transform: scale(1.1);
  }

  .card:hover .card__content--container > :not(.card__title),
  .card:hover .card__button,
  .card:focus-within .card__content--container > :not(.card__title),
  .card:focus-within .card__button {
    opacity: 1;
    transition: opacity 500ms ease-in;
    transition-delay: 1000ms;
  }

  .card:hover .card__title::after,
  .card:focus-within .card__title::after {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: left;
    transition: opacity 500ms ease-in, transform 500ms ease-in;
    transition-delay: 500ms;
  }
}
</style>