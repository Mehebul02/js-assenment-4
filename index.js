function calculateMoney(ticketSale, darwan, Staff) {
  if (ticketSale < 0 || darwan < 0 || Staff < 0) {
    return "Invalid Number";
  }
  const totalPrice = ticketSale * 120 - (500 + 8 * 50);
  return totalPrice;
}

function checkName(name) {
  if (typeof name !== "string") {
    return name;
  }

  const lastChar = name.charAt(name.length - 1).toLocaleLowerCase();
  const char = ["a", "y", "i", "e", "o", "u", "w"];

  if (char.includes(lastChar)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

function deleteInvalids(array) {
  let arrayNumber = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
      arrayNumber.push(array[i]);
    }
  }

  return arrayNumber;
}


function password(obj) {
  const pass = {
    name: "kolimuddin",
    birthYear: 1999,
    siteName: "google",
  };
  const concatPass =
    pass.siteName.toLocaleLowerCase() +
    "#".concat(pass.name + "@").concat(pass.birthYear);
  return concatPass;
}

function monthlySavings(payments, livingCost) {
  let totalIncome = 0;

  for (const payment of payments) {
    totalIncome += payment;
  }

  totalIncome -= livingCost;

  if (totalIncome >= 3000) {
    const tax = totalIncome - (totalIncome - 3000) * 0.2;
    return tax;
  } 
  else if (totalIncome <= 0) {
    return "earn more";
  } 
  else {
    return 0;
  }
}


