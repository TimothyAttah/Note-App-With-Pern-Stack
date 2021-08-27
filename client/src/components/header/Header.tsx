import { useState } from "react"
import { MainHeader } from "./MainHeader";
import { UserHeader } from "./UserHeader";
import { user } from "../NameInitials";


export const Header = () => {
  // const [user] = useState<boolean>(false);

  return (
    <div>
      {user ? <MainHeader/> : <UserHeader />}
    </div>
  )
}
