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
// sin = (min=0,max=1,freq=1) => ({time}) => Math.sin(time*freq) * max + min
// sq = (min=0,max=1,freq=1) => ({time}) => ((Math.sin(time*freq) < 0) ? 0 : 1) * max + min
// saw = (min=0,max=1,freq=1) => ({time}) => (((time * freq) % 1) * 2 - 1) * max + min
rand = (min=0,max=1) => Math.random() * max + min
//
a.show()
a.setBins(5)
a.setSmooth(0.92)
a.setCutoff(3)
