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
// a.show()
a.setBins(5)
a.setSmooth(0.92)
a.setCutoff(3)
a.hide()

  // SNOW FLAKE, by Saydyy Kuo
  // Buy the the original inking at etsy.com/shop/UDAGANuniverse

  // INITIAL STATE
src(s0)
  // .scale(size)
  .scale(1.8, res)
  .out(o0)

  // fractal flake
fractal_flake = (size) => src(s0)
  .rotate([0,3.14].fast(3))
  .scale(3,res)
  .scale(2).repeat(3)
  .scale(size)
  .add(src(o0),0.5).scale(1.2)
  // .layer(src(o0),.0001)
  .modulate(noise().scale(900).color(1,0), () => (time%1*0.01).slow(4), 0.1)
  // .invert()
  .blend(o0,0.8)
  .out(o0)
  //
  // fractal_fade
fractal_fade = (size) => src(s0)
  .rotate([0,3.14].fast(3))
  .scale(3,res)
  .scale(2).repeat(3)
  .scale(size)
  .add(src(o0),0.5).scale(1.2)
  .layer(src(o0),.0001)
  .modulate(noise().scale(900).color(1,0), () => (time%1*0.01).slow(4), 0.1)
  .blend(o0,0.8)
  .out(o0)
  //
  // dancing snowflake
snow_flake = (size) => src(s0)
  .rotate([0,3.14].fast(2))
  .scale(size)
  .scale(2,res)
  // .modulate(noise().scale(866).color(0.5,0), () => (time%1*0.01).slow(4), 0.1)
  // .scale(() => (a.fft[0]*2) + 0.9)
  .out(o0)
  //
  // snowflake pattern
pixel_snow = () => src(s0)
  .rotate([0,3.14].fast(3))
  .rotate(0.512)
  .scale(3,res)
  .scale(2).repeat(3)
  .modulatePixelate(osc(4).rotate(2.5).kaleid(6).pixelate(9,6),512,8)
  .add(src(o0),0.5)
  .modulate(noise(3).scale(900).color(1,0), () => (time%1*0.01).slow(4), 0.1)
  .blend(src(o0).luma(),0.5)
  .scale(() => (a.fft[0]/2) + 1)
  .out(o0)
  //

  // hush();render(o0)
wait(32)
  .then(() => snow_flake(1.6))
  .then(() => wait(58))
  .then(() => fractal_flake(900))
  .then(() => wait(8.3))
  .then(() => fractal_flake(500))
  .then(() => wait(8.3))
  .then(() => fractal_flake(250))
  .then(() => wait(8.3))
  .then(() => fractal_flake(120))
  .then(() => wait(8.3))
  .then(() => fractal_flake(60))
  .then(() => wait(8.3))
  .then(() => fractal_flake(20))
  .then(() => wait(8.3))
  .then(() => fractal_flake(10))
  .then(() => wait(8.3))
  .then(() => fractal_flake(7))
  .then(() => wait(8.3))
  .then(() => fractal_flake(4))
  .then(() => wait(8.3))
  .then(() => fractal_flake(3))
  .then(() => wait(8.3))
  .then(() => fractal_flake(2))
  .then(() => wait(8.3))
  .then(() => fractal_flake(1.2))
  .then(() => wait(8.3))
  .then(() => fractal_flake(1))
  .then(() => wait(8.3))
  .then(() => fractal_flake(0.8))
  .then(() => wait(8.3))
  .then(() => fractal_flake(0.7))
  .then(() => wait(8.3))
  .then(() => fractal_flake(0.6))
  .then(() => wait(8.3))
  .then(() => fractal_fade(0.6))
  .then(() => wait(3))
  .then(() => shape(4,5).out(o0))
  .then(() => wait(0.05))
  .then(() => pixel_snow())
  .then(() => wait(120))
  .then(() => snow_flake(1.3))


  // UDAGANuniverse.com // UDAGAN instagram: @saydyy_kuo_fedorova, @oscarsouth






















  // Buy this inking at etsy.com/shop/UDAGANuniverse
  // All music and visual code open source at GitHub.com/OscarSouth/UDAGAN-Sensoria-concert
