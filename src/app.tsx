import '@fontsource-variable/outfit'

import './app.css'
import { HomePage } from "./pages/home";
import { Router } from "./router";

export function App() {
	return <>
		<Router routes={{
			"/": <HomePage/>
		}}/>
	</>
}
