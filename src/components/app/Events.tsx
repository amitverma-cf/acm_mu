"use client";
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { eventsData } from '@/data/eventsData';

const Events = () => {

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-black'>
                <div className="parent p-6">
                    <div className="sticky-header text-white pt-6">
                        <h1 className='text-4xl font-heading'>{eventsData.title}</h1>
                        <p className='mt-6 text-lg font-thin'>{eventsData.description}</p>
                    </div>
                </div>
                <div className=''>
                    {eventsData.events.map((event) => (<div
                        key={event.title} className="relative isolate flex flex-col justify-end overflow-hidden aspect-video my-1 mb-2">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="flex justify-between items-end flex-row absolute p-8 text-white w-full">
                            <div className=''>
                                <h2 className='font-heading text-xl text-shadow-xl'>{event.title}</h2>
                                <p className=' font-thin text-lg text-shadow-sm ellipsis-2-lines'>{event.description}</p>
                            </div>
                            <Button variant="neutral">{eventsData.button}{" "}<ArrowUpRight className='inline' /></Button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Events;