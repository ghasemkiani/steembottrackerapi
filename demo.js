//	@ghasemkiani/steembottrackerapi/demo

const {SteemBotTrackerAPI} = require("@ghasemkiani/steembottrackerapi");

(async () => {
	let sbta = new SteemBotTrackerAPI();
	await sbta.toUpdate();
	console.log(sbta.bots);
})();
