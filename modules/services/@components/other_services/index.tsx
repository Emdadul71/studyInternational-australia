import OtherServiceCard from "@/modules/@common/other_service_card";

const OtherServices = ({ data }: any) => {
  const pageData = data?.data?.sectionOtherService?.services;

  return (
    <section className="pt-8 lg:pt-[80px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_450px] items-center mb-6 lg:mb-12">
          <h3 className="heading-two">Our Other Services</h3>
          <p className="text-grey">
            We are committed to delivering exceptional services that exceed your
            expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[30px]">
          {pageData?.map((item: any, i: any) => {
            return <OtherServiceCard data={item} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
