import { ICON_FONT_FAMILY } from "./constants";

const iconPool = [
	"url('https://at.alicdn.com/t/c/font_5078475_05rtxdjro3ht.woff2?t=1769122605954') format('woff2')",
	"url('https://at.alicdn.com/t/c/font_5078475_05rtxdjro3ht.woff?t=1769122605954') format('woff')",
	"url('https://at.alicdn.com/t/c/font_5078475_05rtxdjro3ht.ttf?t=1769122605954') format('truetype')",
	"url('https://at.alicdn.com/t/c/font_5078475_05rtxdjro3ht.svg?t=1769122605954#iconfont') format('svg')",
];
export const textIconSetup = async () => {
	const face = new FontFace(ICON_FONT_FAMILY, iconPool.join(", "));
	const loaded = await face.load();
	document.fonts.add(loaded);
};
