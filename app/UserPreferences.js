import LocalStorage from "./LocalStorage";
import UserDto from "./UserDto";

export default class UserPreferences extends LocalStorage {

	constructor(username) {
		super();
		this.username = username;
		// If preference doesn't exist yet then create it
		var userDto = this.get(this.username);
		if (userDto == undefined) {
			userDto = new UserDto(username, "siri,apple,animal+rescue", 1);
			this.set(this.username, JSON.stringify(userDto));
		}
	}

	savePreference(key, value) {
		// Read all preferences for user
		var preferences = this.get("otto");
		preferences = JSON.parse(preferences);
		// Update DTO
		preferences = this.updateUserDto(preferences, key, value);
		// Save DTO
		this.set(this.username, JSON.stringify(preferences));
	}

	getPreference(key) {
		//console.log("Trying to get preference " + key);
		var preferences = this.get(this.username);
		var userDto = JSON.parse(preferences);
		//console.log(userDto);
		return userDto[key];
	}

	getAll() {
		return this.get(this.username);
	}

	updateUserDto(oldDto, key, value) {
		switch(key) {
			case "searches":
				if (oldDto.searches !== "") {
					oldDto.searches += ",";
				}
				if (value.indexOf(" ") > -1) {
					value = value.replace(" ", "+");
				}
				oldDto.searches += value;
				break;
			case "logins":
				oldDto.logins += 1;
				break;
		}

		return oldDto;
	}

}

//var user = {"otto": {username: "otto", searches: "asd,sdf+asd,sdf", logins: 23}};