import { useRef, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

export const VideoSection = ({ url, play = false }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(play);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className={`relative h-full cursor-pointer w-4/5 m-auto mt-5  rounded-2xl overflow-hidden border-4 border-[#363434]`} onClick={togglePlay}
            style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.7)' }}
        >
            <video
                ref={videoRef}
                loop
                muted
                playsInline
                controls={isPlaying}  // Show controls only when playing
                className="w-full h-full object-cover"
            >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Play Icon (only show when paused) */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 transition-opacity duration-300">
                    <FaRegCirclePlay className="text-white text-7xl drop-shadow-lg" />
                </div>
            )}
        </div>
    );
};
