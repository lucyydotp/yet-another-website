import '@fontsource-variable/outfit'

import './app.css'
import HomePage from "./pages/home.mdx";
import PortfolioPage from "./pages/portfolio";
import { Router } from "./router";

export function App() {
	return <>
		<Router routes={{
			"/": <HomePage/>,
			"/portfolio": <PortfolioPage/>
		}}/>
	</>
}
