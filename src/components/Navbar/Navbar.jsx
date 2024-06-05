import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Twaseen",
    isSeller: true
  };

  return (
    <div className={active || pathname !== "/" ? "Navbar active" : "Navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">SkillScribe</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="Links">
          <span>Earner Community</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser.id && <button>Join</button>}
          {currentUser.id && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src="" alt="" />
              <span>{currentUser.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add new Gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
