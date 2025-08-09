export function setupMagnifier({
  imgID = 'myimage',
  checkboxID = 'mag-checkbox',
  zoomInputID = 'mag',
  defaultZoom = 2
} = {}) {
  let glass = null;
  let magnifierActive = false;
  let currentZoom = defaultZoom;

  const img = document.getElementById(imgID);
  const checkbox = document.getElementById(checkboxID);
  const zoomInput = document.getElementById(zoomInputID);

  // 🧼 Remove previous glass and listeners
  const cleanup = () => {
    if (glass && glass.parentElement) {
      glass.remove(); // removes from DOM
      glass = null;
    }
    if (img) {
      img.onmousemove = null;
      img.ontouchmove = null;
    }
  };

  const magnify = (zoom) => {
    if (!img) return;
    cleanup(); // ensure no ghost glass

    glass = document.createElement('div');
    glass.className = 'img-magnifier-glass';
    img.parentElement.insertBefore(glass, img);

    glass.style.backgroundImage = `url('${img.src}')`;
    glass.style.backgroundRepeat = 'no-repeat';
    glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
    glass.style.display = 'block';

    const bw = 3;
    const w = glass.offsetWidth / 2;
    const h = glass.offsetHeight / 2;

    function getCursorPos(e) {
      const rect = img.getBoundingClientRect();
      const x = e.pageX - rect.left - window.pageXOffset;
      const y = e.pageY - rect.top - window.pageYOffset;
      return { x, y };
    }

    function moveMagnifier(e) {
      e.preventDefault();
      const pos = getCursorPos(e);
      let x = pos.x;
      let y = pos.y;

      if (x > img.width - w / zoom) x = img.width - w / zoom;
      if (x < w / zoom) x = w / zoom;
      if (y > img.height - h / zoom) y = img.height - h / zoom;
      if (y < h / zoom) y = h / zoom;

      if (magnifierActive) {
        glass.style.left = `${x - w}px`;
        glass.style.top = `${y - h}px`;
        glass.style.backgroundPosition = `-${(x * zoom - w + bw)}px -${(y * zoom - h + bw)}px`;
      }
    }

    // ✅ Attach listeners directly
    img.onmousemove = moveMagnifier;
    img.ontouchmove = moveMagnifier;
    glass.onmousemove = moveMagnifier;
    glass.ontouchmove = moveMagnifier;
  };

  if (checkbox && zoomInput) {
    checkbox.onchange = () => {
      magnifierActive = checkbox.checked;
      zoomInput.style.display = magnifierActive ? 'inline-block' : 'none';

      const zoomVal = parseFloat(zoomInput.value);
      currentZoom = isNaN(zoomVal) || zoomVal < 1 || zoomVal > 10 ? defaultZoom : zoomVal;

      cleanup();
      if (magnifierActive) magnify(currentZoom);
    };

    zoomInput.oninput = () => {
      const zoomVal = parseFloat(zoomInput.value);
      currentZoom = isNaN(zoomVal) || zoomVal < 1 || zoomVal > 10 ? defaultZoom : zoomVal;

      if (magnifierActive) {
        cleanup();
        magnify(currentZoom);
      }
    };
  }
}