 
    /** 文字コードとフラグの関連テーブル. */
    import {SJCharChecker} from './SJCharChecker.js'
export const SJ_CHAR_FLAG_ARRAY_4F = Object.freeze([ 
        /*                    0x4f00,                  0x4f01,                  0x4f02,                  0x4f03 */
               SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR
        /* ,                  0x4f04,                  0x4f05,                  0x4f06,                  0x4f07 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f08,                  0x4f09,                  0x4f0a,                  0x4f0b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f0c,                  0x4f0d,                  0x4f0e,                  0x4f0f */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f10,                  0x4f11,                  0x4f12,                  0x4f13 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f14,                  0x4f15,                  0x4f16,                  0x4f17 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f18,                  0x4f19,                  0x4f1a,                  0x4f1b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f1c,                  0x4f1d,                  0x4f1e,                  0x4f1f */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f20,                  0x4f21,                  0x4f22,                  0x4f23 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f24,                  0x4f25,                  0x4f26,                  0x4f27 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f28,                  0x4f29,                  0x4f2a,                  0x4f2b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f2c,                  0x4f2d,                  0x4f2e,                  0x4f2f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f30,                  0x4f31,                  0x4f32,                  0x4f33 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f34,                  0x4f35,                  0x4f36,                  0x4f37 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f38,                  0x4f39,                  0x4f3a,                  0x4f3b */
           ,       SJCharChecker.JIS_CHAR,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f3c,                  0x4f3d,                  0x4f3e,                  0x4f3f */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f40,                  0x4f41,                  0x4f42,                  0x4f43 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f44,                  0x4f45,                  0x4f46,                  0x4f47 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f48,                  0x4f49,                  0x4f4a,                  0x4f4b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f4c,                  0x4f4d,                  0x4f4e,                  0x4f4f */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f50,                  0x4f51,                  0x4f52,                  0x4f53 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f54,                  0x4f55,                  0x4f56,                  0x4f57 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f58,                  0x4f59,                  0x4f5a,                  0x4f5b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f5c,                  0x4f5d,                  0x4f5e,                  0x4f5f */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f60,                  0x4f61,                  0x4f62,                  0x4f63 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f64,                  0x4f65,                  0x4f66,                  0x4f67 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f68,                  0x4f69,                  0x4f6a,                  0x4f6b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f6c,                  0x4f6d,                  0x4f6e,                  0x4f6f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f70,                  0x4f71,                  0x4f72,                  0x4f73 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f74,                  0x4f75,                  0x4f76,                  0x4f77 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f78,                  0x4f79,                  0x4f7a,                  0x4f7b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f7c,                  0x4f7d,                  0x4f7e,                  0x4f7f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f80,                  0x4f81,                  0x4f82,                  0x4f83 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f84,                  0x4f85,                  0x4f86,                  0x4f87 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f88,                  0x4f89,                  0x4f8a,                  0x4f8b */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f8c,                  0x4f8d,                  0x4f8e,                  0x4f8f */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f90,                  0x4f91,                  0x4f92,                  0x4f93 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,   SJCharChecker.PRIVATE_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f94,                  0x4f95,                  0x4f96,                  0x4f97 */
           ,   SJCharChecker.PRIVATE_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4f98,                  0x4f99,                  0x4f9a,                  0x4f9b */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4f9c,                  0x4f9d,                  0x4f9e,                  0x4f9f */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4fa0,                  0x4fa1,                  0x4fa2,                  0x4fa3 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4fa4,                  0x4fa5,                  0x4fa6,                  0x4fa7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4fa8,                  0x4fa9,                  0x4faa,                  0x4fab */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4fac,                  0x4fad,                  0x4fae,                  0x4faf */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4fb0,                  0x4fb1,                  0x4fb2,                  0x4fb3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4fb4,                  0x4fb5,                  0x4fb6,                  0x4fb7 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4fb8,                  0x4fb9,                  0x4fba,                  0x4fbb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4fbc,                  0x4fbd,                  0x4fbe,                  0x4fbf */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4fc0,                  0x4fc1,                  0x4fc2,                  0x4fc3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4fc4,                  0x4fc5,                  0x4fc6,                  0x4fc7 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4fc8,                  0x4fc9,                  0x4fca,                  0x4fcb */
           ,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4fcc,                  0x4fcd,                  0x4fce,                  0x4fcf */
           ,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4fd0,                  0x4fd1,                  0x4fd2,                  0x4fd3 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4fd4,                  0x4fd5,                  0x4fd6,                  0x4fd7 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4fd8,                  0x4fd9,                  0x4fda,                  0x4fdb */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4fdc,                  0x4fdd,                  0x4fde,                  0x4fdf */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4fe0,                  0x4fe1,                  0x4fe2,                  0x4fe3 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4fe4,                  0x4fe5,                  0x4fe6,                  0x4fe7 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4fe8,                  0x4fe9,                  0x4fea,                  0x4feb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4fec,                  0x4fed,                  0x4fee,                  0x4fef */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4ff0,                  0x4ff1,                  0x4ff2,                  0x4ff3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x4ff4,                  0x4ff5,                  0x4ff6,                  0x4ff7 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4ff8,                  0x4ff9,                  0x4ffa,                  0x4ffb */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x4ffc,                  0x4ffd,                  0x4ffe,                  0x4fff */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,   SJCharChecker.PRIVATE_CHAR
    ]);

     
