import Dashboard from "@/components/dashboardContents/Dashboard";
import MobileSidebar from "@/components/sidebars/MobileSidebar";
import Sidebar, { SidebarType } from "@/components/sidebars/Sidebar";
import CustomContainer from "@/components/ui/CustomContainer";

export default function Page() {
  return (
    <CustomContainer className="flex items-start">
      {/* <CustomOverlay className="md:hidden" /> */}
      <MobileSidebar />
      <Sidebar type={SidebarType.DESKTOP} className="hidden md:block" />

      <Dashboard />
    </CustomContainer>
  );
}
