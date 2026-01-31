export function createSvgIcon(symbolId: string) {
	const symbol = document.getElementById(symbolId);
	if (!symbol) return "";

	const viewBox = symbol.getAttribute("viewBox");

	const svgHeader = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">`;
	const svgContent = symbol.innerHTML;
	const svgFooter = `</svg>`;
	const fullSvgString = svgHeader + svgContent + svgFooter;

	return fullSvgString;
}
