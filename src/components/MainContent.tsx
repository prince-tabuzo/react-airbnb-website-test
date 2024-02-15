import MainContentTitle from "./MainContentTitle";
import MainContentList from "./MainContentList";
import "./MainContent.css";

function MainContent() {
  return (
    <main className="main">
      <MainContentTitle />
      <MainContentList />
    </main>
  );
}

export default MainContent;
