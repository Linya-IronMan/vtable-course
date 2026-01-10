import { register } from "@visactor/vtable";
import {
	TextAreaEditor,
	DateInputEditor,
	ListEditor,
} from "@visactor/vtable-editors";
import { InputEditor } from "@visactor/vtable-editors";

const inputEditor = new InputEditor();
const textAreaEditor = new TextAreaEditor();
const dateInputEditor = new DateInputEditor();
const listEditor = new ListEditor({ values: ["女", "男"] });

register.editor("name-editor", inputEditor);
register.editor("textArea-editor", textAreaEditor);
register.editor("date-editor", dateInputEditor);
register.editor("list-editor", listEditor);
