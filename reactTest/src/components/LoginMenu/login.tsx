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

        <button className="button">Let's Surff</button>
      </div>
      <p className="text">or</p>
      <div className="thirdPartyLogin">
        <div className="mb">
        <button className = "thirdPartyButton">Google</button> 
        </div>
        <div className="mb">
        	<button className = "thirdPartyButton">facebook</button>  
	</div>
	 <div className="mb">
        <button className = "thirdPartyButton">apple</button>  
	</div>
      </div>

    </div>
  );
}

export default Login;
