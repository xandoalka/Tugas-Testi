// app.js

const authorElement = document.getElementById('author');
const jobElement = document.getElementById('job');
const infoElement = document.getElementById('info');
const imgElement = document.getElementById('person-img');

let currentReview = 0;

function showReview(review) {
  const { name, job, text, img } = review;

  authorElement.textContent = name;
  jobElement.textContent = job;
  infoElement.textContent = text;
  imgElement.src = img;
}

function nextReview() {
  currentReview++;
  if (currentReview >= reviews.length) {
    currentReview = 0;
  }
  showReview(reviews[currentReview]);
}

function prevReview() {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  showReview(reviews[currentReview]);
}

function randomReview() {
  const randomIndex = Math.floor(Math.random() * reviews.length);
  currentReview = randomIndex;
  showReview(reviews[currentReview]);
}

document.addEventListener('DOMContentLoaded', () => {
  showReview(reviews[currentReview]);

  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  const randomButton = document.querySelector('.random-btn');

  prevButton.addEventListener('click', prevReview);
  nextButton.addEventListener('click', nextReview);
  randomButton.addEventListener('click', randomReview);
});
