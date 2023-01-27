import {deleteAsync} from "del";
import {config} from "./config.js";

export function clearDist() {
	return deleteAsync(config.out.baseDir, {force: true});
}
