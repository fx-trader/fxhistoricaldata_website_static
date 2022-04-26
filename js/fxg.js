var fxg = new function() {

    var instrumentInfo = {
        AUD_CHF: ["CHF",10000,1,"oanda:AUDCHF"],
        AUD_JPY: ["JPY",100,1,"oanda:AUDJPY"],
        AUD_NZD: ["NZD",10000,1, "oanda:AUDNZD"],
        AUD_USD: ["USD",10000,1, "oanda:AUDUSD"],
        CAD_JPY: ["JPY",100,1, "oanda:CADJPY"],
        CHF_JPY: ["JPY",100,1, "oanda:CHFJPY"],
        EUR_CAD: ["CAD",10000,1, "oanda:EURCAD"],
        EUR_CHF: ["CHF",10000,1, "oanda:EURCHF"],
        EUR_GBP: ["GBP",10000,1, "oanda:EURGBP"],
        EUR_JPY: ["JPY",100,1, "oanda:EURJPY"],
        EUR_PLN: ["PLN",10000,1, "oanda:EURPLN"],
        EUR_NZD: ["NZD",10000,1, "oanda:EURNZD"],
        EUR_USD: ["USD",10000,1, "oanda:EURUSD"],
        GBP_CHF: ["CHF",10000,1, "oanda:GBPCHF"],
        GBP_JPY: ["JPY",100,1, "oanda:GBPJPY"],
        GBP_NZD: ["NZD",10000,1, "oanda:GBPNZD"],
        GBP_USD: ["USD",10000,1, "oanda:GBPUSD"],
        NZD_JPY: ["JPY",100,1, "oanda:NZDJPY"],
        NZD_USD: ["USD",10000,1, "oanda:NZDUSD"],
        USD_CAD: ["CAD",10000,1, "oanda:USDCAD"],
        USD_CHF: ["CHF",10000,1, "oanda:USDCHF"],
        USD_JPY: ["JPY",100,1, "oanda:USDJPY"],
        XAG_EUR: ["EUR",100,1, "oanda:XAGEUR"],
        XAG_USD: ["USD",100,1, "oanda:XAGUSD"],
        XAU_EUR: ["EUR",10,1, "oanda:XAUEUR"],
        XAU_USD: ["USD",10,1, "oanda:XAUUSD"],
        XAU_XAG: ["XAG",10,1, "oanda:XAUXAG"],
        XCU_USD: ["USD",2000,1, "oanda:XCUUSD"],
        XPD_USD: ["USD",10,1, "oanda:XPDUSD"],
        XPT_USD: ["USD",10,1, "oanda:XPTUSD"],
        BCO_USD: ["USD",100,1, "oanda:BCOUSD"],
        WTICO_USD: ["USD",100,1, "oanda:WTICOUSD"],
        AU200_AUD: ["AUD",1,1, "oanda:AU200AUD"],
        ES35_EUR: ["EUR",1,1, null],
        FR40_EUR: ["EUR",1,1, "oanda:FR40EUR"],
        DE30_EUR: ["EUR",1,1, "oanda:DE30EUR"],
        HK33_HKD: ["HKD",1,1, "oanda:HK33HKD"],
        IT40_EUR: ["EUR",1,1, null],
        JP225_JPY: ["JPY",1,1, "oanda:JP225USD"],
        NAS100_USD: ["USD",1,1, "oanda:NAS100USD"],
        SPX500_USD: ["USD",1,1, "oanda:SPX500USD"],
        UK100_GBP: ["GBP",1,1, "oanda:UK100GBP"],
        US30_USD: ["USD",1,1, "oanda:US30USD"],
        DE10YB_EUR: ["EUR",100,10, "oanda:DE10YBEUR"],
        NATGAS_USD: ["USD",1000,1, "oanda:NATGASUSD"]
    };

    this.getInstrumentInfo = function(instrument) {
        return instrumentInfo[instrument];
    }

};
