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
const DELAY_TIME = 1000;
const RAINBOW_MSG = "RAINBOW OK!!";
const derayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};
// 簡単のため色はマジックナンバーを使用
const rainbow = () => __awaiter(void 0, void 0, void 0, function* () {
    yield derayedColorChange("red", DELAY_TIME);
    yield derayedColorChange("orange", DELAY_TIME);
    yield derayedColorChange("yellow", DELAY_TIME);
    yield derayedColorChange("green", DELAY_TIME);
    yield derayedColorChange("blue", DELAY_TIME);
    yield derayedColorChange("indigo", DELAY_TIME);
    yield derayedColorChange("violet", DELAY_TIME);
});
const printRainbbow = () => __awaiter(void 0, void 0, void 0, function* () {
    yield rainbow();
    console.log(RAINBOW_MSG);
});
export {};
// ---------------------------------------------------------------------------
//# sourceMappingURL=app.js.map