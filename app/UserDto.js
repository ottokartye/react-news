export default class UserDto {
	constructor(username, password, searches, increment, logins) {
		this.username = username;
		this.password = password;
		this.searches = searches;
		this.increment = increment;
		this.logins = logins;
	}
}