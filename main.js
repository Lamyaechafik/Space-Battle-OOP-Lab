class Ship {
    constructor(hull, firepower, accuracy,name) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.name = name;
    }
//attack the enemy 
     attack(target) 
    {
		if (this.hull <= 0 || target.hull <= 0) return;

		if (Math.random() < this.accuracy) {
			target.hull -= this.firepower;
			console.log(
				`${this.name} hit yes  ${target.name}`,
				`Hull: ${target.hull}`
			);
		} else
			console.log(
				`${this.name} missed the shot!`,
				`${target.name} Hull: ${target.hull}`
			);
		if (target.hull <= 0) {
			console.log(`%c${target.name} ship is destoryed!`, "color: pink;");
			console.log("");
		}
	}
}
    


// Alien ships
const Aliens = [];
const shipsNum = 6;

for (let i = 0; i < shipsNum; i++) {
    const hull = Math.floor(Math.random() * 4) + 3;
    const firepower = Math.floor(Math.random() * 3) + 2;
    const accuracy = Math.random() * (0.2 + 0.6) + 0.2;

    //create new instance to the array 
    const alien = new Ship(
        hull, 
        firepower, 
        accuracy);
		getRandomAlienShipName
    Aliens.push(alien);
}
const ussAssembly = new Ship(20, 5, 0.7);

let gameOver = false;
//promise for the attack button
const waitForAttack = () => {
	return new Promise((resolve) => {
		const attack = document.querySelector(".attack-button");
		attack.onclick = () => {
			resolve(); 
		};
	});
};
//

(async () => {
	for (let i = 0; i < shipsNum.length; i++) {
		const alien = shipsNum[i];

		await waitForAttack(); // Wait for the attack button to be pressed
		const retreat = document.querySelector(".retreat-button");
		retreat.onclick = () => {
			gameOver = true;
			console.log("%cUSS Assembly has retreated", "color: purple;");
		};

		if (gameOver) {
			break;
		}

		while (ussAssembly.hull > 0 && alien.hull > 0) {
			ussAssembly.attack(alien);
			alien.attack(ussAssembly);
			if (ussAssembly.hull <= 0) {
				console.log("%cYou Lost!.", "color: red;");
				gameOver = true;
				break;
			}
		}

		if (gameOver) {
			break;
		}

		if (i === shipsNum.length - 1) {
			console.log("%cYou Win the battle WOohoo!.", "color: green;");
			gameOver = true;
			break;
		}
	}
})();
function getRandomAlienShipName() {
	const name = [
		"Cabal", "Caitian", "Calamarain", "Caleban", "Calcinite", "Callineans", "Calvin",
	];

	const randomName = name[Math.floor(Math.random() * name.length)];
	return randomName;
}