const keyboardValues = document.querySelectorAll(".keyboard .keyboard__btn");
const dotBtn = document.querySelector(".keyboard__dot");
const equal = document.querySelector(".keyboard__equal")
const amount = document.querySelector('.form__amount');
const resultCalc = document.querySelector('.form__result-calc');
const convertResult = document.querySelector('.form__result-convert');
function getKeyboardValues(){
	for(let i = 0; i < keyboardValues.length; i++){
		keyboardValues[i].addEventListener('click', writeValue);
	}
}getKeyboardValues();

function writeValue(){
	if(keyboard.className !== 'keyboard keyboard_active'){
		resultCalc.innerHTML += this.value;
		inputValidation ()
		convertCurrencies()
	}
	if(keyboard.className === 'keyboard keyboard_active'){
		amount.value += this.value;
		inputValidation ()
		convertCurrencies()
	}

}

function inputValidation () {
	const numbersArr = resultCalc.innerHTML.split(/[-+*\/]/g).filter(el => el);
	const operatorsArr = resultCalc.innerHTML.split(/[\d\.]/g).filter(el => el)
			.map(el => {
				return el.length === 1 ? el : el.split('').pop();
			});
			resultCalc.innerHTML = merge(numbersArr, operatorsArr);
}inputValidation ()

function merge(a, b) {
	for (let i = 0; a.length;)
		b.splice(i++ * 2, 0, a.shift());
	return b.join('');
}

document.querySelector(".keyboard__equal").addEventListener("click", calculateTotal);
function calculateTotal(){
	resultCalc.innerHTML = amount.value = Math.round(parseFloat(eval(resultCalc.innerHTML)) * 100) / 100;
}

document.querySelector(".keyboard__delete").addEventListener("click", removeLastElem);
function removeLastElem() {
	if(keyboard.className !== 'keyboard keyboard_active'){
		resultCalc.innerHTML = resultCalc.innerHTML.slice(0, -1);
		inputValidation ()
		convertCurrencies()
	}
	if(keyboard.className === 'keyboard keyboard_active'){
		amount.value = amount.value.slice(0, -1);
		inputValidation ()
		convertCurrencies()
	}
	
}

document.querySelector(".keyboard__clean").addEventListener("click", cleanCalculator);
function cleanCalculator() {
	resultCalc.innerHTML = '';
}

// ! //////////////////////////////////////////////////////////////////////

const switchFn = () => {
	toggleCalcToConvert ()
}

function toggleCalcToConvert () {
	calcBtn.classList.toggle('switch-to__active');
	convertBtn.classList.toggle('switch-to__active');
	keyboard.classList.toggle('keyboard_active');
	form.classList.toggle('form_active');
	convertCurrencies();
}

const calcBtn = document.querySelector(".switch-to__calc");
const convertBtn = document.querySelector(".switch-to__convert");
const keyboard = document.querySelector(".keyboard");
const form = document.querySelector(".form");


document.querySelector(".switch-to__calc").addEventListener("click", switchFn);
document.querySelector(".switch-to__convert").addEventListener("click", switchFn);

// ! //////////////////////// Get currencies
const url ='https://cdn.cur.su/api/latest.json';

const from = document.querySelector('.form__from-input');
const to = document.querySelector('.form__to-input');

const fromDescr = document.querySelector('.form__from-descr');
const toDescr = document.querySelector('.form__to-descr');



let fromFlag = false;
let toFlag = false;
let amountFlag = true;

