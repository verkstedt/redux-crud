import {has, all} from "ramda";

export default function(config, reducerName, records) {
	// All given records must have a key
	var haskey = has(config.key);
	var allKeys = all(haskey, records);

	if (!allKeys) {
		throw new Error(
			reducerName +
				": Expected all records to have a value for the store's key `" +
				config.key +
				"`"
		);
	}
}
