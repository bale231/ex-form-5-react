export function UncontrolledLogin() {
  function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("remember") === "on" ? true : false,
    };

    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleLogin} className="card">
        <h2>Accedi</h2>
        <label htmlFor="username">
          <p>Username</p>
          <input type="text" name="username" />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input type="password" name="password" id="password" />
        </label>
        <label htmlFor="checkbox">
          <p></p>
          <input type="checkbox" name="remember" id="checkbox" />
          <span>Ricordami</span>
        </label>
        <button
          id="submit"
          type="submit"
          disabled
        >
          Login
        </button>
        <button type="reset">Reset</button>
      </form>
    </>
  );
}
