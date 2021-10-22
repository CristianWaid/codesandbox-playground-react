import "./styles.css";
import { SimpleInput } from "./components/SimpleInput";
import { Counter } from "./components/Counter";

export default function App() {
  return (
    <div className="App">
      <h1>CodeSandbox React</h1>
      <SimpleInput label={"type something..."} />
      <Counter />
    </div>
  );
}
