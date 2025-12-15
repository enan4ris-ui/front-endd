"use client";
import { useState } from "react";
import { logoContainer } from "../../../public/logoContainer";
import { foodicon } from "../icons/LogoIcon";
import { headerbackground } from "../icons/headerbackground";
import { NomNomIcon } from "../../../public/nomNom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function Header() {
  return (
    <div className="w-screen h-[4399px] gap-88 bg-stone-700">
      <div className="w-screen h-[742px] flex flex-col">
        {" "}
        <div className="w-screen h-[172px] flex content-center justify-between top-3 bottom-3 left-[88px] bg-black">
          <div className="w-[146px] h-11 gap-3 flex justify-center  ">
            {/* <logoContainer /> */}
            <foodicon />
            <div className="w-[88px] h-11 flex flex-col ">
              <NomNomIcon />
              <p className="font-inter font-normal text-sm text-center leading-4 text-zinc-100">
                Swift delivery
              </p>
            </div>
          </div>
          <headerbackground />
          <div className="w-[348.63px] h-9"></div>
        </div>
      </div>
      <div className="w-[1264px] h-[2646px] gap-54 flex flex-col">
        <p className="font-sans font-semibold text-3xl/9 text-amber-50 text-[30px] flex align-start jusitfy-start">
          Appetizers
        </p>
        <div className="w-[1264px] h-[720px] gap-9 flex flex-wrap">
          <div className="w-[1264px] h-[342px] flex flex-row">
            {" "}
            <Card className="w-[397.33px] h-[342px] gap-5 rounded-4xl p-4 rounded-white bg-white">
              <CardContent></CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="w-screen h-[755px] bg-black">
        <div className="bg-red-500 relative w-screen h-[92px] opacity-100 gap-[34px] pt-(--spacing-7) pr-[98px] pb-(--spacing-7) pl-[98px] top-[60px] rotate-0">
          <p className="text-white semi-bold ">Fresh fast delivered</p>
          <p className="text-white semi-bold ">Fresh fast delivered</p>
          <p className="text-white semi-bold ">Fresh fast delivered</p>
          <p className="text-white semi-bold ">Fresh fast delivered</p>
          <p className="text-white semi-bold ">Fresh fast delivered</p>
        </div>
        <div>
          <div>
            <NomNomIcon />
            <p>Swift delivery</p>
          </div>
          <div className="flex flex-row w-[1264px] h-[228px] gap-[220px] space-between">
            <div className="w-[88px] h-[93.7px] gap-[12.41px] flex flex-col">
              <logoContainer />
              <NomNomIcon />
              <p className="font-inter font-normal text-[12px] leading-4 text-center">
                Swift delivery
              </p>
            </div>
            <div className="font-inter font-normal text-base leading-relaxed tracking-normal text-white p-4">
              <div className="flex flex-col">
                <p>Home</p>
                <p>Contact us</p>
                <p>Delivery zone</p>
              </div>
              <div className="flex flex-col text-white p-4">
                <p>Appetizers</p>
                <p>Salads</p>
                <p>Pizzas</p>
                <p>Main dishes</p>
                <p>Desserts</p>
              </div>
              <div className="flex flex-col text-white p-4">
                <p>Side dish</p>
                <p>Brunch</p>
                <p>Desserts</p>
                <p>Beverages</p>
                <p>Fish & Sea foods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
