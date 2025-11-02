import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { PageAnimator } from "./components/pageAnimation";
import NotFound from "./pages/404.mdx";

interface RouterParams {
	routes: Record<string, ReactNode>
}

interface RouterContext {
	navigate(route: String): void
}

const RouterContext = createContext<RouterContext>({
	navigate() {
		throw new Error("Not in a router context")
	}
})

export function useRouter() {
	return useContext(RouterContext)
}

export function Router({routes}: RouterParams) {
	const [currentRoute, setCurrentRoute] = useState<string>(window.location.pathname)
	const [isNavigating, setIsNavigating] = useState(false)
	const [currentElement, setCurrentElement] = useState<ReactNode | null>(routes[currentRoute] ?? null)

	const completeNavigation = () => {
		setIsNavigating(false)
		setCurrentElement(routes[currentRoute] ?? null)
	}

	const context = useMemo(() => ({
		navigate(route: string, pushState?: boolean) {
			if (isNavigating) return
			if (pushState !== false) window.history.pushState({}, "", route)
			setCurrentRoute(route)

			// Skip the animation entirely for reduced motion
			if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
				console.log("skipping animation, reduced motion is enabled")
				setCurrentElement(routes[route] ?? null)
			} else {
				console.log("nav start")
				setIsNavigating(true)
			}
		}
	}), [])

	useEffect(() => {
		const listener = (e: PopStateEvent) => {
			context.navigate(window.location.pathname, false)
		}
		window.addEventListener("popstate", listener)
		return () => {
			window.removeEventListener("popstate", listener)
		}
	}, []);

	return <RouterContext.Provider value={context}>
		<PageAnimator
			isAnimating={isNavigating}
			onComplete={completeNavigation}
		/>
		{currentElement ?? <NotFound/>}
	</RouterContext.Provider>
}
