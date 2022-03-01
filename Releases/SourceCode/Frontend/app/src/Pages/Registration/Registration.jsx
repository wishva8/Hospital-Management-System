import React, { Component } from "react";
import "./Registration.css"
export default class Registration extends Component {
  render() {
    return (
      <div className="container">
        <div className="row reg-top">
          <div className="col-12 col-md-6">
            <img src="./img/registration.jpg" className="w-100 login-img" alt="" />
          </div>
          <div className="col-12 col-md-6 login-area">
            <h1 className="">SignUp</h1>
            <form>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn signin-btn">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
