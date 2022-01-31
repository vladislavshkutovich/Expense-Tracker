import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	const [, setEnteredTitle] = useState('');
	const [, setEnteredAmount] = useState('');
	const [, setEnteredDate] = useState('');

	// // Alternative way
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const titleChangeHandler = event => {
		setEnteredTitle(event.target.value);

		// // Alternative way
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// });

		// setUserInput(prevState => {
		// 	return { ...prevState, enteredTitle: event.target.value };
		// });

		// console.log(event.target.value);
	};

	const amountChangeHandler = event => {
		setEnteredAmount(event.target.value);

		// // Alternative way
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value,
		// });

		// console.log(event.target.value);
	};

	const dateChangeHandler = event => {
		setEnteredDate(event.target.value);

		// // Alternative way
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value,
		// });

		// console.log(event.target.value);
	};

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler} />
				</div>
			</div>

			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						onChange={amountChangeHandler}
						min="0.01"
						step="0.01"
					/>
				</div>
			</div>

			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						onChange={dateChangeHandler}
						min="2019-01-01"
						step="2022-12-31"
					/>
				</div>
			</div>
			<div className="nex-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
