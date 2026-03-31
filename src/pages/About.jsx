import React from "react";
import { useAuth } from "../LocalStorage/auth";
import { NavLink } from "react-router-dom";

const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">

            <div className="hero-content">
              <p>Welcome{user ? ` ${user.username} to our website` : 'to our website'}</p>
              <h1>Why Choose Us</h1>

              <p>
                <strong>Expertise :</strong> Our team consists of experienced
                developers and designers who specialize in building modern,
                scalable, and secure digital solutions.
              </p>

              <p>
                <strong>Customized Solutions :</strong> Every business is
                unique, so we design solutions tailored specifically to your
                goals and requirements.
              </p>

              <p>
                <strong>Customer Focus :</strong> We prioritize client
                satisfaction by delivering reliable services and continuous
                support throughout the project lifecycle.
              </p>

              <p>
                <strong>Affordable Pricing :</strong> We provide high-quality
                development services at competitive prices without compromising
                performance or reliability.
              </p>

              <p>
                <strong>Reliable Technology :</strong> Our solutions are built
                with modern technologies to ensure long-term scalability,
                security, and performance.
              </p>

              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">Connect Now</button>
                </NavLink>

                <NavLink to ="/services">
                  <button className="btn secondary-btn">
                    Learn More
                  </button>
                </NavLink>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="team coding together"
                width="400"
                height="500"
              />
            </div>

          </div>
        </section>
      </main>

      {/* Analytics Section */}

      <section className="section-analytics">
        <div className="container grid grid-four-cols">

          <div className="div1">
            <h2>500+</h2>
            <p>registered users</p>
          </div>

          <div className="div1">
            <h2>1,200+</h2>
            <p>projects completed</p>
          </div>

          <div className="div1">
            <h2>350+</h2>
            <p>active clients</p>
          </div>

          <div className="div1">
            <h2>24/7</h2>
            <p>customer support</p>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;