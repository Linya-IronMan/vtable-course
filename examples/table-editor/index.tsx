import * as VTable from "@visactor/vtable";
import { columns } from "./data/columns";
import { records } from "./data/records";
import "pikaday/css/pikaday.css";

import "./editor/registry";
import { ListTableConstructorOptions } from "@visactor/vtable";
const option: ListTableConstructorOptions = {
	container: document.getElementById("container"),
	columns,
	records,
	defaultRowHeight: 40,
	editCellTrigger: "doubleclick",
};

const container = document.getElementById("main")!;

const instance = new VTable.ListTable(container, option);
