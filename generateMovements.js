function generateMovements(length, startDate, endDate) {
  return Array.from({ length }, () => {
    const date = new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    ).toISOString();
    const value = Math.floor(Math.random() * (5000 - -2000 + 1)) + -2000;
    return { date, value };
  });
}

module.exports = { generateMovements };