let mainData = {
	descr: {
		AED: 'United Arab Emirates dirham',
		AFN: 'Afghan afghani',
		ALL: 'Albanian lek',
		AMD: 'Armenian dram',
		ANG: 'Netherlands Antillean guilder',
		AOA: 'Angolan kwanza',
		ARS: 'Argentine peso',
		AUD: 'Australian dollar',
		AWG: 'Aruban florin',
		AZN: 'Azerbaijan Manat',
		BAM: 'Bosnia and Herzegovina convertible mark',
		BBD: 'Barbadian dollar',
		BDT: 'Bangladeshi taka',
		BGN: 'Bulgarian lev',
		BHD: 'Bahraini dinar',
		BIF: 'Burundian franc',
		BMD: 'Bermudian dollar',
		BND: 'Brunei dollar',
		BOB: 'Bolivian boliviano',
		BRL: 'Brazilian real',
		BSD: 'Bahamian dollar',
		BTC: 'Bitcoin',
		BTN: 'Bhutanese ngultrum',
		BTS: 'BitShares',
		BWP: 'Botswana pula',
		BYN: 'Belarusian Ruble',
		BZD: 'Belize dollar',
		CAD: 'Canadian dollar',
		CDF: 'Congolese franc',
		CHF: 'Swiss franc',
		CLF: 'Unidad de Fomento',
		CLP: 'Chilean peso',
		CNH: 'Chinese yuan',
		CNY: 'Chinese Yuan Renminbi',
		COP: 'Colombian peso',
		CRC: 'Costa Rican colón',
		CUC: 'Cuban convertible peso',
		CUP: 'Cuban peso',
		CVE: 'Cape Verdean escudo',
		CZK: 'Czech koruna',
		DASH: 'Digital Cash',
		DJF: 'Djiboutian franc',
		DKK: 'Danish krone',
		DOGE: 'Dogecoin',
		DOP: 'Dominican peso',
		DZD: 'Algerian Dinar',
		EGP: 'Egyptian Pound',
		ERN: 'Eritrean nakfa',
		ETB: 'Ethiopian birr',
		ETH: 'Ethereum',
		EUR: 'Euro',
		FJD: 'Fijian dollar',
		FKP: 'Falkland Islands pound',
		GBP: 'British pound sterling',
		GEL: 'Georgian Lari',
		GGP: 'Guernsey pound',
		GHS: 'Ghanaian cedi',
		GIP: 'Gibraltar pound',
		GMD: 'Gambian dalasi',
		GNF: 'Guinean franc',
		GTQ: 'Guatemalan quetzal',
		GYD: 'Guyanese dollar',
		HKD: 'Hong Kong dollar',
		HNL: 'Honduran lempira',
		HRK: 'Croatian kuna',
		HTG: 'Haitian gourde',
		HUF: 'Hungarian forint',
		IDR: 'Indonesian rupiah',
		ILS: 'Israeli new shekel',
		IMP: 'Isle of Man Pound',
		INR: 'Indian rupee',
		IQD: 'Iraqi dinar',
		IRR: 'Iranian rial',
		ISK: 'Icelandic króna',
		JEP: 'Jersey Pound',
		JMD: 'Jamaican dollar',
		JOD: 'Jordanian dinar',
		JPY: 'Japanese Yen',
		KES: 'Kenyan Shilling',
		KGS: 'Kyrgyzstani som',
		KHR: 'Cambodian riel',
		KMF: 'Comorian Franc',
		KPW: 'North Korean Won',
		KRW: 'South Korean won',
		KWD: 'Kuwaiti dinar',
		KYD: 'Cayman Islands dollar',
		KZT: 'Kazakhstani Tenge',
		LAK: 'Lao Kips',
		LBP: 'Lebanese pound',
		LD: 'Linden Dollar',
		LKR: 'Sri Lankan rupee',
		LRD: 'Liberian dollar',
		LSL: 'Lesotho Loti',
		LTC: 'Litecoin',
		LYD: 'Libyan dinar',
		MAD: 'Moroccan dirham',
		MDL: 'Moldovan leu',
		MGA: 'Malagasy ariary',
		MKD: 'Macedonian Denar',
		MMK: 'Myanmar kyat',
		MNT: 'Mongolian Tughrik',
		MOP: 'Macanese pataca',
		MRO: 'Mauritanian ouguiya',
		MRU: 'Mauritanian ouguiya',
		MUR: 'Mauritian rupee',
		MVR: 'Maldivian rufiyaa',
		MWK: 'Malawian kwacha',
		MXN: 'Mexican peso',
		MYR: 'Malaysian ringgit',
		MZN: 'Mozambican metical',
		NAD: 'Namibian dollar',
		NGN: 'Nigerian naira',
		NIO: 'Nicaraguan Cordoba',
		NOK: 'Norwegian krone',
		NPR: 'Nepalese rupee',
		NXT: 'Nxt Monetary System',
		NZD: 'New Zealand dollar',
		OMR: 'Omani rial',
		PAB: 'Panamanian balboa',
		PEN: 'Peruvian Sol',
		PGK: 'Papua New Guinean kina',
		PHP: 'Philippine peso',
		PKR: 'Pakistani rupee',
		PLN: 'Polish Zloty',
		PYG: 'Paraguayan guaraní',
		QAR: 'Qatari riyal',
		RON: 'Romanian leu',
		RSD: 'Serbian dinar',
		RUB: 'Putin Khuilo',
		RWF: 'Rwandan franc',
		SAR: 'Saudi riyal',
		SBD: 'Solomon Islands dollar',
		SCR: 'Seychellois Rupee',
		SDG: 'Sudanese pound',
		SEK: 'Swedish krona',
		SGD: 'Singapore dollar',
		SHP: 'Saint Helena pound',
		SLL: 'Sierra Leonean leone',
		SOS: 'Somali shilling',
		SRD: 'Surinamese dollar',
		SSP: 'South Sudanese pound',
		STD: 'São Tomé and Príncipe dobra',
		STN: 'São Tomé and Príncipe dobra',
		STR: 'Stellar',
		SVC: 'Salvadoran colón',
		SYP: 'Syrian pound',
		SZL: 'Swazi Lilangeni',
		THB: 'Thai baht',
		TJS: 'Tajikistani somoni',
		TMT: 'Turkmenistani manat',
		TND: 'Tunisian dinar',
		TOP: `Tongan Pa'anga flag`,
		TRY: 'Turkish lira',
		TTD: 'Trinidad and Tobago dollar',
		TWD: 'New Taiwan dollar',
		TZS: 'Tanzanian shilling',
		UAH: 'Ukrainian Hryvnia',
		UGX: 'Ugandan shilling',
		USD: 'United States Dollar',
		UYU: 'Uruguayan Peso',
		UZS: 'Uzbekistani soum',
		VEF_BLKMKT: '-',
		VEF_DICOM: '-',
		VEF_DIPRO: '-',
		VES: 'Venezuelan bolívar',
		VND: 'Vietnamese Dong',
		VUV: 'Vanuatu vatu',
		WST: 'Samoan tālā',
		XAF: 'Central African CFA franc',
		XAG: 'Ounce of silver',
		XAU: 'Ounce of gold',
		XCD: 'Eastern Caribbean dollar',
		XDR: 'Special Drawing Rights',
		XMR: 'Monero',
		XOF: 'West African CFA franc',
		XPD: 'Ounce of palladium',
		XPF: 'CFP Franc',
		XPT: 'Ounce of platinum',
		XRP: 'Ripple',
		YER: 'Yemeni Rial',
		ZAR: 'South African rand',
		ZMW: 'Zambian kwacha',
		ZWL: 'Zimbabwean dollar',
		NMC: 'Namecoin',
		PPC: 'Peercoin',
		NVC: 'Novacoin',
		XPM: 'Primecoin',
		EAC: 'East African coin',
		VTC: 'Vertcoin',
		EMC: 'EmerCoin',
		FCT: 'Factom',
	},
}

