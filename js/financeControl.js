'use strict'
import { convertStringNumber } from "./halpers.js";
import { getData, postData } from "./service.js";

const financeForm = document.querySelector('.finance__form');
const financeAmount = document.querySelector('.finance__amount');

const reportClose = document.querySelector('.report__close');



let amount = 0;
financeAmount.textContent = amount;

const addNewOperation = () => {
	async (e) => {
		e.preventDefault();
	}
	financeForm.addEventListener('submit', async (e) => {
	e.preventDefault();

		const typeOperation = e.submitter.dataset.typeOperation;
		
		const financeFormDate = object.formEntries(new FormData(financeForm));
		financeFormDate.type = typeOperation;

		const newOperation = await postData("/finance", financeFormDate)
	
		const changeAmount = Math.abs(
			convertStringNumber(newOperation.amount),
		);
	

	if (typeOperation === 'income') {
		amount += changeAmount;
	}
	if (typeOperation === 'expenses') {
		amount -= changeAmount;
	}
		financeAmount.textContent = `${amount.toLocaleString("Ru-ru")} ₽ `;
		financeForm.reset();

	});

}

export const financeControl = async () => {

	const operations = await getData('/finance'); 

	amount = operations.reduce((acc, item) => {

		if (item.type === 'income') {
			acc += convertStringNumber(item.amount);
		}
		if (item.type === 'expenses') {
			acc -= convertStringNumber(item.amount);
		}
		return acc;
	}, 0)

	financeForm.addEventListener("submit", addNewOperation);
}
	financeReport.addEventListener('click', async () => {
	const textContent = finanseReport.textContent
	financeReport.textContent = "Loading";
	financeReport.disabled = true;
	const data = await getData("/test");
	financeReport.textContent = textContent;
	financeReport.disabled = false;
	renderReport(data);
	openReport();
	});
	
	reportClose.addEventListener('click', () => {
	report.style.visibility = "hidden"
	});
	
