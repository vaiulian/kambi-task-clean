describe('Price calculator', function() {
	
		describe("should calc price right", function() {
	
			describe("for a normal user", function() {
				
				it('and a new product added today', function() {
					var userType = 0;
					var productType = 0;
					var price = 1;
					var publishedDate = new Date();
			
					var expected = 16;
					var actual = calculatePrice(userType, productType, price, publishedDate);
					expect(expected).to.equal(actual);
				});
	
				it('and a new product added earlier', function() {
					var userType = 0;
					var productType = 0;
					var price = 1;
					var publishedDate = new Date(0); // Thu Jan 01 1970
			
					var expected = 26;
					var actual = calculatePrice(userType, productType, price, publishedDate);
					expect(expected).to.equal(actual);
				});
	
				it('and an old product added today', function() {
					var userType = 0;
					var productType = 1;
					var price = 1;
					var publishedDate = new Date();
			
					var expected = 36;
					var actual = calculatePrice(userType, productType, price, publishedDate);
					expect(expected).to.equal(actual);
				});
	
				it('and an old product added earlier', function() {
					var userType = 0;
					var productType = 1;
					var price = 1;
					var publishedDate = new Date(0); // Thu Jan 01 1970
			
					var expected = 36;
					var actual = calculatePrice(userType, productType, price, publishedDate);
					expect(expected).to.equal(actual);
				});
	
			});
	
			describe("for a company user", function() {
				
				it('and a new product added today', function() {
					var userType = 1;
					var productType = 0;
					var price = 1;
					var publishedDate = new Date();
			
					var expected = 11;
					var actual = calculatePrice(userType, productType, price, publishedDate);
					expect(expected).to.equal(actual);
				});
	
				it('and a new product added earlier', function() {
					var userType = 1;
					var productType = 0;
					var price = 1;
					var publishedDate = new Date(0); // Thu Jan 01 1970
			
					var expected = 21;
					var actual = calculatePrice(userType, productType, price, publishedDate);
					expect(expected).to.equal(actual);
				});
	
				it('and an old product added today', function() {
					var userType = 1;
					var productType = 1;
					var price = 1;
					var publishedDate = new Date();
			
					var expected = 31;
					var actual = calculatePrice(userType, productType, price, publishedDate);
					expect(expected).to.equal(actual);
				});
	
				it('and an old product added earlier', function() {
					var userType = 1;
					var productType = 1;
					var price = 1;
					var publishedDate = new Date(0); // Thu Jan 01 1970
			
					var expected = 31;
					var actual = calculatePrice(userType, productType, price, publishedDate);
					expect(expected).to.equal(actual);
				});
	
			});
	
		});
		
	});