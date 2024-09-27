import "./login.css";

function Login() {
  return (
    <div className="loginPanel">
      <div className="surfAccountLogin">
        <div className="mb">
          <input
            type="email"
            className="formControl"
            id="emailInput"
            placeholder="email"
          ></input>
        </div>

        <div className="mb">
          <input
            type="password"
            className="formControl"
            id="passwordInput"
            placeholder="password"
          ></input>
        </div>

        <button className="button">Let's Surf</button>
      </div>
      <p className="text">or</p>
      <div className="thirdPartyLogin">
        <div className="mb">
          <input
            type="password"
            className="formControl"
            id="googleLogIn"
            placeholder="password"
          ></input>
        </div>
        <div className="mb">
          <input
            type="password"
            className="formControl"
            id="facebookLogIN"
            placeholder="password"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Login;
