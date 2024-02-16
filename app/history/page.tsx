import Image from "next/image";
import BecomeAVolunteer from "../components/homepage/BecomeAVolunteer";
import PageHero from "../components/shared/PageHero";
import SectionTitle from "../components/shared/SectionTitle";
import { twMerge } from "tailwind-merge";

type Props = {};

const History = (props: Props) => {
  const corePillarsData = [
    {
      title: "Identify And Guide Career Paths",
      text: "It was Robert Maynard Huchins who  once said : The  objective of education is to prepare the young to educate themselves throughghout their lives.A recognition of that fact has ignited MOYIs drive to support and sponsor many young minds who by reason of economic limitations of their parents are not able to fund their studies. In doing this, MOYI counts and depends largely on the generousity of its members,partner and supporters many of whom prefer to remain anonymous.",
    },
    {
      title: "Build  Inter-Personal Relationship",
      text: "It is no gain sayina that traditional values are being eroded in contemporary society and many family units which hitherto used to be the custodians of morality, respect and responsible behaviour are fast dissapearing into oblivion.Todays society are becoming insensitive to simple basic values are courtesey, decent dress sense , taking turns , table manners , gentleman and ladylike conducts etc. This training programme is MOYIs modest attempt at ensuring that these values and virtues come alive in our teens and passed on to generations to come.",
    },
    {
      title: "Spirituality Guide And Nuture For The Kingdom",
      text: "For a young mind , life at times can present itself as a puzzle. Trying to decode it may prove daunting.Without the proper guidance , many young people just coast along the seashore of life, tossed here and there, sometimes in what seemingly looks like a free fall to nowhere. MOYI provides this platform to teach guide and nurture on Gods plan but how to walk and be fulfilled in it.",
    },
  ];
  return (
    <div className="pt-20 w-screen flex flex-col items-center justify-center">
      <PageHero
        currentPage={"History"}
        title={"About Us"}
        className={"team-hero"}
      />
      <div className="max-w-7xl w-full flex flex-col justify-center items-center px-4">
        <div className="">
          <SectionTitle
            SectionTitle={"Our Organizations History"}
            className={"text-center w-full mt-12 mb-6 text-brandGreen"}
          />
          <p className="text-base text-center">
            When the idea of putting together a youth organization breezed
            through my mind, I quickly dismissed it with the same speed with
            which it came rushing in. At the time, I did not need the hassle of
            course, I wanted to to impact young people, this has always come
            come to me naturally, and the platform provided by my local church
            was enough to share whatever good I wanted to spread. Despite my
            hesitation, I continued and soldiered in my service service in the
            teens and later youth ministry. However, just as I was getting
            comfortable and thought I had settled into a reliable routine, I
            drove into a bump ahead . Ministry was one thing; passion for
            working working within your calling was another. Try as I may, I
            could not wish the thought away. It grew and grew , and I knew I
            needed a platform to drive that vision. As if out of the blue came
            the question: &quot;why this concern for young people”, the answer
            came instantaneously: Ït is because adults are not mindful of things
            that concern young people&quot;. And so , after a few hours of
            brainstorming while on a journey to Port-Harcourt in August 2006,
            Mindful of Youths Initiative (MOYI) was borne. It was not until
            another three years, precisely precisely2009, that the initiative
            initiative was formally registered and yet another three years
            before it was formally launched and its present Board formed. MOYI,
            as a Christian-based organization,organization is slowly slowly
            gradually but gradually creeping into the fabric of our lives with
            three aims in mind : to help young people identify and guide their
            career paths, to build a better interpersonal relationship between
            teens, with their parents and with the opposite sex, and lastly to
            spiritually guide and nurture them for the kingdom using practical
            biblical principles. The task ahead is enormous and , as rightly
            observed by Thomas S. Monson: &quot;Some are young people who do not
            know who they are , what they can be or even want to be. They are
            afraid , but they do not know what. They are angry, but they do not
            know at whom. They are rejected, and they do not know why. All they
            want is to be somebody.&quot; It is our goal in MOYI to help our our
            young people walk that path will usher them into their rightful
            place in society and their destiny.
          </p>
        </div>
        <div className="">
          <SectionTitle
            SectionTitle={"We Focus on Youth Initiatives "}
            className={"text-center w-full mt-12 mb-6 text-brandGreen"}
          />
          <p className="text-base text-center italic max-w-4xl w-full">
            Generally speaking,it is important and helpful to always consider
            what the aftermath of the actions or inactions we take can result
            in. If we are blinded by our anger and hurt, we will eventually reap
            the consequences of that act. A few of such consequences can show up
            in the future as:loneliness, hatred,shame,unfulfilled dreams,
            recycled affliction of disobedience from your own children etc.
          </p>
        </div>
        <div className="w-screen bg-[#F1F7FE] mt-24  flex flex-col items-center justify-center">
          <div className="max-w-7xl flex flex-col items-center justify-center px-4">
            <SectionTitle
              SectionTitle={"Core Pillars"}
              className={"text-center w-full my-12 text-brandGreen"}
            />
            <div className="md:grid grid-cols-2 lg:grid-cols-3 flex flex-col items-center justify-center gap-6 xl:gap-12 mb-24">
              {corePillarsData.map((c, index) => (
                <div
                  className={twMerge(
                    "text-black bg-white w-full max-w-[400px] md:h-[650px] h-[500px] xl:h-[500px]",
                    index === 1 && "bg-brandGreen text-white",
                    "rounded-lg shadow border border-gray-300 p-8 pt-12 space-y-4 text-center"
                  )}
                  key={index}
                >
                  <p className=" text-xl font-bold">{c.title}</p>
                  <p className="text-base">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BecomeAVolunteer />
    </div>
  );
};

export default History;
