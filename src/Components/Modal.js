import React, { useState } from "react";

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <p className="close-button">&times;</p>
        </div>
        <div className="modal-context">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <label for="email">
            <b>Email</b>
          </label>
          <input
            aria-label="email"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            aria-label="password"
            type="text"
            placeholder="Enter Password"
            name="password"
            required
          />

          <label for="repeat-password">
            <b>Repeat Password</b>
          </label>
          <input
            aria-label="repeat-password"
            type="text"
            placeholder="Repeat Password"
            name="repeat-password"
            required
          />

          <label>
            <input
              aria-label="remember-me-checkbox"
              type="checkbox"
              checked="checked"
              name="remember"
              style={{ marginRight: "0.5rem" }}
            />
            Remember me
          </label>
        </div>

        <div className="modal-buttons">
          <button type="submit-button" className="submit-button">
            Sign Up
          </button>
          <button type="button" className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
