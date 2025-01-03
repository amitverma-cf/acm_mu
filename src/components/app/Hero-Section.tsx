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

                <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-16">

                    <div className="text-center lg:text-left lg:w-2/3">
                        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 lg:text-6xl">
                            Welcome to the ACM Chapter at Mahindra University
                        </h1>
                        <p className="mt-4 text-xl text-neutral-700 dark:text-neutral-300">
                            Empowering students with cutting-edge technology, fostering innovation, and building a community of future leaders in computing.
                        </p>
                        <div className="mt-8 flex justify-center gap-4 lg:justify-start">
                            <Button className="px-10 py-6 bg-blue-500 text-white font-semibold text-xl rounded-lg hover:bg-blue-600">
                                Join Us <ArrowUpRight className="inline-block" />
                            </Button>
                            <Button className="px-10 py-6 bg-neutral-100 border-2 border-neutral-900 text-neutral-900 font-semibold text-xl rounded-lg hover:bg-neutral-200 dark:border-neutral-100 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700">
                                Visit ACM <ArrowUpRight className="inline-block" />
                            </Button>
                        </div>
                    </div>

                    <div className="relative w-full lg:w-1/3">
                        <div className="w-full h-[300px] p-10 md:p-0 flex items-center justify-center">
                            <IconCloud iconSlugs={slugs} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection