import { EditContext } from "@visactor/vtable-editors";
import { RectProps } from "@visactor/vtable-editors";
import { IEditor } from "@visactor/vtable-editors";
import Pikaday from "pikaday";

export class DateEditor implements IEditor {
	element?: HTMLInputElement;
	container?: HTMLElement;
	successCallback?: Function;
	picker: any;
	constructor() {}
	onStart({ container, value, referencePosition, endEdit }: EditContext) {
		const that = this;
		this.container = container;
		this.successCallback = endEdit;
		const input = document.createElement("input");

		input.setAttribute("type", "text");

		input.style.padding = "4px";
		input.style.width = "100%";
		input.style.boxSizing = "border-box";
		input.style.position = "absolute";
		input.value = value as string;
		this.element = input;
		container.appendChild(input);
		// Pikaday是一个第三方日历组件
		const picker = new Pikaday({
			field: input,
			format: "D/M/YYYY",
			toString(date, format) {
				// you should do formatting based on the passed format,
				// but we will just return 'D/M/YYYY' for simplicity
				const day = date.getDate();
				const month = date.getMonth() + 1;
				const year = date.getFullYear();
				return `${year}年${month}月${day}日`;
			},
			parse(dateString, format) {
				// dateString is the result of `toString` method
				const parts = dateString.split("/");
				const day = parseInt(parts[0], 10);
				const month = parseInt(parts[1], 10) - 1;
				const year = parseInt(parts[2], 10);
				return new Date(year, month, day);
			},
			onSelect: function () {
				const date = this.getDate();
				that.successCallback?.();
			},
		});
		this.picker = picker;
		if (referencePosition?.rect) {
			this.adjustPosition(referencePosition.rect);
		}
		this.picker.show();
	}

	adjustPosition(rect: RectProps) {
		if (!this.element) throw new Error("[adjustPosition] element is nil");
		this.element.style.top = rect.top + "px";
		this.element.style.left = rect.left + "px";
		this.element.style.width = rect.width + "px";
		this.element.style.height = rect.height + "px";
	}
	getValue() {
		if (!this.element) throw new Error("[getValue] element is nil");
		return this.element.value;
	}
	onEnd() {
		if (!this.element) throw new Error("[onEnd] element is nil");
		if (!this.container) throw new Error("[onEnd] container is nil");
		this.picker.destroy();
		this.container.removeChild(this.element);
	}
	isEditorElement(target: HTMLElement) {
		if (target === this.element || this.picker.el.contains(target)) {
			return true;
		}
		return false;
	}
}
