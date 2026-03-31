import { useEffect, useState } from "react";
import { useAuth } from "../LocalStorage/auth";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const { user } = useAuth();
  const [userData, setUserData] = useState(true);

  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user.username || "",
        email: user.email || "",
        message: "",
      });
      setUserData(false);
    }
  }, [user, userData]);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    try {
      const payload = {
        name: contact.username,
        email: contact.email,
        message: contact.message,
      };

      const response = await fetch(`http://localhost:5001/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        alert("Message sent successfully");
        setContact({
          username: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              {/* Image */}
              <div className="registration-image">
                <img
                  src="/images/support.png"
                  alt="we are always ready to help"
                />
              </div>

              {/* Form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Contact Us</h1>
                <br />
                <form onSubmit={handleSubmit}>
                
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    value={contact.username}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={contact.email}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    autoComplete="off"
                    value={contact.message}
                    onChange={handleInput}
                    required
                    rows="6"
                    columns="10"
                  />
                </div>

                <button type="submit">Submit</button>

              </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Contact;