import * as VTable from "@visactor/vtable";
import { columns } from "./data/columns";
import { records } from "./data/records";
import "pikaday/css/pikaday.css";

import { ListTableConstructorOptions } from "@visactor/vtable";
import "./registry";
import { setUp } from "./registry";

// NOTE[epic=编辑器使用介绍,seq=0] 表格的初始化
setUp().then(() => {
	const option: ListTableConstructorOptions = {
		container: document.getElementById("container"),
		// NOTE[epic=编辑器使用介绍,seq=1] 表格的列配置，会在其中指定编辑器
		columns,
		records,
		defaultRowHeight: 300,
		defaultHeaderRowHeight: [30],
		editCellTrigger: "doubleclick",
		theme: "custom-theme" as any,
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
