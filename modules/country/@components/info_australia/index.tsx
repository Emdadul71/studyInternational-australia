import React from "react";

export const InfoAustralia = () => {
  return (
    <div>
      <div className="border-l border-l-[4px] border-secondary pl-[14px]">
        <p className="text-xl font-medium">Study in the Australia</p>
      </div>
      <h3 className="mb-[15px] text-primary">
        Why Students Choose Australia as a Study Abroad Destination
      </h3>
      <p>
        It's highly likely that Australia will come up whenever you ask someone
        about their higher studies. There are definitely a lot of people
        interested in this island country. What are the reasons behind the high
        demand for studying abroad in Australia? Here are a few of the most
        compelling ones:
      </p>
      <ol className="flex flex-col list-decimal	 gap-4 pl-4">
        <li>
          <strong>The standard of education</strong> offered is, of course,
          crucial in making a final decision on where to enroll. Throughout
          history, universities in Australia have been a breeding ground for
          innovative thinkers and doers. 5 Australian universities make it to
          the top 50 in the QS World University Rankings in 2023. These
          prestigious institutions are among the best in the world when it comes
          to teaching and research.
        </li>
        <li>
          <strong>Australia's diversity</strong> is one of the things that draws
          foreign students to the country. 6 Australian cities rank in the top
          40 of the QS Best Student Cities 2023. Among the reasons contributing
          to these are the cities’ student mix, where Melbourne is leading the
          race! You'll fit right in with the many languages, cultures,
          nationalities, and ethnic groups that make up the world's smallest
          continent.
        </li>
        <li>
          <strong>Post-graduation opportunities</strong> are another plus of
          studying in Australia. The country ranks high on the list of nations
          that welcome international students with open arms. If you are
          eligible for a Subclass 485 visa after graduation, you can extend your
          time in Australia from two to four years upon graduation. This lets
          you seek and take advantage of work opportunities and work towards
          permanent residency to call Australia your forever home!
        </li>
      </ol>
      {/* Applying to Australian Universities */}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Applying to Australian Universities
        </h3>
        <p>
          Holding an Australian university degree says a lot about how qualified
          you are as a graduate. To take advantage of this, you need to
          understand the Australian way of higher education. The Australian
          Qualifications Framework (AQF) conceptualizes the different levels of
          higher education in the country. It offers a system that makes it easy
          to translate international academic qualifications to their Australian
          equivalence.{" "}
        </p>
        <p>
          Before enrolling, you also need to verify that your selected degree is
          recognised by CRICOS (the Commonwealth Register of Institutions and
          Courses for Overseas Students). We’ll discuss both in a bit more
          detail below.
        </p>
      </div>

      {/* What is AQF? */}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">What is AQF?</h3>
        <p>
          Australian education and training are governed by the Australian
          Qualifications Framework (AQF), a national policy. It combines the
          credentials from every area of education and training into a solitary
          comprehensive and balanced qualifications framework.
        </p>
        <p>The AQF has ten levels in total:</p>
        <ul className="list-disc pl-5">
          <li>
            Levels 1-7 - undergraduate studies (diplomas, certifications, and
            three-year Bachelor’s degrees)
          </li>
          <li>Level 8 - four-year Bachelor’s degrees</li>
          <li>Level 9 - Master’s degrees</li>
          <li>Level 10 - Postdoctoral degrees</li>
        </ul>
      </div>
      {/* What is CRICOS? */}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">What is CRICOS?</h3>
        <p>
          The Commonwealth Register of Institutions and Courses for Overseas
          Students (CRICOS) was established by the Education Services for
          Overseas Students Act of 2000. It keeps a list of the schools and
          programs that have state and territorial approval to instruct
          international students.
        </p>
        <p>
          So, naturally, as an international student your course needs to be
          CRICOS-registered to receive a Confirmation of Enrolment (CoE)! And
          heads up - you need the CoE to apply for your student visa, or the
          Subclass 500.
        </p>
      </div>

      {/* Top Universities & Courses in Australia */}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Top Universities & Courses in Australia
        </h3>
        <p>
          The world-class universities in Australia offer some of the most
          popular courses around the world. Let’s take a look at the intakes and
          courses for these universities!
        </p>
        <p>
          There are normally two major intakes at Australian universities.
          Nonetheless, some universities offer three intakes throughout the
          year.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Semester 1: February-March</li>
          <li>Semester 2: July-August</li>
          <li>Semester 3: September-November</li>
        </ul>
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
                  Australian National University (ANU)
                </td>
                <td className="p-4 border">30</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Bachelor of Applied Data Analytics
                    </li>
                    <li className="text-start">
                      Master of Engineering in Mechatronics
                    </li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Undergraduate: AUD 39,024 to 41,030
                    </li>
                    <li className="text-start">
                      Postgraduate: AUD 43,680 to 54,880
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="p-4 border">The University of Melbourne</td>
                <td className="p-4 border">33</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">Bachelor of Biomedicine</li>
                    <li className="text-start">Master of Entrepreneurship</li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Undergraduate: AUD 40,104 to 49,496
                    </li>
                    <li className="text-start">
                      Postgraduate: AUD 44,864 to 46,304
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="p-4 border">The University of Sydney</td>
                <td className="p-4 border">41</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Bachelor of Pharmacy and Management
                    </li>
                    <li className="text-start">Master of Project Management</li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Undergraduate: AUD 45,000 to 57,000
                    </li>
                    <li className="text-start">
                      Postgraduate: AUD 41,000 to 73,000
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="p-4 border">
                  The University of New South Wales
                </td>
                <td className="p-4 border">45</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Bachelor of Information Systems
                    </li>
                    <li className="text-start">Master of Data Science</li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Undergraduate: AUD 41,225 to 49,600
                    </li>
                    <li className="text-start">
                      Postgraduate: AUD 32,920 to 48,280
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="p-4 border">The University of Queensland</td>
                <td className="p-4 border">50</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Bachelor of Architectural Design
                    </li>
                    <li className="text-start">
                      Master of Quantitative Biology
                    </li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Undergraduate: AUD 29,655 to 39,540
                    </li>
                    <li className="text-start">
                      Postgraduate: AUD 17,504 to 24,688
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="p-4 border">Monash University</td>
                <td className="p-4 border">57</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Bachelor of Medical Science, Doctor of Medicine
                    </li>
                    <li className="text-start">
                      Master of Environment and Sustainability
                    </li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Undergraduate: AUD 29,700 to 39,600
                    </li>
                    <li className="text-start">
                      Postgraduate: AUD 28,700 to 42,000
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="p-4 border">
                  The University of Western Australia
                </td>
                <td className="p-4 border">90</td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Bachelor of Automation and Robotics
                    </li>
                    <li className="text-start">
                      Master of Information Technology
                    </li>
                  </ul>
                </td>
                <td className="p-4 border">
                  <ul className="list-disc pl-4">
                    <li className="text-start">
                      Undergraduate: AUD: 35,900 to 44,700
                    </li>
                    <li className="text-start">
                      Postgraduate: AUD 17,950 to 89,200
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Scholarships for International Students in Australia */}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Scholarships for International Students in Australia
        </h3>
        <p>
          There are usually plenty of partially or fully funded scholarships
          available from universities, the Australian government, public &
          private organizations, and so on. Some great examples of the types of
          scholarship you can access are:
        </p>
        <ul className="list-disc pl-4">
          <li>
            Vice-Chancellor’s International Scholarships Scheme by University of
            Sydney
          </li>
          <li>UOW Postgraduate Academic Excellence Scholarship</li>
          <li>Mitchell History Award by UNSW</li>
          <li>Reid Malley Foundation Scholarship</li>
          <li>Deakin International Merit Scholarship</li>
        </ul>
        <p className="mt-4">
          Research is the key to finding the greatest scholarships in Australia
          for you. Universities and institutions like the government often
          specifically set aside scholarships for international students.
          Scholarships also exist by study level, by subject, and even based on
          sociodemographic factors like your country of origin. If you put in
          the time and effort, you should be able to find the perfect
          scholarship.
        </p>
      </div>

      {/* Visa Requirements*/}
      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Visa Requirements for the Australian Student Visa
        </h3>
        <p>
          Once you receive a Confirmation of Enrolment (CoE), you can apply for
          the Subclass 500 visa! The requirements for the student visa are as
          follows:
        </p>
        <ul className="list-disc pl-4">
          <li>
            Test scores for English Proficiency tests (IELTS, PTE, Duolingo)
          </li>
          <li>
            Confirmation of Enrolment or CoE from a university in Australia
          </li>
          <li>Recent passport-sized photographs</li>
          <li>Genuine Temporary Entrant Statement or GTE</li>
          <li>Recommendation Letters</li>
          <li>CV/Resume</li>
          <li>OSHC, or Overseas Student Health Cover</li>
          <li>Proof of funding to study in Australia from Bangladesh</li>
        </ul>
        <p className="mt-4">
          You may also need to provide biometrics, a health check report, and
          other additional documents.
        </p>
      </div>

      {/*Work Opportunities in the UK for International Students*/}

      <div>
        <h3 className="mb-[15px] mt-5 text-primary">
          Work Opportunities in Australia for International Students
        </h3>
        <p>
          Students who have a Subclass 500 visa can work for 40 hours every
          fortnight (two weeks) in Australia. Some student job opportunities
          include:
        </p>
        <ul className="list-disc pl-4">
          <li>Barista</li>
          <li>Bartender</li>
          <li>Driver</li>
          <li>Nanny</li>
          <li>Bookkeeper</li>
          <li>Tutor</li>
          <li>Library assistant</li>
        </ul>
        <p className="mt-4">
          You can apply for work in person, on campus or through job portals. If
          your program involves internships and work placements, you can also
          access real industry experience in Australia!
        </p>
        <p>
          After you graduate, you can apply for a Subclass 485 visa if you want
          to continue staying and working in Australia. To apply for the
          Subclass 485 visa, you need:
        </p>
        <ul className="list-disc pl-4">
          <li>
            A qualification for a CRICOS-registered course from an Australian
            institution
          </li>
          <li>A valid student visa that you held in the past 6 months</li>
          <li>Proof of good character</li>
          <li>Proof that you meet the country’s minimum health requirements</li>
          <li>Signed Australian Values Statement</li>
        </ul>
        <p className="mt-4">
          You must also not owe the Australian government any debts or have any
          rejected visas in your travel history.
        </p>
        <p>
          The length of your post-study visa varies depends on your
          qualification as well:
        </p>
        <ul className="list-disc pl-4">
          <li>Bachelor’s Degree/Bachelor’s (Honors) Degree: 2 year visa</li>
          <li>Master’s Degree (Coursework): 2 year visa</li>
          <li>Master’s Degree (Research): 3 year visa</li>
          <li>Doctoral Degree: 4 year visa</li>
        </ul>
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

export default InfoAustralia;
