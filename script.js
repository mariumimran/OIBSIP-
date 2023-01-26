const tempcalculate = () =>{
	const numberTemp = document.getElementById('temp').value;
	
	const tempSelected = document.getElementById('diff_temp');
	const valueTemp = diff_temp.options[tempSelected.selectedIndex].value;

    const celTofah = (cel) =>{
    	let fahrenheit = Math.round((cel * 9/5) + 32);
    	return fahrenheit;
    }
    const fahTocel = (fah) =>{
    	let celsius = Math.round((fah - 32) *5/9);
    	return celsius;
    }
   
    const kelTocel = (kel) =>{
    	let celsius = Math.round(kel - 273.15);
    	return celsius;
    }

	let result;

	if(valueTemp == 'cel'){
		result = celTofah(numberTemp);
		document.getElementById('result-container').innerHTML=  `${result}°Fahrenheit `;
	}
	else{
		result = fahTocel(numberTemp);
		document.getElementById('result-container').innerHTML=  `${result}°Celsius `;


	}
	if(valueTemp == 'kel'){
		result = kelTocel(numberTemp);
		document.getElementById('result-container').innerHTML=  `${result}°Celsius `;
	}
	

}