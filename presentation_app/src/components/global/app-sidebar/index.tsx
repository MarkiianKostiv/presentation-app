"use client";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Project, User } from "@prisma/client";
import { Avatar } from "@radix-ui/react-avatar";
import { ComponentProps } from "react";
import { NavMain } from "./nav-main";
import { data } from "@/lib/constants";
import { RecentOpen } from "./recent-open";
import { NavFooter } from "./nav-footer";

type Props = {
  recentProjects: Project[];
  user: User;
  props?: ComponentProps<typeof Sidebar>;
};

export const AppSidebar = ({ recentProjects, user, ...props }: Props) => {
  return (
    <Sidebar
      collapsible='icon'
      {...props}
      className='bg-background-90'
    >
      <SidebarHeader className='pt-6 px-2 pb-0'>
        <SidebarMenuButton
          size={"lg"}
          className='data-[state=open]:text-sidebar-accent-foreground'
        >
          <div
            className={`flex aspect-square size-8 items-center
           justify-center rounded-ig text-sidebar-primary-foreground`}
          >
            <Avatar>
              {/* <AvatarImage
                src=''
                alt='avatar-img'
              /> */}
              <AvatarFallback className='rounded-lg'>PA</AvatarFallback>
            </Avatar>
          </div>
          <span className='truncate text-primary text-2xl font-semibold'>
            Presentation App
          </span>
        </SidebarMenuButton>
      </SidebarHeader>

      <SidebarContent className='px-2 pt-0 pb-6 mt-10 gap-y-6'>
        <NavMain items={data.navMain} />
        <RecentOpen recentOpenProjects={recentProjects} />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter prismaUser={user} />
      </SidebarFooter>
    </Sidebar>
  );
};
