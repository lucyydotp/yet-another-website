import { Container } from "../components/container";
import { useRouter } from "../router";

import classes from './home.module.css'

export function HomePage() {
	const router = useRouter()

	return <Container className={classes.home!}>
		<div>
			<h1>Hi! I'm Lucy.</h1>
			<p>social link icons go here</p>
			<p>I do cool stuff. Like writing this placeholder text. The world has truly never seen a placeholder text writer quite as cool and swag as me before.</p>
			<button onClick={() => router.navigate("/about")}>Go somewhere else</button>
		</div>
	</Container>
}
