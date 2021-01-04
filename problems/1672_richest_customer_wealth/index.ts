function richestCustomerWealth(accounts: number[][]): number {
  return Math.max(
    ...accounts.map((customer: number[]): number =>
      customer.reduce((sum: number, account: number): number => account + sum, 0),
    ),
  );
}

export default richestCustomerWealth;
