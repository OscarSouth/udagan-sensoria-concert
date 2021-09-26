(

s.reboot {

	s.options.device = "iConnectAUDIO4+";
	s.options.numOutputBusChannels = 4;
	s.options.numInputBusChannels = 4;
	// s.options.memSize = 1024*500;
	s.options.numBuffers = 1024 * 256;
	s.options.memSize = 8192 * 16;
	s.options.numWireBufs = 64;
	s.options.maxNodes = 1024 * 32;

	s.waitForBoot {
		~dirt = SuperDirt(2, s);
		~dirt.loadSoundFiles("/home/oscarsouth/dirt_samples/none");
		s.sync;
		~dirt.start(57120, [2]);
		~latency = 0.0;
		MIDIClient.init;
		MIDIClient.destinations;
		~midiDIN = MIDIOut.newByName("iConnectAUDIO4+", "iConnectAUDIO4+ MIDI 1");
		~midiDIN.latency = ~latency;
		~dirt.soundLibrary.addMIDI(\din, ~midiDIN);
	};

	s.latency = 0.0;

};
);

(
SynthDef(\sine, {|out=0,freq=440,sustain=1,pan=0,begin=0.5,end=0.5,speed=1,accelerate=0,decay=0|
  var envLength = sustain*(end-begin)/speed;
  var line = Line.ar(begin, end, envLength, doneAction: Done.freeSelf);
  var volume = EnvGen.ar(Env.pairs([[0,0],[0.05,1],[0.2,1-decay],[0.95,1-decay],[1,0]], -3), timeScale:sustain, doneAction:2);
  var sig;

  freq = max(0, freq * speed * (1 + (accelerate * line)));
  sig = SinOsc.ar(freq);

  Out.ar(out, DirtPan.ar(sig * volume, 2, pan));
}).add;
);

