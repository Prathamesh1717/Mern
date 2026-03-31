import React from "react";
import Analytics from "../Components/Analytics.jsx";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Empowering Businesses with Technology</p>
              <h1>Build the Future with Smart IT Solutions</h1>
              <p>
                We help businesses grow by delivering modern web applications,
                scalable cloud solutions, and reliable software systems. Our
                team focuses on innovation, performance, and security to create
                digital solutions that truly make an impact.
              </p>

              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">Get in Touch</button>
                </NavLink>

                <NavLink to="/services">
                  <button className="btn secondary-btn">
                    Explore Services
                  </button>
                </NavLink>
              </div>
            </div>

            {/* hero image */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="team coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <Analytics />

      {/* 3rd section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="design and development"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>Your Technology Partner</p>
            <h1>Start Your Digital Journey Today</h1>

            <p>
              Whether you're launching a startup or upgrading an existing
              system, our team is ready to help you build powerful digital
              products. From idea to deployment, we ensure smooth development
              and long-term success for your business.
            </p>

            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Contact Us</button>
              </a>

              <a href="/services">
                <button className="btn secondary-btn">
                  Learn More
                </button>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;