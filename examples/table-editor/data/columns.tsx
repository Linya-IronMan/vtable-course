import { ColumnsDefine } from "@visactor/vtable";
import { TableChartModule, TableEditorType } from "../constants";
import { headerFilterIcon } from "../icon/svg-header-filter";

export const columns: ColumnsDefine = [
	{
		title: "name",
		field: "name",
		// NOTE[epic=编辑器使用介绍,seq=3] 列配置中通过editor字段指定编辑器
		editor: (args) => {
			if (args.row % 2 == 0) return TableEditorType.NAME_EDITOR;
			else return "name-editor2";
		},
	},
	{ title: "age", field: "age", editor: TableEditorType.NUMBER_EDITOR },
	{ title: "gender", field: "gender", editor: TableEditorType.LIST_EDITOR },
	{ title: "address", field: "address", editor: TableEditorType.TEXT_EDITOR },
	{
		title: "birthday",
		field: "birthDate",
		editor: TableEditorType.DATE_EDITOR,
	},
	{
		title: "自定义日期编辑器",
		field: "customDate",
		editor: TableEditorType.CUSTOM_DATE_EDITOR,
	},
	{
		field: "areaChart", // 对应 records 中的数据字段
		title: "Area Chart",
		width: 320,
		cellType: "chart",
		chartModule: TableChartModule.VCHART, // 关联注册的图表模块
		chartSpec: {
			type: "area",
			data: { id: "data" }, // 固定配置，数据来源为当前单元格字段
			xField: "x",
			yField: "y",
			seriesField: "type",
		},
		headerIcon: headerFilterIcon,
	},
	{
		field: "null",
		title: "text icon",
		width: "auto",
		icon: ["text-button1"],
	},
];
