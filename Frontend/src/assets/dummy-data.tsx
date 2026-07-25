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
    question: "How does the AI generate product images?",
    answer:
      "Upload your model photo and product photo, and our AI combines them into realistic, high-quality marketing images in just a few seconds.",
  },
  {
    question: "Can I download the generated images?",
    answer:
      "Yes. You can preview every generated image before downloading it in high quality for use in ads, social media, websites, or online stores.",
  },
  {
    question: "How are AI videos created?",
    answer:
      "Once you're happy with your generated image, you can transform it into a realistic marketing video complete with AI-powered motion, captions, and voiceovers.",
  },
  {
    question: "Can I use the generated content commercially?",
    answer:
      "Yes. All paid plans include commercial usage rights, allowing you to use your generated images and videos for marketing, advertising, and e-commerce.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "You can upload common image formats such as JPG, JPEG, PNG, and WebP. Generated images and videos can be downloaded in high-quality formats.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time. There are no long-term contracts or hidden fees.",
  },
  {
    question: "Who is this platform built for?",
    answer:
      "Our platform is designed for e-commerce brands, Shopify store owners, Amazon sellers, content creators, marketing teams, and digital agencies looking to create professional product ads faster.",
  },
  {
    question: "Do I need any design or video editing experience?",
    answer:
      "Not at all. Simply upload your images, let the AI generate your content, and download professional-quality marketing assets in minutes.",
  },
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