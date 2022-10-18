// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <article className="profile">
        <div className="profile-image">
          <img src="photo.jpg" alt="my photo" />
        </div>
        <h2 className="profile-username">G.Manoj</h2>
        <small className="profile-user-handel">@manoj_g</small>
        <div className="profile-actions">
          <button className="btn btn--primary">Follow</button>
          <button className="btn btn--icon">
            <i className="ph-dots-three-outline-fill"></i>
          </button>
        </div>
        <div className="profile-links">
          <a href="#" className="link link--icon">
            <i className="ph-twitter-logo"></i>
          </a>
          <a href="#" className="link link--icon">
            <i className="ph-facebook-logo"></i>
          </a>
          <a href="#" className="link link--icon">
            <i className="ph-instagram-logo"></i>
          </a>
        </div>
      </article>
    </>
  );
};

export default Profile;
