
const detect = (ua) => {
  const re = {
    vendor: '', // 'grandstream', 'cisco', 'digium'
    type: '', // 'pbx', 'phone', 'ata', 'softphone', 'unknown'
  };

  const n = ua.toLowerCase();
  const tryDetect = (p) => {
    // console.log(n);
    return p.test(n);
  };

  re.vendor = (() => {
    let v;
    switch (true) {
      case tryDetect(/asterisk/i):
        v = 'asterisk';
        break;
      case tryDetect(/grandstream/i):
        v = 'grandstream';
        break;
      case tryDetect(/panasonic/i):
        v = 'panasonic';
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
      case tryDetect(/linksys/i):
        v = 'linksys';
        break;
      case tryDetect(/mp202|audiocodes/i):
        v = 'audiocodes';
        break;
      case tryDetect(/3cx/i):
        v = '3cx';
        break;
      case tryDetect(/dble/i):
        v = 'goip';
        break;
      case tryDetect(/sip.js/i):
        v = 'sip.js';
        break;
      default:
        v = 'unknown';
    }

    return v;
  })();


  re.type = (() => {
    let t;
    switch (true) {
      case tryDetect(/gxp|t28p|kx-tgp/i):
        t = 'phone';
        break;
      case tryDetect(/asterisk|pbx/i):
        t = 'pbx';
        break;
      case tryDetect(/microsip|3cxphone/i):
        t = 'softphone';
        break;
      case tryDetect(/tau|mp202|spa|dble/i):
        t = 'ata';
        break;
      case tryDetect(/sip.js/i):
        t = 'webphone';
        break;
      default:
        t = 'unknown';
    }
    return t;
  })();

  return re;
};

module.exports = detect;
