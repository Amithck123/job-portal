import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);

  return <div>Applied Jobs</div>;
};