export default class CookieManager {
	
	static storeUserCookie(username, days) {
		// Check if cookie still exists
		var cookies = document.cookie;
		var date, expires;
	    if (days) {
	        date = new Date();
	        date.setTime(date.getTime()+(days*24*60*60*1000));
	        expires = "; expires="+date.toGMTString();
	    } else {
	        expires = "";
	    }
		document.cookie = "username=" + username + expires;	
	}

	static getUsernameFromCookie() {
		var cookies = document.cookie;
		var position = cookies.indexOf("username=");
		if (position > -1) {
			var username = cookies.substring(position + 9);
			return username;
		} else {
			return false;
		}
	}

	static deleteUserCookie() {
		document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	}
}