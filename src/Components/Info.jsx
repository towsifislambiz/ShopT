import React from "react";

const Info = ({ className, Text, Text2, icon }) => {
  return (
    <div >
      <div className={`w-62.5 flex gap-x-5 items-center ${className}`}>
        <div>{icon}</div>

        <div>
          <p className="text-base font-inter font-bold text-black">
            {Text}
          </p>

          <span className="text-sm text-[#797979] font-inter font-normal">
            {Text2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;