const templateLogin = `
<section class="login">
    <section class="login__container">
        <h2>Sign In</h2>
        <form class="login__container--form" action="">
        <input class="login__container--input" type="email" placeholder="Email">
        <input class="login__container--input" type="password" placeholder="Password">
        <button class="button" type="submit">Sign In</button>
        <div class="login__container--remember-me">
            <label>
            <input type="checkbox" name="" id="cbox1" value="checkbox">Remember me
            </label> 
            <a href="#">I forgot my password</a>
        </div>
        </form>
        <section class="login__container--social-media">
        <div><img src="./assets/img/google-icon.png" alt="Google">Sign In with Google</div>
        <div><img src="./assets/img/twitter-icon.png" alt="Twitter">Sign In with Twitter</div>
        </section>
        <p class="login__container--register">Don't have an account? <a href="./register.html">Register</a></p>
    </section>
</section>
`;
const templateRegister = `
<section class="register">
<section class="register__container">
  <h2>Sign Up</h2>
  <form class="register__container--form" action="">
    <input class="register__container--input" type="text" placeholder="Full Name">
    <input class="register__container--input" type="email" placeholder="Email">
    <input class="register__container--input" type="password" placeholder="Password">
    <button class="button" type="submit">Sign Up</button>
  </form>
  <p class="register__container--signin"><a href="./login.html">Sign In</a></p>
</section>
</section>
`;
const templateIndex = `
<section class="main">
<h2 class="main__title">What do you wanna watch today?</h2>
<input class="input" type="text" placeholder="Share..." />
</section>
<h2 class="categories__title">Mi lista</h2>
<section class="carousel">
<div class="carousel__container">
  <div class="carousel-item">
    <img
      class="carousel-item__img"
      src="https://images.pexels.com/photos/1464565/pexels-photo-1464565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Imagen Item"
    />
    <div class="carousel-item__details">
      <div>
        <img
          class="carousel-item__details--img"
          src="./assets/img/icon-play.png"
          alt="Play"
        />
        <img
          class="carousel-item__details--img"
          src="./assets/img/plus-icon.png"
          alt=""
        />
      </div>
      <p class="carousel-item__details--title">Descriptive title</p>
      <p class="carousel-item__details--subtitle">2019 16+ 114 ms</p>
    </div>
  </div>
</div>
</section>
`
const routes = [
    {
        path: '/vanilla-router/vanilla-router/',
        template: templateIndex
    },
    {
        path: '/vanilla-router/vanilla-router/login',
        template: templateLogin
    },
    {
        path: '/vanilla-router/vanilla-router/register',
        template: templateRegister
    },
]
