import { getAllProjects } from "@/actions/projects";

const TrashPage = async () => {
  const allProjects = await getAllProjects();
  return (
    <div className='w-full flex flex-col gap-6 relative'>
      <div
        className='flex flex-col-reverse items-start w-full
  gap-6 sm:flex—row sm:justify-between sm:items—center'
      >
        <div className='flex flex-col items-start'>
          <h1 className='text-2xl font-semibold dark:text-primary backdrop-blur-lg'>
            Trash
          </h1>
          <p className='text-base font-normal dark:text-secondary'>
            All your presentations
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrashPage;
