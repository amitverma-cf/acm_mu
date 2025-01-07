import React from 'react'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'
import IconCloud from '../ui/icon-cloud'
import RetroGrid from '../ui/retro-grid';
import { slugs } from '@/data/technologySlugs';

const HeroSection = () => {
    return (
        <>
            <section className="relative flex h-[800px] lg:h-screen w-full flex-col items-center justify-center overflow-hidden bg-blue-50 px-6 py-40 lg:px-16">
                <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-blue-500 rounded-lg opacity-50 -rotate-12"></div>
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-yellow-400 rounded-lg opacity-50 rotate-45"></div>

                <RetroGrid />

                <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-4 lg:flex-row lg:gap-16 md:gap-24">

                    <div className="text-center lg:text-left lg:w-2/3">
                        <h1 className="font-bold text-neutral-900 text-3xl md:text-4xl lg:text-6xl">
                            Welcome to the ACM Chapter at Mahindra University
                        </h1>
                        <p className="mt-4 text-xl text-neutral-700">
                            Empowering students with cutting-edge technology, fostering innovation, and building a community of future leaders in computing.
                        </p>
                        <div className="mt-8 flex justify-center flex-wrap gap-4 lg:justify-start">
                            <Button className="px-10 py-6 bg-blue-500 text-white font-semibold text-xl rounded-lg hover:bg-blue-600">
                                Join Us <ArrowUpRight className="inline-block" />
                            </Button>
                            <Button className="px-10 py-6 bg-neutral-100 border-2 border-neutral-900 text-neutral-900 font-semibold text-xl rounded-lg hover:bg-neutral-200">
                                Visit ACM <ArrowUpRight className="inline-block" />
                            </Button>
                        </div>
                    </div>

                    <div className="relative w-full lg:w-1/2 md:w-1/2">
                        <div className="w-full h-[300px] p-4 md:p-0 flex items-center justify-center">
                            <IconCloud iconSlugs={slugs} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection