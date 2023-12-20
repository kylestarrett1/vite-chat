const slideUp = (targetElement, duration = 300) => {
  if (!targetElement) return;

  const { parentElement } = targetElement;
  parentElement.classList.remove('open');

  targetElement.style.height = `${targetElement.offsetHeight}px`;
  targetElement.offsetHeight; // force repaint
  targetElement.style.overflow = 'hidden';
  targetElement.style.transitionProperty = `height, margin, padding`;
  targetElement.style.transitionDuration = `${duration}ms`;
  targetElement.style.height = '0';
  targetElement.style.paddingTop = '0';
  targetElement.style.paddingBottom = '0';
  targetElement.style.marginTop = '0';
  targetElement.style.marginBottom = '0';

  const timeoutId = setTimeout(() => {
    targetElement.style.display = 'none';
    targetElement.style.removeProperty('height');
    targetElement.style.removeProperty('padding-top');
    targetElement.style.removeProperty('padding-bottom');
    targetElement.style.removeProperty('margin-top');
    targetElement.style.removeProperty('margin-bottom');
    targetElement.style.removeProperty('overflow');
    targetElement.style.removeProperty('transition-duration');
    targetElement.style.removeProperty('transition-property');
  }, duration);

  return () => {
    clearTimeout(timeoutId);
  };
};

const slideDown = (targetElement, duration = 300) => {
  if (!targetElement) return;

  const { parentElement } = targetElement;
  parentElement.classList.add('open');

  targetElement.style.removeProperty('display');
  let { display } = window.getComputedStyle(targetElement);
  if (display === 'none') display = 'block';
  targetElement.style.display = display;

  const height = targetElement.offsetHeight;
  targetElement.style.overflow = 'hidden';
  targetElement.style.height = 0;
  targetElement.style.paddingTop = 0;
  targetElement.style.paddingBottom = 0;
  targetElement.style.marginTop = 0;
  targetElement.style.marginBottom = 0;
  targetElement.offsetHeight;
  targetElement.style.boxSizing = 'border-box';
  targetElement.style.transitionProperty = 'height, margin, padding';
  targetElement.style.transitionDuration = `${duration}ms`;
  targetElement.style.height = `${height}px`;
  targetElement.style.removeProperty('padding-top');
  targetElement.style.removeProperty('padding-bottom');
  targetElement.style.removeProperty('margin-top');
  targetElement.style.removeProperty('margin-bottom');

  const timeoutId = setTimeout(() => {
    targetElement.style.removeProperty('height');
    targetElement.style.removeProperty('overflow');
    targetElement.style.removeProperty('transition-duration');
    targetElement.style.removeProperty('transition-property');
  }, duration);

  return () => {
    clearTimeout(timeoutId);
    targetElement.style.display = 'none';
  };
};

// const slideToggle = (target, duration = 300) => {
//   if (window.getComputedStyle(target).display === 'none')
//     return slideDown(target, duration);
//   return slideUp(target, duration);
// };

export { slideDown, slideUp };
