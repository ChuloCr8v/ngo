// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperComponent = () => {
  const swipeData = [
    {
      icon: "/icons/pray-icon.png",
      title: "Moyi Prays",
      text: "This is an event that holds monthly to pray for everything  relating to Moyi and Ongoing Projects.",
    },
    {
      icon: "/icons/pray-icon.png",
      title: "Moyi Legacy Project",
      text: "THE LEGACY PROJECT is a visionary project aimed at catalyzing positive change within marginalized communities.",
    },
    {
      icon: "/icons/basket.png",
      title: "Full Basket Project",
      text: "The FULL BASKET PROJECT is a heart lifting project designed to commemorate the anniversary of our organization MOYI and its commitment to supporting vulnerable members of our community.",
    },
    {
      icon: "/icons/partners.png",
      title: "Moyi Partners Meet",
      text: "It is a signature event organized by Mindful of Youth Initiative to celebrate and acknowledge the invaluable contributions of our sponsors, board of trustees and dedicated volunteers.",
    },
  ];
  return (
    <Swiper
      autoplay
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="flex justify-center items-center w-full"
      pagination={{ clickable: true }}
    >
      <div className="">
        {swipeData.map((s, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="bg-white w-full max-w-[550px] p-4 px-12 rounded-xl py-6 text-center flex flex-col items-center justify-center gap-4">
              <div className="bg-brandGreen w-20 h-20 flex items-center justify-center rounded-full">
                {" "}
                <Image
                  src={s.icon}
                  alt={s.title}
                  height={10}
                  width={10}
                  className="h-10 w-10"
                />
              </div>

              <p className="text-2xl font-bold">{s.title}</p>
              <p className="">{s.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default SwiperComponent;