const getData = async (url) =>{
	const res = await fetch(url);
	const json = await res.json();
	return json
}
const fetchData = async () => {
	try{
		const data = await getData(url);
		mainData.rates = data.rates;
	}catch(error){
		console.log(error.message);
	}
}
fetchData();

const fromHandler = () => {
	const fromDescription = document.querySelector('.form__from-descr');
	const fromValue = from.value = from.value.toUpperCase();
	const currencies = Object.keys(mainData.rates).map(el => el);
	if(currencies.includes(fromValue)){
		from.style.backgroundImage = `url('images/flags/${fromValue.toLowerCase()}.svg')`;
		fromDescr.innerHTML = fromValue;
		fromDescription.innerHTML = mainData.descr[fromValue];
		fromFlag = true;
		convertCurrencies();
	}else{
		from.style.backgroundImage = "none";
		fromValue.length === 0 
			? fromDescr.innerHTML = `Enter a currency` 
			: fromDescr.innerHTML = `${fromValue} currency doesn't exist`;
			fromFlag = false;
			result.innerHTML = 0
	}
}
const toHandler = () => {
	const toDescription = document.querySelector('.form__to-descr');
	const toValue = to.value = to.value.toUpperCase();
	const currencies = Object.keys(mainData.rates).map(el => el);
	if(currencies.includes(toValue)){
		to.style.backgroundImage = `url('images/flags/${toValue.toLowerCase()}.svg')`;
		toDescr.innerHTML = toValue;
		toDescription.innerHTML = mainData.descr[toValue];
		toFlag = true;
		convertCurrencies();
	}else{
		to.style.backgroundImage = "none";
		toValue.length === 0 
			? toDescr.innerHTML = `Expecting format - 'USD'` 
			: toDescr.innerHTML = `${toValue} currency doesn't exist`;
			toFlag = false;
			result.innerHTML = 0
	}
}
const amountHandler = () => {
	if(amount.value.length){
		amountFlag = true;
		convertCurrencies();
	}else{
		amountFlag = false;
	}
}
const convertCurrencies = () => {
	if(fromFlag && toFlag && amountFlag){
		const output = (mainData.rates[to.value] / mainData.rates[from.value]) * amount.value
		convertResult.innerHTML = (Math.floor(output * 100) / 100);
	}
}

document.querySelector('.form__amount').addEventListener('input', amountHandler);
document.querySelector('.form__from-input').addEventListener('input', fromHandler);
document.querySelector('.form__to-input').addEventListener('input', toHandler);



