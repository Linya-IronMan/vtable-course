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

export const svgIconSetup = (url = "/iconfont.js") => {
	return new Promise((resolve, reject) => {
		// 1. 检查是否已经加载过
		const existingScript = document.querySelector(`script[src="${url}"]`);
		if (existingScript) {
			// 如果已存在，直接检查 SVG 是否就绪
			if (document.querySelector("svg symbol")) {
				return resolve(true);
			}
		}

		const script = document.createElement("script");
		script.src = url;
		script.async = true;

		// 2. 脚本加载成功后的逻辑
		script.onload = () => {
			// Iconfont 脚本执行是同步的，但注入 DOM 可能有微小延迟
			// 使用 MutationObserver 或简单的轮询确保 <symbol> 节点已存在
			let retryCount = 0;
			const checkTimer = setInterval(() => {
				const hasSymbols = document.querySelector("svg symbol");
				if (hasSymbols) {
					clearInterval(checkTimer);
					resolve(true);
				} else if (retryCount > 50) {
					// 超过 2.5 秒还没加载出来则报错
					clearInterval(checkTimer);
					reject(
						new Error(
							"Iconfont loaded but no symbols found in DOM.",
						),
					);
				}
				retryCount++;
			}, 50);
		};

		// 3. 错误处理
		script.onerror = () => {
			reject(new Error(`Failed to load iconfont script from: ${url}`));
		};

		document.head.appendChild(script);
	});
};
