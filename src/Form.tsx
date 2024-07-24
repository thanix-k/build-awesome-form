import { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    url: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="companny">What is your company called?</label>
      </div>
      <div>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="url">What is your website url (optional)?</label>
      </div>
      <div>
        <input
          type="text"
          id="url"
          name="url"
          value={formData.url}
          placeholder="https://"
          onChange={handleChange}
        />
      </div>
      <div>
        <input type="checkbox" id="editor" name="editor" value="Editor" />
        <label htmlFor="editor"> Editor</label>

        <input
          type="checkbox"
          id="collaboration"
          name="collaboration"
          value="Collaboration"
        />
        <label htmlFor="collaboration"> Collaboration</label>

        <input
          type="checkbox"
          id="integration"
          name="integration"
          value="Integration"
        />
        <label htmlFor="integration"> AI Integration</label>

        <input type="checkbox" id="other" name="other" value="Other" />
        <label htmlFor="other"> Other</label>
      </div>

      <div
        role="radiogroup"
        aria-labelledby="radio-description"
        className="radio_group"
      >
        <h4 id="radio-description">
          What is your preferred integration method?
        </h4>
        <input type="radio" name="format" id="self" value="self" checked />
        <label htmlFor="self">Self Hosted</label>
        <input type="radio" name="format" id="cloud" value="cloud" />
        <label htmlFor="cloud">Cloud</label>
      </div>

      <button type="submit">Create Team</button>
    </form>
  );
};

export default UserForm;
