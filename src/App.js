import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Counter from "./Components/Counter";
import DisplayCount from "./Components/DisplayCount";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<div className="Container" style={{ float: "left" }}>
					<Counter />
				</div>
				<div className="Container" style={{ float: "right" }}>
					<DisplayCount />
				</div>
			</div>
		</Provider>
	);
}

export default App;
