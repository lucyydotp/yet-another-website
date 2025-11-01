import { Container } from "../components/container";
import { useRouter } from "../router";

export function NotFound() {
	const router = useRouter()

	return <Container>
		<h1>Not found :/</h1>
		<p>The page you're looking for doesn't exist.</p>
		<button onClick={() => router.navigate('/')}>Go home</button>
	</Container>
}
