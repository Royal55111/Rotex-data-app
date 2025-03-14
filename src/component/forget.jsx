function Forget(prop) {
return(
    <div className="forgotten">
        <p>Enter your Email</p>
        <input
                type="email"
                id="login-username"
                placeholder="Email"
                required
                name="email"
                onChange={prop.getData}
              />
              <button onClick={prop.Forgot}>Send</button>
    </div>
)
}
export default Forget