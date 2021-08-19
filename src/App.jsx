import "./App.css";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import ChatContent from "./components/ChatContent/ChatContent";
import Container from "./components/Container/Container";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <Container>
      <AppWrapper>
        <SideBar></SideBar>
        <ChatContent></ChatContent>
      </AppWrapper>
    </Container>
  );
}

export default App;
