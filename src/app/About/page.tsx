import Image from "next/image"
import logo from "@/app/assets/7ed33019-36c8-488c-ac30-5b9f63657323.jpeg"

export default function About(){
    return(
        <div className="w-[1900px] h-[1140px] bg-[#020617] flex items-center">
            <div className="w-[1400px] h-[829px] bg-[#0f1728] mx-[9%] ">
                <div className="mx-[35%] p-[10px] my-[40px]">
                    <Image className="rounded-full border-[7px] border-[black] max-w-full px-[5px] " src={logo} alt="logo"></Image>
                </div>
                <div className="text-white text-[25px] font-bold p-[50px] text-center leading-[30px] tracking-[2%]">
                    My name is Wania Khan and I have completed my college in computer science discipline.I am a student at GIAIC Governor's Program where I have gotten a chance to showcase my talent and skills and got the opportunity to explore different ideas and talents.I am currently working and studying in my gap year.This Governor's Program really helped me a lot to achieve the best I could in my weak areas.I am excited to learn new things about the AI Development and upcoming advancements.
                </div>
            </div>

        </div>
    )
}