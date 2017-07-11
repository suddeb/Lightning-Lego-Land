({
	doAdd : function(component, event, helper) {
		var firstNumber = component.get("v.firstNumber");
		var secondNumber = component.get("v.secondNumber");
		console.log(firstNumber + ' ' + secondNumber);
		var result = firstNumber + secondNumber;
		console.log('Result: ' + result);
		component.set("v.result", result);
	}
})