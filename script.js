// Katakamuna Archive — minimal JS
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  // 48音カードの絞り込み（音・思念で検索）
  const input = document.getElementById('sound-filter');
  const cards = Array.from(document.querySelectorAll('.sound-card'));
  const count = document.getElementById('sound-count');
  if (input && cards.length) {
    input.addEventListener('input', () => {
      const q = input.value.trim();
      let shown = 0;
      cards.forEach(c => {
        const hit = !q || (c.dataset.sound || '').includes(q);
        c.hidden = !hit;
        if (hit) shown++;
      });
      if (count) count.textContent = q ? `${shown} / ${cards.length} 音を表示中` : `全 ${cards.length} 音`;
    });
  }
});
