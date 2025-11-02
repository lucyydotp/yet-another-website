import type { PropsWithChildren } from "react";
import { Container } from "../components/container";
import classes from './portfolio.module.css'

function PortfolioEntry(props: PropsWithChildren<{
	title: string,
	subtitle?: string,
	dates?: string,
}>) {
	return <article className={classes.article}>
		<header>
			<h2>{props.title}</h2>
			{props.subtitle && <p>{props.subtitle}</p>}
			{props.dates && <p>{props.dates}</p>}
		</header>
		{props.children}
	</article>
}

export default function PortfolioPage() {
	return <Container>
		<header>
			<h1>Portfolio</h1>
			I've been very fortunate to have the chance to work on some pretty cool stuff.
			I'm proud to call myself part of <a href="https://noxcrew.com">the Noxcrew</a>, where I work as a full-time
			developer. My primary role is on the Bedrock marketplace team, where I oversee our use of scripting, and
			build and maintain in-house tooling and infrastructure for the entire team.
		</header>

		<PortfolioEntry
			title="SoulSteel"
			subtitle="Noxcrew, Mojang Studios"
			dates="October 2025 - Present"
		>
			<p>
				SoulSteel is a dungeon-crawling server for Bedrock edition. I lead script-based development for the
				project, and also oversee tooling, infrastructure, and DevOps.
			</p>
		</PortfolioEntry>

		<PortfolioEntry
			title="MCC x Minecraft 15th Anniversary Party"
			subtitle="Noxcrew, Mojang Studios"
			dates="August 2024"
		>
			<p>
				MCC x Minecraft 15th Anniversary Party was a 2-week in-game event for Bedrock edition, developed as part
				of Minecraft's 15th anniversary celebration. I led script-based development for the project.
			</p>
		</PortfolioEntry>

		<PortfolioEntry
			title="MCC Island"
			subtitle="Noxcrew"
			dates="March 2023 - Present"
		>
			<p>
				MCC Island is a free-to-play Java edition server. I develop many of our moderation, community, and
				player safety systems, in close collaboration with our moderation and community management teams.
			</p>
		</PortfolioEntry>
		<PortfolioEntry
			title="Minecraft Marketplace content"
			subtitle="Noxcrew"
			dates="October 2022 - Present"
		>
			<p>
				Various experiences created within Minecraft, including work with large IPs.
			</p>
		</PortfolioEntry>
	</Container>

}
