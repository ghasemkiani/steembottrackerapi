const assert = require("assert");
const {SteemBotTrackerAPI} = require("@ghasemkiani/steembottrackerapi");

describe("SteemBotTrackerAPI", function () {
	describe("toUpdate", function () {
		let sbta = new SteemBotTrackerAPI();
		it("should get bot list", async function () {
			await sbta.toUpdate();
			assert.ok(sbta.bots.length > 0);
		});
	});
});
