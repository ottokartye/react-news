import CookieManager from "./CookieManager";

export default class Auth {

	static login(username, password) {
		// Check if user exists
		var string = localStorage.getItem(username);
		var userObject = JSON.parse(string);

		if (userObject.password === password) {
			CookieManager.storeUserCookie(username, 1);
			return true;
		} else {
			return false;
		}
	}

	static register(username, password) {
		// Check if another user with the same username exists
		var string = localStorage.getItem(username);
		var object = JSON.parse(string);

		if  (object != null) {
			return false;
		} else {
			return true;
		}
	}

	static logout() {
		CookieManager.deleteUserCookie();
	}

	static loggedIn() {
		return CookieManager.getUsernameFromCookie();
	}

}