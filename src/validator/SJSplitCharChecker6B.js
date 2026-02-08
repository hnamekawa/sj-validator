 
    /** 文字コードとフラグの関連テーブル. */
    import {SJCharChecker} from './SJCharChecker.js'
export const SJ_CHAR_FLAG_ARRAY_6B = Object.freeze([ 
        /*                    0x6b00,                  0x6b01,                  0x6b02,                  0x6b03 */
                SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b04,                  0x6b05,                  0x6b06,                  0x6b07 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b08,                  0x6b09,                  0x6b0a,                  0x6b0b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b0c,                  0x6b0d,                  0x6b0e,                  0x6b0f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b10,                  0x6b11,                  0x6b12,                  0x6b13 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b14,                  0x6b15,                  0x6b16,                  0x6b17 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b18,                  0x6b19,                  0x6b1a,                  0x6b1b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b1c,                  0x6b1d,                  0x6b1e,                  0x6b1f */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b20,                  0x6b21,                  0x6b22,                  0x6b23 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b24,                  0x6b25,                  0x6b26,                  0x6b27 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b28,                  0x6b29,                  0x6b2a,                  0x6b2b */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b2c,                  0x6b2d,                  0x6b2e,                  0x6b2f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b30,                  0x6b31,                  0x6b32,                  0x6b33 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b34,                  0x6b35,                  0x6b36,                  0x6b37 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b38,                  0x6b39,                  0x6b3a,                  0x6b3b */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b3c,                  0x6b3d,                  0x6b3e,                  0x6b3f */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b40,                  0x6b41,                  0x6b42,                  0x6b43 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b44,                  0x6b45,                  0x6b46,                  0x6b47 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b48,                  0x6b49,                  0x6b4a,                  0x6b4b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b4c,                  0x6b4d,                  0x6b4e,                  0x6b4f */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b50,                  0x6b51,                  0x6b52,                  0x6b53 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b54,                  0x6b55,                  0x6b56,                  0x6b57 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b58,                  0x6b59,                  0x6b5a,                  0x6b5b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b5c,                  0x6b5d,                  0x6b5e,                  0x6b5f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b60,                  0x6b61,                  0x6b62,                  0x6b63 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b64,                  0x6b65,                  0x6b66,                  0x6b67 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b68,                  0x6b69,                  0x6b6a,                  0x6b6b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b6c,                  0x6b6d,                  0x6b6e,                  0x6b6f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b70,                  0x6b71,                  0x6b72,                  0x6b73 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b74,                  0x6b75,                  0x6b76,                  0x6b77 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b78,                  0x6b79,                  0x6b7a,                  0x6b7b */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b7c,                  0x6b7d,                  0x6b7e,                  0x6b7f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b80,                  0x6b81,                  0x6b82,                  0x6b83 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b84,                  0x6b85,                  0x6b86,                  0x6b87 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b88,                  0x6b89,                  0x6b8a,                  0x6b8b */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6b8c,                  0x6b8d,                  0x6b8e,                  0x6b8f */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b90,                  0x6b91,                  0x6b92,                  0x6b93 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b94,                  0x6b95,                  0x6b96,                  0x6b97 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b98,                  0x6b99,                  0x6b9a,                  0x6b9b */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6b9c,                  0x6b9d,                  0x6b9e,                  0x6b9f */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6ba0,                  0x6ba1,                  0x6ba2,                  0x6ba3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6ba4,                  0x6ba5,                  0x6ba6,                  0x6ba7 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6ba8,                  0x6ba9,                  0x6baa,                  0x6bab */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6bac,                  0x6bad,                  0x6bae,                  0x6baf */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6bb0,                  0x6bb1,                  0x6bb2,                  0x6bb3 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6bb4,                  0x6bb5,                  0x6bb6,                  0x6bb7 */
           ,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6bb8,                  0x6bb9,                  0x6bba,                  0x6bbb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6bbc,                  0x6bbd,                  0x6bbe,                  0x6bbf */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6bc0,                  0x6bc1,                  0x6bc2,                  0x6bc3 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6bc4,                  0x6bc5,                  0x6bc6,                  0x6bc7 */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6bc8,                  0x6bc9,                  0x6bca,                  0x6bcb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6bcc,                  0x6bcd,                  0x6bce,                  0x6bcf */
           ,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6bd0,                  0x6bd1,                  0x6bd2,                  0x6bd3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6bd4,                  0x6bd5,                  0x6bd6,                  0x6bd7 */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,   SJCharChecker.PRIVATE_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6bd8,                  0x6bd9,                  0x6bda,                  0x6bdb */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6bdc,                  0x6bdd,                  0x6bde,                  0x6bdf */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6be0,                  0x6be1,                  0x6be2,                  0x6be3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6be4,                  0x6be5,                  0x6be6,                  0x6be7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6be8,                  0x6be9,                  0x6bea,                  0x6beb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6bec,                  0x6bed,                  0x6bee,                  0x6bef */
           ,       SJCharChecker.JIS_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6bf0,                  0x6bf1,                  0x6bf2,                  0x6bf3 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,       SJCharChecker.JIS_CHAR
        /* ,                  0x6bf4,                  0x6bf5,                  0x6bf6,                  0x6bf7 */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6bf8,                  0x6bf9,                  0x6bfa,                  0x6bfb */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
        /* ,                  0x6bfc,                  0x6bfd,                  0x6bfe,                  0x6bff */
           ,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR,    SJCharChecker.NO_CHAR
    ]);

     
