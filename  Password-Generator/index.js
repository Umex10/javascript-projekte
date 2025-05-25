function toGeneratePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = lowerCaseChars.toUpperCase;

  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? lowerCaseChars : "";
  allowedChars += includeUpperCase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (passwordLength <= 0) {
    return "length must be at least 1";
  }

  if (allowedChars.length === 0) {
    return `At least 1 set of characters needs to be selected`;
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[index];
  }

  return password;
}

//Get element from div

const result = document.getElementById("result");
const generateBtn = document.getElementById("btn");

generateBtn.addEventListener("click", () => {
  const passwordLength = 12;
  const includeLowerCase = true;
  const includeUpperCase = false;
  const includeNumbers = false;
  const includeSymbols = false;

  const password = toGeneratePassword(
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );

  result.textContent = `Generated password: ${password}`;
});


