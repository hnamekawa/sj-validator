 
    /** 文字コードとフラグの関連テーブル. */
    import {SJCharChecker} from './SJCharChecker.js'
export const SJ_CHAR_FLAG_ARRAY_50 = Object.freeze([ 
        /*                    0x5000,                  0x5001,                  0x5002,                  0x5003 */
                SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5004,                  0x5005,                  0x5006,                  0x5007 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5008,                  0x5009,                  0x500a,                  0x500b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x500c,                  0x500d,                  0x500e,                  0x500f */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5010,                  0x5011,                  0x5012,                  0x5013 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5014,                  0x5015,                  0x5016,                  0x5017 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5018,                  0x5019,                  0x501a,                  0x501b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x501c,                  0x501d,                  0x501e,                  0x501f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5020,                  0x5021,                  0x5022,                  0x5023 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5024,                  0x5025,                  0x5026,                  0x5027 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5028,                  0x5029,                  0x502a,                  0x502b */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x502c,                  0x502d,                  0x502e,                  0x502f */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5030,                  0x5031,                  0x5032,                  0x5033 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5034,                  0x5035,                  0x5036,                  0x5037 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5038,                  0x5039,                  0x503a,                  0x503b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x503c,                  0x503d,                  0x503e,                  0x503f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5040,                  0x5041,                  0x5042,                  0x5043 */
           ,   SJCharChecker.PRIVATE_CHAR,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5044,                  0x5045,                  0x5046,                  0x5047 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5048,                  0x5049,                  0x504a,                  0x504b */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x504c,                  0x504d,                  0x504e,                  0x504f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5050,                  0x5051,                  0x5052,                  0x5053 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5054,                  0x5055,                  0x5056,                  0x5057 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5058,                  0x5059,                  0x505a,                  0x505b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x505c,                  0x505d,                  0x505e,                  0x505f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5060,                  0x5061,                  0x5062,                  0x5063 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5064,                  0x5065,                  0x5066,                  0x5067 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5068,                  0x5069,                  0x506a,                  0x506b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x506c,                  0x506d,                  0x506e,                  0x506f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5070,                  0x5071,                  0x5072,                  0x5073 */
           ,   SJCharChecker.PRIVATE_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5074,                  0x5075,                  0x5076,                  0x5077 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5078,                  0x5079,                  0x507a,                  0x507b */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x507c,                  0x507d,                  0x507e,                  0x507f */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5080,                  0x5081,                  0x5082,                  0x5083 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5084,                  0x5085,                  0x5086,                  0x5087 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5088,                  0x5089,                  0x508a,                  0x508b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x508c,                  0x508d,                  0x508e,                  0x508f */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5090,                  0x5091,                  0x5092,                  0x5093 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5094,                  0x5095,                  0x5096,                  0x5097 */
           ,   SJCharChecker.PRIVATE_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5098,                  0x5099,                  0x509a,                  0x509b */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x509c,                  0x509d,                  0x509e,                  0x509f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50a0,                  0x50a1,                  0x50a2,                  0x50a3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50a4,                  0x50a5,                  0x50a6,                  0x50a7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50a8,                  0x50a9,                  0x50aa,                  0x50ab */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50ac,                  0x50ad,                  0x50ae,                  0x50af */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50b0,                  0x50b1,                  0x50b2,                  0x50b3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x50b4,                  0x50b5,                  0x50b6,                  0x50b7 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x50b8,                  0x50b9,                  0x50ba,                  0x50bb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50bc,                  0x50bd,                  0x50be,                  0x50bf */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50c0,                  0x50c1,                  0x50c2,                  0x50c3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50c4,                  0x50c5,                  0x50c6,                  0x50c7 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50c8,                  0x50c9,                  0x50ca,                  0x50cb */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50cc,                  0x50cd,                  0x50ce,                  0x50cf */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x50d0,                  0x50d1,                  0x50d2,                  0x50d3 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50d4,                  0x50d5,                  0x50d6,                  0x50d7 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50d8,                  0x50d9,                  0x50da,                  0x50db */
           ,   SJCharChecker.PRIVATE_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50dc,                  0x50dd,                  0x50de,                  0x50df */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50e0,                  0x50e1,                  0x50e2,                  0x50e3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x50e4,                  0x50e5,                  0x50e6,                  0x50e7 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x50e8,                  0x50e9,                  0x50ea,                  0x50eb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50ec,                  0x50ed,                  0x50ee,                  0x50ef */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50f0,                  0x50f1,                  0x50f2,                  0x50f3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50f4,                  0x50f5,                  0x50f6,                  0x50f7 */
           ,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x50f8,                  0x50f9,                  0x50fa,                  0x50fb */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x50fc,                  0x50fd,                  0x50fe,                  0x50ff */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
    ]);

     
