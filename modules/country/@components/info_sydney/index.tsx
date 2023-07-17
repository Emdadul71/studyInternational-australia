import React from "react";

const topUniversityDataTable = {
  thead: [
    "University",
    "QS World University Rankings",
    "Tuition Fee Per Year (GBP)",
    "Popular Programs",
  ],
  tbody: [
    [
      "The University of Edinburgh",
      "15",
      "Undergraduate: GBP 18,200 to 32,600, Postgraduate: GBP 22,00 to 24,400",
      "Bachelor of Digital Communications Bachelor of Law in Criminology",
    ],
    [
      "The University of Manchester",
      "28",

      "Undergraduate: GBP 19,000 to 46,000, Postgraduate: GBP 12,400 to 45,000",
    ],
    [
      "King's College London",
      "37",

      "Undergraduate: GBP 23,200 to 37,700, Postgraduate: GBP 16,400 to 31,100",
    ],
    [
      "The London School of Economics and Political Science (LSE)",
      "56",

      "Undergraduate: GBP 25,270 to 40,530, Postgraduate: GBP 38,000 to 40,000",
    ],
    [
      "University of Bristol",
      "61",

      "Undergraduate: GBP 21,000 to 28,000, Postgraduate: GBP 24,700 to 38,000",
    ],
    [
      "The University of Warwick",
      "64",

      "Undergraduate: GBP 21,250 to 27,160, Postgraduate: GBP 18,890 to 43,950",
    ],
  ],
};

export const InfoSydney = () => {
  return (
    <div>
      <div className="border-l border-l-[4px] border-secondary pl-[14px]">
        <p className="text-xl font-medium">Study in Sydney</p>
      </div>
      <p>
        Are you considering studying in Sydney? Sydney is a vibrant and
        multicultural city with a renowned education system. It offers a wide
        range of opportunities for international students to pursue their
        educational and career goals. Here are some key points about studying in
        Sydney:
      </p>

      <div>
        <h3 className="mb-[15px] text-primary">Educational Institutions</h3>
        <p>
          Sydney is home to several prestigious universities and educational
          institutions that offer a diverse range of courses and programs. The
          University of Sydney, University of Technology Sydney (UTS), and
          Macquarie University are among the top-ranked institutions in
          Australia, providing high-quality education across various
          disciplines.
        </p>

        <h3 className="mb-[15px] text-primary">Course Options</h3>
        <p>
          Whether you're interested in business, engineering, arts, health
          sciences, or any other field, Sydney offers an extensive selection of
          courses to cater to diverse interests and career aspirations. From
          undergraduate to postgraduate degrees, you'll have numerous options to
          choose from.
        </p>
        <h3 className="mb-[15px] text-primary">Cultural Hub</h3>
        <p>
          Sydney is a cultural hub that celebrates diversity and offers a
          vibrant social scene. You'll have the opportunity to connect with
          people from different backgrounds, participate in multicultural
          events, explore art galleries, enjoy live music performances, and
          experience a wide range of cuisines.
        </p>

        <h3 className="mb-[15px] text-primary">Employment Opportunities</h3>
        <p>
          Sydney is a major economic hub and offers ample employment
          opportunities for graduates. The city is home to numerous national and
          international companies across various industries, providing students
          with excellent prospects for internships and job placements.
        </p>
        <h3 className="mb-[15px] text-primary">Quality of Life</h3>
        <p>
          Sydney is renowned for its high standard of living and quality of
          life. With its stunning beaches, beautiful parks, and iconic landmarks
          like the Sydney Opera House and Harbour Bridge, there is always
          something exciting to explore and enjoy in the city.
        </p>
        <h3 className="mb-[15px] text-primary">Student Support Services</h3>
        <p>
          Educational institutions in Sydney provide comprehensive support
          services for international students. These services include academic
          support, accommodation assistance, career guidance, health and
          well-being support, and cultural integration programs to ensure a
          smooth transition and positive study experience.
        </p>
        <h3 className="mb-[15px] text-primary">Global Connections</h3>
        <p>
          Studying in Sydney allows you to develop a global network and
          connections with students and professionals from around the world.
          This can broaden your perspective, enhance your cultural
          understanding, and create valuable opportunities for future
          collaborations and career advancement.
        </p>

        <p>
          Before making any decisions, it's advisable to research specific
          universities and courses that align with your interests and career
          goals. You should also consider factors such as tuition fees,
          scholarships, accommodation options, and visa requirements. It's
          recommended to reach out to the international student offices or
          education agents for more information and guidance on the application
          process.
        </p>
        <p>
          Studying in Sydney can be an enriching and rewarding experience,
          offering excellent educational opportunities and a multicultural
          environment. Good luck with your educational journey in Sydney!
        </p>
      </div>
    </div>
  );
};

export default InfoSydney;
