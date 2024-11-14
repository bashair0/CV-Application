import Header from "./Header";
import "../styles/CVApplication.css";
import calendar from "../assets/icons/calendar.svg";
import locationIcon from "../assets/icons/location.svg";
import linkIcon from "../assets/icons/link.svg";
import phoneIcon from "../assets/icons/phone.svg";
import emailIcon from "../assets/icons/email.svg";

function CVApplication({ formData, isPreview }) {
  return (
    <div className="CVApplicationBackground">
      <div className="flex ctaButtons">
        <button className="downloadButton" type="button">
          Download as pdf
        </button>
        <button onClick={isPreview} className="closeButton" type="button">
          ×
        </button>
      </div>
      <main className="CVApplication">
        <h1>{formData.name}</h1>
        <h2 className="JobTitle">{formData.jobTitle}</h2>
        <div className="grid socials">
          <div className="flex">
            <img src={emailIcon} alt="email icon" height={20} />
            <p className="socialsAndIcons">{formData.email}</p>
          </div>
          <div className="flex">
            <img src={locationIcon} alt="location icon" height={20} />
            <p className="socialsAndIcons">{formData.address}</p>
          </div>
          <div className="flex">
            <img src={phoneIcon} alt="phone icon" height={20} />
            <p className="socialsAndIcons">{formData.phone}</p>
          </div>
          <div className="flex">
            <img src={linkIcon} alt="link icon" height={20} />
            <p className="socialsAndIcons">{formData.link}</p>
          </div>
        </div>
        <Header header={"Experience"} />
        <h3 className="experienceTitle">{formData.title}</h3>
        <p className="companyName">{formData.companyName}</p>
        <div className="grid">
          <div className="flex">
            <img src={calendar} alt="calendar icon" height={20} />
            <p>{formData.date}</p>
          </div>

          <div className="flex">
            <img src={locationIcon} alt="location icon" height={20} />
            <p className="socialsAndIcons">{formData.location}</p>
          </div>
        </div>
        <p>{formData.responsibilities}</p>
        <Header header={"Education"} />
        <h3 className="degree">{formData.degree}</h3>
        <p className="uniName">{formData.uni}</p>
        <div className="flex">
          <img src={calendar} alt="calendar icon" height={20} />
          <p>{formData.dateOfStudy}</p>
        </div>
      </main>
    </div>
  );
}

export default CVApplication;
