"use client";
import { useState } from "react";
import { logoContainer } from "../../../public/logo-container";
import { NomNomIcon } from "../../../public/nomNom";

export default function Header() {
  return (
    <div className="w-screen h-[742px] ">
      {" "}
      <div className="w-screen h-[172px] flex content-center justify-between top-3 bottom-3 left-[88px] bg-black">
        <div className="w-[146px] h-11 gap-3 flex justify-center  ">
          <logoContainer />
          <div className="w-[88px] h-11 flex flex-col ">
            <NomNomIcon />
            <p className="font-inter font-normal text-sm text-center leading-4 text-zinc-100">
              Swift delivery
            </p>
          </div>
        </div>
        <div className="w-[348.63px] h-9"></div>
      </div>
    </div>
  );
}
