export const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Works", href: "/our-works" },
    { name: "Hire", href: "/timeline" },
    { name: "About", href: "/waitlist" },

]

export const ourService = [
    {
        id: 1,
        title: "Branding",
        url: "/"
    },
    {
        id: 2,
        title: "Content Writing",
        url: "/"
    },
    {
        id: 3,
        title: "Logo Design",
        url: "/"
    },
    {
        id: 4,
        title: "Packaging Design",
        url: "/"
    },
    {
        id: 5,
        title: "SEO",
        url: "/"
    },
    {
        id: 6,
        title: "Social Post Design",
        url: "/"
    }

]

export const ourExpertise = [
    {
        id: 1,
        title: "Web Design",
        url: "/"
    },
    {
        id: 2,
        title: "Web Development",
        url: "/"
    },
]




// social media 

import { FaLinkedinIn, FaSquareXTwitter, FaInstagram } from 'react-icons/fa6'; // Import icons here

export const socialLinks = [
    {
        id: 1,
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/yourcompany/", // Replace with actual LinkedIn URL
        icon: FaLinkedinIn,
        hoverClass: "hover:bg-blue-600 hover:text-white"
    },
    {
        id: 2,
        name: "X (formerly Twitter)",
        href: "https://x.com/yourcompany", // Replace with actual X (Twitter) URL
        icon: FaSquareXTwitter,
        hoverClass: "hover:bg-white hover:text-black"
    },
    {
        id: 3,
        name: "Instagram",
        href: "https://www.instagram.com/yourcompany/", // Replace with actual Instagram URL
        icon: FaInstagram,
        hoverClass: "hover:bg-pink-600 hover:text-white"
    }
];

// images 
import { FaStar, FaRocket, FaPaintBrush, FaCode, FaBolt, FaSearch } from "react-icons/fa";

export const images = [
    { src: "/assets/imgs/demoWebsites/1.png", alt: "Website Demo 1", width: 456, height: 307 },
    { src: "/assets/imgs/demoWebsites/2.png", alt: "Website Demo 2", width: 456, height: 307 },
    { src: "/assets/imgs/demoWebsites/mob1.png", alt: "Website Mob Demo 1", width: 162, height: 307 },
    { src: "/assets/imgs/demoWebsites/3.png", alt: "Website Demo 3", width: 456, height: 307 },
    { src: "/assets/imgs/demoWebsites/4.png", alt: "Website Demo 4", width: 456, height: 307 },
    { src: "/assets/imgs/demoWebsites/mob2.png", alt: "Website Mob Demo 2", width: 162, height: 307 },
];


// end images 

export const features = [
    {
        id: 1,
        icon: <FaPaintBrush className="w-6 h-6 text-white" />,
        title: "Custom Designs",
        description: "Tailored websites meticulously crafted to reflect your brand."
    },
    {
        id: 2,
        icon: <FaBolt className="w-6 h-6 text-white" />,
        title: "Fast Performance",
        description: "Optimized for lightning-fast speed to enhance user experience."
    },
    {
        id: 3,
        icon: <FaSearch className="w-6 h-6 text-white" />,
        title: "SEO Friendly",
        description: "Designed to improve SEO and increase visibility effortlessly."
    }
];

export const whyus = [
    {
        id: 1,
        icon: "/assets/imgs/features/team.svg",
        title: "Expert Team",
        description: "Dedicated professionals with expertise in cutting-edge web design + development."
    },
    {
        id: 2,
        icon: "/assets/imgs/features/client.svg",
        title: "Client-Centric Approach",
        description: "Tailoring solutions to meet your unique business needs and exceed expectations."
    },
    {
        id: 3,
        icon: "/assets/imgs/features/experience.svg",
        title: "Proven Experience",
        description: "Years of successfully delivering impactful web solutions across diverse industries."
    },
    {
        id: 4,
        icon: "/assets/imgs/features/delivery.svg",
        title: "Timely Delivery",
        description: "Meeting deadlines consistently without compromising on quality or precision."
    },
    {
        id: 5,
        icon: "/assets/imgs/features/responsive.svg",
        title: "Responsive Solutions",
        description: "Ensuring seamless performance & Responsive across all devices for optimal user experience."
    },
    {
        id: 6,
        icon: "/assets/imgs/features/transparent.svg",
        title: "Transparent Communication",
        description: "Clear, open lines of communication throughout every stage of your project.s"
    }
];

export const ourapproach = [
    {
        id: 1,
        icon: <FaStar className="w-6 h-6 text-white" />,
        title: "Discovery Phase",
        description: "Understanding your brand, objectives, and target audience to define project goals."
    },
    {
        id: 2,
        icon: <FaRocket className="w-6 h-6 text-white" />,
        title: "Design Concept",
        description: "Creating initial design concepts based on insights gathered during the discovery phase."
    },
    {
        id: 3,
        icon: <FaPaintBrush className="w-6 h-6 text-white" />,
        title: "Development & Testing",
        description: "Building and refining the website, ensuring functionality and compatibility across devices."
    },
    {
        id: 4,
        icon: <FaCode className="w-6 h-6 text-white" />,
        title: "Launch & Support",
        description: "Deploying the finalized website and providing ongoing support to ensure long-term success."
    }
];

