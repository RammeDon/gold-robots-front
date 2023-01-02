export function dollar(ammount) {
  const value = String(ammount).split(",").concat();

  return "$" + value;
}
