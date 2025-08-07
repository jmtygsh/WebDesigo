// Location: @/data/index.ts

import {
  FiHome,
  FiGrid,
  FiBriefcase,
  FiSend,
  FiUser,
  FiMail,
} from "react-icons/fi";

// Main navigation items for the header
export const navItems = [
  { name: "Home", href: "/", icon: <FiHome /> },
  { name: "Services", href: "/services", icon: <FiGrid /> },
  { name: "Works", href: "/works", icon: <FiBriefcase /> },
  // { name: "Hire Me", href: "/hire", icon: <FiSend /> },
  { name: "About", href: "/about", icon: <FiUser /> },
];

// Separate item for the "Contact Us" button/link for distinct styling
export const contactItem = {
  name: "Contact",
  href: "/contact",
  icon: <FiMail />,
};

export const ourService = [
  {
    id: 1,
    title: "Web Design",
    url: "/contact",
  },
  {
    id: 2,
    title: "Web Development",
    url: "/contact",
  },
  {
    id: 3,
    title: "Branding",
    url: "/contact",
  },
  {
    id: 4,
    title: "Content Writing",
    url: "/contact",
  },
  {
    id: 5,
    title: "Logo Design",
    url: "/contact",
  },
  {
    id: 6,
    title: "Packaging Design",
    url: "/contact",
  },
  {
    id: 7,
    title: "SEO",
    url: "/contact",
  },
  {
    id: 8,
    title: "Social Post Design",
    url: "/contact",
  },
];

export const ourPolicy = [
  {
    id: 1,
    title: "Cookies",
    url: "/policy/cookie",
  },
  {
    id: 2,
    title: "Privacy",
    url: "/policy/privacy",
  },
  {
    id: 3,
    title: "Accessibility",
    url: "/policy/accessibility",
  },
  {
    id: 4,
    title: "Terms",
    url: "/policy/terms",
  },
  {
    id: 5,
    title: "Terms of Website Use",
    url: "/policy/terms-of-website-use",
  },
  {
    id: 6,
    title: "Data Protection Registration Certificate",
    url: "/policy/data-protection-registration-certificate",
  },
 
  {
    id: 7,
    title: "Trustwave Trusted Commerce",
    url: "/policy/trustwave-trusted-commerce",
  },
];


export const ourTeam = [
  {
    id: 1,
    url: "/assets/imgs/Developer.jpg",
    name: "James",
    experties: "WebDesign & SEO"
  }
]


// social media
import { FaLinkedinIn, FaSquareXTwitter, FaInstagram } from "react-icons/fa6"; // Import icons here

export const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/yourcompany/", // Replace with actual LinkedIn URL
    icon: FaLinkedinIn,
    hoverClass: "hover:bg-blue-600 hover:text-white",
  },
  {
    id: 2,
    name: "X (formerly Twitter)",
    href: "https://x.com/yourcompany", // Replace with actual X (Twitter) URL
    icon: FaSquareXTwitter,
    hoverClass: "hover:bg-white hover:text-black",
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://www.instagram.com/yourcompany/", // Replace with actual Instagram URL
    icon: FaInstagram,
    hoverClass: "hover:bg-pink-600 hover:text-white",
  },
];

// images
import {
  FaStar,
  FaRocket,
  FaPaintBrush,
  FaCode,
  FaBolt,
  FaSearch,
} from "react-icons/fa";

export const images = [
  {
    src: "/assets/imgs/demoWebsites/1.png",
    alt: "Website Demo 1",
    width: 456,
    height: 307,
  },
  {
    src: "/assets/imgs/demoWebsites/2.png",
    alt: "Website Demo 2",
    width: 456,
    height: 307,
  },
  {
    src: "/assets/imgs/demoWebsites/mob1.png",
    alt: "Website Mob Demo 1",
    width: 162,
    height: 307,
  },
  {
    src: "/assets/imgs/demoWebsites/3.png",
    alt: "Website Demo 3",
    width: 456,
    height: 307,
  },
  {
    src: "/assets/imgs/demoWebsites/4.png",
    alt: "Website Demo 4",
    width: 456,
    height: 307,
  },
  {
    src: "/assets/imgs/demoWebsites/mob2.png",
    alt: "Website Mob Demo 2",
    width: 162,
    height: 307,
  },
];

