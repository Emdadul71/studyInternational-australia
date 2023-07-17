"use client";
import LeadForm from "@/modules/@common/lead_form";
import React from "react";

const EventForm = ({ booknowRef, data }: any) => {
  return (
    <section ref={booknowRef}>
      <div className="container">
        <div className="max-w-[1030px] mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.05)] py-[30px] lg:py-[80px]">
          <div className="max-w-[665px] mx-auto mb-[40px]">
            <h3 className="text-center mb-[15px]">
              Sign Up for the Study International Australia Virtual Event 2023
            </h3>
            <p className="text-center text-base mb-0">
              Interested in exploring your options to study abroad in the UK?
              Share your details with us below, and we will be in touch with you
              shortly!
            </p>
          </div>
          <div className="max-w-[785px] mx-auto">
            <LeadForm data={data} isParticipant isWhite />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventForm;
