export default class NewsReader {

	static getPromise(subject, numberOfItems) {
		return jQuery.ajax({
		  url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + numberOfItems + '&callback=?&q=' + encodeURIComponent('http://news.google.com/news?q=' + subject + '&output=rss&num=100'),
		  dataType : 'json',
		  cache: false
		});	
	}

}