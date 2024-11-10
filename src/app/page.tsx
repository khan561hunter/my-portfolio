"use client"
import React from 'react';

import localFont from "next/font/local";
import Image from "next/image";
import logo from "@/app/assets/7ed33019-36c8-488c-ac30-5b9f63657323.jpeg"


export default function Home(){
  return(
    <div className="w-[1900px] h-[1140px] bg-[#052e16] flex items-center justify-between">
      <div className=" bg-[#022c22] w-[1400px] h-[850px] mx-[10%] flex">
          
        <div className="w-[656px] h-[154px] text-[50px] font-bold leading-[77.45px] tracking-[-2%] text-white mx-[50px] ">
          WANIA KHAN
          <h2 className="text-[20px] ">FrontEnd Developer / Web Developer</h2>
          <div className="w-[700px] h-[60px] font-bold text-[24px] leading-[30px] tracking-[-2%] my-[20px] text-[#65a30d] text-center mx-[-50px] px-[10px] text-left my-[20px] ">
              My name is Wania Khan and I am a student at GIAIC Program where I am learning about web Development and AI Development. I have completed my college in Computer science discipline.I am very excited to learn about AI toold and explore the depths of upcoming future advancements.
        </div>
        </div>
        
        <div className=" ">
          <Image className='rounded-full border-[7px] border-[black]' src={logo} alt="logo"></Image>
        </div>







      </div>
      
  
    </div>
  )
      
}
