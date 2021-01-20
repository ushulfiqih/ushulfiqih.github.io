$(document).ready(function() {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(cb) {
      setTimeout(() => cb(new Date()), 1000 / 60);
    }
  }

  const TIME_TO_FILL_FPRINT = 700; //ms
  const TIME_TO_REMOVE_FPRINT = 250;
  const DELAY_TO_CURVE = 350;
  const WOBBLE_TIME = 1000;
  const ELASTIC_TRANSITION_TIME_TO_STRAIGHT = 250;
  const ELASTIC_TRANSITION_TIME_TO_CURVED = 300;
  const ELEVATION_TIME = 700;
  const DELAY_AFTER_ELEVATION = 700;
  const DELAY_TO_ANIMATE_ELASTIC_STROKE = 400;
  const DELAY_TO_ANIMATE_MONEY_PARTICLES = 300;
  const DELAY_TO_ANIMATE_LOGO_PARTICLES = 500;
  const DELAY_TO_BULLET_AURA = 300;
  const DELAY_TO_DATES = 600;
  const DELAY_TO_RESTART = 4000;

  const fprintPathSelector = '.demo__fprint-path';

  const $elasticPath = $('#demo__elastic-path');
  const $fprintPaths = $('.demo__fprint-path');
  const $endingPaths = $('.demo__ending-path');
  const fprintPathsFirstHalf = [];
  const fprintPathsSecondHalf = [];
  const $bullet = $('.demo__bullet');
  const $topBullets = $('.demo__top-bullet');
  const $month = $('.demo__month');
  const $money = $('.demo__money');
  const $moneyDigits = $('.demo__money-digit');
  const $underCurve = $('.demo__under-curve');
  const $moneyParticles = $('.demo__money-particle');
  const $moneyParticlesContainer = $('.demo__money-particles');
  const $touchId = $('.demo__touch-id');
  const $logo = $('.demo__logo');
  const $logoParticlesContainer = $('.demo__logo-particles');
  const $logoParticles = $('.demo__logo-particle');
  const $dates = $('.demo__dates');
  const $member = $('.demo__member');
  const $fprint = $('.demo__fprint');
  const $buttons = $('.demo__button');
  const $restart = $('.demo__restart-button');
  const $screen = $('.demo__screen');
  const $tip = $('.demo__tip');

  let isFprintAnimationInProgress = false;
  let isFprintAnimationOver = false;
  let curFprintPathsOffset = -1;
  let fprintProgressionDirection = 1;
  let lastRafCallTimestamp = 0;
  let fprintTick = getPropertyIncrement(0, 1, TIME_TO_FILL_FPRINT);
  let fprintPaths = [];

  for (let i = 0; i < $(fprintPathSelector).length; i++) {
    fprintPaths.push(new Path(fprintPathSelector, i));
    fprintPaths[i].offset(-1).makeVisible();
    if (fprintPaths[i].removesForwards)
      fprintPathsSecondHalf.push(fprintPaths[i]);
    else
      fprintPathsFirstHalf.push(fprintPaths[i]);
  }

  function removeFprint() {
    $endingPaths.addClass('demo__ending-path--removed');
    setTimeout(() => {
      $endingPaths.addClass('demo__ending-path--transparent');
    }, TIME_TO_REMOVE_FPRINT * 0.9);
    fprintProgressionDirection = -1;
    window.requestAnimationFrame(removeFprintFrame);
  }

  function removeFprintFrame(timestamp) {
    if (timestamp - lastRafCallTimestamp >= 1000 / 65) {
      curFprintPathsOffset += fprintTick * fprintProgressionDirection;
      offsetFprintPathsByHalves(curFprintPathsOffset);
      lastRafCallTimestamp = timestamp;
    }
    if (curFprintPathsOffset >= -1)
      window.requestAnimationFrame(removeFprintFrame);
    else {
      curFprintPathsOffset = -1;
      offsetAllFprintPaths(curFprintPathsOffset);
    }
  }

  function startElasticAnimation() {
    $elasticPath.css('stroke-dasharray', 'none');
    const elasticAnimationTimeline = new TimelineLite();


    animateBullet();
  }

  function elevateBullet() {
    $bullet.addClass('demo__bullet--elevated');
    animateMoneyParticles();
    animateLogoParticles();
  }

  function descendBullet() {
    $bullet.addClass('demo__bullet--descended').removeClass('demo__bullet--elevated');
    animateTopBullets();
    animateMoney();
    animateMonth();
    animateUnderCurve();
    animateBulletAura();
    animateDates();
    animateButtons();
  }

  function animateBulletAura() {
    setTimeout(() => $bullet.addClass('demo__bullet--with-aura'), DELAY_TO_BULLET_AURA);
  }

  function animateButtons() {
    setTimeout(() => $buttons.addClass('demo__button--visible'), DELAY_TO_RESTART);
  }

  function animateMonth() {
    $month.addClass('demo__month--visible');
  }

  function animateBullet() {
    elevateBullet();
    $screen.removeClass('demo__screen--clickable');
    setTimeout(descendBullet, ELEVATION_TIME + DELAY_AFTER_ELEVATION);
  }

  function animateTopBullets() {
    $topBullets.removeClass('demo__top-bullet--hidden').addClass('demo__top-bullet--spread');
  }

  function animateMoney() {
    $money.addClass('demo__money--visible');
    $moneyDigits.addClass('demo__money-digit--visible');
  }

  function animateUnderCurve() {
    $underCurve.addClass('demo__under-curve--visible');
    setTimeout(() => $elasticPath.addClass('demo__fprint-path--gradient'), DELAY_TO_ANIMATE_ELASTIC_STROKE);
  }

  function animateDates() {
    setTimeout(() => {
      $dates.addClass('demo__dates--visible');
      $member.addClass('demo__member--hidden');
    }, DELAY_TO_DATES);
  }

  function animateMoneyParticles() {
    setTimeout(() => {
      $moneyParticlesContainer.addClass('demo__money-particles--visible')
      $moneyParticles.addClass('demo__money-particle--exploded');
      $touchId.addClass('demo__touch-id--hidden');
      $tip.addClass('demo__tip--hidden');
    }, DELAY_TO_ANIMATE_MONEY_PARTICLES);
  }

  function animateLogoParticles() {
    setTimeout(() => {
      $logoParticlesContainer.addClass('demo__logo-particles--visible')
      $logoParticles.addClass('demo__logo-particle--exploded');
      $logo.addClass('demo__logo--hidden');
    }, DELAY_TO_ANIMATE_LOGO_PARTICLES);
  }

  function fprintFrame(timestamp) {
    if (timestamp - lastRafCallTimestamp >= 1000 / 65) {
      lastRafCallTimestamp = timestamp;
      curFprintPathsOffset += fprintTick * fprintProgressionDirection;
      offsetAllFprintPaths(curFprintPathsOffset);
    }

    if (curFprintPathsOffset >= -1 && curFprintPathsOffset <= 0) {
      isFprintAnimationInProgress = true;
      window.requestAnimationFrame(fprintFrame);
    }
    else if (curFprintPathsOffset > 0) {
      curFprintPathsOffset = 0;
      offsetAllFprintPaths(curFprintPathsOffset);
      isFprintAnimationInProgress = false;
      isFprintAnimationOver = true;
      $fprint.addClass('demo__fprint--no-bg');
      startElasticAnimation();
      fprintTick = getPropertyIncrement(0, 1, TIME_TO_REMOVE_FPRINT);
      window.requestAnimationFrame(removeFprint);
    }
    else if (curFprintPathsOffset < -1) {
      curFprintPathsOffset = -1;
      offsetAllFprintPaths(curFprintPathsOffset);
      isFprintAnimationInProgress = false;
    }
  }

  function offsetAllFprintPaths(ratio) {
    fprintPaths.forEach(path => path.offset(ratio));
  }

  function offsetFprintPathsByHalves(ratio) {
    fprintPathsFirstHalf.forEach(path => path.offset(ratio));
    fprintPathsSecondHalf.forEach(path => path.offset(-ratio));
  }

  $screen.on('mousedown touchstart', function() {
    fprintProgressionDirection = 1;
    if (!isFprintAnimationInProgress && !isFprintAnimationOver)
      window.requestAnimationFrame(fprintFrame);
  })

  $(document).on('mouseup touchend', function() {
    fprintProgressionDirection = -1;
    if (!isFprintAnimationInProgress && !isFprintAnimationOver)
      window.requestAnimationFrame(fprintFrame);
  })

  function clear(e) {
    $('.demo__screen *').addClass('no-animation');
    $screen.addClass('demo__screen--clickable');
    $buttons.removeClass('demo__button--visible');
    $fprint.removeClass('demo__fprint--no-bg');
    $member.removeClass('demo__member--hidden');
    $dates.removeClass('demo__dates--visible');
    $bullet.removeClass('demo__bullet--with-aura');
    $logoParticlesContainer.removeClass('demo__logo-particles--visible')
    $logoParticles.removeClass('demo__logo-particle--exploded');
    $logo.removeClass('demo__logo--hidden');
    $touchId.removeClass('demo__touch-id--hidden');
    $moneyParticlesContainer.removeClass('demo__money-particles--visible');
    $moneyParticles.removeClass('demo__money-particle--exploded');
    $elasticPath.removeClass('demo__fprint-path--gradient');
    $underCurve.removeClass('demo__under-curve--visible');
    $money.removeClass('demo__money--visible');
    $moneyDigits.removeClass('demo__money-digit--visible');
    $topBullets.addClass('demo__top-bullet--hidden').removeClass('demo__top-bullet--spread');
    $month.removeClass('demo__month--visible');
    $bullet.removeClass('demo__bullet--elevated demo__bullet--descended');
    $endingPaths.removeClass('demo__ending-path--removed demo__ending-path--transparent');
    $fprintPaths.removeClass('demo__fprint-path--transparent');
    e.stopPropagation();
    isFprintAnimationOver = false;
    isFprintAnimationInProgress = false;
    fprintTick = getPropertyIncrement(0, 1, TIME_TO_FILL_FPRINT);
    TweenMax.to('#demo__elastic-path', 0, {morphSVG: '#demo__elastic-path', onComplete: () => {
      for (let i = 0; i < $(fprintPathSelector).length; i++) {
        fprintPaths[i].setDasharray().offset(-1).makeVisible();
      }
    }});

    setTimeout(() => $('.demo__screen *').removeClass('no-animation'), 100);
  }

  $restart.on('click', clear);
});


function getPropertyIncrement(startValue, endValue, transitionDuration) {
    const TICK_TIME = 1000 / 60;
    const ticksToComplete = transitionDuration / TICK_TIME;
    return (endValue - startValue) / ticksToComplete;
}

class Path {
  constructor(selector, index) {
    this.index = index;
    this.querySelection = document.querySelectorAll(selector)[index];
    this.length = this.querySelection.getTotalLength();
    this.$ = $(selector).eq(index);
    this.setDasharray();
    this.removesForwards = this.$.hasClass('demo__fprint-path--removes-forwards');
  }

  setDasharray() {
    // + 2 hack just fixes weird firefox bug (classic)
    this.$.css('stroke-dasharray', `${this.length} ${this.length + 2}`);
    return this;
  }

  offset(ratio) {
    // + 1 hack just fixes weird firefox bug (classic)
    this.$.css('stroke-dashoffset', -this.length * ratio + 1);
    return this;
  }

  makeVisible() {
    this.$.css('visibility', 'visible');
    return this;
  }
}
