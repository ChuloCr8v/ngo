import Image from "next/image";
import BecomeAVolunteer from "../components/homepage/BecomeAVolunteer";
import PageHero from "../components/shared/PageHero";
import SectionTitle from "../components/shared/SectionTitle";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  const focusData = [
    {
      icon: "/vision-icon.png",
      title: "Vision",
      text: "Our vision is to be the leading centre for youth focused initiatives that will aid the overall development of young persons, regardless of age, colour, race, reglion or other social stratificaton which may exist.",
    },
    {
      icon: "/mission-icon.png",
      title: "Mision",
      text: "To provide strong Bible-based values by showcasing outstanding men, women, boys, and girls who are succeeding by confronting day-to-day life challenges through a closely guarded mentoring program.",
    },
    {
      icon: "/values-icon.png",
      title: "Values",
      text: "We value you as a person, We are honest and straight forward in all our dealings, We listen, We are open to everybody, We respect your confidentiality, We are practical in offering solutions, We are rooted in Biblical Principles",
    },
  ];

  const boardMembersData = [
    {
      name: "Mark Smith",
      title: "CEO/Founder",
      img: "/board-member.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Mark Smith",
      title: "CEO/Founder",
      img: "/board-member.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Mark Smith",
      title: "CEO/Founder",
      img: "/board-member.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];

  const sectionTitle = (
    <p className="">
      WE VOLUNTARY HELP <br className="md:hidden"></br>FOR ALMOST{" "}
      <span className="text-brandYellow">12</span> YEARS
    </p>
  );

  const Subtitle = (props: { title: string; className: string }) => {
    return (
      <p
        className={twMerge("uppercase text-lg font-semibold", props.className)}
      >
        {props.title}
      </p>
    );
  };
  return (
    <div className="bg-[#F1F7FE] pt-20 w-screen flex flex-col items-center justify-center">
      <PageHero
        currentPage={"Who we are?"}
        title={"Who we are"}
        className={"team-hero"}
      />
      <div className="max-w-7xl w-full flex flex-col justify-center items-center pt-16 px-4">
        <p className="text-brandGreen text-2xl font-semibold">Who we are</p>
        <SectionTitle
          SectionTitle={"We focus on youth initiatives"}
          className={
            "text-center lg:text-4xl capitalize max-w-[400px] lg:max-w-full mb-12"
          }
        />
        <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12 justify-center items-center pb-32">
          {focusData.map((t, index) => (
            <div
              className={twMerge(
                "bg-white p-6 flex flex-col items-center justify-start rounded-xl shadow border broder-gray-300 lg:h-[400px]",
                index === 1 && "bg-brandGreen"
              )}
              key={index}
            >
              <div
                className={twMerge(
                  "h-20 w-20 rounded-full bg-brandGreen flex items-center justify-center",
                  index === 1 && "bg-brandYellow"
                )}
              >
                <Image
                  src={t.icon}
                  height={200}
                  width={200}
                  alt={t.title}
                  className="h-10 w-auto"
                />
              </div>
              <div
                className={twMerge(
                  "text-black mt-4 space-y-2",
                  index === 1 && "text-white"
                )}
              >
                <p className="text-2xl font-bold text-center">{t.title}</p>
                <p className=" text-lg text-center">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 xl:h-[550px]">
          <div className="h-full hidden lg:flex">
            <Image
              src="/about-2.png"
              height={400}
              width={400}
              alt="about us"
              className="object-fit w-full"
            />
          </div>
          <div className="bg-white p-4 py-8 xl:p-8 space-y-4 xl:space-y-6 h-fit lg:h-full">
            <Subtitle
              title={"A few words about us"}
              className="text-brandGreen text-center lg:text-left"
            />
            <SectionTitle
              SectionTitle={sectionTitle}
              className={
                "font-black text-xl lg:text-2xl text-center lg:text-left"
              }
            />
            <p className="leading-[2] text-center lg:text-left">
              Mindful of Youths Initiative is a Non-Governmental organization
              poised to empower youths in every sphere of human endeavor. It
              intends to create an environment in which young persons would be
              involved and successful in their homes, family life, school, work,
              neighbourhood and the nation at large.
            </p>
            <div className="w-full flex flex-col">
              <button className="text-white bg-brandGreen px-10 py-4 h-fit uppercase place-self-center lg:place-self-start mt-4">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F0EB] w-screen flex flex-col items-center justify-center py-20 px-4 mt-32">
          <Subtitle title={"meet our team"} className={"text-brandYellow"} />
          <p className="text-4xl font-bold text-center mt-4">Board Members</p>
          <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 items-center justify-center max-w-7xl w-full gap-6 xl:gap-12">
            {boardMembersData.map((b, index) => (
              <div
                className="flex flex-col items-center justify-center -mt-20"
                key={index}
              >
                <div className="w-full flex flex-col items-center justify-center">
                  <div className="bg-[#F3F0EB] translate-y-28 rounded-full p-4">
                    <Image
                      src={b.img}
                      alt={b.name}
                      height={200}
                      width={200}
                      className="object-fit h-[200px] w-[200px]"
                    />
                  </div>
                  <div className="bg-white py-4 px-6 pt-36 text-center space-y-4">
                    <h3 className="text-3xl font-bold">{b.name}</h3>
                    <p className="">{b.text}</p>
                    <p className="font-semibold text-lg">{b.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            href={"/history"}
            className="text-white bg-brandGreen px-10 py-4 h-fit uppercase mt-12"
          >
            Read More
          </Link>
        </div>
      </div>
      <BecomeAVolunteer />
    </div>
  );
};

export default About;
