function cambiar(){
	var help = new Audio('carpetas/help.mp3');
	var tin = new Audio('carpetas/tin.mp3');
	var prinDiv = document.getElementById('divMain');
	var prinIma = document.getElementById('imag');
	var foo = document.getElementById('foo');
	
	prinIma.setAttribute('id', 'help');
	prinIma.src = 'carpetas/john_lennon_0.jpg';
	help.play();
	setTimeout(()=>{
		prinDiv.remove();
		prinIma.remove();
		document.body.style.backgroundColor = 'black';
		foo.innerHTML += '<p>To <strong><a rel="external" target="_blank" href="https://youtu.be/2Q_ZzBGPdqE">Original Music</a></strong></p>';
		tin.play();
	}, 9 * 1000);
};