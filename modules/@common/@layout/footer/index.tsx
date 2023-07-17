import { useNewslatterSubscriptionMutation } from "@/appstore/news_latter/news_letter_api";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { TbSend } from "react-icons/tb";
import { toast } from "react-toastify";
import * as Yup from "yup";
import SocialLinks from "../../social_links";
import ViewLink from "../../view_link";
import { staticAsset } from "@/helpers/utils";

type propType = {
  className?: string;
};

export const Footer = ({ className }: propType) => {
  const [createSubscription, { isLoading }] =
    useNewslatterSubscriptionMutation();

  const createHandler = async (values: any, actions: any) => {
    try {
      const res: any = await createSubscription({
        email: values?.email,
      });

      if (!res?.error) {
        toast.success("Subscribe successfull.", {
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
    } catch (error) {}
  };

  return (
    <footer
      className={`${className} grid grid-cols-1 lg:grid-cols-[1fr_auto] overflow-hidden  relative`}
    >
      <div></div>
      <div className="hidden lg:block mb-[200px]">
        <Image
          src={staticAsset("/images/home/footer-au-bg.png")}
          width={1160}
          height={800}
          alt="Study Internationa Footer"
        />
      </div>

      <div className="text-[#e2e2e2]  2xl:max-w-[1400px] w-full 2xl:ml-auto bg-primary mt-auto lg:absolute left-0 bottom-0">
        <div className="max-w-[1210px] w-full grid grid-cols-1 lg:grid-cols-[1fr_450px] lg:ml-auto">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-[430px_500px] py-10 px-5 lg:px-5 2xl:px-0 lg:py-[130px] lg:pr-[30px]">
              <div>
                <Link href="/">
                  <Image
                    src={staticAsset("/images/misc/logo-light.png")}
                    width={180}
                    height={46}
                    alt="Picture of the author"
                  />
                </Link>

                <p className="text-sm mt-[30px]  lg:pr-[100px] leading-[1.8]">
                  Study International is an International Education and
                  Migration consulting organization with excellent credentials
                  that provides value-based services was founded in 2005.
                </p>

                <div className="mb-3 md:mb-0">
                  <SocialLinks />
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-2">
                <div>
                  <p className="text-xl font-bold text-white mb-5">
                    Information
                  </p>
                  <ul className="flex flex-col text-sm gap-[15px]">
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/testimonials">Success Story</Link>
                    </li>
                    {/* <li>
                      <Link href="/career">Career</Link>
                    </li> */}
                    <li>
                      <Link href="#">Team</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-xl font-bold text-white mb-5">
                    Contact Us
                  </p>
                  <p className="text-sm  mb-[15px]">
                    <span className="block">
                      Ground Floor, 146 Marsden Street,{" "}
                    </span>
                    <span className="block">
                      Parramatta NSW 2150, Australia
                    </span>
                  </p>
                  <div className="mb-[15px]">
                    <Link
                      href="tel:+61 02 86280141 "
                      className="text-sm  mb-[15px]"
                    >
                      +61 02 86280141
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="mailto:info@studyinternational.net.au"
                      className="text-sm  mb-[15px] break-all"
                    >
                      info@studyinternational.net.au
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-full h-[1px] bg-[#002952] w-full lg:mx-5 2xl:mx-0"></div>
            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-3 lg:gap-0 pl-[20px] lg:pl-0 lg:pl-5 2xl:pl-0 pr-[30px] py-4 ">
              <p className="text-sm  basis-2/4	mb-0 order-1 ">
                © {new Date().getFullYear()} Study International. All Rights
                Reserved.
              </p>
              <div className="basis-2/4	relative order-0 lg: order-1">
                <Formik
                  initialValues={{
                    email: "",
                  }}
                  enableReinitialize={true}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().required(
                      "Please provide a valid email "
                    ),
                  })}
                  onSubmit={(values: any, actions: any) => {
                    createHandler(values, actions);
                  }}
                >
                  {({
                    handleSubmit,
                    setFieldValue,
                    errors,
                    values,
                    touched,
                  }: any) => (
                    <Form>
                      <>
                        <div className="relative">
                          <Field
                            name="email"
                            type="text"
                            placeholder="Enter you email"
                            className="text-[#8E8E93] text-sm w-full py-2 px-4 rounded placeholder:text-sm placeholder:text-[#8E8E93] focus:outline-none bg-[#002952]"
                          />

                          <button
                            type="submit"
                            className="text-white absolute right-[12px] top-[50%] -translate-y-[50%]"
                          >
                            <TbSend />
                          </button>
                        </div>
                        {errors?.email && touched?.email ? (
                          <p className="text-danger text-[12px] m-0">
                            {errors?.email}
                          </p>
                        ) : null}
                      </>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="bg-[#002952] py-5 lg:py-0 lg:pt-[140px] px-5 lg:px-[80px] text-white flex flex-col justify-between items-center gap-4 lg:gap-10">
            <p className="heading-four font-bold text-center">
              Want Premium Expert Admission Guidance?
            </p>
            <ViewLink
              title="Contact Us"
              url="/contact-us"
              className="w-[170px] h-[170px]"
            />
            <div className="flex flex-col justify-center items-center mb-5 lg:mb-10">
              <div className="text-white text-lg mb-2">09:00 AM - 10:30 PM</div>
              <div className="text-sm text-[#8E8E93]">Saturday - Thursday</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
