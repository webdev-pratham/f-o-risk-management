let BTN = document.getElementById("calc");

BTN.addEventListener("click", A);

 function A () {
	let CAP = document.getElementById("cap").value;
	let PRPT = document.getElementById("prpt").value;
	let Entry = document.getElementById("entry").value;
	let SL = document.getElementById("sl").value;
	let SLPU = document.getElementById("slpu");
	let RRPT = document.getElementById("rrpt");
	let TU = document.getElementById("tu");
	let LOT_size = document.getElementById("lot-size").value;
	let LTT = document.getElementById("ltt");
	let T1 = document.getElementById("t1");
	let T2 = document.getElementById("t2");
	let T3 = document.getElementById("t3");
	let T4 = document.getElementById("t4");




	RRPT.innerText=((PRPT*CAP)/100);
	SLPU.innerText=(Entry-SL);
	TU.innerText=(RRPT.innerText/SLPU.innerText);
	LTT.innerText=(TU.innerText/LOT_size);




	T1.innerText = (-1 * (- Entry - SLPU.innerText));
	T2.innerText = (-1 * (- Entry - (SLPU.innerText * 2)));
	T3.innerText = (-1 * (- Entry - (SLPU.innerText * 3)));
	T4.innerText = (-1 * (- Entry - (SLPU.innerText * 5)));	


	console.log(T1+ " " + T2+ " "+ T3+ " " + t4);
}