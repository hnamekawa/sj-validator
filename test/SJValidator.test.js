// const isCP932 = require('../src/SJValidator');
import { isCP932 } from '../src/SJValidator';

//
// 0xe0 - 0xe7 を除いた すべての先頭2バイトの組み合わせのCP932の文字をテスト
// 0xe0 - 0xe7 は全部CP932外文字なのでテストから除外
//
test('isCP932 returns true for valid CP932 strings', () => {
    const validCP932Strings = "!ΑЁ丁企威嬉封崇市弁樂欄氈洄清漁稀笂簀紀縁缶言謀谷贄踈較騁鬆鰀鴃鸙鼇‐℃∀⌒①─♪　㈱㌃倅儀刀匀吁唄嘆圀堀夂怎愀戀持搆攀昀最栁椀瀁焄爆猖球甁瘁省砂礁耀脂舁茁萃蔀蘂蜀蠅褂退鄂鈆錂鐃長阡需頁餃朗﨎！";
    expect(isCP932(validCP932Strings)).toBe(true);
});
