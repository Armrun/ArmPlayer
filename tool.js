var e = function(classname) {
	return document.querySelector(classname)
}

var log = function() {
	console.log.apply(console, arguments)
}

var bind = function(element, eventName, callback) {
	element.addEventListener(eventName, callback)
}

var appendHtml = function(element, html) {
	element.insertAdjacentHTML('beforeend', html)

}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}