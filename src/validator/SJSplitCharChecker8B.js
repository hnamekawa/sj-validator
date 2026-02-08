 
    /** 文字コードとフラグの関連テーブル. */
    import {SJCharChecker} from './SJCharChecker.js'
export const SJ_CHAR_FLAG_ARRAY_8B = Object.freeze([ 
        /*                    0x8b00,                  0x8b01,                  0x8b02,                  0x8b03 */
                   SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b04,                  0x8b05,                  0x8b06,                  0x8b07 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x8b08,                  0x8b09,                  0x8b0a,                  0x8b0b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b0c,                  0x8b0d,                  0x8b0e,                  0x8b0f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b10,                  0x8b11,                  0x8b12,                  0x8b13 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b14,                  0x8b15,                  0x8b16,                  0x8b17 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x8b18,                  0x8b19,                  0x8b1a,                  0x8b1b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x8b1c,                  0x8b1d,                  0x8b1e,                  0x8b1f */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b20,                  0x8b21,                  0x8b22,                  0x8b23 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b24,                  0x8b25,                  0x8b26,                  0x8b27 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b28,                  0x8b29,                  0x8b2a,                  0x8b2b */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x8b2c,                  0x8b2d,                  0x8b2e,                  0x8b2f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b30,                  0x8b31,                  0x8b32,                  0x8b33 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x8b34,                  0x8b35,                  0x8b36,                  0x8b37 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b38,                  0x8b39,                  0x8b3a,                  0x8b3b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b3c,                  0x8b3d,                  0x8b3e,                  0x8b3f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b40,                  0x8b41,                  0x8b42,                  0x8b43 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b44,                  0x8b45,                  0x8b46,                  0x8b47 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b48,                  0x8b49,                  0x8b4a,                  0x8b4b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b4c,                  0x8b4d,                  0x8b4e,                  0x8b4f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x8b50,                  0x8b51,                  0x8b52,                  0x8b53 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR
        /* ,                  0x8b54,                  0x8b55,                  0x8b56,                  0x8b57 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b58,                  0x8b59,                  0x8b5a,                  0x8b5b */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x8b5c,                  0x8b5d,                  0x8b5e,                  0x8b5f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x8b60,                  0x8b61,                  0x8b62,                  0x8b63 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b64,                  0x8b65,                  0x8b66,                  0x8b67 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b68,                  0x8b69,                  0x8b6a,                  0x8b6b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x8b6c,                  0x8b6d,                  0x8b6e,                  0x8b6f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x8b70,                  0x8b71,                  0x8b72,                  0x8b73 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b74,                  0x8b75,                  0x8b76,                  0x8b77 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x8b78,                  0x8b79,                  0x8b7a,                  0x8b7b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b7c,                  0x8b7d,                  0x8b7e,                  0x8b7f */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR
        /* ,                  0x8b80,                  0x8b81,                  0x8b82,                  0x8b83 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x8b84,                  0x8b85,                  0x8b86,                  0x8b87 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b88,                  0x8b89,                  0x8b8a,                  0x8b8b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b8c,                  0x8b8d,                  0x8b8e,                  0x8b8f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b90,                  0x8b91,                  0x8b92,                  0x8b93 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x8b94,                  0x8b95,                  0x8b96,                  0x8b97 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b98,                  0x8b99,                  0x8b9a,                  0x8b9b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8b9c,                  0x8b9d,                  0x8b9e,                  0x8b9f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8ba0,                  0x8ba1,                  0x8ba2,                  0x8ba3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8ba4,                  0x8ba5,                  0x8ba6,                  0x8ba7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8ba8,                  0x8ba9,                  0x8baa,                  0x8bab */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bac,                  0x8bad,                  0x8bae,                  0x8baf */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bb0,                  0x8bb1,                  0x8bb2,                  0x8bb3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bb4,                  0x8bb5,                  0x8bb6,                  0x8bb7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bb8,                  0x8bb9,                  0x8bba,                  0x8bbb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bbc,                  0x8bbd,                  0x8bbe,                  0x8bbf */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bc0,                  0x8bc1,                  0x8bc2,                  0x8bc3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bc4,                  0x8bc5,                  0x8bc6,                  0x8bc7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bc8,                  0x8bc9,                  0x8bca,                  0x8bcb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bcc,                  0x8bcd,                  0x8bce,                  0x8bcf */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bd0,                  0x8bd1,                  0x8bd2,                  0x8bd3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bd4,                  0x8bd5,                  0x8bd6,                  0x8bd7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bd8,                  0x8bd9,                  0x8bda,                  0x8bdb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bdc,                  0x8bdd,                  0x8bde,                  0x8bdf */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8be0,                  0x8be1,                  0x8be2,                  0x8be3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8be4,                  0x8be5,                  0x8be6,                  0x8be7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8be8,                  0x8be9,                  0x8bea,                  0x8beb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bec,                  0x8bed,                  0x8bee,                  0x8bef */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bf0,                  0x8bf1,                  0x8bf2,                  0x8bf3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bf4,                  0x8bf5,                  0x8bf6,                  0x8bf7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bf8,                  0x8bf9,                  0x8bfa,                  0x8bfb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x8bfc,                  0x8bfd,                  0x8bfe,                  0x8bff */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
    ]);

     
