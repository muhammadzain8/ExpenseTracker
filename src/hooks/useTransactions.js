import { useContext } from 'react';
import { ExpenseTrackerContext } from 'context/context';
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from 'constants/categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const selectedTransactions = transactions.filter(
    (t) => t.type === title
  );
  const total = selectedTransactions.reduce(
    (acc, curr) => (acc += curr.amount),
    0
  ); // 0 is initial value
  const selectedCategories =
    title === 'Income' ? incomeCategories : expenseCategories;

  console.log({ selectedTransactions, total, selectedCategories });

  selectedTransactions.forEach((st) => {
    const category = selectedCategories.find(
      (c) => c.type === st.category
    );
    if (category) category.amount += st.amount;
  });

  const filteredCategories = selectedCategories.filter(
    (sc) => sc.amount > 0
  );

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((fc) => fc.amount),
        backgroundColor: filteredCategories.map((fc) => fc.color),
      },
    ],
    labels: filteredCategories.map((fc) => fc.type),
  };

  return { total, chartData };
};

export default useTransactions;
