export default class UserDto {
	constructor(username, searches, increment, logins) {
		this.username = username;
		this.searches = searches;
		this.increment = increment;
		this.logins = logins;
	}
}