export const toolWeUse = [
    { src: "/assets/imgs/tools/figma.svg", alt: "Figma", width: 40, height: 40 },
    { src: "/assets/imgs/tools/gsap.svg", alt: "Gsap", width: 40, height: 40 },
    { src: "/assets/imgs/tools/nextjs.svg", alt: "Nextjs", width: 40, height: 40 },
    { src: "/assets/imgs/tools/react-js.svg", alt: "React js", width: 40, height: 40 },
    { src: "/assets/imgs/tools/shopify.svg", alt: "Shopify", width: 40, height: 40 },
    { src: "/assets/imgs/tools/vite.svg", alt: "Vite", width: 40, height: 40 },
    { src: "/assets/imgs/tools/wordpress.svg", alt: "Wordpress", width: 40, height: 40 },
]

export const toolWeUseDetails = [
    {
        id: 1,
        icon: "/assets/imgs/tools/figma.svg",
        title: "Figma",
        description: "Collaborative design and prototyping tool online."
    },
    {
        id: 2,
        icon: "/assets/imgs/tools/gsap.svg",
        title: "GSAP",
        description: "Interactive prototypes for advanced animations website."
    },
    {
        id: 3,
        icon: "/assets/imgs/tools/nextjs.svg",
        title: "Next Js",
        description: "E-commerce platform for online shopping websites."
    },
    {
        id: 4,
        icon: "/assets/imgs/tools/react-js.svg",
        title: "React JS",
        description: "All-in-one workspace for notes and project tasks."
    },
    {
        id: 5,
        icon: "/assets/imgs/tools/shopify.svg",
        title: "Shopify",
        description: "All-in-one workspace for notes and project tasks."
    },
    {
        id: 6,
        icon: "/assets/imgs/tools/vite.svg",
        title: "Vite",
        description: "All-in-one workspace for notes and project tasks."
    },
    {
        id: 7,
        icon: "/assets/imgs/tools/wordpress.svg",
        title: "Wordpress",
        description: "All-in-one workspace for notes and project tasks."
    },
    {
        id: 8,
        icon: "/assets/imgs/tools/wordpress.svg",
        title: "Wordpress",
        description: "All-in-one workspace for notes and project tasks."
    },
    {
        id: 9,
        icon: "/assets/imgs/tools/wordpress.svg",
        title: "Wordpress",
        description: "All-in-one workspace for notes and project tasks."
    }
];

export const projectList = [
    {
        id: 1,
        src: "/assets/imgs/projects/project-1.avif",
        title: "Clever — Saas Landing Page",
        pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
        url: "/project-clever",
        text: "View Projects"
    },
    {
        id: 2,
        src: "/assets/imgs/projects/project-2.avif",
        title: "Clever — Saas Landing Page",
        pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
        url: "/project-clever",
        text: "View Projects"
    },
    {
        id: 3,
        src: "/assets/imgs/projects/project-3.avif",
        title: "Clever — Saas Landing Page",
        pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
        url: "/project-clever",
        text: "View Projects"
    },
    {
        id: 4,
        src: "/assets/imgs/projects/project-4.avif",
        title: "Clever — Saas Landing Page",
        pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
        url: "/project-clever",
        text: "View Projects"
    }

]


export const serviceCards = [
    {
        id: 1,
        title: "Web Design",
        description: "Crafting visually captivating websites that resonate with your audience and elevate your brand identity.",
        btnUrl: "/contact-us",
        btnText: "Contact Us",
        // Use an array for 'features' or 'listItems'
        features: [
            "Customized visual aesthetics.",
            "User-centric design approach.",
            "Responsive and mobile-friendly.",
            "Intuitive user interface (UI).",
            "Interactive and engaging layouts.",
        ],
    },
    {
        id: 2,
        title: "Web Development",
        description: "Building robust websites with advanced functionality and seamless performance, tailored to your business needs.",
        btnUrl: "/contact-us",
        btnText: "Contact Us",
        // Use an array here too
        features: [
            "Custom backend development.",
            "Ongoing maintenance and support.",
            "Security and data protection.",
            "Content management systems (CMS).",
            "API integration and development.",
        ],
    },
];


