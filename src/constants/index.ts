import { NavbarLink } from "@/types";

export const themes = [
  {
    value: "light",
    label: "Light",
    icon: "/assets/icons/sun.svg",
  },
  {
    value: "dark",
    label: "Dark",
    icon: "/assets/icons/moon.svg",
  },
  {
    value: "system",
    label: "System",
    icon: "/assets/icons/computer.svg",
  },
];

export const navbarLinks: NavbarLink[] = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Projects",
    route: "/projects",
  },
  {
    label: "Check Certificate",
    route: "/check-certificate",
  },
  {
    label: "Profile",
    route: "/profile",
  },
];
