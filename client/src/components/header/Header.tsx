import { MainHeader } from "./MainHeader";
import { UserHeader } from "./UserHeader";
import { user } from "../NameInitials";


export const Header = () => {

  return (
    <div>
      {user ? <MainHeader/> : <UserHeader />}
    </div>
  )
}
