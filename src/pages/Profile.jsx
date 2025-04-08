import { useAuthContext } from "../context/AuthContext";

export const Profile = () => {
	const {user} = useAuthContext()

  return (
		<div>
			<h1>{user?.displayName}</h1>
    </div>
  );
};
