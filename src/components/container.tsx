import classes from './container.module.css'

export function Container(props: React.PropsWithChildren<{className?: string}>) {
	return <main className={`${classes.container} ${props.className ?? ''}`}>{props.children}</main>
}
