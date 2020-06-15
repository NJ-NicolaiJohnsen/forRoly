document.addEventListener('keyup', function(event){
    if (event.keyCode === 13) {

       function salesPrice(input, relDeduction, constDeduction){
           return input * relDeduction + constDeduction;
       }

       function salesPriceCalc(){
           let inputValue = document.getElementById('average-price').value;
            let relDeductionField = document.querySelector('.row-3_row-1_column-3_el-2');
            relDeductionField.innerHTML = inputValue * -0.05;
           let relDeduction = 0.95;
           let constDeduction = -2000
           let salesPriceField = document.querySelector('.row-3_row-1_column-4_el-3');
           salesPriceResult = salesPrice(inputValue, relDeduction, constDeduction);
           salesPriceField.textContent = salesPriceResult;
           return salesPriceResult;
           
       }

       function vehicleCondition(salesPrice, input) {
           let vehicleCondition = salesPrice * input;
           return (vehicleCondition > -20000) ? vehicleCondition: -20000;

       }

       function specialUse(salesPrice, input) {
           let specialUseAmount = salesPrice * input;
           return (specialUseAmount > -20000) ? specialUseAmount: -20000;
       }

       function useAndCondition(){
           let salesPrice = salesPriceCalc();
           let carCondition = document.getElementById('vehicle-state-select');
           let carConditionSelected = carCondition.options[carCondition.selectedIndex];
          
           let specialUseField = document.getElementById('special-use-select');
           let specialUseFieldSelected = specialUseField.options[specialUseField.selectedIndex];
          
          
           let specialUseAmount = specialUse(salesPrice, specialUseFieldSelected.value); 
           let carConditionAmount = vehicleCondition(salesPrice, carConditionSelected.value);

          
          
           let returnAmount = specialUseAmount + carConditionAmount;
           return (returnAmount > -20000) ? returnAmount: -20000;
          
       }



       function finalPrice(){
           let finalpriceField = document.querySelector('.row-3_row-2_row-5_el-2');
           let finalpriceFieldTwo = document.querySelector('.sales-price');
           document.querySelector('.row-3_row-2_row-1_el-2').innerHTML = useAndCondition();
           let salesPrice = salesPriceCalc();
           let carCondition = useAndCondition();
           
           let finalPriceResult = salesPrice + carCondition

           finalpriceField.innerHTML = finalPriceResult;
           finalpriceFieldTwo.innerHTML = finalPriceResult;
           

           return finalPriceResult;
       }

       function estToll(){
           let estTollField = document.querySelector('.est-toll');
           estTollField.innerHTML = finalPrice()*0.58;
       }

       estToll();
    }
})
