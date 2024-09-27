import './login.css';



function Login(){

	return (
		<div className = 'loginPanel'>

			<div className="mb-3">
  				<input type="email" className ="form-control" id="emailInput" placeholder="email"></input>
			</div>

			<div className ="mb-3">
  				<input type="password" className ="form-control" id="passwordInput" placeholder = "password"></input>
			</div>
		</div>
	);
}


export default Login
