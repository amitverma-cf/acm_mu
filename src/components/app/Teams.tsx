import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { teamsData } from '@/data/teamsData';
import { brandSvgData } from '@/data/brandSvgData';

const Teams = () => {
    return (
        <>
            {Object.keys(teamsData).map((category) => (
                <div key={category} className="p-8 md:p-16 lg:p-24 bg-bg">
                    <h2 className="text-3xl font-heading font-thin text-left px-4 mb-4 uppercase text-black">
                        {"Meet our "}{category.charAt(0).toUpperCase() + category.slice(1)}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                        {teamsData[category].map((person, index) => (
                            <div
                                key={index}
                                className="p-4 bg-white rounded-xl border-2 border-border hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-shadow"
                            >
                                <div className="text-center">
                                    <div className="h-40 w-40 relative mx-auto rounded-full bg-gray-200 outline mb-4" >
                                        <Image src={person.image} alt="alt" fill className='relative rounded-full object-cover' />
                                    </div>
                                    <h3 className="text-xl font-bold text-black">
                                        {person.name}
                                    </h3>
                                    <p className="text-lg text-gray-600">
                                        {person.position}
                                    </p>
                                    <div className="mt-4 flex flex-row flex-wrap justify-center space-x-4 text-sm gap-2">
                                        {person.social.map(function (social, index) {
                                            const svg = brandSvgData.find((svg) => svg.title === social.title);
                                            return svg && (
                                                <Link
                                                    key={index}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={svg.css}
                                                >
                                                    <svg className="size-8" fill="currentColor" viewBox={svg.svg_size} aria-hidden="true">
                                                        <path
                                                            fillRule="evenodd"
                                                            d={svg.svg_path}
                                                            clipRule="evenodd" />
                                                    </svg>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default Teams