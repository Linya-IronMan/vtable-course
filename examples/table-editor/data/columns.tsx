import { ColumnsDefine } from "@visactor/vtable";
import { TableChartModule, TableEditorType } from "../constants";
import {
	createGroup,
	createImage,
	createSymbol,
	createText,
	graphicCreator,
} from "@visactor/vtable/es/vrender";
import { ICON_FONT_FAMILY } from "../icon/constants";
import { headerFilterIcon } from "../icon/icon-svg-header-filter";
import { svgBackground } from "../public/svg-background";
import { createSvgIcon } from "../icon/utils";

export const getColumns = () => {
	const columns: ColumnsDefine = [
		{
			title: "name",
			field: "name",
			// NOTE[epic=编辑器使用介绍,seq=3] 列配置中通过editor字段指定编辑器
			editor: TableEditorType.INPUT_EDITOR,
		},
		// NOTE[epic=编辑器使用介绍,seq=3] 官方暂时没有数字Editor
		{ title: "age", field: "age", editor: TableEditorType.NUMBER_EDITOR },
		{
			title: "gender",
			field: "gender",
			editor: TableEditorType.LIST_EDITOR,
		},
		{
			title: "address",
			field: "address",
			editor: TableEditorType.TEXT_EDITOR,
		},
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
		{
			field: "font-icon",
			title: "font icon path",
			width: "auto",
			icon: ["icon-arrow_down"],
		},
		{
			field: "image-icon",
			title: "image icon path",
			width: "auto",
			icon: ["image-icon"],
		},
		{
			field: "svg-symbol-icon",
			title: "svg icon symbol",
			width: "auto",
			icon: ["svg-symbol-icon"],
		},
		{
			field: "null",
			title: "font icon",
			width: "auto",
			customLayout: (args) => {
				const { table, row, col, rect } = args;
				const { height, width } = rect ?? table.getCellRect(col, row);
				const icon = String.fromCodePoint(parseInt("\e6a5", 16));
				const root = createGroup({
					display: "flex",
					alignContent: "center",
					alignItems: "center",
					justifyContent: "space-between",
					width,
					height,
				});

				const text = createText({
					text: icon,
					fontSize: 20,
					fontFamily: ICON_FONT_FAMILY,
					fill: "red",
					textBaseline: "alphabetic",
				});
				const symbol = createSymbol({
					symbolType: createSvgIcon("icon-mp3"),
					background: " ", // 必须有东西不能为空字符串
					size: 20,
					texture: "rect",
					texturePadding: 10,
					textureColor: "red",
					cursor: "pointer",
				});
				root.add(text);
				root.add(symbol);

				return {
					rootContainer: root,
					renderDefault: false,
				};
			},
		},
	];

	return columns;
};
function createIconPath(
	arg0: string,
): string | HTMLImageElement | HTMLCanvasElement | undefined {
	throw new Error("Function not implemented.");
}
