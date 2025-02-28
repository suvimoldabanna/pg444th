import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import Controls from "@/components/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export type Data = {
  img: string;
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
      className={`${
        inter.className
      } relative min-h-screen select-none overflow-hidden text-white antialiased`}
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
              {/* Removed SlideInfo component as it is using removed data */}
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
    img: "/1.jpg",
  },
  {
    img: "/2.jpg",
  },
  {
    img: "/3.jpg",
  },
  {
    img: "/4.jpg",
  },
  {
    img: "/5.jpg",
  },
  {
    img: "/6.jpg",
  },
  {
    img: "/7.jpg",
  },
  {
    img: "/8.webp",
  },
  {
    img: "/9.webp",
  },
  {
    img: "/10.jpg",
  },
  {
    img: "/11.webp",
  },
  {
    img: "/12.webp",
  },
  {
    img: "/13.jpg",
  },
  {
    img: "/14.webp",
  },
];

const initData = sliderData[0];
