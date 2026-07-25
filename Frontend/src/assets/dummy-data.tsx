import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: 'Easily upload your assets and let our AI do the rest.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generation',
        desc: 'Optimized models deliver output in seconds with great quality.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring product shots to life with short-form, social-ready video content.'
    }
];

export const plansData = [
//   {
//     id: "free",
//     name: "Free",
//     price: "$0",
//     desc: "Try the platform before upgrading.",
//     credits: "10 Images • 2 Videos / month",
//     features: [
//       "10 AI image generations",
//       "2 AI video generations",
//       "Watermarked downloads",
//       "720p video export",
//       "Community support",
//     ],
//   },
  {
    id: "starter",
    name: "Starter",
    price: "$19",
    desc: "Perfect for creators and small businesses.",
    credits: "100 Images • 20 Videos / month",
    features: [
      "100 AI image generations",
      "20 AI video generations",
      "1080p HD export",
      "AI voice & captions",
      "No watermark",
      "Commercial use",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$49",
    desc: "Best for growing brands and agencies.",
    credits: "400 Images • 100 Videos / month",
    popular: true,
    features: [
      "400 AI image generations",
      "100 AI video generations",
      "Priority rendering",
      "Premium AI models",
      "Ultra HD export",
      "Brand kit",
      "Priority support",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    price: "$149",
    desc: "For agencies managing multiple brands.",
    credits: "1500 Images • 400 Videos / month",
    features: [
      "1500 AI image generations",
      "400 AI video generations",
      "Multiple workspaces",
      "Team collaboration",
      "API access",
      "Dedicated account manager",
      "24/7 priority support",
    ],
  },
];

export const faqData = [
    {
        question: 'What services does your agency provide?',
        answer: 'We offer end-to-end digital services including brand strategy, UI/UX design, web and app development and growth-focused marketing solutions.'
    },
    {
        question: 'Do you work with startups or only large companies?',
        answer: 'We work with startups, growing businesses and established brands. Our process is flexible and tailored to match your goals and scale.'
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary by scope, but most projects take between 2–6 weeks. We provide a clear timeline after the discovery phase.'
    },
    {
        question: 'Do you offer ongoing support after launch?',
        answer: 'Yes. We offer maintenance, optimization and growth support packages to ensure your product continues to perform and evolve.'
    }
];

export const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Home", url: "#" },
            { name: "Services", url: "#" },
            { name: "Work", url: "#" },
            { name: "Contact", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];