export const seamlessLoopService = [
    {
        id: 1,
        icon: "/assets/imgs/services/Branding.svg",
        title: "Branding",
        w: 20,
        h: 20,
    },
    {
        id: 2,
        icon: "/assets/imgs/services/Content-Writing.svg",
        title: "Content Writing",
        w: 20,
        h: 20,
    },
    {
        id: 3,
        icon: "/assets/imgs/services/Logo-Design.svg",
        title: "Logo Design",
        w: 20,
        h: 20,
    },
    {
        id: 4,
        icon: "/assets/imgs/services/Packaging-Design.svg",
        title: "Packaging Design",
        w: 20,
        h: 20,
    },
    {
        id: 5,
        icon: "/assets/imgs/services/SEO.svg",
        title: "SEO",
        w: 20,
        h: 20,
    },
    {
        id: 6,
        icon: "/assets/imgs/services/Social-Post-Design.svg",
        title: "Social Post Design",
        w: 20,
        h: 20,
    }

]


export const countNumber = [
    {
        id: 1,
        count: 150,
        sign: '+',
        des: 'Happy Customers'
    },
    {
        id: 2,
        count: 50,
        sign: '+',
        des: 'Projects Completed'
    },
    {
        id: 3,
        count: 4,
        sign: '+',
        des: 'Years of Experience'
    },
    {
        id: 4,
        count: 86,
        sign: '+',
        des: 'Team Members'
    },
]

export const trustedByLeadingBrands = [
    {
        id: 1,
        icon: "/assets/imgs/trustedCompany/c1.svg",
        title: "trustedCompany",
    },
    {
        id: 2,
        icon: "/assets/imgs/trustedCompany/c2.svg",
        title: "trustedCompany",
    },
    {
        id: 3,
        icon: "/assets/imgs/trustedCompany/c3.svg",
        title: "trustedCompany",
    },
    {
        id: 4,
        icon: "/assets/imgs/trustedCompany/c4.svg",
        title: "trustedCompany",
    }, {
        id: 5,
        icon: "/assets/imgs/trustedCompany/c5.svg",
        title: "trustedCompany",
    },

]


export const testimonials = [
    {
        id: 1,
        src: "/assets/imgs/profiles/profile1.jpg", // Placeholder image path
        name: "Sophia Chen",
        username: "@sophiaC",
        comment: "Webdesigo transformed our outdated website into a modern, responsive masterpiece. Their design team truly understood our vision, and the development process was seamless!",
    },
    {
        id: 2,
        src: "/assets/imgs/profiles/profile2.jpg", // Placeholder image path
        name: "Liam O'Connell",
        username: "@liamO",
        comment: "Exceptional SEO results!",
    },
    {
        id: 3,

        name: "Ava Rodriguez",
        username: "@avaR",
        comment: "The SEO strategy from Webdesigo has significantly boosted our organic traffic and search rankings. We're seeing a remarkable return on investment and couldn't be happier with their expertise in website optimization.",
    },
    {
        id: 4,

        name: "Noah Patel",
        username: "@noahP",
        comment: "Top-notch web development.",
    },
    {
        id: 5,

        name: "Isabella Garcia",
        username: "@bellaG",
        comment: "From initial concept to final launch, Webdesigo provided comprehensive website solutions. Their attention to detail in both design and functionality was outstanding, making our online presence truly shine.",
    },
    {
        id: 6,

        name: "Mason Kim",
        username: "@masonK",
        comment: "Great website support.",
    },
    {
        id: 7,

        name: "Charlotte White",
        username: "@charlotteW",
        comment: "Webdesigo's development team is incredibly skilled. They built a custom feature for our e-commerce site that exceeded our expectations, improving user experience and conversion rates dramatically. Highly recommend their technical prowess!",
    },
    {
        id: 8,

        name: "Ethan Brown",
        username: "@ethanB",
        comment: "Fantastic design work!",
    },
    {
        id: 9,

        name: "Amelia Jones",
        username: "@ameliaJ",
        comment: "Our website's performance has never been better thanks to Webdesigo's ongoing maintenance and optimization services. They are proactive and always ensure our site is running smoothly and securely.",
    },
    {
        id: 10,

        name: "Lucas Davis",
        username: "@lucasD",
        comment: "Highly recommend their services!",
    },
];


export const faqData = [
    {
        id: 1,
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy on all products. Items must be in their original condition with all tags and packaging intact. Refunds are processed within 5-7 business days."
    },
    {
        id: 2,
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 5-7 business days within the domestic region. Expedited shipping options are available at checkout for an additional fee."
    },
    {
        id: 3,
        question: "Do you offer international shipping?",
        answer: "Yes, we do! International shipping times and costs vary depending on the destination. You can get an estimate by entering your address at checkout."
    },
    {
        id: 4,
        question: "Can I change or cancel my order?",
        answer: "If your order has not yet been shipped, you may be able to change or cancel it. Please contact our support team immediately with your order number to see what options are available."
    },
    {
        id: 5,
        question: "How do I track my order?",
        answer: "Once your order ships, you will receive an email with a tracking number and a link to the carrier's website. You can also log into your account to check the status of your order at any time."
    }
];
