let numEl=document.getElementById('num');
		let resuEl=document.getElementById('result');
		document.getElementById('btn').onclick=btn_click;
		function btn_click() {
			let n = recurs(numEl.value);
			result.textContent = n;
		}
		function recurs(numStr) {
			let tmp = [...numStr].reduce((a, b) => a + +b, 0);
			while (tmp>9) tmp = recurs(tmp.toString());
			return tmp;
		}