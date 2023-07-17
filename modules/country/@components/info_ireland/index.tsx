import React from "react";

export const InfoIreland = () => {
  return (
    <div>
      <div className="border-l border-l-[4px] border-secondary pl-[14px]">
        <p className="text-xl font-medium">Study in the Ireland</p>
      </div>
      <h3 className="mb-[15px] text-primary">
        Why Students Choose Ireland as a Study Abroad Destination
      </h3>

      <ol className="flex flex-col list-decimal	 gap-4 pl-4">
        <li>
          The brilliance of Irish degrees is acknowledged globally. From
          language, humanities, and arts universities, highly regarded business
          schools, and centers of scientific and technological excellence,
          students can select from a wide selection of programmes to suit their
          needs. There are 3 Irish institutions in the top 300 of QS World
          University Rankings 2023 and several more universities and institutes
          of technology among the very best in Europe.
        </li>
        <li>
          Ireland is a country with a rich cultural past and a track record of
          global innovation. Ireland's distinctive innovative and creative
          culture is a crucial component of the Irish experience. Also, when
          compared to other student destinations like France, the UK, and other
          countries, the cost of living and tuition is significantly lower.
          Living in Ireland is a memorable experience thanks to the country's
          welcoming atmosphere and friendliness.
        </li>
        <li>
          Graduates from Ireland are leaders in their communities, pioneers in
          their fields, and global ambassadors for excellence. The key to
          success can be obtained in Ireland through education and connections.
          Businesses that need a highly talented, educated, and skilled
          workforce to propel their success prefer to locate in Ireland. Google,
          Facebook, Pfizer, Apple, and Intel, to mention a few, have all made
          Ireland their European headquarters.
        </li>
      </ol>

      {/* Top Universities & Courses in Ireland */}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Top Universities & Courses in Ireland
        </h3>
        <p>
          When making the best intake decision, consider factors including
          programme availability, academic performance, admission test results,
          acceptance rates, employment prospects, and degree of programme
          preparedness before making your choice. The following are the main
          intakes in Ireland:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Fall: September intake</li>
          <li>Spring: February intake</li>
        </ul>

        <p>
          Now that you know the intakes let’s look at some of the top
          universities in Ireland and their popular courses:
        </p>

        <div className="overflow-auto">
          <table className="w-full text-center">
            <thead className="bg-primary text-secondary">
              <tr>
                <th className="p-4 border">University</th>
                <th className="p-4 border">QS World University Rankings</th>
                <th className="p-4 border">
                  Average Tuition Fee Per Year (EUR)
                </th>
                <th className="p-4 border"> Popular Programs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border">
                  Trinity College Dublin, The University of Dublin
                </td>
                <td className="p-4 border">98</td>
                <td className="p-4 border">11,364</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">BSc in Molecular Medicine</li>
                    <li className="text-start">MS in Data Science</li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="p-4 border">University College Dublin</td>
                <td className="p-4 border">181</td>
                <td className="p-4 border">20,500</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">BSc in Architecture</li>
                    <li className="text-start">ME Civil Engineering</li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="p-4 border">University of Galway</td>
                <td className="p-4 border">270</td>
                <td className="p-4 border">32,000</td>

                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">Bachelor of Arts English</li>
                    <li className="text-start">
                      Bachelors in Business Information
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="p-4 border">University College Cork</td>
                <td className="p-4 border">303</td>
                <td className="p-4 border">30,000</td>

                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      BA in Business and Financial Economics
                    </li>
                    <li className="text-start">MSc in Nursing</li>
                  </ul>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="p-4 border">Dublin City University</td>
                <td className="p-4 border">471</td>
                <td className="p-4 border">4,000</td>

                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      MSc in Strategic Learning & Development
                    </li>
                    <li className="text-start">MSc in Management</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Scholarships for International Students in Ireland */}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Scholarships for International Students in Ireland
        </h3>
        <p>
          Irish universities and colleges offer a variety of scholarships, which
          you can qualify and apply for if you plan ahead. Depending on the
          requirements, course, and institution, these can be partial or full
          scholarships. Some of the available scholarships in Ireland are as
          follows:
        </p>
        <ul className="list-disc pl-4">
          <li>The Walsh Fellowship</li>
          <li>University College Dublin International Scholarships</li>
          <li>The Government of Ireland International Education Scholarship</li>
          <li>University of Limerick Indian Student Scholarships</li>
          <li>Government of Ireland Postgraduate Scholarship</li>
          <li>Inlaks Shivdasani Scholarship</li>
        </ul>
        <p>
          You can research both need-based awards and merit-based awards - be
          sure to look into the eligibility criteria so you apply for awards you
          have a greater chance of securing.
        </p>
      </div>

      {/* Visa Requirements for the Ireland Student Visa:*/}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Visa Requirements for the Irish Student Visa
        </h3>
        <p>
          The majority of international students who wish to study in Ireland
          apply for a study visa this means that the course you might be
          applying for lasts longer than 3 months. Application fee for student
          visa to Ireland is EUR 60. The visa requirements are:
        </p>
        <ul className="list-disc pl-4">
          <li>Valid passport</li>
          <li>2 passport sized colored photos</li>
          <li>Letter of acceptance from an Irish institution</li>
          <li>Proof of finances of 7,000 EUR</li>
          <li>Health insurance details</li>
          <li>
            English proficiency test scores- IELTS, TOEFL or other accepted
            tests
          </li>
          <li>CV/Resume</li>
          <li>Evidence of payment to the university</li>
        </ul>
        <p>
          Review the Ireland student visa application checklist twice before
          submitting. If you haven't provided all required information, if your
          documentation has to be checked, or if your personal circumstances
          require additional time, your application may be processed more
          slowly.
        </p>
      </div>

      {/*Work Opportunities in Ireland for International Students*/}

      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Work Opportunities in Ireland for International Students
        </h3>
        <p>
          Ireland has traditionally been a preferred destination for students
          because of all the benefits it provides. In addition to having a
          top-notch educational system and a friendly atmosphere, the nation
          provides several options for students to pay for their higher
          education. Searching for part-time employment in Ireland is one such
          strategy. The top part-time positions in Ireland that are open to
          international students include:
        </p>
        <ul className="list-disc pl-4">
          <li>Barista</li>
          <li>Research assistant</li>
          <li>Teaching assistant</li>
          <li>Library assistant</li>
          <li>Tutor</li>
          <li>Receptionist</li>
          <li>Administration officer</li>
          <li>Tour Guide</li>
        </ul>
        <h3 className="mb-[15px] mt-5 text-primary">Concluding Thoughts</h3>
        <p>
          Studying in Ireland is beneficial in more ways than one, despite the
          fact that the cost of living is slightly higher than in other
          countries where English is the primary language. It is an outstanding
          location for overseas students to further their education due to the
          abundance of high-quality employment possibilities and prestigious
          educational institutions. The growing number of employment prospects
          and the attraction of major industries towards the country work as the
          icing on the cake for Ireland, which is becoming an enormous source of
          curiosity for international students from India and other South Asian
          nations. Your time spent studying in Ireland, which is itself a
          stunningly beautiful country, is sure to be one of the highlights of
          your life.
        </p>
      </div>
    </div>
  );
};

export default InfoIreland;
