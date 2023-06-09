import "./login.css"

export default function Login() {
  return (
    <div className="login">
       <div className="loginWrapper">
          <div className="loginLeft">
             <div className="loginLogo">NationalSocial</div>
             <span className="loginDesc">
                connect with the friends and the world around you can NationalSocial.
             </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">
                    Create a New Account
                </button>
            </div>
          </div>
       </div>
    </div>
  )
}
