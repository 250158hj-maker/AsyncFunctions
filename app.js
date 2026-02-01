var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const username = "takumi";
const password = "secret";
const CORRECT_PASSWORD = "secret";
const CORRECT_MSG = "Corrected Login";
const ERR_MSG = "Error";
const WELCOME_MSG = "Welcome!!";
const FORMAT_ERR_MSG = "情報を正しく入力してください";
const PASSWORD_ERR_MSG = "パスワードが異なります";
const DELAY_TIME = 1000;
const RAINBOW_MSG = "RAINBOW OK!!";
const REQUEST_URL = "google.com";
const RESOLVE_MSG = "Success!";
const DUMMY_DATA = "Dummy Data";
const REJECT_MSG = "Connection Timeout";
const RANDOM_JUDGE = 0.7;
/**
 * 簡易的なログイン処理
 * フォーマットに正しく入力されているか、パスワードが正しいかの判定
 * @param username
 * @param password
 * @returns resolve -> Welcome message, reject -> Error
 */
const login = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    if (!username || !password) {
        throw Error(FORMAT_ERR_MSG);
    }
    if (password === CORRECT_PASSWORD) {
        return WELCOME_MSG;
    }
    throw Error(PASSWORD_ERR_MSG);
});
login(username, password)
    .then((msg) => {
    console.log(CORRECT_MSG);
    console.log(`${msg} ${username}`);
})
    .catch((err) => {
    console.log(`${ERR_MSG} : ${err.message}`);
});
// ---------------------------------------------------------------------------
/**
 * background-colorの変更(遅延有)
 * 使用上rejectにはならない
 * @param color - 変更したい色
 * @param delay - 遅延
 */
const derayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};
/**
 * background-colorを七色に変更
 * 簡単のため色の指定はマジックナンバー
 */
const rainbow = () => __awaiter(void 0, void 0, void 0, function* () {
    yield derayedColorChange("red", DELAY_TIME);
    yield derayedColorChange("orange", DELAY_TIME);
    yield derayedColorChange("yellow", DELAY_TIME);
    yield derayedColorChange("green", DELAY_TIME);
    yield derayedColorChange("blue", DELAY_TIME);
    yield derayedColorChange("indigo", DELAY_TIME);
    yield derayedColorChange("violet", DELAY_TIME);
});
/**
 * background-colorが何色に変更された後メッセージを出力
 */
const printRainbbow = () => __awaiter(void 0, void 0, void 0, function* () {
    yield rainbow();
    console.log(RAINBOW_MSG);
});
printRainbbow();
// ---------------------------------------------------------------------------
/**
 * URLリクエストのデモ。判定はランダム。
 * URLに関係なく成功すればダミーデータを返す
 * @param url - 情報送信先
 * @returns resolve -> dummy data, reject -> Error message
 */
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < RANDOM_JUDGE) {
                console.log(RESOLVE_MSG);
                resolve(DUMMY_DATA);
            }
            else {
                reject(REJECT_MSG);
            }
        }, DELAY_TIME);
    });
};
/**
 * URLリクエストデモを実行。取得情報を出力
 */
const makeRequest = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data1 = yield fakeRequest(REQUEST_URL);
        console.log(`Data1 : ${data1}`);
        const data2 = yield fakeRequest(REQUEST_URL);
        console.log(`Data2 : ${data2}`);
    }
    catch (err) {
        console.log(`${ERR_MSG} : ${err}`);
    }
});
makeRequest();
export {};
//# sourceMappingURL=app.js.map