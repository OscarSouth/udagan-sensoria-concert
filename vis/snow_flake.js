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
s0.initImage("/home/oscarsouth/sensoria/vis/ysyakh.png")
s1.initCam(1)

src(s1)
  // .mult(src(s0).scale(1.1), 0.6)
  .out(o1)

hush()

render(o0)

src(s0)
  .scale(3)
  // .rotate(( ({time}) => time*25 )*((() => (a.fft[0]*6+1)))))
  .scale(() => (a.fft[0]*6+1))
  // .repeat(2,2)
  // .blend(o0, 0.2)
  .mult(src(o0).scale(1.1).rotate(1.3),0.7)
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
  // .pixelate([64,80,108],[48,60,72])
  .scale(() => (a.fft[0]*2+2),res)
  .invert([0,1])
  .diff(src(s0))
  // .thresh( ({time})=>Math.sin(time/2)+1 , [0.04,0.25,0.75,1].fast(0.25) )
  .scale(1.1, res)
  .kaleid(4)
  .blend(src(s0).rotate(({time}) => Math.sin(time/20)).scale(2,res))
  // .scrollY(0, ({time}) => Math.sin(time*0.01)*-0.07 )
  .out()
