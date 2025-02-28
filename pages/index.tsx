// pages/index.tsx
import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls"; // Import Controls component

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = React.useState<CurrentSlideData>({
    data: initData,
    index: 0,
  });

  return (
    <main
      className={`relative min-h-screen select-none overflow-hidden text-white antialiased ${inter.className}`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          <Header />
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "/1.webp",
    title: "Wings of Iguazu",
    gameName:"https://m.pgsoft-games.com/1492288/index.html?ot=ca7094186b309ee149c55c8822e7ecf2&btt=2&language=en-EN&__refer=m.pg-redirect.com&or=static.pgsoft-games.com",
  },
  {
    img: "/2.webp",
    title: "Incan Wonders",
    gameName:"https://m.pgsoft-games.com/1508783/index.html?ot=ca7094186b309ee149c55c8822e7ecf2&btt=2&language=en-EN&__refer=m.pg-redirect.com&or=static.pgsoft-games.com",
  },
  {
    img: "/3.webp",
    title: "Futebol Fever",
    gameName:"Wings of Iguazu",
  },
  {
    img: "/4.webp",
    title: "Gladiator's Glory",
    gameName:"Wings of Iguazu",
  },
  {
    img: "/5.webp",
    title: "Mafia Mayhem",
    gameName:"Wings of Iguazu",
  },
  {
    img: "/6.webp",
    title: "Totem Wonders",
    gameName:"Wings of Iguazu",
  },
  {
    img: "/7.webp",
    title: "Anubis Wrath",
    gameName:"Wings of Iguazu",
  },
  {
    img: "/8.webp",
    title: "Dragon Hatch 2",
    gameName:"Wings of Iguazu",
  },
  {
    img: "/9.webp",
    title: "Safari Wilds",
    gameName:"Wings of Iguazu",
  },
  {
    img: "/10.webp",
    title: "Rio Fantasia",
    gameName:"Wings of Iguazu",
  },
  {
    img: "/11.webp",
    title: "Forge of Wealth",
    gameName:"Wings of Iguazu",
  },
  {
    img: "/12.webp",
    title: "Zombie Outbreak",
    gameName:"Wings of Iguazu",
  },
  {
    img: "/13.webp",
    title: "Werewolf's Hunt",
    gameName:"Wings of Iguazu",
  },
  {
    img: "/14.webp",
    title: "Shark Bounty",
    gameName:"Wings of Iguazu",
  },
];

const initData = sliderData[0];
