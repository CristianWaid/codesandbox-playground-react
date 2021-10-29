import "./styles.css";
import { SimpleInput } from "./components/SimpleInput";
import { Counter } from "./components/Counter";
import { NasaPicture } from "./components/NasaPicture";

export default function App() {
  return (
    <div className="App">
      <h1>CodeSandbox React</h1>
      <NasaPicture />
      <SimpleInput label={"type something..."} />
      <Counter />
    </div>
  );
}
