/**
 * 新聞資料庫
 * 包含所有遊戲中使用的新聞數據
 */

export const CARD_STATUS = {
	default: 'default',
	verifying: 'verifying',
	disabled: 'disabled',
};

//titleIndex: 0 = 超級聳動, 1 = 一般聳動, 2 = 平鋪直敘
export const NEWS_DATABASE = [
	{
		id: 1,
		title: '新聞標題 1',
		description: '新聞描述 1',
		isReal: true,
		isVerified: false
		status: CARD_STATUS.default,
		titles: [
			{ name: '標題來源 1' },
			{ name: '標題來源 2' },
			{ name: '標題來源 3' },
		],
	},
	{
		id: 2,
		title: '新聞標題 2',
		description: '新聞描述 2',
		isReal: false,
		isVerified: false,
		status: CARD_STATUS.default,
		titles: [
			{ name: '標題來源 1' },
			{ name: '標題來源 2' },
			{ name: '標題來源 3' },
		],
	},
	{
		id: 3,
		title: '新聞標題 3',
		description: '新聞描述 3',
		isReal: true,
		isVerified: false,
		status: CARD_STATUS.default,
		titles: [
			{ name: '標題來源 1' },
			{ name: '標題來源 2' },
			{ name: '標題來源 3' },
		],
	},
	{
		id: 4,
		title: '新聞標題 4',
		description: '新聞描述 4',
		isReal: false,
		isVerified: false,
		status: CARD_STATUS.default,
		titles: [
			{ name: '標題來源 1', reliability: 42, fansCount: 4500 },
			{ name: '標題來源 2', reliability: 35, fansCount: 2800 },
			{ name: '標題來源 3', reliability: 48, fansCount: 5500 },
		],
	},
	{
		id: 5,
		title: '新聞標題 5',
		description: '新聞描述 5',
		isReal: true,
		isVerified: false,
		status: CARD_STATUS.default,
		titles: [
			{ name: '標題來源 1', reliability: 90, fansCount: 18000 },
			{ name: '標題來源 2', reliability: 82, fansCount: 13000 },
			{ name: '標題來源 3', reliability: 87, fansCount: 22000 },
		],
	},
	{
		id: 6,
		title: '新聞標題 6',
		description: '新聞描述 6',
		isReal: false,
		isVerified: false,
		status: CARD_STATUS.default,
		titles: [
			{ name: '標題來源 1', reliability: 40, fansCount: 4000 },
			{ name: '標題來源 2', reliability: 33, fansCount: 2500 },
			{ name: '標題來源 3', reliability: 46, fansCount: 5000 },
		],
	},
	{
		id: 7,
		title: '新聞標題 7',
		description: '新聞描述 7',
		isReal: true,
		isVerified: false,
		status: CARD_STATUS.default,
		titles: [
			{ name: '標題來源 1', reliability: 86, fansCount: 14000 },
			{ name: '標題來源 2', reliability: 75, fansCount: 10000 },
			{ name: '標題來源 3', reliability: 92, fansCount: 28000 },
		],
	},
	{
		id: 8,
		title: '新聞標題 8',
		description: '新聞描述 8',
		isReal: false,
		isVerified: false,
		status: CARD_STATUS.default,
		titles: [
			{ name: '標題來源 1', reliability: 44, fansCount: 4800 },
			{ name: '標題來源 2', reliability: 37, fansCount: 3000 },
			{ name: '標題來源 3', reliability: 50, fansCount: 6000 },
		],
	},
];
