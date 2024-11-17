
import {
  chromecast,
  disc02,
  reactl,
  android,
  css,
  html,
  javascript,
  php,
  tailwind,
  typescript,

  discordBlack,
  facebook,

  file02,

  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,

  plusSquare,

  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,

  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";


export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About us",
    url: "/about",
  },
  {
    id: "2",
    title: "Services",
    url: "/services",
  },
  {
    id: "3",
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: "4",
    title: "FAQ",
    url: "/faq",
  },
  {
    id: "5",
    title: "Contact us",
    url: "/contactus",
    onlyMobile: true,
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const  NNSolutionsServices = [
  "Custom software solutions designed to fit your every need.",
  "Innovation drives our approach, ensuring you stay ahead.",
  "Empowering growth as a partner you can count on.",
];

export const  NNSolutionsServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Requirements",
    text: "We start by understanding your vision and gathering essential project requirements to create a clear roadmap for success.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Kickoff",
    text: "We kick off the project by aligning strategies, setting timelines, and defining roles to ensure a smooth development process.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "Development",
    text: "Our developers bring your vision to life, creating a responsive and user-friendly website using the latest technologies.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "3",
    title: "Deliver",
    text: "After thorough testing, we deliver the final product, ensuring it meets your expectations and providing ongoing support for smooth operation.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
  },
];

export const collabText =
  "At NN Solutions, we are driven by a passion for delivering exceptional software solutions. Our commitment to excellence is reflected in everything we do.";

export const collabContent = [
  {
    id: "0",
    title: "Tailor-made software for your unique needs",
    text: collabText,
  },
  {
    id: "1",
    title: "Innovation at the core of our approach",
  },
  {
    id: "2",
    title: "Trusted partner for business growth",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "android",
    icon: android,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "css",
    icon: css,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "html",
    icon: html,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "javascript",
    icon: javascript,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "php",
    icon: php,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "react",
    icon: reactl,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Tailwind",
    icon: tailwind,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Typescript",
    icon: typescript,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
