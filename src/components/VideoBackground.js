

export const VideoBackground = (props) => {
    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className={`absolute top-0 left-0 w-full h-full object-cover ${props.classes}`}
                style={{
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
                }}
            >
                <source src={props.url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            {/* Dark Overlay */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-[1]"></div> */}
            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/90 to-transparent z-[1] ${props.classes}`}></div>

        </>
    )
}
