import Teams from "@/components/app/Teams";
import Image from 'next/image';

export default function TeamPage() {
    return (
        <>
            <div className="p-28 text-center text-white bg-black text-shadow-glow relative h-[400px]">
                <Image
                    src={"https://images.unsplash.com/photo-1726512978390-fa15979cc530?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt={"teams"}
                    fill
                    className="object-cover z-0 opacity-90"
                />
                <h1 className="relative z-10 md:text-9xl text-7xl font-heading">Meet Our Team</h1>
            </div>
            <Teams />
        </>
    );
}
