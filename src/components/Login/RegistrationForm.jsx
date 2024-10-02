function RegistrationForm() {
  return (
    <div className="container-fluid">
      <div className="row" style={{ justifyContent: 'center' }}>
        <form className="pb-4">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            ></input>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            ></input>
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control"></input>
          </div>
          <button type="text" className="btn btn-dark w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm
