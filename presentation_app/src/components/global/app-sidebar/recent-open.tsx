"use client";
import { useSlidesStore } from "@/app/stores/useSlidesStore";
import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Project } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {
  recentOpenProjects: Project[];
};

export const RecentOpen = ({ recentOpenProjects }: Props) => {
  const router = useRouter();
  const { setSlides } = useSlidesStore();

  const handleResentOpen = (projectId: string, slides: JsonValue) => {
    if (!projectId || !slides) {
      toast.error("Project not found", {
        description: "Please try again",
      });
      return;
    }

    setSlides(JSON.parse(JSON.stringify(slides)));
    router.push(`/presentation/${projectId}`);
  };
  return recentOpenProjects.length > 0 ? (
    <SidebarGroup>
      <SidebarGroupLabel>Recently Opened</SidebarGroupLabel>
      <SidebarMenu>
        {recentOpenProjects.map((project) => (
          <SidebarMenuItem key={project.id}>
            <SidebarMenuButton
              asChild
              tooltip={project.title}
              className='hover:bg-primary-80'
            >
              <Button
                variant={"link"}
                onClick={() => handleResentOpen(project.id, project.slides)}
                className='text-xs items-center justify-start cursor-pointer'
              >
                <span>{project.title}</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  ) : null;
};
