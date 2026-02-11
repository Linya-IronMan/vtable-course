import {
	type EditContext,
	type PrepareEditContext,
	ValidateEnum,
} from "@visactor/vtable-editors";
import type { RectProps } from "@visactor/vtable-editors";
import type { IEditor } from "@visactor/vtable-editors";
import Pikaday from "pikaday";

export class DateEditor implements IEditor {
	element?: HTMLInputElement;
	container?: HTMLElement;
	successCallback?: (payload: any) => void;
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
				that.successCallback?.(date);
			},
		});
		this.picker = picker;
		if (referencePosition?.rect) {
			// 获取到当前单元格的位置信息，调整日期选择器的位置
			this.adjustPosition(referencePosition.rect);
		}
		this.picker.show();
	}

	adjustPosition(rect: RectProps) {
		if (!this.element) throw new Error("[adjustPosition] element is nil");
		this.element.style.top = rect.top + "px";
		this.element.style.left = rect.left + "px";
		// 调整日期选择器的宽度和高度与单元格一致
		this.element.style.width = rect.width + "px";
		this.element.style.height = rect.height + "px";
	}

	prepareEdit(context: PrepareEditContext<string, unknown>) {}
	setValue(value: string) {
		if (!this.element) return;
		this.element.value = value;
	}
	validateValue(newValue?: string, oldValue?: string) {
		// NOTE: ValidateEnum.invalidateExit 如果返回此枚举，当前editor需要有 setValue 方法，否则会报错
		// NOTE: exit 会调用 onEnd 方法，清除一些副作用，退出编辑
		return ValidateEnum.invalidateExit;
	}
	getValue() {
		if (!this.element) throw new Error("[getValue] element is nil");
		return this.element.value;
	}
	onEnd() {
		//清除一些副作用，例如日期选择器的实例
		// validateValue 即使无效，也会执行onEnd
		if (!this.element) throw new Error("[onEnd] element is nil");
		if (!this.container) throw new Error("[onEnd] container is nil");
		this.picker.destroy();
		this.container.removeChild(this.element);
	}
	isEditorElement(target: HTMLElement) {
		// 判断点击位置是否在日期编辑器上，确定是否需要退出编辑
		if (target === this.element || this.picker.el.contains(target)) {
			return true;
		}
		return false;
	}
}
