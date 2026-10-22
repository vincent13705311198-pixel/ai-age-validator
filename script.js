const ageForm = document.querySelector("#age-form");
const ageInput = document.querySelector("#age-input");
const result = document.querySelector("#result");

ageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = ageInput.value.trim();
  const isInteger = /^-?\d+$/.test(value);

  if (!isInteger) {
    result.textContent = "请输入有效的整数年龄";
    return;
  }

  const age = Number(value);

  if (age < 18) {
    result.textContent = "年龄不足，验证不通过";
  } else if (age > 65) {
    result.textContent = "年龄超出范围，验证不通过";
  } else {
    result.textContent = "验证通过";
  }
});
