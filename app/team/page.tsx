import Image from "next/image";
import BecomeAVolunteer from "../components/homepage/BecomeAVolunteer";
import PageHero from "../components/shared/PageHero";
import SectionTitle from "../components/shared/SectionTitle";

type Props = {};

const Team = (props: Props) => {
  const teamData = [
    {
      name: "Mr Tunde Onakoya",
      title: "Founder & CEO",
      img: "/team-profile.png",
    },
    {
      name: "Mr Tunde Onakoya",
      title: "Founder & CEO",
      img: "/team-profile.png",
    },
    {
      name: "Mr Tunde Onakoya",
      title: "Founder & CEO",
      img: "/team-profile.png",
    },
    {
      name: "Mr Tunde Onakoya",
      title: "Founder & CEO",
      img: "/team-profile.png",
    },
    {
      name: "Mr Tunde Onakoya",
      title: "Founder & CEO",
      img: "/team-profile.png",
    },
    {
      name: "Mr Tunde Onakoya",
      title: "Founder & CEO",
      img: "/team-profile.png",
    },
  ];
  return (
    <div className="pt-20 w-screen flex flex-col items-center justify-center">
      <PageHero currentPage={"Team"} title={"Team"} className={"team-hero"} />
      <div className="max-w-7xl w-full flex flex-col justify-center items-center pt-12 px-4">
        <SectionTitle
          SectionTitle={"Board of Trustees"}
          className={"text-left w-full mb-12 md:text-4xl"}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 flex-wrap xl:grid-cols-4 gap-6 xl:gap-12 justify-center items-center pb-32 w-full">
          {teamData.map((t, index) => (
            <div className="max-w-[400px] w-full" key={index}>
              <div className="max-w-[400px] w-full overflow-hidden">
                <Image
                  src={t.img}
                  height={200}
                  width={200}
                  alt={t.name}
                  className=" h-full w-full object-cover"
                />
              </div>
              <div className="text-brandGreen mt-4 space-y-2">
                <p className=" text-2xl font-bold">{t.name}</p>
                <p className="text-xl">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BecomeAVolunteer />
    </div>
  );
};

export default Team;
