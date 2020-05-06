! function (e) {
	var t = {};

	function n(a) {
		if (t[a]) return t[a].exports;
		var o = t[a] = {
			i: a,
			l: !1,
			exports: {}
		};
		return e[a].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	n.m = e, n.c = t, n.d = function (e, t, a) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: a
		})
	}, n.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function (e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var a = Object.create(null);
		if (n.r(a), Object.defineProperty(a, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var o in e) n.d(a, o, function (t) {
				return e[t]
			}.bind(null, o));
		return a
	}, n.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 0)
}

([function (e, t, n) {
	var a = document.querySelector('script[data-name="BMC-Widget"]');
	window.onload = function () {
		new FontFace("Avenir Book1", "url(https://bmc-cdn.nyc3.digitaloceanspaces.com/Fonts/710789a0-1557-48a1-8cec-03d52d663d74.eot)"), new FontFace("Avenir Book2", "url(https://bmc-cdn.nyc3.digitaloceanspaces.com/Fonts/710789a0-1557-48a1-8cec-03d52d663d74.eot)"), new FontFace("Avenir Book3", "url(https://bmc-cdn.nyc3.digitaloceanspaces.com/Fonts/710789a0-1557-48a1-8cec-03d52d663d74.eot)"), new FontFace("Avenir Book4", "url(https://bmc-cdn.nyc3.digitaloceanspaces.com/Fonts/65d75eb0-2601-4da5-a9a4-9ee67a470a59.woff)"), new FontFace("Avenir Book5", "url(https://bmc-cdn.nyc3.digitaloceanspaces.com/Fonts/65d75eb0-2601-4da5-a9a4-9ee67a470a59.woff)");
		
		
		new FontFace("Avenir Book6", "url(https://bmc-cdn.nyc3.digitaloceanspaces.com/Fonts/65d75eb0-2601-4da5-a9a4-9ee67a470a59.woff)").load().then((function (e) {
			document.fonts.add(e)
		})).catch((function (e) {}));
		var e = document.createElement("div");
		
		
		e.id = "bmc-wbtn",
		e.style.display = "flex",
		e.style.alignItems = "center",
		e.style.justifyContent = "center",
		e.style.width = "8.5rem",
		e.style.height = "8.5rem",
		e.style.background = a.dataset.color,
		e.style.color = "white",
		e.style.borderRadius = "50%",
		e.style.position = "fixed", "left" == a.dataset.position ? e.style.left = a.dataset.x_margin + "px" : e.style.right = a.dataset.x_margin + "px", e.style.bottom = a.dataset.y_margin + "px", e.style.boxShadow = "0 4px 8px rgba(0,0,0,.4)", e.innerHTML = '<img src="https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg" alt="Buy Me A Coffee" style="height: 4rem; margin: 0; padding: 0;">', e.style.zIndex = "999", e.style.cursor = "pointer", e.style.fontWeight = "600", e.style.transition = "all .2s ease";
		var t = document.createElement("div");
		t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "0", t.style.height = "0", t.style.background = "rgba(0, 0, 0, 0)", t.style.textAlign = "center", t.style.zIndex = "9999", t.style.transition = "all .4s ease";
		var n = document.createElement("iframe");
		n.style.position = "fixed", n.style.margin = "0", n.style.border = "0", "left" == a.dataset.position ? n.style.left = "4rem" : n.style.right = "4rem", n.style.bottom = "12rem", n.style.height = "80rem", n.style.opacity = "0", n.style.width = "80vw", n.style.maxWidth = "80vw", n.style.borderRadius = "1vh", n.style.boxShadow = "0 8px 16px rgba(0,0,0,.4)", n.style.background = "#fff", n.style.backgroundImage = "url(https://cdn.buymeacoffee.com/assets/img/widget/loader.svg)", n.style.backgroundPosition = "center", n.style.backgroundSize = "10vh", n.style.backgroundRepeat = "no-repeat", n.style.zIndex = "99999", n.style.transition = "all .4s ease", n.style.maxHeight = "620px";
		var o = document.createElement("div");
		o.style.position = "fixed", o.style.display = "none", o.style.opacity = "0", "left" == a.dataset.position ? o.style.left = parseInt(a.dataset.x_margin, 10) + 84 + "px" : o.style.right = "12rem", o.style.bottom = "2.5rem", o.style.background = "#ffffff", o.style.zIndex = "999", o.style.transition = "all .4s ease", o.innerText = a.dataset.message, o.style.boxShadow = "0 4px 8px rgba(0,0,0,.3)", o.style.padding = "3vw", o.style.borderRadius = "1vh", o.style.fontSize = "1.7vh", o.style.color = "#000000", o.style.width = "auto", o.style.maxWidth = "70vw", o.style.lineHeight = "1.5", o.style.fontFamily = '"Avenir Book1", "Avenir Book2", "Avenir Book3", "Avenir Book4", "Avenir Book5", "Avenir Book6", sans-serif', o.style.display = "none", document.body.appendChild(t), t.appendChild(n), document.body.appendChild(e), document.body.appendChild(o);
		var s = 0;
		
		// payment card design
		
//		e.onclick = function () {
//			s || (n.src = "https://www.buymeacoffee.com/widget/page/" + a.dataset.id + "?description=" + encodeURIComponent(a.dataset.description) + "&color=" + encodeURIComponent(a.dataset.color)), s++, o.style.opacity = "0", o.style.display = "none", t.style.width = "100%", t.style.height = "100%", n.style.height = "100vh", n.style.opacity = "1", e.style.transform = "scale(.8)", e.innerHTML = '<svg focusable="false" aria-hidden="true" width="14" height="14"><path fill="#ffffff" d="M13.978 12.637l-1.341 1.341L6.989 8.33l-5.648 5.648L0 12.637l5.648-5.648L0 1.341 1.341 0l5.648 5.648L12.637 0l1.341 1.341L8.33 6.989l5.648 5.648z" fill-rule="evenodd"></path></svg>'
//		}, 
//			
			
			
			t.onclick = function () {
				t.href = "https://www.buymeacoffee.com/Druhin",
			t.style.width = "0", t.style.height = "0", n.style.height = "0", n.style.opacity = "0", e.style.transform = "scale(1)", e.innerHTML = '<img src="https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg" alt="Buy Me A Coffee" style="height: 5rem; margin: 0; padding: 0;">'
		}, setTimeout((function () {
			a.dataset.message && "" != a.dataset.message && (o.style.display = "block", o.style.opacity = "1")
		}), 3e3)
	}
}]);
