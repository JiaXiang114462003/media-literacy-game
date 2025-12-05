/**
 * 新聞資料庫
 * 包含所有遊戲中使用的新聞數據
 */

export const CARD_STATUS = {
  default: "default",
  verifying: "verifying",
  disabled: "disabled",
};

export const NEWS_DATABASE = [
  {
    id: 1,
    title: "新聞標題 1",
    description: "新聞描述 1",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
  },
  {
    id: 2,
    title: "新聞標題 2",
    description: "新聞描述 2",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
  },
  {
    id: 3,
    title: "新聞標題 3",
    description: "新聞描述 3",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
  },
  {
    id: 4,
    title: "新聞標題 4",
    description: "新聞描述 4",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
  },
  {
    id: 5,
    title: "新聞標題 5",
    description: "新聞描述 5",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
  },
  {
    id: 6,
    title: "新聞標題 6",
    description: "新聞描述 6",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
  },
  {
    id: 7,
    title: "新聞標題 7",
    description: "新聞描述 7",
    isReal: true,
    isVerified: false,
    status: CARD_STATUS.default,
  },
  {
    id: 8,
    title: "新聞標題 8",
    description: "新聞描述 8",
    isReal: false,
    isVerified: false,
    status: CARD_STATUS.default,
  },
];
