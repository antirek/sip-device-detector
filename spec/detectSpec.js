const detect = require('../index')

describe("test", () => {
  it("return ok", () => { 

    let s = [
      {
        ua: "Grandstream GXP1400 1.0.4.13",
        r: { vendor: 'grandstream', type: 'phone' }
      },
      {
        ua: "Grandstream Model HW GXP1400 SW 1.0.4.13 DevId 000b823704f7",
        r: { vendor: 'grandstream', type: 'phone' }
      },
      {
        ua: "MicroSIP/3.19.8",
        r: { vendor: 'microsip', type: 'softphone' }
      },
      {
        ua: "TAU-2M.IP/1.14.1.527 SN/VI39047335 sofia-sip/1.12.10",
        r: { vendor: 'eltex', type: 'ata' }
      },
      {
        ua: "MP202 B 2FXS/3.0.0_build_13",
        r: { vendor: 'audiocodes', type: 'ata' }
      },
      {
        ua: "Grandstream GXP1610 1.0.4.33",
        r: { vendor: 'grandstream', type: 'phone' }
      },
      {
        ua: "Yealink SIP-T28P 2.71.14.4",
        r: { vendor: 'yealink', type: 'phone' }
      },
    ]

    s.map(item => {
      let r = detect(item.ua);
      expect(r).toEqual(item.r);
    })
  })
})