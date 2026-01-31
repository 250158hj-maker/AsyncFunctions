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
