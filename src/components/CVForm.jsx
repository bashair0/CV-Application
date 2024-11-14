import { useState } from "react";
import CVApplication from "./CVApplication";
import Header from "./Header";
import PersonalInfoForm from "./PersonalInfoForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import "../styles/CVForm.css";

function CVForm() {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    email: "",
    address: "",
    phone: "",
    link: "",
    title: "",
    companyName: "",
    date: "",
    location: "",
    responsibilities: "",
    degree: "",
    uni: "",
    dateOfStudy: "",
  });
  const handleChange = (evt) => {
    setFormData((currentData) => {
      return {
        ...currentData,
        [evt.target.name]: evt.target.value,
      };
    });
  };
  const [isPreview, setIsPreview] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsPreview(!isPreview);
  };
  return (
    <>
      <section
        className="CVForm"
        style={{ display: isPreview ? "none" : "block" }}>
        <h1>CV Application</h1>
        <form onSubmit={handleSubmit}>
          <Header header="Personal details" />
          <PersonalInfoForm
            name={formData.name}
            jobTitle={formData.jobTitle}
            email={formData.email}
            address={formData.address}
            phone={formData.phone}
            link={formData.link}
            handleChange={handleChange}
          />
          <Header header={"Experience"} />
          <ExperienceForm
            title={formData.title}
            companyName={formData.companyName}
            date={formData.date}
            location={formData.location}
            responsibilities={formData.responsibilities}
            handleChange={handleChange}
          />
          <Header header="Education" />
          <EducationForm
            degree={formData.degree}
            uni={formData.uni}
            dateOfStudy={formData.dateOfStudy}
            handleChange={handleChange}
          />
          <button className="submitButton" type="submit">
            Preview
          </button>
        </form>
      </section>
      {isPreview && (
        <CVApplication formData={formData} isPreview={handleSubmit} />
      )}
    </>
  );
}

export default CVForm;
