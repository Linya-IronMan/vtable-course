import { TYPES } from "@visactor/vtable";
import type { SvgIcon } from "@visactor/vtable/es/ts-types";
import { createSvgIcon } from "./utils";

export const getSvgSymbolIcon = (symbolId: string) => {
	const icon = createSvgIcon(symbolId);
	return {
		type: "svg",
		name: "svg-symbol-icon",
		svg: icon,
		positionType: TYPES.IconPosition.left,
		marginLeft: 10,
		width: 20,
		height: 20,
	} as SvgIcon;
};
