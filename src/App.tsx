import { useState } from "react";
import ExpenseList from "./ExpenseTracker/ExpenseList";
import ExpenseFilter from "./ExpenseTracker/ExpenseFilter";
import ExpenseForm from "./ExpenseTracker/ExpenseForm";
import categories from "./ExpenseTracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Egg", amount: 6, category: "Groceries" },
    { id: 2, description: "Milk", amount: 7, category: "Groceries" },
    { id: 3, description: "Gas", amount: 7, category: "Utilities" },
    {
      id: 4,
      description: "Chocolate Cake",
      amount: 5,
      category: "Entertainment",
    },
  ]);

  const visibleExpense = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpense}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
