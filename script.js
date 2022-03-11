// menu bar
const toggle = document.getElementsByClassName('check-btn')[0];
const navLi = document.getElementsByClassName('nav-options')[0];
const commentSec = document.getElementById('featured');

toggle.addEventListener('click', () => {
  navLi.classList.toggle('active');
});

function myFunction(x) { // eslint-disable-line no-unused-vars
  x.classList.toggle('fa-xmark');
}

// featured section dynamic html

const data = [
  {
    name: 'Alex Sintek',
    title: 'Pop singer',
    img: 'Alex.jpg',
    comment: 'So glad I could participate on this event, I will gladly go to the next one and sing some songs',
  },
  {
    name: 'Andrea Belocia',
    title: 'Comedian',
    img: 'Andrea.jpg',
    comment: 'Best event ever, Im so glad I could participate and give my little contribution for those poor animals.',
  },
  {
    name: 'Rosa Melano',
    title: 'Dog Lover',
    img: 'Rosa.jpg',
    comment: 'Im so happy for this kind of events, I hope next year more peaple can come and participate so they can recover more founds and help those little angels',
  },
  {
    name: 'Simon Rodriguez',
    title: 'Veterinarian',
    img: 'SimonR.jpg',
    comment: 'I am just so happy that there were that many people in this event, hope those beautiful animals can soon find a loving roof with some loving owners',
  },
  {
    name: 'Stefan Suarex',
    title: 'College Student',
    img: 'Stefan.jpg',
    comment: 'Got a new dog thanks to this event, ever since I adopted him my life and his changed completly, I cant belive such a good soul needed to be rescued.',
  },
  {
    name: 'Gabriela Jadán',
    title: 'Doctor',
    img: 'gabriela.jpg',
    comment: 'What a great event, food was delicius, concert was so fun, and I came back home with a beautiful dog and a lovely cat. I will give my best forr giving them the life they deseerve.',
  },
];

const testimonial = document.getElementById('feature');
if (testimonial !== null) {
  data.map((el, i) => {
    const comment = document.createElement('div');
    comment.classList.add('featured-card-box');
    if (i > 1) {
      comment.classList.add('hidden');
    }
    comment.innerHTML = `<div class="profile-picture">
          <img src="assets/${el.img}">
      </div>
      <div class="comment">
        <h3>${el.name}</h3>
        <h4>${el.title}</h4>
        <span class="text-div"></span>
        <p>${el.comment}</p>
      </div>`;
    testimonial.append(comment);
    return null;
  });
  const btnMore = document.createElement('button');
  btnMore.innerHTML = 'MORE <i class=\'fa fa-chevron-down\'></i>';
  btnMore.addEventListener('click', (e) => {
    e.preventDefault();
    if (btnMore.querySelector('i').classList.contains('fa-chevron-down')) {
      btnMore.innerHTML = 'LESS <i class=\'fa fa-chevron-up\'></i>';
      Array.from(document.querySelectorAll('.featured-card-box.hidden')).map((el) => {
        el.classList.remove('hidden');
        el.classList.add('visible');
        return null;
      });
    } else {
      btnMore.innerHTML = 'MORE <i class=\'fa fa-chevron-down\'></i>';
      Array.from(document.querySelectorAll('.featured-card-box.visible')).map((el) => {
        el.classList.remove('visible');
        el.classList.add('hidden');
        return null;
      });
    }
  });
  commentSec.append(btnMore);
}