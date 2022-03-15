import "./App.css";
import Dashboard from "./components/Dashboard";
import ListColumn from "./components/ListColumn";
import Navbar from "./components/Navbar";
import { TodoProvider } from "./context/TodoContext";
import { ColumnContainer } from "./styles";

function App() {
  return (
    <>
      <Navbar />
      <TodoProvider>
        <ColumnContainer>
          <Dashboard />
          <ListColumn />
        </ColumnContainer>
      </TodoProvider>
    </>
  );
}

export default App;
