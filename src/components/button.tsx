import { type PropsWithChildren, useCallback, useRef } from "react";
import classes from './button.module.css'

interface ButtonProps {
	onClick?: () => void;
}

export function Button(props: PropsWithChildren<ButtonProps>) {
	const ref = useRef<HTMLButtonElement>(null)

	const mouseDown = useCallback(() => {
		ref.current?.setAttribute("data-clicked", "false")
	}, [ref])

	const click = useCallback(() => {
		ref.current?.setAttribute("data-clicked", "true")
		props.onClick?.()
	}, [ref])


	return <button ref={ref} data-clicked={false} onClick={click} onMouseDown={mouseDown} className={classes.button}>
		{props.children}
	</button>
}
