import UserDto from "./UserDto";

export default class UserPreferences {

	checkUserCredentials(username, password) {
		var preferences = JSON.parse(localStorage.getItem(username));
		if (preferences != null) {
			if (preferences.password === password) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	initUser(username, password) {
		var userDto = new UserDto(username, password, "", 10, 1);
		localStorage.setItem(username, JSON.stringify(userDto));
	}

	getPreferenceObject(username) {
		var model = localStorage.getItem(username);
		return JSON.parse(model);
	}

	incrementLogins(username) {
		var model = this.getPreferenceObject(username);
		model.logins += 1;
		localStorage.setItem(username, JSON.stringify(model));
	}

	updateSearchHistory(username, value) {
		var model = this.getPreferenceObject(username);

		// Add comma if not the first entry
		if (model.searches !== "") {
			model.searches += ",";
		}
		// Replace space with + sign
		if (value.indexOf(" ") > -1) {
			value = value.replace(" ", "+");
		}
		model.searches += value;
		return localStorage.setItem(username, JSON.stringify(model));
	}

	updateScrollSize(username, value) {
		if (value === 0 && value === "") {
			return false;
		}
		var model = this.getPreferenceObject(username);
		model.increment = value;
		return localStorage.setItem(username, JSON.stringify(model));
	}

	removeSearchHistoryItem(username, index) {
		var model = this.getPreferenceObject(username);
		var searchHistoryArr = model.searches.split(",");
		searchHistoryArr.splice(index, 1);
		model.searches = searchHistoryArr.join(",");
		return localStorage.setItem(username, JSON.stringify(model));
	}

	// Getting the value of a preference
	getPreference(username, key) {
		var preferences = localStorage.getItem(username);
		var userDto = JSON.parse(preferences);
		return userDto[key];
	}

	clearPreferences(key) {
		return localStorage.removeItem(key);
	}

}