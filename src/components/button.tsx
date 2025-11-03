import type { MouseEventHandler } from "preact";
import { type ComponentProps, type PropsWithChildren, } from "preact/compat";
import { useCallback, useRef } from "preact/hooks";
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

	const {children, ...rest} = props

	return <button
		{...rest}
		ref={ref}
		data-clicked={false}
		onClick={click}
		onMouseDown={mouseDown}
		className={`${classes.button} ${props.className ?? ''}`}>
		{children}
	</button>
}

export function LinkButton(props: PropsWithChildren<ComponentProps<"a">> & { href?: string }) {
	const router = useRouter()

	const click = useCallback<MouseEventHandler<EventTarget>>((e) => {
		if (props.href?.startsWith("/")) {
			e.preventDefault()
			router.navigate(props.href)
		}
	}, [props.href])

	const {children, ...rest} = props

	return <a {...rest} className={classes.buttonLink} onClick={click}>
		<Button>
			{children}
		</Button>
	</a>
}
