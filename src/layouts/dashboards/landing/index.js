import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import UserNavbar from "examples/Navbars/UserNavbar";

function Default() {
  return (
    <DashboardLayout
      sx={{
        backgroundImage: "radial-gradient(circle at bottom right,#3c9add,#191452)",
        height: "105vh",
      }}
    >
      <UserNavbar/>

    </DashboardLayout>
  );
}

export default Default;
