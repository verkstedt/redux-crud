import {is} from "ramda";

export default function wrapArray(recordOrRecords) {
	var isArray = is(Array, recordOrRecords);
	return isArray ? recordOrRecords : [recordOrRecords];
}
