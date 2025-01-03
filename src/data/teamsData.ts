type TeamMember = {
    image: string;
    name: string;
    position: string;
    linkedin: string;
    twitter: string;
    github: string;
    instagram: string;
    leetcode: string;
    codeforces: string;
    hackerrank: string;
    kaggle: string;
    portfolio: string;
    youtube: string;
    facebook: string;
    email: string;
};

type TeamData = {
    [key: string]: TeamMember[];
};

export const teamsData: TeamData = {
    mentors: [
        {
            name: "Dr. Jane Doe",
            position: "Faculty Mentor",
            linkedin: "https://linkedin.com/in/janedoe",
            twitter: "https://twitter.com/janedoe",
            github: "https://github.com/amitverma-cf",
            instagram: "b",
            leetcode: 'b',
            codeforces: 'n',
            hackerrank: 'n',
            kaggle: 'n',
            portfolio: 'n',
            youtube: 'n',
            facebook: 'n',
            email: 'n',
            image: "https://images.unsplash.com/photo-1726512978390-fa15979cc530?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ],
    boards: [
        {
            name: "John Smith",
            position: "President",
            linkedin: "https://linkedin.com/in/johnsmith",
            twitter: "",
            github: "https://github.com/johnsmith",
            instagram: '',
            leetcode: '',
            codeforces: '',
            hackerrank: '',
            kaggle: '',
            portfolio: '',
            youtube: '',
            facebook: '',
            email: '',
            image: "https://images.unsplash.com/photo-1726512978390-fa15979cc530?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Emily Johnson",
            position: "Vice President",
            linkedin: "https://linkedin.com/in/emilyjohnson",
            twitter: "https://twitter.com/emilyjohnson",
            github: "",
            instagram: '',
            leetcode: '',
            codeforces: '',
            hackerrank: '',
            kaggle: '',
            portfolio: '',
            youtube: '',
            facebook: '',
            email: '',
            image: "https://images.unsplash.com/photo-1726512978390-fa15979cc530?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, {
            name: "Emily Johnson",
            position: "Vice President",
            linkedin: "https://linkedin.com/in/emilyjohnson",
            twitter: "https://twitter.com/emilyjohnson",
            github: "",
            instagram: '',
            leetcode: '',
            codeforces: '',
            hackerrank: '',
            kaggle: '',
            portfolio: '',
            youtube: '',
            facebook: '',
            email: '',
            image: "https://images.unsplash.com/photo-1726512978390-fa15979cc530?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, {
            name: "Emily Johnson",
            position: "Vice President",
            linkedin: "https://linkedin.com/in/emilyjohnson",
            twitter: "https://twitter.com/emilyjohnson",
            github: "",
            instagram: '',
            leetcode: '',
            codeforces: '',
            hackerrank: '',
            kaggle: '',
            portfolio: '',
            youtube: '',
            facebook: '',
            email: '',
            image: "https://images.unsplash.com/photo-1726512978390-fa15979cc530?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, {
            name: "Emily Johnson",
            position: "Vice President",
            linkedin: "https://linkedin.com/in/emilyjohnson",
            twitter: "https://twitter.com/emilyjohnson",
            github: "",
            instagram: '',
            leetcode: '',
            codeforces: '',
            hackerrank: '',
            kaggle: '',
            portfolio: '',
            youtube: '',
            facebook: '',
            email: '',
            image: "https://images.unsplash.com/photo-1726512978390-fa15979cc530?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, {
            name: "Emily Johnson",
            position: "Vice President",
            linkedin: "https://linkedin.com/in/emilyjohnson",
            twitter: "https://twitter.com/emilyjohnson",
            github: "",
            instagram: '',
            leetcode: '',
            codeforces: '',
            hackerrank: '',
            kaggle: '',
            portfolio: '',
            youtube: '',
            facebook: '',
            email: '',
            image: "https://images.unsplash.com/photo-1726512978390-fa15979cc530?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ],
    volunteers: [
        {
            name: "Alice Brown",
            position: "Event Coordinator",
            linkedin: "https://linkedin.com/in/alicebrown",
            twitter: "https://twitter.com/alicebrown",
            github: "",
            instagram: '',
            leetcode: '',
            codeforces: '',
            hackerrank: '',
            kaggle: '',
            portfolio: '',
            youtube: '',
            facebook: '',
            email: '',
            image: "https://images.unsplash.com/photo-1726512978390-fa15979cc530?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Bob Wilson",
            position: "Technical Lead",
            linkedin: "",
            twitter: "https://twitter.com/bobwilson",
            github: "https://github.com/bobwilson",
            instagram: '',
            leetcode: '',
            codeforces: '',
            hackerrank: '',
            kaggle: '',
            portfolio: '',
            youtube: '',
            facebook: '',
            email: '',
            image: "https://images.unsplash.com/photo-1726512978390-fa15979cc530?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ],
};
