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

a.show()
// a.hide()
a.setBins(3)
a.setSmooth(0.65)

s0.initImage("/home/oscarsouth/sensoria/vis/snow_flake.png")

snow_flake = src(s0)
  .scale( ()=>Math.sin(time/10)*.102+.15 )
  .rotate( ({time}) => time/20 )
  .scale(() => (fft[0]),res)
  .mult(o0, 0.8)
  // .repeat(3)
  .scale(2)
  .out()

snow_flake.out()

hush()

render()

noise(8)
  .colorama(11)
  .posterize(10)
  .kaleid(20)
  .mask(
    shape(26, 0,80).modulateScale(
      noise(40.5, 0.5)
    )
  )
  .mask(shape(400, 1, 2.125))
  .modulateScale(osc(6, 0.125, 0.05).kaleid(50))
  .mult(osc(40, 0.05, 2.4).kaleid(10), 0.25)
  .scale(1.75, 0.65, 0.5)
  .modulate(noise(1.5))
  .saturate(9)
  .posterize(2, 0.2)
  .scale(1.5)
  .out();

shape(3)
  .mult(solid(1.3,0.8,2).mult(gradient().saturate(0)))
  .repeat()
  .out()

shape(4)
  .repeat(4)
  .out()

  //UDAGAN-WINTER-A
  voronoi(16,0.9,0.4).color(2,7,10)
    .mask(solid(3.1,1.1,0.1).mult(gradient().saturate(0)))
    .mult(solid(1.3,0.8,2).mult(gradient().saturate(0)))
    .mask(noise(16,1.9).contrast(2).scale(7,0.1),0.1)
    .scale(() => a.fft[0]+-0.9,.9)
    .pixelate(100,60)
    .mask(noise(10,1.9)
      .contrast(2)
      // .scale(7,0.15)
      .pixelate(100,60)
      ,0.1)
    .scale(-0.8,0.8)
    .out(o3)
  //
  shape(100,0.1,1).invert().scale(1,res,1.5)
    .kaleid(7)
    .diff(src(o1).scale(1.5),0.45)
    .modulateScale(osc(1,0.1).kaleid(4),0.7,0.7)
    .mult(src(o3).scale(() => a.fft[0]+1.1),1) //*
    // .mult(src(o2).scale(() => a.fft[0]+1.1),1) //*
    .add(src(o0).scale(1.2),0.65) // INTENSIFY
    .mult(src(o0).scale(() => a.fft[0]+1.1),1).add(src(o1).scale(() => a.fft[0] +  1.1))
    .mult(src(o3).modulateScale(osc(1,0.2),0.7,0.7).scale(1.4).pixelate(100,60),0.1)
    .add(src(s0).scale(() => a.fft[0]+1.1,res), 0.9)
    .kaleid(3).rotate( ({time}) => time/20 )
    .blend(src(o0).scale(() => a.fft[0]+1.1,3),0.22)
    .scale( ()=>Math.sin(time/10)*.102+.15 )
    .out(o0)
    render(o0)

render()

hush()

a.show()
a.setBins(3)
a.fft[2]
osc(10, 0, () => (a.fft[0]*2))
// osc(10, 0, () => Math.sin(time*2))
.out()

s0.initCam()
src(s0).out()
