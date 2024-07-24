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
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <label htmlFor="url">What is your website url (optional)?</label>
      </div>
      <div>
        <input
          id="url"
          name="url"
          type="text"
          value={formData.url}
          placeholder="https://"
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

      <button className="px-20 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Create Team
      </button>
    </form>
  );
};

export default UserForm;
