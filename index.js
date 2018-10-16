
let detect = (ua) => {
  let re = {
    vendor: '', // 'grandstream', 'cisco', 'digium'
    type: '',   // 'pbx', 'phone', 'ata', 'softphone', 'unknown'
  }

  let n = ua.toLowerCase();
  let tryDetect = (p) => {
    //console.log(n);
    return p.test(n);
  };

  re.vendor = (() => {
    let v;
    switch (true) {
      case tryDetect(/grandstream/i):
        v = 'grandstream';
        break;
      case tryDetect(/yealink/i):
        v = 'yealink';
        break;
      case tryDetect(/cisco/i):
        v = 'cisco';
        break;
      case tryDetect(/microsip/i):
        v = 'microsip';
        break;
      case tryDetect(/tau/i):
        v = 'eltex';
        break;
      case tryDetect(/mp202/i):
        v = 'audiocodes';
        break;
      default:
        v = 'unknown';
      }
    
    return v;
  })();
  

  re.type = (() => {
    let t;
    switch (true) {
      case tryDetect(/gxp|t28p/i):
        t = 'phone';
        break;
      case tryDetect(/asterisk|pbx/i):
        t = 'pbx';
        break;
      case tryDetect(/microsip/i):
        t = 'softphone';
        break;
      case tryDetect(/tau|mp202/i):
        t = 'ata';
        break;
      default:
        t = 'unknown'
    }
    return t;
  })();

  return re;
}

module.exports = detect;