export const formatCurrency = (n: number): string => {
  return '₹' + Math.round(n).toLocaleString('en-IN');
};
