import { useLottie } from "lottie-react";
import contacts from "../assets/img/contacts.json";
import { Button, Card } from "@mui/material";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: contacts,
  };

  const { View } = useLottie(lottieOptions);

  const handleNavigate = () => {
    isLoggedIn ? navigate('/contacts') : navigate('/login')
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "white",

      }}
    >
      <h1>Save all your contacts in Phonebook</h1>
      <Button
        onClick={handleNavigate}
        style={{
          zIndex: "2"
        }}
        variant="outlined"
      >
        GET STARTED
      </Button>
      <div style={{ width: "40%", marginTop: "-2.5em" }}>
        <Card
          sx={{
            transition: "0.5s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%", // Ensure the card takes the full width of the container
            "&:hover": {
              transform: "scale(1.01)",
            },
          }}
        >
          {View}
        </Card>
      </div>
    </div>
  );
};
export default Home;
