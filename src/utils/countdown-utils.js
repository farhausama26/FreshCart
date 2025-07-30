export function calculateTimeLeft({ targetDate } = {}) {
  if (!targetDate) targetDate = new Date().setHours(23, 59, 59);

  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  const difference = targetDate - new Date().getTime();

  if (difference > 0) {
    const hours = Math.trunc(difference / oneHour);
    const minutes = Math.trunc((difference % oneHour) / oneMinute);
    const seconds = Math.trunc(
      ((difference % oneHour) % oneMinute) / oneSecond
    );

    return { expired: false, hours, minutes, seconds };
  } else {
    return { expired: true, hours: 0, minutes: 0, seconds: 0 };
  }
}
