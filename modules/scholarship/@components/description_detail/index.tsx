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

const ScholarshipDescriptionDetail = () => {
  return (
    <div>
      <h4 className="mb-5">Study Abroad from Bangladesh</h4>
      <p>
        Are you one of the students looking to study abroad from Bangladesh? If
        yes, we congratulate you on this great decision. Studying abroad is a
        more exciting way to have your education dreams fulfilled. In this
        modern world, many countries have risen to the standard of providing an
        excellent international education.
      </p>
      <p>
        We have come up with this blog to brief you about your study-abroad
        opportunities and inform you about all of the study-abroad essentials.
        This blog will quench your thirst for the necessary information and will
        precisely guide you on your study-abroad journey. Read on to have
        clarity and a general understanding of the things needed and to be done
        to Study abroad from Bangladesh.
      </p>
      <p className="text-center">
        “Study abroad is the single most effective way of changing the way we
        view the world”.
      </p>
      <p>
        If you are a study abroad aspirant, you have a wonderful advantage at
        hand to broaden your professional and personal growth opportunities. It
        has been observed by many notable personalities that studying abroad
        gives us one of the most valuable experiences of our lifetime. By
        studying abroad, one can learn about a country, its history, culture,
        people, food and more. You can gain an extensive view of its people and
        their world by becoming one among them. There is more to learn in this
        classroom, which doesn’t have four walls.
      </p>
      <p>
        Abroad countries like the USA, the UK, Canada, Australia, Ireland, New
        Zealand, Germany and Dubai have always been the top contenders in
        providing quality education to their international students. This is the
        main reason students prioritise these countries over others even though
        they have to invest a large amount of money. But with scholarships and
        the like, it is easy for students to reduce their tuition fees to a
        certain extent.
      </p>
      <p>
        Abroad countries like the USA, the UK, Canada, Australia, Ireland, New
        Zealand, Germany and Dubai have always been the top contenders in
        providing quality education to their international students. This is the
        main reason students prioritise these countries over others even though
        they have to invest a large amount of money. But with scholarships and
        the like, it is easy for students to reduce their tuition fees to a
        certain extent.
      </p>

      <p>
        An abroad study is always the most valuable and most beneficial for a
        successful career establishment, either in your own land or in any other
        foreign country. An abroad degree gives you recognition and
        acknowledgement wherever you go and helps you immensely to stand out
        from the rest. Your skills are highly demanded and considered, giving
        you the edge to earn exponentially and lucratively, even during the
        starting phase of your career.
      </p>
      <p>
        An abroad study is always the most valuable and most beneficial for a
        successful career establishment, either in your own land or in any other
        foreign country. An abroad degree gives you recognition and
        acknowledgement wherever you go and helps you immensely to stand out
        from the rest. Your skills are highly demanded and considered, giving
        you the edge to earn exponentially and lucratively, even during the
        starting phase of your career.
      </p>
      <p>
        An abroad study is always the most valuable and most beneficial for a
        successful career establishment, either in your own land or in any other
        foreign country. An abroad degree gives you recognition and
        acknowledgement wherever you go and helps you immensely to stand out
        from the rest. Your skills are highly demanded and considered, giving
        you the edge to earn exponentially and lucratively, even during the
        starting phase of your career.
      </p>
      <div className="mt-[30px]">
        <GetReady />
      </div>
      <div>
        <h4 className="mb-4">Scholarships to study in the UK</h4>
        <p>
          The amount of money available and the type of award varies between
          institutions. Certain research programs may provide up to 100% of the
          tuition fee besides covering a part of your living expenditures.
        </p>
        <p>
          Here are some popular government scholarship programs you can apply to
          study in the UK as a Bangladeshi student:
        </p>

        <div className="overflow-auto">
          <table className="w-full text-center">
            <thead className="bg-primary text-secondary">
              <tr>
                {dataTable.thead.map((item, i) => {
                  return (
                    <th key={i} className="p-4 border">
                      {item}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {dataTable.tbody.map((item, index) => {
                return (
                  <tr key={index}>
                    {item.map((tdata, i) => {
                      return (
                        <td key={i} className="p-4 border">
                          {tdata}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <h4 className="mt-[30px] mb-4">Scholarships to study in the UK</h4>
        <p>
          The amount of money available and the type of award varies between
          institutions. Certain research programs may provide up to 100% of the
          tuition fee besides covering a part of your living expenditures.
        </p>
        <p>
          Here are some popular government scholarship programs you can apply to
          study in the UK as a Bangladeshi student:
        </p>
      </div>
    </div>
  );
};

export default ScholarshipDescriptionDetail;
