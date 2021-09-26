// INITIAL STATE

src(s2)
  // .modulate(noise(3).add(gradient(),1),0.01)
  .modulateRotate(shape(999,0.01,1).scale(() => (a.fft[0]*2) + 0.9),3,-1.5)
  .rotate(()=> time)
  .scale(2,res)
  .invert()
  .out()

// DEVELOPMENT

src(s2)
  .scale(2,res)
  .out()

// CUMULATION


// FINAL STATE
