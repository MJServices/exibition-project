"use client";

import { useState } from "react";

function Intro({ onDataTransfer }: any) {
  const [click, setclick] = useState(false);
  return (
    <section>
      <style jsx>{`
        .excite-btn::before {
          content: "Enjoy !";
          background-color: rgb(53, 199, 24);
          position: absolute;
          top: 75px;
          left: -15%;
          width: 130%;
          height: 50px;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          color: black;
          transform: rotate(0deg);
          transition: all 0.5s ease-in-out;
        }
        .excite-btn:hover::before {
          top: 13px;
          transform: rotate(-15deg);
        }
      `}</style>
      <section className="slide1 bg-black w-screen h-screen text-emerald-500 flex justify-center items-center">
        <section className="flex justify-center items-center flex-col">
          <h1 className="text-[6vw] sm:text-[35px] w-[90vw] flex justify-center">
            Here is{" "}
            <span className="animate-pulse mx-1 sm:mx-3">something</span>{" "}
            exciting for you
          </h1>
          <div className="btn-cont flex justify-center items-center w-[60vw] sm:w-1/2 h-[40vh] sm:h-[300px] relative">
            <div
              style={{ filter: "blur(40px)" }}
              className="absolute z-0 w-full h-full flex justify-evenly items-center bg-[#143808] rounded-full gap-2"
            ></div>
            <button
              onClick={() => {
                setclick(true);
                onDataTransfer(click);
              }}
              className="excite-btn z-10 bg-transparent border-[.5px] border-zinc-600 px-10 py-5 rounded-lg text-emrald-700 text-2xl relative overflow-hidden "
            >
              Excite me
            </button>
            <button className="z-10 bg-green-500 border-[.5px] border-zinc-600 px-6 py-5 rounded-lg text-zinc-200 text-2xl relative overflow-hidden ml-2">
              Don't
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}
export default Intro;