"use strict"

const logout = () => {
	sessionStorage.removeItem('token')
	window.location.reload()
}

const getHeader = (title) => {
	const header = createDiv();
	header.classList.add('navbar', 'bg-theme', 'd-flex', 'justify-content-between')
	const titleComp = document.createElement('div')
	titleComp.classList.add('h4')
	titleComp.innerText = title
	header.appendChild(titleComp)
	const logoutButton = document.createElement('button')
	logoutButton.innerText = 'Logout'
	logoutButton.classList.add('btn-theme', 'btn-theme-outline')
	logoutButton.addEventListener('click', logout)
	header.appendChild(logoutButton)
	return header
}

const createDiv = () => {
	return document.createElement('div')
}
if ((!sessionStorage.getItem('token')) && (window.location.pathname.indexOf('index.html') === -1)) {
	const pathSplit = window.location.pathname.split('/')
	const newPath = pathSplit.slice(0, pathSplit.length - 1).join('/') + '/index.html'
	window.location.replace(newPath)
}

const ajaxCall = (endPoint, data, method, onSuccess) => {
	$.ajax({
		url: `http://localhost:5000/${endPoint}`,
		type: method,
		data,
		dataType: "json",
		beforeSend: function (x) {
			if (x && x.overrideMimeType) {
				x.overrideMimeType("application/j-son;charset=UTF-8");
			}
		},
		success: onSuccess
	});
}