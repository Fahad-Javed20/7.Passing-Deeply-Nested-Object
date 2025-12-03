import "./App.css";
import UserProfile from "./components/UserProfile";
import type { User } from "./types/UserType";

const userProfile: User = {
  id: 1,
  name: "Fahad Bin Javed",
  contact: {
    email: "fahad@example.com",
    phone: "+92-300-1234567",
    address: {
      street: "Street 10",
      city: "Lahore",
      country: "Pakistan",
    },
  },
  education: {
    highestLevel: "Electrical Engineering",
    institute: "UET Multan",
    year: 2020,
  },
  preferences: {
    hobbies: ["logic Building", "Coding"],
  },
};

function App() {
  return (
    <>
      <UserProfile profile={userProfile} />
    </>
  );
}

export default App;
