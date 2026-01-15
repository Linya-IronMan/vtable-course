import { register } from "@visactor/vtable";
import VChart from "@visactor/vchart";
import {
	TextAreaEditor,
	DateInputEditor,
	ListEditor,
} from "@visactor/vtable-editors";
import { InputEditor } from "@visactor/vtable-editors";

import { DateEditor } from "./editor/date-editor";
import { TableChartModule, TableEditorType } from "./constants";

const inputEditor = new InputEditor();
const textAreaEditor = new TextAreaEditor();
const dateInputEditor = new DateInputEditor();
const listEditor = new ListEditor({ values: ["女", "男"] });
const custom_date_editor = new DateEditor({});

register.editor(TableEditorType.NAME_EDITOR, inputEditor);
register.editor(TableEditorType.TEXT_EDITOR, textAreaEditor);
register.editor(TableEditorType.DATE_EDITOR, dateInputEditor);
register.editor(TableEditorType.LIST_EDITOR, listEditor);
register.editor(TableEditorType.CUSTOM_DATE_EDITOR, custom_date_editor);

// 注册 vchart 图表模块
register.chartModule(TableChartModule.VCHART, VChart);
