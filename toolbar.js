var toolbar_title = [
	['Night', 'উজ্জ্বল', 'আবছা'],
	['view', 'প্রর্দশন'],
	['filter', 'নির্বাচন'],
	['Notify', 'বিজ্ঞপ্তি'],
]
var item_title = document.querySelectorAll('.item_title')
var viewoption = document.getElementById('viewoption');
var filteroption = document.getElementById('filteroption');
var icon = document.querySelectorAll('.icon')
var item = document.querySelectorAll('.item')

for (var i = 0; i < item_title.length; i++) {
	item_title[i].innerHTML = toolbar_title[i][1]
	// icon[i].innerHTML = ic.
	item[i].setAttribute('onclick', `clickbtn('${item[i].getAttribute('id')}')`)
}
icon[0].innerHTML = '<i class="far fa-lightbulb"></i>'
icon[1].innerHTML = '<i class="far fa-eye"></i>'
icon[2].innerHTML = '<i class="fas fa-sort-amount-up"></i>'
icon[3].innerHTML = '<i class="far fa-bell notify"></i>'
icon[3].insertAdjacentHTML('afterend', `<i id="newnoti">3</i>`);