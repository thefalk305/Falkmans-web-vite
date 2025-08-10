let attachedImages = new WeakMap();
let magnifierGlasses = new Map();

export const defaultMagConfig = {
  checkboxID: 'mag-checkbox',
  zoomInputID: 'mag',
  defaultZoom: 2
};

export function setupMagnifier({
  checkboxID = 'mag-checkbox',
  zoomInputID = 'mag',
  defaultZoom = 2
} = {}) {
  document.querySelectorAll('.img-magnifier-glass').forEach(glass => glass.remove());
  magnifierGlasses.clear();

  const checkbox = document.getElementById(checkboxID);
  const zoomInput = document.getElementById(zoomInputID);
  const images = document.querySelectorAll('.magImage');

  let magnifierActive = checkbox?.checked;
  let currentZoom = parseFloat(zoomInput?.value) || defaultZoom;

  if (!magnifierActive) return;

  images.forEach(img => {
    const oldHandlers = attachedImages.get(img);
    if (oldHandlers) {
      img.removeEventListener('mousemove', oldHandlers.mouse);
      img.removeEventListener('touchmove', oldHandlers.touch);
    }

    const glass = document.createElement('div');
    glass.className = 'img-magnifier-glass';
    glass.style.pointerEvents = 'none';
    img.parentElement.insertBefore(glass, img);

    const rect = img.getBoundingClientRect();
    glass.style.backgroundImage = `url('${img.src}')`;
    glass.style.backgroundRepeat = 'no-repeat';
    glass.style.backgroundSize = `${rect.width * currentZoom}px ${rect.height * currentZoom}px`;

    magnifierGlasses.set(img, glass);

const moveMagnifier = (e) => {
  e.preventDefault();

  const rect = img.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
    glass.style.display = 'none';
    return;
  }

  glass.style.display = 'block';

  const w = glass.offsetWidth / 2;
  const h = glass.offsetHeight / 2;

  const clampedX = Math.max(w / currentZoom, Math.min(x, rect.width - w / currentZoom));
  const clampedY = Math.max(h / currentZoom, Math.min(y, rect.height - h / currentZoom));

  // Position glass relative to image container
  glass.style.left = `${clampedX + img.offsetLeft - w}px`;
  glass.style.top = `${clampedY + img.offsetTop - h}px`;

  // ✅ Use rendered size for background position
  const bgX = (clampedX / rect.width) * (rect.width * currentZoom) - w;
  const bgY = (clampedY / rect.height) * (rect.height * currentZoom) - h;

  glass.style.backgroundPosition = `-${bgX}px -${bgY}px`;
};

    img.addEventListener('mousemove', moveMagnifier);
    img.addEventListener('touchmove', moveMagnifier, { passive: false });

    attachedImages.set(img, {
      mouse: moveMagnifier,
      touch: moveMagnifier
    });
  });

  zoomInput?.addEventListener('input', (e) => {
    currentZoom = parseFloat(e.target.value) || defaultZoom;

    magnifierGlasses.forEach((glass, img) => {
      const rect = img.getBoundingClientRect();
      glass.style.backgroundSize = `${rect.width * currentZoom}px ${rect.height * currentZoom}px`;
    });
  });
}

export function removeMagnifiers() {
  document.querySelectorAll('.img-magnifier-glass').forEach(glass => glass.remove());
  magnifierGlasses.clear();
}

export function toggleMagnifier(enabled, config = defaultMagConfig) {
  if (enabled) {
    setupMagnifier(config);
  } else {
    removeMagnifiers();
  }
}