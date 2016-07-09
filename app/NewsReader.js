export default class NewsReader {

	static getPromise(subject, start = 0) {
		return jQuery.ajax({
		  url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=2.0&start=' + start + '&callback=?&q=' + encodeURIComponent('http://news.google.com/news?q=' + subject + '&output=rss'),
		  dataType : 'json',
		  cache: false
		});	
	}

}