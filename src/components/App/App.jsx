// import ContactForm from "../ContactForm/ContactForm";
// import ContactList from "../ContactList/ContactList";
// import { Container, Paper } from "@mui/material";
// import Filter from "../Filter/Filter";
// import { useSelector } from "react-redux";

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";

const HomePage = lazy(() => import("../../pages/Home"));
const RegisterPage = lazy(() => import("../../pages/Register"));
const LonginPage = lazy(() => import("../../pages/Login"));
const ContactsPage = lazy(() => import("../../pages/Contacts"));
const CreateContactPage = lazy(() => import("../../pages/CreateContact"));

const App = () => {
  // const { isLoading, error } = useSelector((state) => state.contacts);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LonginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="create-contact" element={<CreateContactPage/> } />
      </Route>
    </Routes>
    
    // <Container>
    //   <Paper
    //     sx={{
    //       display: "flex",
    //       alignItems: "center",
    //       flexDirection: "column",
    //       gap: 1,
    //       overflow: "hidden",
    //       mt: 2,
    //       p: 2,
    //     }}
    //   >
    //     <h1>Phonebook</h1>
    //     <Paper sx={{ p: 2 }}>
    //       <ContactForm />
    //     </Paper>
    //     <Paper sx={{ p: 2 }}>
    //       <h2 style={{ display: "flex", justifyContent: "center" }}>
    //         Contacts
    //       </h2>
    //       <Filter />
    //       {isLoading && !error && <p>Feching data...</p>}
    //       <ContactList />
    //     </Paper>
    //   </Paper>
    // </Container>
  );
};

export default App;
