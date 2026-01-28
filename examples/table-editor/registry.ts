import { register } from "@visactor/vtable";
import VChart from "@visactor/vchart";

// NOTE[epic=编辑器使用介绍,seq=6] 使用官方编辑器前需要安装对应依赖
import {
	TextAreaEditor,
	DateInputEditor,
	ListEditor,
	InputEditor,
} from "@visactor/vtable-editors";

import { DateEditor } from "./editor/date-editor";
import { TableChartModule, TableEditorType } from "./constants";
import { textIcon } from "./icon/text-icon";
import { theme } from "./theme/base";

// NOTE[epic=编辑器使用介绍,seq=5] 编辑器实例化及注册，系统编辑器，文本、日期、列表
const inputEditor = new InputEditor();
const textAreaEditor = new TextAreaEditor();
const dateInputEditor = new DateInputEditor();
const listEditor = new ListEditor({ values: ["女", "男"] });

const custom_date_editor = new DateEditor();

register.editor(TableEditorType.INPUT_EDITOR, inputEditor);
register.editor(TableEditorType.TEXT_EDITOR, textAreaEditor);
register.editor(TableEditorType.DATE_EDITOR, dateInputEditor);
register.editor(TableEditorType.LIST_EDITOR, listEditor);
register.editor(TableEditorType.CUSTOM_DATE_EDITOR, custom_date_editor);

// 注册 vchart 图表模块
register.chartModule(TableChartModule.VCHART, VChart);

// Icon 注册
register.icon("text-button1", textIcon);

// 主题注册
register.theme("custom-theme", theme);
