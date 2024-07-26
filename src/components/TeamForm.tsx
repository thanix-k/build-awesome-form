const TeamForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white border border-gray-600 p-6">
      <form className="w-full max-w-md bg-black bg-opacity-50 p-8 bg-gradient-to-br from-gray-900 to-purple-700 rounded-lg">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Tell us about your team
        </h2>
        <label htmlFor="companyName" className="block text-gray-300 mb-2">
          What is your company called?
          <input
            type="text"
            className="w-full mb-4 p-2 bg-gray-800 text-white rounded-lg"
            placeholder="Organization name"
          />
        </label>
        <label htmlFor="websiteUrl" className="block text-gray-300 mb-2">
          What is your website url(optional)?
          <input
            type="text"
            className="w-full mb-4 p-2 bg-gray-800 text-white rounded-lg"
            placeholder="https://"
          />
        </label>

        <fieldset className="mb-4">
          <legend className=" block text-gray-300 mb-2">
            I'm signing up for Tiptap because
          </legend>
          <div className="flex flex-wrap gap-2">
            <label className="flex items-center text-gray-300 bg-gray-700 p-2 rounded-md">
              <input type="checkbox" className="mr-2  accent-black" />
              Editor
            </label>
            <label className="flex items-center text-gray-300 bg-gray-700 p-2 rounded-md">
              <input type="checkbox" className="mr-2" />
              Collaboration
            </label>
            <label className="flex items-center text-gray-300 bg-gray-700 p-2 rounded-md">
              <input type="checkbox" className="mr-2" />
              AI Integration
            </label>
            <label className="flex items-center text-gray-300 bg-gray-700 p-2 rounded-md">
              <input type="checkbox" className="mr-2" />
              Other
            </label>
          </div>
        </fieldset>

        <fieldset className="mb-6">
          <legend className="text-gray-300 mb-2">
            What is your preferred integration method?
          </legend>
          <div className="flex flex-wrap gap-2">
            <label className="flex items-center text-gray-300 bg-gray-700 p-2 rounded-md">
              <input type="radio" name="integrationMethod" className="mr-2" />
              Self hosted
            </label>
            <label className="flex items-center text-gray-300 bg-gray-700 p-2 rounded-md">
              <input type="radio" name="integrationMethod" className="mr-2" />
              Cloud
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded-lg font-semibold"
        >
          Create team
        </button>
      </form>
    </div>
  );
};

export default TeamForm;
