function Forget(prop) {
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
    </div>
  );
}
export default Forget;
