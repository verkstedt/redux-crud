import {merge} from "ramda";
import constants from "../../../constants";

export function prepareRecord(record: Object) {
	var recordStatus = {
		[constants.SPECIAL_KEYS.BUSY]: true,
		[constants.SPECIAL_KEYS.PENDING_UPDATE]: true
	};

	return merge(record, recordStatus);
}
