 
    /** 文字コードとフラグの関連テーブル. */
    import {SJCharChecker} from './SJCharChecker.js'
export const SJ_CHAR_FLAG_ARRAY_FF = Object.freeze([ 
        /*                    0xff00,                  0xff01,                  0xff02,                  0xff03 */
                SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff04,                  0xff05,                  0xff06,                  0xff07 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,   SJCharChecker.PRIVATE_CHAR
        /* ,                  0xff08,                  0xff09,                  0xff0a,                  0xff0b */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff0c,                  0xff0d,                  0xff0e,                  0xff0f */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff10,                  0xff11,                  0xff12,                  0xff13 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff14,                  0xff15,                  0xff16,                  0xff17 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff18,                  0xff19,                  0xff1a,                  0xff1b */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff1c,                  0xff1d,                  0xff1e,                  0xff1f */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff20,                  0xff21,                  0xff22,                  0xff23 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff24,                  0xff25,                  0xff26,                  0xff27 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff28,                  0xff29,                  0xff2a,                  0xff2b */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff2c,                  0xff2d,                  0xff2e,                  0xff2f */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff30,                  0xff31,                  0xff32,                  0xff33 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff34,                  0xff35,                  0xff36,                  0xff37 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff38,                  0xff39,                  0xff3a,                  0xff3b */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff3c,                  0xff3d,                  0xff3e,                  0xff3f */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff40,                  0xff41,                  0xff42,                  0xff43 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff44,                  0xff45,                  0xff46,                  0xff47 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff48,                  0xff49,                  0xff4a,                  0xff4b */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff4c,                  0xff4d,                  0xff4e,                  0xff4f */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff50,                  0xff51,                  0xff52,                  0xff53 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff54,                  0xff55,                  0xff56,                  0xff57 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff58,                  0xff59,                  0xff5a,                  0xff5b */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xff5c,                  0xff5d,                  0xff5e,                  0xff5f */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xff60,                  0xff61,                  0xff62,                  0xff63 */
           ,    SJCharChecker.NO_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff64,                  0xff65,                  0xff66,                  0xff67 */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff68,                  0xff69,                  0xff6a,                  0xff6b */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff6c,                  0xff6d,                  0xff6e,                  0xff6f */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff70,                  0xff71,                  0xff72,                  0xff73 */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff74,                  0xff75,                  0xff76,                  0xff77 */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff78,                  0xff79,                  0xff7a,                  0xff7b */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff7c,                  0xff7d,                  0xff7e,                  0xff7f */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff80,                  0xff81,                  0xff82,                  0xff83 */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff84,                  0xff85,                  0xff86,                  0xff87 */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff88,                  0xff89,                  0xff8a,                  0xff8b */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff8c,                  0xff8d,                  0xff8e,                  0xff8f */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff90,                  0xff91,                  0xff92,                  0xff93 */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff94,                  0xff95,                  0xff96,                  0xff97 */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff98,                  0xff99,                  0xff9a,                  0xff9b */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xff9c,                  0xff9d,                  0xff9e,                  0xff9f */
           , SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR, SJCharChecker.HALF_KANA_CHAR
        /* ,                  0xffa0,                  0xffa1,                  0xffa2,                  0xffa3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffa4,                  0xffa5,                  0xffa6,                  0xffa7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffa8,                  0xffa9,                  0xffaa,                  0xffab */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffac,                  0xffad,                  0xffae,                  0xffaf */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffb0,                  0xffb1,                  0xffb2,                  0xffb3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffb4,                  0xffb5,                  0xffb6,                  0xffb7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffb8,                  0xffb9,                  0xffba,                  0xffbb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffbc,                  0xffbd,                  0xffbe,                  0xffbf */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffc0,                  0xffc1,                  0xffc2,                  0xffc3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffc4,                  0xffc5,                  0xffc6,                  0xffc7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffc8,                  0xffc9,                  0xffca,                  0xffcb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffcc,                  0xffcd,                  0xffce,                  0xffcf */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffd0,                  0xffd1,                  0xffd2,                  0xffd3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffd4,                  0xffd5,                  0xffd6,                  0xffd7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffd8,                  0xffd9,                  0xffda,                  0xffdb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffdc,                  0xffdd,                  0xffde,                  0xffdf */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffe0,                  0xffe1,                  0xffe2,                  0xffe3 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0xffe4,                  0xffe5,                  0xffe6,                  0xffe7 */
           ,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffe8,                  0xffe9,                  0xffea,                  0xffeb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xffec,                  0xffed,                  0xffee,                  0xffef */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xfff0,                  0xfff1,                  0xfff2,                  0xfff3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xfff4,                  0xfff5,                  0xfff6,                  0xfff7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xfff8,                  0xfff9,                  0xfffa,                  0xfffb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0xfffc,                  0xfffd,                  0xfffe,                  0xffff */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
    ]);

     
