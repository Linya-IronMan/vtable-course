import * as VTable from "@visactor/vtable";
import type { ListTableConstructorOptions } from "@visactor/vtable";
import "pikaday/css/pikaday.css";

import { getColumns } from "./data/columns";
import { records } from "./data/records";
import { setup } from "./registry";

export const createTableEditor = async (container: HTMLElement) => {
	await setup();

	const option: ListTableConstructorOptions = {
		columns: getColumns(),
		records,
		defaultRowHeight: 300,
		defaultHeaderRowHeight: [30],
		editCellTrigger: "doubleclick",
		theme: "custom-theme" as any,
		frozenColCount: 3,
	};

	const instance = new VTable.ListTable(container, option);

	instance.addEventListener("icon_click", (args) => {
		console.info("event_icon_click", args);
		if (args.name === "text-button") {
			console.log("文本图标被点击", args.row, args.col);
		}
	});

	return instance;
};
