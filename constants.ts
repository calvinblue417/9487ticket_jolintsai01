// 1. 測試模式開關 (TEST MODE)
// 設定為 true: 跳過倒數，直接開始遊戲 (方便測試)
// 設定為 false: 正式上線，啟用倒數計時
export const TEST_MODE = false;

// 2. 遊戲設定
export const TARGET_DATE = "2025-11-30T20:00:00"; // 遊戲開始時間
export const GITHUB_BASE_URL = ""; // 圖片素材路徑

// 3. 題目答案設定 (CARDS)
// 請在 answer 欄位填入正確的咒語答案
export const CARDS_CONFIG = [
  { id: 1, answer: "5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9" },
  { id: 2, answer: "5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9" },
  { id: 3, answer: "5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9" },
  { id: 4, answer: "5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9" },
  { id: 5, answer: "5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9" },
  { id: 6, answer: "5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9" },
  { id: 7, answer: "5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9" },
];

// 4. 最終題目答案 (LIGHT 3)
export const FINAL_ANSWER = "86e50149658661312a9e0b35558d84f6c6d3da797f552a9657fe0558ca40cdef";

// 圖片路徑輔助函式
export const getImg = (name: string) => `/${name}`;