// end images
export const features = [
  {
    id: 1,
    icon: <FaPaintBrush className="w-4 h-4 md:w-6 md:h-6 text-white" />,
    title: "Custom Designs",
    description:
      "Tailored websites meticulously crafted to reflect your brand.",
  },
  {
    id: 2,
    icon: <FaBolt className="w-4 h-4 md:w-6 md:h-6 text-white" />,
    title: "Fast Performance",
    description:
      "Optimized for lightning-fast speed to enhance user experience.",
  },
  {
    id: 3,
    icon: <FaSearch className="w-4 h-4 md:w-6 md:h-6 text-white" />,
    title: "SEO Friendly",
    description:
      "Designed to improve SEO and increase visibility effortlessly.",
  },
];

export const whyus = [
  {
    id: 1,
    icon: "/assets/imgs/features/team.svg",
    title: "Expert Team",
    description:
      "Dedicated professionals with expertise in cutting-edge web design + development.",
  },
  {
    id: 2,
    icon: "/assets/imgs/features/client.svg",
    title: "Client-Centric Approach",
    description:
      "Tailoring solutions to meet your unique business needs and exceed expectations.",
  },
  {
    id: 3,
    icon: "/assets/imgs/features/experience.svg",
    title: "Proven Experience",
    description:
      "Years of successfully delivering impactful web solutions across diverse industries.",
  },
  {
    id: 4,
    icon: "/assets/imgs/features/delivery.svg",
    title: "Timely Delivery",
    description:
      "Meeting deadlines consistently without compromising on quality or precision.",
  },
  {
    id: 5,
    icon: "/assets/imgs/features/responsive.svg",
    title: "Responsive Solutions",
    description:
      "Ensuring seamless performance & Responsive across all devices for optimal user experience.",
  },
  {
    id: 6,
    icon: "/assets/imgs/features/transparent.svg",
    title: "Transparent Communication",
    description:
      "Clear, open lines of communication throughout every stage of your project.s",
  },
];

export const ourapproach = [
  {
    id: 1,
    icon: <FaStar className="w-4 h-4 md:w-6 md:h-6 text-white" />,
    title: "Discovery Phase",
    description:
      "Understanding your brand, objectives, and target audience to define project goals.",
  },
  {
    id: 2,
    icon: <FaRocket className="w-4 h-4 md:w-6 md:h-6 text-white" />,
    title: "Design Concept",
    description:
      "Creating initial design concepts based on insights gathered during the discovery phase.",
  },
  {
    id: 3,
    icon: <FaPaintBrush className="w-4 h-4 md:w-6 md:h-6 text-white" />,
    title: "Development & Testing",
    description:
      "Building and refining the website, ensuring functionality and compatibility across devices.",
  },
  {
    id: 4,
    icon: <FaCode className="w-4 h-4 md:w-6 md:h-6 text-white" />,
    title: "Launch & Support",
    description:
      "Deploying the finalized website and providing ongoing support to ensure long-term success.",
  },
];

export const toolWeUse = [
  { src: "/assets/imgs/tools/figma.svg", alt: "Figma", width: 40, height: 40 },
  { src: "/assets/imgs/tools/gsap.svg", alt: "Gsap", width: 40, height: 40 },
  {
    src: "/assets/imgs/tools/nextjs.svg",
    alt: "Nextjs",
    width: 40,
    height: 40,
  },
  {
    src: "/assets/imgs/tools/react-js.svg",
    alt: "React js",
    width: 40,
    height: 40,
  },
  {
    src: "/assets/imgs/tools/shopify.svg",
    alt: "Shopify",
    width: 40,
    height: 40,
  },
  { src: "/assets/imgs/tools/vite.svg", alt: "Vite", width: 40, height: 40 },
  {
    src: "/assets/imgs/tools/wordpress.svg",
    alt: "Wordpress",
    width: 40,
    height: 40,
  },
];

