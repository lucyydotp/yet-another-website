import {
	type ComponentProps,
	type MouseEventHandler,
	type PropsWithChildren,
	useCallback,
	useContext,
	useRef
} from "react";
import { useRouter } from "../router";
import classes from './button.module.css'

interface ButtonProps {
	onClick?: () => void;
}

export function Button(props: PropsWithChildren<ButtonProps & ComponentProps<"button">>) {
	const ref = useRef<HTMLButtonElement>(null)

	const mouseDown = useCallback(() => {
		ref.current?.setAttribute("data-clicked", "false")
	}, [ref])

	const click = useCallback(() => {
		ref.current?.setAttribute("data-clicked", "true")
		props.onClick?.()
	}, [ref])


	return <button
		{...props}
		ref={ref}
		data-clicked={false}
		onClick={click}
		onMouseDown={mouseDown}
		className={`${classes.button} ${props.className ?? ''}`}>
		{props.children}
	</button>
}

export function LinkButton(props: PropsWithChildren<ComponentProps<"a">>) {
	const router = useRouter()

	const click = useCallback<MouseEventHandler>((e)=> {
		if (props.href?.startsWith("/")) {
			e.preventDefault()
			router.navigate(props.href)
		}
	}, [props.href])

	return <a {...props} className={classes.buttonLink} onClick={click}>
		<Button>
			{props.children}
		</Button>
	</a>
}
