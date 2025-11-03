import type { ComponentProps } from "preact/compat";
import classes from './row.module.css'

export function Row(props: ComponentProps<"div">) {
	return <div
		className={`${classes.row} ${props.className ?? ''}`}
		{...props}
	></div>
}
