import type { PropsWithChildren } from "react";
import classes from './jumbotron.module.css'

export function Jumbotron(props: PropsWithChildren<{}>) {
	return <div className={classes.jumbotron}>
		{props.children}
	</div>
}
