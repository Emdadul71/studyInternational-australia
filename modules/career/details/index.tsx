import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import React from "react";

const CareerDetails = () => {
  return (
    <>
      <section className="pb-0 mb-6 lg:mb-10">
        <div className="w-full">
          <Image
            src={staticAsset("/images/career/job-details.webp")}
            alt="Study International Logo"
            width={3000}
            height={750}
            blurDataURL="/images/career/job-details.webp"
            placeholder="blur"
            className="w-full object-cover"
          />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_330px] gap-[30px]">
            <div>
              <h3 className="mb-5 lg:mb-[30px]">Frontend Developer</h3>
              <div className="mb-[30px] flex  flex-col md:flex-row gap-3 md:gap-[40px]">
                <div className="">
                  <span className="text-grey block mb-1">Location</span>
                  <span className="block font-bold">
                    2541, Austin, New York
                  </span>
                </div>
                <div>
                  <span className="text-grey block mb-1">Date</span>
                  <span className="block font-bold">24, June 2022</span>
                </div>
                <div>
                  <span className="text-grey block mb-1">Job Type</span>
                  <span className="block font-bold">Full time (Remote)</span>
                </div>
              </div>

              <div>
                <p>
                  We’re looking for a Junior - Mid-level Designer to join our
                  team. You’ll support the execution of graphic and digital
                  design projects, working closely with the internal team of
                  creatives, project managers, the Creative Director and
                  development team to blend user needs and business goals into
                  seamless, effective design experiences. You will need to
                  demonstrate a fundamental understanding of design principles,
                  an openness to learn and take direction, along with a strong
                  aesthetic design intuition.
                </p>

                <h3 className="mb-2">What you will do</h3>
                <ul className="list-disc pl-4 mb-4">
                  <li>
                    Support Growth team in expanding customer base within legal
                    industry as well as new markets
                  </li>
                  <li>
                    Find prospective customer leads via LinkedIn Sales
                    Navigator, industry directories, personal network and other
                    sources
                  </li>
                  <li>
                    Qualify prospective customer leads via email, phone, and
                    Linkedin messaging
                  </li>
                  <li>
                    Track and analyze prospective customer pipeline, presenting
                    stats and progress to Growth team
                  </li>
                  <li>
                    Identify trends in prospective customer engagement with
                    various outreach campaigns
                  </li>
                  <li>
                    Help strategize, implement, and maintain an efficient sales
                    system, primarily within Hubspot Sales and Hubspot Marketing
                  </li>
                  <li>
                    Create and maintain sales and marketing materials, like
                    pricing sheets and feature highlights
                  </li>
                  <li>
                    Support special projects, like event sponsorships and
                    industry partnerships
                  </li>
                  <li>Contribute to customer support initiatives</li>
                </ul>

                <h3 className="mb-2">Requirements</h3>
                <ul className="list-disc pl-4 mb-4">
                  <li>
                    Worked with any professional plugin development team or More
                    than one Plugins approved at wordpress.org/CodeCanyon
                  </li>
                  <li>Solid and strong PHP knowledge.</li>
                  <li>
                    Really good understanding in OOP, Namespace, Traits & Design
                    Patterns
                  </li>
                  <li>Intermediate to Advanced JavaScript knowledge.</li>
                  <li>
                    Fluent English speaking and writing is preferred but not
                    required.
                  </li>
                  <li>
                    Writing reusable, testable, secured and efficient PHP,
                    JavaScript, HTML5, CSS3, MySQL and AJAX Code.
                  </li>
                  <li>
                    Excellent knowledge about WP custom post type, custom
                    taxonomy, and custom meta box
                  </li>
                  <li>
                    Fluent in WordPress, PHP, plugins, themes security,
                    JavaScript, and other technologies
                  </li>
                  <li>
                    Clear concepts of WordPress Actions, Hooks, custom queries,
                    meta fields.
                  </li>
                  <li>
                    Proficient with relational (SQL) and non-relational database
                    platforms
                  </li>
                  <li>
                    Optimize performance of applications utilizing industry
                    standards on all ends of the architecture.
                  </li>
                  <li>
                    Creating database schemas that represent and support
                    business processes.
                  </li>
                  <li>
                    Coordinating the workflow between the UI/UX Designer, the
                    QA, and yourself.
                  </li>
                  <li>Problem-solving capabilities</li>
                  <li>Age 20 to 35 years</li>
                </ul>

                <h3 className="mb-2">Requirements</h3>
                <ul className="list-disc pl-4 mb-4">
                  <li>
                    It doesn’t matter where you went to college or what your
                    CGPA was as long as you are smart, passionate, ready to work
                    hard and have fun.
                  </li>
                </ul>

                <h3 className="mb-2">Perks & Benefits</h3>
                <ul className="list-disc pl-4 mb-4">
                  <li>Competitive compensation and equity package </li>
                  <li>
                    99% company paid medical, dental, and vision coverage for
                    employees and dependents (for US employees)
                  </li>
                  <li>
                    Flexible Spending Account (FSA) and Dependent Care Flexible
                    Spending Account (DCFSA)
                  </li>
                  <li>
                    Healthcare reimbursement (for International employees)
                  </li>
                  <li>Life, AD&D, Short and Long Term Disability Insurance </li>
                  <li>401(k) with 4% company matching </li>
                  <li>Professional development reimbursement </li>
                  <li>Wellness stipends </li>
                  <li>Unlimited PTO </li>
                  <li>Paid parental leave </li>
                  <li>Remote work opportunities </li>
                  <li>Home office & technology reimbursement </li>
                </ul>

                <p>
                  We’re committed to creating the happiest company working for
                  and is proud to provide equal opportunity to all. All the
                  qualified applicants will receive consideration for employment
                  without regard to race, color, ancestry, religion.
                </p>
              </div>
            </div>

            <div className="rounded-md bg-primary p-[30px] self-start sticky top-[72px]">
              <ul className="flex flex-col gap-5 mb-[30px]">
                <li>
                  <div className="text-grey mb-[5px]">Experience</div>
                  <div className="text-white font-bold text-lg">
                    5+ Years Experience
                  </div>
                </li>
                <li>
                  <div className="text-grey mb-[5px]">Salary</div>
                  <div className="text-white font-bold text-lg">
                    $24k - 65k (Yearly)
                  </div>
                </li>
                <li>
                  <div className="text-grey mb-[5px]">Vacancy</div>
                  <div className="text-white font-bold text-lg">
                    No of Vacancies: 2
                  </div>
                </li>
                <li>
                  <div className="text-grey mb-[5px]">Deadline</div>
                  <div className="text-white font-bold text-lg">
                    03 July 2022
                  </div>
                </li>
              </ul>
              <button className="btn btn-secondary w-full">Apply Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerDetails;
