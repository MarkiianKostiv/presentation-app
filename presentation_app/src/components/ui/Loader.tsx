import { LoaderCircle } from "lucide-react";

export const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center'>
      <LoaderCircle
        className='animate-spin'
        size={42}
      />
    </div>
  );
};
