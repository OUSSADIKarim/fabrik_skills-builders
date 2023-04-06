import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Courses />
      </QueryClientProvider>
    </div>
  );
}

export default App;
