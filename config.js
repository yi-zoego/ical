// ==========================================
// 心怡課表設定檔 config.js
// ==========================================

// Google Calendar API Key
const API_KEY = 'AIzaSyBwoiX4br9ZcC5fIBXGW3H_b7eeQ9D28wU';

// 承辦人群組（順序就是顯示順序）
const GROUPS = ["英俊", "歐", "Joanna", "怡平", "如意"];

// 承辦人顯示名稱對應（標題裡的關鍵字 → 顯示名稱）
const GROUP_LABELS = {
  英俊: "英俊",
  歐: "歐",
  Joanna: "Joanna",
  怡平: "怡平(卿)",
  如意: "如意(卿)",
};

// 忽略的公司名（完全符合才忽略）
const IGNORE_COMPANIES = ["新莊", "東認", "北認"];

// 備忘區（每一項為一行，顯示於頁面下方）
const MEMO = [
  "整_新莊：每週二全天",
  "晚_東認：每週三晚上",
  "晚_北認：每週四晚上",
];
