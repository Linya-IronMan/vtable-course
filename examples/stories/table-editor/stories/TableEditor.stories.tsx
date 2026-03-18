import { useEffect, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { createTableEditor } from "../../../table-editor/create-table-editor";

const TableEditorCanvas = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) {
			return;
		}

		let disposed = false;
		let cleanup: (() => void) | undefined;

		createTableEditor(container).then((instance) => {
			if (disposed) {
				instance.release();
				return;
			}

			cleanup = () => {
				instance.release();
				container.replaceChildren();
			};
		});

		return () => {
			disposed = true;
			cleanup?.();
		};
	}, []);

	return (
		<div
			style={{
				height: "100vh",
				padding: 16,
				boxSizing: "border-box",
				background: "#f5f7fa",
			}}
		>
			<div
				ref={containerRef}
				style={{
					height: "100%",
					width: "100%",
					background: "#fff",
					border: "1px solid #e5e7eb",
				}}
			/>
		</div>
	);
};

const meta = {
	title: "Table Editor/Overview",
	component: TableEditorCanvas,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof TableEditorCanvas>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
