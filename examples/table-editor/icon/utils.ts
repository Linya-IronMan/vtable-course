export function createIconPath(symbolId: string) {
	const symbol = document.getElementById(symbolId);
	if (!symbol) return "";

	// 1. 获取 symbol 的 viewBox (如果有的话)
	const viewBox = symbol.getAttribute("viewBox");

	// 2. 将 symbol 的内部 HTML 包装成一个完整的 <svg>
	// 注意：必须添加 xmlns 命名空间，否则 Image 对象可能无法解析
	const svgHeader = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${1024}" height="${1024}">`;
	const svgContent = symbol.innerHTML;
	const svgFooter = `</svg>`;
	const fullSvgString = svgHeader + svgContent + svgFooter;

	// 3. 转换为 Blob URL
	const svgBlob = new Blob([fullSvgString], {
		type: "image/svg+xml;charset=utf-8",
	});
	const url = URL.createObjectURL(svgBlob);

	return url;
}
