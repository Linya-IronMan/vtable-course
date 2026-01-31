import { TYPES } from "@visactor/vtable";
import { ImageIcon } from "@visactor/vtable/es/ts-types";
import { createIconPath } from "./utils";

export const svgSymbolIcon: ImageIcon = {
	type: "image",
	name: "svg-symbol-icon",
	src: createIconPath("icon-csv"),
	positionType: TYPES.IconPosition.left,
	marginLeft: 10,
	width: 20,
	height: 20,
};
