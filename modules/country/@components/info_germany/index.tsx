import React from "react";

export const InfoGermany = () => {
  return (
    <div>
      <div className="border-l border-l-[4px] border-secondary pl-[14px]">
        <p className="text-xl font-medium">Study in the Germany</p>
      </div>
      <h3 className="mb-[15px] text-primary">
        Why Students Choose Germany as a Study Abroad Destination
      </h3>

      <ol className="flex flex-col list-decimal	 gap-4 pl-4">
        <li>
          Germany offers a high quality of education with hundreds of programs
          to choose from. About 46 German universities rank in the QS World
          University Rankings 2023. German universities are often academic and
          research leaders in fields of interest including business and
          technology. Tuition costs in these universities are also very low as
          some public universities waive tuition fees entirely or charge a small
          administrative fee.
        </li>
        <li>
          This country is a cultural mosaic. Students from all over the world
          come together and live in a bubble of diverse traditions and culture
          in cities like Berlin. And students have the opportunity to travel to
          other European countries while in Germany too.
        </li>
        <li>
          The living cost in Germany is quite low compared to other study abroad
          destinations. The average living cost for a student is around EUR 1700
          and people in Germany enjoy a high quality life. And according to QS
          Top Universities, Munich is the 2nd best student city in the world
          with a desirability rate of 92.6!
        </li>
      </ol>

      {/* Top Universities & Courses in Germany */}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Top Universities & Courses in Germany
        </h3>
        <p>
          There are two main intake seasons in Germany: the summer and the
          winter. The winter semester is typically the busiest application
          period for German universities. The majority of scholarship and grant
          applications are due in July or August, and the intake period begins
          between September and October. International students interested in
          enrolling in a German university should start the admissions procedure
          one year before the start of the enrollment term. The two intakes are:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Winter: September-October</li>
          <li>Summer: April</li>
        </ul>

        <p>
          If you want to study law, medicine, commerce, or engineering, some of
          the top universities in the world for these disciplines can be found
          in Germany, including the University of Bonn and the Karlsruhe
          Institute of Technology. Many top-tier German universities offer
          extremely competitive Bachelor's, Master’s and Doctoral degree
          programmes, making them ideal choices for international students
          seeking a world-class education. Let’s look at some of the
          universities in Germany:
        </p>

        <div className="overflow-auto">
          <table className="w-full text-center">
            <thead className="bg-primary text-secondary">
              <tr>
                <th className="p-4 border">University</th>
                <th className="p-4 border">QS World University Rankings</th>
                <th className="p-4 border">Popular Courses</th>
                <th className="p-4 border">Tuition Fee Range Per Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border">
                  Technical University of Munich (TUM)
                </td>
                <td className="p-4 border">49</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">14,400</li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Bachelor in Management & Technology
                    </li>
                    <li className="text-start">Master in Consumer Science</li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="p-4 border">
                  Ludwig Maximilians University Munich
                </td>
                <td className="p-4 border">59</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">20,000</li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Master in Quantitative Economics
                    </li>
                    <li className="text-start">MSc Data Science</li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="p-4 border">Heidelberg University</td>
                <td className="p-4 border">65</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">14,000</li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      BA in Media and communication management
                    </li>
                    <li className="text-start">
                      M.Eng. in Information Technologies
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="p-4 border">Free University of Berlin</td>
                <td className="p-4 border">118</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">16,500</li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">BSc in Biochemistry</li>
                    <li className="text-start">MSc in Psychology</li>
                  </ul>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="p-4 border">Humboldt University Berlin</td>
                <td className="p-4 border">131</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">12,000</li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">MSc in Biophysics</li>
                    <li className="text-start">MA in Information Science</li>
                  </ul>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="p-4 border">
                  Karlsruhe Institute of Technology (KIT)
                </td>
                <td className="p-4 border">141</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">14,000</li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">BSc in Bioengineering</li>
                    <li className="text-start">
                      BSc in Mechanical Engineering
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Scholarships for International Students in Canada */}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Scholarships for International Students in Germany
        </h3>
        <p>
          There are some universities in Germany that may not require students
          to pay any tuition at all or may only require a very low amount of
          tuition or administrative fees. Nonetheless, it is possible to receive
          funding for your studies if you apply to a specific degree programme
          at a public institution and are accepted into that program or apply
          for financial aid. The following is a list of some of the prestigious
          German scholarships available to students:
        </p>
        <ul className="list-disc pl-4">
          <li>DAAD Scholarship</li>
          <li>Friedrich Ebert Stiftung Scholarships</li>
          <li>Erasmus Joint Scholarships</li>
          <li>Heinrich Boll Foundation Scholarships</li>
          <li>Konrad-Adenauer-Stiftung Scholarships</li>
        </ul>
      </div>

      {/* Visa Requirements for the Canadian Student Visa:*/}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Visa Requirements for the German Student Visa:
        </h3>
        <p>
          If you've been accepted to a university in Germany, you'll need to
          apply for a German Type D student visa. The visa requirements are as
          follows:
        </p>
        <ul className="list-disc pl-4">
          <li>Passport with 1 year validity</li>
          <li>Most recent passport-sized photos</li>
          <li>Letter of acceptance from a university</li>
          <li>Proof of English Proficiency test scores (IELTS, TOEFL)</li>
          <li>Proof of German Proficiency (Zertifikat B1)</li>
          <li>$11084.69 in the blocked account in Germany</li>
          <li>Letter of motivation</li>
          <li>CV/Resume</li>
        </ul>
      </div>

      {/*Work Opportunities in Canada for International Students*/}

      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Work Opportunities in Germany for International Students
        </h3>
        <p>
          Germany has Europe's largest economy and a thriving job market to
          match. In Germany, international students can work part-time in a wide
          range of industries. Jobs range from serving customers at a bar to
          filing paperwork in an office to assisting professors in a classroom
          setting. Students should look for a part-time job related to their
          field of study. Let’s look at some popular jobs for students:
        </p>
        <ul className="list-disc pl-4">
          <li>Barita</li>
          <li>Cashier</li>
          <li>Tutor</li>
          <li>Library Assistant</li>
          <li>Babysitter</li>
          <li>Research Assistant</li>
          <li>Translator</li>
          <li>Delivery Person</li>
        </ul>
        <h3 className="mb-[15px] mt-5 text-primary">Concluding Thoughts</h3>
        <p>
          The quality of higher education in Germany lives up to its reputation
          as one of the greatest places to get an education at the lowest
          possible cost. Top-tier educational institutions, experienced
          lecturers, innovative tools for expanding one's horizons of
          understanding, stimulating classroom settings, and fantastic industry
          experience opportunities can provide you peace of mind as you embark
          on your academic journey. Studying in Germany is a once-in-a-lifetime
          opportunity made better by the country's variety of welcoming towns
          and plentiful job opportunities. As a student in this country, you
          will be presented with several opportunities to grow and learn.
        </p>
      </div>
    </div>
  );
};

export default InfoGermany;
