// components/SlideInfo.tsx
import React from "react";
import OtherInfo from "./OtherInfo";
import { Data, CurrentSlideData } from "@/pages";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
     

      {/* ใช้ className เพื่อซ่อนเนื้อหาบนจอคอมพิวเตอร์ */}
      <div className="hidden md:block">
        {/* ข้อความนี้จะไม่แสดงบนหน้าจอมือถือ */}
      </div>

      {/* ใช้ className เพื่อแสดงข้อความเฉพาะในมือถือ */}
      <div className="block md:hidden">
        {/* ข้อความนี้จะถูกแสดงเฉพาะบนหน้าจอมือถือ */}
        <OtherInfo data={transitionData ? transitionData : currentSlideData.data} />
      </div>
    </>
  );
}

export default SlideInfo;
