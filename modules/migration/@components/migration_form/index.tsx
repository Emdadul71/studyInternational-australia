import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const MigrationForm = () => {
  return (
    <section className="bg-primary pt-[60px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          <div>
            <p className="heading-two text-white">
              Want to visit Australia? Sign up with Study International
            </p>
            <p className="text-white">
              Just fill in your details and we’ll call you back.
            </p>
          </div>
          <div>
            <form>
              <div>
                <input
                  type="text"
                  name="firstName"
                  className={`block w-full py-2 focus:border-white placeholder:text-[#8E8E93] px-4 outline-none placeholder:text-grey border-[#8E8E93] bg-transparent border mb-[15px]`}
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="firstName"
                  className={`block w-full py-2 focus:border-white placeholder:text-[#8E8E93] px-4 outline-none placeholder:text-grey border-[#8E8E93] bg-transparent border mb-[15px]`}
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="firstName"
                  className={`block w-full py-2 focus:border-white placeholder:text-[#8E8E93] px-4 outline-none placeholder:text-grey border-[#8E8E93] bg-transparent border mb-[15px]`}
                  placeholder="Mobile Number"
                />
              </div>
              <div>
                <Select
                  isClearable
                  className={`lead_form_wrapper border border-greylight`}
                  classNamePrefix={`react-select`}
                  placeholder="Select Intake"
                  options={options}
                />
              </div>
              <button className="btn btn-secondary w-full mt-[30px] hover:bg-[#e6ce1e] hover:text-primary">
                I Want to Visit Australia
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationForm;
