import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      {children}
    </div>
  );
};

export default layout;
