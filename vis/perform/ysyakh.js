xres = window.innerWidth
yres = window.innerHeight
res = yres/xres
  //
hush = (o) => {
  if (o == undefined) {
    solid().out(o0)
    solid().out(o1)
    solid().out(o2)
    solid().out(o3)
    render(o0)
    }
  solid().out(o)
  }
  //
wait = (s=2) => new Promise(resolve => setTimeout(resolve,s*1000))
choose = (array) => { return array[Math.floor(Math.random() * array.length)]; }
recurring = (func, ms=1000) => setInterval(() => func, ms)
  //
s0.initImage("/home/oscarsouth/sensoria/vis/snow_flake.png")
s1.initImage("/home/oscarsouth/sensoria/vis/ocean.png")
s2.initImage("/home/oscarsouth/sensoria/vis/ysyakh.png")
  //
snow_flake = src(s0)
ocean = src(s1)
ysyakh = src(s2)
  //
rand = (min=0,max=1) => Math.random() * max + min
  //
a.setBins(5)
a.setSmooth(0.92)
a.setCutoff(3)
a.hide()

 // YSYAKH, by Saydyy Kuo
 // Buy the the original inking at etsy.com/shop/UDAGANuniverse

  // INITIAL STATE
src(s2)
  .scale(1.7,res)
  .out()

  // DEVELOPMENT
circle_dance = () => src(s2)
  .modulateRotate(shape(999,0.01,2).scale(() => ((1/time)) + 0.9),3,-1.5)
  // .modulateRotate(shape(999,0.01,2).scale(() => (a.fft[0]*2) + 0.9),3,-1.5)
  .rotate(()=> time/4)
  .scale(1.6,res)
  // .invert()
  // .out()
  //
circle_dance_more = () => src(s2)
  // .modulateRotate(shape(999,0.01,2).scale(() => ((1/time)) + 0.9),3,-1.5)
  .modulateRotate(shape(999,0.01,2).scale(() => (a.fft[0]*2) + 0.9),3,-1.5)
  .rotate(()=> time/2)
  .scale(2,res)
  // .invert()
  // .out()
  //
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
  //
ink = () =>
  src(s2)
  // .modulate(noise(3).add(gradient(),1),0.01)
  .modulateRotate(shape(999,0.01,2).scale(() => (a.fft[0]/2) + 0.9),3,-1.5)
  .rotate(()=> time/3)
  // .scale(2,res)
  .scale(2)
  .invert()
  // .out()

hush();render(o0);circle_dance().out(o0);wait(60)
  .then(() => initStar().out(o1))
  .then(() => initBlackhole().scale(2.5).out(o3))
  .then(() => initSwirl().out(o0))
  .then(() => wait(5))
  .then(() => swirl())
  .then(() => wait(70))
  .then(() => swirlAway())
  .then(() => initConstellation().scale(0.3).out(o2))
  .then(() => ink().scale(1.7).out(o3))
  .then(() => wait(10))
  // .then(() => src(o2).scale(0.3).mult(shape(4).scale(1)).out(o3))
  // .then(() => wait())
  .then(() => initStar(0.5,0.1).out(o1))
  .then(() => src(o0).blend(src(o2).rotate(() => (time/6)),0.7).scale(1.38,res).out(o0))
  .then(() => wait(60))
  .then(() => shape(4,5).out(o0))
  .then(() => wait(0.05))
  .then(() => src(o3).mult(src(o1).scale(0.8)).add(src(o0).scale(3).kaleid(2),0.2).add(src(o2).rotate(() => (time/6)),0.9).scale(1.2,res).out(o0))
  .then(() => wait())
  .then(() => swirl())
  .then(() => wait(60))
  .then(() => swirlAway())
  .then(() => wait(5))
  .then(() => circle_dance_more().scale(() => (a.fft[0]/4) + 1).out())
  .then(() => wait(45))
  .then(() => src(o0).blend(src(o1).invert(),0.1).scale(1.05).out(o0))
  .then(() => wait(0.5))
  .then(() => src(o0).add(src(o1).invert(),0.001).scale(1.05).out(o0))
  .then(() => wait(0.7))
  .then(() => shape(4,5).invert().out(o0))
  .then(() => initStar().out(o1))
  .then(() => wait(2))
  .then(() => shape(4,5).out(o0))
  .then(() => wait(0.05))
  .then(() => src(s2).scale(3.2,res).invert().mult(src(o1)).out(o0))
  .then(() => wait(0.5))
  .then(() => wait(swirl()))


  // UDAGANuniverse.com // UDAGAN instagram: @saydyy_kuo_fedorova, @oscarsouth






















  // Buy this inking at etsy.com/shop/UDAGANuniverse
