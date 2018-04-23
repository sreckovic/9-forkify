import { elements } from './base';

export const toggleLikeBtn = isLiked => {
  const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
  document
    .querySelector('.recipe__love use')
    .setAttribute('href', `img/icons.svg#${iconString}`);
  // icons.svg#icon-circle-with-cross
};

export const toggleLikeMenu = numLikes => {
  elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
};

export const renderLike = like => {
  const markup = `
    <li>
      <a class="likes__link" href="#23456">
        <figure class="likes__fig">
          <img src="img/test-1.jpg" alt="Test">
        </figure>
        <div class="likes__data">
          <h4 class="likes__name">Pasta with Tomato ...</h4>
          <p class="likes__author">The Pioneer Woman</p>
        </div>
      </a>
    </li>
  `;
};
