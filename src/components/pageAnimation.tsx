import { useEffect, useRef } from "preact/hooks";
import classes from './pageAnimation.module.css'

interface PageAnimationProps {
	isAnimating: boolean;
	onComplete?: () => void;
}

const ANIM_IN: PropertyIndexedKeyframes = {
	easing: "ease",
	translate: ["0 -100%", "0"],
}
const ANIM_OUT: PropertyIndexedKeyframes = {
	easing: "ease",
	translate: ["0", "0 100%"],
}

export function PageAnimator({isAnimating, onComplete}: PageAnimationProps) {
	const animator = useRef<HTMLDivElement>(null)
	const currentAnim = useRef<Animation | null>(null)
	const didMount = useRef(false);

	useEffect(() => {
		// Don't run the anim on mount (i.e. page load)
		if (!didMount.current) {
			didMount.current = true
			return
		}
		currentAnim.current = animator.current?.animate(isAnimating ? ANIM_IN : ANIM_OUT, {
			duration: 400,
			fill: "forwards",
		}) ?? null

		currentAnim.current?.addEventListener("finish", () => {
			currentAnim.current = null
			onComplete?.()
		})
	}, [isAnimating])

	return <div ref={animator} className={classes.pageAnimator}></div>
}
