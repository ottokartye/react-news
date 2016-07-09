export default class LocalStorage {

	constructor() {
		if (this.canUseLocalStorage()) {
			this.storageType = 1; // For local storage
		} else {
			this.storageType = 2; // For session storage
		}
	}

	canUseLocalStorage() {
		if (typeof(Storage) !== "undefined") {
		    return true;
		} else {
		    return false;
		}
	}

	get(key) {
		if (this.storageType === 1) {
			return localStorage.getItem(key);
		} else {
			return sessionStorage.getItem(key);
		}
	}

	set(key, value) {
		if (this.storageType === 1) {
			return localStorage.setItem(key, value);
		} else {
			return sessionStorage.setItem(key, value);
		}
	}
}