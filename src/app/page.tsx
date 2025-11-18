import {
  Sidebar,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const HomePage = () => {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <Sidebar collapsible="icon" className="overflow-hidden">
        <SidebarHeader className="flex-row">
          <SidebarTrigger />
          <span className="text-xl text-nowrap">Jobs</span>
        </SidebarHeader>
      </Sidebar>
    </SidebarProvider>
  );
};

export default HomePage;
