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
        <p className="text-xl font-medium">Study in the UK</p>
      </div>
      <h3 className="mb-[15px] text-primary">
        Why Students Choose the UK as a Study Abroad Destination
      </h3>
      <ol className="flex flex-col gap-4">
        <li>
          The UK has a great number of top universities in the world with
          hundreds of programs to choose from! 7 British universities rank in
          the top 50 in the QS World University Rankings 2023. In total, 89 UK
          universities land a spot on these world rankings. The reputation and
          worldwide recognition of UK higher education reflect in these numbers.
          A degree from an institution in the United Kingdom opens doors for
          you. Having these credentials will make you stand out to potential
          employers all across the world.
        </li>
        <li>
          Experience in the workforce is highly regarded by most workplaces. The
          good news is that you can work part-time as an international student
          in the UK. During the academic year, you can work a maximum of 20
          hours per week. Gaining relevant work experience during your studies
          will set you apart from other graduates when seeking for jobs. It also
          gives you an idea of what to expect as you enter the working world.
          Another plus - some UK programs require a work placement or internship
          as part of the curriculum. This means you will get work experience as
          part of the degree!
        </li>
        <li>
          The United Kingdom is a popular study abroad destination because the
          history of international students studying in UK universities is
          centuries long. These universities are used to and take pride in
          having students from all walks of life and from around the world in
          their classrooms. This means you get to experience a really culturally
          diverse atmosphere, and can have an easier time settling in.
        </li>
      </ol>

      {/* Top Universities & Courses in the UK */}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Top Universities & Courses in the UK
        </h3>
        <p>
          In the United Kingdom, universities typically welcome new students in
          either September or January. There is also sometimes a short summer
          intake, though this tends to be less popular and has the fewest
          available classes. It's important to keep in mind that specific
          institution and course deadlines and start dates may differ. Make sure
          you apply on time by researching the deadlines for each institution
          and major. The key intakes in the UK are:
        </p>
        <ul className="list-disc pl-5">
          <li>September Intake</li>
          <li>January Intake</li>
          <li>April/May Intake</li>
        </ul>
        <p className="mt-5">
          You can take the first steps towards your career and future goals with
          a degree from a UK university. You can most certainly discover the
          perfect programme for you here, taught by experts in their fields and
          with excellent standards of quality assurance. Let’s look at some of
          the best universities in the UK and programs they offer:
        </p>
        <div className="overflow-auto">
          <table className="w-full text-center">
            <thead className="bg-primary text-secondary">
              <tr>
                <th className="p-4 border">University</th>
                <th className="p-4 border">QS World University Rankings</th>
                <th className="p-4 border">Tuition Fee Per Year (GBP)</th>
                <th className="p-4 border">Popular Programs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border">The University of Edinburgh</td>
                <td className="p-4 border">15</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Undergraduate: GBP 18,200 to 32,600
                    </li>
                    <li className="text-start">
                      Postgraduate: GBP 22,00 to 24,400
                    </li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Bachelor of Digital Communications
                    </li>
                    <li className="text-start">
                      Bachelor of Law in Criminology
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="p-4 border">The University of Manchester</td>
                <td className="p-4 border">28</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Undergraduate: GBP 19,000 to 46,000
                    </li>
                    <li className="text-start">
                      Postgraduate: GBP 12,400 to 45,000
                    </li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      BEng Computer Systems Engineering
                    </li>
                    <li className="text-start">MPhil Biological Chemistry</li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="p-4 border">King's College London</td>
                <td className="p-4 border">37</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Undergraduate: GBP 23,200 to 37,700
                    </li>
                    <li className="text-start">
                      Postgraduate: GBP 16,400 to 31,100
                    </li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      BA in History and International Relations
                    </li>
                    <li className="text-start">
                      MSc in Electronic Engineering with Management
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="p-4 border">
                  The London School of Economics and Political Science (LSE)
                </td>
                <td className="p-4 border">56</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Undergraduate: GBP 25,270 to 40,530
                    </li>
                    <li className="text-start">
                      Postgraduate: GBP 38,000 to 40,000
                    </li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      BSc Psychological and Behavioural Science
                    </li>
                    <li className="text-start">MSc Finance and Economics</li>
                  </ul>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="p-4 border">University of Bristol</td>
                <td className="p-4 border">61</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Undergraduate: GBP 21,000 to 28,000
                    </li>
                    <li className="text-start">
                      Postgraduate: GBP 24,700 to 38,000
                    </li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">BSc Medical Microbiology</li>
                    <li className="text-start">
                      MSc Biomedical Sciences Research
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="p-4 border">The University of Warwick</td>
                <td className="p-4 border">64</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Undergraduate: GBP 21,250 to 27,160
                    </li>
                    <li className="text-start">
                      Postgraduate: GBP 18,890 to 43,950
                    </li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      BSc in Computer Science with Business Studies
                    </li>
                    <li className="text-start">
                      MSc in Scientific Research and Communication
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Scholarships for International Students */}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Scholarships for International Students in the UK
        </h3>
        <p>
          The UK has been a leading example in international education for
          decades. It continues to attract and retain international talents in
          order to carry on this tradition and preserve its position as a world
          leader in higher education. One of the ways universities do this is
          through scholarships and other forms of financial aid that make a UK
          education accessible to international students. Let’s look at some
          scholarships in the UK:
        </p>
        <ul className="list-disc pl-4">
          <li>Lancaster Global Scholarship</li>
          <li>
            Vice-Chancellor’s International Scholarships by Newcastle University
          </li>
          <li>Aberdeen Global Scholarship</li>
          <li>Chevening Program</li>
          <li>Women in STEM scholarship by British Council</li>
        </ul>
        <p className="mt-4">
          These hardly scratch the surface of the options available. You can
          narrow down scholarships by study level, your program of interest, and
          even sociodemographic factors like scholarships by country of origin!
        </p>
        <p>
          Get a head start on your research, make sure you qualify, and narrow
          down your choices to the best ones for you. More research means more
          success while trying to win a university scholarship in the UK.
        </p>
      </div>

      {/* Visa Requirements*/}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Visa Requirements for the UK Student Visa
        </h3>
        <p>
          Once you successfully apply to a UK university and receive the
          Confirmation of Acceptance for Studies (CAS), you can then apply for
          the Student visa. Take a look at our rundown of the requirements for
          obtaining a student visa in the UK:
        </p>
        <ul className="list-disc pl-4">
          <li>Valid Passport</li>
          <li>Confirmation of Acceptance for Studies (CAS)</li>
          <li>English Proficiency test scores</li>
          <li>Recent passport-sized photographs</li>
          <li>CV/Resume</li>
          <li>Immigration Health Surcharge payment</li>
          <li>Proof of finance and details of the sponsor</li>
        </ul>
        <p className="mt-4">
          Depending on the country of origin, you may also have to sit for a
          credibility interview, give biometrics, and/or provide a tuberculosis
          test report. Be sure to check into the visa requirements applicable to
          you well before you start applying!
        </p>
      </div>
      {/*Work Opportunities in the UK for International Students*/}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Work Opportunities in the UK for International Students
        </h3>
        <p>
          Many students decide to study abroad with the hopes of landing a
          part-time job during their time there. If your Student visa authorizes
          you for part-time work, here are some student jobs available in the UK
          to take advantage of
        </p>
        <ul className="list-disc pl-4">
          <li>Teaching Assistant</li>
          <li>Dog walker</li>
          <li>Retail Worker</li>
          <li>Translator</li>
          <li>Barista</li>
          <li>Tutor</li>
          <li>Hotel Receptionist</li>
          <li>Cook</li>
        </ul>
        <p className="mt-4">
          At degree level or higher, you can work 20 hours per week during
          “term-time” - in other words while your semester is in full swing.
          Over term or semester breaks, you can work full-time!
        </p>
        <p>
          You can also access internship and work placement opportunities that
          are a part of your program during your time in the UK. And with the UK
          Graduate visa, you can continue staying in the UK after completing
          your program to look for work!
        </p>
        <p>
          Opportunities to gain international job experience are enhanced by
          studying abroad. In the UK, you have the chance to gain practical
          experience in a major global economy. You can really set yourself
          apart from the competition with this kind of experience.
        </p>
        <h3 className="mb-[15px] mt-5 text-primary">Concluding Thoughts</h3>
        <p>
          If you want to study abroad, Australia is a great option. Opportunity
          knocks when you have degrees from prestigious institutions around the
          world, and Australia is a great place to get them. In addition to a
          bright academic future, studying abroad can help you gain valuable
          work experience in one of the world's most advanced economies, expose
          you to a new culture, and prepare you for a lifelong commitment to a
          country with an exceptional standard of living.
        </p>
      </div>
    </div>
  );
};

export default InfoUK;
