import React from "react";
import Cards from "./Cards";

function Foreground() {
  const data = [
    {
      desc: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      filesize: ".7 mb",
      close: false,
      tag: { isOpen: true, tagline: "Download Now ...", color: "green" },
    },
    {
      desc: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      filesize: ".4 mb",
      close: true,
      tag: { isOpen: false, tagline: "Download Now ...", color: "green" },
    },
    {
      desc: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      filesize: ".9 mb",
      close: true,
      tag: { isOpen: true, tagline: "Upload ...", color: "blue" },
    },
    {
      desc: "You only live once, but if you do it right, once is enough.",
      filesize: ".5 mb",
      close: false,
      tag: { isOpen: true, tagline: "Download Now ...", color: "green" },
    },
    {
      desc: "Darkness cannot drive out darkness : only light can do that. Hate cannot drive out hate :  only love can do that.",
      filesize: ".11 mb",
      close: true,
      tag: { isOpen: false, tagline: "Download Now ...", color: "green" },
    },
  ];
  return (
    <>
      <div className="fixed top-0 left-0 z-[3] h-full overflow-auto w-full p-5 flex flex-wrap gap-5 pt-[5%]">
        {data.map((item, index) => (
          <Cards data={item} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
