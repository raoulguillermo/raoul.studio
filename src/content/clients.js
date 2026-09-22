// Client logos for the homepage row — locale-independent, like the product
// registry beside it.
//
// Every logo was redrawn to a single ink silhouette so the row reads as one
// piece of the site rather than seven brand palettes fighting each other. The
// two vectors carry an explicit ink fill; the rasters are ink-on-transparent
// PNGs. `width`/`height` are the intrinsic pixel sizes, so the row reserves its
// space before the images load.

export const clients = [
  { name: 'Fidor', src: '/clients/fidor.svg', width: 186, height: 71 },
  { name: 'Lexpert Advocaten', src: '/clients/lexpert.png', width: 418, height: 120 },
  { name: 'AboutSpace', src: '/clients/aboutspace.png', width: 720, height: 120 },
  { name: 'Footsteppa', src: '/clients/footsteppa.png', width: 44, height: 120 },
  { name: 'OutdoorXL', src: '/clients/outdoorxl.png', width: 451, height: 120 },
  { name: 'Timewindow', src: '/clients/timewindow.png', width: 120, height: 120 },
  { name: 'Greetje', src: '/clients/greetje.svg', width: 64, height: 64 },
]