export const toolWeUseDetails = [
  {
    id: 1,
    icon: "/assets/imgs/tools/figma.svg",
    title: "Figma",
    description: "Collaborative design and prototyping tool online.",
  },
  {
    id: 2,
    icon: "/assets/imgs/tools/gsap.svg",
    title: "GSAP",
    description: "Interactive prototypes for advanced animations website.",
  },
  {
    id: 3,
    icon: "/assets/imgs/tools/nextjs.svg",
    title: "Next Js",
    description: "E-commerce platform for online shopping websites.",
  },
  {
    id: 4,
    icon: "/assets/imgs/tools/react-js.svg",
    title: "React JS",
    description: "All-in-one workspace for notes and project tasks.",
  },
  {
    id: 5,
    icon: "/assets/imgs/tools/shopify.svg",
    title: "Shopify",
    description: "All-in-one workspace for notes and project tasks.",
  },
  {
    id: 6,
    icon: "/assets/imgs/tools/vite.svg",
    title: "Vite",
    description: "All-in-one workspace for notes and project tasks.",
  },
  {
    id: 7,
    icon: "/assets/imgs/tools/wordpress.svg",
    title: "Wordpress",
    description: "All-in-one workspace for notes and project tasks.",
  },
  {
    id: 8,
    icon: "/assets/imgs/tools/wordpress.svg",
    title: "Wordpress",
    description: "All-in-one workspace for notes and project tasks.",
  },
  {
    id: 9,
    icon: "/assets/imgs/tools/wordpress.svg",
    title: "Wordpress",
    description: "All-in-one workspace for notes and project tasks.",
  },
];

export const projectList = [
  {
    id: 1,
    src: "/assets/imgs/projects/project-1.avif",
    title: "Clever — Saas Landing Page",
    pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
    url: "/project-clever",
    text: "View Projects",
  },
  {
    id: 2,
    src: "/assets/imgs/projects/project-2.avif",
    title: "Clever — Saas Landing Page",
    pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
    url: "/project-clever",
    text: "View Projects",
  },
  {
    id: 3,
    src: "/assets/imgs/projects/project-3.avif",
    title: "Clever — Saas Landing Page",
    pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
    url: "/project-clever",
    text: "View Projects",
  },
  {
    id: 4,
    src: "/assets/imgs/projects/project-4.avif",
    title: "Clever — Saas Landing Page",
    pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
    url: "/project-clever",
    text: "View Projects",
  },
];

export const serviceCards = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Crafting visually captivating websites that resonate with your audience and elevate your brand identity.",
    btnUrl: "/contact",
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
    description:
      "Building robust websites with advanced functionality and seamless performance, tailored to your business needs.",
    btnUrl: "/contact",
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
  },
  {
    id: 7,
    icon: "/assets/imgs/services/Social-Post-Design.svg",
    title: "Web Design",
    w: 20,
    h: 20,
  },
  {
    id: 8,
    icon: "/assets/imgs/services/Social-Post-Design.svg",
    title: "Web Development",
    w: 20,
    h: 20,
  },
];

export const countNumber = [
  {
    id: 1,
    count: 150,
    sign: "+",
    des: "Happy Customers",
  },
  {
    id: 2,
    count: 50,
    sign: "+",
    des: "Projects Completed",
  },
  {
    id: 3,
    count: 4,
    sign: "+",
    des: "Years of Experience",
  },
  {
    id: 4,
    count: 86,
    sign: "+",
    des: "Team Members",
  },
];

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
  },
  {
    id: 5,
    icon: "/assets/imgs/trustedCompany/c5.svg",
    title: "trustedCompany",
  },
];

