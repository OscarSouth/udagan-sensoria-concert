//// SNOWFLAKE
  // INITIAL STATE

src(s0)
  .scale(size)
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

  // dancing snowflake
snow_flake = () => src(s0)
  .rotate([0,3.14].fast(3))
  .scale(2,res)
  // .modulate(noise().scale(866).color(0.5,0), () => (time%1*0.01).slow(4), 0.1)
  .scale(() => (a.fft[0]*2) + 0.9)
  .out(o0)

render()

hush()

  // feedback modulating lines
feedback_flake = () =>

src(s1)
  .rotate([0,3.14].fast(3))
  .scale(3,res)
  // .repeat(3)
  .scale(0.6)
  .add(src(o0),0.8).scale(1.2)
  .layer(src(o0),0.01)
  .add(src(s1).rotate([0,0.512].fast(2)).invert().scale(3,res))
  .modulate(noise().scale(866).color(0.5,0), () => (time%1*0.01).slow(4), 0.1)
  .invert()
  .add(o0,0.1)
  .out(o0)



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
  .out(o0)

hush()






hush();render(o0);wait(0)
  .then(() => snow_flake())
  .then(() => wait())
  .then(() => fractal_flake(900))
  .then(() => wait())
  .then(() => fractal_flake(500))
  .then(() => wait())
  .then(() => fractal_flake(250))
  .then(() => wait())
  .then(() => fractal_flake(120))
  .then(() => wait())
  .then(() => fractal_flake(60))
  .then(() => wait(5))
  .then(() => fractal_flake(20))
  .then(() => wait(5))
  .then(() => fractal_flake(10))
  .then(() => wait(5))
  .then(() => fractal_flake(7))
  .then(() => wait(5))
  .then(() => fractal_flake(4))
  .then(() => wait(5))
  .then(() => fractal_flake(3))
  .then(() => wait(5))
  .then(() => fractal_flake(2))
  .then(() => wait(5))
  .then(() => fractal_flake(1.2))
  .then(() => wait(5))
  .then(() => fractal_flake(1))
  .then(() => wait(5))
  .then(() => fractal_flake(0.8))
  .then(() => wait(5))
  .then(() => fractal_flake(0.7))
  .then(() => wait(5))
  .then(() => fractal_flake(0.6))
  .then(() => wait(5))
  .then(() => fractal_fade(0.6))
  .then(() => wait(5))
  .then(() => pixel_snow())
  .then(() => wait(30))
  .then(() => snow_flake())



fractal_flake(900)
fractal_flake(500)
fractal_flake(250)
fractal_flake(120)
fractal_flake(60)
fractal_flake(20)
fractal_flake(10)
fractal_flake(7)
fractal_flake(4)
fractal_flake(3)
fractal_flake(2)
fractal_flake(1.2)
fractal_flake(1)
fractal_flake(0.8)
fractal_flake(0.7)
fractal_flake(0.6)













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

render(o3)

render(o2)

src(o1).blend(o0,({time}) => Math.sin(time/4)).out(o2)

a.show()
a.setBins(6)

s0.initImage("/home/oscarsouth/sensoria/vis/snow_flake.png")
// s0.initImage("/home/oscarsouth/sensoria/vis/ysyakh.png")
// s1.initCam(1)

src(s0)
  .scale(1.8, res)
  .out(o0)

hush()

render(o0)

src(s0)
  .invert()
  .scale(3)
  // .rotate(( ({time}) => time*25 )*((() => (a.fft[0]*6+1)))))
  .scale(() => (a.fft[0]*6+1))
  // .repeat(2,2)
  // .blend(o0, 0.2)
  .mult(src(o0).scale(1.1).rotate(1.3).invert(),0.5)
  .scale(0.3,res)
  .invert(1)
  .out(o0)

render()

a.setSmooth(0.9)
a.setBins(3)
src(s0)
  .rotate(() => time/4)
  .blend(s0,0.8)
  .scale( ()=>Math.sin(time/40))
  .pixelate([64,80,108],[48,60,72])
  .scale(() => (a.fft[0]*2+2),res)
  // .invert([0,1])
  .diff(src(s0))
  // .thresh( ({time})=>Math.sin(time/2)+1 , [0.04,0.25,0.75,1].fast(0.25) )
  // .scale(1.1, res)
  .kaleid(4)
  // .blend(src(s0).rotate(({time}) => Math.sin(time/20)).scale(2,res))
  // .scrollY(0, ({time}) => Math.sin(time*0.01)*-0.07 )
  .out()
