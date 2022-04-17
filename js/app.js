console.log("hello world")

document.addEventListener("DOMContentLoaded", function(){
   console.log("is page loaded?")
	// Vue, take control of SOME ELEMENT
	new Vue({
		template: `
			<div>
			A REACTIVE PAGE by {{name}}

			<button @click="score">get point</button>

			points: {{points}}
			</div>
		`,
		el: "#app",

		methods: {
			score() {
				console.log("SCORE")
				// Incret
				this.points += 1
			}
		},


		mounted() {
			console.log("heelllloo?")

			setInterval(() => {
				console.log("Tick")
				this.points += 1
			}, 300)
		},

		data: {
			points: 0,
			name: "Kate",
			emoji: ["💖"]
		}
	}) 
});

