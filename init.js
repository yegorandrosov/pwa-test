const riveCanvas = document.getElementById('riveCanvas');

const riveAnimation = new rive.Rive({
    src: 'animation.riv',
    canvas: riveCanvas,
    autoplay: true,
    stateMachines: ['State Machine 1'],
    layout: new rive.Layout({
      fit: rive.Fit.Fill,
      // layoutScaleFactor: 2, // 2x scale of the layout, when using `Fit.Layout`. This allows you to resize the layout as needed.
    }),
    alignment: rive.Alignment.CENTER,
    onLoad: () => {
      computeSize();
    },
});


  function computeSize() {
    riveAnimation.resizeDrawingSurfaceToCanvas();
  }

  // Subscribe to window size changes and update call `resizeDrawingSurfaceToCanvas`
  window.onresize = computeSize;

  // Subscribe to devicePixelRatio changes and call `resizeDrawingSurfaceToCanvas`
  window
    .matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
    .addEventListener("change", computeSize);