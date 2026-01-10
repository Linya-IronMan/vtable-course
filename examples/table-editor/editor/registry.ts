import { register } from "@visactor/vtable";
import {
	TextAreaEditor,
	DateInputEditor,
	ListEditor,
} from "@visactor/vtable-editors";
import { InputEditor } from "@visactor/vtable-editors";
import { DateEditor } from "./date-editor";

const inputEditor = new InputEditor();
const textAreaEditor = new TextAreaEditor();
const dateInputEditor = new DateInputEditor();
const listEditor = new ListEditor({ values: ["女", "男"] });
const custom_date_editor = new DateEditor({});

register.editor("name-editor", inputEditor);
register.editor("textArea-editor", textAreaEditor);
register.editor("date-editor", dateInputEditor);
register.editor("list-editor", listEditor);
register.editor("custom-date", custom_date_editor);
