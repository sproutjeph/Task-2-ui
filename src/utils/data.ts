import fileDocumentIcon from "../assets/fileDocumentIcon.svg";
import calendarIcon from "../assets/calendarCheckIcon.svg";
import userGroupIcon from "../assets/usersGroupIcon.svg";
import notebookIcon from "../assets/notebookIcon.svg";
import circleIcon from "../assets/circleIcon.svg";
import heartIcon from "../assets/heartIcon.svg";
import shareIcon from "../assets/shareIcon.svg";
import homeIcon from "../assets/houseIcon.svg";
import chevronIcon from "../assets/chevronRight.svg";
import settingsIcon from "../assets/Settings.svg";

export const sidebarItems = [
  {
    icon: circleIcon,
    isActive: false,
    title: "Me",
  },
  {
    icon: homeIcon,
    isActive: true,
    title: "Home",
  },
  {
    icon: userGroupIcon,
    isActive: false,
    title: "Users",
  },
  {
    icon: calendarIcon,
    isActive: false,
    title: "Calendar",
  },
  {
    icon: shareIcon,
    isActive: false,
    title: "Share",
  },
  {
    icon: notebookIcon,
    isActive: false,
    title: "Note",
  },

  {
    icon: fileDocumentIcon,
    isActive: false,
    title: "Files",
  },
  {
    icon: heartIcon,
    isActive: false,
    title: "Favourite",
  },

  {
    icon: chevronIcon,
    isActive: false,
    title: "Back",
  },
  {
    icon: settingsIcon,
    isActive: false,
    title: "Settings",
  },
];
