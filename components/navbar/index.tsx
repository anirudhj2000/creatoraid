import React from "react";

const Navbar = () => {
    return (
        <div className="w-full flex flex-row  absolute top-0 justify-between bg-[#ababab] px-4 py-2">
            <div className="">
                <h4 className="text-red-200">Creator Aid</h4>
            </div>
            <div className="flex flex-row w-2/12 justify-around text-white">
                <a href="#">Tools</a>
                <a>Pricing</a>
                <a>More</a>
            </div>
        </div>
    )
}

export default Navbar