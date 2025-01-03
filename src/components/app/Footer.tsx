import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import Logo from './Logo';
import Link from 'next/link';
import { footerData } from '@/data/footerData';

const Footer = () => {
    return (
        <>
            <footer className="bg-blue-100">
                <div className="">

                    <div
                        className="flex flex-col border-t-4 border-b-4 border-black items-center p-6 bg-purple-500 shadow-lg sm:flex-row sm:justify-between"
                    >
                        <strong className="text-xl text-white"> {footerData.cta_title} </strong>

                        <Button
                            className="bg-white mr-6 text-xl mt-4 sm:mt-0"
                        >
                            <span className=""> {footerData.cta_button} </span>
                            <ArrowUpRight />
                        </Button>
                    </div>

                    <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">

                        <div className="flex flex-row flex-wrap gap-8 lg:gap-64 justify-between">

                            <div className="max-w-[600px] text-center md:text-left">
                                <Logo />
                                <p className="mt-4 text-center md:text-left lg:text-lg">
                                    {footerData.description}
                                    <Link
                                        className="font-bold hover:text-blue-500 text-blue-800 block"
                                        href={footerData.contact_email}
                                    >
                                        {" "}{footerData.contact_text}{" "}
                                    </Link>
                                </p>

                                <form className="mt-6 flex justify-center gap-4 md:justify-start">
                                    {footerData.social.map((social) =>
                                        <Button
                                            key={social.title}
                                            className="text-black transition hover:text-black/75"
                                            formAction={social.link}
                                        >
                                            <span className="sr-only"> {social.title} </span>
                                            <svg className="size-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    fillRule="evenodd"
                                                    d={social.svg_path}
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Button>
                                    )}
                                </form>

                                <div className="text-center md:text-left py-4">
                                    <p className=" text-base/relaxed">
                                        {footerData.copyright}
                                    </p>
                                </div>
                            </div>

                            <div className="text-xl m1100:text-base">
                                <div className='text-left'>
                                    <strong className='font-heading text-3xl font-thin'>{footerData.quicklinks_heading}</strong>

                                    {footerData.quicklinks_links.map(
                                        (link) => <Link
                                            key={link.text}
                                            className="font-bold hover:text-blue-500 text-blue-800 block"
                                            href={link.href}
                                        >
                                            {link.text}
                                        </Link>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="block text-clip opacity-50 lg:h-[200px] md:h-[150px] h-[100px] text-center overflow-y-clip leading-[0.7] -z-[999]">
                        <span className="lg:text-[500px] md:text-[400px] text-[200px] font-heading text-center text-white"> {footerData.acm} </span>
                    </div>

                </div>
            </footer >
        </>
    )
}

export default Footer