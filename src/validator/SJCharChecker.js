

export const SJCharChecker = {
  NO_CHAR: 0,         // JIS第一水準、第二水準でも外字領域の文字でもない
  SINGLE_CHAR: 4,     // 半角英数字・記号など（ASCIIただし半角カタカナ以外）
  JIS_CHAR: 5,        // JIS第一水準、第二水準の漢字、ひらがな、記号など（標準的な全角）
  HALF_KANA_CHAR: 6,  // 半角カタカナ
  FULL_KANA_CHAR: 7,  // 全角カタカナ
  PRIVATE_CHAR: 9     // NEC特殊文字、NEC選定IBM拡張、IBM拡張文字など（JIS第一水準、第二水準範囲外の外字領域の全角文字）
};
