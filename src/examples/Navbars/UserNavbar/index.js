import ArgonBox from "components/ArgonBox";
import DefaultNavbarDropdown from "./DefaultNavbarDropdown";

function UserNavbar() {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <DefaultNavbarDropdown />
    </ArgonBox>
  );
}

export default UserNavbar;
