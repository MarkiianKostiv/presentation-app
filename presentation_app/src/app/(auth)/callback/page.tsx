import { onAuthenticateUser } from "@/actions/user";
import { appRoutes } from "@/config/app-routes";
import { redirect } from "next/navigation";

const AuthCallbackPage = async () => {
  const auth = await onAuthenticateUser();

  if (auth.status === 200 || auth.status === 201) {
    redirect(appRoutes.dashboard);
  } else if (
    auth.status === 403 ||
    auth.status === 400 ||
    auth.status === 500
  ) {
    redirect(appRoutes.signIn);
  }
};

export default AuthCallbackPage;
