import OfferCard from "@/modules/@common/offer_card";
import services from "@/fakedata/service-single-page-data.json";

const WeOffer = () => {
  const offerCard = services?.data;

  return (
    <section>
      <div className="container">
        <div className="max-w-[1050px] w-full mx-auto mb-10">
          <h2 className="text-center mb-3">What We Offer</h2>
          <p className="text-center ">
            Take a quick check at the services we offer and find the services
            that you’re looking for.
          </p>
        </div>

        {offerCard?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] place-items-center">
            {offerCard.map((item: any, i: any) => {
              return <OfferCard key={i} data={item} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default WeOffer;
