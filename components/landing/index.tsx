import React from "react";
import Navbar from "../navbar";
import { SocialsList } from "@/utils/consts";
import Image from "next/image";

const landingList = [
    {
        title: "Platform tools",
        desc: ""
    },
    {
        title: "Image tools",
        desc: ""
    },
    {
        title: "Video tools",
        desc: ""
    },

]

const Landing = () => {
    return (
        <div className="w-full bg-[#121212] px-8">
            <Navbar />
            <div className="flex flex-row justify-between mt-24">
                <div className="flex flex-col w-5/12">
                    {landingList.map((item, index) => {
                        return (
                            <a href="" className="bg-white ">
                                <div className="flex flex-row border-[0.01rem] border-white bg-[#121212] ">
                                    <div className="mx-1 py-4">
                                        <p className="text-white -rotate-90 text-[0.65rem]">N&deg; {index + 1}</p>
                                    </div>
                                    <div className="w-[0.5px] bg-white" />
                                    <div className="py-6 mx-4">
                                        <h3 className="text-[5rem] text-white">{item.title}</h3>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
                <div className=" w-7/12">
                    <div className="flex flex-row bg-[#121212] border-white border-[1px] mx-4">
                        <div className="flex flex-col border-[1px] border-white">
                            {
                                SocialsList.map((item, index) => {
                                    return (
                                        <div className="p-4 border-[1px] border-white">
                                            <Image className="h-[24px] w-[24px]" width={24} height={24} style={{ fill: 'white' }} src={item.image} alt={""} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing