import Greeting from "./Greeting";
import { UserContext } from "../pages/index";
import { useContext } from "react";
import Button from "./Button";

const Profile = () => {
  const [firstName, setFirstName] = useContext(UserContext);
  return (
    <div className="profile">
      <h2>Profile Component</h2>
      <h3>{firstName}</h3>
      <Button onClick={() => setFirstName("Gutera")} label={"Change Name"} />
      <Greeting />
    </div>
  );
};

export default Profile;
