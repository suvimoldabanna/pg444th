import React, { ReactNode } from 'react';

interface ModulProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modul: React.FC<ModulProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  // ใช้ e.currentTarget เพื่อให้ TypeScript เข้าใจชนิดของ element
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === 'wrapper') {
      onClose(); // ปิด modal เมื่อคลิกที่ wrapper
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm w-full z-[10000]"
      id="wrapper"
      onClick={handleClose} // เมื่อคลิกที่ wrapper จะปิด modal
    >
      <div className="flex flex-col bg-black h-full">
        <button
          className="text-white text-2xl font-bold bg-rose-700"
          onClick={() => onClose()} // ปิด modal เมื่อคลิกปุ่ม X
        >
          X
        </button>
        <div className="text-black rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modul;
