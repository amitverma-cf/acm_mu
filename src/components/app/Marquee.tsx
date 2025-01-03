import React from 'react'
import { VelocityScroll } from '../ui/scroll-based-velocity'

const Marquee = () => {
    return (
        <div className="bg-black text-white text-xl p-4 pb-6">
            <VelocityScroll
                defaultVelocity={2}
                numRows={1}
            >
                <span className="text-yellow-400">{"//"} Breaking news {"//"}</span> ACM Leaderboard is now live! 🚀
            </VelocityScroll>
        </div>
    )
}

export default Marquee