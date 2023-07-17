import React from "react";

const dataTable = {
  thead: ["Destination", "UG Cost/Year", "PG Cost/Year", "Doctorate Cost/Year"],
  tbody: [
    [
      "US",
      "USD 20,000 to USD 40,000",
      "USD 20,000 to USD 45,000",
      "USD 28,000 to USD 55,000",
    ],
    ["UK", "£10,000 to £38,000", "£11,000 to £30,000", "Upto £18,000"],
    ["Canada", "CAD 36,100", "CAD 21,100", "CAD 17,000"],
    [
      "Australia",
      "AUD 20,000 to AUD 45,000",
      "AUD 22,000 to AUD 50,000",
      "AUD 20,000 to AUD 42,000",
    ],
    ["Ireland", "€9,850 to €25,500", "€9,500 to €34,500", "€9,500 to €34,500"],
    [
      "New Zealand",
      "NZD 4,100 to NZD 6,100",
      "NZD 7,300 to NZD 10,500",
      "NZD 3,700 to NZD 5,100",
    ],
    ["Germany", "€300", "€300", "€300 to €30,000"],
  ],
};

const StudyFees = () => {
  return (
    <section>
      <div className="container">
        <h4 className="mb-4">Study Abroad Fees for Bangladesh Students</h4>
        <p>
          Each country has its own tuition fees set up for international
          students. The tuition fee includes all factors like classroom
          facilities, lab equipment, lab usage, books, etc. The fee changes
          yearly, which is the sole decision of the universities. Compared to
          private universities, public universities cost less for international
          students.
        </p>
        <p>
          The tuition cost for a year is given for all the degree programs like
          UG, PG and Doctorate for the countries we represent. This is more of a
          general cost, for a precise cost, students are advised to visit the
          universities’ websites or contact their preferred universities.
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
      </div>
    </section>
  );
};

export default StudyFees;
