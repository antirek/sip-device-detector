const detect = require('../index');

describe('test', () => {
  it('return ok', () => {
    const s = [
      {
        ua: 'Grandstream GXP1400 1.0.4.13',
        r: {vendor: 'grandstream', type: 'phone'},
      },
      {
        ua: 'Grandstream Model HW GXP1400 SW 1.0.4.13 DevId 000b823704f7',
        r: {vendor: 'grandstream', type: 'phone'},
      },
      {
        ua: 'MicroSIP/3.19.8',
        r: {vendor: 'microsip', type: 'softphone'},
      },
      {
        ua: 'TAU-2M.IP/1.14.1.527 SN/VI39047335 sofia-sip/1.12.10',
        r: {vendor: 'eltex', type: 'ata'},
      },
      {
        ua: 'MP202 B 2FXS/3.0.0_build_13',
        r: {vendor: 'audiocodes', type: 'ata'},
      },
      {
        ua: 'Grandstream GXP1610 1.0.4.33',
        r: {vendor: 'grandstream', type: 'phone'},
      },
      {
        ua: 'Yealink SIP-T28P 2.71.14.4',
        r: {vendor: 'yealink', type: 'phone'},
      },
      {
        ua: 'Cisco/SPA122-1.3.5(004p_XU001)',
        r: {vendor: 'cisco', type: 'ata'},
      },
      {
        ua: '3CXPhone 6.0.26523.0',
        r: {vendor: '3cx', type: 'softphone'},
      },
      {
        ua: 'dble',
        r: {vendor: 'goip', type: 'ata'},
      },
      {
        ua: 'Asterisk PBX 13.10.0',
        r: {vendor: 'asterisk', type: 'pbx'},
      },
      {
        ua: 'Panasonic-KX-TGP600RU/01.061 (080023e21a52)',
        r: {vendor: 'panasonic', type: 'phone'},
      },
      {
        ua: 'SIP.js/0.8.0 sipjs.com',
        r: {vendor: 'sip.js', type: 'webphone'},
      },
      {
        ua: 'Linksys/SPA8000-6.1.12(XU)',
        r: {vendor: 'linksys', type: 'ata'},
      },
      {
        ua: 'Grandstream GXW-4008  V1.5A 1.0.16.2  chip V2.2',
        r: {vendor: 'grandstream', type: 'ata'},
      },
      {
        ua: 'Grandstream HT812 1.0.5.11',
        r: {vendor: 'grandstream', type: 'ata'},
      },
      {
        ua: 'Grandstream GXW4224  V2.3B 1.0.5.8',
        r: {vendor: 'grandstream', type: 'ata'},
      },
      {
        ua: 'C530A IP/42.231.00.000.000',
        r: {vendor: 'gigaset', type: 'phone'},
      },
      {
        ua: 'Panasonic_KX-TGP500B09/22.85 (0080f0fb5739)',
        r: {vendor: 'panasonic', type: 'phone'},
      },
      {
        ua: 'AUDC-IPPhone/1.6.0_p003_build_44_ce6 (320HD; 00908F225074)',
        r: {vendor: 'audiocodes', type: 'phone'},
      },
      {
        ua: 'Jitsi2.10.5550Windows 7',
        r: {vendor: 'jitsi', type: 'softphone'},
      },
      {
        ua: 'Yealink SIP-T19P_E2 53.80.15.1',
        r: {vendor: 'yealink', type: 'phone'},
      },
      

    ];

    s.map((item) => {
      const r = detect(item.ua);
      expect(r).toEqual(item.r);
    });
  });
});
