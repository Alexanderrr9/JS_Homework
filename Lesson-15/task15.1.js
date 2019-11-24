function createTr() {
	var trs = document.getElementsByClassName('tr'),
        tr = trs[0];
    var	tds = tr.getElementsByTagName('td'),
        td = tds[0];

	var clonetr = tr.cloneNode(true);
	document.getElementById('table').insertBefore(clonetr, table.children[0]);
}

var trs = document.getElementsByClassName('tr'),
	tr = trs[0];
var	tds = tr.getElementsByTagName('td'),
	td = tds[0];

var tds = document.querySelectorAll('td');

for (var i = 0; i < tds.length; i++) {
	tds[i].addEventListener('click', function fun() {

		var input = document.createElement('input');
		input.value = this.innerHTML;
		this.innerHTML = '';
		this.appendChild(input);

		var td = this;
		input.addEventListener('blur', function () {
			td.addEventListener('click', fun);
			td.innerHTML = this.value;
		});
		this.removeEventListener('click', fun);
	});
}

