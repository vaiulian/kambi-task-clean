/**
 * Utility function that calculates the price of a specific product
 * based on a specific user.
 * 
 * @param {Number<0|1>} userType - Type of user: 0 - normal | 1 - company 
 * @param {Number<0|1>} productType - Type of product: 0 - new product | 1 - old product
 * @param {Number} price - The current base price of the product
 * @param {Date} publishedDate  - The date of wich the product has been published
 * @returns 
 */
function calculatePrice(userType, productType, price, publishedDate) {
	
		console.log("Starting to calculate price!");
		console.log("----------------------------");
	
		var rebateValue = findRebateAmount(userType, productType, publishedDate);
	
		var productTypePrice = findProductTypePrice(productType);
	
		console.log("----------------------------");
	
		return price + productTypePrice - rebateValue;
	
	}
	
	
	/**
	 * Helper function that determines the amount of discount a product price
	 * should have based on the user and product entered.
	 * 
	 * Should add a 5 discount for a company user and a 10 discount
	 * for a new product published today.
	 * 
	 * @param {Number<0|1>} userType - Type of user: 0 - normal | 1 - company 
	 * @param {Number<0|1>} productType - Type of product: 0 - new product | 1 - old product
	 * @param {Date} publishedDate  - The date of wich the product has been published
	 * @returns {Number} rebateValue - The value of the combined discount, if any
	 */
	function findRebateAmount(userType, productType, publishedDate) {
	
		console.log("Finding the discount ammount!");
		var rebateValue = 0;
	
		if(userType === 1) {
			rebateValue += 5;
			console.log("Current user is a company guy, give him", rebateValue,  "discount.");
		}
	
		if(productType === 0 && isPublishedToday(publishedDate)) {
			rebateValue += 10;
			console.log("The product is new and published today, give", rebateValue, "discount.");
		}
	
		return rebateValue;
	};
	
	
	/**
	 * Helper function that returns if a product is published today or not.
	 * 
	 * @param {Date} publishedDate - the publish date of the product
	 * @returns {Boolean}
	 */
	function isPublishedToday(publishedDate) {
		return publishedDate.toDateString() === new Date().toDateString();
	}
	
	
	/**
	 * Helper function that returns the amount of extra additional price 
	 * each product should have based on the product type.
	 * 
	 * @param {Number<0|1>} productType - Type of product: 0 - new product | 1 - old product
	 * @returns {Number<25|35>} - the amount of additional price
	 */
	function findProductTypePrice(productType) {
		return { 0: 25, 1: 35}[productType]
	}