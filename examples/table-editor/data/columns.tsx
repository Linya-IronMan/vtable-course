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
	{
		field: "areaChart", // 对应 records 中的数据字段
		title: "Area Chart",
		width: 320,
		cellType: "chart", // 单元格类型为图表
		chartModule: "vchart", // 关联注册的图表模块
		chartSpec: {
			// VChart 配置项
			type: "area",
			data: { id: "data" }, // 数据来源为当前单元格字段
			xField: "x",
			yField: "y",
			seriesField: "type",
			// 其他图表样式配置...
		},
	},
];
