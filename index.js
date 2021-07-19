//	@ghasemkiani/steembottrackerapi

const {cutil} = require("@ghasemkiani/base/cutil");
const {Obj: Base} = require("@ghasemkiani/base/obj");
const {fetcher} = require("@ghasemkiani/net-utils/web/client");

class SteemBotTrackerAPI extends cutil.mixin(Base, fetcher) {
	async toUpdate() {
		let rsp = await this.toFetch({url: this.url});
		this.bots = await rsp.json();
		return this;
	}
}
cutil.extend(SteemBotTrackerAPI.prototype, {
	url: "https://steembottracker.net/bid_bots",
	bots: null,
});

module.exports = {SteemBotTrackerAPI};
