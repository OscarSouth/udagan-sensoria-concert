

val = rand()

osc(10,0,0)
  .scale(() => val)
  .out(o0)

interval = recurrent(() => val = rand())

render(o0)

noise(saw(5,10,8),0.1).out(o0)

osc(1,1,2).invert(sq(0,1,8)).out(o0)


shape().out()

render()

src(s3).invert()
  .layer(shape(2).invert().luma())
  .invert()
  .modulate(noise(0.3))
  .diff(src(o3), 0.6)
  .scale(1.1)
  .out(o3)

render(o3)

s3.initCam(1)

src(s3).out()


setInterval(function(){
  val = rand()
}, 1000);

interval = setInterval(() => val = rand(), 1000)

clearInterval(interval)

solid().out()

render(o0)


s3.initCam(0)

src(s3).out()

//// SNOWFLAKE
  // INITIAL STATE

  // fractal flake
src(s0)
  .rotate([0,3.14].fast(3))
  .scale(3,res)
  .scale(2).repeat(3)
  .scale(0.6)
  .add(src(o0),0.5).scale(1.2)
  // .layer(src(o0),.0001)
  .modulate(noise().scale(900).color(1,0), () => (time%1*0.01).slow(4), 0.1)
  // .invert()
  .blend(o0,0.8)
  // .pixelate(() => (a.fft[0]) + 0.9)
  .out(o0)

  // dancing snowflake
src(s0)
  .rotate([0,3.14].fast(3))
  .scale(2,res)
  // .modulate(noise().scale(866).color(0.5,0), () => (time%1*0.01).slow(4), 0.1)
  .scale(() => (a.fft[0]*2) + 0.9)
  .out(o0)
render(o0)
src(s3)
  .invert()
  .layer(src(o0).luma().invert(),[0,1].smooth().fast(0.25))
  .invert()
  .out(o1)
render(o0)

  // feedback modulating lines
src(s0)
  .rotate([0,3.14].fast(3))
  .scale(3,res)
  // .repeat(3)
  .scale(0.6)
  .add(src(o0),0.8).scale(1.2)
  .layer(src(o0),0.01)
  .add(src(s0).rotate([0,0.512].fast(2)).invert().scale(3,res).invert())
  .modulate(noise().scale(866).color(0.5,0), () => (time%1*0.01).slow(4), 0.1)
  .invert()
  .add(o0,0.1)
  .out(o0)
render(o0)

  // snowflake pattern
src(s0)
  .rotate([0,3.14].fast(3))
  .rotate(0.512)
  .scale(3,res)
  .scale(2).repeat(3)
  .modulatePixelate(osc(4).rotate(2.5).kaleid(6).pixelate(9,6),512,8)
  .add(src(o0),0.5)
  .modulate(noise(3).scale(900).color(1,0), () => (time%1*0.01).slow(4), 0.1)
  .blend(src(o0).luma(),0.5)
  .out(o0)

hush()
