import React from 'react';
import useBtnValidate from '../hook/useBtnValidate';

function Contact() {
  const { form, handleChange, isValid } = useBtnValidate();

  return (
    <section id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">

      <h1 className="py-4 text-4xl font-bold text-center text-[#573e04]">
        Contact
      </h1>

      <form
        action="https://getform.io/f/505cdba8-ff2c-4aac-bfa7-9ddfd7d1b313"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">

          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="uppercase text-sm py-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              className="border-2 rounded-lg p-3 flex border-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <label
              className="uppercase text-sm py-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              className="border-2 rounded-lg p-3 flex border-gray-300"
            />
          </div>

        </div>

        <div className="flex flex-col py-2">
          <label
            className="uppercase text-sm py-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="border-2 rounded-lg p-3 flex border-gray-300"
          />
        </div>

        <div className="flex flex-col py-2">
          <label
            className="uppercase text-sm py-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={form.subject}
            onChange={handleChange}
            className="border-2 rounded-lg p-3 border-gray-300"
          />
        </div>

        <div className="flex flex-col py-2">
          <label
            className="uppercase text-sm py-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            rows="10"
            type="email"
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            className="border-2 rounded-lg p-3 border-gray-300"
          ></textarea>
        </div>
        <button
          className="bg-[#2c2003] text-gray-100 mt-4 w-full p-4 rounded-lg disabled:bg-[#8e6f26]"
          disabled={!isValid()}
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  )
}

export default Contact