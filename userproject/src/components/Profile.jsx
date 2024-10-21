import { useContext } from "react";
import { UserContext } from "../context";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div className="mt-4 font-thin ">Please Login</div>;
  return (
    <>
      <div className="font-semibold mt-4">Welcome {user.username}</div>
    </>
  );
}

export default Profile;
