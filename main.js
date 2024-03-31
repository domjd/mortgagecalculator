const form = document.getElementById("calculator");
const amountRequired = document.getElementById("amountrequired");
const loanTerm = document.getElementById("loanterm");
const termText = document.getElementById("termtext");
const termSlider = document.getElementById("termslider");
const monthlyPaymentText = document.getElementById("monthlypaymenttext");

function calculatePayment() {
  const principal = parseFloat(amountRequired.value);

  const termOfLoan = parseFloat(termslider.value);

  const annualInterestRate = 19.08;

  const percentageRate = annualInterestRate / 1200;
  const lengthOfLoan = 12 * termOfLoan;
  let monthlyPayment =
    (principal * percentageRate) /
    (1 - Math.pow(1 + percentageRate, lengthOfLoan * -1));
  monthlyPayment = monthlyPayment.toFixed(2);
  if (isNaN(monthlyPayment)) {
    //document.getElementById("monthlyrepayment").innerHTML = "";
  } else {
    monthlyPaymentText.innerHTML =
      "Monthly Repayment:  <strong>£" + monthlyPayment + "</strong>";
  }
}

//form.addEventListener("submit", calculatePayment);
amountRequired.addEventListener("input", calculatePayment);
termSlider.addEventListener("input", calculatePayment);
termSlider.addEventListener("input", () => {
  termText.innerHTML = "Loan Term: " + termSlider.value + " years";
});
