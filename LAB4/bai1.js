let count = 0;

const intervalId = setInterval(() => {
  console.log(count);
  if (count === 10) {
    clearInterval(intervalId);
  }
  count++;
}, 1000);
