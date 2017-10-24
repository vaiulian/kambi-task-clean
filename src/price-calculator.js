function calculatePrice(userType, productType, price, publishedDate) {
	
	var rebateValue = findRebateAmount(userType, productType, publishedDate);
	var productTypePrice = findProductTypePrice(productType);
	
	return price + productTypePrice - rebateValue;
	
}

	
function findRebateAmount(userType, productType, publishedDate) {

	var rebateValue = 0;

	if(userType === 1) {
		rebateValue += 5;
	}

	if(productType === 0 && isPublishedToday(publishedDate)) {
		rebateValue += 10;
	}

	return rebateValue;
};


function isPublishedToday(publishedDate) {
	return publishedDate.toDateString() === new Date().toDateString();
}


function findProductTypePrice(productType) {
	return { 0: 25, 1: 35}[productType]
}