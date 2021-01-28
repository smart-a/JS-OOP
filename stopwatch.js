function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, "running", {
    set: function (value) {
      running = value;
    },
    get: function () {
      return running;
    },
  });

  Object.defineProperty(this, "startTime", {
    set: function (value) {
      startTime = value;
    },
    get: function () {
      return startTime;
    },
  });

  Object.defineProperty(this, "endTime", {
    set: function (value) {
      endTime = value;
    },
    get: function () {
      return endTime;
    },
  });

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.running) throw new Error("Stopwatch has already started.");

  this.running = true;

  this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch is not started.");

  this.running = false;

  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};
