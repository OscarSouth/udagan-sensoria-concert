a.setBins(4)
a.setSmooth(0.92)
a.setCutoff(2)

s0.initCam(1)

hush()

src(s0).out()

// INITIAL STATE
src(s1)
  .scale(2,res)
  .out()

// DEVELOPMENT

src(s1)
  .rotate(()=> Math.sin(time))
  .modulate(osc(4).kaleid(99).add(gradient(),1).color([1,-1].smooth(),0),() => (a.fft[0]/8))
  .modulateScale(shape(999,0.00001,4).scale(() => (a.fft[0]*2) + 0.9),3,-1.5)
  .scale((() => (a.fft[0]*2) + 0.9), res)
  .invert()
  // .luma()
  .layer(src(s0))
  .out(o1)

src(o1)
  .luma()
  .layer(src)

render()

// CUMULATION


// FINAL STATE
