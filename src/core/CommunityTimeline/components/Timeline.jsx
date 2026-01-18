/*
  Component anatomy:

  <Timeline>
    <TimelineTitle> {title} </TimelineTitle>
    <TimelineDescription> {description} </TimelineDescription>
    <TimelineItem>
      <TimelineConnector />
      <TimelineContent time={time}>
        <TimelineContentTitle> {title}</TimelineContentTitle>
        <TimelineContentDescription>
          {description}
        </TimelineContentDescription>
      </TimelineContent>
    </TimelineItem>
  </Timeline>

  ...
*/

/*
Some honest confessions:
The DESIGN PATTERN is highly inspired from ui.shadcn.com 
*/

import { cva } from "class-variance-authority";
import { formatDistanceToNow } from "date-fns";
import React from "react";

import { cn } from "../../../lib/utils";

const timelineVariants = cva(
	"group/timeline flex flex-col w-full gap-0 max-w-2xl mx-auto",
	{
		variants: {
			position: {
				left: "items-start",
				center: "items-center",
				right: "items-end",
			},
		},
		defaultVariants: {
			position: "left",
		},
	},
);

const connectorDotVariants = cva(
	"size-5 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm ring-4 ring-white transition-transform duration-200 hover:scale-110",
	{
		variants: {
			variant: {
				default: "bg-gray-400",
				success: "bg-emerald-500",
				warning: "bg-amber-500",
				error: "bg-red-500",
				info: "bg-blue-500",
			},
			hasIcon: {
				true: "size-4 text-white",
				false: "",
			},
		},
		defaultVariants: {
			variant: "default",
			hasIcon: false,
		},
	},
);

