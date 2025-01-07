import { Hammer, Code, UserCheck, Handshake } from 'lucide-react'
import React from 'react'

const Showcase = () => {
    return (
        <div className="grid md:grid-cols-2 border-b-4 border-t-4 border-border grid-cols-1">

            <section className="border-b-4 md:border-r-4 border-border bg-red-200 p-14 py-16">
                <div className="flex items-center gap-6 mb-6">
                    <div className="w-[70px] h-[70px] flex items-center justify-center">
                        <Hammer className='h-10 w-10' />
                    </div>
                    <h2 className="font-heading lg:text-4xl text-2xl">
                        Workshops
                    </h2>
                </div>
                <p className="text-lg lg:text-xl md:text-2xl font-base">
                    Engage in hands-on learning through interactive workshops on cutting-edge technologies like AI, Blockchain, Web Development, and more.
                </p>
            </section>

            <section className="border-b-4 border-border bg-purple-300 p-14 py-16">
                <div className="flex items-center gap-6 mb-6">
                    <div className="w-[70px] h-[70px] flex items-center justify-center">
                        <Code className='h-10 w-10' />
                    </div>
                    <h2 className="font-heading lg:text-4xl text-2xl">
                        Competitions & Hackathons
                    </h2>
                </div>
                <p className="text-lg lg:text-xl md:text-2xl font-base">
                    Test your skills and creativity by participating in competitive coding contests, hackathons, and problem-solving challenges.
                </p>
            </section>

            <section className="bg-yellow-100 md:border-r-4 border-border p-14 py-16">
                <div className="flex items-center gap-6 mb-6">
                    <div className="w-[70px] h-[70px] flex items-center justify-center">
                        <UserCheck className='h-10 w-10' />
                    </div>
                    <h2 className="font-heading lg:text-4xl text-2xl">
                        Guest Lectures
                    </h2>
                </div>
                <p className="text-lg lg:text-xl md:text-2xl font-base">
                    Gain insights from industry leaders, renowned professors, and tech experts during guest lecture sessions on trending topics.
                </p>
            </section>

            <section className="bg-blue-300 p-14 py-16">
                <div className="flex items-center gap-6 mb-6">
                    <div className="w-[70px] h-[70px] flex items-center justify-center">
                        <Handshake className='h-10 w-10' />
                    </div>
                    <h2 className="font-heading lg:text-4xl text-2xl">
                        Collaborations & Opportunities
                    </h2>
                </div>
                <p className="text-lg lg:text-xl md:text-2xl font-base">
                    Collaborate with peers, network with professionals, and unlock unique opportunities to grow your career in computing.
                </p>
            </section>
        </div>
    )
}

export default Showcase