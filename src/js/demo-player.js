document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.querySelector('.play-btn');
  const placeholder = document.querySelector('.video-placeholder');
  const iframe = document.querySelector('.video-player');

  playBtn.addEventListener('click', () => {
    const src = iframe.getAttribute('src');
    if (!src.includes('autoplay=1')) {
      iframe.setAttribute(
        'src',
        src + (src.includes('?') ? '&' : '?') + 'autoplay=1'
      );
    }

    placeholder.classList.add('visually-hidden');
    iframe.classList.remove('visually-hidden');
  });
});
