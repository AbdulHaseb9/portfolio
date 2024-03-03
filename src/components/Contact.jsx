import React from "react";

export const Contact = () => {
  return (
    <div className="bg-secondarylight px-4 md:px-8 py-20 flex justify-center">
      <div className="text-center">
        <h4 className="text-sm font-semibold">Get In Touch</h4>
        <h2 className="text-3xl font-bold my-3">Contact me</h2>
        <form action="#" className="">
          <div className="flex flex-col md:flex-row gap-y-7 gap-x-14">
            <div>
              <input
                type="text"
                id="firstname"
                placeholder="First name"
                className="w-72 h-10 border border-primaryblue rounded-md px-3 py-1 text-sm text-[#888686]"
              />
            </div>
            <div>
              <input
                type="text"
                id="lastname"
                placeholder="Last name"
                className="w-72 h-10 border border-primaryblue rounded-md px-3 py-1 text-sm text-[#888686]"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-7 gap-x-14 my-7">
            <div>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="w-72 h-10 border border-primaryblue rounded-md px-3 py-1 text-sm text-[#888686]"
              />
            </div>
            <div>
              <input
                type="text"
                id="phone"
                placeholder="Phone number (optional)"
                className="w-72 h-10 border border-primaryblue rounded-md px-3 py-1 text-sm text-[#888686]"
              />
            </div>
          </div>
          <div>
            <textarea
              id="message"
              cols="93"
              rows="5"
              placeholder="Enter your message ......."
              className="w-72 md:w-auto border border-primaryblue rounded-md px-3 py-1 text-sm text-[#888686]"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value={"Submit"}
              className="my-4 bg-primaryblue text-white px-4 py-2 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
