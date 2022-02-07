import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// * "Fake" data from some fictional account
const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Sentry Ward, x2',
		amount: 100,
		date: new Date(2020, 6, 14),
	},
	{
		id: 'e2',
		title: 'Tango, x12',
		amount: 360,
		date: new Date(2021, 7, 14),
	},
	{
		id: 'e3',
		title: 'Magic Wand',
		amount: 400,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'Boots of Speed',
		amount: 500,
		date: new Date(2021, 5, 12),
	},
	{
		id: 'e5',
		title: 'Gleipnir',
		amount: 6150,
		date: new Date(2021, 6, 12),
	},
	{
		id: 'e6',
		title: 'Divine Rapier',
		amount: 6200,
		date: new Date(2022, 5, 1),
	},
];

// * Main App component, which includes whole page for ReactDOM.render()
const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
