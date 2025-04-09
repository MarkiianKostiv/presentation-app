import { getResentProjects } from "@/actions/projects";
import { onAuthenticateUser } from "@/actions/user";
import { AppSidebar } from "@/components/global/app-sidebar";
import { UpperInfoBar } from "@/components/global/upper-info-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { appRoutes } from "@/config/app-routes";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const dynamic = "force-dynamic";

type Props = {
  children: ReactNode;
};
const Layout = async ({ children }: Props) => {
  const resentProjects = await getResentProjects();
  const checkUser = await onAuthenticateUser();
  if (!checkUser.user) {
    redirect(appRoutes.signIn);
  }
  return (
    <SidebarProvider className='flex w-full justify-between'>
      <AppSidebar
        recentProjects={resentProjects.projects || []}
        user={checkUser.user}
      />
      <SidebarInset>
        <UpperInfoBar user={checkUser.user}>{children}</UpperInfoBar>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
