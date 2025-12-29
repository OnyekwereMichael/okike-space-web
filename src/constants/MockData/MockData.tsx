import whychooseImg1 from '../../assets/why-choose-img1.png'
import whychooseImg2 from '../../assets/why-choose-img2.png'
import whychooseImg3 from '../../assets/why-choose-img3.png'
import whychooseImg4 from '../../assets/why-choose-img4.png'

import CardBookIcon from "../../assets/how-itworks-img.png";
import CardScheduleIcon from "../../assets/how-it-works2.png";
import CardUserIcon from "../../assets/how-it-works3.png";
import O1 from "../../assets/01.png";
import O2 from "../../assets/02.png";
import O3 from "../../assets/03.png";

import shootSpacesImg from '../../assets/shoot.png';
import event from '../../assets/event.png'
import lifestyle from '../../assets/lidestyle.png'
import man from '../../assets/man.png';
export const WhyChooseData = [
  {
    img: whychooseImg1,
    title: 'Verified Hosts Only',
    description: 'Every host is vetted through our rigorous identity, location, and property check process. Book with confidence, knowing the person and the space are real.'
  },
  {
    img: whychooseImg2,
    title: 'Secure Payments',
    description: 'Payment is held safely by Okike until your booking is completed. Never worry about last-minute cancellations or losing your funds.'
  },
  {
    img: whychooseImg3,
    title: 'Transparent Pricing',
    description: 'The price you see is the price you pay. View the full, itemized breakdown—no hidden fees, no surprise charges, and no haggling necessary.'
  },
  {
    img: whychooseImg4,
    title: 'Real-Time Availability',
    description: 'Stop the chaos of endless DMs. View accurate, real-time calendars and book instantly or with a clear request. Your time is valuable.'
  },
];

export const cards = [
  {
    id: 1,
    title: "Book",
    text: "Choose from curated, verified spaces and secure your booking with transparent pricing.",
    icon: CardBookIcon,
    badge: O1,
  },
  {
    id: 2,
    title: "Schedule",
    text: "Bring your vision to life with spaces made for shoots, celebrations, and everything between..",
    icon: CardScheduleIcon,
    badge: O2,
  },
  {
    id: 3,
    title: "Experience",
    text: "Build lasting relationships with trusted hosts and a growing community, right here on Okike.",
    icon: CardUserIcon,
    badge: O3,
  },
];


export 
const faqs = [
  {
    question: "What is Okike Spaces?",
    answer:
      "Okike Spaces is a digital platform for discovering and securely booking creative-friendly spaces across Africa. From studios to rooftops, every listing is verified and built around trust and transparency.",
  },
  {
    question: "Who is it for?",
    answer:
      "Okike Spaces is built for creators, brands, event organizers, and teams looking for unique, reliable spaces to bring ideas to life.",
  },
  {
    question: "How does booking work?",
    answer:
      "Browse verified spaces, select your date and time, send a booking request, and securely complete payment once approved by the host.",
  },
  {
    question: "Can I list my space?",
    answer:
      "Yes. Space owners can apply to list their spaces, get verified, and start earning by hosting creatives and events.",
  },
  {
    question: "Is Okike available yet?",
    answer:
      "Okike is launching soon. Join the waitlist to get early access and updates.",
  },
];

export   const categories = [
    {
      title: "SHOOT SPACES",
      description:
        "For photography, video, content creation, campaigns, product shoots.",
      img: shootSpacesImg,
      profile_Img: man
    },
    {
      title: "EVENT & EXPERIENCE SPACES",
      description:
        "For intimate events, brand activations, workshops, celebrations, dinners.",
      img: event,
       profile_Img: man
    },
    {
      title: "UNIQUE & LIFESTYLE SPACES",
      description:
        "For rooftops, gardens, aesthetic rooms, creative corners, concept spaces.",
      img: lifestyle,
       profile_Img: man
    },
  ];