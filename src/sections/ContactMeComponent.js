import React from "react";

function ContactMeComponent() {
  //   console.log(process.env.REACT_APP_CONTACT_API_KEY);

  return (
    <div className="bg-white w-full px-5 md:px-10 py-5 md:py-10  border-1 border-gray-300 ">
      <h1 className="text-2xl font-bold my-5">CONTACT ME</h1>
      <div className="flex flex-col md:items-center mt-10">
        <h1 className="text-xl font-semibold">FELL FREE TO CONTACT ME</h1>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-5 my-5 w-full flex flex-col items-stretch"
        >
          <input
            type="hidden"
            name="apikey"
            value={process.env.REACT_APP_CONTACT_API_KEY}
          />

          {/* <input type="hidden" name="redirect" value={window.location.hash} /> */}

          <div className="flex items-center justify-items-stretch space-x-5">
            <label htmlFor="name " className="text-lg w-1/4">
              Name
            </label>
            <input
              type="text"
              className="bg-gray-300 w-full focus:outline-none p-2 text-lg"
              required
              name="name"
            />
          </div>
          <div className="flex items-center justify-between space-x-5">
            <label htmlFor="name " className="text-lg w-1/4">
              Your Email
            </label>
            <input
              type="text"
              className="bg-gray-300 w-full focus:outline-none p-2 text-lg"
              name="email"
              required
            />
          </div>
          <div className="flex items-center justify-between space-x-5">
            <label htmlFor="name " className="text-lg w-1/4">
              Phone
            </label>
            <input
              type="text"
              className="bg-gray-300 w-full focus:outline-none p-2 text-lg"
              name="Phone Number"
              required
            />
          </div>
          <div className="flex items-center justify-between space-x-5 ">
            <label htmlFor="name " className="text-lg w-1/4 text-center ">
              Your Comment
            </label>
            <textarea
              className="bg-gray-300 w-full focus:outline-none p-2 text-lg h-full"
              cols={15}
              name="message"
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-full  text-black bg-blue-200 shadow-2xl px-9 py-2 font-semibold self-center my-5"
          >
            Post Your Inquiry
          </button>
        </form>
      </div>

      <iframe
        title="Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.5606299701276!2d22.544067615316695!3d51.24558623763366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722576476d18673%3A0xf68333c44bc77f89!2sUniwersytecka%207%2C%2020-400%20Lublin!5e0!3m2!1sen!2spl!4v1633863703017!5m2!1sen!2spl"
        className="w-full h-96 mt-16"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default ContactMeComponent;
