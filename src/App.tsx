import "./App.css";
import UserProfile from "./components/UserProfile";
import type { UserType } from "./types/UserType";

const userProfile:UserType = {
  id: 1,
  name: "Fahad",
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
    highestLevel: "Intermediate",
    institute: "Punjab College",
    year: 2020,
  },
  preferences: {
    hobbies: ["Snooker", "Coding"],
  },
};

function App() {
  return (
    <>
      <UserProfile profile = {userProfile} />
    </>
  );
}

export default App;
