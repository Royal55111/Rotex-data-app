import { useState } from "react";


function Rotex(prop) {
  let [icon, setIcon] = useState(true);
  function changeIcon() {
    setIcon((prev)=> {
      return !prev
    })
  }


  let [display, setDisplay] = useState(false);
  function show() {
    setDisplay((prev) => {
      return !prev;
    });
  }

  return (
    <div>
      <nav className="naver">
        <div className="nav1">
          <div className="nav1-image"></div>
          <div>
            <h1>OTEX</h1>
          </div>
        </div>
      </nav>
      {display == true ? (
        ""
      ) : (
        <section className="sign-up" id="sign-up">
          <form id="signup-form" onSubmit={prop.submitLogin}>
            <h1>SIGN UP</h1>
            <div className="sign-up2">
              <div className="sign-up3">
                <label for="first-name">First Name:</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Name"
                  name="firstName"
                  required
                  onChange={prop.getData}
                />
              </div>
              <div className="sign-up3">
                <label for="last-name">Last Name:</label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Surname"
                  name="surName"
                  required
                  onChange={prop.getData}
                />
              </div>
            </div>
            <div className="sign-up2">
              <div className="sign-up3">
                <label for="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  name="userName"
                  required
                  onChange={prop.getData}
                />
              </div>
              <div className="sign-up3">
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  required
                  onChange={prop.getData}
                />
              </div>
            </div>
            <div className="sign-up2">
              <div className="sign-up3" >
                <div className="phone">
                <label for="phone" >Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Number"
                  name="telNumber"
                  required
                  onChange={prop.getData}
                />
                </div>
              </div> 
              <div className="sign-up3">
                <label for="password">Password:</label>
                <input
                  type={icon == true ? "password" : "text"}
                  id="password"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={prop.getData}
                />
                <i className={icon == true ? "bi-eye-fill" : "bi-eye-slash-fill"} onClick={changeIcon}></i>
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="terms" required />
              <label for="terms">I agree with the Terms and Conditions</label>
            </div>
            <div className="button">
              <button type="submit" id="button" >
                Sign Up
              </button>
              <p>
                Already have an account?{" "}
                <a href="#" onClick={show}>
                  Log in
                </a>
              </p>
            </div>
          </form>
        </section>
      )}
      {display == true ? (
        <section className="login" id="login">
          <form id="login-form" onSubmit={prop.loginData}>
            <h1 className="center">Log in</h1>
            <div className="login1">
              <input
                type="email"
                id="login-username"
                placeholder="Email"
                required
                onChange={prop.getData}
                name="email"
              />
            </div>
            <div className="login1">
              <div className="icon">
              <input
                type={icon == true ? "password" : "text"}
                id="login-password"
                placeholder="Password"
                required
                onChange={prop.getData}
                name="password"
              />
              <i className={icon == true ? "bi-eye-fill" : "bi-eye-slash-fill"} onClick={changeIcon}></i>
              </div>
            </div>
            <div className="login2">
              <div className="login2-1">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
              <div>
                <a href="#" onClick={prop.fun}>Forgot password</a>
              </div>
            </div>
            <div className="login3">
              <button type="submit">Login</button>
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={show}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </section>
      ) : (
        ""
      )}
    </div>
  );
}

export default Rotex;
