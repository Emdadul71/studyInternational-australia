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

export const InfoUK = () => {
  return (
    <div>
      <div className="border-l border-l-[4px] border-secondary pl-[14px]">
        <p className="text-xl font-medium">Study in Melbourne</p>
      </div>
      <p>
        Experience academic excellence, cultural vibrancy, and abundant
        opportunities in Australia's cosmopolitan city. Unleash your potential
        and thrive in Melbourne's diverse and innovative educational landscape.
      </p>
      <p>
        Are you considering studying in Melbourne? Melbourne is a vibrant and
        cosmopolitan city known for its excellent education system and diverse
        cultural scene. Here's a brief summary of studying in Melbourne:
      </p>

      <div>
        <h3 className="mb-[15px] text-primary">Renowned Universities</h3>
        <p>
          Melbourne is home to prestigious universities such as the University
          of Melbourne, Monash University, and RMIT University, offering a wide
          range of programs across various disciplines.
        </p>

        <h3 className="mb-[15px] text-primary">Quality Education:</h3>
        <p>
          Melbourne is recognized for its high-quality education and research
          opportunities, attracting students from around the globe. The city
          fosters a supportive and innovative learning environment.
        </p>
        <h3 className="mb-[15px] text-primary">Cultural Hub</h3>
        <p>
          Melbourne is renowned for its thriving arts, music, and culinary
          scenes. The city hosts numerous festivals, exhibitions, and cultural
          events, providing a rich and vibrant experience for students.
        </p>

        <h3 className="mb-[15px] text-primary">Employment Opportunities</h3>
        <p>
          Melbourne is a major economic center, providing excellent job
          prospects for graduates. The city offers a diverse range of
          industries, including finance, technology, creative arts, and
          healthcare.
        </p>
        <h3 className="mb-[15px] text-primary">Multicultural Environment</h3>
        <p>
          Melbourne embraces diversity, creating a multicultural environment
          that promotes inclusivity and cross-cultural interactions. Students
          can engage with people from different backgrounds and broaden their
          global perspectives.
        </p>
        <h3 className="mb-[15px] text-primary">Livability</h3>
        <p>
          Melbourne consistently ranks as one of the world's most livable
          cities, offering a high standard of living, excellent healthcare,
          efficient public transport, and a safe environment for international
          students.
        </p>
        <h3 className="mb-[15px] text-primary">Student Support Services</h3>
        <p>
          Educational institutions in Melbourne provide comprehensive support
          services, including academic assistance, career guidance,
          accommodation support, and social integration programs to ensure a
          positive and rewarding student experience.
        </p>
        <p>
          When considering studying in Melbourne, it's important to research
          specific universities, courses, and scholarships that align with your
          interests and goals. You should also familiarize yourself with visa
          requirements, accommodation options, and other practical
          considerations.
        </p>
        <p>
          Studying in Melbourne offers a unique blend of educational excellence,
          cultural vibrancy, and career opportunities. It's a city that
          celebrates creativity, diversity, and academic achievement, making it
          an ideal destination for students seeking a transformative educational
          journey.
        </p>
      </div>
    </div>
  );
};

export default InfoUK;
