import { Loader2 } from "lucide-react";

const loadingPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
      <Loader2 className='animate-spin' />
    </main>
  );
};

export default loadingPage;
