//	@ghasemkiani/steembottrackerapi

const {fetcher} = require("@ghasemkiani/commonbase/web/client");
const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Base} = require("@ghasemkiani/commonbase/base");

class SteemBotTrackerAPI extends cutil.mixin(Base, fetcher) {
	async toUpdate() {
		this.bots = await this.toFetch({url: this.url}).json;
		return this;
	}
}
cutil.extend(SteemBotTrackerAPI.prototype, {
	url: "https://steembottracker.net/bid_bots",
	bots: null,
});

module.exports = {SteemBotTrackerAPI};
