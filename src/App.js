import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Tango, x12',
		amount: 360,
		date: new Date(2021, 7, 14),
	},
	{
		id: 'e2',
		title: 'Magic Wand',
		amount: 400,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e3',
		title: 'Boots of Speed',
		amount: 500,
		date: new Date(2021, 5, 12),
	},
	{
		id: 'e4',
		title: 'Gleipnir',
		amount: 6150,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<h2>Let's get started!</h2>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
