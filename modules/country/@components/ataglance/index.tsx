import Image from "next/image";

const data = [
  {
    icon: "/images/icons/building.png",
    title: "Capital: London",
  },
  {
    icon: "/images/icons/city.png",
    title: "Largest City: London",
  },
  {
    icon: "/images/icons/gross-domestic-product.png",
    title: "GDP: $2.85 Trillion",
  },
  {
    icon: "/images/icons/university1.png",
    title: "Top Universities: 359",
  },
  {
    icon: "/images/icons/language.png",
    title: "National Language: English",
  },
  {
    icon: "/images/icons/money.png",
    title: "Currency: Pound Sterling",
  },
  {
    icon: "/images/icons/population.png",
    title: "Population: 68 Million",
  },
  {
    icon: "/images/icons/graduate.png",
    title: "Students: 6 Lakhs",
  },
];

const Ataglance = () => {
  return (
    <section className="pb-10 lg:pb-[100px]">
      <div className="container">
        <h2 className="text-center mb-10">UK at a Glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-x-3 gap-y-8 lg:gap-x-5 lg:gap-y-12">
          {data?.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-[30px] items-center justify-center text-center"
              >
                <div>
                  <Image
                    src={item?.icon}
                    alt="Capital"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="text-base lg:text-[20px] text-black font-medium">
                  {item?.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ataglance;
