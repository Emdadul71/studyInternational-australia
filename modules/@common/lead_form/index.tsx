import { useCreateLeadMutation } from "@/appstore/lead/lead_api";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import PI from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../loading_spinner";
import {
  PreferredCountry,
  formSchema,
  funding,
  preferredIntake,
  preferredStudyLevel,
  validationSchema,
} from "./helper";
import styles from "./lead_form.module.scss";
const PhoneInput = (PI as any).default !== undefined ? (PI as any).default : PI;
const basePath = process.env.NEXT_PUBLIC_FRONTEND_URI;

interface propTypes {
  classes?: {
    root?: string;
  };
  isSmall?: boolean;
  isWhite?: boolean;
  data?: any;
  isParticipant?: any;
}

const LeadForm = ({ isSmall }: propTypes) => {
  const router = useRouter();
  const path = router.asPath.split("?")[0];
  const leadSource = `${basePath}${path}`;
  const [leadData, { isLoading }] = useCreateLeadMutation();

  const createHandler = async (values: any, actions: any) => {
    try {
      const res: any = await leadData({
        firstName: values?.firstName,
        lastName: values?.lastName,
        email: values?.email,
        mobile: values?.mobile,
        preferredCountry: values?.preferredCountry,
        preferredStudyLevel: values?.preferredStudyLevel,
        preferredIntake: values?.preferredIntake,
        leadType: "Lead",
        funding: values?.funding,
        isAgree: values?.isAgree,
        isContactQuery: values?.isContactQuery,
        isReceiveUpdates: values?.isReceiveUpdates,
        leadSource: leadSource,
      });

      if (!res?.error) {
        toast.success("Form submit successfull.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        actions.resetForm();
      } else {
        toast.error(
          `${
            res?.error?.data?.message
              ? res?.error?.data?.message
              : "Somthing went wrong"
          }`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Formik
        initialValues={formSchema}
        enableReinitialize={false}
        validationSchema={validationSchema}
        onSubmit={(values: any, actions: any) => {
          createHandler(values, actions);
        }}
      >
        {({ handleSubmit, setFieldValue, errors, values, touched }: any) => (
          <Form>
            <div
              className={` grid grid-cols-1 gap-3 ${
                isSmall ? "grid-cols-1 gap-3" : "lg:grid-cols-2 gap-8"
              } `}
            >
              <div>
                <label htmlFor="firstname" className={`block mb-2 text-white`}>
                  First Name <span className="text-danger">*</span>
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className={`block w-full py-2 focus:border-white text-white px-4 outline-none placeholder:text-[#8e8e93] border-[#8e8e93] bg-transparent border-b `}
                  placeholder="First Name"
                />
                {errors?.firstName && touched?.firstName ? (
                  <p className="text-danger text-[12px] m-0">
                    {errors?.firstName}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="lastname" className={`block mb-2 text-white`}>
                  Last Name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className={`block w-full py-2 focus:border-white text-white px-4 outline-none placeholder:text-[#8e8e93] border-[#8e8e93] bg-transparent border-b `}
                  placeholder="Last Name"
                />
                {errors?.lastName && touched?.lastName ? (
                  <p className="text-danger text-[12px] m-0">
                    {errors?.lastName}
                  </p>
                ) : null}
              </div>

              <div className={`prefarance_phone_input`}>
                <label htmlFor="mobile" className={`block mb-2 text-white`}>
                  Mobile Number <span className="text-danger">*</span>
                </label>
                <PhoneInput
                  country={"au"}
                  countryCodeEditable={true}
                  className={`block w-full focus:border-white  px-4 placeholder:text-[#8e8e93]  border-[#8e8e93]  bg-transparent border-b `}
                  value={values?.mobile ?? ""}
                  onChange={(e: any) => setFieldValue("mobile", e)}
                />
                {errors?.mobile && touched?.mobile ? (
                  <small className="text-danger">{errors?.mobile}</small>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className={`block mb-2 text-white`}>
                  Email <span className="text-danger">*</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  className={`block w-full py-2 focus:border-white text-white px-4 outline-none placeholder:text-[#8e8e93] border-[#8e8e93] bg-transparent border-b `}
                  placeholder="Email Name"
                />
                {errors?.email && touched?.email ? (
                  <p className="text-danger text-[12px] m-0">{errors?.email}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="mobile" className={`block mb-2 text-white`}>
                  Nationality <span className="text-danger">*</span>
                </label>

                <Select
                  isClearable
                  // @ts-ignore
                  value={
                    values.preferredCountry
                      ? PreferredCountry.filter(
                          (item) => item.value == values.preferredCountry
                        )
                      : ""
                  }
                  className={`lead_form_wrapper `}
                  classNamePrefix={`react-select`}
                  placeholder="Select Country"
                  onChange={(e) => setFieldValue("preferredCountry", e?.value)}
                  options={PreferredCountry}
                />
                {errors?.preferredCountry && touched?.preferredCountry ? (
                  <small className="text-danger">
                    {errors?.preferredCountry}
                  </small>
                ) : null}
              </div>

              <div>
                <label htmlFor="mobile" className={`block mb-2 text-white`}>
                  Service Type <span className="text-danger">*</span>
                </label>
                <Select
                  isClearable
                  className={`lead_form_wrapper `}
                  classNamePrefix={`react-select`}
                  // @ts-ignore
                  value={
                    values.preferredStudyLevel &&
                    values.preferredStudyLevel !== ""
                      ? preferredStudyLevel.filter(
                          (item) => item.value == values.preferredStudyLevel
                        )
                      : ""
                  }
                  placeholder="Select Study Level"
                  options={preferredStudyLevel}
                  onChange={(e) =>
                    setFieldValue("preferredStudyLevel", e?.value)
                  }
                />
                {errors?.preferredStudyLevel && touched?.preferredStudyLevel ? (
                  <small className="text-danger">
                    {errors?.preferredStudyLevel}
                  </small>
                ) : null}
              </div>

              <div className="lg:col-span-2">
                <label htmlFor="lastname" className={`block mb-2 text-white`}>
                  Message
                </label>
                <Field
                  type="textarea"
                  name="message"
                  className={`block w-full py-2 focus:border-white text-white px-4 outline-none placeholder:text-[#8e8e93] border-[#8e8e93] bg-transparent border-b `}
                  placeholder="Last Name"
                />
                {errors?.lastName && touched?.lastName ? (
                  <p className="text-danger text-[12px] m-0">
                    {errors?.lastName}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="text-[#8e8e93]">
              <div className="mt-[30px] mb-3">
                Study International will not share your details with others
                without your permission:
              </div>

              <label className={styles.chackboxContainer}>
                I agree to Study International{" "}
                <Link href="/terms" className="underline ">
                  Terms{" "}
                </Link>
                and{" "}
                <Link href="/privacy" className="underline">
                  Privacy Policy
                </Link>
                <input
                  type="checkbox"
                  checked={values.isAgree}
                  onChange={(e) => setFieldValue("isAgree", e.target?.checked)}
                />
                <span className={styles.checkmark}></span>
                {errors?.isAgree && touched?.isAgree ? (
                  <p className="text-danger">{errors?.isAgree}</p>
                ) : null}
              </label>

              <label className={styles.chackboxContainer}>
                Please contact me by phone, email or SMS to assist with my
                enquiry
                <input
                  type="checkbox"
                  checked={values.isContactQuery}
                  onChange={(e) =>
                    setFieldValue("isContactQuery", e.target?.checked)
                  }
                />
                <span className={styles.checkmark}></span>
                {errors?.isContactQuery && touched?.isContactQuery ? (
                  <p className="text-danger">{errors?.isContactQuery}</p>
                ) : null}
              </label>

              <label className={styles.chackboxContainer}>
                I would like to receive updates and offers from Study
                International
                <input
                  type="checkbox"
                  checked={values.isReceiveUpdates}
                  onChange={(e) =>
                    setFieldValue("isReceiveUpdates", e.target?.checked)
                  }
                />
                <span className={styles.checkmark}></span>
                {errors?.isReceiveUpdates && touched?.isReceiveUpdates ? (
                  <p className="text-danger">{errors?.isReceiveUpdates}</p>
                ) : null}
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-secondary w-full mt-10 hover:bg-[#e6ce1e] hover:border-[#e6ce1e] hover:text-primary"
            >
              {isLoading && <Spinner height="20px" />} Send
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};

export default LeadForm;
