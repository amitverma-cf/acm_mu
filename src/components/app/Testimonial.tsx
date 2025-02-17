import { testimonialsData } from '@/data/testimonialsData'
import React from 'react'
import Image from 'next/image';

const Testimonial = () => {
    return (
        <>
            <section className="inset-0 flex w-full px-5 flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
                <div className="mx-auto w-container max-w-full py-20 lg:py-[100px]">
                    <h2 className="mb-10 text-center text-4xl font-heading lg:mb-20">
                        {testimonialsData.title}
                    </h2>
                    <div className="md:grid-cols-3 md:gap-4 grid grid-cols-1 gap-0 lg:gap-8">
                        {[
                            [testimonialsData.content[0], testimonialsData.content[1]],
                            [testimonialsData.content[2], testimonialsData.content[3], testimonialsData.content[4]],
                            [testimonialsData.content[5], testimonialsData.content[6]],
                        ].map((card, index) => (
                            <div className="group flex flex-col justify-center" key={index}>
                                {card.map(({ jobTitle, pfp, fullName, review }, index) => (
                                    <div
                                        className="mb-4 min-h-48 w-full rounded-base border-2 border-border bg-bg p-5 shadow-light lg:mb-8"
                                        key={index}
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className='relative w-12 h-12 rounded-base overflow-hidden'>
                                                <Image
                                                    className="h-12 w-12 rounded-base border-2 border-border object-contain"
                                                    src={`${pfp}`}
                                                    alt="pfp"
                                                    fill
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-heading">{fullName}</h4>
                                                <p className="text-sm font-base">{jobTitle}</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 break-words">{review}</div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial