
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";

import { Button } from "@/components/Button";


export const HeroSection = () => {
    return (
        <div className="max-w-3/6 text-center space-y-5 flex flex-col items-center z-2 ">
            <Link className="py-3 px-5 rounded-full bg-[#1d2033] drop-shadow-md flex gap-2
            
            " href="/"

            >
                <span className="text-secondary">We Design websites that matter, user’s can’t resist</span>
                <span className="bg-blue-500 flex items-center rounded-full px-3">
                    <CgArrowRight />
                </span>
            </Link>
            <h1 className="text-5xl/15 font-bold">Design That Powers Real Business Growth</h1>
            <p className="text-lg text-secondary">Elevating brands through innovative and engaging web solutions.</p>
    

            <Button url="/get-started" text="Get Started" />

        </div>
    )
}
