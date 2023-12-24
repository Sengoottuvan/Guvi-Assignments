import axios from "axios";
import { API } from "../global";

const otpReqUrl=API+"/users/reset-password";
const updatePassUrl=API+"/users/reset-password";

export const reqPasswordOtp = email => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post( otpReqUrl,{email});
			// console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const updateUserPassword = passObj => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.patch(updatePassUrl, passObj);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};