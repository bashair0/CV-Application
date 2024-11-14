import { useState } from "react";
import "../styles/Form.css";
import calendarIcon from "../assets/icons/calendar.svg";
import locationIcon from "../assets/icons/location.svg";

function ExperienceForm({
  title,
  companyName,
  date,
  location,
  responsibilities,
  handleChange,
}) {
  const [isAnotherExperience, setIsAnotherExperience] = useState(false);
  const addAnotherExperience = () => {
    setIsAnotherExperience(!isAnotherExperience);
  };
  return (
    <>
      <section
        className="ExperienceForm"
        style={{ borderBottom: isAnotherExperience && "1px dotted #777777" }}>
        <div>
          <label htmlFor="experienceTitle">Title</label>
          <input
            className="experienceTitle"
            type="text"
            placeholder="Web Developer"
            value={title}
            id="experienceTitle"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="companyName">Company name</label>
          <input
            className="companyName"
            type="text"
            placeholder="Clearlink"
            value={companyName}
            id="companyName"
            name="companyName"
            onChange={handleChange}
          />
        </div>
        <div className="grid">
          <div>
            <label htmlFor="date">date</label>
            <div className="flex">
              <img
                className="icons"
                src={calendarIcon}
                alt="calendar icon"
                height={"20px"}
              />
              <input
                type="text"
                placeholder="2012-present"
                value={date}
                id="date"
                name="date"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="location">Location</label>
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
                value={location}
                id="location"
                name="location"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="responsibilities">responsibilities</label>
          <input
            type="text"
            placeholder="Led e-commerce website development and maintenance"
            value={responsibilities}
            id="responsibilities"
            name="responsibilities"
            onChange={handleChange}
          />
        </div>
      </section>
      <button
        type="button"
        className="addButton"
        aria-label="add another experience"
        onClick={addAnotherExperience}>
        {isAnotherExperience ? "-" : "+"}
      </button>
      {isAnotherExperience && <ExperienceForm />}
    </>
  );
}

export default ExperienceForm;
