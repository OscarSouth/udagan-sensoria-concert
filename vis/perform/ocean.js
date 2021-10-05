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
a.setBins(4)
a.setSmooth(0.92)
a.setCutoff(2)
a.hide()


  // OCEAN, by Saydyy Kuo
  // Buy the the original inking at etsy.com/shop/UDAGANuniverse

  // INITIAL STATE
src(s1)
  .scale(1.6,res)
  .out()

  // DEVELOPMENT
src(s1)
  .rotate(()=> Math.sin(time))
  .modulate(osc(4).kaleid(99).add(gradient(),1).color([1,-1].smooth(),0),() => (a.fft[0]/8))
  .modulateScale(shape(999,0.00001,4).scale(() => (a.fft[0]*2) + 0.9),3,-1.5)
  .scale((() => (a.fft[0]*2) + 0.9), res)
  .invert()
  // .luma()
  // .layer(src(s0))
  .out(o0)

  // UDAGANuniverse.com // UDAGAN instagram: @saydyy_kuo_fedorova, @oscarsouth






















  // Buy this inking at etsy.com/shop/UDAGANuniverse
