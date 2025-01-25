


	var item_title = document.querySelectorAll('.item_title')
	var viewoption = document.getElementById('viewoption');
	var filteroption = document.getElementById('filteroption');
	var icon = document.querySelectorAll('.icon')
	var item = document.querySelectorAll('.item')
	var headline_main = document.querySelectorAll('.headline_main');

	var themel = window.localStorage.getItem('theme');

	const theme = (id) => {
		if (id === 'night') {
			try {
				icon[0].innerHTML = '<i class="fas fa-lightbulb"></i>';
				item_title[0].innerHTML = toolbar_title[0][2];
			} catch (error) {

			}
			//	document.body.style.background = 'black'
			var txt = `body, div, section, h1, h2, h3, p, span, .col, 
			i, #navbar, #discription, .headline, #viewoption, #filteroption, #header, #sidebar_main{
				background-color: rgb(26, 39, 68);
				color: #d4dad9;
			}
			.read_more{
				box-shadow: -19px 2px 9px -3px #755e5e;
			}
			.top{
				border-bottom: 10px solid #614d4b;
			}
			
			`

			var style = document.createElement('style');
			style.setAttribute('type', "text/css");
			style.setAttribute('id', "night");
			style.innerHTML = txt;
			document.body.appendChild(style)
			headline_main.forEach((bg) => {
				bg.style.backgroundColor = 'rgba(0,0,0,0)';
				//console.log(headline_main)
			})

		} else if (id === 'day') {
			
				icon[0].innerHTML = '<i class="far fa-lightbulb"></i>';
				item_title[0].innerHTML = toolbar_title[0][1];
				console.log('day')
				var nightid = document.getElementById('night')
			
				try {
					nightid.remove();
				} catch (error) {
					
				}
		
			
		}
	}

	const clickbtn = (parm) => {
		if (parm === 'theme') {
			window.localStorage.setItem('theme', 'night')
			if (item_title[0].textContent === toolbar_title[0][1]) {
				theme('night');
			} else {
				window.localStorage.setItem('theme', 'day')
				theme('day');

			}

			try {
				viewoption.removeAttribute('style');
				filteroption.removeAttribute('style');
			} catch (error) {
			}

		} else if (parm === 'filter') {

			if (viewoption.getAttribute('style') !== null) {
				viewoption.removeAttribute('style');
				filterToggle();
			} else {
				filterToggle();
			}

		} else if (parm === 'view') {

			if (filteroption.getAttribute('style') !== null) {
				filteroption.removeAttribute('style');
				viewToggle();
			} else {
				viewToggle();
			}
			//window.open('./author.html', '_blank', 'width = 300px', 'height= 750px');

		} else if (parm === 'notification') {
			try {
				alert("এটি এখন সচল নয়")
				viewoption.removeAttribute('style');
				filteroption.removeAttribute('style');
			} catch (error) {
			}
		}
	}

	function viewToggle() {
		if (viewoption.getAttribute('style') === null) {
			viewoption.style.display = 'block';
		} else {
			viewoption.removeAttribute('style');
		}
	}

	function filterToggle() {
		if (filteroption.getAttribute('style') === null) {
			filteroption.style.display = 'block';
		} else {
			filteroption.removeAttribute('style');
		}
	}

	function addsearh_page() {
		var searchDiv = document.createElement('div')
		searchDiv.style.cssText = 'height: 100vh; width: 100vw; position: fixed; top: 0px; background: seagreen;'
		var div = document.createElement('div')
		div.setAttribute('id', 'search_page')
		div.innerHTML = '<input placeholder="খোঁজ করুন.....">'
		searchDiv.innerHTML = div.outerHTML;
		document.body.insertAdjacentHTML('afterend', searchDiv.outerHTML)
		console.log('search page open')
	}


	function Slider(element) {
		this.el = document.querySelector(element);
		this.init();
	}

	Slider.prototype = {
		init: function () {
			this.links = this.el.querySelectorAll("#slider-nav a");
			this.wrapper = this.el.querySelector("#slider-wrapper");
			this.navigate();
		},
		navigate: function () {

			for (var i = 0; i < this.links.length; ++i) {
				var link = this.links[i];
				this.slide(link);
			}
		},

		animate: function (slide) {
			var parent = slide.parentNode;
			var caption = slide.querySelector(".caption");
			var captions = parent.querySelectorAll(".caption");
			for (var k = 0; k < captions.length; ++k) {
				var cap = captions[k];
				if (cap !== caption) {
					cap.classList.remove("visible");
				}
			}
			caption.classList.add("visible");
		},

		slide: function (element) {
			var self = this;
			element.addEventListener("click", function (e) {
				e.preventDefault();
				var a = this;
				self.setCurrentLink(a);
				console.log(a)
				var index = parseInt(a.getAttribute("data-slide"), 10) + 1;
				var currentSlide = self.el.querySelector(".slide:nth-child(" + index + ")");
				self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
				self.animate(currentSlide);
			}, false);
		},
		setCurrentLink: function (link) {
			var parent = link.parentNode;
			var a = parent.querySelectorAll("a");

			link.className = "current";

			for (var j = 0; j < a.length; ++j) {
				var cur = a[j];
				if (cur !== link) {
					cur.className = "";
				}
			}
		}
	};


	// document.addEventListener( "DOMContentLoaded", function() {
	// 	var aSlider = new Slider( "#slider" );
	// });


	var isAndroid = () => {
		var useragent = navigator.userAgent.toLowerCase();
		if (useragent.indexOf('android') > -1) {
			return true;
		} else {
			return false;
		}
	}



	function setProfile(name, bnName, order) {
		window.localStorage.setItem('bnName', `${bnName}`)
		window.localStorage.setItem('name', `${name}`)
		window.localStorage.setItem('order', `${order}`)
		var click = new Audio('./sound/click_big.mp3');
		//click.play();
		try {
			Android.goAuthor('toast');
		} catch (error) {
			window.open('./author.html')
		}

	}
	function loadMoreAuthor(author) {
		window.localStorage.setItem('author', `${author}`)//pass argument for allauthor view
		try {
			Android_Allauthor.goAllAuthor('All author');
		} catch (error) {
			window.open(`./allauthor.html`);
		}

		//console.log('all')
	}




	function searchView() {
		try {
			// Anrroid_Search.andrid_search()
			alert("এটি এখন সচল নয়")
		} catch (error) {
			window.open(`./search.html`, '_blank', "customWindow", "menubar=1,resizable=1,width=350,height=750,top=0, left=650 ")

		}
	}


	function loadFromServer(file) {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, true);

		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					var allText = rawFile.responseText;
					// document.write(allText);
					var script = document.createElement('script')
					script.innerHTML = allText
					document.body.appendChild(script)
					console.log(script)

				}
			}
		}
		rawFile.send(null);
	}
	if (navigator.onLine) {
		loadFromServer("https://raw.githubusercontent.com/siilavanta/articleapp/main/appserver.js");
	}

	var mainUrl = location.href.includes('app.html');

	if (mainUrl) {

	}

	var getTheme = window.localStorage.getItem('theme');
	try {
		if (getTheme === null) {
			//theme('day')
		} else if (getTheme === 'night') {
			theme('night')
		} else if (getTheme === 'day') {
			theme('day')
		}
	} catch (error) {
		
	}

