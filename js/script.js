'use strict'

import { convertStringNumber } from "./convertStringNumber.js";

const financeForm = document.querySelector('.finance__form');
const financeAmount = document.querySelector('.finance__amount');
const financeReport = document.querySelector('.finance__report');

const report = document.querySelector('.report');


let amount = 0;
financeAmount.textContent = amount;

financeForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const typeOperation = e.submitter.dataset.typeOperation;
	//const prevAmount = financeAmount.textContent;
	const changeAmount = Math.abs(convertStringNumber(financeForm.amount.value));
	

	if (typeOperation === 'income') {
		amount += changeAmount;
	}
	if (typeOperation === 'expenses') {
		amount -= changeAmount;
	}
	financeAmount.textContent = `${amount.toLocaleString()} ₽ `;

});

financeReport.addEventListener('click', () => {
	report.classList.toggle('report__open');
})  