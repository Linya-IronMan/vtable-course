import { TYPES } from "@visactor/vtable";
import { TextIcon } from "@visactor/vtable/es/ts-types";

const icon = String.fromCodePoint(parseInt("\e6a5", 16));
export const textIcon: TextIcon = {
	type: "text",
	content: icon,
	name: "text-button",
	positionType: TYPES.IconPosition.left,
	marginLeft: 10,
	style: {
		cursor: "pointer",
		fontFamily: "base-iconfont",
		width: 20,
		height: 20,
		fontSize: 20,
	} as any,
};
