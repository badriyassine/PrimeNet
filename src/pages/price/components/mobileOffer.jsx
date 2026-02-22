import {
  Phone,
  Globe,
  Gamepad,
  MessageCircle,
  LifeBuoy,
  Mail,
} from "lucide-react";

const mobileOffers = [
  {
    name: "*1",
    price: "From 5 dh to 200 dh",
    icons: [{ icon: <Phone />, label: "Calls & SMS" }],
  },
  {
    name: "*2",
    price: "From 5 dh to 200 dh",
    icons: [{ icon: <Phone />, label: "Calls & internet" }],
  },
  {
    name: "*3",
    price: "From 5 dh to 200 dh",
    icons: [{ icon: <Globe />, label: "Internet" }],
  },
  {
    name: "*4",
    price: "From 5 dh to 200 dh",
    icons: [{ icon: <Mail />, label: "SMS" }],
  },
  {
    name: "*5",
    price: "From 5 dh to 25 dh",
    icons: [{ icon: <MessageCircle />, label: "Social Media" }],
  },
  {
    name: "*6",
    price: "30 dh/month",
    icons: [{ icon: <MessageCircle />, label: "unlimited social media" }],
  },
  {
    name: "*7",
    price: "From 5 dh to 200 dh",
    icons: [{ icon: <Gamepad />, label: "Shopping in games" }],
  },
  {
    name: "*8",
    price: "Emergency Recharge",
    icons: [{ icon: <LifeBuoy />, label: "send *8 to 4545 with" }],
  },
];

export default mobileOffers;