export const testimonials = [
  {
    id: 1,
    src: "/assets/imgs/profiles/profile1.jpg", // Placeholder image path
    name: "Sophia Chen",
    username: "@sophiaC",
    comment:
      "Webdesigo transformed our outdated website into a modern, responsive masterpiece. Their design team truly understood our vision, and the development process was seamless!",
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
    comment:
      "The SEO strategy from Webdesigo has significantly boosted our organic traffic and search rankings. We're seeing a remarkable return on investment and couldn't be happier with their expertise in website optimization.",
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
    comment:
      "From initial concept to final launch, Webdesigo provided comprehensive website solutions. Their attention to detail in both design and functionality was outstanding, making our online presence truly shine.",
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
    comment:
      "Webdesigo's development team is incredibly skilled. They built a custom feature for our e-commerce site that exceeded our expectations, improving user experience and conversion rates dramatically. Highly recommend their technical prowess!",
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
    comment:
      "Our website's performance has never been better thanks to Webdesigo's ongoing maintenance and optimization services. They are proactive and always ensure our site is running smoothly and securely.",
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
    question: "What technologies do you use to build custom websites?",
    answer:
      "We specialize in building high-performance, custom web solutions using modern JavaScript frameworks. Our primary stack includes Next.js and React.js, which allow us to create fast, scalable, and interactive websites tailored precisely to your business needs.",
  },
  {
    id: 2,
    question: "What is your process for starting a new project?",
    answer:
      "Our process begins with a discovery phase where we discuss your goals, target audience, and requirements. We then move to strategy and design, followed by development and client feedback rounds. Finally, we launch the project and provide any necessary training and support.",
  },
  {
    id: 3,
    question: "How much do your services cost?",
    answer:
      "Our pricing is tailored to the specific needs of each project. After our initial consultation, we'll provide a detailed proposal with a custom quote based on the scope of work. We offer project-based pricing as well as hourly rates for smaller tasks.",
  },
  {
    id: 4,
    question: "How long will it take to complete my project?",
    answer:
      "Timelines vary depending on the project's complexity. A simple logo or branding package might take 1-3 weeks, while a full website design and development project can take anywhere from 6 to 12 weeks. We will provide a detailed project timeline in our proposal.",
  },
  {
    id: 5,
    question:
      "What if I'm not happy with the design? How many revisions are included?",
    answer:
      "We want you to love the final product! Our process includes a set number of revision rounds (typically two or three) at key stages. We'll work closely with you to ensure the final design meets your vision and goals.",
  },
  {
    id: 6,
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. All websites we design and develop are fully responsive, meaning they will adapt seamlessly to provide an optimal viewing experience on all devices, including desktops, tablets, and smartphones.",
  },
  {
    id: 7,
    question: "Will I be able to update the website myself?",
    answer:
      "Yes. We typically build websites on user-friendly Content Management Systems (CMS) like WordPress or provide custom admin panels. This allows you to easily update content, images, and blog posts. We provide training to ensure you're comfortable managing your site.",
  },
  {
    id: 8,
    question: "What is SEO and why do I need it?",
    answer:
      "SEO stands for Search Engine Optimization. It's the practice of increasing your website's visibility on search engines like Google. Good SEO helps more potential customers find your business when they search for the products or services you offer.",
  },
  {
    id: 9,
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. While some initial improvements can be seen in the first 1-3 months, it typically takes 4-6 months to see significant and sustainable results. Consistency is key to improving and maintaining your search engine ranking.",
  },
  {
    id: 10,
    question: "What's included in a branding package?",
    answer:
      "Our core branding package typically includes logo design, a defined color palette, typography selection, and a comprehensive brand style guide. We can also expand this to include business cards, letterheads, and other marketing collateral.",
  },
  {
    id: 11,
    question: "What file formats will I receive for my logo design?",
    answer:
      "You will receive your final logo in a variety of formats for both web and print use, including vector files (AI, EPS, SVG) which are scalable to any size, and raster files (PNG, JPG) for immediate use online.",
  },
  {
    id: 12,
    question: "What do you need from me for a packaging design project?",
    answer:
      "For packaging design, we need your final logo, all text content (like product name, descriptions, ingredients), any barcodes, and a die-line template from your printer. If you don't have a printer yet, we can help source one.",
  },
  {
    id: 13,
    question: "Do you create social media post templates?",
    answer:
      "Yes! We can design a set of custom, reusable templates for your social media platforms (like Instagram or Facebook). These templates will align with your branding and make it easy for you to create consistent, professional-looking posts.",
  },
];

