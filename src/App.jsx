import "./App.css";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Container from "./components/Container/Container";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <Container>
      <AppWrapper>
        <SideBar></SideBar>
        <div className="content">
          <div className="chat-start">
            <div className="chat-icon">
              <i class="far fa-comment-alt"></i>
            </div>
            <p>Start Conversation</p>
          </div>
        </div>
      </AppWrapper>
    </Container>
  );
}

export default App;
