// import { use } from "react";
import { createContext, useState } from "react"


// eslint-disable-next-line react-refresh/only-export-components
export const UserDataContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContext = ({children}) => {

  const [user,setUser] = useState({
    email:'',
    fullName:{
      firstname:'',
      lastname:''
    }
  });

  return (
    <div>
     <UserDataContext.Provider value={[user,setUser]}>
         {children}
     </UserDataContext.Provider>
    </div>
  )
}

export default UserContext