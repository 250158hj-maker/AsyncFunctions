const username: string = "takumi";
const password: string = "secret";
const CORRECT_PASSWORD = "secret";
const CORRECT_MSG = "Corrected Login";
const ERR_MSG = "Error";
const WELCOME_MSG = "Welcome!!";
const FORMAT_ERR_MSG = "情報を正しく入力してください";
const PASSWORD_ERR_MSG = "パスワードが異なります";

const login = async (
  username: string,
  password: string,
): Promise<string | Error> => {
  if (!username || !password) {
    throw Error(FORMAT_ERR_MSG);
  }
  if (password === CORRECT_PASSWORD) {
    return WELCOME_MSG;
  }
  throw Error(PASSWORD_ERR_MSG);
};

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

const derayedColorChange = (color: string, delay: number): Promise<unknown> => {
  return new Promise((resolve: Function, reject?: Function) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// 簡単のため色はマジックナンバーを使用
const rainbow = async () => {
  await derayedColorChange("red", DELAY_TIME);
  await derayedColorChange("orange", DELAY_TIME);
  await derayedColorChange("yellow", DELAY_TIME);
  await derayedColorChange("green", DELAY_TIME);
  await derayedColorChange("blue", DELAY_TIME);
  await derayedColorChange("indigo", DELAY_TIME);
  await derayedColorChange("violet", DELAY_TIME);
};

const printRainbbow = async () => {
  await rainbow();
  console.log(RAINBOW_MSG);
};

// ---------------------------------------------------------------------------

