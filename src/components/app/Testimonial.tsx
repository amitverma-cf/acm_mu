import { testimonialsData } from '@/data/testimonialsData'
import React from 'react'

const Testimonial = () => {
    return (
        <>
            <section className="inset-0 flex w-full px-5 flex-col items-center justify-center bg-white dark:bg-secondaryBlack bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
                <div className="mx-auto w-container max-w-full py-20 m500:py-14 lg:py-[100px]">
                    <h2 className="mb-10 text-center text-4xl font-heading m1300:text-3xl m700:text-2xl m500:text-xl lg:mb-20">
                        Loved by the community
                    </h2>
                    <div className="md:grid-cols-3 md:gap-4 grid grid-cols-1 gap-0 lg:gap-8">
                        {[
                            [testimonialsData[0], testimonialsData[1]],
                            [testimonialsData[2], testimonialsData[3], testimonialsData[4]],
                            [testimonialsData[5], testimonialsData[6]],
                        ].map((card, index) => (
                            <div className="group flex flex-col justify-center" key={index}>
                                {card.map(({ jobTitle, pfp, fullName, review }, index) => (
                                    <div
                                        className="m1000:min-h-20 m1000:w-2/3 m1000:mx-auto m500:w-full mb-4 min-h-48 w-full rounded-base border-2 border-border dark:border-darkBorder bg-bg dark:bg-darkBg p-5 shadow-light dark:shadow-dark lg:mb-8"
                                        key={index}
                                    >
                                        <div className="flex items-center gap-5">
                                            <img
                                                className="h-12 w-12 rounded-base border-2 border-border"
                                                src={`${pfp}`}
                                                alt="pfp"
                                            />

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