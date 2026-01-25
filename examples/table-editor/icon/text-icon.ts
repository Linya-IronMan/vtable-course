import { TYPES } from "@visactor/vtable";
import { TextIcon } from "@visactor/vtable/es/ts-types";

export const textIcon: TextIcon = {
	type: "text",
	content: "click222",
	name: "text-button",
	positionType: TYPES.IconPosition.left,
	marginLeft: 10,
	style: {
		cursor: "pointer",
		fill: "pink",
	} as any,
};
