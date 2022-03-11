const Form  = ({ onSubmit, setEmail, setPassword, btnName, error }) => {
  return (
    <div className="form">
      <span className="error">{error && error}</span>
      <form onSubmit={onSubmit}>
        <div className="field">
            <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div className="field">
            <input
            type="password"
            name="password"
            placeholder="******"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <div className="action">
          <button
            type="submit"
            className="btn__link btn__primary"
          >
            { btnName }
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
