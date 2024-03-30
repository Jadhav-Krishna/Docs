import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
// import { motion } from "framer-motion"
import { motion } from "framer-motion"

function Cards({ data }) {
  return (
      <div className="card relative w-60 h-72 flex-shrink-0 overflow-hidden rounded-[40px] text-white bg-zinc-900/70 p-7">
        <LuFileSpreadsheet />
        <p className="para text-sm mt-5 font-medium leading-tight ">{data.desc}</p>
        <div className="absolute w-full left-0 bottom-0">
          <div className="flex align-middle justify-between px-8 mb-5">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 flex item-center p-2 justify-center rounded-full">
              {data.close ? (
                <IoCloseOutline size=".7em" color="#fff" />
              ) : (
                <LuDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-5 ${
                data.tag.color === "blue" ? "bg-blue-600" : "bg-green-600"
              }  text-center`}
            >
              <h3 className="text-sm font-bold">{data.tag.tagline}</h3>
            </div>
          )}
        </div>

      </div>
  );
}

export default Cards;
