import { Button } from "../components/button";
import { Container } from "../components/container";
import { useRouter } from "../router";

import classes from './home.module.css'

export function HomePage() {
	const router = useRouter()

	return <Container className={classes.home!}>
		<div>
			<h1>Hi! I'm Lucy.</h1>
			<p>&lt;social link icons go here&gt;</p>
			<p>I make fun stuff on the Internet. I try not to take myself too seriously, but I thoroughly enjoy spending time making my work the best it can be.</p>
			<Button onClick={() => router.navigate("/portfolio")}>Portfolio</Button><br/><br/>
		</div>
	</Container>
}
