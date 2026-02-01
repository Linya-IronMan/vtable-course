import * as VTable from "@visactor/vtable";
import type { IBasicHeaderDefine } from "@visactor/vtable/es/ts-types/list-table/define/basic-define";
export const headerFilterIcon: IBasicHeaderDefine["headerIcon"] = [
	{
		type: "svg", //指定svg格式图标，其他还支持path，image
		svg: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M1.29609 1C0.745635 1 0.444871 1.64195 0.797169 2.06491L4.64953 6.68988V9.81861C4.64953 9.89573 4.69727 9.9648 4.76942 9.99205L7.11236 10.877C7.27164 10.9372 7.4419 10.8195 7.4419 10.6492V6.68988L11.2239 2.06012C11.5703 1.63606 11.2685 1 10.721 1H1.29609Z" stroke="#141414" stroke-opacity="0.65" stroke-width="1.18463" stroke-linejoin="round"/>
        </svg>`,
		width: 20,
		height: 20,
		name: "filter", //定义图标的名称，在内部会作为缓存的key值
		positionType: VTable.TYPES.IconPosition.absoluteRight, // 指定位置，可以在文本的前后，或者在绝对定位在单元格的左侧右侧
		visibleTime: "mouseenter_cell", // 显示时机， 'always' | 'mouseenter_cell' | 'click_cell'
		hover: {
			// 热区大小
			width: 26,
			height: 26,
			bgColor: "rgba(22,44,66,0.5)",
		},
		tooltip: {
			style: { arrowMark: false },
			// 气泡框，按钮的的解释信息
			title: "过滤",
			placement: VTable.TYPES.Placement.right,
		},
	},
];
