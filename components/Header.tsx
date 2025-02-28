import React from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import Head from "next/head";

function Header() {
  const [active, setActive] = React.useState(0);
  return (
    <div className=" absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xl font-medium uppercase opacity-90 md:px-10">
      <Head>
        <title>Cool Project</title>
      </Head>
      <div className="  flex items-center gap-2 font-medium tracking-[4px]">
        <IoIosGlobe className=" text-xl" />
        pg444th
      </div>
      <ul className=" flex flex-wrap items-center gap-3 text-[14px] md:gap-10">
        {menus.map((menu, index) => {
          return (
            <motion.li
              layout
              key={index}
              className={` ${
                active == index && " border-b-2 border-b-yellow-500"
              } inline-block cursor-pointer  border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
            >
              {menu}
            </motion.li>
          );
        })}
 <div className="flex items-center gap-4">
  {/* ปุ่มสำหรับสมัคร */}
  <button
    className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition duration-300 animate-pulse"
  >
    สมัคร
  </button>
  
  {/* ปุ่มสำหรับเข้าสู่ระบบ */}
  <button className="bg-white text-black px-3 py-1 rounded-md text-sm hover:bg-gray-200 transition duration-300">
    เข้าสู่ระบบ
  </button>
</div>

      </ul>
    </div>
  );
}

export default Header;

const menus = [
  "หน้าหลัก",
  "สล็อต",
  "บาคาร่า",
  "เกมยิงปลา",
  "โปรโมรชั่น",
];
