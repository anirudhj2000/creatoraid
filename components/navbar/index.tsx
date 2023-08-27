import React from "react";

const Navbar = () => {
    return (
        <div className="w-full flex flex-row backdrop-blur-sm fixed top-0 left-0 right-0 justify-between px-8 py-4">
            <div className="text-[2rem]">
                <h4 className="text-white">Creator Aid</h4>
            </div>
            <div className="flex flex-row w-1/4 justify-around text-white text-[1.25rem] ">
                <a href="#" className="group text- transition duration-300">Tools<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span></a>
                <a href="#" className="group text-white transition duration-300">Pricing<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span></a>
                <a href="#" className="group text-white transition duration-300">More<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span></a>
            </div>
        </div>
    )
}

export default Navbar