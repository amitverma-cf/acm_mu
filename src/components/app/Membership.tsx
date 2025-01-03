import React from 'react'
import { Button } from '../ui/button'
import { ArrowBigRightDashIcon, BadgePercent } from 'lucide-react'

const Membership = () => {
    return (
        <section className="bg-purple-300 border-t-4 border-black">
            <h1 className='text-4xl text-center md:text-left md:pl-40 pt-20 pb-8'>Apply for Membership</h1>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-6 pb-20">
                <div className="rounded-lg border-2 border-b-4 border-r-4 border-neutral-900 bg-white p-6 py-14 max-w-md flex-1">
                    <div className="flex items-center justify-between">
                        <div className="text-base font-thin">
                            <span className="text-base font-bold">
                                <strong className="text-4xl font-heading">₹ 1250</strong> /month
                            </span>{" "}
                            (exclusive of gst*)
                        </div>
                        <div className="bg-primary-500 rounded-full border-2 border-r-4 border-b-4 border-neutral-900 p-2">
                            <BadgePercent className="w-8 h-8 fill-purple-300" />
                        </div>
                    </div>
                    <p className="mt-14 text-xl text-neutral-700">
                        Get started with our basic ACM membership, ideal for students and aspiring computing professionals.
                    </p>
                </div>

                <div className="flex flex-col gap-4 text-base text-neutral-900 flex-1 max-w-md">
                    <p>
                        <ArrowBigRightDashIcon className="inline mr-2" />
                        <strong>Access to ACM Digital Library</strong> ⏤ Explore a vast collection of research papers, articles, and journals to expand your knowledge.
                    </p>
                    <p>
                        <ArrowBigRightDashIcon className="inline mr-2" />
                        <strong>Networking Opportunities</strong> ⏤ Connect with top professionals, researchers, and students in the computing world.
                    </p>
                    <p>
                        <ArrowBigRightDashIcon className="inline mr-2" />
                        <strong>Professional Development Resources</strong> ⏤ Gain access to webinars, workshops, and skill-building programs.
                    </p>

                    <Button className="mt-6 w-full h-14 text-2xl bg-white text-neutral-900 font-bold border-2 border-neutral-900 rounded-lg shadow-lg hover:bg-neutral-100">
                        Join Membership
                    </Button>
                </div>
            </div>
        </section>


    )
}

export default Membership