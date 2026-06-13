// ==========================================
// 心怡課表設定檔 config.js
// ==========================================

// Google Calendar API Key
const API_KEY = 'AIzaSyBO6Rc4dlEDQbCZNM_H63CfHTvxnVX8ecc';

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
  "晚_東認：5/14(Word)、6/9(PPT)、7/14(Excel)、7/20(AI24)、8/20(2,4_Word)、9/15(2,4_PPT)",
  "晚_北認 AI：5/29(AI+Word)、6/12(AI+Excel)、7/9(AI生活)",
  "晚_北認 Office：6/27(六_Excel)、7/6(1,3,5_Excel)、8/6(2,4_PPT)",
  "整_新莊：6/28(日_AI24)、10/20(2,4_AI24)",
];
