import { register } from "@visactor/vtable";
import VChart from "@visactor/vchart";
import { svgIconSetup, textIconSetup } from "./icon/setup";

// NOTE[epic=编辑器使用介绍,seq=6] 使用官方编辑器前需要安装对应依赖
import {
	TextAreaEditor,
	DateInputEditor,
	ListEditor,
	InputEditor,
} from "@visactor/vtable-editors";

import { DateEditor } from "./editor/date-editor";
import { TableChartModule, TableEditorType } from "./constants";
import { theme } from "./theme/base";
import { CustomInputEditor } from "./editor/input-editor";
import { textIcon } from "./icon/icon-text";
import { svgIcon } from "./icon/icon-path";
import { imageIcon } from "./icon/icon-image";
import { svgSymbolIcon } from "./icon/icon-svg-symbol-icon";

// NOTE[epic=编辑器使用介绍,seq=5] 编辑器实例化及注册，系统编辑器，文本、日期、列表
const numberEditor = new CustomInputEditor({}, "number");
const inputEditor = new InputEditor();
const textAreaEditor = new TextAreaEditor();
const dateInputEditor = new DateInputEditor();
const listEditor = new ListEditor({ values: ["女", "男"] });

const custom_date_editor = new DateEditor();

export const setUp = async () => {
	register.editor(TableEditorType.INPUT_EDITOR, inputEditor);
	register.editor(TableEditorType.NUMBER_EDITOR, numberEditor);
	register.editor(TableEditorType.TEXT_EDITOR, textAreaEditor);
	register.editor(TableEditorType.DATE_EDITOR, dateInputEditor);
	register.editor(TableEditorType.LIST_EDITOR, listEditor);
	register.editor(TableEditorType.CUSTOM_DATE_EDITOR, custom_date_editor);

	// 注册 vchart 图表模块
	register.chartModule(TableChartModule.VCHART, VChart);

	// Icon 注册
	await svgIconSetup();
	await textIconSetup();
	register.icon("text-button1", textIcon);
	register.icon("icon-arrow_down", svgIcon as any);
	register.icon("image-icon", imageIcon);
	register.icon("svg-symbol-icon", svgSymbolIcon);

	// 主题注册
	register.theme("custom-theme", theme);
};
