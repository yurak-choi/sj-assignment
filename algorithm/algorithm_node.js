
let input = [];
const MAX = 1000;

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	input.push(parseInt(line));
	if(input.length>input[0])
		rl.close();
}).on("close", function() {
	let primeList = [];
	let primes = new Array(MAX);
	primes.fill(true);
	for(let i = 2; i<MAX; i++) {
		if(primes[i]) {
			primeList.push(i);
			for(let j = i*2; j<MAX; j+=i) {
				primes[j] = 0;
			}
		}
	}
	
	for(let t = 1; t<input.length; t++) {
		let k = input[t];
		let flag = false;
		
		loop : for(let p1 of primeList) {
			for(let p2 of primeList) {
				for(let p3 of primeList) {
					if(p1+p2+p3==k) {
						console.log(p1+" "+p2+" "+p3);
						flag = true;
						break loop;
					}
				}
			}
		}
		if(!flag) console.log(0);
	}
	process.exit();
});