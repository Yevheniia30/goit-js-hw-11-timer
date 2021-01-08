import './styles.css';

const daysRef = document.querySelector('span[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minsRef = document.querySelector('span[data-value="mins"]');
const secsRef = document.querySelector('span[data-value="secs"]');
console.log(daysRef);
console.log(hoursRef);
console.log(minsRef);
console.log(secsRef);

const timer = {
  start() {
    const eventTime = new Date('Oct 30, 2021');
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = eventTime - currentTime;
      console.log(deltaTime);
    }, 1000);
  },

  stop() {
    clearInterval(intervalId);
  },
};

timer.start();

const eventTime = new Date(2021, 9, 30, 12);
const currentTime = Date.now();
console.log('event:', eventTime);
console.log('current:', currentTime);
const deltaTime = eventTime - currentTime;
console.log(deltaTime);

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
