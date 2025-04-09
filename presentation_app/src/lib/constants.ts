import { Home, User2, TerminalSquare, Trash2, Settings } from "lucide-react";
import { appRoutes } from "@/config/app-routes";

export const data = {
  user: {
    name: "Test",
    email: "test@gmail.com",
    icon: User2,
  },

  navMain: [
    {
      title: "Home",
      url: appRoutes.dashboard,
      icon: Home,
    },
    {
      title: "Templates",
      url: appRoutes.templates,
      icon: TerminalSquare,
    },
    {
      title: "Trash",
      url: appRoutes.trash,
      icon: Trash2,
    },
    {
      title: "Settings",
      url: appRoutes.settings,
      icon: Settings,
    },
  ],
};
