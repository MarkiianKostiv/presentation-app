"use client";

import { Button } from "@/components/ui/button";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SignedIn, useClerk, UserButton } from "@clerk/nextjs";
import { User } from "@prisma/client";
import { useState } from "react";

type Props = {
  prismaUser: User;
};

export const NavFooter = ({ prismaUser }: Props) => {
  const { isSignedIn, loaded, user } = useClerk();
  const [loading, setLoading] = useState(false);

  const handleUpgrading = async () => {
    setLoading(true);
    try {
      console.log("Upgrading user...");
    } catch (error) {
      console.error("Upgrade failed", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isSignedIn || !loaded) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className='flex flex-col gap-y-6 items-start'>
          {!prismaUser.subscription && (
            <div className='flex flex-col items-start p-2 pb-3 gap-4 bg-background-80'>
              <div className='flex flex-col items-start gap-1'>
                <p className='text-base font-bold'>
                  Get <span className='text-base'>Creative AI</span>
                </p>
                <span>Unlock all features including AI and more</span>
              </div>

              <div className='w-full bg-gradient-to-bl rounded-full p-[1px]'>
                <Button
                  className='w-full bg-background-80 hover:bg-background-90 text-primary rounded-full font-bold'
                  variant='default'
                  size='lg'
                  onClick={handleUpgrading}
                >
                  {loading ? "Upgrading..." : "Upgrade"}
                </Button>
              </div>
            </div>
          )}

          <SignedIn>
            <SidebarMenuButton
              className={`data-[state=open]:bg-sidebar-accent 
                data-[state=open]:text-sidebar-accent-foreground`}
              size={"lg"}
            >
              <UserButton />
              <div
                className={`grid flex-1 text-left text-sm leading-tight 
                    group-data-[collapsible=icon]:hidden`}
              >
                <span className='truncate font-semibold'>{user?.fullName}</span>
                <span className='truncate text=secondary'>
                  {user?.emailAddresses[0]?.emailAddress}
                </span>
              </div>
            </SidebarMenuButton>
          </SignedIn>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
