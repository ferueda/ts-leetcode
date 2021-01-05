function romanToInt(s: string): number {
  const romans: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let output = 0;
  let prev = 0;

  s.split('')
    .reverse()
    .forEach((c: string): void => {
      const current = romans[c];

      if (romans[c] >= prev) {
        output += current;
      } else {
        output -= current;
      }

      prev = current;
    });

  return output;
}

export default romanToInt;
