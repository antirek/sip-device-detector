# sip-device-detector

Detect sip device by User-Agent header

type: phone, softphone, pbx, ata

vendor: grandstream, yealink, cisco, eltex



### install

> npm install sip-device-detector

### usage

`````javascript

const detect = require('sip-device-detector');

let ua = 'Yealink SIP-T28P 2.71.14.4';

let result = detect(ua);

/*
result = {
	vendor: 'yealink',
	type: 'phone'
}
*/

`````