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

export const InfoBrisbane = () => {
  return (
    <div>
      <div className="border-l border-l-[4px] border-secondary pl-[14px]">
        <p className="text-xl font-medium">Study in Brisbane</p>
      </div>
      <p>
        Are you considering studying in Brisbane? Brisbane, the capital city of
        Queensland, offers a vibrant and welcoming environment for international
        students. Here's a brief summary of studying in Brisbane:
      </p>

      <div>
        <h3 className="mb-[15px] text-primary">World-Class Universities</h3>
        <p>
          Brisbane is home to several prestigious universities, including The
          University of Queensland (UQ), Queensland University of Technology
          (QUT), and Griffith University. These institutions offer a wide range
          of programs and courses to cater to various academic interests.
        </p>

        <h3 className="mb-[15px] text-primary">High-Quality Education</h3>
        <p>
          Brisbane universities are renowned for their academic excellence and
          research opportunities. Students can receive a world-class education
          while being supported by experienced faculty and innovative learning
          environments.
        </p>
        <h3 className="mb-[15px] text-primary">Lifestyle and Climate</h3>
        <p>
          Brisbane boasts a subtropical climate, providing a comfortable and
          enjoyable lifestyle. With its outdoor spaces, beautiful parks, and
          proximity to stunning coastal regions, Brisbane offers a relaxed and
          balanced lifestyle for students to explore and enjoy.
        </p>

        <h3 className="mb-[15px] text-primary">Cultural Diversity</h3>
        <p>
          Brisbane celebrates cultural diversity, offering a multicultural
          environment that embraces different backgrounds and perspectives.
          Students have the opportunity to engage with a wide range of cultures,
          participate in multicultural events, and broaden their global outlook.
        </p>
        <h3 className="mb-[15px] text-primary">Growing Job Market</h3>
        <p>
          Brisbane has a growing job market across various industries, including
          healthcare, information technology, finance, and creative industries.
          Studying in Brisbane can provide access to internships, work
          placements, and networking opportunities for future career prospects.
        </p>
        <h3 className="mb-[15px] text-primary">Student Support Services</h3>
        <p>
          Brisbane universities provide comprehensive support services for
          international students, including academic assistance, accommodation
          support, career guidance, and social integration programs. These
          services aim to ensure a smooth transition and a positive study
          experience.
        </p>
        <h3 className="mb-[15px] text-primary">Affordable Living</h3>
        <p>
          Compared to other major Australian cities, Brisbane offers a
          relatively lower cost of living. Students can find affordable
          accommodation options, public transportation, and a range of student
          discounts to make their experience more cost-effective.
        </p>

        <p>
          Studying in Brisbane offers a combination of academic excellence, a
          vibrant lifestyle, and a welcoming community. Whether it's pursuing a
          degree, engaging in research, or experiencing a diverse cultural
          scene, Brisbane provides a supportive and enriching environment for
          international students.
        </p>
      </div>
    </div>
  );
};

export default InfoBrisbane;
