const skillTitles = document.querySelectorAll('.skill-title');
const pathway = document.getElementById('pathway');

skillTitles.forEach((title) => {
  title.addEventListener('click', () => {
    pathway.innerHTML = '';
    const leaves = document.createElement('div');
    leaves.id = 'leaves';
    pathway.appendChild(leaves);

    const leafCount = Math.floor(Math.random() * 10) + 5;

    for (let i = 0; i < leafCount; i++) {
      const leaf = document.createElement('div');
      leaf.classList.add('leaf');
      leaf.style.animationDelay = `${i * 0.1}s`;
      leaves.appendChild(leaf);
    }
  });
});
