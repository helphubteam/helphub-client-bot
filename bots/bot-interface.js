const NotImplementedError = function (message = "") {
  this.name = "NotImplementedError";
  this.message = message;
}
NotImplementedError.prototype = Error.prototype;

class BotInterface {
  start() {
    throw new NotImplementedError()
  }
  on() {
    throw new NotImplementedError()
  }
  hears(){ 
    throw new NotImplementedError()
  }
  launch() {
    throw new NotImplementedError()
  }
  help() {
    throw new NotImplementedError()
  }
  stop() {
    throw new NotImplementedError()
  }
}
