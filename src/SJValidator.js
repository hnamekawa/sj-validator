import {getCharType} from './SJGetCharType.js'
import {SJCharChecker} from './validator/SJCharChecker.js'

//
// Windowsの標準外字を含む、Shift JIS、全角カタカナ、半角カタカナ、ASCIIであるかを判定する
// なお、Mac、Androidの全角マイナス0x2212を標準外字として含む
// Windowsで通常入力しない文字であり、機種による規格解釈の差異への対応をするためなので、
// このような扱いにした。
//
export function isCP932( validationString ) {
    let validationResult = true;
    const validatioinStringLength = validationString.length;
    if ( validatioinStringLength === 0 ) {
        return false;
    }
    for ( let charIndex = 0; charIndex < validatioinStringLength; charIndex++ ) {
        let charType = getCharType( validationString[charIndex]);

        if ( charType === SJCharChecker.NO_CHAR ) {
            validationResult = false;
            break;
        }
    }

    return validationResult;
}