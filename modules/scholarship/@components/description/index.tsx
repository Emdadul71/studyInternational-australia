import GetReady from "@/modules/@common/get_ready";
import React from "react";

const dataTable = {
  thead: ["Sl. No", "Name of the scholarship", "Description"],
  tbody: [
    [
      "1",
      "Chevening Scholarship",
      "Supports talented professionals who have shown prior leadership skills and exceptional performance in their respective fields. With Chevening, you can apply for a scholarship or fellowship, the selection of which is done by the high commission and British embassies.",
    ],
    [
      "2",
      "Commonwealth Scholarship and Fellowship",
      "The commonwealth scholarship aims to give international students from commonwealth countries a chance to pursue postgraduate degrees in the UK. Basically, the scholarship scheme caters to students from commonwealth nations to study in the UK.",
    ],
    [
      "3",
      "GREAT Scholarship",
      "This scholarship is jointly funded by the UK Government’s GREAT Britain Campaign and the British Council under the Study UK campaign. This program includes 99 postgraduate scholarships from 36 UK universities in a variety of subjects. However, for Bangladeshi students, 12 of the UK higher education institutions are offering 13 postgraduate scholarships.",
    ],
    [
      "4",
      "Scotland Saltire Scholarships",
      "Scotland’s Saltire Scholarships is a scholarship program of the Scottish Government in collaboration with Scottish universities offered in the areas of creative industries, technology, science, medical sciences, healthcare, and renewable and clean energy.",
    ],
  ],
};

const ScholarshipDescription = () => {
  return (
    <>
      <div className="from_texteditor_wrapper">
        <div>
          <h4 className="mb-5">
            Study Abroad Scholarships for Bangladeshi Students
          </h4>
          <p>
            Studying in a foreign country can do wonders for your professional
            future. However, there are numerous factors to consider, including
            where to study, which course to take, and how much money you will
            need to invest. Many students from Bangladesh travel abroad each
            year to further their education. Bangladeshi students who aspire to
            study abroad should read up on the latest developments. You need to
            be well-versed in the area you plan to study in, the institution you
            intend to attend, and the major you plan to pursue. We will examine
            the benefits of studying abroad, the best countries to apply to, and
            the application process for students from Bangladesh.
          </p>
          <p>
            Studying abroad gives you credentials that are acknowledged all over
            the world. In addition to this more visible gain, it will also help
            you think more broadly and develop a more global perspective. You'll
            be able to make your own choices and live on your own for the first
            time.
          </p>

          <p>
            However, compared to Bangladesh, these countries are widely regarded
            as the most expensive study abroad locations. Generally speaking,
            English-speaking countries have more expensive tuition and living
            expenses. However, these places continue to be the most popular for
            Bangladeshi students. These countries have set the bar high for
            education and research for decades, and their traditions of
            excellence run deep. Everywhere you go, people will appreciate and
            value your degree from one of these prestigious universities &
            colleges. It will set you apart when applying for jobs or graduate
            programmes in such countries. Many people believe this is a
            once-in-a-lifetime chance, but how can you possibly afford it? You
            need to put in extra effort if winning a scholarship will determine
            whether or not you can afford to study abroad. The most prestigious
            awards given out at any given institution are also the hardest to
            win. You can increase your chances of winning a scholarship by
            broadening and narrowing your search to meet your specific needs.
            Types of scholarships that are available:
          </p>
          <ul className="list-disc">
            <li>Merit-based scholarships</li>
            <li>Subject-specific scholarships</li>
            <li>Need-based scholarships</li>
            <li>Scholarships by study level</li>
            <li>Sports based scholarships</li>
            <li>Scholarships by country of citizenship</li>
          </ul>
        </div>
      </div>

      <GetReady
        data={{ getReadyTitle: "Scholarship", url: "/counsellors" }}
        classes={{ root: "mt-[30px] pb-0" }}
      />
    </>
  );
};

export default ScholarshipDescription;
