import type { PropsWithChildren } from "preact/compat";
import classes from './container.module.css'

export function Container(props: PropsWithChildren<{className?: string}>) {
	return <main className={`${classes.container} ${props.className ?? ''}`}>{props.children}</main>
}
