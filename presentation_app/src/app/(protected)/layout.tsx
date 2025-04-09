import { onAuthenticateUser } from "@/actions/user";
import { appRoutes } from "@/config/app-routes";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const dynamic = "force-dynamic";

type Props = {
  children: ReactNode;
};
const Layout = async ({ children }: Props) => {
  const auth = await onAuthenticateUser();
  if (!auth.user) {
    redirect(appRoutes.signIn);
  }
  return <main className='w-full min-h-screen'>{children}</main>;
};

export default Layout;
