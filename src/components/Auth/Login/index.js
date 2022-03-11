const Login = () => {
  return (
    <div className="login">
      <div className="form">
        <form>
          <div className="field">
            <input type="email" name="email" placeholder="Email" className="input"/>
          </div>
          <div className="field">
            <input type="password" name="password" placeholder="******" className="input"/>
          </div>
          <div className="action">
            <button type="submit" className="btn__link btn__primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
