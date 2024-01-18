import timerModule from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import regular from './modules/regular';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import calc from './modules/calc';

timerModule('13 january 2024 01:01:00');
menu();
modal();
regular();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots', 'portfolio-item-active');
sliderCarousel();
calc();
