import "../styles/Form.css";

/* IMPORT ICONS */
import locationIcon from "../assets/icons/location.svg";
import linkIcon from "../assets/icons/link.svg";
import phoneIcon from "../assets/icons/phone.svg";
import emailIcon from "../assets/icons/email.svg";

function PersonalInfoForm({
  name,
  jobTitle,
  email,
  address,
  phone,
  link,
  handleChange,
}) {
  return (
    <section className="section PersonalInfoForm">
      <div>
        <label htmlFor="name">
          <span aria-label="required">*</span> Name
        </label>
        <input
          className="Name"
          type="text"
          placeholder="John Doe"
          value={name}
          id="name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="jobTitle">Job Title</label>
        <input
          className="JobTitle"
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          id="jobTitle"
          name="jobTitle"
          onChange={handleChange}
        />
      </div>
      <div className="socials grid">
        <div>
          <label htmlFor="email">
            <span aria-label="required">*</span> Email
          </label>
          <div className="flex">
            <img
              className="icons"
              src={emailIcon}
              alt="email icon"
              height={20}
            />
            <input
              type="email"
              placeholder="JohnDoe@gmail.com"
              value={email}
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <div className="flex">
            <img
              className="icons"
              src={locationIcon}
              alt="location icon"
              height={"20px"}
            />
            <input
              type="text"
              placeholder="Dallas, Texas"
              value={address}
              id="address"
              name="address"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <div className="flex">
            <img
              className="icons"
              src={phoneIcon}
              alt="phone icon"
              height={20}
            />
            <input
              type="number"
              placeholder="+1 234 567 890"
              value={phone}
              id="phone"
              name="phone"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="link">Linkedin/Portfolio</label>
          <div className="flex">
            <img className="icons" src={linkIcon} alt="link icon" height={20} />
            <input
              type="url"
              placeholder="https://JohnDoe.com"
              value={link}
              id="link"
              name="link"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalInfoForm;
