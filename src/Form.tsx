import { useState } from "react";

interface FormData {
  company: string;
  url: string;
  reasons: string[];
  integrationMethod: string;
}

const UserForm = () => {
  const [formData, setFormData] = useState<FormData>({
    company: "",
    url: "",
    reasons: [],
    integrationMethod: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const newReasons = checked
        ? [...formData.reasons, value]
        : formData.reasons.filter((reason) => reason !== value);
      setFormData({
        ...formData,
        reasons: newReasons,
      });
    } else if (type === "radio") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data submitted:", formData);
      //  form submission
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.company) newErrors.company = "Company name is required";
    if (formData.url && !isValidURL(formData.url))
      newErrors.url = "Enter a valid URL";
    if (formData.reasons.length === 0)
      newErrors.reasons = "At least one reason must be selected";
    if (!formData.integrationMethod)
      newErrors.integrationMethod = "Integration method is required";

    return newErrors;
  };

  const isValidURL = (url: string) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(url);
  };

  return (
    <div className="w-full h-dvh flex items-center justify-center p-6">
      <div className="bg-[url('https://cloud.tiptap.dev/images/gradients/gradient_login.png')] bg-black rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl mb-6 text-white">Tell us about your team</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="company">
              What is your company called?
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Organization name"
              value={formData.company}
              onChange={handleChange}
              className="shadow appearance-none rounded w-full py-2 px-3 text-white placeholder-gray-700 bg-gray-800 leading-tight focus:shadow-outline focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
              aria-label="Organization name"
            />
            {errors.company && (
              <p className="text-red-500 text-xs mt-1">{errors.company}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="url">
              What is your website url (optional)?
            </label>
            <input
              id="url"
              name="url"
              type="text"
              placeholder="https://"
              value={formData.url}
              onChange={handleChange}
              className="shadow appearance-none rounded w-full py-2 px-3 text-white placeholder-gray-700 bg-gray-800 leading-tight focus:shadow-outline focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
              aria-label="Website URL"
            />
            {errors.url && (
              <p className="text-red-500 text-xs mt-1">{errors.url}</p>
            )}
          </div>

          <fieldset className="mb-4">
            <legend className="block text-white text-sm mb-2">
              I'm signing up for Tiptap because
            </legend>
            <div className="flex flex-wrap gap-2">
              <label className="flex items-center bg-gray-600 bg-opacity-50 rounded-xl p-2">
                <input
                  type="checkbox"
                  name="reasons"
                  value="Editor"
                  checked={formData.reasons.includes("Editor")}
                  onChange={handleChange}
                  className="form-checkbox accent-purple-500 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  aria-label="Editor"
                />
                <span className="ml-2 text-white">Editor</span>
              </label>
              <label className="flex items-center bg-gray-600 bg-opacity-50 rounded-xl p-2">
                <input
                  type="checkbox"
                  name="reasons"
                  value="Collaboration"
                  checked={formData.reasons.includes("Collaboration")}
                  onChange={handleChange}
                  className="form-checkbox accent-purple-500 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  aria-label="Collaboration"
                />
                <span className="ml-2 text-white">Collaboration</span>
              </label>
              <label className="flex items-center bg-gray-600 bg-opacity-50 rounded-xl p-2">
                <input
                  type="checkbox"
                  name="reasons"
                  value="AI Integration"
                  checked={formData.reasons.includes("AI Integration")}
                  onChange={handleChange}
                  className="form-checkbox accent-purple-500 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  aria-label="AI Integration"
                />
                <span className="ml-2 text-white">AI Integration</span>
              </label>
              <label className="flex items-center bg-gray-600 bg-opacity-50 rounded-xl p-2">
                <input
                  type="checkbox"
                  name="reasons"
                  value="Other"
                  checked={formData.reasons.includes("Other")}
                  onChange={handleChange}
                  className="form-checkbox accent-purple-500 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  aria-label="Other"
                />
                <span className="ml-2 text-white">Other</span>
              </label>
            </div>
            {errors.reasons && (
              <p className="text-red-500 text-xs mt-1">{errors.reasons}</p>
            )}
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
                  value="Self hosted"
                  checked={formData.integrationMethod === "Self hosted"}
                  onChange={handleChange}
                  className="form-radio accent-purple-500 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  aria-label="Self hosted"
                />
                <span className="ml-2 text-white">Self hosted</span>
              </label>
              <label className="flex items-center bg-gray-600 bg-opacity-50 rounded-xl p-2">
                <input
                  type="radio"
                  name="integrationMethod"
                  value="Cloud"
                  checked={formData.integrationMethod === "Cloud"}
                  onChange={handleChange}
                  className="form-radio accent-purple-500 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  aria-label="Cloud"
                />
                <span className="ml-2 text-white">Cloud</span>
              </label>
            </div>
            {errors.integrationMethod && (
              <p className="text-red-500 text-xs mt-1">
                {errors.integrationMethod}
              </p>
            )}
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