// service pages
export const ourAllServices = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Crafting visually captivating websites that resonate with your audience and elevate your brand identity.",
    btnUrl: "/contact",
    btnText: "Contact Us",
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
    description:
      "Building robust websites with advanced functionality and seamless performance, tailored to your business needs.",
    btnUrl: "/contact",
    btnText: "Contact Us",
    features: [
      "Custom backend development.",
      "Ongoing maintenance and support.",
      "Security and data protection.",
      "Content management systems (CMS).",
      "API integration and development.",
    ],
  },
  {
    id: 3,
    title: "Content Writing",
    description:
      "Delivering compelling and SEO-optimized content that aligns with your brand voice and engages your audience.",
    btnUrl: "/contact",
    btnText: "Contact Us",
    features: [
      "SEO-optimized blog posts and articles.",
      "Professional website copywriting.",
      "Brand-consistent tone and messaging.",
      "Engaging product descriptions.",
      "Proofreading and editing services.",
    ],
  },
  {
    id: 4,
    title: "Branding",
    description:
      "Creating a powerful and cohesive brand identity that makes a lasting impression and drives customer loyalty.",
    btnUrl: "/contact",
    btnText: "Contact Us",
    features: [
      "Brand strategy and positioning.",
      "Visual identity development.",
      "Color palette and typography selection.",
      "Voice and tone guidelines.",
      "Comprehensive brand guidelines.",
    ],
  },
  {
    id: 5,
    title: "Social Post Design",
    description:
      "Designing eye-catching social media graphics that enhance engagement and maintain brand consistency.",
    btnUrl: "/contact",
    btnText: "Contact Us",
    features: [
      "Platform-specific post designs.",
      "Branded templates and themes.",
      "Animation and motion graphics.",
      "Story and reel visuals.",
      "Consistent visual storytelling.",
    ],
  },
  {
    id: 6,
    title: "SEO",
    description:
      "Optimizing your website to improve visibility on search engines, attract organic traffic, and boost conversions.",
    btnUrl: "/contact",
    btnText: "Contact Us",
    features: [
      "Keyword research and targeting.",
      "On-page SEO optimization.",
      "Technical SEO audits.",
      "Backlink building strategies.",
      "Analytics and performance reporting.",
    ],
  },
  {
    id: 7,
    title: "Packaging Design",
    description:
      "Designing innovative and functional packaging that communicates your brand message and attracts customers.",
    btnUrl: "/contact",
    btnText: "Contact Us",
    features: [
      "Custom packaging concepts.",
      "Brand-consistent visual design.",
      "Structural and dieline planning.",
      "Eco-friendly material options.",
      "Retail shelf appeal design.",
    ],
  },
  {
    id: 8,
    title: "Logo Design",
    description:
      "Crafting unique and memorable logos that visually represent your brand’s identity and values.",
    btnUrl: "/contact",
    btnText: "Contact Us",
    features: [
      "Multiple concept explorations.",
      "Scalable vector formats.",
      "Color and black-and-white variations.",
      "Typography and iconography selection.",
      "Final files for web and print.",
    ],
  },
];

export const projectAllList = [
  {
    id: 1,
    src: "/assets/imgs/projects/project-1.avif",
    title: "Clever — Saas Landing Page",
    pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
    url: "/project-clever",
    text: "View Projects",
  },
  {
    id: 2,
    src: "/assets/imgs/projects/project-2.avif",
    title: "Clever — Saas Landing Page",
    pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
    url: "/project-clever",
    text: "View Projects",
  },
  {
    id: 3,
    src: "/assets/imgs/projects/project-3.avif",
    title: "Clever — Saas Landing Page",
    pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
    url: "/project-clever",
    text: "View Projects",
  },
  {
    id: 4,
    src: "/assets/imgs/projects/project-4.avif",
    title: "Clever — Saas Landing Page",
    pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
    url: "/project-clever",
    text: "View Projects",
  },
  {
    id: 5,
    src: "/assets/imgs/projects/project-4.avif",
    title: "Clever — Saas Landing Page",
    pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
    url: "/project-clever",
    text: "View Projects",
  },
  {
    id: 6,
    src: "/assets/imgs/projects/project-4.avif",
    title: "Clever — Saas Landing Page",
    pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
    url: "/project-clever",
    text: "View Projects",
  },
  {
    id: 7,
    src: "/assets/imgs/projects/project-4.avif",
    title: "Clever — Saas Landing Page",
    pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
    url: "/project-clever",
    text: "View Projects",
  },
  {
    id: 8,
    src: "/assets/imgs/projects/project-4.avif",
    title: "Clever — Saas Landing Page",
    pera: "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
    url: "/project-clever",
    text: "View Projects",
  },
];
