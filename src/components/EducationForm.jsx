import { useState } from "react";
import "../styles/Form.css";
import calendar from "../assets/icons/calendar.svg";

function EducationForm({ degree, uni, dateOfStudy, handleChange }) {
  const [isAnotherDegree, setIsAnotherDegree] = useState(false);
  const addAnotherDegree = () => {
    setIsAnotherDegree(!isAnotherDegree);
  };
  return (
    <>
      <section
        className="EducationForm"
        style={{ borderBottom: isAnotherDegree && "1px dotted #777777" }}>
        <div>
          <label htmlFor="degree">Degree and Field of Study</label>
          <input
            className="degree"
            type="text"
            placeholder="Bachelor in information technology"
            value={degree}
            id="degree"
            name="degree"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="uniName">University Name</label>
          <input
            className="uniName"
            type="text"
            placeholder="Texas Tech University"
            value={uni}
            id="uniName"
            name="uni"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dateOfStudy">Date of Study</label>
          <div className="flex">
            <img
              className="icons"
              src={calendar}
              alt="calendar icon"
              height={20}
            />
            <input
              type="text"
              placeholder="2008 - 2012"
              value={dateOfStudy}
              id="dateOfStudy"
              name="dateOfStudy"
              onChange={handleChange}
            />
          </div>
        </div>
      </section>
      <button
        type="button"
        className="addButton"
        aria-label="add another degree"
        onClick={addAnotherDegree}>
        {isAnotherDegree ? "-" : "+"}
      </button>
      {isAnotherDegree && <EducationForm />}
    </>
  );
}

export default EducationForm;
