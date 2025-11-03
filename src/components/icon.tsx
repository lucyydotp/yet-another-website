import { icon, type IconDefinition, layer } from "@fortawesome/fontawesome-svg-core";
import { type Component, h } from "preact";
import { useMemo } from "preact/hooks";

export function Icon(this: Component, props: { icon: IconDefinition }) {
	const iconObject = useMemo(() =>
		icon(props.icon),
		[props.icon])

	this.shouldComponentUpdate = () => false;
	return <span dangerouslySetInnerHTML={{__html: iconObject.html.join("\n")}}></span>
}
