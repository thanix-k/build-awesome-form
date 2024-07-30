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
    <div className="w-full h-dvh flex items-center justify-center p-6">
      <div className="bg-[url('https://cloud.tiptap.dev/images/gradients/gradient_login.png')] bg-black rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl mb-6 text-white">Tell us about your team</h1>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="company">
              What is your company called?
            </label>
            <input
              id="company"
              type="text"
              placeholder="Organization name"
              className="shadow appearance-none rounded w-full py-2 px-3 text-white placeholder-gray-700 bg-gray-800 leading-tight focus:shadow-outline focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
              aria-label="Organization name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="url">
              What is your website url (optional)?
            </label>
            <input
              id="url"
              type="text"
              placeholder="https://"
              className="shadow appearance-none rounded w-full py-2 px-3 text-white placeholder-gray-700 bg-gray-800 leading-tight focus:shadow-outline focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
              aria-label="Website URL"
            />
          </div>

          <fieldset className="mb-4">
            <legend className="block text-white text-sm mb-2">
              I'm signing up for Tiptap because
            </legend>
            <div className="flex flex-wrap gap-2">
              <label className="flex items-center bg-gray-600 bg-opacity-50 rounded-xl p-2">
                <input
                  type="checkbox"
                  className="form-checkbox accent-purple-500 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  aria-label="Editor"
                />
                <span className="ml-2 text-white">Editor</span>
              </label>
              <label className="flex items-center bg-gray-600 bg-opacity-50 rounded-xl p-2">
                <input
                  type="checkbox"
                  className="form-checkbox accent-purple-500 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  aria-label="Collaboration"
                />
                <span className="ml-2 text-white">Collaboration</span>
              </label>
              <label className="flex items-center bg-gray-600 bg-opacity-50 rounded-xl p-2">
                <input
                  type="checkbox"
                  className="form-checkbox accent-purple-500 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  aria-label="AI Integration"
                />
                <span className="ml-2 text-white">AI Integration</span>
              </label>
              <label className="flex items-center bg-gray-600 bg-opacity-50 rounded-xl p-2">
                <input
                  type="checkbox"
                  className="form-checkbox accent-purple-500 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  aria-label="Other"
                />
                <span className="ml-2 text-white">Other</span>
              </label>
            </div>
          </fieldset>

          <fieldset className="mb-6">
            <legend className="block text-white text-sm mb-2">
              What is your preferred integration method?
            </legend>
            <div
              className="flex gap-4 radio_group"
              role="radiogroup"
              aria-labelledby="radio-description"
            >
              <label className="flex items-center bg-gray-600 bg-opacity-50 rounded-xl p-2">
                <input
                  type="radio"
                  name="integrationMethod"
                  className="form-radio accent-purple-500 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  aria-label="Self hosted"
                />
                <span className="ml-2 text-white">Self hosted</span>
              </label>
              <label className="flex items-center bg-gray-600 bg-opacity-50 rounded-xl p-2">
                <input
                  type="radio"
                  name="integrationMethod"
                  className="form-radio accent-purple-500 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  aria-label="Cloud"
                />
                <span className="ml-2 text-white">Cloud</span>
              </label>
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Create team
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
