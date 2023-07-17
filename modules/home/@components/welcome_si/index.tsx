import Link from "next/link";

const WelcomeSI = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[510px] mx-auto text-left lg:text-left">
          <h2 className="mb-4">
            <span className="block text-3xl">Welcome to</span>
            Study International
          </h2>
          <p className="text-grey mb-5">
            Since 2005, Study International has built up its presence as an
            International Education & Migration Consultancy in the global
            education space, supporting over 20,000 students in realising their
            study abroad aspirations. With excellent credentials providing
            value-based services, we are one of the leading organisations in
            this space, with a network of offices in Sydney, Australia, as well
            as in India and Bangladesh.
          </p>
          <Link href="/#" className="btn btn-primary w-full mb-5">
            Meet Our Counsellor
          </Link>
          <div className="text-primary text-lg font-bold text-center">
            <a href="tel:+61 2 92673576" className="block">
              Call us +61 2 92673576
            </a>
            <span className="block mb-2">or</span>
          </div>
          <Link
            href="/contact-us"
            className="btn btn-white font-bold w-full border border-primary hover:bg-primary hover:text-white"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSI;
