const listItems = document.querySelectorAll('.vacancy-list li');
const contents = document.querySelectorAll('.vacancy-content');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    listItems.forEach(li => li.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    item.classList.add('active');
    const id = item.getAttribute('data-vacancy');
    document.getElementById(id).classList.add('active');
  });
});
