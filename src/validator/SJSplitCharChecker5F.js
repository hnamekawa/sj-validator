 
    /** 文字コードとフラグの関連テーブル. */
    import {SJCharChecker} from './SJCharChecker.js'
export const SJ_CHAR_FLAG_ARRAY_5F = Object.freeze([ 
        /*                    0x5f00,                  0x5f01,                  0x5f02,                  0x5f03 */
                SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f04,                  0x5f05,                  0x5f06,                  0x5f07 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f08,                  0x5f09,                  0x5f0a,                  0x5f0b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f0c,                  0x5f0d,                  0x5f0e,                  0x5f0f */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f10,                  0x5f11,                  0x5f12,                  0x5f13 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f14,                  0x5f15,                  0x5f16,                  0x5f17 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f18,                  0x5f19,                  0x5f1a,                  0x5f1b */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f1c,                  0x5f1d,                  0x5f1e,                  0x5f1f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f20,                  0x5f21,                  0x5f22,                  0x5f23 */
           ,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f24,                  0x5f25,                  0x5f26,                  0x5f27 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f28,                  0x5f29,                  0x5f2a,                  0x5f2b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f2c,                  0x5f2d,                  0x5f2e,                  0x5f2f */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f30,                  0x5f31,                  0x5f32,                  0x5f33 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f34,                  0x5f35,                  0x5f36,                  0x5f37 */
           ,   SJCharChecker.PRIVATE_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f38,                  0x5f39,                  0x5f3a,                  0x5f3b */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f3c,                  0x5f3d,                  0x5f3e,                  0x5f3f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f40,                  0x5f41,                  0x5f42,                  0x5f43 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f44,                  0x5f45,                  0x5f46,                  0x5f47 */
           ,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f48,                  0x5f49,                  0x5f4a,                  0x5f4b */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f4c,                  0x5f4d,                  0x5f4e,                  0x5f4f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f50,                  0x5f51,                  0x5f52,                  0x5f53 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f54,                  0x5f55,                  0x5f56,                  0x5f57 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f58,                  0x5f59,                  0x5f5a,                  0x5f5b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f5c,                  0x5f5d,                  0x5f5e,                  0x5f5f */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f60,                  0x5f61,                  0x5f62,                  0x5f63 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f64,                  0x5f65,                  0x5f66,                  0x5f67 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,   SJCharChecker.PRIVATE_CHAR
        /* ,                  0x5f68,                  0x5f69,                  0x5f6a,                  0x5f6b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f6c,                  0x5f6d,                  0x5f6e,                  0x5f6f */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f70,                  0x5f71,                  0x5f72,                  0x5f73 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f74,                  0x5f75,                  0x5f76,                  0x5f77 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f78,                  0x5f79,                  0x5f7a,                  0x5f7b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f7c,                  0x5f7d,                  0x5f7e,                  0x5f7f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f80,                  0x5f81,                  0x5f82,                  0x5f83 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f84,                  0x5f85,                  0x5f86,                  0x5f87 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f88,                  0x5f89,                  0x5f8a,                  0x5f8b */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f8c,                  0x5f8d,                  0x5f8e,                  0x5f8f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f90,                  0x5f91,                  0x5f92,                  0x5f93 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f94,                  0x5f95,                  0x5f96,                  0x5f97 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5f98,                  0x5f99,                  0x5f9a,                  0x5f9b */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5f9c,                  0x5f9d,                  0x5f9e,                  0x5f9f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fa0,                  0x5fa1,                  0x5fa2,                  0x5fa3 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fa4,                  0x5fa5,                  0x5fa6,                  0x5fa7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fa8,                  0x5fa9,                  0x5faa,                  0x5fab */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fac,                  0x5fad,                  0x5fae,                  0x5faf */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fb0,                  0x5fb1,                  0x5fb2,                  0x5fb3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5fb4,                  0x5fb5,                  0x5fb6,                  0x5fb7 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR
        /* ,                  0x5fb8,                  0x5fb9,                  0x5fba,                  0x5fbb */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fbc,                  0x5fbd,                  0x5fbe,                  0x5fbf */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fc0,                  0x5fc1,                  0x5fc2,                  0x5fc3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5fc4,                  0x5fc5,                  0x5fc6,                  0x5fc7 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fc8,                  0x5fc9,                  0x5fca,                  0x5fcb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fcc,                  0x5fcd,                  0x5fce,                  0x5fcf */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fd0,                  0x5fd1,                  0x5fd2,                  0x5fd3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fd4,                  0x5fd5,                  0x5fd6,                  0x5fd7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5fd8,                  0x5fd9,                  0x5fda,                  0x5fdb */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fdc,                  0x5fdd,                  0x5fde,                  0x5fdf */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,   SJCharChecker.PRIVATE_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fe0,                  0x5fe1,                  0x5fe2,                  0x5fe3 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fe4,                  0x5fe5,                  0x5fe6,                  0x5fe7 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5fe8,                  0x5fe9,                  0x5fea,                  0x5feb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5fec,                  0x5fed,                  0x5fee,                  0x5fef */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5ff0,                  0x5ff1,                  0x5ff2,                  0x5ff3 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5ff4,                  0x5ff5,                  0x5ff6,                  0x5ff7 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x5ff8,                  0x5ff9,                  0x5ffa,                  0x5ffb */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x5ffc,                  0x5ffd,                  0x5ffe,                  0x5fff */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
    ]);

     
