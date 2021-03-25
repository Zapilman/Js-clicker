
const game = () => {
	const wrapper = document.querySelectorAll(".game__item");
	const loseSection = document.querySelector(".lose-section");
	const scoreNum = document.getElementById("pScore");

	let score = 0;
	let time = 3000;
	let timeBegin = 0;
	let timeEnd = 0;
	let timer = setTimeout(() => console.log("works!"), 100);

	const startMatch = () => {
		
		let buttonId = 0;
		let number = 0;

		generateNew();

		

		wrapper.forEach(button => {
			button.addEventListener("click", check);
		});

		
	
		function generateNew(){
			number = Math.floor(Math.random()*24);
			wrapper[number].style.background = '#fff';


		};


		function check(){
			clearTimeout(timer);

			buttonId = this.id;
			timeBegin = Date.now();
			timeEnd = timeBegin + time;

			timer = setInterval(dateCheck, 300);

			if(number == buttonId - 1){
				this.style.background = 'transparent';

				score++;

				generateNew();
			}
			else{
				gameOver();

				return;
			}
		}

		function dateCheck(){
			time-=100;

			if((timeEnd - Date.now()) < 0){
				clearTimeout(timer);

				gameOver();
			}
			else{
				return;
			}
		}

		function gameOver(){
			wrapper[number].style.background = 'transparent';

			scoreNum.textContent = score;
			loseSection.classList.remove("fade_out");
		}

		

	};

	startMatch();
};

game();