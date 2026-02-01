import type { ITableThemeDefine } from "@visactor/vtable/es/themes";

export const theme: ITableThemeDefine = {
	//默认样式，如bodyStyle或者headerStyle未设置某项配置则从这里获取相应样式
	defaultStyle: {
		color: "#1B1F23",
		bgColor: "#EEF1F5",
		lineHeight: 16,
		borderColor: "#e1e4e8",
		padding: [8, 12, 8, 12],
	},
	headerStyle: {
		color: "#1B1F23",
		bgColor: "#EEF1F5",
		lineHeight: 16,
		borderColor: "#e1e4e8",
		padding: [8, 12, 8, 12],
		hover: {
			//hover状态单元格样式
			cellBgColor: "#c8daf6",
		},
	},
	rowHeaderStyle: {},
	cornerHeaderStyle: {},
	bodyStyle: {
		padding: [8, 12, 8, 12],
		color: "#141414",
		textAlign: "right",
		bgColor(args) {
			// 支持自定义函数设置，如这里设置第一列指定颜色为yellow 其他为skyblue
			const { col } = args;
			if (col === 4) {
				return "yellow";
			} else {
				return "skyblue";
			}
		},
		borderColor: "#e1e4e8",
		lineHeight: 18,
		hover: {
			cellBgColor: "#d6e6fe",
			inlineRowBgColor: "#F3F8FF",
			inlineColumnBgColor: "#F3F8FF",
		},
	},
	//表格外边框样式
	frameStyle: {
		borderColor: "#d1d5da",
		borderLineWidth: 1,
		borderLineDash: [],
		cornerRadius: 10,
		shadowBlur: 6,
		shadowOffsetX: 0,
		shadowOffsetY: 0,
		shadowColor: "rgba(00, 24, 47, 0.06)",
	},
	//拖拽列宽分割线样式
	columnResize: {
		lineWidth: 1,
		lineColor: "#416EFF",
		bgColor: "#D9E2FF",
		width: 3,
	},
	//冻结列分割线样式
	frozenColumnLine: {
		shadow: {
			width: 4,
			startColor: "rgba(00, 24, 47, 0.05)",
			endColor: "rgba(00, 24, 47, 0)",
			visible: "scrolling",
		},
	},
};
