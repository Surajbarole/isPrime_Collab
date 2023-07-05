function findTax(salary) {
  let tax = 0;
  try {
    switch (true) {
      case (salary > 0 && salary <= 500000):
        tax = 0;
        break;
      case (salary > 500000 && salary <= 1000000):
        tax = salary * 0.1;
        break;
      case (salary > 1000000 && salary <= 1500000):
        tax = salary * 0.1;
        break;
      case (salary > 1500000):
        tax = salary * 0.3;
        break;
      default:
        throw new ValidationError(" Salary is Low ");
    }
  } catch (error) {
    return error.message;
  }
  return tax;
}