import { TYPES } from "@visactor/vtable";
import { ColumnIconOption, TextIcon } from "@visactor/vtable/es/ts-types";

export const textIcon: TextIcon = {
	type: "text",
	content: "click222",
	name: "text-button",
	positionType: TYPES.IconPosition.left,
	marginLeft: 10,
	// TODO any
	style: {
		cursor: "pointer",
		fill: "pink",
	} as any,
};
