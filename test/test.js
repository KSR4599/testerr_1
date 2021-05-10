const assert = require('assert');

var data = [
	{ "Gender": "Male", "HeightCm": 175, "WeightKg": 75}, 
	{ "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, 
	{ "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, 
	{ "Gender": "Female", "HeightCm": 166, "WeightKg": 62}, 
	{ "Gender": "Female", "HeightCm": 150, "WeightKg": 70}, 
	{ "Gender": "Female", "HeightCm": 167, "WeightKg": 82}
]

describe("Num_overweight_test", () => {
	before(() => {
		const helper = require("../helper");
		result = helper.add_entries(data);
		console.log("Testing if num_overweight_people is correct");
	});

	it("Blah-blah", () => {
		assert.equal(result.num_overweight_people, 1);
	})
})

// describe("Some-test", () => {
// 	it("blah-1", () => {
// 		assert(True)
// 	})
// })

describe("Some-test12", () => {
	before(() => {
		const helper = require("../helper");
		result = helper.add_entries(data);
		console.log("Testing if num_overweight_people is correct");
	});

	it("blah-1123", () => {
		assert.equal(Object.keys(result.data[0]).length, 6);
	})
})
