import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SubmitPage from "./components/SubmitPage";
import EndPage from "./components/EndPage";
import AdminPage from "./components/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Route path="/" exact={true} component={LandingPage} />
			<Route path="/submit" component={SubmitPage} />
			<Route path="/end" component={EndPage} />
			<Route path="/admin" component={AdminPage} />
			<Route path="*" component={NotFoundPage} />
		</BrowserRouter>
	);
}

export default App;
