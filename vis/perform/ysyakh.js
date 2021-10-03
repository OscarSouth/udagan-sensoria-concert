// INITIAL STATE

src(s2)
  // .modulate(noise(3).add(gradient(),1),0.01)
  .modulateRotate(shape(999,0.01,2).scale(() => (a.fft[0]*2) + 0.9),3,-1.5)
  .rotate(()=> time/3)
  .scale(2,res)
  // .invert()
  .out()

// DEVELOPMENT

src(s2)
  .scale(2,res)
  .out()


src(s1)
  .rotate(()=> Math.sin(time))
  .modulate(osc(4).kaleid(99).add(gradient(),1).color([1,-1].smooth(),0),() => (a.fft[0]/8))
  .modulateScale(shape(999,0.00001,4).scale(() => (a.fft[0]*2) + 0.9),3,-1.5)
  .scale((() => (a.fft[0]*2) + 0.9), res)
  .invert()
  .out()

// CUMULATION


// FINAL STATE

//
src(o1)
.add(src(o2).hue(-.33),.666)
.scale(0.7,res)
.mult(shape(130,.75,.1).scale(1,res))
.out(o0)


initStar = (t=0.2,v=0.02) =>
  shape(3,.013,.27)
    .add(o1,0.87)
    .rotate(0.6)
    .rotate(() => Math.sin(time*t)*v)
    // .out(o1)
//
initConstellation = () =>
  src(o1)
    // .add(o2,.5)
    .repeat(2,2)
    .blend(src(o1).scale(2),0.25)
    .add(src(o1))
    .mult(shape(99,0.1,0.8).scale(2))
    .scale(1.3)
    // .scale(1.3,res)
    // .out(o2)
//
initBlackhole = () =>
  src(o1)
    // .add(src(o2).hue(-.33),.666)
    .scale(0.7,res)
    .mult(shape(99,1,0.1).scale(1,res))
    .invert()
    // .out(o3)
//
initSwirl = () =>
  shape(99,0.1,1.4)
  .scale(0.7,res)
  .invert()
  .mult(src(o3))
  // .out(o0)
//
swirl = () =>
  src(o1).rotate(() => rand(0, 0.006)).scale(1.001).out(o1)
//
swirlAway = (o=o2,v=0) =>
  src(o0).scale(1.005)
  .rotate(0.01)
  .blend(o,v)
  .out(o0)

src(o3).out(o0)

src(o0).rotate(() => rand(0.001, 0.01)).scale(1.005).out(o0)



hush();render(o0);wait(0)
  .then(() => initStar().out(o1))
  .then(() => initBlackhole().scale(2.5).out(o3))
  .then(() => initSwirl().out(o0))
  .then(() => wait(10)) // 10
  .then(() => swirl())
  .then(() => wait(40)) // 60
  .then(() => swirlAway())
  .then(() => initConstellation().scale(0.3).out(o2))
  .then(() => ink().scale(1.7).out(o3))
  .then(() => wait(5))
  // .then(() => src(o2).scale(0.3).mult(shape(4).scale(1)).out(o3))
  // .then(() => wait())
  .then(() => initStar(0.5,0.1).out(o1))
  .then(() => src(o0).blend(src(o2).rotate(() => (time/6)),0.7).scale(1.38,res).out(o0))
  .then(() => wait(30))
  .then(() => shape(4,5).out(o0))
  .then(() => wait(0.05))
  .then(() => src(o3).mult(src(o1).scale(0.8)).add(src(o0).scale(3).kaleid(2),0.2).add(src(o2).rotate(() => (time/6)),0.9).scale(1.2,res).out(o0))
  .then(() => wait())
  .then(() => swirl())
  .then(() => wait(50))
  .then(() => swirlAway())
  .then(() => wait(8))
  .then(() => src(o0).blend(src(o1).invert(),0.1).scale(1.05).out(o0))
  .then(() => wait(0.5))
  .then(() => src(o0).add(src(o1).invert(),0.001).scale(1.05).out(o0))
  .then(() => wait(0.7))
  .then(() => shape(4,5).invert().out(o0))
  .then(() => wait())

// PATTERN APPEAR WITH CONSTELLATION UNDER

// DANCING PATTERN APPEAR WITH COLOUR UNDER

.then(() => src(o0).blend(src(o3).rotate(() => (time/6)),0.3).scale(1.4,res).out(o0))

src(o0).layer(src(o3).luma().invert()).out(o0)



ink = () =>
  src(s2)
    // .modulate(noise(3).add(gradient(),1),0.01)
    .modulateRotate(shape(999,0.01,2).scale(() => (a.fft[0]*2) + 0.9),3,-1.5)
    .rotate(()=> time/3)
    // .scale(2,res)
    .scale(2)
    .invert()
    // .out()

  src(s2)
    .rotate(() => time/6)
    .scale(3,res)
    // .invert()
    // .blend(src(o2).scale(1.01),0.4)
    // .out(o0)

inkOverlay = () =>
  src(o3).invert().mult(src(o2).luma()).out(o0)


  // UDAGAN instagram: @saydyy_kuo_fedorova, @oscarsouth


















  // UDAGANuniverse.com -- join our mailing list
