import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function AccountDetails() {
  return (
    <>
      <div id="account-details-content" className="w-full md:w-3/4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6">Account Details</h2>

          <form id="account-details-form" className="space-y-6">
            {/* Profile Picture Section */}
            <div
              id="profile-picture-section"
              className="border-b border-gray-200 pb-6"
            >
              <h3 className="text-lg font-semibold mb-4">Profile Picture</h3>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                  />
                  <button
                    type="button"
                    className="absolute -bottom-1 -right-1 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary-700"
                  >
                    <FontAwesomeIcon icon={faCamera} className="text-sm" />
                  </button>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Upload a new profile picture
                  </p>
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm hover:bg-primary-700"
                    >
                      Upload New
                    </button>
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-50"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    JPG, PNG. Max size 2MB
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div
              id="personal-info-section"
              className="border-b border-gray-200 pb-6"
            >
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    defaultValue="John"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    defaultValue="Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    defaultValue="1990-05-15"
                    className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
