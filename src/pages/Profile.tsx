
import { useSelector } from 'react-redux'
import { useAppSelector } from "../hooks"

export const Profile = () => {
  // const context = useContext(AppContext);
  const user = useAppSelector((state) => state.user.value);
  // const user = {name: "", email: ""};

  return (
    <>
      <div>
        <h1>Profile Page</h1>
        <p>Name: {user.name}</p>
        <p>Age: 0</p>
        <p>Email: {user.email}</p>
      </div>    
    </>
  );
};

