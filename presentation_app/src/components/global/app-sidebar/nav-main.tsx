"use client";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Clock } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, SVGProps } from "react";

type Props = {
  items: {
    title: string;
    url: string;
    icon: FC<SVGProps<SVGSVGElement>>;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
};

export const NavMain = ({ items }: Props) => {
  const pathname = usePathname();
  return (
    <SidebarGroup className='p-0'>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              className={`${pathname.includes(item.url) && "bg-muted"}`}
            >
              <Link
                href={item.url}
                className={`test-lg ${
                  pathname.includes(item.url) && "font-bold"
                }`}
              >
                {item.icon && <item.icon className='text-large' />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};
