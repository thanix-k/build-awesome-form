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
    <div className=" w-full h-dvh flex items-center justify-center p-6">
      <div className="bg-[url('https://cloud.tiptap.dev/images/gradients/gradient_login.png')]  bg-black rounded-lg shadow-lg p-8 max-w-md w-full  ">
        <h1 className="text-2xl  mb-6 text-white">Tell us about your team</h1>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="company">
              What is your company called?
            </label>
            <input
              id="company"
              type="text"
              placeholder="Organization name"
              value={formData.company}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white  text-sm  mb-2" htmlFor="url">
              What is your website url (optional)?
            </label>
            <input
              id="url"
              type="text"
              value={formData.url}
              placeholder="https://"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <p className="block text-white text-sm  mb-2">
              I'm signing up for Tiptap because
            </p>
            <div className="flex flex-wrap gap-2">
              <label className="flex items-center bg-gray-600 bg-opacity-50 rounded-xl p-2 ">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-white ">Editor</span>
              </label>
              <label className="flex items-center  bg-gray-600 bg-opacity-50 rounded-xl p-2 ">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2  text-white">Collaboration</span>
              </label>
              <label className="flex items-center bg-gray-600 bg-opacity-50 rounded-xl p-2 ">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2  text-white">AI Integration</span>
              </label>
              <label className="flex items-center  bg-gray-600 bg-opacity-50 rounded-xl p-2 ">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2  text-white">Other</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <p className="block text-white text-sm mb-2">
              What is your preferred integration method?
            </p>
            <div
              className="flex gap-4 radio_group"
              role="radiogroup"
              aria-labelledby="radio-description"
            >
              <label className="flex items-center  bg-gray-600 bg-opacity-50 rounded-xl p-2">
                <input
                  type="radio"
                  name="integrationMethod"
                  className="form-radio"
                />
                <span className="ml-2  text-white">Self hosted</span>
              </label>
              <label className="flex items-center  bg-gray-600 bg-opacity-50 rounded-xl p-2">
                <input
                  type="radio"
                  name="integrationMethod"
                  className="form-radio"
                />
                <span className="ml-2  text-white">Cloud</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white  text-black font-bold py-2 px-4 rounded "
          >
            Create team
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
