import { TYPES } from "@visactor/vtable";
import { TextIcon } from "@visactor/vtable/es/ts-types";
import { ICON_FONT_FAMILY } from "./constants";

const icon = String.fromCodePoint(parseInt("\e6a5", 16));
export const textIcon: TextIcon = {
	type: "text",
	content: icon,
	name: "text-button",
	positionType: TYPES.IconPosition.left,
	marginLeft: 10,
	style: {
		cursor: "pointer",
		fontFamily: ICON_FONT_FAMILY,
		width: 20,
		height: 20,
		fontSize: 20,
	} as any,
};
