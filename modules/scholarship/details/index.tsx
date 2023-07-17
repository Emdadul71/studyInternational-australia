import FeqSection from "@/modules/@common/faq";
import GetReady from "@/modules/@common/get_ready";
import LeadForm from "@/modules/@common/lead_form";
import LeadFormSection from "@/modules/@common/lead_form_section";
import StudyInfo from "@/modules/country/@components/study_info";
import Faq from "@/modules/faq";
import ServiceNewHero from "@/modules/services/@components/new_hero";
import React from "react";
import ScholarshipHero from "../@components/hero";
import ScholarshipDescription from "../@components/description";
import ScholarshipDescriptionDetail from "../@components/description_detail";
import { htmlParse } from "@/helpers/utils";

interface propTypes {
  data?: any;
}
const ScholarshipDetails = ({ data }: propTypes) => {
  return (
    <div>
      <ScholarshipHero data={data} />

      <section className="pb-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[810px_330px] gap-8">
            <div className="from_texteditor_wrapper scholarship_content">
              {data?.description && <div>{htmlParse(data?.description)}</div>}
            </div>
            {/* <ScholarshipDescriptionDetail /> */}
            <div>
              <LeadFormSection isSmall />
            </div>
          </div>
        </div>
      </section>

      <FeqSection
        title="Frequently Asked Questions to study abroad"
        data={data}
      />
    </div>
  );
};

export default ScholarshipDetails;
