import { ColumnsDefine } from "@visactor/vtable";

export const columns: ColumnsDefine = [
	{
		title: "name",
		field: "name",
		editor: (args) => {
			if (args.row % 2 == 0) return "name-editor";
			else return "name-editor2";
		},
	},
	{ title: "age", field: "age", editor: "number-editor" },
	{ title: "gender", field: "gender", editor: "list-editor" },
	{ title: "address", field: "address", editor: "textArea-editor" },
	{ title: "birthday", field: "birthDate", editor: "date-editor" },
	{ title: "自定义日期编辑器", field: "customDate", editor: "custom-date" },
];
