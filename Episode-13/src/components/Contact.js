import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-5 m-5">Contact Us</h1>
      <form action="">
        <input
          type="text"
          className="border border-black p-2 ml-10"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black bg-black text-white rounded-lg p-2 m-2">
          Button
        </button>
      </form>
    </div>
  );
};

export default Contact;
