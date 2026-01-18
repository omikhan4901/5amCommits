import { HomeIcon } from "lucide-react";
import {
	Timeline,
	TimelineContent,
	TimelineContentDescription,
	TimelineContentTitle,
	TimelineDescription,
	TimelineItem,
	TimelineTitle,
} from "./components/Timeline";

// TODO: Remove DEMO
function TimelineDemo() {
	const now = new Date();
	
	/**
	 * @type {Array<{
	 * time: Date,
	 * variant: any,
	 * icon?: any,
	 * title: string,
	 * description: string
	 * }>}
	 */
	const events = [
		{
			time: new Date(),
			variant: "success",
			title: "Project Launched",
			icon: <HomeIcon />,
			description:
				"Successfully deployed the new community timeline feature with real-time updates and interactive elements.",
		},
		{
			time: new Date(now - 3600000), // 1 hour ago
			variant: "info",
			title: "Code Review Completed",
			description:
				"All pull requests reviewed and merged. The team collaborated on improving performance optimizations.",
		},
		{
			time: new Date(now - 86400000), // 1 day ago
			variant: "warning",
			title: "Design System Updated",
			description:
				"Updated the color palette and typography scale for better accessibility and visual consistency.",
		},
		{
			time: new Date(now - 172800000), // 2 days ago
			variant: "default",
			title: "Sprint Planning",
			description:
				"Outlined goals for the upcoming sprint with focus on user experience improvements.",
		},
	];

	return (
		<Timeline>
			<TimelineTitle>Some Title</TimelineTitle>
			<TimelineDescription>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem
				aliquid nam tempore est voluptate esse, cupiditate laudantium sint! Modi
				nobis quidem quas, soluta autem accusamus voluptatem officiis laudantium
				facilis?
			</TimelineDescription>
			{events.map((event) => (
				<TimelineItem
					key={event.title}
					variant={event.variant}
					icon={event.icon}
				>
					<TimelineContent time={event.time} variant={event.variant}>
						<TimelineContentTitle>{event.title}</TimelineContentTitle>
						<TimelineContentDescription>
							{event.description}
						</TimelineContentDescription>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
}

const CommunityTimeline = () => {
	return (
		<div className="flex flex-1 justify-center items-center p-12 max-w-6xl mx-auto">
			<TimelineDemo />
		</div>
	);
};

export default CommunityTimeline;