const timeVariants = cva("text-sm font-medium block pl-1", {
	variants: {
		variant: {
			default: "text-gray-500",
			success: "text-emerald-600",
			warning: "text-amber-600",
			error: "text-red-600",
			info: "text-blue-600",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

// CVA variants for content card
const contentVariants = cva(
	"leading-normal p-4 rounded-xl bg-white transition-shadow duration-200 hover:shadow-md",
	{
		variants: {
			variant: {
				default: "border border-gray-400",
				gray: "border border-gray-200",
				success: "border-2 border-emerald-200",
				warning: "border-2 border-amber-200",
				error: "border-2 border-red-200",
				info: "border-2 border-blue-200",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

/**
 * The root container for the timeline.
 * @param {Object} props
 * @param {React.ReactNode} props.children - The timeline items to display.
 * @param {"left" | "center" | "right"} [props.position="left"] - Position of the timeline line.
 * @param {string?} [props.className] - Additional CSS classes.
 */
function Timeline({ children, position = "left", className }) {
	return (
		<div
			className={cn(
				timelineVariants({ position }),
				"[&>[data-slot=timeline-item]:last-child_[data-slot=timeline-line]]:opacity-0",
				className,
			)}
			data-slot="timeline-root"
			data-position={position}
		>
			{children}
		</div>
	);
}

/**
 * Renders the timeline title.
 * @param {Object} props
 * @param {React.ReactNode} props.children - The title content.
 * @param {string?} [props.className] - Additional CSS classes.
 */
function TimelineTitle({ children, className }) {
	return (
		<h2
			data-slot="timeline-title"
			className={cn(
				"text-gray-900 font-bold text-2xl pl-1 leading-tight mb-2",
				className,
			)}
		>
			{children}
		</h2>
	);
}

/**
 * Renders the timeline description.
 * @param {Object} props
 * @param {React.ReactNode} props.children - The description content.
 * @param {string?} [props.className] - Additional CSS classes.
 */
function TimelineDescription({ children, className }) {
	return (
		<p
			data-slot="timeline-description"
			className={cn("text-gray-600 text-sm pl-1 mb-6 max-w-lg", className)}
		>
			{children}
		</p>
	);
}

// internal use only
/**
 * Visual connector (dot and line) for timeline items.
 * @param {Object} props
 * @param {"default" | "success" | "warning" | "error" | "info"} [props.variant="default"] - Color variant.
 * @param {React.ReactNode} [props.icon] - Optional icon to display instead of dot.
 * @param {string?} [props.className] - Additional CSS classes for the connector container.
 */
function _TimelineConnector_({ variant = "default", icon, className }) {
	const renderIcon = () => {
		if (!icon) return null;

		// if its shape is like function Icon() {}
		if (React.isValidElement(icon)) {
			return React.cloneElement(icon, {
				className: `size-4 ${icon.props.className || ""}`,
			});
		}
		// if its shape is like <Icon/>
		const Icon = icon;
		return <Icon className="size-4" />;
	};

	return (
		<div
			data-slot="timeline-connector"
			className={cn("flex flex-col items-center", className)}
		>
			<div className={connectorDotVariants({ variant, hasIcon: !!icon })}>
				{renderIcon()}
			</div>
			<div
				data-slot="timeline-line"
				className="w-0.5 flex-1 min-h-4 bg-gray-200"
			/>
		</div>
	);
}

/**
 * Represents a single item in the timeline.
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the timeline item.
 * @param {"default" | "success" | "warning" | "error" | "info"} [props.variant="default"] - Color variant.
 * @param {React.ReactNode} [props.icon] - Optional icon for the connector.
 * @param {string?} [props.className] - Additional CSS classes.
 * @param {string?} [props.connectorClassName] - Additional CSS classes for the connector.
 */
function TimelineItem({
	children,
	variant = "default",
	icon,
	className,
	connectorClassName,
}) {
	return (
		<div
			data-slot="timeline-item"
			className={cn("flex gap-4 w-full group/item", className)}
		>
			<_TimelineConnector_
				variant={variant}
				icon={icon}
				className={connectorClassName}
			/>
			<div className="flex-1 pb-6">{children}</div>
		</div>
	);
}

/**
 * Displays the time for a timeline item.
 * @param {Object} props
 * @param {Date | string} props.time - The time to display.
 * @param {"default" | "success" | "warning" | "error" | "info"} [props.variant="default"] - Color variant.
 * @param {string?} [props.className] - Additional CSS classes.
 */
function TimelineTime({ time, variant = "default", className }) {
	const formatTime = (t) => {
		const date = t instanceof Date ? t : new Date(t);
		return formatDistanceToNow(date, { addSuffix: true });
	};

	return (
		<time
			data-slot="timeline-time"
			className={cn(timeVariants({ variant }), className)}
			dateTime={time instanceof Date ? time.toISOString() : time}
		>
			{formatTime(time)}
		</time>
	);
}

/**
 * Title for a timeline item.
 * @param {Object} props
 * @param {React.ReactNode} props.children - The title text.
 * @param {string?} [props.className] - Additional CSS classes.
 */
function TimelineContentTitle({ children, className }) {
	return (
		<h3
			data-slot="timeline-content-title"
			className={cn(
				"text-gray-900 font-semibold text-base leading-tight",
				className,
			)}
		>
			{children}
		</h3>
	);
}

/**
 * Description text for a timeline item.
 * @param {Object} props
 * @param {React.ReactNode} props.children - The description content.
 * @param {string} [props.className] - Additional CSS classes.
 */
function TimelineContentDescription({ children, className }) {
	return (
		<p
			data-slot="timeline-content-description"
			className={cn("text-gray-600 text-sm leading-relaxed mt-1", className)}
		>
			{children}
		</p>
	);
}

/**
 * Displays the content for a timeline item.
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to display.
 * @param {Date | string} [props.time] - The time associated with the content.
 * @param {"default" | "success" | "warning" | "error" | "info"} [props.variant="default"] - Color variant for styling.
 * @param {string} [props.className] - Additional CSS classes for the container.
 */
function TimelineContent({ time, children, variant = "default", className }) {
	return (
		<div className={cn("flex flex-col gap-1")} data-slot="timeline-content">
			{time && <TimelineTime time={time} variant={variant} />}
			<div className={cn(contentVariants({ variant }), className)}>
				{children}
			</div>
		</div>
	);
}

export {
	Timeline,
	TimelineItem,
	TimelineContent,
	TimelineTime,
	TimelineContentTitle,
	TimelineContentDescription,
	TimelineTitle,
	TimelineDescription,
};
