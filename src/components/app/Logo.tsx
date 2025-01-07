import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link
            className="text-center"
            href={'/'}
        >
            <span className="font-heading text-xl text-center justify-center border-2 border-r-4 border-b-4 p-1.5 rounded-md border-black bg-blue-500 text-white">ACM</span>
            <span className="md:text-xl text-base font-thin">{" "}chapter at{" "}</span>
            <span className="font-bold md:text-xl text-base text-red-500">MU</span>
        </Link>
    )
}

export default Logo