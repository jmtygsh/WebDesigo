import { BiCheckCircle } from "react-icons/bi";

export const Badge = ({text}) => {
    return (
        <p className="z-2 flex justify-center items-center gap-1 border border-white/30 rounded-2xl px-5 py-1 mb-2 text-sm text-secondary shadow-[0_0_15px_rgba(59,130,246,0.4),0_0_30px_rgba(59,130,246,0.2)]">
            <BiCheckCircle />
            <span>{text}</span>
        </p>
    )
}
