<template>

    <div id="container">

        <!-- Cover Box -->
        <div id="cover">
            <!-- Sign Up Section -->
            <h1 class="sign-up">Hello, Friend!</h1>
            <p class="sign-up">Enter your personal details<br> and start a journey with us</p>
            <a class="button sign-up" href="#cover">Sign Up</a>

            <!-- Sign In Section -->
            <h1 class="sign-in">Welcome Back!</h1>
            <p class="sign-in">To keep connected with us please<br> login with your personal info</p>
            <br>
            <a class="button sub sign-in" href="#">Sign In</a>

        </div>

        <!-- Login Box -->
        <div id="login">
            <h1>Sign In</h1>
            <a href="#"><img class="social-login" src="https://image.flaticon.com/icons/png/128/59/59439.png"></a>
            <a href="#"><img class="social-login" src="https://image.flaticon.com/icons/png/128/49/49026.png"></a>
            <a href="#"><img class="social-login" src="https://image.flaticon.com/icons/png/128/34/34227.png"></a>
            <p>or use your email account:</p>
            <form>
                <input type="email" placeholder="Email" autocomplete="off"><br>
                <input type="password" placeholder="Password" autocomplete="off"><br>
                <a id="forgot-pass" href="#">Forgot your password?</a><br>
                <input class="submit-btn" type="submit" value="Sign In">
            </form>
        </div>

        <!-- Register Box -->
        <div id="register">
            <h1>Create Account</h1>
            <a href="#"><img class="social-login" src="https://image.flaticon.com/icons/png/128/59/59439.png"></a>
            <a href="#"><img class="social-login" src="https://image.flaticon.com/icons/png/128/49/49026.png"></a>
            <a href="#"><img class="social-login" src="https://image.flaticon.com/icons/png/128/34/34227.png"></a>
            <p>or use your email for registration:</p>
            <form>
                <input type="text" placeholder="Name" autocomplete="off"><br>
                <input type="email" placeholder="Email" autocomplete="off"><br>
                <input type="password" placeholder="Password" autocomplete="off"><br>
                <input class="submit-btn" type="submit" value="Sign Up">
            </form>
        </div>

    </div> <!-- END Container -->

</template>

<script>

</script>

<style>

    @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900");

    * {
        margin: 0;
        padding: 0;
    }

    body {
        background: #f0f4f3;
        font-family: "Roboto", sans-serif;
    }

    .button {
        border: 1px solid #fff;
        border-radius: 20px;
        color: #fff;
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 1px;
        padding: 15px 60px;
        text-decoration: none;
        text-transform: uppercase;
    }

    input[type="email"],
    input[type="password"],
    input[type="text"] {
        background: #f4f8f7;
        border: none;
        font-weight: 300;
        margin: 5px;
        padding: 10px;
        width: 280px;
    }

    .submit-btn {
        border: none;
        border-radius: 25px;
        color: #fff;
        cursor: pointer;
        font-size: 11px;
        letter-spacing: 1px;
        margin-top: 20px;
        padding: 15px 50px;
        text-transform: uppercase;
    }

    #login .submit-btn {
        background: #3aa7b1;
    }

    #register .submit-btn {
        background: #3aaf9f;
    }

    #container {
        background: #fff;
        border-radius: 10px;
        height: 483px;
        overflow: hidden;
        width: 1000px;
        margin: 0 20% 0 20%;
    }

    .social-login {
        border: 1px solid #ccc;
        border-radius: 50px;
        height: 15px;
        padding: 10px;
        width: 15px;
    }

    #login {
        background: #fff;
        float: left;
        height: 100%;
        position: relative;
        width: 50%;
        text-align: center;
        top: -550px;
        z-index: 1;
    }

    #register {
        background: #fff;
        float: right;
        height: 100%;
        position: relative;
        width: 50%;
        text-align: center;
        top: -550px;
        z-index: 1;
    }

    #login h1,
    #register h1 {
        padding: 20% 0 25px;
    }

    #login h1 {
        color: #3aa7b1;
    }

    #register h1 {
        color: #3aaf9f;
    }

    #login p,
    #register p {
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 0.3px;
        padding: 20px;
    }

    #forgot-pass {
        border-bottom: 1px solid #ccc;
        color: #000;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.3px;
        padding: 3px;
        text-decoration: none;
    }

    #cover {
        background: #3aa7b1;
        color: #fff;
        height: 483px;
        margin: 0 0 0 50%;
        position: relative;
        text-align: center;
        transition: margin 0.7s, background 0.5s, display 1s, width 1s;
        width: 50%;
        z-index: 5;
    }

    #cover h1 {
        padding-top: 27%;
    }

    #cover p {
        font-weight: 300;
        line-height: 22px;
        padding: 30px 45px 40px;
    }

    .sign-in {
        display: none;
    }

    .sub {
        position: relative;
        top: -11px;
    }

    #cover:target {
        background: #3aaf9f;
        margin: 0;
    }

    #cover:target .sign-up {
        display: none;
    }

    #cover:target .sign-in {
        display: inline-block;
    }

    #cover:target .login-div {
        width: 35%;
    }

</style>