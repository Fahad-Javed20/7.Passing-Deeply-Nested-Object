import type { User } from "../types/UserType";

interface UserProfileProps {
  profile: User;
}
const UserProfile = ({ profile }: UserProfileProps) => {
  return (
    <div className="max-h-screen w-1/3 shadow-2xl rounded-2xl bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">{profile.name}</h1>

      <h2 className="text-lg font-semibold mt-4">Contact Information:</h2>
      <p>Email: {profile.contact.email}</p>
      <p>Phone: {profile.contact.phone}</p>

      <h2 className="text-lg font-semibold mt-4">Address Details:</h2>
      <p>
        Street {profile.contact.address.street}, {profile.contact.address.city},{" "}
        {profile.contact.address.country}
      </p>

      <h2 className="text-lg font-semibold mt-4">Education Details:</h2>
      <p>Highest Level of Education: {profile.education.highestLevel}</p>
      <p>
        {profile.education.institute} – Graduated in {profile.education.year}
      </p>

      <h2 className="text-lg font-semibold mt-4">My Hobbies:</h2>
      {profile.preferences.hobbies.map((hobby) => (
        <p>{hobby}</p>
      ))}
    </div>
  );
};

export default UserProfile;
