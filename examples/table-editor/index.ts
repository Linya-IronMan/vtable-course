import * as VTable from "@visactor/vtable";
import { columns } from "./data/columns";
import { records } from "./data/records";
import "pikaday/css/pikaday.css";

import "./registry";
import { ListTableConstructorOptions } from "@visactor/vtable";
const option: ListTableConstructorOptions = {
	container: document.getElementById("container"),
	columns,
	records,
	defaultRowHeight: 300,
	defaultHeaderRowHeight: [30],
	editCellTrigger: "doubleclick",
};

const container = document.getElementById("main")!;

const instance = new VTable.ListTable(container, option);

instance.addEventListener("icon_click", (args) => {
	console.info("event_icon_click", args);
	if (args.name === "text-button") {
		console.log("文本图标被点击", args.row, args.col);
	}
});
