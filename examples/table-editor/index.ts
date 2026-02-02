import * as VTable from "@visactor/vtable";
import { records } from "./data/records";
import "pikaday/css/pikaday.css";

import type { ListTableConstructorOptions } from "@visactor/vtable";
import "./registry";
import { setup } from "./registry";
import { getColumns } from "./data/columns";

// NOTE[epic=编辑器使用介绍,seq=0] 表格的初始化
setup().then(() => {
	const option: ListTableConstructorOptions = {
		container: document.getElementById("container"),
		// NOTE[epic=编辑器使用介绍,seq=1] 表格的列配置，会在其中指定编辑器
		columns: getColumns(),
		records,
		defaultRowHeight: 300,
		defaultHeaderRowHeight: [30],
		editCellTrigger: "doubleclick",
		// theme: "custom-theme" as any,
		frozenColCount: 3,
	};
	const container = document.getElementById("main")!;

	const instance = new VTable.ListTable(container, option);

	instance.addEventListener("icon_click", (args) => {
		console.info("event_icon_click", args);
		if (args.name === "text-button") {
			console.log("文本图标被点击", args.row, args.col);
		}
	});
});
