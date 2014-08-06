function searchBusStop(keyword) {
	var sieve = function(keyword) {
		var helper = function(bs) {
			if (bs instanceof BusStop) {
				var re = new RegExp(keyword);
				if (re.test(bs.name)) {
					console.log("Match! " + bs.name + "\n")
					
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		}
		return helper;
	}
	var fx = sieve(keyword);
	var res = busStops.filter(fx);
	console.log("%d matches found.", res.length)
	return res;
}


