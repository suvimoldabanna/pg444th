import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import Modul from "./Modul"; // Import Modal ที่คุณสร้างไว้

type Props = {
  data: any;
};

function SliderCard({ data }: Props) {
  const [showModal, setShowModal] = useState(false); // สร้าง state เพื่อควบคุมการแสดง Modal

  const handlePlayClick = () => {
    setShowModal(true); // เปิด Modal เมื่อคลิกปุ่ม Play
  };

  return (
    <motion.div
      className="relative h-52 min-w-[250px] rounded-2xl shadow-md md:h-80 md:min-w-[208px]"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      <motion.img
        layoutId={data.img}
        alt="Transition Image"
        src={data.img}
        className="absolute h-full w-full rounded-2xl object-cover brightness-75"
         loading="lazy"
      />
      <motion.div className="absolute z-10 flex h-full items-end p-4">
        <motion.div>
         {/* ปุ่ม Play */}
         <motion.button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-700 text-white p-3 rounded-full flex justify-center items-center shadow-xl opacity-70 hover:opacity-90 transition-all duration-300 ease-in-out"
            onClick={handlePlayClick} // เปิด Modal เมื่อคลิก
          >
            {/* ไอคอน Play */}
            <PlayCircleIcon className="w-6 h-6" />
            demo
          </motion.button>
          
          <motion.span
            layoutId={data.title}
            className="text-xl leading-6 text-white"
          >
            {data.title}
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <Modul isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="w-full h-full flex justify-center items-center bg-black">
          {/* ใส่ iframe ที่จะเล่นเกมหรือวิดีโอ */}
          <div className='w-full h-full  [&>iframe]:h-[635px] [&>iframe]:md:h-[920px] '>
          <iframe
            key={data.id}
            width="100%"
            height="100%"
            src={data.gameName} // ใช้ gameName ที่มาจาก data ซึ่งเป็น URL ของเกม
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className="rounded-2xl"
          ></iframe>
          </div>   
        </div>
        {/* ปุ่มปิด Modal */}
       
      </Modul>
    </motion.div>
  );
}

export default SliderCard;
