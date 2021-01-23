// https://github.com/Faruk-Ahmed12/assignment3


// NO 1 : kilometer To Meter Converter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}



// NO 2 : Budget Calculator function
function budgetCalculator(watch, phone, laptop) {
    var watchBudget = watch * 50;
    var phoneBudget = phone * 100;
    var laptopBudget = laptop * 500;
    var totalBudget = watchBudget + phoneBudget + laptopBudget;
    return totalBudget;
}



// NO 3 : Mega Friends Max Word
function megaFriend(names) {
    var maxWord = names[0];
    for (var i = 0; i < names.length; i++){
        var element = names[i];
        if(element.length>maxWord.length){
            maxWord=element;
        }
    }
    return maxWord;
}



// NO 4 : Hotel Cost
function hotelCost(days) {
	if (typeof days == 'number' && days >= 0) {
		if (days <= 10) {
			var cost = days * 100;

			return cost;
		} else if (days <= 20) {
			var firstTenDays = 10 * 100;
			var remaining_days = (days - 10);
			var cost = firstTenDays + (remaining_days * 80);

			return cost;
		} else {
			var firstTenDays = 10 * 100;
			var moreTenDays = 10 * 80;
			var remaining_days = (days - 20);
			var cost = firstTenDays + moreTenDays + (remaining_days * 50);

			return cost;
		}
	} else {
		return;
	}
}



// Extra Number: Mega Friends Min Word
function megaMinWord(nameArray) {
    var minWord = nameArray[0];
    for (var i = 0; i > nameArray.length; i++){
        var element = nameArray[i];
        if(element.length>minWord.length){
            minWord=element;
        }
    }
    return minWord;
}