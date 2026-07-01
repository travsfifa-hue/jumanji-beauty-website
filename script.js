document.getElementById('year').textContent = new Date().getFullYear();

const HOURS = {
  0: null,
  1: null,
  2: [9, 19],
  3: [9, 19],
  4: [9, 19],
  5: [9, 19],
  6: [9, 13],
};

const DAY_NAMES = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];

function updateHoursStatus() {
  const el = document.getElementById('hours-status');
  if (!el) return;

  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  const today = HOURS[day];

  if (today && hour >= today[0] && hour < today[1]) {
    el.textContent = `Aberto agora · fecha às ${String(today[1]).padStart(2, '0')}:00`;
    return;
  }

  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7;
    const nextHours = HOURS[nextDay];
    if (nextHours) {
      const label = i === 1 ? `abre às ${String(nextHours[0]).padStart(2, '0')}:00 amanhã`
        : `abre às ${String(nextHours[0]).padStart(2, '0')}:00 de ${DAY_NAMES[nextDay]}`;
      el.textContent = `Fechado · ${label}`;
      return;
    }
  }
}

updateHoursStatus();
