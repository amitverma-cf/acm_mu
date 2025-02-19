import Link from 'next/link'
import React from 'react'

const aboutData = {
    title: "About",
    content: [
        "The ACM Chapter at Mahindra University serves as a vibrant hub for technology enthusiasts, aspiring innovators, and passionate learners. Our chapter is dedicated to fostering a culture of innovation, collaboration, and technical excellence among students. As a student-led organization affiliated with the prestigious Association for Computing Machinery (ACM), the chapter aims to bridge the gap between academic knowledge and real-world application. We organize an array of events, workshops, hackathons, and guest lectures featuring industry leaders, all designed to keep our members at the forefront of technological advancements. From mastering cutting-edge fields like artificial intelligence, machine learning, and cybersecurity to exploring foundational concepts in programming and algorithms, our chapter provides a platform for students to enhance their technical skills and develop a growth-oriented mindset.",
        "At the ACM Chapter, we believe in inclusivity and the power of community. Our initiatives encourage interdisciplinary collaboration, inviting students from diverse academic backgrounds to join hands and create impactful solutions for complex problems. We also actively participate in ACM-sponsored competitions, such as the ACM-ICPC and various coding contests, giving our members a chance to showcase their skills on national and global platforms. Moreover, the chapter is committed to mentoring and supporting its members through peer learning programs, career guidance sessions, and project showcases, ensuring they are well-prepared for their professional journeys.",
        "Beyond academics, the ACM Chapter emphasizes the importance of ethical computing and social responsibility. We strive to leverage technology for the greater good by organizing projects and activities focused on sustainability, accessibility, and community welfare. Whether you're a seasoned coder, a curious beginner, or someone passionate about technology's potential to shape the future, the ACM Chapter at Mahindra University offers you an unparalleled opportunity to learn, grow, and make a difference. Together, let's code, innovate, and transform ideas into reality!"
    ],
    addressTitle: "Meet us at:",
    address: "Mahindra University, Survey No. 62/1A, Bahadurpally, Jeedimetla,\n Hyderabad, Telangana 500043",
    mailTitle: "Mail us at:",
    email: "acm@mahindrauniversity.edu.in"
};

const About = () => {
    return (
        <>
            <div className='p-8 md:p-16 lg:p-24 border-t-4 border-black lg:text-xl md:text-lg text-base'>
                {aboutData.content.map((c, i) => (
                    <span key={i}><p>
                        {c}
                    </p>
                        <br />
                    </span>
                ))}
                <br /><br />
                <div className='flex flex-row flex-wrap gap-16 justify-between'>
                    <p>
                        <strong>{aboutData.addressTitle}</strong><br />
                        {aboutData.address}
                    </p>
                    <p>
                        <strong>{aboutData.mailTitle}</strong><br /> <Link
                            className="font-bold hover:text-blue-500 text-blue-800 block"
                            href={`mailto:${aboutData.email}`}
                        >
                            {aboutData.email}
                        </Link>
                    </p>
                </div>

            </div>
        </>
    )
}

export default About