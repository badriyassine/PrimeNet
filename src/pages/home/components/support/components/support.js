import { MessageCircle, MapPin, HelpCircle, Headphones } from "lucide-react";

const supportItems = [
  {
    title: "WhatsApp Support",
    icon: MessageCircle,
    link: "https://web.whatsapp.com/",
    external: true,
  },
  {
    title: "Our Agencies",
    icon: MapPin,
    link: "/agencies",
    external: false,
  },
  {
    title: "FAQ & Troubleshooting",
    icon: HelpCircle,
    link: "/faq",
    external: false,
  },
  {
    title: "Customer Care Centers",
    icon: Headphones,
    link: "/Support",
    external: false,
  },
];

export default supportItems;