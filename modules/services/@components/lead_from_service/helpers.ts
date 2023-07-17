import * as Yup from "yup";

export const formSchema = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  preferredCountry: "",
  preferredStudyLevel: "",
  preferredIntake: "",
  funding: "",
  isAgree: false,
  isContactQuery: false,
  isReceiveUpdates: false,
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required field"),
  lastName: Yup.string().required("Last name is required field"),
  email: Yup.string().required("Email is required field"),
  mobile: Yup.string().required("Mobile is required field"),
  preferredCountry: Yup.string().required(
    "Preferred country is required field"
  ),
  preferredStudyLevel: Yup.string().required(
    "Preffered study label is required field"
  ),
  preferredIntake: Yup.string().required("Preferred intak is required field"),
  funding: Yup.string().required("Funding is required field"),
  isAgree: Yup.bool().oneOf(
    [true],
    "Accept privacy policy & terms is required"
  ),
  isContactQuery: Yup.bool().oneOf([true], "Accept Contact query required"),
  isReceiveUpdates: Yup.bool().oneOf([true], "Accept Received update required"),
});

export const PreferredCountry = [
  { value: "Canada", label: "Canada  " },
  { value: "Japan", label: "Japan" },
  { value: "Germany", label: "Germany" },
  { value: "USA", label: "USA" },
  { value: "UK", label: "UK" },
];
export const preferredStudyLevel = [
  { value: "Undergraduate", label: "Undergraduate" },
  { value: "Postgraduate", label: "Postgraduate" },
  { value: "Diploma", label: "Diploma" },
];
export const preferredIntake = [
  { value: "Jan 2024", label: "Jan 2024" },
  { value: "Feb 2024", label: "Feb 2024" },
  { value: "May 2024", label: "May 2024" },
  { value: "Oct 2024", label: "Oct 2024" },
  { value: "Dec 2024", label: "Dec 2024" },
  { value: "jan 2024", label: "jan 2024" },
];
export const funding = [
  { value: "Self-funded", label: "Self-funded" },
  { value: "Parents", label: "Parents" },
  { value: "Seeking Scholarship", label: "Seeking Scholarship" },
  { value: "Bank Loan", label: "Bank Loan" },
];
