console.log('hello world');

document.addEventListener('DOMContentLoaded', function () {
  console.log('is page loaded?');
  // Vue, take control of SOME ELEMENT
  new Vue({
    template: `
			<div>
			A REACTIVE PAGE by {{name}}

			<button @click="addScore">get point</button>

			points: {{points}}

			<button @click="removeScore">lose point</button>
			</div>
		`,
    el: '#app',

    methods: {
      addScore() {
        console.log('SCORE');
        // Incret
        this.points += 1;
      },
      removeScore() {
        this.points -= 1;
      },
    },

    mounted() {
      console.log('heelllloo?');

      setInterval(() => {
        console.log('Tick');
        this.points += 1;
      }, 300);
    },

    data: {
      points: 0,
      name: 'Me',
      emoji: ['ahh'],
    },
  });
});
