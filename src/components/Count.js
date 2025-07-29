import React from 'react'

export const Count = ({ data }) => {

    if (!data || data.length === 0 || !Array.isArray(data)) return null;
    return (
        <div className="grid grid-cols-2 gap-5">
            {data.map((item) => (
                <div className="relative  bg-blue-100/5 border border-blue-500/20 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-500/15 group overflow-hidden">

                    <div className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: `
                                    linear-gradient(rgb(255 255 255 / 15%) 0px, transparent 1px),
                                    linear-gradient(90deg, rgb(255 255 255 / 15%) 1px, transparent 1px)
                                    `,
                            backgroundSize: '23px 23px',
                            maskImage:
                                'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(255 254 254) 0%, rgb(0 0 0) 0%, rgb(0 0 0 / 14%) 70%)',
                            WebkitMaskImage:
                                'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(255 254 254) 0%, rgb(0 0 0) 0%, rgb(0 0 0 / 14%) 70%)',
                        }}
                    />

                    <h4 className="text-5xl font-bold text-center">
                        {item.count}{item.sign}
                    </h4>
                    <p className="text-slate-400 mt-1 text-center">{item.des}</p>
                </div>
            ))}

        </div>
    )
}
