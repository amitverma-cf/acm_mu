import { Hammer, Code, UserCheck, Handshake } from 'lucide-react'
import React from 'react'

const Showcase = () => {
    return (
        <div className="grid md:grid-cols-2 border-b-4 border-t-4 border-border grid-cols-1">

            <section className="border-b-4 border-r-4 border-border bg-red-200 p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:border-r-0 m700:bg-main">
                <div className="flex items-center gap-6 mb-6">
                    <div className="w-[70px] h-[70px] m1300:w-[55px] m1300:h-[55px] m800:h-10 m800:w-10 flex items-center justify-center">
                        <Hammer className='h-10 w-10' />
                    </div>
                    <h2 className="font-heading text-4xl m1300:text-3xl m800:text-2xl m500:text-xl">
                        Workshops
                    </h2>
                </div>
                <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
                    Engage in hands-on learning through interactive workshops on cutting-edge technologies like AI, Blockchain, Web Development, and more.
                </p>
            </section>

            <section className="border-b-4 border-border bg-purple-300 p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:bg-bg">
                <div className="flex items-center gap-6 mb-6">
                    <div className="w-[70px] h-[70px] m1300:w-[55px] m1300:h-[55px] m800:h-10 m800:w-10 flex items-center justify-center">
                        <Code className='h-10 w-10' />
                    </div>
                    <h2 className="font-heading text-4xl m1300:text-3xl m800:text-2xl m500:text-xl">
                        Competitions & Hackathons
                    </h2>
                </div>
                <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
                    Test your skills and creativity by participating in competitive coding contests, hackathons, and problem-solving challenges.
                </p>
            </section>

            <section className="bg-yellow-100 border-r-4 border-border p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:border-b-4 m700:border-r-0">
                <div className="flex items-center gap-6 mb-6">
                    <div className="w-[70px] h-[70px] m1300:w-[55px] m1300:h-[55px] m800:h-10 m800:w-10 flex items-center justify-center">
                        <UserCheck className='h-10 w-10' />
                    </div>
                    <h2 className="font-heading text-4xl m1300:text-3xl m800:text-2xl m500:text-xl">
                        Guest Lectures
                    </h2>
                </div>
                <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
                    Gain insights from industry leaders, renowned professors, and tech experts during guest lecture sessions on trending topics.
                </p>
            </section>

            <section className="bg-blue-300 p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8">
                <div className="flex items-center gap-6 mb-6">
                    <div className="w-[70px] h-[70px] m1300:w-[55px] m1300:h-[55px] m800:h-10 m800:w-10 flex items-center justify-center">
                        <Handshake className='h-10 w-10' />
                    </div>
                    <h2 className="text-4xl font-heading m1300:text-3xl m800:text-2xl m500:text-xl">
                        Collaborations & Opportunities
                    </h2>
                </div>
                <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
                    Collaborate with peers, network with professionals, and unlock unique opportunities to grow your career in computing.
                </p>
            </section>
        </div>
    )
}

export default Showcase