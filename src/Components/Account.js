import { BsPersonCircle } from "react-icons/bs";

export default function Account() {
  return (
    <div className="account-container">
      <div className="profile-container">
        <div className="profile-picture">
          <BsPersonCircle />
        </div>
        <div className="account-header">Jane Doe</div>
        <div className="account-text">fake@fake.com</div>
      </div>

      <div className="security-container">
        <div className="security-header">Sign-in & Security</div>
        <div className="security-text">
          {"Update your username or password used to sign in "}
        </div>
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
            type="radio"
            checked="checked"
            name="remember"
            style={{ marginRight: "0.5rem" }}
          />
          2-Step Verification
        </label>
        <button>Update</button>
      </div>
    </div>
  );
}
