import { htmlParse } from "@/helpers/utils";
import LeadFormSection from "@/modules/@common/lead_form_section";
import React from "react";

const StudyInfo = ({ data }: any) => {
  const dataDetail: any = data?.data?.description;
  return (
    <>
      <section className="pb-10">
        <div className="container">
          <div className="max-w-[800px] mx-auto">
            <div className="from_texteditor_wrapper">
              {htmlParse(dataDetail)}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary p-0">
        <div className="container">
          <div className="max-w-[650px] mx-auto">
            <LeadFormSection isServices />
          </div>
        </div>
      </section>
    </>
  );
};

export default StudyInfo;
