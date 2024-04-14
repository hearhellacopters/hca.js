const HCAKnownKeys = [
    // [lower 32 bits, higher 32 bits]
    // eg. 6615518E8ECED447 => [0x8ECED447, 0x6615518E]
    // source: https://github.com/vgmstream/vgmstream/blob/36f4dfeab41adf8f8ff08477dc062f8c76b003d8/src/meta/hca_keys.h
    [0x00222F1F, 0xE0748978],
    [0xCC554639, 0x30DBE1AB],
    [0x00DBE1AB, 0xCC554639],
    [0x00000000, 0x012C9A53],
    [0x00000000, 0x77EDF21C],
    [0x00000000, 0x49913556],
    [0x00003657, 0xF27E3B22],
    [0x0011DCDD, 0x0DC57F48],
    [0x00000000, 0x00000978],
    [0x00688884, 0xA11CCFB0],
    [0x00001B85, 0xA6AD6125],
    [0x00000000, 0x012FCFDF],
    [0x00000000, 0x00003039],
    [0x7E896318, 0x92EBF464],
    [0x00000000, 0x02B99F1A],
    [0x0002B875, 0xBC731A85],
    [0x29AFE911, 0xF5816A2A],
    [0x00000000, 0x01395C51],
    [0x002055C8, 0x634B5F07],
    [0x02051AF2, 0x5990FB5E],
    [0x7CEC81F7, 0xC3091366],
    [0x00A06A0B, 0x8D0C10FD],
    [0x0000968A, 0x97978A96],
    [0x00000000, 0x000022CE],
    [0xFDAE531A, 0xAB414BA1],
    [0x00000000, 0x001D149A],
    [0x00000000, 0x012EBCCA],
    [0x43E4EA62, 0xB8E6C6D2],
    [0x438BF1F8, 0x83653699],
    [0xFFFFFFFF, 0xFFFFFFFF],
    [0x00000000, 0x009134FC],
    [0x0000000B, 0x7235CB29],
    [0x00189DFB, 0x1024ADE9],
    [0x0002354E, 0x95356C72],
    [0x00000000, 0x000004C8],
    [0xDB5B61B8, 0x343D0000],
    [0x00000000, 0x0E62BEF0],
    [0x00000000, 0x0E88473C],
    [0x00000000, 0x77EDA13A],
    [0x00057F78, 0xB05F9BA3],
    [0x00000000, 0x00D77A01],
    [0x00B6A392, 0x8706E529],
    [0x00000000, 0x367F34CB],
    [0x00000000, 0x00B2A913],
    [0xB1E30F34, 0x6415B475],
    [0x00000000, 0x00003852],
    [0x00000000, 0x000003E8],
    [0xD2E836E6, 0x62F20000],
    [0x00000000, 0xAB465692],
    [0x82021286, 0x4CAB35DE],
    [0x00FF00FF, 0x00FF00FF],
    [0x0000002E, 0xEC8D972C],
    [0x00000000, 0x00D0DC26],
    [0x00000489, 0x5C56FFA9],
    [0x00000000, 0x013351F0],
    [0x00000000, 0x7E87D606],
    [0x00000092, 0x8CCB8334],
    [0x0005149A, 0x5FF67AE2],
    [0x0B886206, 0xBC1BA7FB],
    [0x00000012, 0xF1EED2FF],
    [0x00000000, 0x00003490],
    [0x0520A931, 0x35808594],
    [0x16FA54B0, 0xC09F7661],
    [0x000E4657, 0xD7266AFA],
    [0x01639DC8, 0x7B30C6DB],
    [0x00000497, 0x222AAA84],
    [0x00000475, 0x61F95FCF],
    [0x18BC2F74, 0x63867524],
    [0x00000000, 0x0713706D],
    [0x00000000, 0x02C4EECE],
    [0x65CD6839, 0x24EE7F38],
    [0x00000000, 0x0030D9E8],
    [0x00000000, 0x0CFA624F],
    [0x00000015, 0x46B0E028],
    [0x00000000, 0x03DCFAE3],
    [0x00000000, 0x00001A0B],
    [0x6D8EFB70, 0x0870FCD4],
    [0x55D11D33, 0x49495204],
    [0x00DC71D5, 0x479E1E1A],
    [0x00000000, 0x012EE5DC],
    [0x00000052, 0xC7E5C0DC],
    [0x00008B8D, 0x2A3AA076],
    [0x00000000, 0x075BCD15],
    [0x006CCC56, 0x9EB1668D],
    [0x00000000, 0x0389CA93],
    [0x000000C2, 0xC7CE8E59],
    [0x03030201, 0x0100080D],
    [0x0581B687, 0x44C5F5F5],
    [0x00136B0A, 0x6A5D13A9],
    [0x5A2F6F6F, 0x0192806D],
    [0x0000001C, 0x5E0D3154],
    [0x0013F11B, 0xC5510101],
    [0x76A34A72, 0xE15B928D],
    [0x00777563, 0xE571B513],
    [0x36EB3E4E, 0xE38E05B2],
    [0xA86BF72B, 0x4C852CA7],
    [0x00000000, 0x247F1F17],
    [0x00000083, 0x64311631],
    [0x00000000, 0xC59E7114],
    [0xC436E037, 0x37D55B5F],
    [0x104F6430, 0x98E3F700],
    [0x13E3D8C4, 0x5778A500],
    [0x00000000, 0x013416BA],
    [0x00023890, 0xC8252FC3],
    [0x283553DC, 0xE3FD5FB9],
    [0x82C3C951, 0xC561F736],
    [0xFDAE531A, 0xAB414BA1],
    [0x009A7263, 0xCA658CA5],
    [0x00000000, 0xAC8E352D],
    [0xAAED297D, 0xDEF1D9F6],
    [0x04546195, 0xF85DF052],
    [0x00B51DB4, 0x932A963B],
    [0x001626EE, 0x22C887C7],
    [0x165CF4E2, 0x138F7BDA],
    [0x00DC78FA, 0xEFA76ADC],
    [0x112210F4, 0xB16C1CB1],
    [0x0000125F, 0x45B9D640],
    [0x00168E6C, 0x99510101],
    [0x00000000, 0x0005D727],
    [0x0000450D, 0x608C479F],
    [0x7500DA1B, 0x7FBA5FCD],
    [0x525F1D62, 0x44274B52],
    [0xAA700C29, 0x2CFCAB24],
    [0x000002B2, 0xE7889CAD],
    [0x7F455149, 0x9DF55E68],
    [0x2CE32BD9, 0xB36A98DE],
    [0x0000016C, 0x54B92503],
    [0x0575ACEC, 0xA945A444],
    [0x59F44935, 0x4D063308],
    [0xF19D4CB8, 0x4172F7AB],
    [0xC4276FFA, 0xEE4AADEC],
    [0x683D739B, 0xE9679E61],
    [0xA3ADC531, 0xC32BB128],
    [0x52D065D9, 0xCCDB8696],
    [0xBA26E589, 0x23A5DA5D],
    [0x5B877AF6, 0xE52AF19B],
    [0x55B7B258, 0x21375A02],
    [0x87025D78, 0xA57AF15B],
    [0x8815D2DF, 0xFD77A71E],
    [0xB9CEDC6D, 0x6738D481],
    [0x8EFA09C6, 0xDF3991A4],
    [0xC05F8E4E, 0xA8C3E487],
    [0xBF7712E1, 0x75C0B265],
    [0xF74CF8D4, 0xA5D008CE],
    [0xFCCE3164, 0xDB70522D],
    [0x47F52330, 0xDF2EAD11],
    [0x2F778C73, 0x6A8A4597],
    [0x0A90C8EB, 0xF8463D05],
    [0x750BEAF2, 0x2DDC700B],
    [0x16CCC93F, 0x976A8329],
    [0x9F7A0810, 0x034669FE],
    [0xE8333D53, 0xD2779E38],
    [0x2CDCAC4F, 0x44F67075],
    [0x670C738C, 0x8171210B],
    [0xD7359FA9, 0xEC49E2C2],
    [0xD91127E6, 0xC2F22539],
    [0x120DB58E, 0x6C835175],
    [0x3613E2A7, 0xFDFC0784],
    [0xC239D244, 0xB6D3B722],
    [0x2575C136, 0xA260E723],
    [0xFB647D07, 0x4E53FAB6],
    [0xC24049B9, 0xF7ED3105],
    [0x0DC128F2, 0xFD48BF4B],
    [0xAEF2954D, 0xC3657336],
    [0x567D2958, 0x28F1B08A],
    [0x1BBAD843, 0xD5971358],
    [0xF6B0DC07, 0xEA8EBEB7],
    [0xDB03ECCA, 0x6A0151E2],
    [0x260A354B, 0x925AFEAF],
    [0x8032F83C, 0xBF0076A1],
    [0xE4A1737F, 0xA3D34CCB],
    [0xD0ED8E94, 0x0D8ED705],
    [0x6BA36CAD, 0xF1E045CF],
    [0xB9678662, 0x1E27DAF3],
    [0xA2C543B2, 0x27B8E5E2],
    [0x845437EC, 0x4E367A13],
    [0xADFECFAF, 0x25CFE2CE],
    [0x3674ABA8, 0xDA7BC84B],
    [0xFD61F2C3, 0xB89F3888],
    [0x514FA987, 0x9FD07278],
    [0x3841DD34, 0x67659916],
    [0x4FFFEE40, 0x65D22BEC],
    [0x7678588B, 0x0ADF59DF],
    [0xA0316B53, 0x6C8B7540],
    [0x76254D1E, 0xF50C004C],
    [0x22EF086D, 0x7D6CE520],
    [0x2F2C0FF3, 0xFF235BD6],
    [0x6867CC75, 0x639EE0C3],
    [0x73621A0D, 0x321E60C2],
    [0xFF04547F, 0xE629C8BF],
    [0x5EF795CD, 0xBCDCBA91],
    [0x868ACC01, 0x02C59A38],
    [0x6DC5FF77, 0x263450A5],
    [0x01DCA436, 0xAFDD18D9],
    [0xAECEE65D, 0x0F181D3B],
    [0x2822BBA0, 0xA5C4F18C],
    [0xFF579D3F, 0xCFA8453A],
    [0x3CAA61E8, 0xB958F6D8],
    [0x15BB78C3, 0x1DB0A0B6],
    [0x59B12572, 0x42C40109],
    [0xDB402BD0, 0x8D522F34],
    [0xA76262C2, 0x557BE76F],
    [0xA139C29E, 0x97FCEFB4],
    [0xB18FB83E, 0xE356FB94],
    [0xD2CB7692, 0xD690B3A7],
    [0x2B4A83E7, 0xD54D0554],
    [0xA691936C, 0xAF4D91D0],
    [0x0D40CCBA, 0x5E10385A],
    [0xF0C624DC, 0x0385ADAE],
    [0xCE0796D2, 0xA956DC5A],
    [0xF9D6FB07, 0xC0B4E967],
    [0x04AA31E0, 0xC4F787A8],
    [0x94466DB0, 0xD3C10F4B],
    [0xE6D1FD6E, 0xFFA46736],
    [0xD23BDACD, 0x616FC4C9],
    [0xFCEAA732, 0x48868EC5],
    [0x3B6B0023, 0xA2DD8C3D],
    [0x318F65F5, 0x64DAA549],
    [0x3DAC12B2, 0x6997F628],
    [0x6A15A961, 0x0D10D210],
    [0x57111C24, 0x801B44A1],
    [0x40443974, 0xA0A86B8B],
    [0xCEDE8477, 0x21873FC2],
    [0xC40C398F, 0x7E80D184],
    [0x68D576C6, 0x31E61265],
    [0x21778249, 0x5C8B2972],
    [0x6699616B, 0xE2C50115],
    [0xB7A52971, 0x98A73155],
    [0xDD9CA800, 0xA7123D6F],
    [0xC86F8564, 0xE0B9078C],
    [0xCC5610C0, 0x9F472CE9],
    [0xD447A497, 0xC5547A1C],
    [0x227B8594, 0x8BB3D899],
    [0xFFF671F0, 0xDDB660B1],
    [0x22E33DB9, 0xB5625A96],
    [0xB7807080, 0x2414DE7A],
    [0x572AEEED, 0x86655119],
    [0xB921C399, 0x2807DADD],
    [0x38AD99A0, 0x45DC971F],
    [0xF6166425, 0x79BA5850],
    [0x6AA0FF88, 0x1DA270E7],
    [0x5089E16D, 0x7A676AB1],
    [0x8AD213DD, 0xDEDC9022],
    [0x5205A666, 0xF976D42F],
    [0xCCCB5077, 0xD978DEF4],
    [0x290FBC93, 0xE184AF1E],
    [0x230C9509, 0xBBC3DF0D],
    [0x5771A2C7, 0x6F36C898],
    [0x244A9288, 0x5AB77B7C],
    [0xFC3FA77F, 0xC33460D4],
    [0x26EE1359, 0x8091B548],
    [0xF06A6BFD, 0xD00C8286],
    [0x2DF608EF, 0x06ACA41C],
    [0x641AF19C, 0x287D4A2E],
    [0x82DE7B71, 0xB30D7BC2],
    [0x776C4ADE, 0xD0BCA5D1],
    [0xB7BFF4FB, 0xF66BE43F],
    [0x904F50C5, 0xCE8EC6E4],
    [0x465E3032, 0x1A4091F2],
    [0x7C7DD6D9, 0xF3761102],
    [0xC222E70E, 0x4A79F7C3],
    [0x84635546, 0x72BFB716],
    [0x1111D6C1, 0x0E509824],
    [0x2E107D84, 0x9959C430],
    [0x75859A7A, 0x2B1ED37D],
    [0x2E5F57A6, 0xC6E9C97F],
    [0xA144F6D7, 0xDE02E000],
    [0x1DA4370C, 0x9C20319C],
    [0xD8CDD535, 0x89AD3634],
    [0x88007190, 0xE0BFA1CE],
    [0x6FCCDD5C, 0x3D0D6E3E],
    [0x5D1F3FDB, 0xBB036F8D],
    [0xC04264E8, 0xF34AD5C0],
    [0x8F0E96B4, 0xF71F724F],
    [0x79C5F00D, 0x243E3097],
    [0x889D47AD, 0xC9595FFA],
    [0x3F25FE33, 0x95B3154C],
    [0x212BBEE2, 0x64BE5B06],
    [0x867D47A7, 0xD8376402],
    [0xF7E11EC9, 0xC94402F1],
    [0x1BB363AD, 0xCF4EB3F8],
    [0x0D80D3DC, 0xC7C75CEA],
    [0x52723F02, 0x6D5238E8],
    [0x00D13A31, 0x5C0005F0],
    [0x035F2D3C, 0xEC84ABA1],
    [0x0DAD11FE, 0x0E397EDE],
    [0x0C94236C, 0x936F50CC],
    [0xBF8A2D95, 0x1BC01DFF],
    [0xB9455056, 0x38F972E4],
    [0x0DF31E26, 0xA7B036A2],
    [0xB2770DCE, 0xD3CFD9A7],
    [0x6C6C1FD5, 0x1E28A1E7],
    [0xDCD2A403, 0xFB01E164],
    [0x98436383, 0x7811B08A],
    [0x9F6881F6, 0xD7A91658],
    [0x3804D53C, 0x43293080],
    [0x298A0FA0, 0x5C3F355F],
    [0x9EBB5606, 0x85327081],
    [0xD45E8BA3, 0x74B45FF7],
    [0xC5C9BF13, 0x8C9E28CE],
    [0x1980271C, 0xFE0DA9BD],
    [0x75C5BD4E, 0x3A01A8A4],
    [0xEC5F5FBE, 0x92BBB771],
    [0x0B8C3233, 0x338AD8E0],
    [0xDA4CE04D, 0xBDA1BD7E],
    [0x07878DF6, 0x0F0549C4],
    [0x8E5B7068, 0x022828E0],
    [0xB069A5C5, 0xE2D93EDF],
    [0x15F82C16, 0x17013C36],
    [0xC7DA8E6F, 0x0E2FE399],
    [0xE350BFFC, 0xDC9CB686],
    [0xE77AA2F3, 0xC90A4E84],
    [0x57BDC58E, 0x4C06FC76],
    [0xD4C36AB9, 0x62153420],
    [0x9DE6ACE9, 0xA0E62F44],
    [0x35128087, 0x963CD5BE],
    [0xDF30ED86, 0xC3D00FFB],
    [0x0DE49592, 0x21BC2675],
    [0xEEAF8D24, 0x58CCDB36],
    [0xB140168A, 0x47D55B92],
    [0x2E8D1134, 0xCE415F8C],
    [0x1BF43DEF, 0x1E4B103A],
    [0x6721AD51, 0x09E4840D],
    [0x0C488DD6, 0x2FC89090],
    [0xD3D24F1D, 0xB0B74363],
    [0xD2CE91DB, 0xFC209B10],
    [0xA662BE16, 0x01E49476],
    [0xE5E83D31, 0xE64273F8],
    [0xAF9D7A05, 0xB0FC3D9E],
    [0xCEE66D58, 0x5D689851],
    [0x065C2F85, 0x00BC12C8],
    [0x7148DDA3, 0xAFA76439],
    [0x42548FE4, 0x544C2ED7],
    [0x09E68DA7, 0x34CC472F],
    [0xA01C597D, 0x1AA13358],
    [0x06492E77, 0x08204838],
    [0x957E4D39, 0x48427952],
    [0x7081F083, 0xAC3D6F0A],
    [0xFCFA4DBD, 0x1EC6CFCB],
    [0x750AB114, 0x87F9D6E8],
    [0xD22171FD, 0xA74C5615],
    [0x3AA02E0A, 0x37543B5C],
    [0xC451F1DE, 0xDDAE08CA],
    [0xC0FA6669, 0xD9904919],
    [0x8258DDD6, 0xA1D0849B],
    [0x1DD21A12, 0x44CA12F1],
    [0xFDEC74B2, 0x3D8B494B],
    [0x6F9735C0, 0x2FAF6AAE],
    [0x00E978D3, 0x94512CFD],
    [0xABA14763, 0x7D52EFBE],
    [0xE67F4DA6, 0x012C5D24],
    [0xC352BBF3, 0xD519256E],
    [0x037D1452, 0xC192B1E6],
    [0xF7E53533, 0xD82D48DD],
    [0x33848BE1, 0x3A2884A3],
    [0xFAB3596F, 0x11CC4D7A],
    [0xE35D52B6, 0xD2C094FB],
    [0xCDB9BC2A, 0xD7024CA2],
    [0xCF27380A, 0x5A949DC1],
    [0x5DE2B0A3, 0x4EEE1C89],
    [0x5C1195D8, 0xAFCB1901],
    [0x1AD8DB76, 0x7D9BA4A7],
    [0x9BC820AA, 0x161B0F08],
    [0x972B52F3, 0xDFAA387A],
    [0x2A47FEAC, 0x8DC3CA9C],
    [0x9EBBAF63, 0xFFE9D9EF],
    [0xE553DBA6, 0x592293D8],
    [0x031E0726, 0x78AD18A3],
    [0x4BA9A947, 0x1F49B74E],
    [0x0C917CB8, 0x64231982],
    [0x7A708E29, 0x1692ABB9],
    [0x1AB266A4, 0xCBB5133A],
    [0x7D471961, 0x5FBB2F4D],
    [0x28AA75A0, 0x1F26A853],
    [0x7555FEEA, 0xA2A8FAC4],
    [0xA42DE67A, 0x89FB3175],
    [0xBDD0C580, 0x62C675D4],
    [0xEF257F41, 0xA265A0AF],
    [0x5E23D8A2, 0x488BC715],
    [0x198CC607, 0xE20DD264],
    [0xFD3EA450, 0x350D666F],
    [0x5E91A379, 0x0C32E2B3],
    [0x358ADFD1, 0xBBD3A95E],
    [0x1948EDF7, 0xFF41E79B],
    [0x10029372, 0x9F35B4DE],
    [0x140AC59D, 0x2B870A13],
    [0x402B13DF, 0x5481D4E6],
    [0x729EFD67, 0xAEDE1A40],
    [0xB7B9A143, 0x742FA51E],
    [0x0C775032, 0x8BCD329F],
    [0x5761FE74, 0x62B17A3B],
    [0x98C7A1D1, 0xC45DF640],
    [0x3D01826F, 0xE053DDDA],
    [0xA6A6426C, 0xAED68F7C],
    [0xDFAD847A, 0x86A126BB],
    [0x711EF850, 0x45B8C26E],
    [0xFF7640B4, 0x6D72B337],
    [0x420D4DD4, 0x13053980],
    [0x84DC42F5, 0xA05F77CF],
    [0xCB60232F, 0x2F27ACE5],
    [0xD9A00C9B, 0xC93014A8],
    [0xE0B8BB03, 0xC74BB3D0],
    [0xCB3D9329, 0xD40490B2],
    [0x7CE69EED, 0x81F01019],
    [0xFD9FA5BC, 0xB347C01B],
    [0x4A4462CB, 0x0375001E],
    [0xA3711CC0, 0x6F9B86C2],
    [0x0AEBFDF8, 0x5AAE4424],
    [0x1ED521F6, 0xDD691255],
    [0xB2BD99FA, 0x559B9062],
    [0xAFF9DF03, 0x0E63E5BA],
    [0xB30ACD0A, 0x43754E5C],
    [0xA6CEFD44, 0x72568948],
    [0x447D08CA, 0x3148599D],
    [0xFE315172, 0x82D40690],
    [0x0A6A15CC, 0x9722257D],
    [0x55912DB4, 0x388961AC],
    [0x8F5F05C8, 0x35F7280E],
    [0x6750F4D0, 0x5183BC01],
    [0xDA65AF76, 0x0E02C6EE],
    [0xF4093992, 0xCADD3708],
    [0xF965A108, 0x6B3179C3],
    [0x24C0B490, 0x97E9EBFF],
    [0x2ECDF66C, 0x680F3A45],
    [0x54AAADA4, 0xA1B8DEEF],
    [0x46BED365, 0x593C560C],
    [0xA954B315, 0x630E3ED0],
    [0x83286683, 0x69631CC1],
    [0xA5C1ADEB, 0x7919845F],
    [0x8E35D686, 0x32FC0D77],
    [0x4FBC9CAB, 0xD12F75A1],
    [0xD27146E6, 0xDE40209A],
    [0x6ABCC90B, 0xE62F2CEC],
    [0x7F617E39, 0x6E9A1E5C],
    [0xD0471C16, 0x3265CA1B],
    [0xD6899666, 0x09595D7D],
    [0x172171A4, 0xFF10FDC1],
    [0x53C2BDDB, 0x0A15D322],
    [0xCB2C44D5, 0x94252491],
    [0xBDC220BA, 0x31087591],
    [0xE2346E5F, 0x5D18228E],
    [0x458B7384, 0x4ED5219E],
    [0x7D83B8DA, 0x9023EF26],
    [0x32CB728D, 0xDAB4D956],
    [0xBD128C4A, 0x4D1F565B],
    [0x363AA084, 0xF3BF7AF1],
    [0xDFE954B6, 0x17357381],
    [0x52C5DFB6, 0x1FE4C87A],
    [0x3EBBCCAB, 0x07C9A9BA],
    [0x50A01678, 0x18F4D51B],
    [0xCEAED399, 0x6196281B],
    [0xE0590C04, 0xEC4906F1],
    [0x400B11E9, 0x30008A58],
    [0x15AAECC4, 0x725A5F70],
    [0x7A5E0865, 0xBA8CAFA7],
    [0x7679587F, 0x7292B057],
    [0xC9C804E6, 0xFED3387C],
    [0xC72EB23B, 0xCDC43F42],
    [0x0F7CEDD2, 0x12A06307],
    [0x850AD05F, 0x415D6018],
    [0x36F62D41, 0xAA4203C9],
    [0x2174D57B, 0xFEAFC637],
    [0x143A7405, 0xEF56E4DF],
    [0x4A193ED2, 0x6D1D10F3],
    [0x884385AD, 0x03F2BD62],
    [0x9C220B56, 0xAB1D56B1],
    [0x5ED84AEA, 0x8AD0D05B],
    [0xF5074D6D, 0xB1CEC319],
    [0xAE83F69D, 0x4D7FF064],
    [0x29A3D7B0, 0x3FE66D8F],
    [0xB3028865, 0x6E565401],
    [0x5A420864, 0xCD1FA3FB],
    [0xE1C992CC, 0x05D8A203],
    [0x79AD5329, 0xB9B46034],
    [0x1DD99AC6, 0xF1A07F00],
    [0x2FD298AD, 0xE03F7F0F],
    [0xBEB0DF81, 0x8F88B99C],
    [0x0886DF2B, 0xDCC645CC],
    [0x06420FC8, 0xD2D67EF1],
    [0x29D61D19, 0x434B640B],
    [0xF4D7569B, 0xB4FA06AB],
    [0x1DE64CE0, 0xC1054A5A],
    [0xD51E8D88, 0xFFF1AA5C],
    [0xA2EA8181, 0x2297BF73],
    [0x0276F1E2, 0x3C97CF8D],
    [0xB59A0DF1, 0x213C36C9],
    [0xEBF7BFEB, 0xB82A4411],
    [0xB991FCB8, 0xB74F46D7],
    [0x435E2E06, 0x4BD48AD5],
    [0xA9824E9B, 0xAAA354E2],
    [0xC3A72539, 0xB831EA6E],
    [0x8BC6B7B7, 0xA2D2BBA3],
    [0xDBB0F41E, 0x90B30452],
    [0x444DDA6D, 0x55D76095],
    [0xCBF4F132, 0x4081E0A6],
    [0xF1DB3C1D, 0x9542063A],
    [0x114245B9, 0x8DCB75BF],
    [0x6139EDFB, 0x8889032D],
    [0x9CE13DCB, 0x2FB389CC],
    [0x67B89634, 0x319C1D36],
    [0xF877DEA1, 0x180B9B90],
    [0xCD3FB920, 0x65D9F373],
    [0xEE8DA280, 0x6A13EECF],
    [0x0046FD87, 0xA21859AC],
    [0x90FEFCD3, 0x50BD2CB8],
    [0xF7EDC5D7, 0x2FDD6CEB],
    [0x4C7D7C25, 0x1C6BFA95],
    [0x2F3528A4, 0xB9EAA0F7],
    [0x529969B7, 0xE1E9AC18],
    [0xBB7BE9C7, 0xC620F504],
    [0x7ED1FA0B, 0x6EC8F9B3],
    [0xA4481F97, 0xA8D4D01C],
    [0x7465C7C4, 0x73E53A40],
    [0xFADB1B0F, 0x28E951E1],
    [0x05E3EBA3, 0x76E0B3DD],
    [0x0A8EE7A3, 0xA20CE822],
    [0xF42D31B5, 0xECD1AEC1],
    [0x56ECFC7E, 0xF4C65BE8],
    [0xAD071DCE, 0x0C070E65],
    [0x98178A7B, 0x6AC7327B],
    [0xB65D8662, 0x4A857788],
    [0x9FBD8A17, 0x2D5BA3E3],
    [0xDC2680AC, 0xFD1B9B64],
    [0xD0D8557C, 0x8EF44DD4],
    [0x945CDB3C, 0xF1F29E52],
    [0x6461FE08, 0xC7744918],
    [0xE27F90CF, 0x77F17DEC],
    [0xBF5902D5, 0x16DB6ED5],
    [0xEB8AAC34, 0xDC178F65],
    [0xD4D2A706, 0xA06377EF],
    [0xDCE3CD3F, 0xFE2D4144],
    [0xDAAA3A98, 0x7E3AA3CA],
    [0x6CD32143, 0xF1A4A2AA],
    [0x5B92C172, 0x83E2B9A0],
    [0x141E0174, 0xDF535976],
    [0x73667711, 0x348F833F],
    [0xC9F159F6, 0x0B065F91],
    [0x2638971E, 0x9D063B5F],
    [0x6BDF5832, 0xEB19FCDF],
    [0x7F0FEAC6, 0xBE7DEF5B],
    [0x8CC0AA89, 0xC75BB821],
    [0x917E7DD2, 0xC5287EDD],
    [0x71B5FA37, 0x61D6726D],
    [0xE4E11A71, 0xFE620E3A],
    [0xC28331AA, 0xB2612584],
    [0xFF05B24D, 0xA2980C99],
    [0xA7CE246E, 0x536B0941],
    [0xFA842BC0, 0x7360137D],
    [0xF8D72C40, 0x5D3F0456],
    [0xD4D5FA6C, 0x87342E6B],
    [0xD8CBC946, 0xFA660944],
    [0x0FAC3987, 0x19CD9E4A],
    [0x09C4BA79, 0x6548A019],
    [0x7E7C462B, 0xA7D473CF],
    [0x8A9A7AF1, 0x379840FB],
    [0xA0AA0097, 0xE5631019],
    [0xE278ECCF, 0x08EB2565],
    [0x1CF133B2, 0x6D8160D1],
    [0xDA08E9D3, 0x961C93F2],
    [0x58D97E6F, 0x3D1AEE86],
    [0x57353B77, 0x1188635E],
    [0xEB9AD118, 0x0D7E1B53],
    [0xAEC8DBD5, 0xF5337A9E],
    [0x49D08922, 0x136334CE],
    [0x138DF0B8, 0x66E902E0],
    [0xC076E860, 0x4740FF5F],
    [0x69FE38AE, 0x5970D450],
    [0x414200BD, 0x8AC11B40],
    [0xBCE9E85D, 0x31089FB2],
    [0x0817B919, 0x679C96D7],
    [0x3E0E5104, 0x3BD7D5E5],
    [0x86D17E28, 0xB2F2B91C],
    [0x115F906B, 0x6B7FB845],
    [0xA8D5E9B1, 0xC6CF1505],
    [0x69FFD3FE, 0xFDF7EE71],
    [0x571E6467, 0x78541F4D],
    [0xE8B5323E, 0xC07608E7],
    [0x27992DD6, 0x21B8A07E],
    [0x8E2A8439, 0xF5628513],
    [0x8B5BE21E, 0x70A84EED],
    [0x22729741, 0x6C6CCC7C],
    [0xB544DC85, 0x24419109],
    [0x6C2D9160, 0x672CBF95],
    [0x7FF66302, 0x86D2D93B],
    [0xC6DEECD2, 0xD1391713],
    [0x78BEC41D, 0xD27D8788],
    [0x0F86991A, 0x3B9AEC2B],
    [0x8F750FAB, 0xAA794130],
    [0x3C68E810, 0x2DBEC720],
    [0xF653B47B, 0xC8D4D1CD],
    [0xB50F4821, 0x49140FDA],
    [0xD61CC4E1, 0x4E7073F4],
    [0xFBA77B71, 0x7E43A39A],
    [0x85A236B5, 0x270BAC29],
    [0x818D37D3, 0x19D4C177],
    [0xC16FB31C, 0x74EB5E59],
    [0x598E133E, 0x0673B1E6],
    [0x4CB2E810, 0x1DF88D6F],
    [0x3F8ABFCD, 0x47711BE2],
    [0xCDB3F9ED, 0xBD51012F],
    [0xA28C9867, 0xB32A60E1],
    [0xB1E06CF5, 0xF6A790C2],
    [0xCFB9A7E6, 0x4443E95C],
    [0xF9EF74AC, 0x89BDFB7D],
    [0x561E1E17, 0xDFB055CE],
    [0x46967C2B, 0xC5D4D050],
    [0xDCDAEB30, 0x67868AD9],
    [0x18FAB58C, 0x80C85580],
    [0xBA4484D8, 0x24FB61AF],
    [0xB70FE5C5, 0xE12C7A1C],
    [0x7F5D26BA, 0x72161054],
    [0x79C1F27F, 0xA0F8C937],
    [0xE1E4F912, 0x5646AA8A],
    [0xD5CF3CE5, 0x81C59E40],
    [0x5509E33B, 0xC008BF09],
    [0x5ECB21AC, 0x94AA4B8F],
    [0x3786B394, 0x0E98628A],
    [0x54DE3943, 0x4BFE4F07],
    [0x919D24CC, 0x51244387],
    [0x9D020E39, 0x5E34DC9D],
    [0x35CD0DF4, 0x18D118D7],
    [0xF8C3EE3E, 0x6A9034F1],
    [0x77878D37, 0xCE7AF3DE],
    [0xC017329B, 0x350ECE41],
    [0xF593A4ED, 0xFF474F67],
    [0xE1972FBB, 0x1F007DDB],
    [0xFED8DE60, 0x81BB79A4],
    [0x4877977D, 0x05B312F3],
    [0x7EAA69DE, 0x94E0EFF1],
    [0xEE1270B0, 0xECF19FA9],
    [0x194E2CF7, 0x9077C167],
    [0x9DBFAFD7, 0x8A550632],
    [0xF95B5BBF, 0x7E04F6F7],
    [0x72EAB426, 0xF4800CDF],
    [0x0FBAAA06, 0x3A92E3FA],
    [0x1B837C9A, 0x98B7D123],
    [0x94F28E18, 0x1640E219],
    [0x5D931D29, 0xD1432B4C],
    [0xC50B5E9A, 0x5ADCAAE4],
    [0xEB779668, 0x4409ADFA],
    [0x13EF1128, 0x9CF31DAD],
    [0xD446D0EA, 0x96DFDF76],
    [0x04C56EC4, 0xE341A717],
    [0x82523F63, 0x86D6A38A],
    [0x520868BA, 0xFA84E471],
    [0x7AAB4382, 0x9C6BE9BE],
    [0xA00273B3, 0xD953E84D],
    [0x6B3EEB4D, 0xEBF6A39C],
    [0xA679E86E, 0xD8E96691],
    [0x39902539, 0x0570EA40],
    [0xB8489D19, 0x21C79D9E],
    [0xB47249CC, 0xC6C7528B],
    [0xEC5880DA, 0xA44D87CE],
    [0xBDA2730C, 0xB81E55E1],
    [0x1BE3E825, 0x5DDE31E3],
    [0x58B735F1, 0xA68C9A81],
    [0x5B3CB281, 0xD89019DB],
    [0x2B1A0269, 0xA3D890D4],
    [0x74E058FD, 0x628364C9],
    [0x3ADE68D4, 0x857395C0],
    [0x68F7F556, 0xAF1C2FC6],
    [0xAF67059D, 0xAAC6C89D],
    [0xC557FA24, 0xC5C887E8],
    [0xBAD0B0F6, 0xDC3B004C],
    [0x1838300A, 0x8BB9B8FF],
    [0xFFB4AFE3, 0x8BB4A3DD],
    [0x22CFB3E2, 0x9832A25A],
    [0xA86BBFE3, 0x5949B53E],
    [0x6F321ADD, 0xE08396E3],
    [0x58AFA638, 0x1EEB1425],
    [0x751DAF7D, 0x1A5401CB],
    [0xBD6B6682, 0x3F854F68],
    [0xCEB902B9, 0x3EBA45D8],
    [0x2550E145, 0xB93723AE],
    [0xB512188A, 0x55B8B698],
    [0x26E5BF2C, 0x66A9898D],
    [0xD93D0A17, 0x64E85D4D],
    [0x59EFD868, 0x058A402E],
    [0x93075C0F, 0xBB31F463],
    [0xDEDB6AE5, 0x18FAAC3D],
    [0xE997EDAE, 0x32A5FA3D],
    [0xE19E00AE, 0xBC8B309B],
    [0x10574A2A, 0xBFE8AB99],
    [0xBD2F4B5A, 0xB481D300],
    [0x1A253C2F, 0x40A38917],
    [0xC735E9F2, 0x8243EA8A],
    [0x52C250EA, 0xDE92393B],
    [0xF66E6BB5, 0xB0599B07],
    [0x8582B5A6, 0x0DBBF948],
    [0xFEA0D6AD, 0xFF136868],
    [0x19480B94, 0x6279507A],
    [0x6E6FDF59, 0xAB704242],
    [0x00014FCB, 0xC385AF6F],
    [0x000712DC, 0x5250B6F7],
    [0x003295F7, 0x198AE2AE],
    [0x003295F7, 0x198AE2C2],
    [0x003295F7, 0x198AE2B8],
    [0x00C1FF73, 0x963BD6EE],
    [0x00141711, 0x9B4FD22B],
    [0x0DAA20C3, 0x36EEAE72],
    [0x00BD86C0, 0xEE8C7342],
    [0x1E03B570, 0xB6145D1D],
    [0x1DA915AA, 0xA181A461],
    [0x1C82B6AB, 0x7487A5EC],
    [0x6D275D36, 0x66C2F9C8],
    [0x0F53815D, 0xF3044E6D],
    [0x158778E2, 0xE2FAB347],
    [0x16B75E8B, 0x5247D46B],
    [0x157DF8A6, 0x047048FC],
    [0x184D358B, 0x50B658D0],
    [0x157FB75A, 0xF4DDD983],
    [0x404BA38C, 0x3E470827],
    [0x01D0B788, 0xA3B60D48],
    [0x021718D5, 0x5D0960C9],
    [0x0021C599, 0x3D2B901C],
    [0x08237BCB, 0x9B711087],
    [0x01AF6040, 0x2E1228A5],
    [0x4EEC18AB, 0x73A1A634],
    [0x18550998, 0x98B11AD9],
    [0x57EF8F2E, 0xA5D54DB5],
    [0x17CC6975, 0xD67E2A1F],
    [0x0A5D0FC8, 0xCC5C4502],
    [0x198EA1A1, 0x7416050B],
    [0x2AA3B8AB, 0xAD207A1E],
    [0x4EE10A3E, 0x3BB19E57],
    [0x08AD2FE1, 0x2C79BCA9],
    [0x18488992, 0xB1632EF5],
    [0x1175EDBB, 0xACC1FC18],
    [0x0E14D06D, 0x7F7A6C8C],
    [0x33D98A3A, 0x9F9BFDEF],
    [0x2284FD5C, 0xA82C78F4],
    [0x178A76B6, 0x436D20F0],
    [0x3FF99F2F, 0xED65A1ED],
    [0x00000000, 0x0134172E],
    [0x0000BF32, 0x3EBFE0BA],
    [0x0017ECFB, 0x5201069A],
    [0x0074FF1F, 0xCE264700],
    [0x00000179, 0x54022A6F],
    [0x6615518E, 0x8ECED447],
    [0x007BAB95, 0x59510100],
    [0x04DFA8EE, 0xEE4903F8],
    [0x0000002B, 0x3CEB7781],
    [0x000712DC, 0x525289CF],
    [0x0007E319, 0x291DBE8A],
    [0x00000000, 0x06AE5AD9],
    [0x00BAA8AF, 0x36327EE6],
    [0x04D6CEF0, 0x656BF6CF],
    [0x0F213F15, 0x3D026E5F],
    [0x00234168, 0x3D2FDBA6],
    [0x00000000, 0x05D1FE07],
    [0x0076C19B, 0xDE43685C],
    [0x00F2AE8D, 0xE77F0800],
    [0x3CDD0995, 0x259D604C],
    [0x70A10742, 0x24880050], //The Eminence in Shadow: Master of Garden (Android)
];
class HCACipher {
    constructor(key1, key2) {
        this.cipherType = 0;
        this.encrypt = false;
        this.key1buf = new ArrayBuffer(4);
        this.key2buf = new ArrayBuffer(4);
        this._table = new Uint8Array(256);
        this.dv1 = new DataView(this.key1buf);
        this.dv2 = new DataView(this.key2buf);
        if (key1 == null)
            throw new Error("no keys given. use \"defaultkey\" if you want to use the default key");
        switch (key1) {
            case "none":
            case "nokey":
            case "noKey":
            case "no key":
            case "no_Key":
                this.setToNoKey();
                break;
            case "defaultkey":
            case "defaultKey":
            case "default key":
            case "default_key":
                this.setToDefKeys();
                break;
            default:
                key1 = HCACipher.parseKey(key1);
                if (key2 == null) {
                    key2 = 0;
                }
                else {
                    key2 = HCACipher.parseKey(key2);
                }
                this.setKeys(key1, key2);
        }
    }
    init1() {
        for (let i = 1, v = 0; i < 0xFF; i++) {
            v = (v * 13 + 11) & 0xFF;
            if (v == 0 || v == 0xFF)
                v = (v * 13 + 11) & 0xFF;
            this._table[i] = v;
        }
        this._table[0] = 0;
        this._table[0xFF] = 0xFF;
    }
    init56() {
        let key1 = this.dv1.getUint32(0, true);
        let key2 = this.dv2.getUint32(0, true);
        if (!key1)
            key2--;
        key1--;
        this.dv1.setUint32(0, key1, true);
        this.dv2.setUint32(0, key2, true);
        let t1 = this.getBytesOfTwoKeys();
        let t2 = new Uint8Array([
            t1[1], t1[1] ^ t1[6], t1[2] ^ t1[3],
            t1[2], t1[2] ^ t1[1], t1[3] ^ t1[4],
            t1[3], t1[3] ^ t1[2], t1[4] ^ t1[5],
            t1[4], t1[4] ^ t1[3], t1[5] ^ t1[6],
            t1[5], t1[5] ^ t1[4], t1[6] ^ t1[1],
            t1[6]
        ]);
        let t3 = new Uint8Array(0x100);
        let t31 = new Uint8Array(0x10);
        let t32 = new Uint8Array(0x10);
        this.createTable(t31, t1[0]);
        for (let i = 0, t = 0; i < 0x10; i++) {
            this.createTable(t32, t2[i]);
            let v = t31[i] << 4;
            for (let j = 0; j < 0x10; j++) {
                t3[t++] = v | t32[j];
            }
        }
        for (let i = 0, v = 0, t = 1; i < 0x100; i++) {
            v = (v + 0x11) & 0xFF;
            let a = t3[v];
            if (a != 0 && a != 0xFF)
                this._table[t++] = a;
        }
        this._table[0] = 0;
        this._table[0xFF] = 0xFF;
    }
    createTable(r, key) {
        let mul = ((key & 1) << 3) | 5;
        let add = (key & 0xE) | 1;
        let t = 0;
        key >>= 4;
        for (let i = 0; i < 0x10; i++) {
            key = (key * mul + add) & 0xF;
            r[t++] = key;
        }
    }
    invertTable() {
        // actually, this method switch the mode between encrypt/decrypt
        this.encrypt = !this.encrypt;
        let _old_table = this._table.slice(0);
        let bitMap = new Uint16Array(16);
        for (let i = 0; i < 256; i++) {
            // invert key and value
            let key = _old_table[i];
            let val = i;
            // check for inconsistency
            let higher4 = key >> 4 & 0x0F;
            let lower4 = key & 0x0F;
            let flag = 0x01 << lower4;
            if (bitMap[higher4] & flag)
                throw new Error("_table is not bijective");
            // update table
            this._table[key] = val;
        }
        return this;
    }
    getType() {
        return this.cipherType;
    }
    getEncrypt() {
        return this.encrypt;
    }
    getBytesOfTwoKeys() {
        let buf = new Uint8Array(8);
        buf.set(new Uint8Array(this.key1buf), 0);
        buf.set(new Uint8Array(this.key2buf), 4);
        return buf;
    }
    static bigUintMultiplyLE(dv, factor) {
        const result = new DataView(new ArrayBuffer(dv.byteLength + 4));
        factor = Math.trunc(factor);
        Array.from({ length: dv.byteLength }, (_, i) => factor * dv.getUint8(i))
            .forEach((v, i) => {
            v += result.getUint32(i, true);
            result.setUint32(i, v, true);
            v -= result.getUint32(i, true);
            if (v > 0) {
                v /= 0x100000000;
                for (let j = i + 4; j < result.byteLength; j++) {
                    v += result.getUint8(j);
                    result.setUint8(j, v);
                    v -= result.getUint8(j);
                    if (v > 0)
                        v /= 0x100;
                    else
                        break;
                }
            }
        });
        return result;
    }
    static mixWithSubkey(key1, key2, subkey) {
        // https://github.com/vgmstream/vgmstream/blob/84cfeaf993982b4245ce7593dcbb6816c5aee8bc/src/coding/hca_decoder.c#L313
        /*
            if (subkey) {
                keycode = keycode * ( ((uint64_t)subkey << 16u) | ((uint16_t)~subkey + 2u) );
            }
        */
        if (subkey == null)
            return { key1: key1, key2: key2 };
        key1 = HCACipher.parseKey(key1);
        key2 = HCACipher.parseKey(key2);
        subkey = HCACipher.parseKey(subkey);
        const keydv = new DataView(new ArrayBuffer(8));
        keydv.setUint32(0, key1, true);
        keydv.setUint32(4, key2, true);
        const subkeydv = new DataView(new ArrayBuffer(4));
        subkeydv.setUint16(2, subkey, true);
        if (subkeydv.getUint16(2) == 0)
            return { key1: key1, key2: key2 }; //unchanged
        subkeydv.setUint16(0, ~subkeydv.getUint16(2, true) + 2, true);
        subkey = subkeydv.getUint32(0, true);
        const mixedkeydv = this.bigUintMultiplyLE(keydv, subkey);
        key1 = mixedkeydv.getUint32(0, true);
        key2 = mixedkeydv.getUint32(4, true);
        return { key1: key1, key2: key2 };
    }
    setKeys(key1, key2) {
        this.dv1.setUint32(0, key1, true);
        this.dv2.setUint32(0, key2, true);
        this.init56();
        this.cipherType = 0x38;
        return this;
    }
    setToDefKeys() {
        return this.setKeys(HCACipher.defKey1, HCACipher.defKey2);
    }
    setToNoKey() {
        this.init1();
        this.cipherType = 0x01;
        return this;
    }
    mask(block, offset, size) {
        // encrypt or decrypt block data
        for (let i = 0; i < size; i++)
            block[offset + i] = this._table[block[offset + i]];
    }
    static isHCAHeaderMasked(hca) {
        // fast & dirty way to determine whether encrypted, not recommended
        if (hca[0] & 0x80 || hca[1] & 0x80 || hca[2] & 0x80)
            return true;
        else
            return false;
    }
    static parseKey(key) {
        switch (typeof key) {
            case "number":
                return key;
            case "string":
                // avoid ambiguity: always treat as hex
                if (!key.match(/^0x/))
                    key = "0x" + key;
                key = parseInt(key);
                if (isNaN(key))
                    throw new Error("cannot parse as integer");
                return key;
            case "object":
                // avoid endianness ambiguity: only accepting Uint8Array, then read as little endian
                if (key instanceof Uint8Array && key.byteLength == 4) {
                    return new DataView(key.buffer, key.byteOffset, key.byteLength).getUint32(0, true);
                }
            default:
                throw new Error("can only accept number/hex string/Uint8Array[4]");
        }
    }
}
HCACipher.defKey1 = 0x01395C51;
HCACipher.defKey2 = 0x00000000;

const SubframesPerFrame = 8;
const SubFrameSamplesBits = 7;
const SamplesPerSubFrame = 1 << SubFrameSamplesBits;
const SamplesPerFrame = SubframesPerFrame *
    SamplesPerSubFrame;

function DivideByRoundUp(value, divisor) {
    return Math.ceil(value / divisor) >> 0;
}
function GetHighNibble(value) {
    if (value > 0xff)
        throw new Error();
    if (value < -0x80)
        throw new Error();
    return (value >>> 4) & 0xF;
}
function GetLowNibble(value) {
    if (value > 0xff)
        throw new Error();
    if (value < -0x80)
        throw new Error();
    return value & 0xF;
}
function GetNextMultiple(value, multiple) {
    if (multiple <= 0) {
        return value;
    }
    if (value % multiple == 0) {
        return value;
    }
    return value + multiple - value % multiple;
}
function SignedBitReverse32(value) {
    if (value > 0xffffffff)
        throw new Error();
    if (value < -0x80000000)
        throw new Error();
    const val = new Uint32Array([value]);
    val[0] = ((val[0] & 0xaaaaaaaa) >>> 1) | ((val[0] & 0x55555555) << 1);
    val[0] = ((val[0] & 0xcccccccc) >>> 2) | ((val[0] & 0x33333333) << 2);
    val[0] = ((val[0] & 0xf0f0f0f0) >>> 4) | ((val[0] & 0x0f0f0f0f) << 4);
    val[0] = ((val[0] & 0xff00ff00) >>> 8) | ((val[0] & 0x00ff00ff) << 8);
    return (val[0] >>> 16) | (val[0] << 16);
}
function UnsignedBitReverse32(value) {
    return SignedBitReverse32(value) >>> 0;
}
function UnsignedBitReverse32Trunc(value, bitCount) {
    return UnsignedBitReverse32(value) >>> (32 - bitCount);
}
function SignedBitReverse32Trunc(value, bitCount) {
    return UnsignedBitReverse32Trunc(value >>> 0, bitCount);
}
function Clamp(value, min, max) {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}
function DebugAssert(condition) {
    if (!condition)
        throw new Error("DebugAssert failed");
}
const suspendAudioCtxIfUnlocked = async (audioCtx) => {
    // suspend audio context for now
    // in apple webkit it's already suspended & calling suspend yet again will block
    switch (audioCtx.state) {
        case "running":
            await audioCtx.suspend();
            return true;
        case "suspended":
            console.warn(`audio context for sampleRate=${audioCtx.sampleRate} is suspended/locked,`
                + ` which can only be resumed/unlocked by UI event.`);
            return false;
        default:
            throw new Error(`audio context is neither running nor suspended`);
    }
};
function arrayCopy(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
    if (length === undefined) {
        length = Math.min(sourceArray.length - sourceIndex, destinationArray.length - destinationIndex);
    }
    for (let i = 0; i < length; i++) {
        destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
    }
}
function arrayClear(array, start, length) {
    if (start === undefined) {
        start = 0;
    }
    if (length === undefined) {
        length = array.length;
    }
    for (let i = start; i < start + length; i++) {
        array[i] = 0; // Set elements to 0
    }
}

class BitReader {
    constructor(buffer) {
        this.Buffer = buffer;
        this.dv = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        this.LengthBits = buffer.length * 8;
        this.Position = 0;
    }
    get Remaining() {
        return this.LengthBits - this.Position;
    }
    ReadInt(bitCount) {
        let value = this.PeekInt(bitCount);
        this.Position += bitCount;
        return value;
    }
    ReadBool() {
        return this.ReadInt(1) == 1;
    }
    ReadOffsetBinary(bitCount, bias) {
        let offset = (1 << (bitCount - 1)) - bias;
        let value = this.PeekInt(bitCount) - offset;
        this.Position += bitCount;
        return value;
    }
    AlignPosition(multiple) {
        this.Position = GetNextMultiple(this.Position, multiple);
    }
    PeekInt(bitCount) {
        DebugAssert(bitCount >= 0 && bitCount <= 32);
        if (bitCount > this.Remaining) {
            if (this.Position >= this.LengthBits)
                return 0;
            let extraBits = bitCount - this.Remaining;
            return this.PeekIntFallback(this.Remaining) << extraBits;
        }
        let byteIndex = this.Position / 8;
        let bitIndex = this.Position % 8;
        if (bitCount <= 9 && this.Remaining >= 16) {
            let value = this.dv.getUint16(byteIndex);
            value &= 0xFFFF >> bitIndex;
            value >>= 16 - bitCount - bitIndex;
            return value;
        }
        if (bitCount <= 17 && this.Remaining >= 24) {
            let value = this.dv.getUint16(byteIndex) << 8 |
                this.dv.getUint8(byteIndex + 2);
            value &= 0xFFFFFF >> bitIndex;
            value >>= 24 - bitCount - bitIndex;
            return value;
        }
        if (bitCount <= 25 && this.Remaining >= 32) {
            let value = this.dv.getUint32(byteIndex);
            value &= 0xFFFFFFFF >>> bitIndex;
            value >>= 32 - bitCount - bitIndex;
            return value;
        }
        return this.PeekIntFallback(bitCount);
    }
    PeekIntFallback(bitCount) {
        let value = 0;
        let byteIndex = this.Position / 8;
        let bitIndex = this.Position % 8;
        while (bitCount > 0) {
            if (bitIndex >= 8) {
                bitIndex = 0;
                byteIndex++;
            }
            let bitsToRead = Math.min(bitCount, 8 - bitIndex);
            let mask = 0xFF >> bitIndex;
            let currentByte = (mask & this.dv.getUint8(byteIndex)) >>
                (8 - bitIndex - bitsToRead);
            value = (value << bitsToRead) | currentByte;
            bitIndex += bitsToRead;
            bitCount -= bitsToRead;
        }
        return value;
    }
}
(function (BitReader) {
    (function (OffsetBias) {
        OffsetBias[OffsetBias["Positive"] = 1] = "Positive";
        OffsetBias[OffsetBias["Negative"] = 0] = "Negative";
    })(BitReader.OffsetBias || (BitReader.OffsetBias = {}));
})(BitReader || (BitReader = {}));
var HCABitReader = BitReader;

var HCAChannelType;
(function (HCAChannelType) {
    HCAChannelType[HCAChannelType["Discrete"] = 0] = "Discrete";
    HCAChannelType[HCAChannelType["StereoPrimary"] = 1] = "StereoPrimary";
    HCAChannelType[HCAChannelType["StereoSecondary"] = 2] = "StereoSecondary";
})(HCAChannelType || (HCAChannelType = {}));
var ChannelType = HCAChannelType;

class BitWriter {
    constructor(buffer) {
        this.Position = 0;
        this.Buffer = buffer;
        this.dv = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        this.LengthBits = buffer.length * 8;
    }
    get Remaining() {
        return this.LengthBits - this.Position;
    }
    AlignPosition(multiple) {
        let newPosition = GetNextMultiple(this.Position, multiple);
        let bits = newPosition - this.Position;
        this.Write(0, bits);
    }
    Read(destinationArray, index, len) {
        for (let i = 0; i < len; i++) {
            destinationArray[i] = this.Buffer[index + i];
        }
        this.Position = (index + len) * 8;
    }
    WriteStream(src, startIndex, len) {
        for (let i = 0; i < len; i++) {
            this.Buffer[this.Position / 8] = src[startIndex + i];
            this.Position += 8;
        }
    }
    WriteString(str) {
        const te = new TextEncoder();
        const buf = te.encode(str);
        for (let i = 0; i < buf.length; i++) {
            this.Write(buf[i], 8);
        }
    }
    Write(value, bitCount) {
        DebugAssert(bitCount >= 0 && bitCount <= 32);
        if (bitCount > this.Remaining) {
            throw new Error("Not enough bits left in output buffer");
        }
        let byteIndex = this.Position / 8;
        let bitIndex = this.Position % 8;
        if (bitCount <= 9 && this.Remaining >= 16) {
            let outValue = ((value << (16 - bitCount)) & 0xFFFF) >> bitIndex;
            outValue |= this.dv.getUint16(byteIndex);
            this.dv.setUint16(byteIndex, outValue);
        }
        else if (bitCount <= 17 && this.Remaining >= 24) {
            let outValue = ((value << (24 - bitCount)) & 0xFFFFFF) >> bitIndex;
            outValue |= this.dv.getUint16(byteIndex) << 8 |
                this.dv.getUint8(byteIndex + 2);
            this.dv.setUint16(byteIndex, outValue >>> 8);
            this.dv.setUint8(byteIndex + 2, outValue & 0xFF);
        }
        else if (bitCount <= 25 && this.Remaining >= 32) {
            let outValue = (((value << (32 - bitCount)) & 0xFFFFFFFF) >>> bitIndex);
            outValue |= this.dv.getUint32(byteIndex);
            this.dv.setUint32(byteIndex, outValue);
        }
        else {
            this.WriteFallback(value, bitCount);
        }
        this.Position += bitCount;
    }
    WriteFallback(value, bitCount) {
        let byteIndex = this.Position / 8;
        let bitIndex = this.Position % 8;
        while (bitCount > 0) {
            if (bitIndex >= 8) {
                bitIndex = 0;
                byteIndex++;
            }
            let toShift = 8 - bitIndex - bitCount;
            let shifted = toShift < 0 ? value >>> -toShift : value << toShift;
            let bitsToWrite = Math.min(bitCount, 8 - bitIndex);
            let mask = ((1 << bitsToWrite) - 1) << 8 - bitIndex - bitsToWrite;
            let outByte = this.dv.getUint8(byteIndex) & ~mask;
            outByte |= shifted & mask;
            this.dv.setUint8(byteIndex, outByte);
            bitIndex += bitsToWrite;
            bitCount -= bitsToWrite;
        }
    }
}

class Crc16 {
    static calc(data, size) {
        if (size > data.byteLength)
            throw new Error();
        if (size < 0)
            throw new Error();
        let sum = 0;
        for (let i = 0; i < size; i++) {
            sum = ((sum << 8) ^ this._v[(sum >> 8) ^ data[i]]) & 0x0000ffff;
        }
        return sum & 0x0000ffff;
    }
    static verify(data, size, expected, doNotThrow = false) {
        if (expected == null) {
            expected = new DataView(data.buffer, data.byteOffset, data.byteLength)
                .getUint16(size);
        }
        let actual = this.calc(data, size);
        let result = expected == actual;
        if (!result) {
            function toHex(num) {
                const padding = "0000";
                let hex = padding + num.toString(padding.length * 4).toUpperCase();
                return "0x" + hex.substring(hex.length - padding.length, hex.length);
            }
            let msg = `checksum mismatch (expected=${toHex(expected)} actual=${toHex(actual)})`;
            if (doNotThrow)
                console.error(msg);
            else
                throw new Error(msg);
        }
        return result;
    }
    static fix(data, size) {
        let newCrc16 = this.calc(data, size);
        new DataView(data.buffer, data.byteOffset, data.byteLength).setUint16(size, newCrc16);
        return data;
    }
}
Crc16._v = new Uint16Array([
    0x0000, 0x8005, 0x800F, 0x000A, 0x801B, 0x001E, 0x0014, 0x8011, 0x8033, 0x0036, 0x003C, 0x8039, 0x0028, 0x802D, 0x8027, 0x0022,
    0x8063, 0x0066, 0x006C, 0x8069, 0x0078, 0x807D, 0x8077, 0x0072, 0x0050, 0x8055, 0x805F, 0x005A, 0x804B, 0x004E, 0x0044, 0x8041,
    0x80C3, 0x00C6, 0x00CC, 0x80C9, 0x00D8, 0x80DD, 0x80D7, 0x00D2, 0x00F0, 0x80F5, 0x80FF, 0x00FA, 0x80EB, 0x00EE, 0x00E4, 0x80E1,
    0x00A0, 0x80A5, 0x80AF, 0x00AA, 0x80BB, 0x00BE, 0x00B4, 0x80B1, 0x8093, 0x0096, 0x009C, 0x8099, 0x0088, 0x808D, 0x8087, 0x0082,
    0x8183, 0x0186, 0x018C, 0x8189, 0x0198, 0x819D, 0x8197, 0x0192, 0x01B0, 0x81B5, 0x81BF, 0x01BA, 0x81AB, 0x01AE, 0x01A4, 0x81A1,
    0x01E0, 0x81E5, 0x81EF, 0x01EA, 0x81FB, 0x01FE, 0x01F4, 0x81F1, 0x81D3, 0x01D6, 0x01DC, 0x81D9, 0x01C8, 0x81CD, 0x81C7, 0x01C2,
    0x0140, 0x8145, 0x814F, 0x014A, 0x815B, 0x015E, 0x0154, 0x8151, 0x8173, 0x0176, 0x017C, 0x8179, 0x0168, 0x816D, 0x8167, 0x0162,
    0x8123, 0x0126, 0x012C, 0x8129, 0x0138, 0x813D, 0x8137, 0x0132, 0x0110, 0x8115, 0x811F, 0x011A, 0x810B, 0x010E, 0x0104, 0x8101,
    0x8303, 0x0306, 0x030C, 0x8309, 0x0318, 0x831D, 0x8317, 0x0312, 0x0330, 0x8335, 0x833F, 0x033A, 0x832B, 0x032E, 0x0324, 0x8321,
    0x0360, 0x8365, 0x836F, 0x036A, 0x837B, 0x037E, 0x0374, 0x8371, 0x8353, 0x0356, 0x035C, 0x8359, 0x0348, 0x834D, 0x8347, 0x0342,
    0x03C0, 0x83C5, 0x83CF, 0x03CA, 0x83DB, 0x03DE, 0x03D4, 0x83D1, 0x83F3, 0x03F6, 0x03FC, 0x83F9, 0x03E8, 0x83ED, 0x83E7, 0x03E2,
    0x83A3, 0x03A6, 0x03AC, 0x83A9, 0x03B8, 0x83BD, 0x83B7, 0x03B2, 0x0390, 0x8395, 0x839F, 0x039A, 0x838B, 0x038E, 0x0384, 0x8381,
    0x0280, 0x8285, 0x828F, 0x028A, 0x829B, 0x029E, 0x0294, 0x8291, 0x82B3, 0x02B6, 0x02BC, 0x82B9, 0x02A8, 0x82AD, 0x82A7, 0x02A2,
    0x82E3, 0x02E6, 0x02EC, 0x82E9, 0x02F8, 0x82FD, 0x82F7, 0x02F2, 0x02D0, 0x82D5, 0x82DF, 0x02DA, 0x82CB, 0x02CE, 0x02C4, 0x82C1,
    0x8243, 0x0246, 0x024C, 0x8249, 0x0258, 0x825D, 0x8257, 0x0252, 0x0270, 0x8275, 0x827F, 0x027A, 0x826B, 0x026E, 0x0264, 0x8261,
    0x0220, 0x8225, 0x822F, 0x022A, 0x823B, 0x023E, 0x0234, 0x8231, 0x8213, 0x0216, 0x021C, 0x8219, 0x0208, 0x820D, 0x8207, 0x0202
]);

class Mdct {
    constructor(mdctBits, window, scale = 1) {
        Mdct.SetTables(mdctBits);
        Mdct.SinTables = [
            new Float64Array(new Uint8Array([0xCC, 0x3B, 0x7F, 0x66, 0x9E, 0xA0, 0xE6, 0x3F]).buffer),
            new Float64Array(new Uint8Array([0x63, 0xA9, 0xAE, 0xA6, 0xE2, 0x7D, 0xD8, 0x3F, 0x46, 0x8D, 0x32, 0xCF, 0x6B, 0x90, 0xED, 0x3F]).buffer),
            new Float64Array(new Uint8Array([0x0A, 0xA6, 0x69, 0x3C, 0xB8, 0xF8, 0xC8, 0x3F, 0xA3, 0xA1, 0x0E, 0x29, 0x66, 0x9B, 0xEA, 0x3F, 0xB0, 0x5C, 0xF7, 0xCF, 0x97, 0x62, 0xEF, 0x3F, 0xC8, 0x68, 0xAE, 0x39, 0x3B, 0xC7, 0xE1, 0x3F]).buffer),
            new Float64Array(new Uint8Array([0x2C, 0xB4, 0x29, 0xBC, 0xA6, 0x17, 0xB9, 0x3F, 0x3B, 0xF6, 0x06, 0x38, 0x5D, 0x2B, 0xDE, 0x3F, 0x41, 0x17, 0x15, 0x6B, 0x80, 0xBC, 0xE8, 0x3F, 0xDB, 0x2D, 0xC6, 0x56, 0x41, 0x9F, 0xEE, 0x3F, 0x26, 0x25, 0xD1, 0xA3, 0x8D, 0xD8, 0xEF, 0x3F, 0xB1, 0xBD, 0x80, 0xF1, 0xB2, 0x38, 0xEC, 0x3F, 0xD6, 0x1D, 0x09, 0x25, 0xF3, 0x4C, 0xE4, 0x3F, 0x06, 0x9F, 0xD5, 0x2E, 0x06, 0x94, 0xD2, 0x3F]).buffer),
            new Float64Array(new Uint8Array([0x14, 0xD8, 0x0D, 0xF1, 0x65, 0x1F, 0xA9, 0x3F, 0x1A, 0x5F, 0x21, 0x7B, 0xF9, 0x19, 0xCF, 0x3F, 0xC0, 0x5C, 0xE1, 0x09, 0x10, 0x5D, 0xDB, 0x3F, 0x35, 0x70, 0xE1, 0xFC, 0xF7, 0x0F, 0xE3, 0x3F, 0xAF, 0xAF, 0x6A, 0x22, 0xDF, 0xB5, 0xE7, 0x3F, 0x3E, 0x6E, 0x19, 0x45, 0x83, 0x72, 0xEB, 0x3F, 0xE5, 0x86, 0xF6, 0x04, 0x21, 0x21, 0xEE, 0x3F, 0x17, 0xA5, 0x08, 0x7F, 0x55, 0xA7, 0xEF, 0x3F, 0x7E, 0x6D, 0x79, 0xE3, 0x21, 0xF6, 0xEF, 0x3F, 0xD7, 0x30, 0x92, 0xFB, 0x7E, 0x0A, 0xEF, 0x3F, 0x74, 0xC7, 0x3C, 0xF4, 0x7A, 0xED, 0xEC, 0x3F, 0x41, 0x87, 0xF3, 0x47, 0xE0, 0xB3, 0xE9, 0x3F, 0xA1, 0xEC, 0x8C, 0x34, 0x69, 0x7D, 0xE5, 0x3F, 0xEE, 0xFF, 0x22, 0x99, 0x87, 0x73, 0xE0, 0x3F, 0xE2, 0x1F, 0xAB, 0x75, 0x9A, 0x8F, 0xD5, 0x3F, 0x3C, 0x61, 0x8E, 0x6E, 0x10, 0xC8, 0xC2, 0x3F]).buffer),
            new Float64Array(new Uint8Array([0x7E, 0x66, 0xA3, 0xF7, 0x55, 0x21, 0x99, 0x3F, 0x0E, 0x73, 0xA9, 0x56, 0x4E, 0x56, 0xBF, 0x3F, 0x63, 0x4F, 0x7E, 0x6A, 0x82, 0x0B, 0xCC, 0x3F, 0x02, 0x66, 0x17, 0x94, 0x5C, 0x13, 0xD4, 0x3F, 0x8A, 0xED, 0xA8, 0x43, 0x79, 0xEF, 0xD9, 0x3F, 0xBA, 0x9A, 0xF8, 0xDB, 0xA4, 0x8B, 0xDF, 0x3F, 0xDF, 0x12, 0xDD, 0x4C, 0x05, 0x6D, 0xE2, 0x3F, 0xE9, 0xE5, 0xE3, 0xBB, 0xCA, 0xE6, 0xE4, 0x3F, 0x96, 0xFF, 0xEF, 0x37, 0x08, 0x2D, 0xE7, 0x3F, 0xFB, 0x63, 0x92, 0x49, 0x22, 0x3A, 0xE9, 0x3F, 0xFF, 0x01, 0x15, 0x58, 0x0A, 0x09, 0xEB, 0x3F, 0xF5, 0x11, 0x34, 0x21, 0x4B, 0x95, 0xEC, 0x3F, 0x3C, 0xC2, 0xCC, 0xB6, 0x13, 0xDB, 0xED, 0x3F, 0x63, 0x49, 0x68, 0xE7, 0x40, 0xD7, 0xEE, 0x3F, 0xA9, 0x4B, 0x71, 0xFA, 0x64, 0x87, 0xEF, 0x3F, 0x3A, 0x88, 0x01, 0xAD, 0xCD, 0xE9, 0xEF, 0x3F, 0x0D, 0xCD, 0x84, 0x60, 0x88, 0xFD, 0xEF, 0x3F, 0xD3, 0x9F, 0xE1, 0x70, 0x64, 0xC2, 0xEF, 0x3F, 0x89, 0xE5, 0x64, 0xAC, 0xF3, 0x38, 0xEF, 0x3F, 0x12, 0xE1, 0x48, 0xEC, 0x88, 0x62, 0xEE, 0x3F, 0x3A, 0xC9, 0x4D, 0xD1, 0x34, 0x41, 0xED, 0x3F, 0x2A, 0x95, 0x6F, 0xAC, 0xC0, 0xD7, 0xEB, 0x3F, 0x82, 0x27, 0x46, 0xA0, 0xA7, 0x29, 0xEA, 0x3F, 0x6F, 0x97, 0xFF, 0x0B, 0x0E, 0x3B, 0xE8, 0x3F, 0xE0, 0x2C, 0x1D, 0x55, 0xB7, 0x10, 0xE6, 0x3F, 0xBA, 0x50, 0x20, 0x29, 0xFA, 0xAF, 0xE3, 0x3F, 0x22, 0x4B, 0x1B, 0x54, 0xB3, 0x1E, 0xE1, 0x3F, 0x63, 0xC4, 0x31, 0x99, 0x6E, 0xC6, 0xDC, 0x3F, 0xA2, 0x45, 0xFA, 0x30, 0x85, 0x08, 0xD7, 0x3F, 0x79, 0xF6, 0xB1, 0x62, 0xD2, 0x11, 0xD1, 0x3F, 0xC6, 0x3F, 0x8B, 0x44, 0x14, 0xE2, 0xC5, 0x3F, 0x0C, 0x1A, 0xCE, 0x92, 0x20, 0xD5, 0xB2, 0x3F]).buffer),
            new Float64Array(new Uint8Array([0x84, 0xC7, 0xDE, 0xFC, 0xD1, 0x21, 0x89, 0x3F, 0xE0, 0x20, 0xF8, 0x79, 0x6E, 0x65, 0xAF, 0x3F, 0xD5, 0xC2, 0x9E, 0xC7, 0x85, 0x37, 0xBC, 0x3F, 0x5A, 0x3E, 0x29, 0xB1, 0x76, 0x55, 0xC4, 0x3F, 0x51, 0x04, 0xB0, 0x25, 0xA0, 0x82, 0xCA, 0x3F, 0xAE, 0xFD, 0x37, 0x0E, 0xB8, 0x4F, 0xD0, 0x3F, 0x52, 0x81, 0xE1, 0xC2, 0x10, 0x54, 0xD3, 0x3F, 0xC6, 0x27, 0x3F, 0xDD, 0x7D, 0x4C, 0xD6, 0x3F, 0xD7, 0x93, 0xBC, 0x63, 0x2A, 0x37, 0xD9, 0x3F, 0xE7, 0x1E, 0x01, 0xD8, 0x49, 0x12, 0xDC, 0x3F, 0xD5, 0x78, 0xEF, 0x52, 0x19, 0xDC, 0xDE, 0x3F, 0x8F, 0x89, 0x5D, 0x4D, 0x70, 0xC9, 0xE0, 0x3F, 0x58, 0xEB, 0x33, 0x99, 0x79, 0x1A, 0xE2, 0x3F, 0xF3, 0x59, 0x06, 0xB1, 0x58, 0x60, 0xE3, 0x3F, 0x38, 0x09, 0x9B, 0x9B, 0x44, 0x9A, 0xE4, 0x3F, 0x8C, 0x01, 0x65, 0xBE, 0x7B, 0xC7, 0xE5, 0x3F, 0xAE, 0xA8, 0xEA, 0x54, 0x44, 0xE7, 0xE6, 0x3F, 0x70, 0x17, 0x57, 0xE3, 0xEC, 0xF8, 0xE7, 0x3F, 0x0C, 0x94, 0xEF, 0xA3, 0xCC, 0xFB, 0xE8, 0x3F, 0x94, 0xAF, 0x29, 0xEF, 0x43, 0xEF, 0xE9, 0x3F, 0x10, 0xD5, 0x21, 0x9E, 0xBC, 0xD2, 0xEA, 0x3F, 0xD2, 0x90, 0x35, 0x67, 0xAA, 0xA5, 0xEB, 0x3F, 0x9B, 0x73, 0x88, 0x34, 0x8B, 0x67, 0xEC, 0x3F, 0xDB, 0x35, 0x3E, 0x74, 0xE7, 0x17, 0xED, 0x3F, 0x9A, 0xA0, 0x38, 0x62, 0x52, 0xB6, 0xED, 0x3F, 0x7E, 0xC1, 0x2B, 0x4B, 0x6A, 0x42, 0xEE, 0x3F, 0x74, 0x0B, 0xDF, 0xC8, 0xD8, 0xBB, 0xEE, 0x3F, 0xD9, 0x3A, 0x76, 0xF7, 0x52, 0x22, 0xEF, 0x3F, 0x77, 0x20, 0xA1, 0xA3, 0x99, 0x75, 0xEF, 0x3F, 0x41, 0xD7, 0x95, 0x71, 0x79, 0xB5, 0xEF, 0x3F, 0x09, 0x5B, 0xBD, 0xFC, 0xCA, 0xE1, 0xEF, 0x3F, 0x5D, 0xF7, 0xFE, 0xEF, 0x72, 0xFA, 0xEF, 0x3F, 0xDB, 0x92, 0x9B, 0x16, 0x62, 0xFF, 0xEF, 0x3F, 0xAD, 0x71, 0x8E, 0x65, 0x95, 0xF0, 0xEF, 0x3F, 0x7B, 0xA6, 0x6D, 0xFD, 0x15, 0xCE, 0xEF, 0x3F, 0x9B, 0x09, 0xC9, 0x24, 0xF9, 0x97, 0xEF, 0x3F, 0x2D, 0x2F, 0x0B, 0x3B, 0x60, 0x4E, 0xEF, 0x3F, 0xC2, 0x73, 0xE4, 0xA3, 0x78, 0xF1, 0xEE, 0x3F, 0x0D, 0xD1, 0x4C, 0xAB, 0x7B, 0x81, 0xEE, 0x3F, 0x2B, 0xBE, 0x2D, 0x62, 0xAE, 0xFE, 0xED, 0x3F, 0x8B, 0xE6, 0xC9, 0x73, 0x61, 0x69, 0xED, 0x3F, 0x5D, 0xFC, 0xFC, 0xF3, 0xF0, 0xC1, 0xEC, 0x3F, 0x49, 0x55, 0x72, 0x26, 0xC4, 0x08, 0xEC, 0x3F, 0x12, 0x57, 0xF5, 0x3E, 0x4D, 0x3E, 0xEB, 0x3F, 0xE1, 0xFA, 0x02, 0x1B, 0x09, 0x63, 0xEA, 0x3F, 0x42, 0xD7, 0xC7, 0xF4, 0x7E, 0x77, 0xE9, 0x3F, 0xC0, 0x2E, 0xBA, 0x0F, 0x40, 0x7C, 0xE8, 0x3F, 0x61, 0x72, 0x03, 0x5F, 0xE7, 0x71, 0xE7, 0x3F, 0x3E, 0x78, 0xF0, 0x25, 0x19, 0x59, 0xE6, 0x3F, 0x98, 0x55, 0xA3, 0x92, 0x82, 0x32, 0xE5, 0x3F, 0xD4, 0x56, 0x45, 0x53, 0xD9, 0xFE, 0xE3, 0x3F, 0xEB, 0xF3, 0xFA, 0x25, 0xDB, 0xBE, 0xE2, 0x3F, 0x48, 0xDB, 0xDE, 0x63, 0x4D, 0x73, 0xE1, 0x3F, 0xB8, 0x3E, 0x4C, 0x87, 0xFC, 0x1C, 0xE0, 0x3F, 0x8D, 0xE3, 0x86, 0x5B, 0x77, 0x79, 0xDD, 0x3F, 0xC9, 0x3F, 0x6D, 0x2B, 0xC8, 0xA6, 0xDA, 0x3F, 0xEA, 0xCC, 0x1D, 0x31, 0xA9, 0xC3, 0xD7, 0x3F, 0x70, 0xE7, 0x78, 0x42, 0xE2, 0xD1, 0xD4, 0x3F, 0x3F, 0xDB, 0x4C, 0x3F, 0x44, 0xD3, 0xD1, 0x3F, 0x19, 0x43, 0x45, 0xE5, 0x4F, 0x93, 0xCD, 0x3F, 0x2F, 0xBF, 0x50, 0xDE, 0xD9, 0x6D, 0xC7, 0x3F, 0x7A, 0xF5, 0xDA, 0xCE, 0xF0, 0x39, 0xC1, 0x3F, 0x2C, 0xA4, 0x9A, 0x0A, 0xD0, 0xF6, 0xB5, 0x3F, 0xCD, 0x55, 0x94, 0x75, 0x65, 0xD8, 0xA2, 0x3F]).buffer),
            new Float64Array(new Uint8Array([0x71, 0x00, 0x67, 0xFE, 0xF0, 0x21, 0x79, 0x3F, 0x01, 0xCF, 0xD1, 0x31, 0x37, 0x69, 0x9F, 0x3F, 0xE2, 0xD7, 0xC0, 0x12, 0x8D, 0x42, 0xAC, 0x3F, 0x96, 0x20, 0x27, 0x79, 0x11, 0x66, 0xB4, 0x3F, 0x04, 0x5C, 0x49, 0x24, 0xB7, 0xA7, 0xBA, 0x3F, 0x1D, 0x83, 0xBA, 0x47, 0xA0, 0x72, 0xC0, 0x3F, 0x14, 0x8D, 0xCD, 0xB0, 0xDB, 0x8E, 0xC3, 0x3F, 0xB2, 0x4A, 0xF6, 0x04, 0x13, 0xA8, 0xC6, 0x3F, 0x66, 0x43, 0xDC, 0xF2, 0xCB, 0xBD, 0xC9, 0x3F, 0x86, 0xB2, 0x12, 0xB3, 0x8C, 0xCF, 0xCC, 0x3F, 0xF8, 0xED, 0xDF, 0x1A, 0xDC, 0xDC, 0xCF, 0x3F, 0x77, 0x51, 0x76, 0xD7, 0xA0, 0x72, 0xD1, 0x3F, 0x86, 0x03, 0xEC, 0xDA, 0x22, 0xF4, 0xD2, 0x3F, 0x54, 0x10, 0x57, 0xA5, 0xB8, 0x72, 0xD4, 0x3F, 0x93, 0xA6, 0x9E, 0x37, 0x27, 0xEE, 0xD5, 0x3F, 0xF6, 0x18, 0x24, 0x0F, 0x34, 0x66, 0xD7, 0x3F, 0xAF, 0xA4, 0xC8, 0x2E, 0xA5, 0xDA, 0xD8, 0x3F, 0xE4, 0xA1, 0xDE, 0x27, 0x41, 0x4B, 0xDA, 0x3F, 0x01, 0xBD, 0x04, 0x23, 0xCF, 0xB7, 0xDB, 0x3F, 0x5B, 0xDB, 0xE9, 0xE8, 0x16, 0x20, 0xDD, 0x3F, 0x13, 0x51, 0xF8, 0xEA, 0xE0, 0x83, 0xDE, 0x3F, 0x10, 0x12, 0xE7, 0x4B, 0xF6, 0xE2, 0xDF, 0x3F, 0xE1, 0xC5, 0x17, 0x74, 0x90, 0x9E, 0xE0, 0x3F, 0xEB, 0x6C, 0x33, 0xAF, 0x15, 0x49, 0xE1, 0x3F, 0x1B, 0x86, 0xBC, 0x8B, 0xF0, 0xF0, 0xE1, 0x3F, 0xA8, 0x9C, 0x62, 0x27, 0x07, 0x96, 0xE2, 0x3F, 0x57, 0x8E, 0x0C, 0x0D, 0x40, 0x38, 0xE3, 0x3F, 0x43, 0x83, 0xC5, 0x38, 0x82, 0xD7, 0xE3, 0x3F, 0x47, 0x73, 0x98, 0x1B, 0xB5, 0x73, 0xE4, 0x3F, 0x9B, 0xA0, 0x59, 0x9F, 0xC0, 0x0C, 0xE5, 0x3F, 0x50, 0x72, 0x5D, 0x2A, 0x8D, 0xA2, 0xE5, 0x3F, 0xE9, 0x1B, 0x1C, 0xA3, 0x03, 0x35, 0xE6, 0x3F, 0x75, 0x82, 0xC1, 0x73, 0x0D, 0xC4, 0xE6, 0x3F, 0x8D, 0xD2, 0xA8, 0x8D, 0x94, 0x4F, 0xE7, 0x3F, 0xB2, 0x3D, 0xC3, 0x6C, 0x83, 0xD7, 0xE7, 0x3F, 0xCC, 0x58, 0xE9, 0x1A, 0xC5, 0x5B, 0xE8, 0x3F, 0xCC, 0x98, 0x16, 0x33, 0x45, 0xDC, 0xE8, 0x3F, 0xD7, 0x6D, 0x8E, 0xE4, 0xEF, 0x58, 0xE9, 0x3F, 0xD5, 0x80, 0xEA, 0xF5, 0xB1, 0xD1, 0xE9, 0x3F, 0xC8, 0x9A, 0x11, 0xC8, 0x78, 0x46, 0xEA, 0x3F, 0xD4, 0xC0, 0x16, 0x59, 0x32, 0xB7, 0xEA, 0x3F, 0xB3, 0x13, 0x00, 0x47, 0xCD, 0x23, 0xEB, 0x3F, 0xE9, 0x04, 0x75, 0xD2, 0x38, 0x8C, 0xEB, 0x3F, 0xDD, 0x77, 0x53, 0xE1, 0x64, 0xF0, 0xEB, 0x3F, 0x07, 0x69, 0x2B, 0x01, 0x42, 0x50, 0xEC, 0x3F, 0x00, 0xB9, 0xA0, 0x69, 0xC1, 0xAB, 0xEC, 0x3F, 0x92, 0xBD, 0xB2, 0xFE, 0xD4, 0x02, 0xED, 0x3F, 0xB1, 0x3E, 0xE9, 0x52, 0x6F, 0x55, 0xED, 0x3F, 0x87, 0x89, 0x66, 0xA9, 0x83, 0xA3, 0xED, 0x3F, 0xD9, 0x47, 0xDE, 0xF7, 0x05, 0xED, 0xED, 0x3F, 0x25, 0xCE, 0x70, 0xE8, 0xEA, 0x31, 0xEE, 0x3F, 0x44, 0x97, 0x6A, 0xDB, 0x27, 0x72, 0xEE, 0x3F, 0x8E, 0xA8, 0xE7, 0xE8, 0xB2, 0xAD, 0xEE, 0x3F, 0xBC, 0x9D, 0x5A, 0xE2, 0x82, 0xE4, 0xEE, 0x3F, 0x5D, 0x20, 0xF7, 0x53, 0x8F, 0x16, 0xEF, 0x3F, 0xDD, 0x92, 0xFF, 0x85, 0xD0, 0x43, 0xEF, 0x3F, 0xB7, 0xBB, 0xF5, 0x7D, 0x3F, 0x6C, 0xEF, 0x3F, 0xDB, 0x41, 0xAE, 0xFF, 0xD5, 0x8F, 0xEF, 0x3F, 0xBB, 0xCF, 0x46, 0x8E, 0x8E, 0xAE, 0xEF, 0x3F, 0x21, 0xB7, 0xFE, 0x6C, 0x64, 0xC8, 0xEF, 0x3F, 0x56, 0xF4, 0xF1, 0x9F, 0x53, 0xDD, 0xEF, 0x3F, 0xC4, 0x73, 0xB6, 0xEC, 0x58, 0xED, 0xEF, 0x3F, 0xDF, 0x81, 0xDB, 0xDA, 0x71, 0xF8, 0xEF, 0x3F, 0xA1, 0x51, 0x4B, 0xB4, 0x9C, 0xFE, 0xEF, 0x3F, 0x92, 0x8A, 0x8E, 0x85, 0xD8, 0xFF, 0xEF, 0x3F, 0xF8, 0xD3, 0xF1, 0x1D, 0x25, 0xFC, 0xEF, 0x3F, 0x5C, 0x57, 0x8D, 0x0F, 0x83, 0xF3, 0xEF, 0x3F, 0x41, 0x39, 0x2E, 0xAF, 0xF3, 0xE5, 0xEF, 0x3F, 0x84, 0x0B, 0x22, 0x14, 0x79, 0xD3, 0xEF, 0x3F, 0x86, 0x41, 0xE4, 0x17, 0x16, 0xBC, 0xEF, 0x3F, 0xC8, 0xB2, 0xAD, 0x55, 0xCE, 0x9F, 0xEF, 0x3F, 0x6E, 0x3D, 0xE6, 0x29, 0xA6, 0x7E, 0xEF, 0x3F, 0x84, 0x9E, 0x78, 0xB1, 0xA2, 0x58, 0xEF, 0x3F, 0x9D, 0x9A, 0x08, 0xC9, 0xC9, 0x2D, 0xEF, 0x3F, 0xED, 0x95, 0x0B, 0x0C, 0x22, 0xFE, 0xEE, 0x3F, 0x84, 0xBF, 0xC3, 0xD3, 0xB2, 0xC9, 0xEE, 0x3F, 0xF2, 0xF7, 0x1D, 0x36, 0x84, 0x90, 0xEE, 0x3F, 0xFD, 0x9F, 0x72, 0x04, 0x9F, 0x52, 0xEE, 0x3F, 0xAC, 0x80, 0x29, 0xCA, 0x0C, 0x10, 0xEE, 0x3F, 0x60, 0x02, 0x41, 0xCB, 0xD7, 0xC8, 0xED, 0x3F, 0xFA, 0xEC, 0xB8, 0x02, 0x0B, 0x7D, 0xED, 0x3F, 0x9F, 0xEF, 0xE0, 0x20, 0xB2, 0x2C, 0xED, 0x3F, 0xF6, 0x32, 0x8B, 0x89, 0xD9, 0xD7, 0xEC, 0x3F, 0xF4, 0x3C, 0x23, 0x52, 0x8E, 0x7E, 0xEC, 0x3F, 0xB0, 0x71, 0xA9, 0x3F, 0xDE, 0x20, 0xEC, 0x3F, 0xEB, 0x80, 0x93, 0xC4, 0xD7, 0xBE, 0xEB, 0x3F, 0x05, 0x14, 0x92, 0xFE, 0x89, 0x58, 0xEB, 0x3F, 0x74, 0x14, 0x3C, 0xB4, 0x04, 0xEE, 0xEA, 0x3F, 0x9D, 0xE6, 0x9F, 0x52, 0x58, 0x7F, 0xEA, 0x3F, 0x38, 0xF9, 0xBA, 0xEA, 0x95, 0x0C, 0xEA, 0x3F, 0x24, 0x0D, 0xD8, 0x2E, 0xCF, 0x95, 0xE9, 0x3F, 0xA1, 0x9D, 0xD4, 0x6F, 0x16, 0x1B, 0xE9, 0x3F, 0xAA, 0xD4, 0x4D, 0x9A, 0x7E, 0x9C, 0xE8, 0x3F, 0xCC, 0x7A, 0xB5, 0x33, 0x1B, 0x1A, 0xE8, 0x3F, 0xE6, 0x55, 0x4F, 0x57, 0x00, 0x94, 0xE7, 0x3F, 0x7B, 0x6D, 0x17, 0xB3, 0x42, 0x0A, 0xE7, 0x3F, 0x0F, 0xAF, 0x91, 0x84, 0xF7, 0x7C, 0xE6, 0x3F, 0x74, 0x70, 0x83, 0x95, 0x34, 0xEC, 0xE5, 0x3F, 0x38, 0x51, 0x97, 0x38, 0x10, 0x58, 0xE5, 0x3F, 0x05, 0x00, 0xEC, 0x45, 0xA1, 0xC0, 0xE4, 0x3F, 0xB3, 0x6B, 0x8E, 0x17, 0xFF, 0x25, 0xE4, 0x3F, 0x24, 0xEB, 0xDF, 0x85, 0x41, 0x88, 0xE3, 0x3F, 0x16, 0xEA, 0xE8, 0xE3, 0x80, 0xE7, 0xE2, 0x3F, 0x1F, 0xAC, 0x98, 0xFB, 0xD5, 0x43, 0xE2, 0x3F, 0xB9, 0xB9, 0xF2, 0x09, 0x5A, 0x9D, 0xE1, 0x3F, 0x7F, 0x8E, 0x2A, 0xBB, 0x26, 0xF4, 0xE0, 0x3F, 0x1D, 0x22, 0xAE, 0x26, 0x56, 0x48, 0xE0, 0x3F, 0x66, 0xD0, 0x3F, 0x96, 0x05, 0x34, 0xDF, 0x3F, 0x58, 0xCC, 0x81, 0x14, 0x8F, 0xD2, 0xDD, 0x3F, 0x0C, 0x00, 0x97, 0x49, 0x7F, 0x6C, 0xDC, 0x3F, 0x0C, 0x40, 0x7F, 0x6C, 0x0D, 0x02, 0xDB, 0x3F, 0x03, 0xBE, 0x41, 0x61, 0x71, 0x93, 0xD9, 0x3F, 0xC2, 0xAA, 0x4E, 0xB0, 0xE3, 0x20, 0xD8, 0x3F, 0x17, 0x7E, 0xC7, 0x7D, 0x9D, 0xAA, 0xD6, 0x3F, 0x25, 0x3C, 0xAF, 0x80, 0xD8, 0x30, 0xD5, 0x3F, 0xBA, 0x14, 0x04, 0xFA, 0xCE, 0xB3, 0xD3, 0x3F, 0x76, 0xBB, 0xC3, 0xAB, 0xBB, 0x33, 0xD2, 0x3F, 0x96, 0xDB, 0xDB, 0xCF, 0xD9, 0xB0, 0xD0, 0x3F, 0x1A, 0x1A, 0x10, 0x1E, 0xCA, 0x56, 0xCE, 0x3F, 0x24, 0x67, 0x3D, 0xEF, 0x32, 0x47, 0xCB, 0x3F, 0xCB, 0x64, 0x9C, 0xE8, 0x66, 0x33, 0xC8, 0x3F, 0xFA, 0xC5, 0x97, 0x85, 0xDF, 0x1B, 0xC5, 0x3F, 0xDA, 0x7B, 0xEC, 0xD4, 0x16, 0x01, 0xC2, 0x3F, 0xC5, 0x9F, 0xAE, 0xCB, 0x0E, 0xC7, 0xBD, 0x3F, 0x23, 0x5B, 0x5D, 0x6A, 0x58, 0x87, 0xB7, 0x3F, 0xBB, 0x09, 0xD7, 0x34, 0x01, 0x44, 0xB1, 0x3F, 0x60, 0xCD, 0x90, 0xD2, 0x00, 0xFC, 0xA5, 0x3F, 0x4E, 0x0F, 0xE3, 0xBB, 0x36, 0xD9, 0x92, 0x3F]).buffer)
        ];
        Mdct.CosTables = [
            new Float64Array(new Uint8Array([0xCD, 0x3B, 0x7F, 0x66, 0x9E, 0xA0, 0xE6, 0x3F]).buffer),
            new Float64Array(new Uint8Array([0x46, 0x8D, 0x32, 0xCF, 0x6B, 0x90, 0xED, 0x3F, 0x62, 0xA9, 0xAE, 0xA6, 0xE2, 0x7D, 0xD8, 0xBF]).buffer),
            new Float64Array(new Uint8Array([0xB0, 0x5C, 0xF7, 0xCF, 0x97, 0x62, 0xEF, 0x3F, 0xC9, 0x68, 0xAE, 0x39, 0x3B, 0xC7, 0xE1, 0x3F, 0x08, 0xA6, 0x69, 0x3C, 0xB8, 0xF8, 0xC8, 0xBF, 0xA4, 0xA1, 0x0E, 0x29, 0x66, 0x9B, 0xEA, 0xBF]).buffer),
            new Float64Array(new Uint8Array([0x26, 0x25, 0xD1, 0xA3, 0x8D, 0xD8, 0xEF, 0x3F, 0xB1, 0xBD, 0x80, 0xF1, 0xB2, 0x38, 0xEC, 0x3F, 0xD6, 0x1D, 0x09, 0x25, 0xF3, 0x4C, 0xE4, 0x3F, 0x05, 0x9F, 0xD5, 0x2E, 0x06, 0x94, 0xD2, 0x3F, 0x2F, 0xB4, 0x29, 0xBC, 0xA6, 0x17, 0xB9, 0xBF, 0x3C, 0xF6, 0x06, 0x38, 0x5D, 0x2B, 0xDE, 0xBF, 0x41, 0x17, 0x15, 0x6B, 0x80, 0xBC, 0xE8, 0xBF, 0xDA, 0x2D, 0xC6, 0x56, 0x41, 0x9F, 0xEE, 0xBF]).buffer),
            new Float64Array(new Uint8Array([0x7E, 0x6D, 0x79, 0xE3, 0x21, 0xF6, 0xEF, 0x3F, 0xD7, 0x30, 0x92, 0xFB, 0x7E, 0x0A, 0xEF, 0x3F, 0x73, 0xC7, 0x3C, 0xF4, 0x7A, 0xED, 0xEC, 0x3F, 0x41, 0x87, 0xF3, 0x47, 0xE0, 0xB3, 0xE9, 0x3F, 0x9F, 0xEC, 0x8C, 0x34, 0x69, 0x7D, 0xE5, 0x3F, 0xED, 0xFF, 0x22, 0x99, 0x87, 0x73, 0xE0, 0x3F, 0xDD, 0x1F, 0xAB, 0x75, 0x9A, 0x8F, 0xD5, 0x3F, 0x3A, 0x61, 0x8E, 0x6E, 0x10, 0xC8, 0xC2, 0x3F, 0x13, 0xD8, 0x0D, 0xF1, 0x65, 0x1F, 0xA9, 0xBF, 0x1A, 0x5F, 0x21, 0x7B, 0xF9, 0x19, 0xCF, 0xBF, 0xBC, 0x5C, 0xE1, 0x09, 0x10, 0x5D, 0xDB, 0xBF, 0x35, 0x70, 0xE1, 0xFC, 0xF7, 0x0F, 0xE3, 0xBF, 0xAD, 0xAF, 0x6A, 0x22, 0xDF, 0xB5, 0xE7, 0xBF, 0x3D, 0x6E, 0x19, 0x45, 0x83, 0x72, 0xEB, 0xBF, 0xE4, 0x86, 0xF6, 0x04, 0x21, 0x21, 0xEE, 0xBF, 0x17, 0xA5, 0x08, 0x7F, 0x55, 0xA7, 0xEF, 0xBF]).buffer),
            new Float64Array(new Uint8Array([0x0D, 0xCD, 0x84, 0x60, 0x88, 0xFD, 0xEF, 0x3F, 0xD3, 0x9F, 0xE1, 0x70, 0x64, 0xC2, 0xEF, 0x3F, 0x89, 0xE5, 0x64, 0xAC, 0xF3, 0x38, 0xEF, 0x3F, 0x12, 0xE1, 0x48, 0xEC, 0x88, 0x62, 0xEE, 0x3F, 0x3A, 0xC9, 0x4D, 0xD1, 0x34, 0x41, 0xED, 0x3F, 0x2A, 0x95, 0x6F, 0xAC, 0xC0, 0xD7, 0xEB, 0x3F, 0x82, 0x27, 0x46, 0xA0, 0xA7, 0x29, 0xEA, 0x3F, 0x6E, 0x97, 0xFF, 0x0B, 0x0E, 0x3B, 0xE8, 0x3F, 0xDF, 0x2C, 0x1D, 0x55, 0xB7, 0x10, 0xE6, 0x3F, 0xB9, 0x50, 0x20, 0x29, 0xFA, 0xAF, 0xE3, 0x3F, 0x23, 0x4B, 0x1B, 0x54, 0xB3, 0x1E, 0xE1, 0x3F, 0x5E, 0xC4, 0x31, 0x99, 0x6E, 0xC6, 0xDC, 0x3F, 0xA1, 0x45, 0xFA, 0x30, 0x85, 0x08, 0xD7, 0x3F, 0x78, 0xF6, 0xB1, 0x62, 0xD2, 0x11, 0xD1, 0x3F, 0xCB, 0x3F, 0x8B, 0x44, 0x14, 0xE2, 0xC5, 0x3F, 0xF8, 0x19, 0xCE, 0x92, 0x20, 0xD5, 0xB2, 0x3F, 0x54, 0x66, 0xA3, 0xF7, 0x55, 0x21, 0x99, 0xBF, 0x0B, 0x73, 0xA9, 0x56, 0x4E, 0x56, 0xBF, 0xBF, 0x5E, 0x4F, 0x7E, 0x6A, 0x82, 0x0B, 0xCC, 0xBF, 0x00, 0x66, 0x17, 0x94, 0x5C, 0x13, 0xD4, 0xBF, 0x88, 0xED, 0xA8, 0x43, 0x79, 0xEF, 0xD9, 0xBF, 0xB9, 0x9A, 0xF8, 0xDB, 0xA4, 0x8B, 0xDF, 0xBF, 0xDF, 0x12, 0xDD, 0x4C, 0x05, 0x6D, 0xE2, 0xBF, 0xE7, 0xE5, 0xE3, 0xBB, 0xCA, 0xE6, 0xE4, 0xBF, 0x95, 0xFF, 0xEF, 0x37, 0x08, 0x2D, 0xE7, 0xBF, 0xFB, 0x63, 0x92, 0x49, 0x22, 0x3A, 0xE9, 0xBF, 0x00, 0x02, 0x15, 0x58, 0x0A, 0x09, 0xEB, 0xBF, 0xF4, 0x11, 0x34, 0x21, 0x4B, 0x95, 0xEC, 0xBF, 0x3C, 0xC2, 0xCC, 0xB6, 0x13, 0xDB, 0xED, 0xBF, 0x63, 0x49, 0x68, 0xE7, 0x40, 0xD7, 0xEE, 0xBF, 0xA9, 0x4B, 0x71, 0xFA, 0x64, 0x87, 0xEF, 0xBF, 0x3A, 0x88, 0x01, 0xAD, 0xCD, 0xE9, 0xEF, 0xBF]).buffer),
            new Float64Array(new Uint8Array([0xDB, 0x92, 0x9B, 0x16, 0x62, 0xFF, 0xEF, 0x3F, 0xAD, 0x71, 0x8E, 0x65, 0x95, 0xF0, 0xEF, 0x3F, 0x7B, 0xA6, 0x6D, 0xFD, 0x15, 0xCE, 0xEF, 0x3F, 0x9B, 0x09, 0xC9, 0x24, 0xF9, 0x97, 0xEF, 0x3F, 0x2D, 0x2F, 0x0B, 0x3B, 0x60, 0x4E, 0xEF, 0x3F, 0xC2, 0x73, 0xE4, 0xA3, 0x78, 0xF1, 0xEE, 0x3F, 0x0D, 0xD1, 0x4C, 0xAB, 0x7B, 0x81, 0xEE, 0x3F, 0x2B, 0xBE, 0x2D, 0x62, 0xAE, 0xFE, 0xED, 0x3F, 0x8B, 0xE6, 0xC9, 0x73, 0x61, 0x69, 0xED, 0x3F, 0x5C, 0xFC, 0xFC, 0xF3, 0xF0, 0xC1, 0xEC, 0x3F, 0x49, 0x55, 0x72, 0x26, 0xC4, 0x08, 0xEC, 0x3F, 0x12, 0x57, 0xF5, 0x3E, 0x4D, 0x3E, 0xEB, 0x3F, 0xE2, 0xFA, 0x02, 0x1B, 0x09, 0x63, 0xEA, 0x3F, 0x42, 0xD7, 0xC7, 0xF4, 0x7E, 0x77, 0xE9, 0x3F, 0xBF, 0x2E, 0xBA, 0x0F, 0x40, 0x7C, 0xE8, 0x3F, 0x61, 0x72, 0x03, 0x5F, 0xE7, 0x71, 0xE7, 0x3F, 0x3E, 0x78, 0xF0, 0x25, 0x19, 0x59, 0xE6, 0x3F, 0x96, 0x55, 0xA3, 0x92, 0x82, 0x32, 0xE5, 0x3F, 0xD5, 0x56, 0x45, 0x53, 0xD9, 0xFE, 0xE3, 0x3F, 0xEA, 0xF3, 0xFA, 0x25, 0xDB, 0xBE, 0xE2, 0x3F, 0x49, 0xDB, 0xDE, 0x63, 0x4D, 0x73, 0xE1, 0x3F, 0xB7, 0x3E, 0x4C, 0x87, 0xFC, 0x1C, 0xE0, 0x3F, 0x89, 0xE3, 0x86, 0x5B, 0x77, 0x79, 0xDD, 0x3F, 0xCC, 0x3F, 0x6D, 0x2B, 0xC8, 0xA6, 0xDA, 0x3F, 0xE8, 0xCC, 0x1D, 0x31, 0xA9, 0xC3, 0xD7, 0x3F, 0x6B, 0xE7, 0x78, 0x42, 0xE2, 0xD1, 0xD4, 0x3F, 0x3D, 0xDB, 0x4C, 0x3F, 0x44, 0xD3, 0xD1, 0x3F, 0x17, 0x43, 0x45, 0xE5, 0x4F, 0x93, 0xCD, 0x3F, 0x35, 0xBF, 0x50, 0xDE, 0xD9, 0x6D, 0xC7, 0x3F, 0x78, 0xF5, 0xDA, 0xCE, 0xF0, 0x39, 0xC1, 0x3F, 0x18, 0xA4, 0x9A, 0x0A, 0xD0, 0xF6, 0xB5, 0x3F, 0xE4, 0x55, 0x94, 0x75, 0x65, 0xD8, 0xA2, 0x3F, 0x49, 0xC7, 0xDE, 0xFC, 0xD1, 0x21, 0x89, 0xBF, 0xD9, 0x20, 0xF8, 0x79, 0x6E, 0x65, 0xAF, 0xBF, 0xD5, 0xC2, 0x9E, 0xC7, 0x85, 0x37, 0xBC, 0xBF, 0x54, 0x3E, 0x29, 0xB1, 0x76, 0x55, 0xC4, 0xBF, 0x4D, 0x04, 0xB0, 0x25, 0xA0, 0x82, 0xCA, 0xBF, 0xAD, 0xFD, 0x37, 0x0E, 0xB8, 0x4F, 0xD0, 0xBF, 0x52, 0x81, 0xE1, 0xC2, 0x10, 0x54, 0xD3, 0xBF, 0xC3, 0x27, 0x3F, 0xDD, 0x7D, 0x4C, 0xD6, 0xBF, 0xD5, 0x93, 0xBC, 0x63, 0x2A, 0x37, 0xD9, 0xBF, 0xE2, 0x1E, 0x01, 0xD8, 0x49, 0x12, 0xDC, 0xBF, 0xD5, 0x78, 0xEF, 0x52, 0x19, 0xDC, 0xDE, 0xBF, 0x8D, 0x89, 0x5D, 0x4D, 0x70, 0xC9, 0xE0, 0xBF, 0x59, 0xEB, 0x33, 0x99, 0x79, 0x1A, 0xE2, 0xBF, 0xF2, 0x59, 0x06, 0xB1, 0x58, 0x60, 0xE3, 0xBF, 0x37, 0x09, 0x9B, 0x9B, 0x44, 0x9A, 0xE4, 0xBF, 0x8C, 0x01, 0x65, 0xBE, 0x7B, 0xC7, 0xE5, 0xBF, 0xAE, 0xA8, 0xEA, 0x54, 0x44, 0xE7, 0xE6, 0xBF, 0x6F, 0x17, 0x57, 0xE3, 0xEC, 0xF8, 0xE7, 0xBF, 0x0D, 0x94, 0xEF, 0xA3, 0xCC, 0xFB, 0xE8, 0xBF, 0x93, 0xAF, 0x29, 0xEF, 0x43, 0xEF, 0xE9, 0xBF, 0x11, 0xD5, 0x21, 0x9E, 0xBC, 0xD2, 0xEA, 0xBF, 0xD2, 0x90, 0x35, 0x67, 0xAA, 0xA5, 0xEB, 0xBF, 0x9A, 0x73, 0x88, 0x34, 0x8B, 0x67, 0xEC, 0xBF, 0xDC, 0x35, 0x3E, 0x74, 0xE7, 0x17, 0xED, 0xBF, 0x9A, 0xA0, 0x38, 0x62, 0x52, 0xB6, 0xED, 0xBF, 0x7D, 0xC1, 0x2B, 0x4B, 0x6A, 0x42, 0xEE, 0xBF, 0x74, 0x0B, 0xDF, 0xC8, 0xD8, 0xBB, 0xEE, 0xBF, 0xD9, 0x3A, 0x76, 0xF7, 0x52, 0x22, 0xEF, 0xBF, 0x77, 0x20, 0xA1, 0xA3, 0x99, 0x75, 0xEF, 0xBF, 0x41, 0xD7, 0x95, 0x71, 0x79, 0xB5, 0xEF, 0xBF, 0x09, 0x5B, 0xBD, 0xFC, 0xCA, 0xE1, 0xEF, 0xBF, 0x5D, 0xF7, 0xFE, 0xEF, 0x72, 0xFA, 0xEF, 0xBF]).buffer),
            new Float64Array(new Uint8Array([0x92, 0x8A, 0x8E, 0x85, 0xD8, 0xFF, 0xEF, 0x3F, 0xF8, 0xD3, 0xF1, 0x1D, 0x25, 0xFC, 0xEF, 0x3F, 0x5C, 0x57, 0x8D, 0x0F, 0x83, 0xF3, 0xEF, 0x3F, 0x40, 0x39, 0x2E, 0xAF, 0xF3, 0xE5, 0xEF, 0x3F, 0x84, 0x0B, 0x22, 0x14, 0x79, 0xD3, 0xEF, 0x3F, 0x86, 0x41, 0xE4, 0x17, 0x16, 0xBC, 0xEF, 0x3F, 0xC8, 0xB2, 0xAD, 0x55, 0xCE, 0x9F, 0xEF, 0x3F, 0x6E, 0x3D, 0xE6, 0x29, 0xA6, 0x7E, 0xEF, 0x3F, 0x84, 0x9E, 0x78, 0xB1, 0xA2, 0x58, 0xEF, 0x3F, 0x9D, 0x9A, 0x08, 0xC9, 0xC9, 0x2D, 0xEF, 0x3F, 0xED, 0x95, 0x0B, 0x0C, 0x22, 0xFE, 0xEE, 0x3F, 0x84, 0xBF, 0xC3, 0xD3, 0xB2, 0xC9, 0xEE, 0x3F, 0xF3, 0xF7, 0x1D, 0x36, 0x84, 0x90, 0xEE, 0x3F, 0xFC, 0x9F, 0x72, 0x04, 0x9F, 0x52, 0xEE, 0x3F, 0xAC, 0x80, 0x29, 0xCA, 0x0C, 0x10, 0xEE, 0x3F, 0x60, 0x02, 0x41, 0xCB, 0xD7, 0xC8, 0xED, 0x3F, 0xFA, 0xEC, 0xB8, 0x02, 0x0B, 0x7D, 0xED, 0x3F, 0x9F, 0xEF, 0xE0, 0x20, 0xB2, 0x2C, 0xED, 0x3F, 0xF6, 0x32, 0x8B, 0x89, 0xD9, 0xD7, 0xEC, 0x3F, 0xF3, 0x3C, 0x23, 0x52, 0x8E, 0x7E, 0xEC, 0x3F, 0xB0, 0x71, 0xA9, 0x3F, 0xDE, 0x20, 0xEC, 0x3F, 0xEA, 0x80, 0x93, 0xC4, 0xD7, 0xBE, 0xEB, 0x3F, 0x05, 0x14, 0x92, 0xFE, 0x89, 0x58, 0xEB, 0x3F, 0x74, 0x14, 0x3C, 0xB4, 0x04, 0xEE, 0xEA, 0x3F, 0x9D, 0xE6, 0x9F, 0x52, 0x58, 0x7F, 0xEA, 0x3F, 0x37, 0xF9, 0xBA, 0xEA, 0x95, 0x0C, 0xEA, 0x3F, 0x22, 0x0D, 0xD8, 0x2E, 0xCF, 0x95, 0xE9, 0x3F, 0xA2, 0x9D, 0xD4, 0x6F, 0x16, 0x1B, 0xE9, 0x3F, 0xAB, 0xD4, 0x4D, 0x9A, 0x7E, 0x9C, 0xE8, 0x3F, 0xCC, 0x7A, 0xB5, 0x33, 0x1B, 0x1A, 0xE8, 0x3F, 0xE5, 0x55, 0x4F, 0x57, 0x00, 0x94, 0xE7, 0x3F, 0x7A, 0x6D, 0x17, 0xB3, 0x42, 0x0A, 0xE7, 0x3F, 0x10, 0xAF, 0x91, 0x84, 0xF7, 0x7C, 0xE6, 0x3F, 0x74, 0x70, 0x83, 0x95, 0x34, 0xEC, 0xE5, 0x3F, 0x37, 0x51, 0x97, 0x38, 0x10, 0x58, 0xE5, 0x3F, 0x05, 0x00, 0xEC, 0x45, 0xA1, 0xC0, 0xE4, 0x3F, 0xB2, 0x6B, 0x8E, 0x17, 0xFF, 0x25, 0xE4, 0x3F, 0x22, 0xEB, 0xDF, 0x85, 0x41, 0x88, 0xE3, 0x3F, 0x17, 0xEA, 0xE8, 0xE3, 0x80, 0xE7, 0xE2, 0x3F, 0x20, 0xAC, 0x98, 0xFB, 0xD5, 0x43, 0xE2, 0x3F, 0xB8, 0xB9, 0xF2, 0x09, 0x5A, 0x9D, 0xE1, 0x3F, 0x7F, 0x8E, 0x2A, 0xBB, 0x26, 0xF4, 0xE0, 0x3F, 0x1A, 0x22, 0xAE, 0x26, 0x56, 0x48, 0xE0, 0x3F, 0x69, 0xD0, 0x3F, 0x96, 0x05, 0x34, 0xDF, 0x3F, 0x57, 0xCC, 0x81, 0x14, 0x8F, 0xD2, 0xDD, 0x3F, 0x0B, 0x00, 0x97, 0x49, 0x7F, 0x6C, 0xDC, 0x3F, 0x0B, 0x40, 0x7F, 0x6C, 0x0D, 0x02, 0xDB, 0x3F, 0xFE, 0xBD, 0x41, 0x61, 0x71, 0x93, 0xD9, 0x3F, 0xC5, 0xAA, 0x4E, 0xB0, 0xE3, 0x20, 0xD8, 0x3F, 0x19, 0x7E, 0xC7, 0x7D, 0x9D, 0xAA, 0xD6, 0x3F, 0x24, 0x3C, 0xAF, 0x80, 0xD8, 0x30, 0xD5, 0x3F, 0xB9, 0x14, 0x04, 0xFA, 0xCE, 0xB3, 0xD3, 0x3F, 0x71, 0xBB, 0xC3, 0xAB, 0xBB, 0x33, 0xD2, 0x3F, 0x91, 0xDB, 0xDB, 0xCF, 0xD9, 0xB0, 0xD0, 0x3F, 0x20, 0x1A, 0x10, 0x1E, 0xCA, 0x56, 0xCE, 0x3F, 0x22, 0x67, 0x3D, 0xEF, 0x32, 0x47, 0xCB, 0x3F, 0xC8, 0x64, 0x9C, 0xE8, 0x66, 0x33, 0xC8, 0x3F, 0xF8, 0xC5, 0x97, 0x85, 0xDF, 0x1B, 0xC5, 0x3F, 0xCF, 0x7B, 0xEC, 0xD4, 0x16, 0x01, 0xC2, 0x3F, 0xD1, 0x9F, 0xAE, 0xCB, 0x0E, 0xC7, 0xBD, 0x3F, 0x1F, 0x5B, 0x5D, 0x6A, 0x58, 0x87, 0xB7, 0x3F, 0xB6, 0x09, 0xD7, 0x34, 0x01, 0x44, 0xB1, 0x3F, 0x57, 0xCD, 0x90, 0xD2, 0x00, 0xFC, 0xA5, 0x3F, 0xFD, 0x0E, 0xE3, 0xBB, 0x36, 0xD9, 0x92, 0x3F, 0x12, 0x00, 0x67, 0xFE, 0xF0, 0x21, 0x79, 0xBF, 0xD1, 0xCE, 0xD1, 0x31, 0x37, 0x69, 0x9F, 0xBF, 0xDF, 0xD7, 0xC0, 0x12, 0x8D, 0x42, 0xAC, 0xBF, 0x8E, 0x20, 0x27, 0x79, 0x11, 0x66, 0xB4, 0xBF, 0x05, 0x5C, 0x49, 0x24, 0xB7, 0xA7, 0xBA, 0xBF, 0x1B, 0x83, 0xBA, 0x47, 0xA0, 0x72, 0xC0, 0xBF, 0x0F, 0x8D, 0xCD, 0xB0, 0xDB, 0x8E, 0xC3, 0xBF, 0xB2, 0x4A, 0xF6, 0x04, 0x13, 0xA8, 0xC6, 0xBF, 0x63, 0x43, 0xDC, 0xF2, 0xCB, 0xBD, 0xC9, 0xBF, 0x80, 0xB2, 0x12, 0xB3, 0x8C, 0xCF, 0xCC, 0xBF, 0xF7, 0xED, 0xDF, 0x1A, 0xDC, 0xDC, 0xCF, 0xBF, 0x75, 0x51, 0x76, 0xD7, 0xA0, 0x72, 0xD1, 0xBF, 0x87, 0x03, 0xEC, 0xDA, 0x22, 0xF4, 0xD2, 0xBF, 0x53, 0x10, 0x57, 0xA5, 0xB8, 0x72, 0xD4, 0xBF, 0x91, 0xA6, 0x9E, 0x37, 0x27, 0xEE, 0xD5, 0xBF, 0xF6, 0x18, 0x24, 0x0F, 0x34, 0x66, 0xD7, 0xBF, 0xAE, 0xA4, 0xC8, 0x2E, 0xA5, 0xDA, 0xD8, 0xBF, 0xE2, 0xA1, 0xDE, 0x27, 0x41, 0x4B, 0xDA, 0xBF, 0x00, 0xBD, 0x04, 0x23, 0xCF, 0xB7, 0xDB, 0xBF, 0x59, 0xDB, 0xE9, 0xE8, 0x16, 0x20, 0xDD, 0xBF, 0x10, 0x51, 0xF8, 0xEA, 0xE0, 0x83, 0xDE, 0xBF, 0x0B, 0x12, 0xE7, 0x4B, 0xF6, 0xE2, 0xDF, 0xBF, 0xE1, 0xC5, 0x17, 0x74, 0x90, 0x9E, 0xE0, 0xBF, 0xEB, 0x6C, 0x33, 0xAF, 0x15, 0x49, 0xE1, 0xBF, 0x1A, 0x86, 0xBC, 0x8B, 0xF0, 0xF0, 0xE1, 0xBF, 0xA7, 0x9C, 0x62, 0x27, 0x07, 0x96, 0xE2, 0xBF, 0x55, 0x8E, 0x0C, 0x0D, 0x40, 0x38, 0xE3, 0xBF, 0x44, 0x83, 0xC5, 0x38, 0x82, 0xD7, 0xE3, 0xBF, 0x47, 0x73, 0x98, 0x1B, 0xB5, 0x73, 0xE4, 0xBF, 0x9B, 0xA0, 0x59, 0x9F, 0xC0, 0x0C, 0xE5, 0xBF, 0x4F, 0x72, 0x5D, 0x2A, 0x8D, 0xA2, 0xE5, 0xBF, 0xE7, 0x1B, 0x1C, 0xA3, 0x03, 0x35, 0xE6, 0xBF, 0x76, 0x82, 0xC1, 0x73, 0x0D, 0xC4, 0xE6, 0xBF, 0x8D, 0xD2, 0xA8, 0x8D, 0x94, 0x4F, 0xE7, 0xBF, 0xB2, 0x3D, 0xC3, 0x6C, 0x83, 0xD7, 0xE7, 0xBF, 0xCB, 0x58, 0xE9, 0x1A, 0xC5, 0x5B, 0xE8, 0xBF, 0xCB, 0x98, 0x16, 0x33, 0x45, 0xDC, 0xE8, 0xBF, 0xD5, 0x6D, 0x8E, 0xE4, 0xEF, 0x58, 0xE9, 0xBF, 0xD6, 0x80, 0xEA, 0xF5, 0xB1, 0xD1, 0xE9, 0xBF, 0xC8, 0x9A, 0x11, 0xC8, 0x78, 0x46, 0xEA, 0xBF, 0xD4, 0xC0, 0x16, 0x59, 0x32, 0xB7, 0xEA, 0xBF, 0xB3, 0x13, 0x00, 0x47, 0xCD, 0x23, 0xEB, 0xBF, 0xE7, 0x04, 0x75, 0xD2, 0x38, 0x8C, 0xEB, 0xBF, 0xDD, 0x77, 0x53, 0xE1, 0x64, 0xF0, 0xEB, 0xBF, 0x07, 0x69, 0x2B, 0x01, 0x42, 0x50, 0xEC, 0xBF, 0x00, 0xB9, 0xA0, 0x69, 0xC1, 0xAB, 0xEC, 0xBF, 0x92, 0xBD, 0xB2, 0xFE, 0xD4, 0x02, 0xED, 0xBF, 0xB0, 0x3E, 0xE9, 0x52, 0x6F, 0x55, 0xED, 0xBF, 0x88, 0x89, 0x66, 0xA9, 0x83, 0xA3, 0xED, 0xBF, 0xDA, 0x47, 0xDE, 0xF7, 0x05, 0xED, 0xED, 0xBF, 0x25, 0xCE, 0x70, 0xE8, 0xEA, 0x31, 0xEE, 0xBF, 0x44, 0x97, 0x6A, 0xDB, 0x27, 0x72, 0xEE, 0xBF, 0x8D, 0xA8, 0xE7, 0xE8, 0xB2, 0xAD, 0xEE, 0xBF, 0xBB, 0x9D, 0x5A, 0xE2, 0x82, 0xE4, 0xEE, 0xBF, 0x5D, 0x20, 0xF7, 0x53, 0x8F, 0x16, 0xEF, 0xBF, 0xDD, 0x92, 0xFF, 0x85, 0xD0, 0x43, 0xEF, 0xBF, 0xB7, 0xBB, 0xF5, 0x7D, 0x3F, 0x6C, 0xEF, 0xBF, 0xDA, 0x41, 0xAE, 0xFF, 0xD5, 0x8F, 0xEF, 0xBF, 0xBA, 0xCF, 0x46, 0x8E, 0x8E, 0xAE, 0xEF, 0xBF, 0x21, 0xB7, 0xFE, 0x6C, 0x64, 0xC8, 0xEF, 0xBF, 0x56, 0xF4, 0xF1, 0x9F, 0x53, 0xDD, 0xEF, 0xBF, 0xC4, 0x73, 0xB6, 0xEC, 0x58, 0xED, 0xEF, 0xBF, 0xDF, 0x81, 0xDB, 0xDA, 0x71, 0xF8, 0xEF, 0xBF, 0xA1, 0x51, 0x4B, 0xB4, 0x9C, 0xFE, 0xEF, 0xBF]).buffer)
        ];
        this.MdctBits = mdctBits;
        this.MdctSize = 1 << mdctBits;
        this.Scale = scale;
        if (window.length < this.MdctSize) {
            throw new Error("Window must be as long as the MDCT size.");
        }
        this._mdctPrevious = new Float64Array(this.MdctSize);
        this._imdctPrevious = new Float64Array(this.MdctSize);
        this._scratchMdct = new Float64Array(this.MdctSize);
        this._scratchDct = new Float64Array(this.MdctSize);
        this._imdctWindow = window;
    }
    static SetTables(maxBits) {
        if (maxBits > this._tableBits) {
            for (let i = this._tableBits + 1; i <= maxBits; i++) {
                //converted this pure data constants
                //let out = this.GenerateTrigTables(i);
                //this.SinTables.push(out.sin);
                //this.CosTables.push(out.cos);
                this.ShuffleTables.push(this.GenerateShuffleTable(i));
            }
            this._tableBits = maxBits;
        }
    }
    RunMdct(input, output) {
        if (input.length < this.MdctSize) {
            throw new Error("Input must be as long as the MDCT size.");
        }
        if (output.length < this.MdctSize) {
            throw new Error("Output must be as long as the MDCT size.");
        }
        let size = this.MdctSize;
        let half = (size >> 1);
        let dctIn = this._scratchMdct;
        for (let i = 0; i < half; i++) {
            let a = this._imdctWindow[half - i - 1] * -input[half + i];
            let b = this._imdctWindow[half + i] * input[half - i - 1];
            let c = this._imdctWindow[i] * this._mdctPrevious[i];
            let d = this._imdctWindow[size - i - 1] *
                this._mdctPrevious[size - i - 1];
            dctIn[i] = a - b;
            dctIn[half + i] = c - d;
        }
        this.Dct4(dctIn, output);
        arrayCopy(input, 0, this._mdctPrevious, 0, input.length);
        //this._mdctPrevious.set(input, input.length);
    }
    RunImdct(input, output) {
        if (input.length < this.MdctSize) {
            throw new Error("Input must be as long as the MDCT size.");
        }
        if (output.length < this.MdctSize) {
            throw new Error("Output must be as long as the MDCT size.");
        }
        let size = this.MdctSize;
        let half = (size >> 1);
        let dctOut = this._scratchMdct;
        this.Dct4(input, dctOut);
        for (let i = 0; i < half; i++) {
            output[i] = this._imdctWindow[i] * dctOut[i + half] +
                this._imdctPrevious[i];
            output[i + half] = this._imdctWindow[i + half] * -dctOut[size - 1 - i] -
                this._imdctPrevious[i + half];
            this._imdctPrevious[i] = this._imdctWindow[size - 1 - i] *
                -dctOut[half - i - 1];
            this._imdctPrevious[i + half] = this._imdctWindow[half - i - 1] *
                dctOut[i];
        }
    }
    /**
     * Does a Type-4 DCT.
     *
     * @param input The input array containing the time or frequency-domain samples
     * @param output The output array that will contain the transformed time or frequency-domain samples
     */
    Dct4(input, output) {
        let shuffleTable = Mdct.ShuffleTables[this.MdctBits];
        let sinTable = Mdct.SinTables[this.MdctBits];
        let cosTable = Mdct.CosTables[this.MdctBits];
        let dctTemp = this._scratchDct;
        let size = this.MdctSize;
        let lastIndex = size - 1;
        let halfSize = (size >> 1);
        for (let i = 0; i < halfSize; i++) {
            let i2 = i * 2;
            let a = input[i2];
            let b = input[lastIndex - i2];
            let sin = sinTable[i];
            let cos = cosTable[i];
            dctTemp[i2] = a * cos + b * sin;
            dctTemp[i2 + 1] = a * sin - b * cos;
        }
        let stageCount = this.MdctBits - 1;
        for (let stage = 0; stage < stageCount; stage++) {
            let blockCount = 1 << stage;
            let blockSizeBits = stageCount - stage;
            let blockHalfSizeBits = blockSizeBits - 1;
            let blockSize = 1 << blockSizeBits;
            let blockHalfSize = 1 << blockHalfSizeBits;
            sinTable = Mdct.SinTables[blockHalfSizeBits];
            cosTable = Mdct.CosTables[blockHalfSizeBits];
            for (let block = 0; block < blockCount; block++) {
                for (let i = 0; i < blockHalfSize; i++) {
                    let frontPos = (block * blockSize + i) * 2;
                    let backPos = frontPos + blockSize;
                    let a = dctTemp[frontPos] - dctTemp[backPos];
                    let b = dctTemp[frontPos + 1] - dctTemp[backPos + 1];
                    let sin = sinTable[i];
                    let cos = cosTable[i];
                    dctTemp[frontPos] += dctTemp[backPos];
                    dctTemp[frontPos + 1] += dctTemp[backPos + 1];
                    dctTemp[backPos] = a * cos + b * sin;
                    dctTemp[backPos + 1] = a * sin - b * cos;
                }
            }
        }
        for (let i = 0; i < this.MdctSize; i++) {
            output[i] = dctTemp[shuffleTable[i]] * this.Scale;
        }
    }
    static GenerateTrigTables(sizeBits) {
        let size = 1 << sizeBits;
        let out = {
            sin: new Float64Array(size),
            cos: new Float64Array(size),
        };
        for (let i = 0; i < size; i++) {
            let value = Math.PI * (4 * i + 1) / (4 * size);
            out.sin[i] = Math.sin(value);
            out.cos[i] = Math.cos(value);
        }
        return out;
    }
    static GenerateShuffleTable(sizeBits) {
        let size = 1 << sizeBits;
        var table = new Int32Array(size);
        for (let i = 0; i < size; i++) {
            table[i] = SignedBitReverse32Trunc(i ^ (i >> 1), sizeBits);
        }
        return table;
    }
    // ReSharper disable once UnusedMember.Local
    /**
     * Does a Type-4 DCT. Intended for reference.
     *
     * @param input The input array containing the time or frequency-domain samples
     * @param output The output array that will contain the transformed time or frequency-domain samples
     */
    Dct4Slow(input, output) {
        for (let k = 0; k < this.MdctSize; k++) {
            let sample = 0;
            for (let n = 0; n < this.MdctSize; n++) {
                let angle = Math.PI / this.MdctSize * (k + 0.5) * (n + 0.5);
                sample += Math.cos(angle) * input[n];
            }
            output[k] = sample * this.Scale;
        }
    }
}
Mdct._tableBits = -1;
Mdct.SinTables = [];
Mdct.CosTables = [];
Mdct.ShuffleTables = [];

var _a$1;
class HCATables {
    static isLittleEndian() {
        let test = new Float64Array([1.0]);
        let dv = new DataView(test.buffer);
        if (dv.getUint32(0) != 0)
            return false;
        return true;
    }
    static adaptEndianness6432(a) {
        if (a.byteLength % 8 != 0)
            throw new Error();
        if (!this.isLittleEndian()) {
            for (let i = 0; i < a.length; i += 2) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
            }
        }
        return a;
    }
}
_a$1 = HCATables;
HCATables.QuantizeSpectrumBits = [
    new Uint8Array([
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x01, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x02, 0x02, 0x02, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x03, 0x03, 0x02, 0x03, 0x03, 0x03, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x00, 0x00, 0x00, 0x04, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x04, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x00, 0x00, 0x04, 0x04, 0x04, 0x03, 0x03, 0x03, 0x03, 0x03, 0x04, 0x04, 0x04, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x00, 0x04, 0x04, 0x04, 0x04, 0x04, 0x03, 0x03, 0x03, 0x04, 0x04, 0x04, 0x04, 0x04, 0x00
    ]),
    new Uint8Array([
        0x00, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x03, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04
    ]),
];
HCATables.QuantizeSpectrumValue = [
    new Uint8Array([
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0x02, 0x00, 0x01, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0x05, 0x03, 0x00, 0x02, 0x04, 0x06, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x00, 0x00, 0x00, 0x0F, 0x06, 0x04, 0x02, 0x00, 0x01, 0x03, 0x05, 0x0E, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x00, 0x00, 0x0F, 0x0D, 0x0B, 0x04, 0x02, 0x00, 0x01, 0x03, 0x0A, 0x0C, 0x0E, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x00, 0x0F, 0x0D, 0x0B, 0x09, 0x07, 0x02, 0x00, 0x01, 0x06, 0x08, 0x0A, 0x0C, 0x0E, 0x00
    ]),
    new Uint8Array([
        0x00, 0x0F, 0x0D, 0x0B, 0x09, 0x07, 0x05, 0x03, 0x00, 0x02, 0x04, 0x06, 0x08, 0x0A, 0x0C, 0x0E
    ]),
];
HCATables.QuantizedSpectrumBits = [
    new Uint8Array([
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x01, 0x01, 0x02, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x03, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x02, 0x02, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x04, 0x04
    ]),
    new Uint8Array([
        0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04
    ]),
    new Uint8Array([
        0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04
    ]),
    new Uint8Array([
        0x03, 0x03, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04
    ]),
];
HCATables.QuantizedSpectrumMaxBits = new Uint8Array([
    0x00, 0x02, 0x03, 0x03, 0x04, 0x04, 0x04, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C
]);
HCATables.QuantizedSpectrumValue = [
    new Int8Array([
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Int8Array([
        0x00, 0x00, 0x01, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Int8Array([
        0x00, 0x00, 0x01, 0x01, 0xFF, 0xFF, 0x02, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Int8Array([
        0x00, 0x00, 0x01, 0xFF, 0x02, 0xFE, 0x03, 0xFD, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Int8Array([
        0x00, 0x00, 0x01, 0x01, 0xFF, 0xFF, 0x02, 0x02, 0xFE, 0xFE, 0x03, 0x03, 0xFD, 0xFD, 0x04, 0xFC
    ]),
    new Int8Array([
        0x00, 0x00, 0x01, 0x01, 0xFF, 0xFF, 0x02, 0x02, 0xFE, 0xFE, 0x03, 0xFD, 0x04, 0xFC, 0x05, 0xFB
    ]),
    new Int8Array([
        0x00, 0x00, 0x01, 0x01, 0xFF, 0xFF, 0x02, 0xFE, 0x03, 0xFD, 0x04, 0xFC, 0x05, 0xFB, 0x06, 0xFA
    ]),
    new Int8Array([
        0x00, 0x00, 0x01, 0xFF, 0x02, 0xFE, 0x03, 0xFD, 0x04, 0xFC, 0x05, 0xFB, 0x06, 0xFA, 0x07, 0xF9
    ]),
];
HCATables.ScaleToResolutionCurve = new Uint8Array([
    0x0F, 0x0E, 0x0E, 0x0E, 0x0E, 0x0E, 0x0E, 0x0D, 0x0D, 0x0D, 0x0D, 0x0D, 0x0D, 0x0C, 0x0C, 0x0C,
    0x0C, 0x0C, 0x0C, 0x0B, 0x0B, 0x0B, 0x0B, 0x0B, 0x0B, 0x0A, 0x0A, 0x0A, 0x0A, 0x0A, 0x0A, 0x0A,
    0x09, 0x09, 0x09, 0x09, 0x09, 0x09, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x07, 0x06, 0x06, 0x05,
    0x04, 0x04, 0x04, 0x03, 0x03, 0x03, 0x02, 0x02, 0x02, 0x02, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01,
    0x01, 0x01, 0x01, 0x00
]);
HCATables.AthCurve = new Uint8Array([
    0x78, 0x5F, 0x56, 0x51, 0x4E, 0x4C, 0x4B, 0x49, 0x48, 0x48, 0x47, 0x46, 0x46, 0x45, 0x45, 0x45,
    0x44, 0x44, 0x44, 0x44, 0x43, 0x43, 0x43, 0x43, 0x43, 0x43, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42,
    0x42, 0x42, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x40, 0x40, 0x40, 0x40,
    0x40, 0x40, 0x40, 0x40, 0x40, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F,
    0x3F, 0x3F, 0x3F, 0x3E, 0x3E, 0x3E, 0x3E, 0x3E, 0x3E, 0x3D, 0x3D, 0x3D, 0x3D, 0x3D, 0x3D, 0x3D,
    0x3C, 0x3C, 0x3C, 0x3C, 0x3C, 0x3C, 0x3C, 0x3C, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B,
    0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B,
    0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3B, 0x3C, 0x3C, 0x3C, 0x3C, 0x3C, 0x3C, 0x3C, 0x3C,
    0x3D, 0x3D, 0x3D, 0x3D, 0x3D, 0x3D, 0x3D, 0x3D, 0x3E, 0x3E, 0x3E, 0x3E, 0x3E, 0x3E, 0x3E, 0x3F,
    0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F,
    0x3F, 0x3F, 0x3F, 0x3F, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40,
    0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41,
    0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41,
    0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42,
    0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x43, 0x43, 0x43,
    0x43, 0x43, 0x43, 0x43, 0x43, 0x43, 0x43, 0x43, 0x43, 0x43, 0x43, 0x43, 0x43, 0x43, 0x44, 0x44,
    0x44, 0x44, 0x44, 0x44, 0x44, 0x44, 0x44, 0x44, 0x44, 0x44, 0x44, 0x44, 0x45, 0x45, 0x45, 0x45,
    0x45, 0x45, 0x45, 0x45, 0x45, 0x45, 0x45, 0x45, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46,
    0x46, 0x46, 0x47, 0x47, 0x47, 0x47, 0x47, 0x47, 0x47, 0x47, 0x47, 0x47, 0x48, 0x48, 0x48, 0x48,
    0x48, 0x48, 0x48, 0x48, 0x49, 0x49, 0x49, 0x49, 0x49, 0x49, 0x49, 0x49, 0x4A, 0x4A, 0x4A, 0x4A,
    0x4A, 0x4A, 0x4A, 0x4A, 0x4B, 0x4B, 0x4B, 0x4B, 0x4B, 0x4B, 0x4B, 0x4C, 0x4C, 0x4C, 0x4C, 0x4C,
    0x4C, 0x4D, 0x4D, 0x4D, 0x4D, 0x4D, 0x4D, 0x4E, 0x4E, 0x4E, 0x4E, 0x4E, 0x4E, 0x4F, 0x4F, 0x4F,
    0x4F, 0x4F, 0x4F, 0x50, 0x50, 0x50, 0x50, 0x50, 0x51, 0x51, 0x51, 0x51, 0x51, 0x52, 0x52, 0x52,
    0x52, 0x52, 0x53, 0x53, 0x53, 0x53, 0x54, 0x54, 0x54, 0x54, 0x54, 0x55, 0x55, 0x55, 0x55, 0x56,
    0x56, 0x56, 0x56, 0x57, 0x57, 0x57, 0x57, 0x57, 0x58, 0x58, 0x58, 0x59, 0x59, 0x59, 0x59, 0x5A,
    0x5A, 0x5A, 0x5A, 0x5B, 0x5B, 0x5B, 0x5B, 0x5C, 0x5C, 0x5C, 0x5D, 0x5D, 0x5D, 0x5D, 0x5E, 0x5E,
    0x5E, 0x5F, 0x5F, 0x5F, 0x60, 0x60, 0x60, 0x61, 0x61, 0x61, 0x61, 0x62, 0x62, 0x62, 0x63, 0x63,
    0x63, 0x64, 0x64, 0x64, 0x65, 0x65, 0x66, 0x66, 0x66, 0x67, 0x67, 0x67, 0x68, 0x68, 0x68, 0x69,
    0x69, 0x6A, 0x6A, 0x6A, 0x6B, 0x6B, 0x6B, 0x6C, 0x6C, 0x6D, 0x6D, 0x6D, 0x6E, 0x6E, 0x6F, 0x6F,
    0x70, 0x70, 0x70, 0x71, 0x71, 0x72, 0x72, 0x73, 0x73, 0x73, 0x74, 0x74, 0x75, 0x75, 0x76, 0x76,
    0x77, 0x77, 0x78, 0x78, 0x78, 0x79, 0x79, 0x7A, 0x7A, 0x7B, 0x7B, 0x7C, 0x7C, 0x7D, 0x7D, 0x7E,
    0x7E, 0x7F, 0x7F, 0x80, 0x80, 0x81, 0x81, 0x82, 0x83, 0x83, 0x84, 0x84, 0x85, 0x85, 0x86, 0x86,
    0x87, 0x88, 0x88, 0x89, 0x89, 0x8A, 0x8A, 0x8B, 0x8C, 0x8C, 0x8D, 0x8D, 0x8E, 0x8F, 0x8F, 0x90,
    0x90, 0x91, 0x92, 0x92, 0x93, 0x94, 0x94, 0x95, 0x95, 0x96, 0x97, 0x97, 0x98, 0x99, 0x99, 0x9A,
    0x9B, 0x9B, 0x9C, 0x9D, 0x9D, 0x9E, 0x9F, 0xA0, 0xA0, 0xA1, 0xA2, 0xA2, 0xA3, 0xA4, 0xA5, 0xA5,
    0xA6, 0xA7, 0xA7, 0xA8, 0xA9, 0xAA, 0xAA, 0xAB, 0xAC, 0xAD, 0xAE, 0xAE, 0xAF, 0xB0, 0xB1, 0xB1,
    0xB2, 0xB3, 0xB4, 0xB5, 0xB6, 0xB6, 0xB7, 0xB8, 0xB9, 0xBA, 0xBA, 0xBB, 0xBC, 0xBD, 0xBE, 0xBF,
    0xC0, 0xC1, 0xC1, 0xC2, 0xC3, 0xC4, 0xC5, 0xC6, 0xC7, 0xC8, 0xC9, 0xC9, 0xCA, 0xCB, 0xCC, 0xCD,
    0xCE, 0xCF, 0xD0, 0xD1, 0xD2, 0xD3, 0xD4, 0xD5, 0xD6, 0xD7, 0xD8, 0xD9, 0xDA, 0xDB, 0xDC, 0xDD,
    0xDE, 0xDF, 0xE0, 0xE1, 0xE2, 0xE3, 0xE4, 0xE5, 0xE6, 0xE7, 0xE8, 0xE9, 0xEA, 0xEB, 0xED, 0xEE,
    0xEF, 0xF0, 0xF1, 0xF2, 0xF3, 0xF4, 0xF5, 0xF7, 0xF8, 0xF9, 0xFA, 0xFB, 0xFC, 0xFD
]);
HCATables.MdctWindow = new Float64Array(_a$1.adaptEndianness6432(new Uint32Array([
    0x00000000, 0x3F46A09E, 0x00000000, 0x3F603077, 0x00000000, 0x3F6E18A7, 0x00000000, 0x3F77724D,
    0x20000000, 0x3F809501, 0x00000000, 0x3F861040, 0x80000000, 0x3F8C2509, 0xE0000000, 0x3F9167E2,
    0x40000000, 0x3F950732, 0xA0000000, 0x3F98EFF7, 0x00000000, 0x3F9D2222, 0xA0000000, 0x3FA0CEF9,
    0x80000000, 0x3FA331F8, 0x80000000, 0x3FA5BA6B, 0x60000000, 0x3FA868C8, 0x20000000, 0x3FAB3D98,
    0x00000000, 0x3FAE3975, 0xC0000000, 0x3FB0AE83, 0x60000000, 0x3FB25482, 0x80000000, 0x3FB40F16,
    0x40000000, 0x3FB5DEA4, 0xC0000000, 0x3FB7C393, 0x60000000, 0x3FB9BE4F, 0xA0000000, 0x3FBBCF43,
    0xA0000000, 0x3FBDF6DD, 0x60000000, 0x3FC01AC5, 0x40000000, 0x3FC145DB, 0x40000000, 0x3FC27CE5,
    0x20000000, 0x3FC3C016, 0x40000000, 0x3FC50F9E, 0xA0000000, 0x3FC66BAA, 0x20000000, 0x3FC7D464,
    0xA0000000, 0x3FC949EE, 0xE0000000, 0x3FCACC67, 0xE0000000, 0x3FCC5BE6, 0x20000000, 0x3FCDF87A,
    0x00000000, 0x3FCFA227, 0x40000000, 0x3FD0AC74, 0xE0000000, 0x3FD18E56, 0x20000000, 0x3FD276AC,
    0xE0000000, 0x3FD3655D, 0xE0000000, 0x3FD45A4D, 0x60000000, 0x3FD55555, 0x40000000, 0x3FD65644,
    0xC0000000, 0x3FD75CE0, 0xE0000000, 0x3FD868E6, 0xA0000000, 0x3FD97A07, 0xC0000000, 0x3FDA8FE8,
    0x00000000, 0x3FDBAA25, 0x80000000, 0x3FDCC84B, 0xE0000000, 0x3FDDE9DF, 0xE0000000, 0x3FDF0E5A,
    0x20000000, 0x3FE01A95, 0x40000000, 0x3FE0AED9, 0x60000000, 0x3FE143A7, 0x00000000, 0x3FE1D8A9,
    0xA0000000, 0x3FE26D84, 0x40000000, 0x3FE301DE, 0x40000000, 0x3FE39558, 0x40000000, 0x3FE42794,
    0xA0000000, 0x3FE4B834, 0xE0000000, 0x3FE546DC, 0x00000000, 0x3FE5D333, 0xA0000000, 0x3FE65CE0,
    0xC0000000, 0x3FE6E393, 0xC0000000, 0x3FE766FF, 0x40000000, 0x3FE7E6DE, 0x00000000, 0x3FE862F0,
    0xC0000000, 0x3FE8DAFC, 0x80000000, 0x3FE94ED4, 0x80000000, 0x3FE9BE4F, 0xE0000000, 0x3FEA294D,
    0xA0000000, 0x3FEA8FB8, 0x60000000, 0x3FEAF180, 0xC0000000, 0x3FEB4E9D, 0xE0000000, 0x3FEBA710,
    0xE0000000, 0x3FEBFAE0, 0x40000000, 0x3FEC4A1B, 0x20000000, 0x3FEC94D3, 0x00000000, 0x3FECDB21,
    0xC0000000, 0x3FED1D21, 0x20000000, 0x3FED5AF6, 0x20000000, 0x3FED94C2, 0x40000000, 0x3FEDCAAC,
    0xE0000000, 0x3FEDFCDC, 0xE0000000, 0x3FEE2B7D, 0x20000000, 0x3FEE56BA, 0xC0000000, 0x3FEE7EBC,
    0x20000000, 0x3FEEA3B1, 0x60000000, 0x3FEEC5C2, 0xE0000000, 0x3FEEE51A, 0x00000000, 0x3FEF01E4,
    0x80000000, 0x3FEF1C46, 0x80000000, 0x3FEF3469, 0xE0000000, 0x3FEF4A72, 0x20000000, 0x3FEF5E87,
    0x00000000, 0x3FEF70C9, 0xC0000000, 0x3FEF8159, 0x00000000, 0x3FEF9059, 0xC0000000, 0x3FEF9DE4,
    0x60000000, 0x3FEFAA19, 0xC0000000, 0x3FEFB511, 0xE0000000, 0x3FEFBEE6, 0xC0000000, 0x3FEFC7B0,
    0x40000000, 0x3FEFCF85, 0x80000000, 0x3FEFD679, 0xE0000000, 0x3FEFDCA0, 0x80000000, 0x3FEFE20D,
    0x60000000, 0x3FEFE6D0, 0x40000000, 0x3FEFEAF9, 0xC0000000, 0x3FEFEE96, 0xC0000000, 0x3FEFF1B6,
    0xC0000000, 0x3FEFF465, 0x60000000, 0x3FEFF6AF, 0xC0000000, 0x3FEFF89E, 0xA0000000, 0x3FEFFA3D,
    0xA0000000, 0x3FEFFB95, 0x20000000, 0x3FEFFCAF, 0x00000000, 0x3FEFFD92, 0xC0000000, 0x3FEFFE45,
    0x00000000, 0x3FEFFED1, 0x00000000, 0x3FEFFF3A, 0x40000000, 0x3FEFFF86, 0x40000000, 0x3FEFFFBB,
    0xA0000000, 0x3FEFFFDD, 0xE0000000, 0x3FEFFFF1, 0xE0000000, 0x3FEFFFFB, 0x80000000, 0x3FEFFFFF
])).buffer);
HCATables.DefaultChannelMapping = new Uint8Array([
    0x00, 0x01, 0x00, 0x04, 0x00, 0x01, 0x03, 0x07, 0x03
]);
HCATables.ValidChannelMappings = [
    new Uint8Array([
        0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x01, 0x01, 0x00, 0x01, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x01, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x01
    ]),
    new Uint8Array([
        0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00
    ]),
    new Uint8Array([
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01
    ]),
    new Uint8Array([
        0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00
    ]),
];
HCATables.DequantizerScalingTable = new Float64Array(_a$1.adaptEndianness6432(new Uint32Array([
    0xCA5D9201, 0x3E8551A4, 0x2E57D139, 0x3E8C67F1, 0xA93E2F4A, 0x3E92ECAF, 0xB0CDC5D5, 0x3E993737,
    0x2B7247ED, 0x3EA0CC92, 0x82552217, 0x3EA66238, 0xF301B44F, 0x3EADD321, 0x4C123416, 0x3EB3DEA6,
    0x1330B349, 0x3EBA799E, 0xEB6FCB6C, 0x3EC1A35B, 0x4FDE5D33, 0x3EC78069, 0x5B6E452F, 0x3ECF5076,
    0x99FDDD03, 0x3ED4DCB2, 0x904BC1C3, 0x3EDBCC1E, 0xE1F56378, 0x3EE284DF, 0x422AA0CF, 0x3EE8ACE5,
    0x29DDF6D6, 0x3EF0706B, 0x15AD213E, 0x3EF5E76F, 0x080D89E3, 0x3EFD2F87, 0x373AA9C2, 0x3F0371A7,
    0x19E32318, 0x3F09E863, 0xAEA92DD8, 0x3F11429A, 0xF951947B, 0x3F16FF7D, 0xA2A490CD, 0x3F1EA4AF,
    0xED1D0050, 0x3F246A41, 0xB84F15F0, 0x3F2B33A2, 0x917DDC90, 0x3F321F49, 0x994CCE0A, 0x3F382589,
    0xA9FB332F, 0x3F40163D, 0x36B527D3, 0x3F456F47, 0x9406E7AC, 0x3F4C8F6D, 0x0A31B70F, 0x3F5306FE,
    0xCBC85207, 0x3F595A44, 0x32D3D19D, 0x3F60E3EC, 0xD44CA96C, 0x3F668155, 0x337B9B56, 0x3F6DFC97,
    0x04AC8016, 0x3F73FA45, 0x5579FDB8, 0x3F7A9E6B, 0x84045CCF, 0x3F81BBE0, 0x73EB0181, 0x3F87A114,
    0xAD9CBE0C, 0x3F8F7BFD, 0x769D2CA2, 0x3F94F9B2, 0x5BD71E03, 0x3F9BF2C2, 0xF51FDEDE, 0x3FA29E9D,
    0x16B54487, 0x3FA8CF32, 0x18759BC5, 0x3FB08745, 0xB976DC05, 0x3FB605E1, 0xDCFBA483, 0x3FBD5818,
    0x6D05D863, 0x3FC38CAE, 0x7B5DE561, 0x3FCA0C66, 0xC8A58E4F, 0x3FD15A98, 0xE8EC5F71, 0x3FD71F75,
    0x2D8E67ED, 0x3FDECF48, 0xB5C13CCE, 0x3FE486A2, 0x8DE55938, 0x3FEB5972, 0x6E756237, 0x3FF2387A,
    0x4623C7AC, 0x3FF8471A, 0x3E778060, 0x40002C9A, 0xD497C7FD, 0x40058D12, 0xDCEF9068, 0x400CB720,
    0xFC4CD831, 0x40132170, 0x9FDE4E50, 0x40197D82, 0xAFFED31B, 0x4020FB66, 0x667F3BCD, 0x4026A09E
])).buffer);
HCATables.QuantizerStepSize = new Float64Array(_a$1.adaptEndianness6432(new Uint32Array([
    0x00000000, 0x00000000, 0x55555555, 0x3FE55555, 0x9999999A, 0x3FD99999, 0x92492492, 0x3FD24924,
    0x1C71C71C, 0x3FCC71C7, 0x745D1746, 0x3FC745D1, 0x13B13B14, 0x3FC3B13B, 0x11111111, 0x3FC11111,
    0x08421084, 0x3FB08421, 0x10410410, 0x3FA04104, 0x81020408, 0x3F902040, 0x10101010, 0x3F801010,
    0x02010080, 0x3F700804, 0x00401004, 0x3F600401, 0x40080100, 0x3F500200, 0x10010010, 0x3F400100
])).buffer);
HCATables.QuantizerDeadZone = new Float64Array(_a$1.adaptEndianness6432(new Uint32Array([
    0xFFFFFFFF, 0xFFFFFFFF, 0x55555553, 0x3FD55555, 0x99999997, 0x3FC99999, 0x9249248E, 0x3FC24924,
    0x1C71C717, 0x3FBC71C7, 0x745D1740, 0x3FB745D1, 0x13B13B0D, 0x3FB3B13B, 0x11111109, 0x3FB11111,
    0x08421074, 0x3FA08421, 0x104103F0, 0x3F904104, 0x810203C8, 0x3F802040, 0x10100F90, 0x3F701010,
    0x0200FF80, 0x3F600804, 0x00400E04, 0x3F500401, 0x4007FD00, 0x3F400200, 0x1000F810, 0x3F300100
])).buffer);
HCATables.QuantizerScalingTable = new Float64Array(_a$1.adaptEndianness6432(new Uint32Array([
    0x543E1A21, 0x41580427, 0x88628CE2, 0x4152063B, 0x298DB677, 0x414B0E07, 0x6061893A, 0x41444E08,
    0xFBC74C96, 0x413E7A51, 0x3C651A3D, 0x4136DFB2, 0xC06C31D6, 0x41312ABD, 0x82A3F0A0, 0x4129C491,
    0x5F929FFC, 0x412356C5, 0x4A07898B, 0x411D072D, 0x8A5946C2, 0x4115C926, 0xD315857D, 0x411059B0,
    0xD98A66A6, 0x41088AC7, 0x65E27CE7, 0x41026B45, 0x30A10656, 0x40FBA5B0, 0xD5362A32, 0x40F4BFDA,
    0x376BBAA6, 0x40EF252B, 0x564267D4, 0x40E75FEB, 0x388C8DF2, 0x40E18AF9, 0xB23E2568, 0x40DA5503,
    0xC313A8ED, 0x40D3C32D, 0x03DB3293, 0x40CDA9E6, 0x34CCC328, 0x40C64346, 0x6CF98916, 0x40C0B558,
    0x0B91FFCF, 0x40B9145B, 0xA6E40313, 0x40B2D285, 0x5FFFD084, 0x40AC40AB, 0x569D4F89, 0x40A5342B,
    0x2B8F71FE, 0x409FD3C2, 0x36CF4E6A, 0x4097E2F3, 0x22FCD922, 0x4091ED50, 0x995AD3B6, 0x408AE89F,
    0xD950A89D, 0x408431F5, 0xE78B3FFF, 0x407E502E, 0x750BDAC6, 0x4076C012, 0xD0125B56, 0x40711301,
    0x70CA07C1, 0x4069A0F1, 0xB2641705, 0x40633C08, 0x555DC401, 0x405CDF0B, 0xDD48542F, 0x4055AB07,
    0xE86E7F89, 0x40504315, 0x9B4492F2, 0x404868D9, 0x4FB2A643, 0x404251CE, 0xF2FB5E4C, 0x403B7F76,
    0xF0D7D3E3, 0x4034A32A, 0xEE615A2D, 0x402EFA1B, 0x48A58178, 0x40273F9A, 0x3C7D517D, 0x402172B8,
    0xEC4A2D37, 0x401A309B, 0x34E59FFA, 0x4013A7DB, 0x16C9839B, 0x400D80E3, 0xB03A5587, 0x4006247E,
    0xCAC6F385, 0x40009E3E, 0x99157739, 0x3FF8F1AE, 0xD0DAD991, 0x3FF2B87F, 0xDD85529E, 0x3FEC199B,
    0xA2CF6642, 0x3FE516DA, 0x819E90DA, 0x3FDFA7C1, 0x0130C133, 0x3FD7C1ED, 0x3168B9AB, 0x3FD1D487,
    0xBFD3F37A, 0x3FCAC36B, 0x21F72E2A, 0x3FC4160A, 0x14F5A129, 0x3FBE2646, 0x667F3BCC, 0x3FB6A09E
])).buffer);
HCATables.QuantizerInverseStepSize = new Float64Array(_a$1.adaptEndianness6432(new Uint32Array([
    0x00000000, 0x3FE00000, 0x00000000, 0x3FF80000, 0x00000000, 0x40040000, 0x00000000, 0x400C0000,
    0x00000000, 0x40120000, 0x00000000, 0x40160000, 0x00000000, 0x401A0000, 0x00000000, 0x401E0000,
    0x00000000, 0x402F0000, 0x00000000, 0x403F8000, 0x00000000, 0x404FC000, 0x00000000, 0x405FE000,
    0x00000000, 0x406FF000, 0x00000000, 0x407FF800, 0x00000000, 0x408FFC00, 0x00000000, 0x409FFE00
])).buffer);
HCATables.ResolutionMaxValues = new Int32Array([
    0x00000000, 0x00000001, 0x00000002, 0x00000003, 0x00000004, 0x00000005, 0x00000006, 0x00000007,
    0x0000000F, 0x0000001F, 0x0000003F, 0x0000007F, 0x000000FF, 0x000001FF, 0x000003FF, 0x000007FF
]);
HCATables.IntensityRatioTable = new Float64Array(_a$1.adaptEndianness6432(new Uint32Array([
    0x00000000, 0x40000000, 0x6DB6DB6E, 0x3FFDB6DB, 0xDB6DB6DB, 0x3FFB6DB6, 0x49249249, 0x3FF92492,
    0xB6DB6DB7, 0x3FF6DB6D, 0x24924925, 0x3FF49249, 0x92492492, 0x3FF24924, 0x00000000, 0x3FF00000,
    0xDB6DB6DB, 0x3FEB6DB6, 0xB6DB6DB7, 0x3FE6DB6D, 0x92492492, 0x3FE24924, 0xDB6DB6DB, 0x3FDB6DB6,
    0x92492492, 0x3FD24924, 0x92492492, 0x3FC24924, 0x00000000, 0x00000000
])).buffer);
HCATables.IntensityRatioBoundsTable = new Float64Array(_a$1.adaptEndianness6432(new Uint32Array([
    0xB6DB6DB7, 0x3FFEDB6D, 0x24924925, 0x3FFC9249, 0x92492492, 0x3FFA4924, 0x00000000, 0x3FF80000,
    0x6DB6DB6E, 0x3FF5B6DB, 0xDB6DB6DB, 0x3FF36DB6, 0x49249249, 0x3FF12492, 0x6DB6DB6E, 0x3FEDB6DB,
    0x49249249, 0x3FE92492, 0x24924925, 0x3FE49249, 0x00000000, 0x3FE00000, 0xB6DB6DB7, 0x3FD6DB6D,
    0xDB6DB6DB, 0x3FCB6DB6, 0x92492492, 0x3FB24924
])).buffer);
HCATables.ScaleConversionTable = new Float64Array(_a$1.adaptEndianness6432(new Uint32Array([
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x21F72E1D, 0x3E54160A, 0xBFD3F368, 0x3E5AC36B,
    0x3168B99F, 0x3E61D487, 0x0130C123, 0x3E67C1ED, 0x819E90C4, 0x3E6FA7C1, 0xA2CF6635, 0x3E7516DA,
    0xDD85528B, 0x3E7C199B, 0xD0DAD985, 0x3E82B87F, 0x99157728, 0x3E88F1AE, 0xCAC6F37A, 0x3E909E3E,
    0xB03A5578, 0x3E96247E, 0x16C98388, 0x3E9D80E3, 0x34E59FEC, 0x3EA3A7DB, 0xEC4A2D26, 0x3EAA309B,
    0x3C7D5172, 0x3EB172B8, 0x48A58168, 0x3EB73F9A, 0xEE615A18, 0x3EBEFA1B, 0xF0D7D3D4, 0x3EC4A32A,
    0xF2FB5E3A, 0x3ECB7F76, 0x4FB2A637, 0x3ED251CE, 0x9B4492E1, 0x3ED868D9, 0xE86E7F7E, 0x3EE04315,
    0xDD485420, 0x3EE5AB07, 0x555DC3EE, 0x3EECDF0B, 0xB26416F7, 0x3EF33C08, 0x70CA07B0, 0x3EF9A0F1,
    0xD0125B4A, 0x3F011301, 0x750BDAB6, 0x3F06C012, 0xE78B3FEB, 0x3F0E502E, 0xD950A890, 0x3F1431F5,
    0x995AD3A4, 0x3F1AE89F, 0x22FCD917, 0x3F21ED50, 0x36CF4E5A, 0x3F27E2F3, 0x2B8F71E7, 0x3F2FD3C2,
    0x569D4F7B, 0x3F35342B, 0x5FFFD072, 0x3F3C40AB, 0xA6E40306, 0x3F42D285, 0x0B91FFBF, 0x3F49145B,
    0x6CF9890B, 0x3F50B558, 0x34CCC31A, 0x3F564346, 0x03DB327E, 0x3F5DA9E6, 0xC313A8E0, 0x3F63C32D,
    0xB23E2557, 0x3F6A5503, 0x388C8DE6, 0x3F718AF9, 0x564267C4, 0x3F775FEB, 0x376BBA92, 0x3F7F252B,
    0xD5362A24, 0x3F84BFDA, 0x30A10645, 0x3F8BA5B0, 0x65E27CDA, 0x3F926B45, 0xD98A6696, 0x3F988AC7,
    0xD3158572, 0x3FA059B0, 0x8A5946B4, 0x3FA5C926, 0x4A078978, 0x3FAD072D, 0x5F929FEF, 0x3FB356C5,
    0x82A3F08E, 0x3FB9C491, 0xC06C31CB, 0x3FC12ABD, 0x3C651A2D, 0x3FC6DFB2, 0xFBC74C82, 0x3FCE7A51,
    0x6061892C, 0x3FD44E08, 0x298DB665, 0x3FDB0E07, 0x88628CD6, 0x3FE2063B, 0x543E1A11, 0x3FE80427,
    0x00000000, 0x3FF00000, 0xCA5D920F, 0x3FF551A4, 0x2E57D14C, 0x3FFC67F1, 0xA93E2F57, 0x4002ECAF,
    0xB0CDC5E6, 0x40093737, 0x2B7247F8, 0x4010CC92, 0x82552226, 0x40166238, 0xF301B463, 0x401DD321,
    0x4C123424, 0x4023DEA6, 0x1330B35B, 0x402A799E, 0xEB6FCB77, 0x4031A35B, 0x4FDE5D42, 0x40378069,
    0x5B6E4544, 0x403F5076, 0x99FDDD10, 0x4044DCB2, 0x904BC1D6, 0x404BCC1E, 0xE1F56384, 0x405284DF,
    0x422AA0E0, 0x4058ACE5, 0x29DDF6E1, 0x4060706B, 0x15AD214D, 0x4065E76F, 0x080D89F8, 0x406D2F87,
    0x373AA9CF, 0x407371A7, 0x19E32329, 0x4079E863, 0xAEA92DE4, 0x4081429A, 0xF951948A, 0x4086FF7D,
    0xA2A490E1, 0x408EA4AF, 0xED1D005D, 0x40946A41, 0xB84F1603, 0x409B33A2, 0x917DDC9B, 0x40A21F49,
    0x994CCE1A, 0x40A82589, 0xA9FB333A, 0x40B0163D, 0x36B527E1, 0x40B56F47, 0x9406E7BF, 0x40BC8F6D,
    0x0A31B71C, 0x40C306FE, 0xCBC85218, 0x40C95A44, 0x32D3D1A8, 0x40D0E3EC, 0xD44CA97C, 0x40D68155,
    0x337B9B6A, 0x40DDFC97, 0x04AC8024, 0x40E3FA45, 0x5579FDCA, 0x40EA9E6B, 0x84045CDB, 0x40F1BBE0,
    0x73EB0191, 0x40F7A114, 0xAD9CBE21, 0x40FF7BFD, 0x769D2CB0, 0x4104F9B2, 0x5BD71E15, 0x410BF2C2,
    0xF51FDEEA, 0x41129E9D, 0x16B54498, 0x4118CF32, 0x18759BD0, 0x41208745, 0xB976DC14, 0x412605E1,
    0xDCFBA496, 0x412D5818, 0x6D05D870, 0x41338CAE, 0x7B5DE573, 0x413A0C66, 0xC8A58E5B, 0x41415A98,
    0xE8EC5F81, 0x41471F75, 0x2D8E6802, 0x414ECF48, 0xB5C13CDC, 0x415486A2, 0x8DE5594A, 0x415B5972,
    0x6E756243, 0x4162387A, 0x4623C7BC, 0x4168471A, 0x3E77806B, 0x41702C9A, 0xD497C80B, 0x41758D12,
    0xDCEF907C, 0x417CB720, 0xFC4CD83E, 0x41832170, 0x9FDE4E61, 0x41897D82, 0x00000000, 0x00000000
])).buffer);

class HCAChannel {
    constructor(values) {
        this.Type = 0;
        this.CodedScaleFactorCount = 0;
        this.PcmFloat = Array.from({ length: SubframesPerFrame }, () => new Float64Array(SamplesPerSubFrame));
        this.Spectra = Array.from({ length: SubframesPerFrame }, () => new Float64Array(SamplesPerSubFrame));
        this.ScaledSpectra = Array.from({
            length: SamplesPerSubFrame,
        }, () => new Float64Array(SubframesPerFrame));
        this.QuantizedSpectra = Array.from({
            length: SubframesPerFrame,
        }, () => new Int32Array(SamplesPerSubFrame));
        this.Gain = new Float64Array(SamplesPerSubFrame);
        this.Intensity = new Int32Array(SubframesPerFrame);
        this.HfrScales = new Int32Array(8);
        this.HfrGroupAverageSpectra = new Float64Array(8);
        this.Mdct = new Mdct(SubFrameSamplesBits, HCATables.MdctWindow, Math.sqrt(2.0 / SamplesPerSubFrame));
        this.ScaleFactors = new Int32Array(SamplesPerSubFrame);
        this.Resolution = new Int32Array(SamplesPerSubFrame);
        this.HeaderLengthBits = 0;
        this.ScaleFactorDeltaBits = 0;
        let t = this;
        for (let key in values) {
            t[key] = values[key];
        }
    }
}

var _a;
class HCAFrame {
    constructor(hca) {
        this.AcceptableNoiseLevel = 0;
        this.EvaluationBoundary = 0;
        this.Hca = hca;
        let channelTypes = HCAFrame.GetChannelTypes(hca);
        this.Channels = [];
        for (let i = 0; i < hca.format.channelCount; i++) {
            this.Channels.push(new HCAChannel({
                Type: channelTypes[i],
                CodedScaleFactorCount: channelTypes[i] == ChannelType.StereoSecondary
                    ? hca.compDec.BaseBandCount
                    : hca.compDec.BaseBandCount + hca.compDec.StereoBandCount,
            }));
        }
        this.AthCurve = hca.UseAthCurve
            ? HCAFrame.ScaleAthCurve(hca.format.samplingRate)
            : new Uint8Array(SamplesPerSubFrame);
    }
    static GetChannelTypes(hca) {
        let channelsPerTrack = hca.format.channelCount / hca.compDec.TrackCount;
        if (hca.compDec.StereoBandCount == 0 || channelsPerTrack == 1) {
            return new Array(8).fill(ChannelType);
        }
        const Discrete = ChannelType.Discrete;
        const StereoPrimary = ChannelType.StereoPrimary;
        const StereoSecondary = ChannelType.StereoSecondary;
        switch (channelsPerTrack) {
            case 2:
                return [StereoPrimary, StereoSecondary];
            case 3:
                return [StereoPrimary, StereoSecondary, Discrete];
            case 4:
                if (hca.compDec.ChannelConfig != 0) {
                    return [StereoPrimary, StereoSecondary, Discrete, Discrete];
                }
                else {
                    return [
                        StereoPrimary,
                        StereoSecondary,
                        StereoPrimary,
                        StereoSecondary,
                    ];
                }
            case 5:
                if (hca.compDec.ChannelConfig > 2) {
                    return [StereoPrimary, StereoSecondary, Discrete, Discrete, Discrete];
                }
                else {
                    return [
                        StereoPrimary,
                        StereoSecondary,
                        Discrete,
                        StereoPrimary,
                        StereoSecondary,
                    ];
                }
            case 6:
                return [
                    StereoPrimary,
                    StereoSecondary,
                    Discrete,
                    Discrete,
                    StereoPrimary,
                    StereoSecondary,
                ];
            case 7:
                return [
                    StereoPrimary,
                    StereoSecondary,
                    Discrete,
                    Discrete,
                    StereoPrimary,
                    StereoSecondary,
                    Discrete,
                ];
            case 8:
                return [
                    StereoPrimary,
                    StereoSecondary,
                    Discrete,
                    Discrete,
                    StereoPrimary,
                    StereoSecondary,
                    StereoPrimary,
                    StereoSecondary,
                ];
            default:
                return new Array(channelsPerTrack).fill(ChannelType);
        }
    }
    /**
     * Scales an ATH curve to the specified frequency.
     *
     * The original ATH curve is for a frequency of 41856 Hz.
     * @param frequency The frequency to scale the curve to.
     * @returns The scaled ATH curve
     */
    static ScaleAthCurve(frequency) {
        var ath = new Uint8Array(SamplesPerSubFrame);
        let acc = 0;
        let i;
        for (i = 0; i < ath.length; i++) {
            acc += frequency;
            let index = acc >> 13;
            if (index >= HCATables.AthCurve.length) {
                break;
            }
            ath[i] = HCATables.AthCurve[index];
        }
        for (; i < ath.length; i++) {
            ath[i] = 0xff;
        }
        return ath;
    }
}
_a = HCAFrame;
HCAFrame.SubframesPerFrame = 8;
HCAFrame.SubFrameSamplesBits = 7;
HCAFrame.SamplesPerSubFrame = 1 << _a.SubFrameSamplesBits;
HCAFrame.SamplesPerFrame = _a.SubframesPerFrame * _a.SamplesPerSubFrame;

class HCAPacking {
    static UnpackFrame(frame, reader) {
        if (!this.UnpackFrameHeader(frame, reader))
            return false;
        this.ReadSpectralCoefficients(frame, reader);
        return this.UnpackingWasSuccessful(frame, reader);
    }
    static PackFrame(frame, outBuffer) {
        var writer = new BitWriter(outBuffer);
        writer.Write(0xffff, 16);
        writer.Write(frame.AcceptableNoiseLevel, 9);
        writer.Write(frame.EvaluationBoundary, 7);
        for (let channel of frame.Channels) {
            this.WriteScaleFactors(writer, channel);
            if (channel.Type == ChannelType.StereoSecondary) {
                for (let i = 0; i < SubframesPerFrame; i++) {
                    writer.Write(channel.Intensity[i], 4);
                }
            }
            else if (frame.Hca.HfrGroupCount > 0) {
                for (let i = 0; i < frame.Hca.HfrGroupCount; i++) {
                    writer.Write(channel.HfrScales[i], 6);
                }
            }
        }
        for (let sf = 0; sf < SubframesPerFrame; sf++) {
            for (let channel of frame.Channels) {
                this.WriteSpectra(writer, channel, sf);
            }
        }
        writer.AlignPosition(8);
        for (let i = writer.Position / 8; i < frame.Hca.blockSize - 2; i++) {
            writer.dv.setUint8(i, 0);
        }
        this.WriteChecksum(writer, outBuffer);
    }
    static CalculateResolution(scaleFactor, noiseLevel, versionMajor) {
        if (scaleFactor == 0) {
            return 0;
        }
        let curvePosition = noiseLevel - (5 * scaleFactor >> 1) + 2;
        //https://github.com/vgmstream/vgmstream/blob/4eecdada9a03a73af0c7c17f5cd6e08518fd7e3f/src/coding/hca_decoder_clhca.c#L1450
        //FIXME hca2.0 decoding breaks if conditional (ternary) operator is removed
        //curvePosition = HCAUtilFunc.Clamp(curvePosition, 0, 67);
        curvePosition = Clamp(curvePosition, 0, versionMajor <= 2 ? 58 : 67);
        return HCATables.ScaleToResolutionCurve[curvePosition];
    }
    static UnpackFrameHeader(frame, reader) {
        let hca = frame.Hca;
        let syncWord = reader.ReadInt(16);
        if (syncWord != 0xffff) {
            throw new Error("Invalid frame header");
        }
        let athCurve = frame.AthCurve;
        frame.AcceptableNoiseLevel = reader.ReadInt(9);
        frame.EvaluationBoundary = reader.ReadInt(7);
        for (let channel of frame.Channels) {
            if (!this.ReadScaleFactors(channel, reader, hca.HfrGroupCount, hca.versionMajor))
                return false;
            // added clamp
            //https://github.com/vgmstream/vgmstream/blob/4eecdada9a03a73af0c7c17f5cd6e08518fd7e3f/src/coding/hca_decoder_clhca.c#L1462
            for (let i = 0; i < frame.EvaluationBoundary; i++) {
                let newResolution = this.CalculateResolution(channel.ScaleFactors[i], athCurve[i] + frame.AcceptableNoiseLevel - 1, hca.versionMajor);
                if (hca.versionMajor > 2)
                    newResolution = Clamp(newResolution, hca.compDec.MinResolution, hca.compDec.MaxResolution);
                channel.Resolution[i] = newResolution;
            }
            for (let i = frame.EvaluationBoundary; i < channel.CodedScaleFactorCount; i++) {
                let newResolution = this.CalculateResolution(channel.ScaleFactors[i], athCurve[i] + frame.AcceptableNoiseLevel, hca.versionMajor);
                if (hca.versionMajor > 2)
                    newResolution = Clamp(newResolution, hca.compDec.MinResolution, hca.compDec.MaxResolution);
                channel.Resolution[i] = newResolution;
            }
            if (channel.Type == ChannelType.StereoSecondary) {
                this.ReadIntensity(reader, channel.Intensity, hca.versionMajor);
            }
            else if (frame.Hca.HfrGroupCount > 0) {
                if (hca.versionMajor <= 2)
                    this.ReadHfrScaleFactors(reader, frame.Hca.HfrGroupCount, channel.HfrScales);
                // v3.0 uses values derived in ReadScaleFactors
            }
        }
        return true;
    }
    static ReadScaleFactors(channel, reader, hfrGroupCount, versionMajor) {
        channel.ScaleFactorDeltaBits = reader.ReadInt(3);
        if (channel.ScaleFactorDeltaBits == 0) {
            channel.ScaleFactors.fill(0, 0, channel.ScaleFactors.length);
            return true;
        }
        // added in v3.0
        // https://github.com/vgmstream/vgmstream/blob/4eecdada9a03a73af0c7c17f5cd6e08518fd7e3f/src/coding/hca_decoder_clhca.c#L1287
        let extraCodedScaleFactorCount;
        let codedScaleFactorCount;
        if (channel.Type == ChannelType.StereoSecondary || hfrGroupCount <= 0 || versionMajor <= 2) {
            extraCodedScaleFactorCount = 0;
            codedScaleFactorCount = channel.CodedScaleFactorCount;
        }
        else {
            extraCodedScaleFactorCount = hfrGroupCount;
            codedScaleFactorCount = channel.CodedScaleFactorCount + extraCodedScaleFactorCount;
            // just in case
            if (codedScaleFactorCount > HCAFrame.SamplesPerSubFrame)
                throw new Error(`codedScaleFactorCount > HCAFrame.SamplesPerSubFrame`);
        }
        if (channel.ScaleFactorDeltaBits >= 6) {
            for (let i = 0; i < codedScaleFactorCount; i++) {
                channel.ScaleFactors[i] = reader.ReadInt(6);
            }
            return true;
        }
        let result = this.DeltaDecode(reader, channel.ScaleFactorDeltaBits, 6, codedScaleFactorCount, channel.ScaleFactors);
        if (!result)
            return result;
        // set derived HFR scales for v3.0
        //FIXME UNTESTED
        for (let i = 0; i < extraCodedScaleFactorCount; i++) {
            channel.HfrScales[codedScaleFactorCount - 1 - i] = channel.ScaleFactors[codedScaleFactorCount - i];
        }
        return result;
    }
    static ReadIntensity(reader, intensity, versionMajor) {
        if (versionMajor <= 2) {
            for (let i = 0; i < HCAFrame.SubframesPerFrame; i++) {
                intensity[i] = reader.ReadInt(4);
            }
        }
        else {
            //https://github.com/vgmstream/vgmstream/blob/4eecdada9a03a73af0c7c17f5cd6e08518fd7e3f/src/coding/hca_decoder_clhca.c#L1374
            let value = reader.ReadInt(4);
            let delta_bits;
            if (value < 15) {
                delta_bits = reader.ReadInt(2); /* +1 */
                intensity[0] = value;
                if (delta_bits == 3) { /* 3+1 = 4b */
                    /* fixed intensities */
                    for (let i = 1; i < HCAFrame.SubframesPerFrame; i++) {
                        intensity[i] = reader.ReadInt(4);
                    }
                }
                else {
                    /* delta intensities */
                    let bmax = (2 << delta_bits) - 1;
                    let bits = delta_bits + 1;
                    for (let i = 1; i < HCAFrame.SubframesPerFrame; i++) {
                        let delta = reader.ReadInt(bits);
                        if (delta == bmax) {
                            value = reader.ReadInt(4); /* encoded */
                        }
                        else {
                            value = value - (bmax >> 1) + delta; /* differential */
                            if (value > 15) //todo check
                                throw new Error(`value > 15`); /* not done in lib */
                        }
                        intensity[i] = value;
                    }
                }
            }
            else {
                for (let i = 0; i < HCAFrame.SubframesPerFrame; i++) {
                    intensity[i] = 7;
                }
            }
        }
    }
    static ReadHfrScaleFactors(reader, groupCount, hfrScale) {
        for (let i = 0; i < groupCount; i++) {
            hfrScale[i] = reader.ReadInt(6);
        }
    }
    static ReadSpectralCoefficients(frame, reader) {
        for (let sf = 0; sf < SubframesPerFrame; sf++) {
            for (let channel of frame.Channels) {
                for (let s = 0; s < channel.CodedScaleFactorCount; s++) {
                    let resolution = channel.Resolution[s];
                    let bits = HCATables.QuantizedSpectrumMaxBits[resolution];
                    let code = reader.PeekInt(bits);
                    if (resolution < 8) {
                        bits = HCATables.QuantizedSpectrumBits[resolution][code];
                        channel.QuantizedSpectra[sf][s] =
                            HCATables.QuantizedSpectrumValue[resolution][code];
                    }
                    else {
                        // Read the sign-magnitude value. The low bit is the sign
                        let quantizedCoefficient = (code >> 1) * (1 - (code % 2 * 2));
                        if (quantizedCoefficient == 0) {
                            bits--;
                        }
                        channel.QuantizedSpectra[sf][s] = quantizedCoefficient;
                    }
                    reader.Position += bits;
                }
                channel.Spectra[sf].fill(0, channel.CodedScaleFactorCount, channel.CodedScaleFactorCount + 0x80 - channel.CodedScaleFactorCount);
            }
        }
    }
    static DeltaDecode(reader, deltaBits, dataBits, count, output) {
        output[0] = reader.ReadInt(dataBits);
        let maxDelta = 1 << (deltaBits - 1);
        let maxValue = (1 << dataBits) - 1;
        for (let i = 1; i < count; i++) {
            let delta = reader.ReadOffsetBinary(deltaBits, HCABitReader.OffsetBias.Positive);
            if (delta < maxDelta) {
                let value = output[i - 1] + delta;
                if (value < 0 || value > maxValue) {
                    return false;
                }
                // https://github.com/vgmstream/vgmstream/blob/4eecdada9a03a73af0c7c17f5cd6e08518fd7e3f/src/coding/hca_decoder_clhca.c#L1327
                //value &= 0x3F; // v3.0 lib
                output[i] = value;
            }
            else {
                output[i] = reader.ReadInt(dataBits);
            }
        }
        return true;
    }
    static UnpackingWasSuccessful(frame, reader) {
        // 128 leftover bits after unpacking should be high enough to get rid of false negatives,
        // and low enough that false positives will be uncommon.
        return reader.Remaining >= 16 && reader.Remaining <= 128 ||
            this.FrameEmpty(frame) ||
            frame.AcceptableNoiseLevel == 0 && reader.Remaining >= 16;
    }
    static FrameEmpty(frame) {
        if (frame.AcceptableNoiseLevel > 0)
            return false;
        // If all the scale factors are 0, the frame is empty
        for (let channel of frame.Channels) {
            if (channel.ScaleFactorDeltaBits > 0) {
                return false;
            }
        }
        return true;
    }
    static WriteChecksum(writer, hcaBuffer) {
        writer.Position = writer.LengthBits - 16;
        let crc16 = Crc16.calc(hcaBuffer, hcaBuffer.length - 2);
        writer.Write(crc16, 16);
    }
    static WriteSpectra(writer, channel, subFrame) {
        for (let i = 0; i < channel.CodedScaleFactorCount; i++) {
            let resolution = channel.Resolution[i];
            let quantizedSpectra = channel.QuantizedSpectra[subFrame][i];
            if (resolution == 0)
                continue;
            if (resolution < 8) {
                let bits = HCATables.QuantizeSpectrumBits[resolution][quantizedSpectra + 8];
                writer.Write(HCATables.QuantizeSpectrumValue[resolution][quantizedSpectra + 8], bits);
            }
            else if (resolution < 16) {
                let bits = HCATables.QuantizedSpectrumMaxBits[resolution] - 1;
                writer.Write(Math.abs(quantizedSpectra), bits);
                if (quantizedSpectra != 0) {
                    writer.Write(quantizedSpectra > 0 ? 0 : 1, 1);
                }
            }
        }
    }
    static WriteScaleFactors(writer, channel) {
        let deltaBits = channel.ScaleFactorDeltaBits;
        let scales = channel.ScaleFactors;
        writer.Write(deltaBits, 3);
        if (deltaBits == 0)
            return;
        if (deltaBits == 6) {
            for (let i = 0; i < channel.CodedScaleFactorCount; i++) {
                writer.Write(scales[i], 6);
            }
            return;
        }
        writer.Write(scales[0], 6);
        let maxDelta = (1 << (deltaBits - 1)) - 1;
        let escapeValue = (1 << deltaBits) - 1;
        for (let i = 1; i < channel.CodedScaleFactorCount; i++) {
            let delta = scales[i] - scales[i - 1];
            if (Math.abs(delta) > maxDelta) {
                writer.Write(escapeValue, deltaBits);
                writer.Write(scales[i], 6);
            }
            else {
                writer.Write(maxDelta + delta, deltaBits);
            }
        }
    }
}

class HCADecoder {
    static DecodeFrame(audio, frame) {
        let reader = new HCABitReader(audio);
        if (!HCAPacking.UnpackFrame(frame, reader))
            throw new Error(`UnpackFrame failed`);
        this.DequantizeFrame(frame);
        this.RestoreMissingBands(frame);
        this.RunImdct(frame);
    }
    static DequantizeFrame(frame) {
        for (let channel of frame.Channels) {
            this.CalculateGain(channel);
        }
        for (let sf = 0; sf < SubframesPerFrame; sf++) {
            for (let channel of frame.Channels) {
                for (let s = 0; s < channel.CodedScaleFactorCount; s++) {
                    channel.Spectra[sf][s] = channel.QuantizedSpectra[sf][s] *
                        channel.Gain[s];
                }
            }
        }
    }
    static RestoreMissingBands(frame) {
        this.ReconstructHighFrequency(frame);
        this.ApplyIntensityStereo(frame);
    }
    static CalculateGain(channel) {
        for (let i = 0; i < channel.CodedScaleFactorCount; i++) {
            channel.Gain[i] =
                HCATables.DequantizerScalingTable[channel.ScaleFactors[i]] *
                    HCATables.QuantizerStepSize[channel.Resolution[i]];
        }
    }
    static ReconstructHighFrequency(frame) {
        let hca = frame.Hca;
        if (hca.HfrGroupCount == 0)
            return;
        // The last spectral coefficient should always be 0;
        let totalBandCount = Math.min(hca.compDec.TotalBandCount, 127);
        let hfrStartBand = hca.compDec.BaseBandCount + hca.compDec.StereoBandCount;
        let hfrBandCount = Math.min(hca.compDec.HfrBandCount, totalBandCount - hca.compDec.HfrBandCount);
        for (let channel of frame.Channels) {
            if (channel.Type == ChannelType.StereoSecondary)
                continue;
            for (let group = 0, band = 0; group < hca.HfrGroupCount; group++) {
                for (let i = 0; i < hca.compDec.BandsPerHfrGroup && band < hfrBandCount; band++, i++) {
                    let highBand = hfrStartBand + band;
                    let lowBand = hfrStartBand - band - 1;
                    let index = channel.HfrScales[group] - channel.ScaleFactors[lowBand] +
                        64;
                    for (let sf = 0; sf < SubframesPerFrame; sf++) {
                        channel.Spectra[sf][highBand] =
                            HCATables.ScaleConversionTable[index] *
                                channel.Spectra[sf][lowBand];
                    }
                }
            }
        }
    }
    static ApplyIntensityStereo(frame) {
        if (frame.Hca.compDec.StereoBandCount <= 0)
            return;
        for (let c = 0; c < frame.Channels.length; c++) {
            if (frame.Channels[c].Type != ChannelType.StereoPrimary)
                continue;
            for (let sf = 0; sf < SubframesPerFrame; sf++) {
                let l = frame.Channels[c].Spectra[sf];
                let r = frame.Channels[c + 1].Spectra[sf];
                let ratioL = HCATables.IntensityRatioTable[frame.Channels[c + 1].Intensity[sf]];
                let ratioR = ratioL - 2.0;
                for (let b = frame.Hca.compDec.BaseBandCount; b < frame.Hca.compDec.TotalBandCount; b++) {
                    r[b] = l[b] * ratioR;
                    l[b] *= ratioL;
                }
            }
        }
    }
    static RunImdct(frame) {
        for (let sf = 0; sf < SubframesPerFrame; sf++) {
            for (let channel of frame.Channels) {
                channel.Mdct.RunImdct(channel.Spectra[sf], channel.PcmFloat[sf]);
            }
        }
    }
}

class HCAInfo {
    constructor(hca, changeMask = false, encrypt = false, skipMake = false) {
        this.Looping = false;
        this.FrameSize = 0;
        this.InsertedSamples = 0;
        this.HeaderSize = 0;
        this.CommentLength = 0;
        this.EncryptionType = 0;
        this.version = "";
        this.versionMajor = 2;
        this.versionMinor = 0;
        this.dataOffset = 0;
        this.format = {
            channelCount: 0,
            samplingRate: 0,
            blockCount: 0,
            droppedHeader: 0,
            droppedFooter: 0,
        };
        this.blockSize = 0;
        this.hasHeader = {};
        this.headerOffset = {}; // [start (inclusive), end (exclusive)]
        this.kbps = 0;
        this.compDec = {
            MinResolution: 0,
            MaxResolution: 0,
            TrackCount: 0,
            ChannelConfig: 0,
            TotalBandCount: 0,
            BaseBandCount: 0,
            StereoBandCount: 0,
            HfrBandCount: 0,
            BandsPerHfrGroup: 0,
            Reserved1: 0,
            Reserved2: 0,
        };
        this.dec = {
            DecStereoType: 0,
        };
        this.loop = {
            start: 0,
            end: 0,
            // count: 0, // Nyagamon's interpretation
            // r01: 0,
            droppedHeader: 0,
            droppedFooter: 0,
        };
        this.vbr = {
            MaxBlockSize: 0,
            NoiseLevel: 0,
        };
        this.UseAthCurve = false;
        this.cipher = 0;
        this.rva = 1;
        this.comment = "";
        // computed sample count/offsets
        this.HfrGroupCount = 0;
        this.fullSampleCount = 0;
        this.startAtSample = 0;
        this.fullEndAtSample = 0;
        this.loopStartAtSample = 0;
        this.loopEndAtSample = 0;
        this.loopSampleCount = 0;
        this.loopStartTime = 0; // in seconds
        this.loopEndTime = 0; // in seconds
        this.loopDuration = 0; // in seconds
        this.endAtSample = 0;
        this.sampleCount = 0;
        this.duration = 0; // in seconds
        // full file size / data part (excluding header, just blocks/frames) size
        this.fullSize = 0;
        this.dataSize = 0;
        // if changeMask == true, (un)mask the header sigs in-place
        if (skipMake) {
            this.rawHeader = hca;
        }
        else {
            this.rawHeader = this.parseHeader(hca, changeMask, encrypt, {});
        }
    }
    get ChannelCount() {
        return this.format.channelCount;
    }
    set ChannelCount(value) {
        this.format.channelCount = value;
    }
    get SampleCount() {
        return this.sampleCount;
    }
    set SampleCount(value) {
        this.sampleCount = value;
    }
    get TrackCount() {
        return this.compDec.TrackCount;
    }
    set TrackCount(value) {
        this.compDec.TrackCount = value;
    }
    get SampleRate() {
        return this.format.samplingRate;
    }
    set SampleRate(value) {
        this.format.samplingRate = value;
    }
    set MinResolution(value) {
        this.compDec.MinResolution = value;
    }
    get MinResolution() {
        return this.compDec.MinResolution;
    }
    set MaxResolution(value) {
        this.compDec.MaxResolution = value;
    }
    get MaxResolution() {
        return this.compDec.MaxResolution;
    }
    get TotalBandCount() {
        return this.compDec.TotalBandCount;
    }
    set TotalBandCount(value) {
        this.compDec.TotalBandCount = value;
    }
    get BaseBandCount() {
        return this.compDec.BaseBandCount;
    }
    set BaseBandCount(value) {
        this.compDec.BaseBandCount = value;
    }
    get StereoBandCount() {
        return this.compDec.StereoBandCount;
    }
    set StereoBandCount(value) {
        this.compDec.StereoBandCount = value;
    }
    get BandsPerHfrGroup() {
        return this.compDec.BandsPerHfrGroup;
    }
    set BandsPerHfrGroup(value) {
        this.compDec.BandsPerHfrGroup = value;
    }
    get ChannelConfig() {
        return this.compDec.ChannelConfig;
    }
    set ChannelConfig(value) {
        this.compDec.ChannelConfig = value;
    }
    get LoopStartFrame() {
        return this.loop.start;
    }
    set LoopStartFrame(value) {
        this.loop.start = value;
    }
    get LoopEndFrame() {
        return this.loop.end;
    }
    set LoopEndFrame(value) {
        this.loop.end = value;
    }
    get PreLoopSamples() {
        return this.loop.droppedHeader;
    }
    set PreLoopSamples(value) {
        this.loop.droppedHeader = value;
    }
    get PostLoopSamples() {
        return this.loop.droppedFooter;
    }
    set PostLoopSamples(value) {
        this.loop.droppedFooter = value;
    }
    get FrameCount() {
        return this.format.blockCount;
    }
    set FrameCount(value) {
        this.format.blockCount = value;
    }
    get AppendedSamples() {
        return this.format.droppedFooter;
    }
    set AppendedSamples(value) {
        this.format.droppedFooter = value;
    }
    get LoopStartSample() {
        return this.LoopStartFrame * 1024 + this.PreLoopSamples - this.InsertedSamples;
    }
    get HfrBandCount() {
        return this.compDec.HfrBandCount;
    }
    set HfrBandCount(value) {
        this.compDec.HfrBandCount = value;
    }
    get LoopEndSample() {
        return (this.LoopEndFrame + 1) * 1024 - this.PostLoopSamples - this.InsertedSamples;
    }
    get Volume() {
        return this.rva;
    }
    set Volume(value) {
        this.rva = value;
    }
    set Comment(value) {
        this.comment = value;
    }
    get Comment() {
        return this.comment;
    }
    static getSign(raw, offset = 0, changeMask, encrypt) {
        let magic = raw.getUint32(offset, true);
        let strLen = 4;
        for (let i = 0; i < 4; i++) {
            if (raw.getUint8(offset + i) == 0) {
                strLen = i;
                break;
            }
        }
        if (strLen > 0) {
            let mask = 0x80808080 >>> 8 * (4 - strLen);
            magic &= 0x7f7f7f7f;
            if (changeMask) {
                raw.setUint32(offset, encrypt ? magic | mask : magic, true);
            }
        }
        let hex = [
            magic & 0xff,
            magic >> 8 & 0xff,
            magic >> 16 & 0xff,
            magic >> 24 & 0xff,
        ];
        hex = hex.slice(0, strLen);
        return String.fromCharCode.apply(String, hex);
    }
    clone() {
        return new HCAInfo(this.rawHeader);
    }
    parseHeader(hca, changeMask, encrypt, modList) {
        let p = new DataView(hca.buffer, hca.byteOffset, 8);
        let head = HCAInfo.getSign(p, 0, false, encrypt); // do not overwrite for now, until checksum verified
        if (head !== "HCA") {
            throw new Error("Not a HCA file");
        }
        const version = {
            main: p.getUint8(4),
            sub: p.getUint8(5),
        };
        this.version = version.main + "." + version.sub;
        this.versionMajor = version.main;
        this.versionMinor = version.sub;
        this.dataOffset = p.getUint16(6);
        // verify checksum
        Crc16.verify(hca, this.dataOffset - 2);
        let hasModDone = false;
        // checksum verified, now we can overwrite it
        if (changeMask)
            HCAInfo.getSign(p, 0, changeMask, encrypt);
        // parse the header
        p = new DataView(hca.buffer, hca.byteOffset, this.dataOffset);
        let ftell = 8;
        while (ftell < this.dataOffset - 2) {
            let lastFtell = ftell;
            // get the sig
            let sign = HCAInfo.getSign(p, ftell, changeMask, encrypt);
            // record hasHeader
            this.hasHeader[sign] = true;
            // padding should be the last one
            if (sign == "pad") {
                this.headerOffset[sign] = [ftell, this.dataOffset - 2];
                break;
            }
            // parse data accordingly
            switch (sign) {
                case "fmt":
                    this.format.channelCount = p.getUint8(ftell + 4); //ChannelCount
                    this.format.samplingRate = p.getUint32(ftell + 4) & 0x00ffffff; //SampleRate
                    this.format.blockCount = p.getUint32(ftell + 8); //FrameCount
                    this.format.droppedHeader = p.getUint16(ftell + 12); //InsertedSamples
                    this.format.droppedFooter = p.getUint16(ftell + 14); //AppendedSamples
                    ftell += 16;
                    break;
                case "comp":
                    this.blockSize = p.getUint16(ftell + 4); //FrameSize
                    this.kbps = this.format.samplingRate * this.blockSize / 128000.0;
                    this.compDec.MinResolution = p.getUint8(ftell + 6);
                    this.compDec.MaxResolution = p.getUint8(ftell + 7);
                    this.compDec.TrackCount = p.getUint8(ftell + 8);
                    this.compDec.ChannelConfig = p.getUint8(ftell + 9);
                    this.compDec.TotalBandCount = p.getUint8(ftell + 10);
                    this.compDec.BaseBandCount = p.getUint8(ftell + 11);
                    this.compDec.StereoBandCount = p.getUint8(ftell + 12);
                    this.compDec.BandsPerHfrGroup = p.getUint8(ftell + 13);
                    this.compDec.Reserved1 = p.getUint8(ftell + 14);
                    this.compDec.Reserved2 = p.getUint8(ftell + 15);
                    ftell += 16;
                    break;
                case "dec":
                    this.blockSize = p.getUint16(ftell + 4); //FrameSize
                    this.kbps = this.format.samplingRate * this.blockSize / 128000.0;
                    this.compDec.MinResolution = p.getUint8(ftell + 6);
                    this.compDec.MaxResolution = p.getUint8(ftell + 7);
                    this.compDec.TotalBandCount = p.getUint8(ftell + 8);
                    this.compDec.BaseBandCount = p.getUint8(ftell + 9);
                    let a = p.getUint8(ftell + 10);
                    this.compDec.TrackCount = GetHighNibble(a);
                    this.compDec.ChannelConfig = GetLowNibble(a);
                    this.dec.DecStereoType = p.getUint8(ftell + 11);
                    if (this.dec.DecStereoType == 0) {
                        this.compDec.BaseBandCount = this.compDec.TotalBandCount;
                    }
                    else {
                        this.compDec.StereoBandCount = this.compDec.TotalBandCount -
                            this.compDec.BaseBandCount;
                    }
                    ftell += 12;
                    break;
                case "vbr":
                    this.vbr.MaxBlockSize = p.getUint16(ftell + 4);
                    this.vbr.NoiseLevel = p.getInt16(ftell + 6);
                    ftell += 8;
                    break;
                case "ath":
                    this.UseAthCurve = p.getUint16(ftell + 4) == 1;
                    ftell += 6;
                    break;
                case "loop":
                    this.Looping = true;
                    this.loop.start = p.getUint32(ftell + 4);
                    this.loop.end = p.getUint32(ftell + 8);
                    this.loop.droppedHeader = p.getUint16(ftell + 12);
                    this.loop.droppedFooter = p.getUint16(ftell + 14);
                    ftell += 16;
                    break;
                case "ciph":
                    this.cipher = p.getUint16(ftell + 4);
                    ftell += 6;
                    break;
                case "rva":
                    this.rva = p.getFloat32(ftell + 4); //Volume
                    ftell += 8;
                    break;
                case "comm":
                    let len = p.getUint8(ftell + 4);
                    let jisdecoder = new TextDecoder("shift-jis");
                    this.comment = jisdecoder.decode(hca.slice(ftell + 5, ftell + 5 + len));
                    break;
                default:
                    throw new Error("unknown header sig");
            }
            // record headerOffset
            this.headerOffset[sign] = [lastFtell, ftell];
            // do modification if needed
            let sectionDataLen = ftell - lastFtell - 4;
            let newData = modList[sign];
            if (newData != null) {
                if (newData.byteLength > sectionDataLen)
                    throw new Error();
                hca.set(newData, lastFtell + 4);
                hasModDone = true;
            }
        }
        /*
          // (ported from) Nyagamon's original code, should be (almost) equivalent to CalculateHfrValues
          this.compParam[2] = this.compParam[2] || 1;
          let _a = this.compParam[4] - this.compParam[5] - this.compParam[6];
          let _b = this.compParam[7];
          this.compDec.Reserved1 = _b > 0 ? _a / _b + (_a % _b ? 1 : 0) : 0;
          // Translating the above code with meaningful variable names:
          this.compDec.TrackCount = this.compDec.TrackCount || 1;
          this.compDec.HfrBandCount = this.compDec.TotalBandCount - this.compDec.BaseBandCount - this.compDec.StereoBandCount;
          this.HfrGroupCount = this.compDec.BandsPerHfrGroup;
          this.compDec.Reserved1 = this.HfrGroupCount > 0 ? this.compDec.HfrBandCount / this.HfrGroupCount + (this.compDec.HfrBandCount % this.HfrGroupCount ? 1 : 0) : 0;
          */
        // CalculateHfrValues, ported from VGAudio
        if (this.compDec.BandsPerHfrGroup > 0) {
            this.compDec.HfrBandCount = this.compDec.TotalBandCount -
                this.compDec.BaseBandCount - this.compDec.StereoBandCount;
            this.HfrGroupCount = DivideByRoundUp(this.compDec.HfrBandCount, this.compDec.BandsPerHfrGroup);
        }
        // calculate sample count/offsets
        this.fullSampleCount = this.format.blockCount * SamplesPerFrame;
        this.startAtSample = this.format.droppedHeader;
        this.fullEndAtSample = this.fullSampleCount - this.format.droppedFooter;
        if (this.hasHeader["loop"]) {
            this.loopStartAtSample = this.loop.start * HCAFrame.SamplesPerFrame + this.loop.droppedHeader;
            this.loopEndAtSample = (this.loop.end + 1) * HCAFrame.SamplesPerFrame - this.loop.droppedFooter;
            this.loopSampleCount = this.loopEndAtSample - this.loopStartAtSample;
            this.loopStartTime = (this.loopStartAtSample - this.startAtSample) / this.format.samplingRate;
            this.loopDuration = this.loopSampleCount / this.format.samplingRate;
            this.loopEndTime = this.loopStartTime + this.loopDuration;
        }
        this.endAtSample = this.hasHeader["loop"]
            ? this.loopEndAtSample
            : this.fullEndAtSample;
        this.sampleCount = this.endAtSample - this.startAtSample;
        this.duration = this.sampleCount / this.format.samplingRate;
        // calculate file/data size
        this.dataSize = this.blockSize * this.format.blockCount;
        this.fullSize = this.dataOffset + this.dataSize;
        if (changeMask || hasModDone) {
            // fix checksum if requested
            Crc16.fix(hca, this.dataOffset - 2);
        }
        let rawHeader = hca.slice(0, this.dataOffset);
        // check validity of parsed values
        this.checkValidity();
        return rawHeader;
    }
    checkValidity() {
        const results = [
            this.blockSize > 0,
            0 < this.format.blockCount,
            0 <= this.startAtSample,
            this.startAtSample < this.fullEndAtSample,
            this.fullEndAtSample <= this.fullSampleCount,
            this.duration > 0,
        ];
        results.find((result, index) => {
            if (!result) {
                throw new Error(`did not pass normal check on rule ${index}`);
            }
        });
        if (this.hasHeader["loop"]) {
            const loopChecks = [
                this.startAtSample <= this.loopStartAtSample,
                this.loopStartAtSample < this.loopEndAtSample,
                this.loopEndAtSample <= this.fullEndAtSample,
                0 <= this.loopStartTime,
                this.loopStartTime < this.loopEndTime,
                this.loopEndTime <= this.duration + 1.0 / this.format.samplingRate,
            ];
            loopChecks.find((result, index) => {
                if (!result) {
                    throw new Error(`did not pass loop check on rule ${index}`);
                }
            });
        }
    }
    getRawHeader() {
        return this.rawHeader.slice(0);
    }
    isHeaderChanged(hca) {
        if (hca.length >= this.rawHeader.length) {
            for (let i = 0; i < this.rawHeader.length; i++) {
                if (hca[i] != this.rawHeader[i]) {
                    return true;
                }
            }
        }
        else
            return true;
        return false;
    }
    modify(hca, sig, newData) {
        // reparse header if needed
        if (this.isHeaderChanged(hca)) {
            this.parseHeader(hca, false, false, {});
        }
        // prepare to modify data in-place
        let modList = {};
        modList[sig] = newData;
        let encrypt = this.cipher != 0;
        if (sig === "ciph") {
            encrypt =
                new DataView(newData.buffer, newData.byteOffset, newData.byteLength)
                    .getUint16(0) != 0;
        }
        // do actual modification & check validity
        this.rawHeader = this.parseHeader(hca, true, encrypt, modList);
    }
    static addHeader(hca, sig, newData) {
        // sig must consist of 1-4 ASCII characters
        if (sig.length < 1 || sig.length > 4)
            throw new Error();
        let newSig = new Uint8Array(4);
        for (let i = 0; i < 4; i++) {
            let c = sig.charCodeAt(i);
            if (c >= 0x80)
                throw new Error();
            newSig[i] = c;
        }
        // parse header & check validty
        let info = new HCAInfo(hca);
        // check whether specified header section already exists
        if (info.hasHeader[sig]) {
            throw new Error(`header section ${sig} already exists`);
        }
        // prepare a newly allocated buffer
        let newHca = new Uint8Array(hca.byteLength + newSig.byteLength + newData.byteLength);
        let insertOffset = info.headerOffset["pad"][0];
        // copy existing headers (except padding)
        newHca.set(hca.subarray(0, insertOffset), 0);
        // copy inserted header
        newHca.set(newSig, insertOffset);
        newHca.set(newData, insertOffset + newSig.byteLength);
        // copy remaining data (padding and blocks)
        newHca.set(hca.subarray(insertOffset, hca.byteLength), insertOffset + newSig.byteLength + newData.byteLength);
        // update dataOffset
        info.dataOffset += newSig.byteLength + newData.byteLength;
        let p = new DataView(newHca.buffer, newHca.byteOffset, newHca.byteLength);
        p.setInt16(6, info.dataOffset);
        // fix checksum
        Crc16.fix(newHca, info.dataOffset - 2);
        // reparse header & recheck validty
        info = new HCAInfo(newHca);
        return newHca;
    }
    static addCipherHeader(hca, cipherType) {
        let newData = new Uint8Array(2);
        if (cipherType != null) {
            new DataView(newData.buffer).setUint16(0, cipherType);
        }
        return this.addHeader(hca, "ciph", newData);
    }
    static fixHeaderChecksum(hca) {
        let p = new DataView(hca.buffer, hca.byteOffset, 8);
        let head = this.getSign(p, 0, false, false);
        if (head !== "HCA") {
            throw new Error("Not a HCA file");
        }
        let dataOffset = p.getUint16(6);
        Crc16.fix(hca, dataOffset - 2);
        return hca;
    }
    calcInWavSize(mode = 32) {
        switch (mode) {
            case 0: // float
            case 8:
            case 16:
            case 24:
            case 32: // integer
                break;
            default:
                mode = 32;
        }
        let bitsPerSample = mode == 0 ? 32 : mode;
        let sampleSizeInWav = this.format.channelCount * bitsPerSample / 8;
        return this.inWavSize = {
            bitsPerSample: bitsPerSample,
            sample: sampleSizeInWav,
            block: SamplesPerFrame * sampleSizeInWav,
            dropped: {
                header: this.format.droppedHeader * sampleSizeInWav,
                footer: this.format.droppedFooter * sampleSizeInWav,
            },
            loop: this.hasHeader["loop"]
                ? {
                    loopPart: (this.loopEndAtSample - this.loopStartAtSample) *
                        sampleSizeInWav,
                    dropped: {
                        header: this.loop.droppedHeader * sampleSizeInWav,
                        footer: this.loop.droppedFooter * sampleSizeInWav,
                    },
                }
                : undefined,
        };
    }
    CalculateHfrValues() {
        if (this.compDec.BandsPerHfrGroup <= 0)
            return;
        this.compDec.HfrBandCount = this.compDec.TotalBandCount -
            this.compDec.BaseBandCount - this.compDec.StereoBandCount;
        this.HfrGroupCount = DivideByRoundUp(this.compDec.HfrBandCount, this.compDec.BandsPerHfrGroup);
    }
    GetClone() {
        return Object.assign({}, this);
    }
}

class HCAWavCommentChunk {
    constructor(info) {
        this.commentBuf = new TextEncoder().encode(info.comment);
        let size = this.commentBuf.byteLength;
        size += 4;
        if (size % 4)
            size += 4 - size % 4;
        this.size = size;
    }
    get() {
        let buf = new ArrayBuffer(8 + this.size);
        let ret = new Uint8Array(buf);
        let p = new DataView(buf);
        let te = new TextEncoder();
        ret.set(te.encode("note"), 0);
        p.setUint32(4, this.size, true);
        ret.set(this.commentBuf, 8);
        return ret;
    }
}

class HCAWaveSmplChunk {
    constructor(info) {
        this.size = 60;
        this.manufacturer = 0;
        this.product = 0;
        this.MIDIUnityNote = 0x3c;
        this.MIDIPitchFraction = 0;
        this.SMPTEFormat = 0;
        this.sampleLoops = 1;
        this.samplerData = 0x18;
        this.loop_Identifier = 0;
        this.loop_Type = 0;
        this.loop_Fraction = 0;
        this.loop_PlayCount = 0;
        if (!info.hasHeader["loop"])
            throw new Error('missing "loop" header');
        this.samplePeriod = 1 / info.format.samplingRate * 1000000000;
        this.loop_Start = info.loopStartAtSample - info.startAtSample;
        this.loop_End = info.loopEndAtSample - info.startAtSample;
        this.SMPTEOffset = 1;
    }
    get() {
        let buf = new ArrayBuffer(8 + this.size);
        let ret = new Uint8Array(buf);
        let p = new DataView(buf);
        let te = new TextEncoder();
        ret.set(te.encode("smpl"), 0);
        p.setUint32(4, this.size, true);
        p.setUint32(8, this.manufacturer, true);
        p.setUint32(12, this.product, true);
        p.setUint32(16, this.samplePeriod, true);
        p.setUint32(20, this.MIDIUnityNote, true);
        p.setUint32(24, this.MIDIPitchFraction, true);
        p.setUint32(28, this.SMPTEFormat, true);
        p.setUint32(32, this.SMPTEOffset, true);
        p.setUint32(36, this.sampleLoops, true);
        p.setUint32(40, this.samplerData, true);
        p.setUint32(44, this.loop_Identifier, true);
        p.setUint32(48, this.loop_Type, true);
        p.setUint32(52, this.loop_Start, true);
        p.setUint32(56, this.loop_End, true);
        p.setUint32(60, this.loop_Fraction, true);
        p.setUint32(64, this.loop_PlayCount, true);
        return ret;
    }
}

class HCAWavFmtChunk {
    constructor(info, mode = 32) {
        this.size = 16;
        switch (mode) {
            case 0: // float
            case 8:
            case 16:
            case 24:
            case 32: // integer
                break;
            default:
                mode = 32;
        }
        let inWavSize = info.calcInWavSize(mode);
        this.formatTag = mode > 0 ? 1 : 3;
        this.channelCount = info.format.channelCount;
        this.samplesPerSec = info.format.samplingRate;
        this.bytesPerSec = inWavSize.sample * info.format.samplingRate;
        this.blockAlign = inWavSize.sample;
        this.bitsPerSample = inWavSize.bitsPerSample;
    }
    get() {
        let buf = new ArrayBuffer(8 + this.size);
        let ret = new Uint8Array(buf);
        let p = new DataView(buf);
        let te = new TextEncoder();
        ret.set(te.encode("fmt "), 0);
        p.setUint32(4, this.size, true);
        p.setUint16(8, this.formatTag, true);
        p.setUint16(10, this.channelCount, true);
        p.setUint32(12, this.samplesPerSec, true);
        p.setUint32(16, this.bytesPerSec, true);
        p.setUint16(20, this.blockAlign, true);
        p.setUint16(22, this.bitsPerSample, true);
        return ret;
    }
}

class HCAWavWaveRiffHeader {
    constructor(size) {
        if (isNaN(size))
            throw new Error("size must be number");
        size = Math.floor(size);
        if (size <= 0)
            throw new Error();
        this.size = 4 + size; // "WAVE" + remaining part
    }
    get() {
        let buf = new ArrayBuffer(12);
        let ret = new Uint8Array(buf);
        let p = new DataView(buf);
        let te = new TextEncoder();
        ret.set(te.encode("RIFF"), 0);
        p.setUint32(4, this.size, true);
        ret.set(te.encode("WAVE"), 8);
        return ret;
    }
}

class HCAWav {
    constructor(info, mode = 32, loop = 0) {
        switch (mode) {
            case 0: // float
            case 8:
            case 16:
            case 24:
            case 32: // integer
                break;
            default:
                mode = 32;
        }
        if (isNaN(loop))
            throw new Error("loop is not number");
        loop = Math.floor(loop);
        if (loop < 0)
            throw new Error();
        let inWavSize = info.calcInWavSize(mode);
        let dataSize = inWavSize.sample * info.sampleCount;
        if (loop > 0) {
            if (inWavSize.loop == null)
                throw new Error();
            dataSize += inWavSize.loop.loopPart * loop;
        }
        // prepare metadata chunks and data chunk header
        this.fmt = new HCAWavFmtChunk(info, mode);
        if (info.hasHeader["comm"])
            this.note = new HCAWavCommentChunk(info);
        if (info.hasHeader["loop"])
            this.smpl = new HCAWaveSmplChunk(info);
        this.waveRiff = new HCAWavWaveRiffHeader(8 + this.fmt.size +
            (this.note == null ? 0 : 8 + this.note.size) +
            8 + dataSize +
            (this.smpl == null ? 0 : 8 + this.smpl.size));
        // get bytes of prepared chunks
        let waveRiffHeader = this.waveRiff.get();
        let fmtChunk = this.fmt.get();
        let noteChunk = this.note != null ? this.note.get() : new Uint8Array(0);
        let dataChunkHeader = new Uint8Array(8);
        dataChunkHeader.set(new TextEncoder().encode("data"));
        new DataView(dataChunkHeader.buffer).setUint32(4, dataSize, true);
        let smplChunk = this.smpl != null ? this.smpl.get() : new Uint8Array(0);
        // create whole-file buffer
        this.fileBuf = new Uint8Array(8 + this.waveRiff.size);
        // copy prepared metadata chunks and data chunk header to whole-file buffer
        let writtenLength = 0;
        [waveRiffHeader, fmtChunk, noteChunk, dataChunkHeader].forEach((chunk) => {
            this.fileBuf.set(chunk, writtenLength);
            writtenLength += chunk.byteLength;
        });
        // skip dataPart since it's empty
        this.dataPart = this.fileBuf.subarray(writtenLength, writtenLength + dataSize);
        writtenLength += dataSize;
        // copy the last prepared chunk to whole-file buffer
        this.fileBuf.set(smplChunk, writtenLength);
        writtenLength += smplChunk.byteLength;
        if (writtenLength != this.fileBuf.byteLength)
            throw new Error();
    }
}

var HCAQuality;
(function (HCAQuality) {
    HCAQuality[HCAQuality["NotSet"] = 0] = "NotSet";
    HCAQuality[HCAQuality["Highest"] = 1] = "Highest";
    HCAQuality[HCAQuality["High"] = 2] = "High";
    HCAQuality[HCAQuality["Middle"] = 3] = "Middle";
    HCAQuality[HCAQuality["Low"] = 4] = "Low";
    HCAQuality[HCAQuality["Lowest"] = 5] = "Lowest";
})(HCAQuality || (HCAQuality = {}));
var HCAQuality$1 = HCAQuality;

class HCAParameters {
    constructor(ChannelCount, SampleRate, SampleCount, LoopStart, LoopEnd, Quality, Bitrate, LimitBitrate) {
        this.Looping = false;
        this.LimitBitrate = false;
        this.Quality = HCAQuality$1.High;
        this.Bitrate = 0;
        this.ChannelCount = 0;
        this.SampleRate = 0;
        this.LoopStart = 0;
        this.LoopEnd = 0;
        this.SampleCount = 0;
        if (LoopStart != undefined && LoopEnd != undefined) {
            this.Looping = LoopEnd > LoopStart;
        }
        this.Quality = Quality || HCAQuality$1.High;
        this.Bitrate = Bitrate || 0;
        this.LimitBitrate = LimitBitrate || false;
        this.ChannelCount = ChannelCount || 0;
        this.SampleRate = SampleRate || 0;
        this.LoopStart = LoopStart || 0;
        this.LoopEnd = LoopEnd || 0;
        this.SampleCount = SampleCount || 0;
    }
}

class HCAWriter {
    constructor(key1, key2, subkey) {
        this.Version = 0x0200;
        this.Crc = Crc16;
        this.key1 = key1;
        this.key2 = key2;
        this.subkey = subkey;
    }
    get HeaderSize() {
        return this.Hca.HeaderSize;
    }
    get FileSize() {
        return this.HeaderSize + this.Hca.FrameSize * this.Hca.FrameCount;
    }
    SetupWriter(audio) {
        this.Hca = audio.Hca;
        this.AudioData = audio.AudioData;
        const stream = new Uint8Array(this.FileSize);
        return this.WriteStream(stream);
    }
    WriteStream(stream) {
        const writer = new BitWriter(stream);
        this.WriteHeader(writer);
        this.WriteData(writer);
        return writer.Buffer;
    }
    WriteHeader(writer) {
        this.WriteHcaChunk(writer);
        this.WriteFmtChunk(writer);
        this.WriteCompChunk(writer);
        this.WriteLoopChunk(writer);
        this.WriteCiphChunk(writer);
        this.WriteRvaChunk(writer);
        if (this.Hca.Comment == "") {
            this.WritePadChunk(writer);
        }
        else {
            this.WriteCommChunk(writer);
        }
        writer.Position = 0;
        var header = new Uint8Array(this.HeaderSize - 2);
        writer.Read(header, 0, header.length);
        var crc16 = this.Crc.calc(header, header.length);
        writer.Write(crc16, 16);
    }
    WriteCommChunk(writer) {
        this.WriteChunkId(writer, "comm\0");
        writer.WriteString(this.Hca.Comment);
        writer.Write(0, 8);
    }
    WritePadChunk(writer) {
        this.WriteChunkId(writer, "pad");
    }
    WriteRvaChunk(writer) {
        var volume = this.Hca.Volume;
        // ReSharper disable once CompareOfFloatsByEqualityOperator
        if (volume != 1) {
            this.WriteChunkId(writer, "rva\0");
            const float = new Float32Array([this.Hca.Volume]).buffer;
            const uint = new Uint8Array(float);
            for (let i = 0; i < uint.length; i++) {
                const element = uint[i];
                writer.Write(element, 8);
            }
        }
    }
    WriteCiphChunk(writer) {
        this.WriteChunkId(writer, "ciph");
        writer.Write(this.Hca.EncryptionType, 16);
    }
    WriteLoopChunk(writer) {
        if (!this.Hca.Looping)
            return;
        this.WriteChunkId(writer, "loop");
        writer.Write(this.Hca.LoopStartFrame, 32);
        writer.Write(this.Hca.LoopEndFrame, 32);
        writer.Write(this.Hca.PreLoopSamples, 16);
        writer.Write(this.Hca.PostLoopSamples, 16);
    }
    WriteCompChunk(writer) {
        this.WriteChunkId(writer, "comp");
        writer.Write(this.Hca.FrameSize, 16);
        writer.Write(this.Hca.MinResolution, 8);
        writer.Write(this.Hca.MaxResolution, 8);
        writer.Write(this.Hca.TrackCount, 8);
        writer.Write(this.Hca.ChannelConfig, 8);
        writer.Write(this.Hca.TotalBandCount, 8);
        writer.Write(this.Hca.BaseBandCount, 8);
        writer.Write(this.Hca.StereoBandCount, 8);
        writer.Write(this.Hca.BandsPerHfrGroup, 8);
        writer.Write(0, 16);
    }
    WriteFmtChunk(writer) {
        this.WriteChunkId(writer, "fmt\0");
        writer.Write(this.Hca.ChannelCount, 8);
        // Sample Rate is 24-bit
        writer.Write(this.Hca.SampleRate >> 16, 8);
        writer.Write(this.Hca.SampleRate, 16);
        writer.Write(this.Hca.FrameCount, 32);
        writer.Write(this.Hca.InsertedSamples, 16);
        writer.Write(this.Hca.AppendedSamples, 16);
    }
    WriteHcaChunk(writer) {
        this.WriteChunkId(writer, "HCA\0");
        writer.Write(this.Version, 16);
        writer.Write(this.HeaderSize, 16);
    }
    WriteChunkId(writer, value) {
        let te = new TextEncoder();
        var bytes = te.encode(value);
        if (this.key1 != null) {
            for (let i = 0; i < bytes.length; i++) {
                if (bytes[i] != 0)
                    bytes[i] |= 0x80;
                writer.Write(bytes[i], 8);
            }
        }
        else {
            writer.WriteString(value);
        }
    }
    WriteData(writer) {
        for (let i = 0; i < this.Hca.FrameCount; i++) {
            console.log("this.AudioData[i]", this.AudioData[i]);
            writer.WriteStream(this.AudioData[i], 0, this.Hca.FrameSize);
        }
    }
}

class wavReader {
    constructor(src) {
        this.wFormatTag = 0;
        this.ChannelCount = 0;
        this.SampleRate = 0;
        this.dwAvgBytesPerSec = 0;
        this.wBlockAlign = 0;
        this.BPS = 0;
        this.wcbsize = 0;
        this.wSamplesPerBlock = 0;
        this.width = 0;
        this.numOfSamples = 0;
        this.numSamplesPerChanel = 0;
        this.SampleCount = 0;
        this.Channels = [new Int8Array()];
        this.dwCuePoints = 0;
        this.Points = [];
        this.LISTChunkType = "";
        this.SampleChunkType = "";
        this.manufacturer = 0;
        this.product = 0;
        this.samplePeriod = 0;
        this.MIDIUnityNote = 0;
        this.MIDIPitchFraction = 0;
        this.SMPTEFormat = 0;
        this.SMPTEOffset = 0;
        this.NumSampleLoops = 0;
        this.SampleData = 0;
        this.loops = [];
        this.LoopStart = 0;
        this.LoopEnd = 0;
        this.Looping = false;
        this.DatachunkSize = 0;
        this.durationInSeconds = 0;
        this.p = new DataView(src.buffer);
        var ftell = 0;
        const size = this.p.byteLength;
        this.riffHead = this.readString(ftell, 4);
        ftell += 4;
        this.fileSize = this.p.getUint32(ftell, true);
        ftell += 4;
        this.waveHead = this.readString(ftell, 4);
        ftell += 4;
        var fmtHead = this.readString(ftell, 4);
        ftell += 4;
        const formats = new Set(["fmt ", "data", "fact", "cue ", "LIST", "smpl"]);
        do {
            switch (fmtHead) {
                case "fmt ":
                    //header.format.
                    var chunkSize = this.p.getUint32(ftell, true);
                    ftell += 4;
                    var pos = ftell;
                    this.wFormatTag = this.p.getUint16(ftell, true);
                    ftell += 2; //must be 1
                    this.ChannelCount = this.p.getUint16(ftell, true);
                    ftell += 2;
                    this.SampleRate = this.p.getUint32(ftell, true);
                    ftell += 4;
                    this.dwAvgBytesPerSec = this.p.getUint32(ftell, true);
                    ftell += 4;
                    this.wBlockAlign = this.p.getUint16(ftell, true);
                    ftell += 2;
                    this.BPS = this.p.getUint16(ftell, true);
                    ftell += 2;
                    if (this.wFormatTag == 17) //DVI IMA ADPCM
                     {
                        this.wcbsize = this.p.getUint16(ftell, true);
                        ftell += 2;
                        this.wSamplesPerBlock = this.p.getUint16(ftell, true);
                        ftell += 2;
                    }
                    // Unknown data at the end of the chunk
                    if (chunkSize > (ftell - pos)) {
                        ftell += chunkSize - (ftell - pos);
                    }
                    // Padding so the next chunk starts on an even byte
                    if (chunkSize & 1) {
                        ftell += 1;
                    }
                    if (size == ftell) {
                        fmtHead = "";
                        break;
                    }
                    fmtHead = this.readString(ftell, 4);
                    ftell += 4;
                    break;
                case "data":
                    this.DatachunkSize = this.p.getUint32(ftell, true);
                    ftell += 4;
                    var arrayType = Int8Array;
                    // Parse the samples of the data
                    if (((this.BPS != 8) && (this.BPS != 16) && (this.BPS != 32))
                        || (this.DatachunkSize % this.wBlockAlign != 0)) {
                        // Unsupported storage method used
                        ftell += this.DatachunkSize;
                        // Padding so the next chunk starts on an even byte
                        if ((this.DatachunkSize & 1) && (ftell < size)) {
                            ftell += 1;
                        }
                        if (size == ftell) {
                            fmtHead = "";
                            break;
                        }
                        fmtHead = this.readString(ftell, 4);
                        ftell += 4;
                    }
                    else {
                        if ((this.ChannelCount == 1) && (this.BPS == 8)) {
                            // Define an array of 8-bit samples - common case
                            this.width = 1;
                            arrayType = Int8Array;
                            this.numOfSamples = this.DatachunkSize / this.width;
                            this.numSamplesPerChanel = this.numOfSamples / this.ChannelCount;
                            this.SampleCount = this.numSamplesPerChanel;
                        }
                        else if ((this.ChannelCount == 1) && (this.BPS == 16)) {
                            // Define an array of 16-bit samples - common case
                            this.width = 2;
                            arrayType = Int16Array;
                            this.numOfSamples = this.DatachunkSize / this.width;
                            this.numSamplesPerChanel = this.numOfSamples / this.ChannelCount;
                            this.SampleCount = this.numSamplesPerChanel;
                        }
                        else if ((this.ChannelCount == 1) && (this.BPS == 32)) {
                            // Define an array of 32-bit samples - common case
                            this.width = 4;
                            arrayType = Int32Array;
                            this.numOfSamples = this.DatachunkSize / this.width;
                            this.numSamplesPerChanel = this.numOfSamples / this.ChannelCount;
                            this.SampleCount = this.numSamplesPerChanel;
                        }
                        else {
                            for (let i = 0; i < (this.DatachunkSize / this.wBlockAlign); i++) {
                                if (this.BPS == 8) {
                                    this.numOfSamples = this.DatachunkSize;
                                    this.numSamplesPerChanel = this.numOfSamples / this.ChannelCount;
                                    this.SampleCount = this.numSamplesPerChanel;
                                }
                                else if (this.BPS == 16) {
                                    this.width = 2;
                                    arrayType = Int16Array;
                                    this.numOfSamples = this.DatachunkSize / this.width;
                                    this.numSamplesPerChanel = this.numOfSamples / this.ChannelCount;
                                    this.SampleCount = this.numSamplesPerChanel;
                                }
                                else if (this.BPS == 32) {
                                    this.width = 4;
                                    arrayType = Int32Array;
                                    this.numOfSamples = this.DatachunkSize / this.width;
                                    this.numSamplesPerChanel = this.numOfSamples / this.ChannelCount;
                                    this.SampleCount = this.numSamplesPerChanel;
                                }
                            }
                        }
                        const bufferAudio = this.p.buffer.slice(ftell, ftell + this.DatachunkSize);
                        ftell += this.DatachunkSize;
                        const brA = new DataView(bufferAudio);
                        var ftell2 = 0;
                        var channelsData = Array.from({ length: this.ChannelCount }, () => new arrayType(this.numSamplesPerChanel));
                        for (let i = 0; i < this.numSamplesPerChanel; i++) {
                            for (let k = 0; k < this.ChannelCount; k++) {
                                switch (this.width) {
                                    case 1:
                                        channelsData[k][i] = brA.getInt8(ftell2);
                                        ftell2 += 1;
                                        break;
                                    case 2:
                                        channelsData[k][i] = brA.getInt16(ftell2, true);
                                        ftell2 += 2;
                                        break;
                                    case 4:
                                        channelsData[k][i] = brA.getInt32(ftell2, true);
                                        ftell2 += 4;
                                        break;
                                }
                            }
                        }
                        this.Channels = channelsData;
                        // Padding so the next chunk starts on an even byte
                        if ((this.DatachunkSize & 1) && (ftell < size)) {
                            ftell += 1;
                        }
                        if (size == ftell) {
                            fmtHead = "";
                            break;
                        }
                        fmtHead = this.readString(ftell, 4);
                        ftell += 4;
                    }
                    break;
                case "fact":
                    var chunkSize = this.p.getUint32(ftell, true);
                    ftell += 4;
                    /*var uncompressedSize =*/ this.p.getUint32(ftell, true);
                    ftell += 4;
                    fmtHead = this.readString(ftell, 4);
                    ftell += 4;
                    break;
                case "cue ":
                    var chunkSize = this.p.getUint32(ftell, true);
                    ftell += 4;
                    var pos = ftell;
                    this.dwCuePoints = this.p.getUint32(ftell, true);
                    ftell += 4;
                    this.Points = [];
                    for (let i = 0; i < (this.dwCuePoints); i++) {
                        this.READPOINTS(ftell);
                        ftell += 24;
                    }
                    if (chunkSize > (ftell - pos)) {
                        ftell += chunkSize - (ftell - pos);
                    }
                    if (size == ftell) {
                        fmtHead = "";
                        break;
                    }
                    fmtHead = this.readString(ftell, 4);
                    ftell += 4;
                    break;
                case "LIST":
                    var chunkSize = this.p.getUint32(ftell, true);
                    ftell += 4;
                    var pos = ftell;
                    this.LISTChunkType = this.readString(ftell, 4);
                    ftell += 4;
                    var size2;
                    while (ftell - pos < chunkSize) {
                        ftell += 4;
                        size2 = this.p.getUint32(ftell, true);
                        ftell += 4;
                        ftell += 4;
                        if (ftell - pos + size2 <= chunkSize) {
                            ftell += 4;
                            ftell += 4;
                            ftell += 4;
                            // Padding so the next chunk starts on an even byte
                            if ((chunkSize & 1) && (ftell < size)) {
                                ftell += 1;
                            }
                        }
                        else {
                            ftell += chunkSize - (ftell - pos);
                        }
                    }
                    if (size == ftell) {
                        fmtHead = "";
                        break;
                    }
                    fmtHead = this.readString(ftell, 4);
                    ftell += 4;
                    break;
                case "smpl":
                    this.SampleChunkType = this.readString(ftell, 4);
                    ftell += 4;
                    var chunkSize = this.p.getUint32(ftell, true);
                    ftell += 4;
                    this.manufacturer = this.p.getUint32(ftell, true);
                    ftell += 4;
                    this.product = this.p.getUint32(ftell, true);
                    ftell += 4;
                    this.samplePeriod = this.p.getUint32(ftell, true);
                    ftell += 4;
                    this.MIDIUnityNote = this.p.getUint32(ftell, true);
                    ftell += 4;
                    this.MIDIPitchFraction = this.p.getUint32(ftell, true);
                    ftell += 4;
                    this.SMPTEFormat = this.p.getUint32(ftell, true);
                    ftell += 4;
                    this.SMPTEOffset = this.p.getUint32(ftell, true);
                    ftell += 4;
                    this.NumSampleLoops = this.p.getUint32(ftell, true);
                    ftell += 4;
                    this.SampleData = this.p.getUint32(ftell, true);
                    ftell += 4;
                    if (this.NumSampleLoops) {
                        this.loops = [];
                        this.Looping = true;
                        for (let i = 0; i < this.NumSampleLoops; i++) {
                            const cmd = this.SAMPLELOOP(ftell);
                            ftell += 24;
                            this.LoopStart = cmd.start;
                            this.LoopEnd = cmd.end;
                            this.loops.push(cmd);
                        }
                    }
                    if (size == ftell) {
                        fmtHead = "";
                        break;
                    }
                    fmtHead = this.readString(ftell, 4);
                    ftell += 4;
                    break;
                default:
                    var chunkSize = this.p.getUint32(ftell, true);
                    ftell += 4;
                    ftell += chunkSize;
                    if (size == ftell) {
                        fmtHead = "";
                        break;
                    }
                    fmtHead = this.readString(ftell, 4);
                    ftell += 4;
                    // Unknown chunk
                    break;
            }
        } while (formats.has(fmtHead));
        if (this.SampleRate &&
            this.ChannelCount &&
            this.BPS &&
            this.DatachunkSize) {
            const bytesPerSample = this.BPS / 8;
            const fileSizeInBytes = this.DatachunkSize;
            const totalSamples = fileSizeInBytes / bytesPerSample / this.ChannelCount;
            this.durationInSeconds = totalSamples / this.SampleRate;
        }
    }
    readString(offset, length) {
        let str = [];
        for (let i = offset; i < offset + length; i++) {
            const charCode = this.p.getUint8(i);
            const str2 = String.fromCharCode(charCode);
            str.push(str2);
        }
        const finalStr = str.join("");
        return finalStr;
    }
    SAMPLELOOP(ftell) {
        const obj = {
            loopID: 0,
            type: 0,
            start: 0,
            end: 0,
            fraction: 0,
            loopTimes: 0
        };
        obj.loopID = this.p.getUint32(ftell, true);
        ftell += 4;
        obj.type = this.p.getUint32(ftell, true);
        ftell += 4;
        obj.start = this.p.getUint32(ftell, true);
        ftell += 4;
        obj.end = this.p.getUint32(ftell, true);
        ftell += 4;
        obj.fraction = this.p.getUint32(ftell, true);
        ftell += 4;
        obj.loopTimes = this.p.getUint32(ftell, true);
        ftell += 4;
        return obj;
    }
    ;
    READPOINTS(ftell) {
        const point = {
            dwIdentifier: 0,
            dwPosition: 0,
            fccChunk: "",
            dwChunkStart: 0,
            dwBlockStart: 0,
            dwSampleOffset: 0
        };
        point.dwIdentifier = this.p.getInt32(ftell, true);
        ftell += 4;
        point.dwPosition = this.p.getInt32(ftell, true);
        ftell += 4;
        point.fccChunk = this.readString(ftell, 4);
        ftell += 4;
        point.dwChunkStart = this.p.getInt32(ftell, true);
        ftell += 4;
        point.dwBlockStart = this.p.getInt32(ftell, true);
        ftell += 4;
        point.dwSampleOffset = this.p.getInt32(ftell, true);
        ftell += 4;
        this.Points.push(point);
    }
}

class HCAEncoder {
    constructor() {
        this.Crc = Crc16;
        this.PcmBuffer = [];
        this.BufferPosition = 0;
        this.BufferPreSamples = 0;
        this.SamplesProcessed = 0;
        this.FramesProcessed = 0;
        this.PostSamples = 0;
        this.PostAudio = [];
        this.HcaOutputBuffer = [];
    }
    get PendingFrameCount() {
        return this.HcaOutputBuffer.length;
    }
    get FrameSize() {
        return this.Hca.FrameSize;
    }
    get BufferRemaining() {
        return SamplesPerFrame - this.BufferPosition;
    }
    static InitializeNew(config) {
        const encoder = new HCAEncoder();
        encoder.Initialize(config);
        return encoder;
    }
    Initialize(config) {
        if (config.ChannelCount > 8) {
            throw new Error("HCA channel count must be 8 or below");
        }
        this.CutoffFrequency = config.SampleRate / 2;
        this.Quality = config.Quality;
        this.PostSamples = 128;
        this.Hca = new HCAInfo(new Uint8Array(), false, false, true);
        this.Hca.ChannelCount = config.ChannelCount;
        this.Hca.TrackCount = 1;
        this.Hca.SampleCount = config.SampleCount;
        this.Hca.SampleRate = config.SampleRate;
        this.Hca.MinResolution = 1;
        this.Hca.MaxResolution = 15;
        this.Hca.InsertedSamples = SamplesPerSubFrame;
        this.Bitrate = this.CalculateBitrate(this.Hca, this.Quality, config.Bitrate, config.LimitBitrate);
        this.CalculateBandCounts(this.Hca, this.Bitrate, this.CutoffFrequency);
        this.Hca.CalculateHfrValues();
        this.SetChannelConfiguration(this.Hca);
        let inputSampleCount = this.Hca.SampleCount;
        if (config.Looping) {
            this.Hca.Looping = true;
            this.Hca.SampleCount = Math.min(config.LoopEnd, config.SampleCount);
            this.Hca.InsertedSamples += GetNextMultiple(config.LoopStart, SamplesPerFrame) - config.LoopStart;
            this.CalculateLoopInfo(this.Hca, config.LoopStart, config.LoopEnd);
            inputSampleCount = Math.min(GetNextMultiple(this.Hca.SampleCount, SamplesPerSubFrame), config.SampleCount);
            inputSampleCount += SamplesPerSubFrame * 2;
            this.PostSamples = inputSampleCount - this.Hca.SampleCount;
        }
        this.CalculateHeaderSize(this.Hca);
        const totalSamples = inputSampleCount + this.Hca.InsertedSamples;
        this.Hca.FrameCount = DivideByRoundUp(totalSamples, SamplesPerFrame); //format.blockCount
        this.Hca.AppendedSamples = this.Hca.FrameCount * SamplesPerFrame - this.Hca.InsertedSamples - inputSampleCount;
        this.Frame = new HCAFrame(this.Hca);
        this.Channels = this.Frame.Channels;
        this.PcmBuffer = Array.from({ length: this.Hca.ChannelCount }, () => new Int16Array(SamplesPerFrame));
        this.PostAudio = Array.from({ length: this.Hca.ChannelCount }, () => new Int16Array(this.PostSamples));
        this.HcaOutputBuffer = [];
        this.BufferPreSamples = this.Hca.InsertedSamples - 128;
    }
    Encode(pcm, hcaOut) {
        if (this.FramesProcessed >= this.Hca.FrameCount) {
            throw new Error("All audio frames have already been output by the encoder");
        }
        let framesOutput = 0;
        let pcmPosition = new Int32Array([0]);
        //this doesnt trigger first time called
        if (this.BufferPreSamples > 0) {
            framesOutput = this.EncodePreAudio(pcm, hcaOut, framesOutput);
        }
        //this doesnt call on non-loops
        if (this.Hca.Looping && this.Hca.LoopStartSample + this.PostSamples >= this.SamplesProcessed && this.Hca.LoopStartSample < this.SamplesProcessed + SamplesPerFrame) {
            this.SaveLoopAudio(pcm);
        }
        while (SamplesPerFrame - pcmPosition[0] > 0 && this.Hca.SampleCount > this.SamplesProcessed) {
            framesOutput = this.EncodeMainAudio(pcm, hcaOut, framesOutput, pcmPosition);
        }
        if (this.Hca.SampleCount === this.SamplesProcessed) {
            framesOutput = this.EncodePostAudio(pcm, hcaOut, framesOutput);
        }
        return framesOutput;
    }
    GetPendingFrame() {
        if (this.PendingFrameCount === 0) {
            throw new Error("There are no pending frames");
        }
        return this.HcaOutputBuffer[this.PendingFrameCount - 1];
    }
    EncodePreAudio(pcm, hcaOut, framesOutput) {
        while (this.BufferPreSamples > SamplesPerFrame) {
            this.BufferPosition = SamplesPerFrame;
            framesOutput = this.OutputFrame(framesOutput, hcaOut);
            this.BufferPreSamples -= SamplesPerFrame;
        }
        for (let j = 0; j < this.BufferPreSamples; j++) {
            for (let i = 0; i < pcm.length; i++) {
                this.PcmBuffer[i][j] = pcm[i][0];
            }
        }
        this.BufferPosition = this.BufferPreSamples;
        this.BufferPreSamples = 0;
        return framesOutput;
    }
    EncodeMainAudio(pcm, hcaOut, framesOutput, pcmPosition) {
        let toCopy = Math.min(this.BufferRemaining, SamplesPerFrame - pcmPosition[0]);
        toCopy = Math.min(toCopy, this.Hca.SampleCount - this.SamplesProcessed);
        for (let i = 0; i < pcm.length; i++) {
            arrayCopy(pcm[i], pcmPosition[0], this.PcmBuffer[i], this.BufferPosition, toCopy);
        }
        this.BufferPosition += toCopy;
        this.SamplesProcessed += toCopy;
        pcmPosition[0] += toCopy;
        framesOutput = this.OutputFrame(framesOutput, hcaOut);
        return framesOutput;
    }
    EncodePostAudio(pcm, hcaOut, framesOutput) {
        let postPos = 0;
        let remaining = this.PostSamples;
        while (postPos < remaining) {
            const toCopy = Math.min(this.BufferRemaining, remaining - postPos);
            for (let i = 0; i < pcm.length; i++) {
                arrayCopy(this.PostAudio[i], postPos, this.PcmBuffer[i], this.BufferPosition, toCopy);
            }
            this.BufferPosition += toCopy;
            postPos += toCopy;
            framesOutput = this.OutputFrame(framesOutput, hcaOut);
        }
        while (this.FramesProcessed < this.Hca.FrameCount) {
            for (let i = 0; i < pcm.length; i++) {
                arrayClear(this.PcmBuffer[i], this.BufferPosition, this.BufferRemaining);
            }
            this.BufferPosition = SamplesPerFrame;
            framesOutput = this.OutputFrame(framesOutput, hcaOut);
        }
        return framesOutput;
    }
    SaveLoopAudio(pcm) {
        const startPos = Math.max(this.Hca.LoopStartSample - this.SamplesProcessed, 0);
        const loopPos = Math.max(this.SamplesProcessed - this.Hca.LoopStartSample, 0);
        const endPos = Math.min(this.Hca.LoopStartSample - this.SamplesProcessed + this.PostSamples, SamplesPerFrame);
        const length = endPos - startPos;
        for (let i = 0; i < pcm.length; i++) {
            arrayCopy(pcm[i], startPos, this.PostAudio[i], loopPos, length);
        }
    }
    OutputFrame(framesOutput, hcaOut) {
        if (this.BufferRemaining !== 0) {
            return framesOutput;
        }
        const hca = framesOutput === 0 ? hcaOut : new Uint8Array(this.Hca.FrameSize);
        this.EncodeFrame(this.PcmBuffer, hca);
        if (framesOutput > 0) {
            this.HcaOutputBuffer.push(hca);
        }
        this.BufferPosition = 0;
        this.FramesProcessed++;
        return framesOutput + 1;
    }
    EncodeFrame(pcm, hcaOut) {
        this.PcmToFloat(pcm, this.Channels);
        this.RunMdct(this.Channels);
        //this gets passed over
        this.EncodeIntensityStereo(this.Frame);
        this.CalculateScaleFactors(this.Channels);
        this.ScaleSpectra(this.Channels);
        this.CalculateHfrGroupAverages(this.Frame);
        this.CalculateHfrScale(this.Frame);
        this.CalculateFrameHeaderLength(this.Frame);
        this.CalculateNoiseLevel(this.Frame);
        this.CalculateEvaluationBoundary(this.Frame);
        this.CalculateFrameResolutions(this.Frame);
        this.QuantizeSpectra(this.Channels);
        HCAPacking.PackFrame(this.Frame, hcaOut);
    }
    CalculateBitrate(hca, quality, bitrate, limitBitrate) {
        const pcmBitrate = hca.SampleRate * hca.ChannelCount * 16;
        const maxBitrate = pcmBitrate / 4;
        let minBitrate = 0;
        let compressionRatio = 6;
        switch (quality) {
            case HCAQuality$1.Highest:
                compressionRatio = 4;
                break;
            case HCAQuality$1.High:
                compressionRatio = 6;
                break;
            case HCAQuality$1.Middle:
                compressionRatio = 8;
                break;
            case HCAQuality$1.Low:
                compressionRatio = hca.ChannelCount === 1 ? 10 : 12;
                break;
            case HCAQuality$1.Lowest:
                compressionRatio = hca.ChannelCount === 1 ? 12 : 16;
                break;
        }
        bitrate = bitrate !== 0 ? bitrate : (pcmBitrate / compressionRatio) >> 0;
        if (limitBitrate) {
            minBitrate = Math.min(hca.ChannelCount === 1 ? 42666 : 32000 * hca.ChannelCount, pcmBitrate / 6) >> 0;
        }
        return Clamp(bitrate, minBitrate, maxBitrate);
    }
    CalculateBandCounts(hca, bitrate, cutoffFreq) {
        hca.FrameSize = (bitrate * 1024 / hca.SampleRate / 8) >> 0;
        let numGroups = 0;
        const pcmBitrate = hca.SampleRate * hca.ChannelCount * 16;
        let hfrRatio;
        let cutoffRatio;
        if (hca.ChannelCount <= 1 || pcmBitrate / bitrate <= 6) {
            hfrRatio = 6;
            cutoffRatio = 12;
        }
        else {
            hfrRatio = 8;
            cutoffRatio = 16;
        }
        if (bitrate < pcmBitrate / cutoffRatio) {
            cutoffFreq = Math.min(cutoffFreq, cutoffRatio * bitrate / (32 * hca.ChannelCount)) >> 0;
        }
        const totalBandCount = Math.round(cutoffFreq * 256.0 / hca.SampleRate) >> 0;
        const hfrStartBand = Math.min(totalBandCount, Math.round((hfrRatio * bitrate * 128.0) / pcmBitrate)) >> 0;
        const stereoStartBand = hfrRatio === 6 ? hfrStartBand : ((hfrStartBand + 1) / 2) >> 0;
        const hfrBandCount = totalBandCount - hfrStartBand;
        const bandsPerGroup = DivideByRoundUp(hfrBandCount, 8);
        if (bandsPerGroup > 0) {
            numGroups = DivideByRoundUp(hfrBandCount, bandsPerGroup);
        }
        hca.TotalBandCount = totalBandCount;
        hca.BaseBandCount = stereoStartBand;
        hca.StereoBandCount = hfrStartBand - stereoStartBand;
        hca.HfrGroupCount = numGroups;
        hca.BandsPerHfrGroup = bandsPerGroup;
    }
    SetChannelConfiguration(hca, channelConfig = -1) {
        const channelsPerTrack = (hca.ChannelCount / hca.TrackCount) >> 0;
        if (channelConfig === -1) {
            channelConfig = HCATables.DefaultChannelMapping[channelsPerTrack];
        }
        if (HCATables.ValidChannelMappings[channelsPerTrack - 1][channelConfig] != 1) {
            throw new Error("Channel mapping is not valid.");
        }
        hca.ChannelConfig = channelConfig;
    }
    CalculateLoopInfo(hca, loopStart, loopEnd) {
        loopStart += hca.InsertedSamples;
        loopEnd += hca.InsertedSamples;
        hca.LoopStartFrame = (loopStart / SamplesPerFrame) >> 0;
        hca.PreLoopSamples = loopStart % SamplesPerFrame >> 0;
        hca.LoopEndFrame = (loopEnd / SamplesPerFrame) >> 0;
        hca.PostLoopSamples = (SamplesPerFrame - loopEnd % SamplesPerFrame) >> 0;
        if (hca.PostLoopSamples === SamplesPerFrame) {
            hca.LoopEndFrame--;
            hca.PostLoopSamples = 0;
        }
    }
    CalculateHeaderSize(hca) {
        const baseHeaderSize = 96;
        const baseHeaderAlignment = 32;
        const loopFrameAlignment = 2048;
        hca.HeaderSize = GetNextMultiple(baseHeaderSize + hca.CommentLength, baseHeaderAlignment);
        if (hca.Looping) {
            const loopFrameOffset = hca.HeaderSize + hca.FrameSize * hca.LoopStartFrame;
            const paddingBytes = GetNextMultiple(loopFrameOffset, loopFrameAlignment) - loopFrameOffset;
            const paddingFrames = (paddingBytes / hca.FrameSize) >> 0;
            hca.InsertedSamples += paddingFrames * SamplesPerFrame;
            hca.LoopStartFrame += paddingFrames;
            hca.LoopEndFrame += paddingFrames;
            hca.HeaderSize += paddingBytes % hca.FrameSize;
        }
    }
    QuantizeSpectra(channels) {
        for (const channel of channels) {
            for (let i = 0; i < channel.CodedScaleFactorCount; i++) {
                const scaled = channel.ScaledSpectra[i];
                const resolution = channel.Resolution[i];
                const stepSizeInv = HCATables.QuantizerInverseStepSize[resolution];
                const shiftUp = stepSizeInv + 1;
                const shiftDown = (stepSizeInv + 0.5) >> 0;
                for (let sf = 0; sf < scaled.length; sf++) {
                    const quantizedSpectra = Math.floor(scaled[sf] * stepSizeInv + shiftUp) - shiftDown;
                    channel.QuantizedSpectra[sf][i] = quantizedSpectra;
                }
            }
        }
    }
    CalculateFrameResolutions(frame) {
        for (const channel of frame.Channels) {
            for (let i = 0; i < frame.EvaluationBoundary; i++) {
                channel.Resolution[i] = this.CalculateResolution(channel.ScaleFactors[i], frame.AcceptableNoiseLevel - 1);
            }
            for (let i = frame.EvaluationBoundary; i < channel.CodedScaleFactorCount; i++) {
                channel.Resolution[i] = this.CalculateResolution(channel.ScaleFactors[i], frame.AcceptableNoiseLevel);
            }
            arrayClear(channel.Resolution, channel.CodedScaleFactorCount, channel.Resolution.length - channel.CodedScaleFactorCount);
        }
    }
    CalculateNoiseLevel(frame) {
        var highestBand = frame.Hca.BaseBandCount + frame.Hca.StereoBandCount - 1;
        const availableBits = frame.Hca.FrameSize * 8;
        const maxLevel = 255;
        const minLevel = 0;
        let level = this.BinarySearchLevel(frame.Channels, availableBits, minLevel, maxLevel);
        while (level < 0) {
            highestBand -= 2;
            if (highestBand < 0) {
                throw new Error("Bitrate is set too low.");
            }
            for (const channel of frame.Channels) {
                channel.ScaleFactors[highestBand + 1] = 0;
                channel.ScaleFactors[highestBand + 2] = 0;
            }
            this.CalculateFrameHeaderLength(frame);
            level = this.BinarySearchLevel(frame.Channels, availableBits, minLevel, maxLevel);
        }
        frame.AcceptableNoiseLevel = level;
    }
    CalculateEvaluationBoundary(frame) {
        if (frame.AcceptableNoiseLevel === 0) {
            frame.EvaluationBoundary = 0;
            return;
        }
        const availableBits = frame.Hca.FrameSize * 8;
        const maxLevel = 127;
        const minLevel = 0;
        const level = this.BinarySearchBoundary(frame.Channels, availableBits, frame.AcceptableNoiseLevel, minLevel, maxLevel);
        frame.EvaluationBoundary = level >= 0 ? level : -1;
        if (frame.EvaluationBoundary == -1) {
            throw new Error("Evaluation boundary not found.");
        }
    }
    BinarySearchLevel(channels, availableBits, low, high) {
        const max = high;
        let midValue = 0;
        while (low !== high) {
            const mid = ((low + high) / 2) >> 0;
            midValue = this.CalculateUsedBits(channels, mid, 0);
            if (midValue > availableBits) {
                low = mid + 1;
            }
            else if (midValue <= availableBits) {
                high = mid;
            }
        }
        return low === max && midValue > availableBits ? -1 : low;
    }
    BinarySearchBoundary(channels, availableBits, noiseLevel, low, high) {
        const max = high;
        while (Math.abs(high - low) > 1) {
            const mid = ((low + high) / 2) >> 0;
            const midValue = this.CalculateUsedBits(channels, noiseLevel, mid);
            if (availableBits < midValue) {
                high = mid - 1;
            }
            else if (availableBits >= midValue) {
                low = mid;
            }
        }
        if (low === high) {
            return low < max ? low : -1;
        }
        const hiValue = this.CalculateUsedBits(channels, noiseLevel, high);
        return hiValue > availableBits ? low : high;
    }
    CalculateUsedBits(channels, noiseLevel, evalBoundary) {
        let length = 16 + 16 + 16;
        for (const channel of channels) {
            length += channel.HeaderLengthBits;
            for (let i = 0; i < channel.CodedScaleFactorCount; i++) {
                const noise = i < evalBoundary ? noiseLevel - 1 : noiseLevel;
                const resolution = this.CalculateResolution(channel.ScaleFactors[i], noise);
                if (resolution >= 8) {
                    const bits = HCATables.QuantizedSpectrumMaxBits[resolution] - 1;
                    const deadZone = HCATables.QuantizerDeadZone[resolution];
                    for (const scaledSpectra of channel.ScaledSpectra[i]) {
                        length += bits;
                        if (Math.abs(scaledSpectra) >= deadZone) {
                            length++;
                        }
                    }
                }
                else {
                    // To determine the bit count, we need to quantize the value and check
                    // the number of bits its prefix code uses.
                    // Compute the floor function by shifting the numbers to be above 0,
                    // truncating them, then shifting them back down to their original range.
                    const stepSizeInv = HCATables.QuantizerInverseStepSize[resolution];
                    const shiftUp = stepSizeInv + 1;
                    const shiftDown = Math.floor(stepSizeInv + 0.5 - 8);
                    for (const scaledSpectra of channel.ScaledSpectra[i]) {
                        const quantizedSpectra = Math.floor(scaledSpectra * stepSizeInv + shiftUp) - shiftDown;
                        length += HCATables.QuantizeSpectrumBits[resolution][quantizedSpectra];
                    }
                }
            }
        }
        return length;
    }
    CalculateFrameHeaderLength(frame) {
        for (const channel of frame.Channels) {
            this.CalculateOptimalDeltaLength(channel);
            if (channel.Type === ChannelType.StereoSecondary) {
                channel.HeaderLengthBits += 32;
            }
            else if (frame.Hca.HfrGroupCount > 0) {
                channel.HeaderLengthBits += 6 * frame.Hca.HfrGroupCount;
            }
        }
    }
    CalculateOptimalDeltaLength(channel) {
        let emptyChannel = true;
        for (let i = 0; i < channel.CodedScaleFactorCount; i++) {
            if (channel.ScaleFactors[i] !== 0) {
                emptyChannel = false;
                break;
            }
        }
        if (emptyChannel) {
            channel.HeaderLengthBits = 3;
            channel.ScaleFactorDeltaBits = 0;
            return;
        }
        let minDeltaBits = 6;
        let minLength = 3 + 6 * channel.CodedScaleFactorCount;
        for (let deltaBits = 1; deltaBits < 6; deltaBits++) {
            const maxDelta = (1 << (deltaBits - 1)) - 1;
            let length = 3 + 6;
            for (let band = 1; band < channel.CodedScaleFactorCount; band++) {
                const delta = channel.ScaleFactors[band] - channel.ScaleFactors[band - 1];
                length += Math.abs(delta) > maxDelta ? deltaBits + 6 : deltaBits;
            }
            if (length < minLength) {
                minLength = length;
                minDeltaBits = deltaBits;
            }
        }
        channel.HeaderLengthBits = minLength;
        channel.ScaleFactorDeltaBits = minDeltaBits;
    }
    ScaleSpectra(channels) {
        for (const channel of channels) {
            for (let b = 0; b < channel.CodedScaleFactorCount; b++) {
                const scaledSpectra = channel.ScaledSpectra[b];
                var scaleFactor = channel.ScaleFactors[b];
                for (let sf = 0; sf < scaledSpectra.length; sf++) {
                    var coeff = channel.Spectra[sf][b];
                    scaledSpectra[sf] = scaleFactor == 0 ? 0 :
                        Clamp(coeff * HCATables.QuantizerScalingTable[scaleFactor], -0.999999999999, 0.999999999999);
                    // Precision loss when rounding affects the floating point values just below 1.
                    // We avoid this by having clamp values that are about 9000 steps below 1.0.
                    // The number is slightly arbitrary. I just picked one that's far enough from 1
                    // to not cause any issues.
                }
            }
        }
    }
    CalculateScaleFactors(channels) {
        for (const channel of channels) {
            for (let b = 0; b < channel.CodedScaleFactorCount; b++) {
                let max = 0;
                for (let sf = 0; sf < SubframesPerFrame; sf++) {
                    const coeff = Math.abs(channel.Spectra[sf][b]);
                    max = Math.max(coeff, max);
                }
                channel.ScaleFactors[b] = this.FindScaleFactor(max);
            }
            arrayClear(channel.ScaleFactors, channel.CodedScaleFactorCount, channel.ScaleFactors.length - channel.CodedScaleFactorCount);
        }
    }
    FindScaleFactor(value) {
        const sf = HCATables.DequantizerScalingTable;
        let low = 0;
        let high = 63;
        while (low < high) {
            const mid = ((low + high) / 2) >>> 0;
            if (sf[mid] <= value) {
                low = mid + 1;
            }
            else {
                high = mid;
            }
        }
        return low;
    }
    EncodeIntensityStereo(frame) {
        if (frame.Hca.StereoBandCount <= 0) {
            return;
        }
        for (let c = 0; c < frame.Channels.length; c++) {
            if (frame.Channels[c].Type !== ChannelType.StereoPrimary) {
                continue;
            }
            for (let sf = 0; sf < SubframesPerFrame; sf++) {
                const l = frame.Channels[c].Spectra[sf];
                const r = frame.Channels[c + 1].Spectra[sf];
                let energyL = 0;
                let energyR = 0;
                let energyTotal = 0;
                for (let b = frame.Hca.BaseBandCount; b < frame.Hca.TotalBandCount; b++) {
                    energyL += Math.abs(l[b]);
                    energyR += Math.abs(r[b]);
                    energyTotal += Math.abs(l[b] + r[b]);
                }
                energyTotal *= 2;
                const energyLR = energyR + energyL;
                const storedValue = 2 * energyL / energyLR;
                let energyRatio = energyLR / energyTotal;
                energyRatio = Clamp(energyRatio, 0.5, Math.sqrt(2) / 2);
                let quantized = 1;
                if (energyR > 0 || energyL > 0) {
                    while (quantized < 13 && HCATables.IntensityRatioBoundsTable[quantized] >= storedValue) {
                        quantized++;
                    }
                }
                else {
                    quantized = 0;
                    energyRatio = 1;
                }
                frame.Channels[c + 1].Intensity[sf] = quantized;
                for (let b = frame.Hca.BaseBandCount; b < frame.Hca.TotalBandCount; b++) {
                    l[b] = (l[b] + r[b]) * energyRatio;
                    r[b] = 0;
                }
            }
        }
    }
    CalculateHfrGroupAverages(frame) {
        const hca = frame.Hca;
        if (hca.HfrGroupCount === 0) {
            return;
        }
        const hfrStartBand = hca.StereoBandCount + hca.BaseBandCount;
        for (const channel of frame.Channels) {
            if (channel.Type === ChannelType.StereoSecondary) {
                continue;
            }
            for (let group = 0, band = hfrStartBand; group < hca.HfrGroupCount; group++) {
                let sum = 0.0;
                let count = 0;
                for (let i = 0; i < hca.BandsPerHfrGroup && band < SamplesPerSubFrame; band++, i++) {
                    for (let subframe = 0; subframe < SubframesPerFrame; subframe++) {
                        sum += Math.abs(channel.Spectra[subframe][band]);
                    }
                    count += SubframesPerFrame;
                }
                channel.HfrGroupAverageSpectra[group] = sum / count;
            }
        }
    }
    CalculateHfrScale(frame) {
        const hca = frame.Hca;
        if (hca.HfrGroupCount === 0) {
            return;
        }
        const hfrStartBand = hca.StereoBandCount + hca.BaseBandCount;
        const hfrBandCount = Math.min(hca.HfrBandCount, hca.TotalBandCount - hca.HfrBandCount);
        for (const channel of frame.Channels) {
            if (channel.Type === ChannelType.StereoSecondary) {
                continue;
            }
            const groupSpectra = channel.HfrGroupAverageSpectra;
            for (let group = 0, band = 0; group < hca.HfrGroupCount; group++) {
                let sum = 0.0;
                let count = 0;
                for (let i = 0; i < hca.BandsPerHfrGroup && band < hfrBandCount; band++, i++) {
                    for (let subframe = 0; subframe < SubframesPerFrame; subframe++) {
                        sum += Math.abs(channel.ScaledSpectra[hfrStartBand - band - 1][subframe]);
                    }
                    count += SubframesPerFrame;
                }
                const averageSpectra = sum / count;
                if (averageSpectra > 0.0) {
                    groupSpectra[group] *= Math.min(1.0 / averageSpectra, Math.sqrt(2));
                }
                channel.HfrScales[group] = this.FindScaleFactor(groupSpectra[group]);
            }
        }
    }
    RunMdct(channels) {
        for (const channel of channels) {
            for (let sf = 0; sf < SubframesPerFrame; sf++) {
                channel.Mdct.RunMdct(channel.PcmFloat[sf], channel.Spectra[sf]);
            }
        }
    }
    PcmToFloat(pcm, channels) {
        for (let c = 0; c < channels.length; c++) {
            var pcmIdx = 0;
            for (let sf = 0; sf < SubframesPerFrame; sf++) {
                for (let i = 0; i < SamplesPerSubFrame; i++) {
                    channels[c].PcmFloat[sf][i] = pcm[c][pcmIdx++] * (1.0 / 32768.0);
                }
            }
        }
    }
    CalculateResolution(scaleFactor, noiseLevel) {
        if (scaleFactor == 0) {
            return 0;
        }
        var curvePosition = Math.round(noiseLevel - 5 * scaleFactor / 2 + 2);
        curvePosition = Clamp(curvePosition, 0, 58);
        return HCATables.ScaleToResolutionCurve[curvePosition];
    }
}

class HCAFormat {
    constructor(b) {
        if (b) {
            this.AudioData = b.AudioData;
            this.Hca = b.Hca;
        }
    }
    static EncodeFromPcm16(pcm16, config) {
        if (config == undefined) {
            config = new HCAParameters(pcm16.ChannelCount, pcm16.SampleRate);
        }
        config.ChannelCount = pcm16.ChannelCount;
        config.SampleRate = pcm16.SampleRate;
        config.SampleCount = pcm16.SampleCount;
        config.Looping = pcm16.Looping;
        config.LoopStart = pcm16.LoopStart;
        config.LoopEnd = pcm16.LoopEnd;
        //IProgressReport progress = config.Progress;
        const encoder = HCAEncoder.InitializeNew(config);
        const pcm = pcm16.Channels;
        var pcmBuffer = Array.from({ length: pcm16.ChannelCount }, () => new Int16Array(SamplesPerFrame));
        //progress?.SetTotal(encoder.Hca.FrameCount);
        var audio = Array.from({ length: encoder.Hca.FrameCount }, () => new Uint8Array(encoder.FrameSize));
        var frameNum = 0;
        for (let i = 0; frameNum < encoder.Hca.FrameCount; i++) {
            var samplesToCopy = Math.min(pcm16.SampleCount - i * SamplesPerFrame, SamplesPerFrame);
            for (let c = 0; c < pcm.length; c++) {
                arrayCopy(pcm[c], SamplesPerFrame * i, pcmBuffer[c], 0, samplesToCopy);
            }
            var framesWritten = encoder.Encode(pcmBuffer, audio[frameNum]);
            if (framesWritten == 0) {
                throw new Error("Encoder returned no audio. This should not happen.");
            }
            if (framesWritten > 0) {
                frameNum++;
                framesWritten--;
                //progress?.ReportAdd(1);
            }
            while (framesWritten > 0) {
                audio[frameNum] = encoder.GetPendingFrame();
                frameNum++;
                framesWritten--;
                //progress?.ReportAdd(1);
            }
        }
        const builder = new HCAFormatBuilder(audio, encoder.Hca);
        const ret = builder.Build();
        return ret;
    }
    GetChannelsInternal(channelRange) {
        throw new Error("Not Implemented Exception");
    }
    AddInternal(format) {
        throw new Error("Not Implemented Exception");
    }
    GetCloneBuilder() {
        return new HCAFormatBuilder(this.AudioData, this.Hca.GetClone());
    }
}
class HCAFormatBuilder {
    constructor(audioData, hca) {
        this.AudioData = audioData;
        this.Hca = hca;
        this.SampleRate = hca.SampleRate;
        this.SampleCount = hca.SampleCount;
        if (hca.Looping) {
            this.Looping = true;
            this.LoopStart = hca.LoopStartSample;
            this.LoopEnd = hca.LoopEndSample;
        }
    }
    get ChannelCount() {
        return this.Hca.ChannelCount || 0;
    }
    WithLoop(loop, loopStart, loopEnd) {
        if (loop && (loopStart != this.Hca.LoopStartSample || loopEnd != this.Hca.LoopEndSample)) {
            throw new Error("Changing the loop points on HCA audio without re-encoding is not supported.");
        }
        this.WithLoopImpl(loop);
        return this;
    }
    WithLoopImpl(loop) {
        if (loop && !this.Hca.Looping) {
            throw new Error("Adding a loop to HCA audio without re-encoding is not supported.");
        }
        this.Hca.Looping = loop;
    }
    Build() {
        return new HCAFormat(this);
    }
}

class HCA {
    constructor() {
    }
    static decrypt(hca, key1, key2, subkey) {
        return this.decryptOrEncrypt(hca, false, key1, key2, subkey);
    }
    static encrypt(hca, key1, key2, subkey) {
        return this.decryptOrEncrypt(hca, true, key1, key2, subkey);
    }
    static decryptOrEncrypt(hca, encrypt, key1, key2, subkey) {
        // in-place decryption/encryption
        // handle subkey
        let mixed = HCACipher.mixWithSubkey(key1, key2, subkey);
        key1 = mixed.key1;
        key2 = mixed.key2;
        // parse header
        let info = new HCAInfo(hca); // throws "Not a HCA file" if mismatch
        if (!encrypt && !info.hasHeader["ciph"]) {
            return hca; // not encrypted
        }
        else if (encrypt && !info.hasHeader["ciph"]) {
            throw new Error('Input hca lacks "ciph" header section. Please call HCAInfo.addCipherHeader(hca) first.');
        }
        let cipher;
        switch (info.cipher) {
            case 0:
                // not encrypted
                if (encrypt)
                    cipher = new HCACipher(key1, key2).invertTable();
                else
                    return hca;
                break;
            case 1:
                // encrypted with "no key"
                if (encrypt) {
                    throw new Error('already encrypted with "no key", please decrypt first');
                }
                else
                    cipher = new HCACipher("none"); // ignore given keys
                break;
            case 0x38:
                // encrypted with keys - will yield incorrect waveform if incorrect keys are given!
                if (encrypt) {
                    throw new Error("already encrypted with specific keys, please decrypt with correct keys first");
                }
                else
                    cipher = new HCACipher(key1, key2);
                break;
            default:
                throw new Error("unknown ciph.type");
        }
        for (let i = 0; i < info.format.blockCount; ++i) {
            let ftell = info.dataOffset + info.blockSize * i;
            let block = hca.subarray(ftell, ftell + info.blockSize);
            // verify block checksum
            Crc16.verify(block, info.blockSize - 2);
            // decrypt/encrypt block
            cipher.mask(block, 0, info.blockSize - 2);
            // fix checksum
            Crc16.fix(block, info.blockSize - 2);
        }
        // re-(un)mask headers, and set ciph header to new value
        let newCipherData = new Uint8Array(2);
        let newCipherType = encrypt ? cipher.getType() : 0;
        new DataView(newCipherData.buffer).setUint16(0, newCipherType);
        info.modify(hca, "ciph", newCipherData);
        return hca;
    }
    static findKey(hca, givenKeyList, subkey, threshold = 0.5, depth = 1024) {
        let keyList, unmixedKeyList;
        if (givenKeyList == null) {
            keyList = HCAKnownKeys;
        }
        else {
            keyList = givenKeyList.map((keys) => [HCACipher.parseKey(keys[0]), HCACipher.parseKey(keys[1])]);
            HCAKnownKeys.forEach((keys) => keyList === null || keyList === void 0 ? void 0 : keyList.push(keys));
        }
        unmixedKeyList = keyList.slice();
        if (subkey != null) {
            // handle subkey
            keyList = keyList.map((keys) => {
                let mixed = HCACipher.mixWithSubkey(keys[0], keys[1], subkey);
                return [mixed.key1, mixed.key2];
            });
        }
        // parse header
        const info = new HCAInfo(hca); // throws "Not a HCA file" if mismatch
        if (info.cipher == 0)
            return; // not encrypted
        const frame = new HCAFrame(info);
        const scores = keyList.map(() => 0);
        let cipher;
        const testKey = (block, keys) => {
            if (cipher == null)
                cipher = new HCACipher(keys[0], keys[1]);
            // decrypt block
            block = block.slice();
            cipher.mask(block, 0, info.blockSize - 2);
            // test if the key is correct
            let reader = new HCABitReader(block);
            let result = false;
            try {
                result = HCAPacking.UnpackFrame(frame, reader);
            }
            catch (e) { }
            if (!result) {
                cipher = undefined;
            }
            return result;
        };
        let testedBlockCount = 0;
        for (let i = 0, lastFound = -1; i < info.format.blockCount && i < depth; i++) {
            let ftell = info.dataOffset + info.blockSize * i;
            let block = hca.subarray(ftell, ftell + info.blockSize);
            let found = -1;
            if (lastFound != -1) {
                // test last found key
                if (testKey(block, keyList[lastFound]))
                    found = lastFound;
            }
            if (found == -1) {
                // last found key does not match, test others
                found = keyList.findIndex((keys, index) => index == lastFound ? false : testKey(block, keys));
            }
            if (found != -1) {
                lastFound = found;
                scores[found]++;
            }
            testedBlockCount++;
        }
        let bestScore = 0, bestIndex = -1;
        scores.forEach((s, i) => s > bestScore && (bestScore = s, bestIndex = i));
        if (bestIndex == -1 || bestScore / testedBlockCount < threshold)
            return; // cannot found valid key
        else
            return unmixedKeyList[bestIndex];
    }
    static encode(wav, key1, key2, subkey) {
        //source
        //VGAAudio/Formats/CriHca/CriHcaFormat.cs
        //https://github.com/Thealexbarney/VGAudio/blob/master/src/VGAudio/Formats/CriHca/CriHcaFormat.cs
        const pcm16 = new wavReader(wav);
        if (pcm16.wFormatTag != 1) {
            throw new Error("Can only create HCA from PCM16 wav");
        }
        const config = new HCAParameters(pcm16.ChannelCount, pcm16.SampleRate, pcm16.SampleCount, pcm16.LoopStart, pcm16.LoopEnd);
        const format = HCAFormat.EncodeFromPcm16(pcm16, config);
        const hca = new HCAWriter(key1, key2, subkey).SetupWriter(format);
        if (key1 != undefined) {
            return this.encrypt(hca, key1, key2, subkey);
        }
        return hca;
    }
    static decode(hca, mode = 32, loop = 0, volume = 1.0) {
        switch (mode) {
            case 0: // float
            case 8:
            case 16:
            case 24:
            case 32: // integer
                break;
            default:
                mode = 32;
        }
        if (volume > 1)
            volume = 1;
        else if (volume < 0)
            volume = 0;
        let info = new HCAInfo(hca); // throws "Not a HCA file" if mismatch
        let frame = new HCAFrame(info);
        if (info.hasHeader["ciph"] && info.cipher != 0) {
            throw new Error("HCA is encrypted, please decrypt it first before decoding");
        }
        // prepare output WAV file
        const outputWav = new HCAWav(info, mode, loop);
        const fileBuf = outputWav.fileBuf;
        const dataPart = outputWav.dataPart;
        // calculate in-WAV size
        let inWavSize = info.calcInWavSize(mode);
        // decode blocks (frames)
        let failedBlocks = [], lastError = undefined;
        for (let i = 0, offset = 0; i < info.format.blockCount; i++) {
            let lastDecodedSamples = i * SamplesPerFrame;
            let currentDecodedSamples = lastDecodedSamples + SamplesPerFrame;
            if (currentDecodedSamples <= info.startAtSample ||
                lastDecodedSamples >= info.endAtSample) {
                continue;
            }
            let startOffset = info.dataOffset + info.blockSize * i;
            let block = hca.subarray(startOffset, startOffset + info.blockSize);
            try {
                this.decodeBlock(frame, block);
            }
            catch (e) {
                failedBlocks.push(i);
                lastError = e;
                frame = new HCAFrame(info);
            }
            let wavebuff;
            if (lastDecodedSamples < info.startAtSample ||
                currentDecodedSamples > info.endAtSample) {
                // crossing startAtSample/endAtSample, skip/drop specified bytes
                wavebuff = this.writeToPCM(frame, mode, volume);
                if (lastDecodedSamples < info.startAtSample) {
                    let skippedSize = (info.startAtSample - lastDecodedSamples) *
                        inWavSize.sample;
                    wavebuff = wavebuff.subarray(skippedSize, inWavSize.block);
                }
                else if (currentDecodedSamples > info.endAtSample) {
                    let writeSize = (info.endAtSample - lastDecodedSamples) *
                        inWavSize.sample;
                    wavebuff = wavebuff.subarray(0, writeSize);
                }
                else
                    throw Error("should never go here");
                dataPart.set(wavebuff, offset);
            }
            else {
                wavebuff = this.writeToPCM(frame, mode, volume, dataPart, offset);
            }
            offset += wavebuff.byteLength;
        }
        if (failedBlocks.length > 0) {
            console.error(`error decoding following blocks, filled zero`, failedBlocks, lastError);
        }
        // decoding done, then just copy looping part
        if (info.hasHeader["loop"] && loop) {
            // "tail" beyond loop end is dropped
            // copy looping audio clips
            if (inWavSize.loop == null)
                throw new Error();
            let preLoopSizeInWav = inWavSize.sample *
                (info.loopStartAtSample - info.startAtSample);
            let src = dataPart.subarray(preLoopSizeInWav, preLoopSizeInWav + inWavSize.loop.loopPart);
            for (let i = 0, start = preLoopSizeInWav + inWavSize.loop.loopPart; i < loop; i++) {
                let dst = dataPart.subarray(start, start + inWavSize.loop.loopPart);
                dst.set(src);
                start += inWavSize.loop.loopPart;
            }
        }
        return fileBuf;
    }
    static decodeBlock(frame, block) {
        let info = frame.Hca;
        if (block.byteLength != info.blockSize)
            throw new Error();
        // verify checksum
        Crc16.verify(block, info.blockSize - 2);
        // decode
        HCADecoder.DecodeFrame(block, frame);
    }
    static writeToPCM(frame, mode = 32, volume = 1.0, writer, ftell) {
        switch (mode) {
            case 0: // float
            case 8:
            case 16:
            case 24:
            case 32: // integer
                break;
            default:
                mode = 32;
        }
        if (volume > 1)
            volume = 1;
        else if (volume < 0)
            volume = 0;
        // create new writer if not specified
        let info = frame.Hca;
        if (writer == null) {
            writer = new Uint8Array(SamplesPerFrame * info.format.channelCount *
                (mode == 0 ? 32 : mode) / 8);
            if (ftell == null) {
                ftell = 0;
            }
        }
        else {
            if (ftell == null)
                throw new Error();
        }
        // write decoded data into writer
        let p = new DataView(writer.buffer, writer.byteOffset, writer.byteLength);
        let ftellBegin = ftell;
        for (let sf = 0; sf < SubframesPerFrame; sf++) {
            for (let s = 0; s < SamplesPerSubFrame; s++) {
                for (let c = 0; c < frame.Channels.length; c++) {
                    let f = frame.Channels[c].PcmFloat[sf][s] * volume;
                    if (f > 1)
                        f = 1;
                    else if (f < -1)
                        f = -1;
                    switch (mode) {
                        case 8:
                            // must be unsigned
                            p.setUint8(ftell, f * 0x7F + 0x80);
                            ftell += 1;
                            break;
                        case 16:
                            // for above 8-bit integer, little-endian signed integer is used
                            // (setUint16/setInt16 actually doesn't seem to make any difference here)
                            p.setInt16(ftell, f * 0x7FFF, true);
                            ftell += 2;
                            break;
                        case 24:
                            // there's no setInt24, write 3 bytes with setUint8 respectively
                            f *= 0x7FFFFF;
                            p.setUint8(ftell, f & 0xFF);
                            p.setUint8(ftell + 1, f >> 8 & 0xFF);
                            p.setUint8(ftell + 2, f >> 16 & 0xFF);
                            ftell += 3;
                            break;
                        case 32:
                            p.setInt32(ftell, f * 0x7FFFFFFF, true);
                            ftell += 4;
                            break;
                        case 0:
                            // float
                            p.setFloat32(ftell, f, true);
                            ftell += 4;
                            break;
                        default:
                            throw new Error("unknown mode");
                    }
                }
            }
        }
        return writer.subarray(ftellBegin, ftell);
    }
    static fixChecksum(hca) {
        HCAInfo.fixHeaderChecksum(hca);
        let info = new HCAInfo(hca);
        for (let i = 0; i < info.format.blockCount; i++) {
            let ftell = info.dataOffset + i * info.blockSize;
            let block = hca.subarray(ftell, ftell + info.blockSize);
            Crc16.fix(block, info.blockSize - 2);
        }
        return hca;
    }
}

// convert non-transferable typed array to transferable array buffer
class HCATransTypedArray {
    constructor(ta, transferList) {
        const type = HCATransTypedArray.getType(ta);
        if (type != null)
            this.type = type.type;
        else
            throw new Error("unexpected type");
        this.buffer = ta.buffer;
        this.byteOffset = ta.byteOffset;
        this.length = ta.length;
        if (!transferList.find((val) => val === this.buffer)) {
            transferList.push(this.buffer);
        }
    }
    static convert(arg, transferList) {
        if (this.getType(arg) != null) {
            return new HCATransTypedArray(arg, transferList);
        }
        else
            return arg;
    }
    static restore(arg) {
        const type = this.getType(arg);
        if (type != null && type.converted) {
            return arg.array;
        }
        else
            return arg;
    }
    static getType(arg) {
        if (arg == null || typeof arg !== "object")
            return undefined;
        else if (arg instanceof Int8Array) {
            return { converted: false, type: "Int8" };
        }
        else if (arg instanceof Int16Array) {
            return { converted: false, type: "Int16" };
        }
        else if (arg instanceof Int32Array) {
            return { converted: false, type: "Int32" };
        }
        else if (arg instanceof Uint8Array) {
            return { converted: false, type: "Uint8" };
        }
        else if (arg instanceof Uint16Array) {
            return { converted: false, type: "Uint16" };
        }
        else if (arg instanceof Uint32Array) {
            return { converted: false, type: "Uint32" };
        }
        else if (arg instanceof Float32Array) {
            return { converted: false, type: "Float32" };
        }
        else if (arg instanceof Float64Array) {
            return { converted: false, type: "Float64" };
        }
        else if (arg.buffer instanceof ArrayBuffer && typeof arg.type === "string") {
            return { converted: true, type: arg.type };
        }
        else
            return undefined;
    }
    get array() {
        switch (this.type) {
            case "Int8":
                return new Int8Array(this.buffer, this.byteOffset, this.length);
            case "Int16":
                return new Int16Array(this.buffer, this.byteOffset, this.length);
            case "Int32":
                return new Int32Array(this.buffer, this.byteOffset, this.length);
            case "Uint8":
                return new Uint8Array(this.buffer, this.byteOffset, this.length);
            case "Uint16":
                return new Uint16Array(this.buffer, this.byteOffset, this.length);
            case "Uint32":
                return new Uint32Array(this.buffer, this.byteOffset, this.length);
            case "Float32":
                return new Float32Array(this.buffer, this.byteOffset, this.length);
            case "Float64":
                return new Float64Array(this.buffer, this.byteOffset, this.length);
        }
        throw new Error("unexpected type");
    }
}

class HCATask {
    constructor(origin, taskID, cmd, args, replyArgs, isDummy) {
        this.transferList = [];
        this._hasResult = false;
        this.origin = origin;
        this.taskID = taskID;
        this.cmd = cmd;
        this._args = args === null || args === void 0 ? void 0 : args.map((arg) => HCATransTypedArray.convert(arg, this.transferList));
        this._replyArgs = replyArgs;
        if (isDummy != null && isDummy)
            this.isDummy = true;
    }
    get args() {
        var _a;
        return (_a = this._args) === null || _a === void 0 ? void 0 : _a.map((arg) => HCATransTypedArray.restore(arg));
    }
    get hasResult() {
        return this._hasResult;
    }
    get result() {
        if (!this._hasResult)
            throw new Error("no result");
        return HCATransTypedArray.restore(this._result);
    }
    set result(result) {
        if (this.hasErr)
            throw new Error("already has error, cannot set result");
        if (this._hasResult)
            throw new Error("cannot set result again");
        this._result = HCATransTypedArray.convert(result, this.transferList);
        this._hasResult = true;
        if (!this._replyArgs)
            delete this._args;
    }
    get hasErr() {
        return this._errMsg != null;
    }
    get errMsg() {
        return this._errMsg;
    }
    set errMsg(msg) {
        // changing errMsg is allowed, but clearing errMsg is disallowed
        if (typeof msg !== "string") {
            throw new Error("error message must be a string");
        }
        delete this._args;
        if (this._hasResult) {
            // clear result on error
            delete this._result;
            this._hasResult = false;
            this.transferList = [];
            this.args.forEach((arg) => HCATransTypedArray.convert(arg, this.transferList));
        }
        this._errMsg = msg;
    }
    static recreate(task) {
        const recreated = new HCATask(task.origin, task.taskID, task.cmd, task._args, task._replyArgs);
        if (task._errMsg != null)
            recreated.errMsg = task._errMsg;
        else if (task._hasResult)
            recreated.result = task._result;
        return recreated;
    }
}

class HCATaskQueue {
    constructor(origin, postMessage, taskHandler, destroy) {
        this._isAlive = true;
        this.isIdle = true;
        // comparing to structured copy (by default), if data size is big (because of zero-copy),
        // transferring is generally much faster. however it obviously has a drawback,
        // that transferred arguments are no longer accessible in the sender thread
        this.transferArgs = false;
        // the receiver/callee will always use transferring to send back arguments,
        // not sending the arguments back is supposed to save a little time/overhead
        this.replyArgs = false;
        this.queue = [];
        this._lastTaskID = 0;
        this.callbacks = {};
        this.origin = origin;
        this.postMessage = postMessage;
        this.taskHandler = taskHandler;
        this.destroy = destroy;
    }
    getNextTaskID() {
        const max = HCATaskQueue.maxTaskID - 1;
        if (this._lastTaskID < 0 || this._lastTaskID > max) {
            throw new Error("lastTaskID out of range");
        }
        const start = this._lastTaskID + 1;
        for (let i = start; i <= start + max; i++) {
            const taskID = i % (max + 1);
            if (this.callbacks[taskID] == null)
                return this._lastTaskID = taskID;
        }
        throw new Error("cannot find next taskID");
    }
    sendTask(task) {
        if (task.origin !== this.origin) {
            throw new Error("the task to be sent must have the same origin as the task queue");
        }
        this.postMessage(task, this.transferArgs ? task.transferList : []);
    }
    sendReply(task) {
        if (task.origin === this.origin) {
            throw new Error("the reply to be sent must not have the same origin as the task queue");
        }
        this.postMessage(task, task.transferList); // always use transferring to send back arguments
    }
    async sendNextTask() {
        let task = this.queue.shift();
        if (task == null) {
            this.isIdle = true;
        }
        else {
            this.isIdle = false;
            // apply hook first
            const registered = this.callbacks[task.taskID];
            const taskHook = registered != null && registered.hook != null &&
                registered.hook.task != null
                ? registered.hook.task
                : undefined;
            if (taskHook != null) {
                try {
                    task = await taskHook(task);
                }
                catch (e) {
                    task.errMsg = `[${this.origin}] error when applying hook ` +
                        `before executing cmd ${task.cmd} from ${task.origin}`;
                    if (typeof e === "string" || e instanceof Error) {
                        task.errMsg += "\n" + e.toString();
                    }
                    task.isDummy = true;
                }
            }
            // send task
            if (task.isDummy) {
                if (!task.hasErr && !task.hasResult)
                    task.result = null;
                const ev = new MessageEvent("message", { data: task }); // not actually sending, use a fake reply
                this.msgHandler(ev); // won't await
            }
            else {
                this.sendTask(task);
            }
        }
    }
    get isAlive() {
        return this._isAlive;
    }
    // these following two methods/functions are supposed to be callbacks
    async msgHandler(ev) {
        try {
            const task = HCATask.recreate(ev.data);
            if (task.origin !== this.origin) {
                // incoming cmd to execute
                try {
                    task.result = await this.taskHandler(task);
                }
                catch (e) {
                    // it's observed that Firefox refuses to postMessage an Error object:
                    // "DataCloneError: The object could not be cloned."
                    // (observed in Firefox 97, not clear about other versions)
                    // Chrome doesn't seem to have this problem,
                    // however, in order to keep compatible with Firefox,
                    // we still have to avoid posting an Error object
                    task.errMsg =
                        `[${this.origin}] error when executing cmd ${task.cmd} from ${task.origin}`;
                    if (typeof e === "string" || e instanceof Error) {
                        task.errMsg += "\n" + e.toString();
                    }
                }
                if (task.taskID != HCATaskQueue.discardReplyTaskID) {
                    try {
                        this.sendReply(task);
                    }
                    catch (e) {
                        console.error(`[${this.origin}] sendReply failed.`, e);
                        task.errMsg = (task.errMsg == null ? "" : task.errMsg + "\n\n") +
                            "postMessage from Worker failed";
                        if (typeof e === "string" || e instanceof Error) {
                            task.errMsg += "\n" + e.toString();
                        }
                        // try again
                        this.sendReply(task); // if it throws, just let it throw
                    }
                }
            }
            else {
                // receiving cmd result
                // find & unregister callback
                const registered = this.callbacks[task.taskID];
                delete this.callbacks[task.taskID];
                // apply hook
                let result = task.hasResult ? task.result : undefined;
                const hook = registered.hook;
                if (hook != null) {
                    try {
                        if (task.hasErr && hook.error != null) {
                            await hook.error(task.errMsg);
                        }
                        else if (task.hasResult && hook.result != null) {
                            result = await hook.result(task.result);
                        }
                    }
                    catch (e) {
                        if (!task.hasErr)
                            task.errMsg = "";
                        task.errMsg += `[${this.origin}] error when applying hook ` +
                            `after executing cmd ${task.cmd} from ${task.origin}`;
                        if (typeof e === "string" || e instanceof Error) {
                            task.errMsg += "\n" + e.toString();
                        }
                    }
                }
                // settle promise
                if (task.hasErr) {
                    registered.reject(task.errMsg);
                }
                else if (task.hasResult) {
                    registered.resolve(result);
                }
                else {
                    throw new Error(`task (origin=${task.origin} taskID=${task.taskID} cmd=${task.cmd}) ` +
                        `has neither error nor result`); // should never happen
                }
                // start next task
                await this.sendNextTask();
            }
        }
        catch (e) {
            // irrecoverable error
            await this.errHandler(e);
        }
    }
    async errHandler(data) {
        // irrecoverable error
        if (this._isAlive) {
            // print error message
            console.error(`[${this.origin}] destroying background worker on irrecoverable error`, data);
            // destroy background worker
            try {
                await this.destroy();
            }
            catch (e) {
                console.error(`[${this.origin}] error when trying to destroy()`, e);
            }
            // after destroy, mark isAlive as false (otherwise sendCmd will fail)
            this._isAlive = false;
            // reject all pending promises
            for (let taskID in this.callbacks) {
                const reject = this.callbacks[taskID].reject;
                delete this.callbacks[taskID];
                try {
                    reject();
                }
                catch (e) {
                    console.error(`[${this.origin}] error rejecting taskID=${taskID}`, e);
                }
            }
        }
    }
    async getTransferConfig() {
        if (!this._isAlive)
            throw new Error("dead");
        return await this.execCmd("nop", [], {
            result: () => ({
                transferArgs: this.transferArgs,
                replyArgs: this.replyArgs,
            }),
        });
    }
    async configTransfer(transferArgs, replyArgs) {
        if (!this._isAlive)
            throw new Error("dead");
        return await this.execCmd("nop", [], {
            result: () => {
                this.transferArgs = transferArgs ? true : false;
                this.replyArgs = replyArgs ? true : false;
            },
        });
    }
    async execCmd(cmd, args, hook) {
        // can be modified to simply wrap execMultiCmd but I just want to let it alone for no special reason
        if (!this._isAlive)
            throw new Error("dead");
        // assign new taskID
        const taskID = this.getNextTaskID();
        const task = new HCATask(this.origin, taskID, cmd, args, this.replyArgs);
        // register callback
        if (this.callbacks[taskID] != null) {
            throw new Error(`taskID=${taskID} is already occupied`);
        }
        const resultPromise = new Promise((resolve, reject) => this.callbacks[taskID] = { resolve: resolve, reject: reject, hook: hook });
        // append to command queue
        this.queue.push(task);
        // start executing tasks
        if (this.isIdle)
            await this.sendNextTask();
        // return result
        return await resultPromise;
    }
    async execMultiCmd(cmdList) {
        // the point is to ensure "atomicity" between cmds
        if (!this._isAlive)
            throw new Error("dead");
        let resultPromises = [];
        for (let i = 0; i < cmdList.length; i++) {
            // assign new taskID
            const taskID = this.getNextTaskID();
            const listItem = cmdList[i];
            const task = new HCATask(this.origin, taskID, listItem.cmd, listItem.args, this.replyArgs);
            // register callback
            if (this.callbacks[taskID] != null) {
                throw new Error(`taskID=${taskID} is already occupied`);
            }
            resultPromises.push(new Promise((resolve, reject) => this.callbacks[taskID] = {
                resolve: resolve,
                reject: reject,
                hook: listItem.hook,
            }));
            // append to command queue
            this.queue.push(task);
        }
        // start executing tasks
        if (this.isIdle)
            await this.sendNextTask();
        // return results
        return await Promise.all(resultPromises);
    }
    sendCmd(cmd, args) {
        // send cmd without registering callback
        // generally not recommended
        if (!this._isAlive)
            throw new Error("dead");
        const task = new HCATask(this.origin, HCATaskQueue.discardReplyTaskID, cmd, args, false);
        this.sendTask(task);
    }
    async shutdown(forcibly = false) {
        if (this._isAlive) {
            if (forcibly) {
                try {
                    await this.destroy();
                }
                catch (e) {
                    console.error(`[${this.origin}] error when trying to forcibly shutdown.`, e);
                }
                this._isAlive = false;
            }
            else {
                await this.execCmd("nop", [], {
                    result: async () => {
                        await this.destroy();
                        this._isAlive = false;
                    },
                });
            }
        }
    }
}
HCATaskQueue.maxTaskID = 256; // there's recursion in sendNextTask when making fake reply
HCATaskQueue.discardReplyTaskID = -1;

// Web Worker / AudioWorklet support
if (typeof document === "undefined") {
    if (typeof onmessage === "undefined") {
        class HCAFramePlayerContext {
            constructor(procOpts) {
                this.isPlaying = false;
                this.defaultPullBlockCount = 128;
                this.failedBlocks = [];
                this.printErrorCountDownFrom = 256;
                this.printErrorCountDown = this.printErrorCountDownFrom;
                this.totalPulledBlockCount = 0;
                this.isPulling = false;
                this._isStalling = false;
                this.onceStalled = false;
                this.sampleOffset = 0;
                this.lastDecodedBlockIndex = -1;
                this.frame = new HCAFrame(new HCAInfo(procOpts.rawHeader));
                const info = this.frame.Hca;
                const hasLoop = info.hasHeader["loop"] ? true : false;
                if (typeof procOpts.pullBlockCount === "number") {
                    if (isNaN(procOpts.pullBlockCount))
                        throw new Error();
                    let pullBlockCount = Math.floor(procOpts.pullBlockCount);
                    if (pullBlockCount < 2)
                        throw new Error();
                    this.pullBlockCount = pullBlockCount;
                }
                else
                    this.pullBlockCount = this.defaultPullBlockCount;
                const bufferedBlockCount = hasLoop ? (info.loop.end + 1) : this.pullBlockCount * 2;
                this.encoded = new Uint8Array(info.blockSize * bufferedBlockCount);
                this.decoded = Array.from({ length: info.format.channelCount }, () => new Float32Array(HCAFrame.SamplesPerFrame * 2));
            }
            get isStalling() {
                return this._isStalling;
            }
            set isStalling(val) {
                this._isStalling = val;
                if (val)
                    this.onceStalled = true;
            }
        }
        class HCAFramePlayer extends AudioWorkletProcessor {
            constructor(options) {
                super();
                this.unsettled = [];
                this.waitCountDownFrom = 32;
                if (options == null || options.processorOptions == null)
                    throw new Error();
                this.ctx = new HCAFramePlayerContext(options.processorOptions);
                this.taskQueue = new HCATaskQueue("Background-HCAFramePlayer", (msg, trans) => this.port.postMessage(msg, trans), async (task) => {
                    switch (task.cmd) {
                        case "nop":
                            return;
                        case "initialize":
                            this.ctx = new HCAFramePlayerContext(task.args[0]);
                            break;
                        case "reset":
                            await new Promise((resolve) => {
                                delete this.ctx;
                                this.unsettled.push({ resolve: resolve, counter: this.waitCountDownFrom });
                            });
                            break;
                        case "pause":
                        case "resume":
                            if (this.ctx == null)
                                throw new Error(`not initialized`);
                            this.ctx.isPlaying = task.cmd === "resume";
                            if (!this.ctx.isPlaying)
                                await new Promise((resolve) => {
                                    this.unsettled.push({ resolve: resolve, counter: this.waitCountDownFrom });
                                });
                            break;
                        default:
                            throw new Error(`unknown cmd ${task.cmd}`);
                    }
                }, () => { this.taskQueue.sendCmd("self-destruct", []); });
                this.taskQueue.configTransfer(true, false);
                this.port.onmessage = (ev) => this.taskQueue.msgHandler(ev);
            }
            handleNewBlocks(ctx, newBlocks) {
                const info = ctx.frame.Hca;
                const hasLoop = info.hasHeader["loop"] ? true : false;
                const pullBlockCount = ctx.pullBlockCount;
                const encoded = ctx.encoded;
                if (newBlocks.length % info.blockSize != 0) {
                    throw new Error(`newBlocks.length=${newBlocks.length} should be multiple of blockSize`);
                }
                const newBlockCount = newBlocks.length / info.blockSize;
                const expected = info.blockSize * pullBlockCount;
                if (hasLoop) {
                    let encodedOffset = info.blockSize * ctx.totalPulledBlockCount;
                    if (encodedOffset + newBlocks.length > encoded.length) {
                        throw new Error(`has loop header, buffer will overflow`);
                    }
                    encoded.set(newBlocks, encodedOffset);
                }
                else {
                    if (newBlocks.length != expected) {
                        throw new Error(`no loop header, newBlocks.length (${newBlocks.length}) != expected (${expected})`);
                    }
                    switch (ctx.totalPulledBlockCount % (pullBlockCount * 2)) {
                        case 0:
                            encoded.set(newBlocks);
                            break;
                        case pullBlockCount:
                            encoded.set(newBlocks, expected);
                            break;
                        default:
                            throw new Error();
                    }
                }
                ctx.totalPulledBlockCount += newBlockCount;
                ctx.isPulling = false;
            }
            pullNewBlocks(ctx) {
                // if ctx passed in had been actually deleted, it won't affect the current using ctx
                if (ctx.isPulling)
                    return; // already pulling. will be called again if still not enough
                ctx.isPulling = true;
                // request to pull & continue decoding
                this.taskQueue.execCmd("pull", [], {
                    result: (newBlocks) => this.handleNewBlocks(ctx, newBlocks),
                    error: () => { ctx.isPulling = false; },
                })
                    .catch((e) => {
                    console.warn(`pullNewBlocks failed.`, e);
                });
            }
            writeToDecodedBuffer(frame, decoded) {
                const halfSize = HCAFrame.SamplesPerFrame;
                for (let c = 0; c < frame.Channels.length; c++) {
                    const firstHalf = decoded[c].subarray(0, halfSize);
                    const lastHalf = decoded[c].subarray(halfSize, halfSize * 2);
                    firstHalf.set(lastHalf);
                    for (let sf = 0, offset = 0; sf < HCAFrame.SubframesPerFrame; sf++) {
                        lastHalf.set(frame.Channels[c].PcmFloat[sf], offset);
                        offset += HCAFrame.SamplesPerSubFrame;
                    }
                    for (let i = 0; i < lastHalf.length; i++) {
                        if (lastHalf[i] > 1)
                            lastHalf[i] = 1;
                        else if (lastHalf[i] < -1)
                            lastHalf[i] = -1;
                    }
                }
            }
            mapToUnLooped(info, sampleOffset) {
                const hasLoop = info.hasHeader["loop"] ? true : false;
                if (sampleOffset <= info.endAtSample) {
                    return sampleOffset;
                }
                else {
                    if (hasLoop) {
                        let offset = (sampleOffset - info.loopStartAtSample) % info.loopSampleCount;
                        return info.loopStartAtSample + offset;
                    }
                    else {
                        return info.endAtSample;
                    }
                }
            }
            process(inputs, outputs, parameters) {
                if (this.ctx == null || !this.ctx.isPlaying) {
                    // workaround the "residue" burst noise issue in Chrome
                    const unsettled = this.unsettled.shift();
                    if (unsettled != null) {
                        if (--unsettled.counter > 0)
                            this.unsettled.unshift(unsettled);
                        else
                            try {
                                unsettled.resolve();
                            }
                            catch (e) {
                                console.error(`error when settling promise of "reset" or "setPlaying" cmd`);
                            }
                    }
                    return true; // wait for new source or resume
                }
                if (this.ctx.failedBlocks.length > 0) {
                    if (this.ctx.failedBlocks.length >= 64 || --this.ctx.printErrorCountDown <= 0) {
                        console.error(`error decoding following blocks`, this.ctx.failedBlocks, this.ctx.lastError);
                        this.ctx.failedBlocks = [];
                        this.ctx.lastError = undefined;
                        this.ctx.printErrorCountDown = this.ctx.printErrorCountDownFrom;
                    }
                }
                const output = outputs[0];
                const renderQuantumSize = output[0].length;
                const samplesPerBlock = HCAFrame.SamplesPerFrame;
                // no more than one block will be decoded each time this function being called,
                // therefore one block must cover the whole renderQuantumSize
                if (samplesPerBlock < renderQuantumSize)
                    throw new Error("render quantum requires more sample than a full block");
                const info = this.ctx.frame.Hca;
                const hasLoop = info.hasHeader["loop"] ? true : false;
                const encoded = this.ctx.encoded;
                const decoded = this.ctx.decoded;
                // skip droppedHeader
                if (this.ctx.sampleOffset < info.format.droppedHeader) {
                    this.ctx.sampleOffset = info.format.droppedHeader;
                }
                if (this.ctx.sampleOffset >= info.endAtSample) {
                    if (hasLoop) {
                        // rewind back if beyond loop end
                        this.ctx.sampleOffset = this.mapToUnLooped(info, this.ctx.sampleOffset);
                    }
                    else {
                        // nothing more to play
                        this.taskQueue.sendCmd("end", []); // not waiting for result
                        delete this.ctx; // avoid sending "end" cmd for more than one time
                        return true;
                    }
                }
                // decode block & pull new block (if needed)
                const mappedStartOffset = this.mapToUnLooped(info, this.ctx.sampleOffset);
                const mappedEndOffset = this.mapToUnLooped(info, this.ctx.sampleOffset + renderQuantumSize);
                const inBlockStartOffset = mappedStartOffset % samplesPerBlock;
                const inBlockEndOffset = mappedEndOffset % samplesPerBlock;
                const startBlockIndex = (mappedStartOffset - inBlockStartOffset) / samplesPerBlock;
                const endBlockIndex = (mappedEndOffset - inBlockEndOffset) / samplesPerBlock;
                if (endBlockIndex != this.ctx.lastDecodedBlockIndex) {
                    if (endBlockIndex < this.ctx.totalPulledBlockCount) {
                        // block is available for decoding
                        this.ctx.isStalling = false;
                        let start = info.blockSize * (hasLoop
                            ? endBlockIndex
                            : endBlockIndex % (this.ctx.pullBlockCount * 2));
                        let end = start + info.blockSize;
                        if (end > encoded.length)
                            throw new Error("block end offset exceeds buffer size");
                        try {
                            HCA.decodeBlock(this.ctx.frame, encoded.subarray(start, end));
                        }
                        catch (e) {
                            this.ctx.failedBlocks.push(endBlockIndex);
                            this.ctx.lastError = e;
                            this.ctx.frame.Channels.forEach((c) => { c.PcmFloat.forEach((sf) => sf.fill(0)); });
                        }
                        this.writeToDecodedBuffer(this.ctx.frame, this.ctx.decoded);
                        this.ctx.lastDecodedBlockIndex = endBlockIndex;
                        if (this.ctx.totalPulledBlockCount < (hasLoop ? info.loop.end : info.format.blockCount)) {
                            // pull blocks in advance
                            let availableBlockCount = hasLoop && this.ctx.totalPulledBlockCount >= info.loop.end + 1
                                ? "all_pulled"
                                : this.ctx.totalPulledBlockCount - (this.ctx.lastDecodedBlockIndex + 1);
                            if (typeof availableBlockCount === 'number' && availableBlockCount < this.ctx.pullBlockCount) {
                                this.pullNewBlocks(this.ctx);
                            }
                        }
                    }
                    else {
                        // block is unavailable
                        if (!this.ctx.isStalling && this.ctx.onceStalled) {
                            // print error about stalling
                            console.warn(`[HCAFramePlayer] waiting until block ${endBlockIndex} become available...`);
                        }
                        this.ctx.isStalling = true;
                        this.pullNewBlocks(this.ctx);
                        return true;
                    }
                }
                // copy decoded data
                if (output.length != info.format.channelCount)
                    throw new Error("channel count mismatch");
                const inBufferStartOffset = (endBlockIndex != startBlockIndex ? 0 : samplesPerBlock) + inBlockStartOffset;
                const inBufferEndOffset = samplesPerBlock + inBlockEndOffset;
                const inBufferSrcSize = inBufferEndOffset - inBufferStartOffset;
                if (inBufferSrcSize <= 0)
                    throw new Error("size in decoded buffer should be positive");
                const copySize = Math.min(inBufferSrcSize, renderQuantumSize);
                for (let channel = 0; channel < output.length; channel++) {
                    let src = decoded[channel].subarray(inBufferStartOffset, inBufferStartOffset + copySize);
                    output[channel].set(src);
                }
                this.ctx.sampleOffset += copySize;
                return true;
            }
        }
        registerProcessor("hca-frame-player", HCAFramePlayer);
    }
    else {
        // Web Worker
        const taskQueue = new HCATaskQueue("Background-HCAWorker", (msg, trans) => postMessage(msg, trans), (task) => {
            switch (task.cmd) {
                case "nop":
                    return;
                case "fixHeaderChecksum":
                    return HCAInfo.fixHeaderChecksum.apply(HCAInfo, task.args);
                case "fixChecksum":
                    return HCA.fixChecksum.apply(HCA, task.args);
                case "findKey":
                    return HCA.findKey.apply(HCA, task.args);
                case "decrypt":
                    return HCA.decrypt.apply(HCA, task.args);
                case "encrypt":
                    return HCA.encrypt.apply(HCA, task.args);
                case "addCipherHeader":
                    return HCAInfo.addCipherHeader.apply(HCAInfo, task.args);
                case "decode":
                    return HCA.decode.apply(HCA, task.args);
                case "encode":
                    return HCA.encode.apply(HCA, task.args);
                default:
                    throw new Error(`unknown cmd ${task.cmd}`);
            }
        }, () => {
            taskQueue.sendCmd("self-destruct", []);
        });
        onmessage = (ev) => taskQueue.msgHandler(ev);
    }
}

// create & control audio worklet
class HCAAudioWorkletHCAPlayer {
    constructor(selfUrl, audioCtx, unlocked, hcaPlayerNode, gainNode, feedBlockCount, info, source, srcBuf, cipher) {
        this._initialized = true; // initially there must be something to play
        this.isPlaying = false;
        this.playInBackground = false; // FIXME
        this.requestedToPlay = false;
        this.verifyCsum = false;
        this.totalFedBlockCount = 0;
        this.visibilityChangeListener = () => {
            switch (document.visibilityState) {
                case 'visible':
                    if (this.requestedToPlay) {
                        this._play();
                    }
                    break;
                case 'hidden':
                default:
                    if (!this.playInBackground) {
                        this._pause();
                    }
            }
        };
        this.stopCmdItem = {
            // exec "reset" cmd first, in order to avoid "residue" burst noise to be played in the future (observed in Chrome)
            cmd: "reset", args: [], hook: {
                task: async (task) => {
                    if (!this.isAlive)
                        throw new Error("dead");
                    if (!this.isPlaying)
                        await this._resume();
                    return task;
                },
                result: async () => {
                    await this._suspend(); // can now suspend
                    this._initialized = false; // now we have nothing to play until next setSource
                    if (this.source != null && !(this.source instanceof Uint8Array)) {
                        await this.source.cancel();
                        delete this.source;
                    }
                },
            }
        };
        this.selfUrl = selfUrl;
        this.audioCtx = audioCtx;
        this._unlocked = unlocked;
        this.taskQueue = new HCATaskQueue("Main-HCAAudioWorkletHCAPlayer", (msg, trans) => hcaPlayerNode.port.postMessage(msg, trans), (task) => this.taskHandler(task), async () => await this._terminate());
        hcaPlayerNode.port.onmessage = (ev) => this.taskQueue.msgHandler(ev);
        hcaPlayerNode.port.onmessageerror = (ev) => this.taskQueue.errHandler(ev);
        hcaPlayerNode.onprocessorerror = (ev) => this.taskQueue.errHandler(ev);
        this.hcaPlayerNode = hcaPlayerNode;
        this.gainNode = gainNode;
        this.feedBlockCount = feedBlockCount;
        this.info = info;
        this.source = source;
        this.cipher = cipher;
        this.srcBuf = srcBuf;
        this.sampleRate = info.format.samplingRate;
        this.channelCount = info.format.channelCount;
        this.hasLoop = info.hasHeader["loop"] ? true : false;
        document.addEventListener('visibilitychange', this.visibilityChangeListener);
    }
    get isAlive() {
        return this.taskQueue.isAlive;
    }
    get initialized() {
        return this._initialized;
    }
    get unlocked() {
        return this._unlocked;
    }
    get blockChecksumVerification() {
        return this.verifyCsum;
    }
    set blockChecksumVerification(val) {
        if (typeof val !== "boolean")
            throw new Error();
        this.verifyCsum = val;
    }
    get feedSize() {
        return this.info.blockSize * this.feedBlockCount;
    }
    get remainingBlockCount() {
        let total = this.hasLoop ? this.info.loop.end + 1 : this.info.format.blockCount;
        let remaining = total - this.totalFedBlockCount;
        if (remaining <= 0)
            throw new Error();
        return remaining;
    }
    get downloadBufferSize() {
        const bytesPerSec = this.info.kbps * 1000 / 8;
        return bytesPerSec * 4;
    }
    get volume() {
        return this.gainNode.gain.value;
    }
    set volume(val) {
        if (isNaN(val))
            return;
        if (val > 1.0)
            val = 1.0;
        if (val < 0)
            val = 0;
        this.gainNode.gain.value = val;
    }
    async taskHandler(task) {
        switch (task.cmd) {
            case "nop":
                return;
            case "self-destruct": // doesn't seem to have a chance to be called
                console.error(`HCAFramePlayer requested to self-destruct`);
                await this.taskQueue.shutdown(true);
                return;
            case "end":
                await this.stop();
                return; // actually not sending back reply
            case "pull":
                if (this.source == null)
                    throw new Error(`nothing to feed`); // should never happen
                let blockCount = Math.min(this.feedBlockCount, this.remainingBlockCount);
                let size = this.info.blockSize * blockCount;
                let newBlocks;
                if (this.source instanceof Uint8Array) {
                    // whole HCA mode
                    let start = this.info.dataOffset + this.info.blockSize * this.totalFedBlockCount;
                    let end = start + size;
                    newBlocks = this.source.subarray(start, end);
                    //} else if (this.source instanceof ReadableStreamDefaultReader) {
                    // commented out because Firefox throws "ReferenceError: ReadableStreamDefaultReader is not defined"
                }
                else {
                    // URL mode
                    if (this.srcBuf == null)
                        throw new Error("srcBuf is undefined");
                    let maxDownlaodSize = this.info.blockSize * this.remainingBlockCount;
                    let downloadSize = Math.max(this.downloadBufferSize, size);
                    downloadSize = Math.min(downloadSize, maxDownlaodSize);
                    let remaining = downloadSize - this.srcBuf.length;
                    if (remaining > 0) {
                        // FIXME connection loss is not handled/recovered
                        this.srcBuf = await HCAAudioWorkletHCAPlayer.readAndAppend(this.source, this.srcBuf, remaining);
                    }
                    if (this.srcBuf.length < size)
                        throw new Error("srcBuf still smaller than expected");
                    newBlocks = this.srcBuf.subarray(0, size);
                    this.srcBuf = this.srcBuf.slice(size);
                }
                for (let i = 0, start = 0; i < blockCount; i++, start += this.info.blockSize) {
                    let block = newBlocks.subarray(start, start + this.info.blockSize);
                    // verify checksum (if enabled)
                    // will throw & stop playing on mismatch!
                    if (this.verifyCsum)
                        Crc16.verify(block, this.info.blockSize - 2);
                    // decrypt (if encrypted)
                    if (this.cipher != null)
                        this.cipher.mask(block, 0, this.info.blockSize - 2);
                    // fix checksum
                    Crc16.fix(block, this.info.blockSize - 2);
                }
                if (this.hasLoop) {
                    // just copy, no need to enlarge
                    newBlocks = newBlocks.slice();
                }
                else {
                    // enlarge & copy
                    let data = newBlocks;
                    newBlocks = new Uint8Array(this.feedSize);
                    newBlocks.set(data);
                }
                this.totalFedBlockCount += blockCount;
                return newBlocks;
            default:
                throw new Error(`unknown cmd "${task.cmd}"`);
        }
    }
    static async create(selfUrl, source, key1, key2, subkey) {
        if (!(selfUrl instanceof URL))
            throw new Error();
        if (!(source instanceof Uint8Array || source instanceof URL))
            throw new Error();
        let actualSource;
        let info;
        let srcBuf = undefined;
        if (source instanceof Uint8Array) {
            actualSource = source.slice(0);
            info = new HCAInfo(actualSource);
        }
        else if (source instanceof URL) {
            const fetched = await this.getHCAInfoFromURL(source);
            actualSource = fetched.reader;
            info = fetched.info;
            srcBuf = fetched.buffer;
        }
        else
            throw Error();
        let feedByteMax = Math.floor(this.feedByteMax);
        if (feedByteMax < info.blockSize)
            throw new Error();
        feedByteMax -= feedByteMax % info.blockSize;
        const feedBlockCount = feedByteMax / info.blockSize;
        // initialize cipher
        const cipher = this.getCipher(info, key1, key2, subkey);
        // create audio context
        const audioCtx = new AudioContext({
            //latencyHint: "playback", // FIXME "playback" seems to glitch if switched to background in Android
            sampleRate: info.format.samplingRate,
        });
        // create audio worklet node (not yet connected)
        await audioCtx.audioWorklet.addModule(selfUrl);
        const options = {
            numberOfInputs: 0,
            numberOfOutputs: 1,
            outputChannelCount: [info.format.channelCount],
            processorOptions: {
                rawHeader: info.getRawHeader(),
                pullBlockCount: feedBlockCount,
            },
        };
        const hcaPlayerNode = new AudioWorkletNode(audioCtx, "hca-frame-player", options);
        // create gain node
        const gainNode = audioCtx.createGain();
        const unlocked = await suspendAudioCtxIfUnlocked(audioCtx);
        // create controller object
        return new HCAAudioWorkletHCAPlayer(selfUrl, audioCtx, unlocked, hcaPlayerNode, gainNode, feedBlockCount, info, actualSource, srcBuf, cipher);
    }
    async _terminate() {
        // I didn't find terminate() for AudioWorklet so I made one
        try {
            this.hcaPlayerNode.port.close();
        }
        catch (e) {
            console.error(`error trying to close message port`, e);
        }
        try {
            this.hcaPlayerNode.disconnect();
        }
        catch (e) {
            console.error(`error trying to disconnect hcaPlayerNode`, e);
        }
        try {
            this.gainNode.disconnect();
        }
        catch (e) {
            console.error(`error trying to disconnect gainNode`, e);
        }
        try {
            await this.audioCtx.close();
        }
        catch (e) {
            console.error(`error trying to close audio context`, e);
        }
    }
    static getCipher(info, key1, key2, subkey) {
        // handle subkey
        let mixed = HCACipher.mixWithSubkey(key1, key2, subkey);
        key1 = mixed.key1;
        key2 = mixed.key2;
        switch (info.cipher) {
            case 0:
                // not encrypted
                return undefined;
            case 1:
                // encrypted with "no key"
                return new HCACipher("none"); // ignore given keys
            case 0x38:
                // encrypted with keys - will yield incorrect waveform if incorrect keys are given!
                return new HCACipher(key1, key2);
            default:
                throw new Error("unknown ciph.type");
        }
    }
    static async readAndAppend(reader, data, minCount) {
        if (minCount < 0)
            throw new Error();
        const desired = data.length + minCount;
        let newData = new Uint8Array(desired);
        newData.set(data);
        for (let offset = data.length; offset < desired;) {
            const res = await reader.read();
            if (res.done)
                throw new Error(`unexpected stream end. `
                    + `it is possible that the download has been canceled (by later setSource), or the file data is incomplete`);
            const bytes = res.value;
            if (bytes.length > 0) {
                const required = offset + bytes.length;
                if (required > newData.length) {
                    const existing = newData;
                    newData = new Uint8Array(required);
                    newData.set(existing);
                }
                newData.set(bytes, offset);
                offset += bytes.length;
            }
        }
        return newData;
    }
    static async getHCAInfoFromURL(url) {
        // FIXME send HTTP Range request to avoid blocking later requests (especially in Firefox)
        const resp = await fetch(url.href);
        if (resp.status != 200)
            throw new Error(`status ${resp.status}`);
        if (resp.body == null)
            throw new Error("response has no body");
        const reader = resp.body.getReader();
        let buffer = await this.readAndAppend(reader, new Uint8Array(0), 8);
        const dataOffset = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength).getUint16(6);
        const remaining = dataOffset - buffer.length;
        if (remaining > 0) {
            buffer = await this.readAndAppend(reader, buffer, remaining);
        }
        return {
            reader: reader,
            info: new HCAInfo(buffer),
            buffer: buffer.slice(dataOffset),
        };
    }
    async setSource(source, key1, key2, subkey) {
        let newInfo;
        let newSource;
        let newBuffer = undefined;
        const initializeCmdItem = {
            cmd: "initialize", args: [null], hook: {
                task: async (task) => {
                    if (!this.isAlive)
                        throw new Error("dead");
                    const oldSource = this.source;
                    //if (oldSource instanceof ReadableStreamDefaultReader) {
                    if (oldSource != null && !(oldSource instanceof Uint8Array)) {
                        try {
                            await oldSource.cancel(); // stop downloading from previous URL
                            // FIXME Firefox doesn't seem to abort previous download
                        }
                        catch (e) {
                            console.error(`error when cancelling previous download.`, e);
                        }
                    }
                    if (source instanceof Uint8Array) {
                        newSource = source.slice(0);
                        newInfo = new HCAInfo(newSource);
                    }
                    else if (source instanceof URL) {
                        const result = await HCAAudioWorkletHCAPlayer.getHCAInfoFromURL(source);
                        newSource = result.reader;
                        newInfo = result.info;
                        newBuffer = result.buffer;
                    }
                    else
                        throw new Error("invalid source");
                    // sample rate and channel count is immutable,
                    // therefore, the only way to change them is to recreate a new instance.
                    // however, there is a memleak bug in Chromium, that:
                    // (no-longer-used) audio worklet node(s) won't be recycled:
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1298955
                    if (newInfo.format.samplingRate != this.sampleRate)
                        throw new Error("sample rate mismatch");
                    if (newInfo.format.channelCount != this.channelCount)
                        throw new Error("channel count mismatch");
                    await this._resume(); // resume it, so that cmd can then be executed
                    const newProcOpts = {
                        rawHeader: newInfo.getRawHeader(),
                        pullBlockCount: this.feedBlockCount,
                    };
                    return new HCATask(task.origin, task.taskID, task.cmd, [newProcOpts], false);
                }, result: async () => {
                    await this._suspend(); // initialized, but it's paused, until being requested to start/play (resume)
                    this.totalFedBlockCount = 0;
                    this.cipher = HCAAudioWorkletHCAPlayer.getCipher(newInfo, key1, key2, subkey);
                    this.info = newInfo;
                    this.source = newSource;
                    this.srcBuf = newBuffer;
                    this.hasLoop = newInfo.hasHeader["loop"] ? true : false;
                    this._initialized = true; // again we now have something to play
                }
            }
        };
        await this.taskQueue.execMultiCmd([this.stopCmdItem, initializeCmdItem]); // ensure atomicity
    }
    // not supposed to be used directly
    async _resume() {
        if (!this.isAlive)
            throw new Error("dead");
        if (this.isPlaying)
            return;
        await this.audioCtx.resume();
        this.hcaPlayerNode.connect(this.gainNode);
        this.gainNode.connect(this.audioCtx.destination);
        this.isPlaying = true;
        // mark as unlocked
        if (!this._unlocked) {
            this._unlocked = true;
            console.warn(`audio context for sampleRate=${this.audioCtx.sampleRate} is now resumed/unlocked`);
        }
    }
    async _suspend() {
        if (!this.isAlive)
            throw new Error("dead");
        if (!this.isPlaying)
            return;
        this.hcaPlayerNode.disconnect();
        this.gainNode.disconnect();
        await this.audioCtx.suspend();
        this.isPlaying = false;
    }
    async _pause() {
        await this.setPlaying(false);
    }
    async _play() {
        // in apple webkit, audio context is suspended/locked initially,
        // (other browsers like Firefox may have similar but less strict restrictions)
        // to resume/unlock it, first resume() call must be triggered by from UI event,
        // which must not be after await
        await this.setPlaying(true);
    }
    // wraped to ensure atomicity
    async setPlaying(toPlay) {
        // simlilar to stopCmdItem above, send "pause" cmd to avoid "residue" burst noise
        await this.taskQueue.execCmd(toPlay ? "resume" : "pause", [], {
            task: async (task) => {
                if (!this.isAlive)
                    throw new Error("dead");
                if (this.isPlaying) {
                    if (toPlay)
                        task.isDummy = true; // already resumed, not sending cmd
                    // else should still keep playing until "pause" cmd returns
                }
                else {
                    if (toPlay) {
                        if (!this._initialized)
                            throw new Error(`not initialized but still attempt to resume`);
                        await this._resume();
                    }
                    else
                        task.isDummy = true; // already paused, not sending cmd
                }
                return task;
            },
            result: async () => {
                if (toPlay)
                    await this._resume();
                else
                    await this._suspend();
            }
        });
    }
    async pause() {
        this.requestedToPlay = false;
        await this._pause();
    }
    async play() {
        this.requestedToPlay = true;
        await this._play();
    }
    async stop() {
        // can unlock the locked audio context as well because it's resumed firstly before finally suspended
        this.requestedToPlay = false;
        const item = this.stopCmdItem;
        await this.taskQueue.execCmd(item.cmd, item.args, item.hook);
    }
    async shutdown(forcibly = false) {
        if (!this.isAlive) {
            console.error(`already shutdown`);
            return;
        }
        try {
            document.removeEventListener('visibilitychange', this.visibilityChangeListener);
        }
        catch (e) {
            console.error(e);
        }
        await this.taskQueue.shutdown(forcibly);
    }
}
HCAAudioWorkletHCAPlayer.feedByteMax = 32768;
// create & control worker
class HCAWorker {
    constructor(selfUrl, selfBlob) {
        this.lastTick = 0;
        this.hcaWorker = new Worker(selfUrl, { type: "module" }); // setting type to "module" is currently bogus in Firefox
        try {
            this.hcaWorker = new Worker(selfUrl, { type: "module" }); // setting type to "module" is currently bogus in Firefox
        }
        catch (e) {
            // workaround for legacy iOS Safari
            if (selfBlob == null || !(selfBlob instanceof Blob))
                throw e;
            const objUrl = URL.createObjectURL(selfBlob);
            this.hcaWorker = new Worker(objUrl, { type: "module" });
            URL.revokeObjectURL(objUrl);
        }
        this.selfUrl = selfUrl;
        this.taskQueue = new HCATaskQueue("Main-HCAWorker", (msg, trans) => this.hcaWorker.postMessage(msg, trans), async (task) => {
            switch (task.cmd) {
                case "self-destruct": // doesn't seem to have a chance to be called
                    console.error(`hcaWorker requested to self-destruct`);
                    await this.taskQueue.shutdown(true);
                    break;
            }
        }, () => this.hcaWorker.terminate());
        this.hcaWorker.onmessage = (msg) => this.taskQueue.msgHandler(msg);
        this.hcaWorker.onerror = (msg) => this.taskQueue.errHandler(msg);
        this.hcaWorker.onmessageerror = (msg) => this.taskQueue.errHandler(msg);
    }
    get isAlive() {
        return this.taskQueue.isAlive;
    }
    async shutdown(forcibly = false) {
        if (this.taskQueue.isAlive)
            await this.taskQueue.shutdown(forcibly);
        if (this.awHcaPlayer != null && this.awHcaPlayer.isAlive)
            await this.awHcaPlayer.shutdown(forcibly);
    }
    async tick() {
        await this.taskQueue.execCmd("nop", []);
        this.lastTick = new Date().getTime();
    }
    async tock(text = "") {
        await this.taskQueue.execCmd("nop", []);
        const duration = new Date().getTime() - this.lastTick;
        console.log(`${text} took ${duration} ms`);
        return duration;
    }
    static async create(selfUrl) {
        if (typeof selfUrl === "string") {
            selfUrl = new URL(selfUrl, document.baseURI);
        }
        else if (!(selfUrl instanceof URL)) {
            throw new Error("selfUrl must be either string or URL");
        }
        // fetch & save hca.js as blob in advance, to avoid creating worker being blocked later, like:
        // (I observed this problem in Firefox)
        // creating HCAAudioWorkletHCAPlayer requires information from HCA, which is sample rate and channel count;
        // however, fetching HCA (originally supposed to be progressive/streamed) blocks later request to fetch hca.js,
        // so that HCAAudioWorkletHCAPlayer can only be created after finishing downloading the whole HCA,
        // which obviously defeats the purpose of streaming HCA
        const response = await fetch(selfUrl.href);
        // Firefox currently does not support ECMAScript modules in Worker,
        // therefore we must strip all export declarations
        const origText = await response.text();
        const convertedText = ("\n" + origText).replace(/\bexport\s+{.*?};?/, "").slice(1);
        const blob = new Blob([convertedText], { type: "text/javascript" });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        const dataURI = await new Promise((res) => {
            reader.onloadend = function () {
                res(reader.result);
            };
        });
        selfUrl = new URL(dataURI, document.baseURI);
        return new HCAWorker(selfUrl);
    }
    // commands
    async getTransferConfig() {
        return await this.taskQueue.getTransferConfig();
    }
    async configTransfer(transferArgs, replyArgs) {
        return await this.taskQueue.configTransfer(transferArgs, replyArgs);
    }
    async fixHeaderChecksum(hca) {
        return await this.taskQueue.execCmd("fixHeaderChecksum", [hca]);
    }
    async fixChecksum(hca) {
        return await this.taskQueue.execCmd("fixChecksum", [hca]);
    }
    async findKey(hca, givenKeyList, subkey, threshold = 0.5, depth = 1024) {
        return await this.taskQueue.execCmd("findKey", [hca, givenKeyList, subkey, threshold, depth]);
    }
    async decrypt(hca, key1, key2, subkey) {
        return await this.taskQueue.execCmd("decrypt", [hca, key1, key2, subkey]);
    }
    async encrypt(hca, key1, key2, subkey) {
        return await this.taskQueue.execCmd("encrypt", [hca, key1, key2, subkey]);
    }
    async addHeader(hca, sig, newData) {
        return await this.taskQueue.execCmd("addHeader", [hca, sig, newData]);
    }
    async addCipherHeader(hca, cipherType) {
        return await this.taskQueue.execCmd("addCipherHeader", [hca, cipherType]);
    }
    async decode(hca, mode = 32, loop = 0, volume = 1.0) {
        return await this.taskQueue.execCmd("decode", [hca, mode, loop, volume]);
    }
    async encode(hca, key1, key2, subkey) {
        return await this.taskQueue.execCmd("encode", [hca, key1, key2, subkey]);
    }
    async loadHCAForPlaying(hca, key1, key2, subkey) {
        if (typeof hca === "string") {
            if (hca === "")
                throw new Error("empty URL");
            hca = new URL(hca, document.baseURI);
        }
        else if (!(hca instanceof URL) && !(hca instanceof Uint8Array))
            throw new Error("hca must be either URL or Uint8Array");
        if (this.awHcaPlayer == null) {
            this.awHcaPlayer = await HCAAudioWorkletHCAPlayer.create(this.selfUrl, hca, key1, key2, subkey);
        }
        else {
            try {
                await this.awHcaPlayer.setSource(hca, key1, key2, subkey);
            }
            catch (e) {
                console.error(`awHcaPlayer.setSource failed, attempt recreate player instance`, e);
                // FIXME memleak
                this.awHcaPlayer = await HCAAudioWorkletHCAPlayer.create(this.selfUrl, hca, key1, key2, subkey);
            }
        }
    }
    async pausePlaying() {
        if (this.awHcaPlayer == null)
            throw new Error();
        await this.awHcaPlayer.pause();
    }
    async resumePlaying() {
        if (this.awHcaPlayer == null)
            throw new Error();
        await this.awHcaPlayer.play();
    }
    async stopPlaying() {
        if (this.awHcaPlayer == null)
            throw new Error();
        await this.awHcaPlayer.stop();
    }
}

// https://github.com/vgmstream/vgmstream/blob/4eecdada9a03a73af0c7c17f5cd6e08518fd7e3f/src/meta/awb.c#L13
class AWBArchive {
    constructor(awb) {
        if (!AWBArchive.isAWB(awb))
            throw new Error(`not AWB archive`);
        const dv = new DataView(awb.buffer, awb.byteOffset, awb.byteLength);
        this.version = dv.getUint8(0x04);
        this.offsetSize = dv.getUint8(0x05);
        this.waveIdAlignment = dv.getUint16(0x06, true);
        this.totalSubsongs = dv.getInt32(0x08, true);
        this.offsetAlignment = dv.getUint16(0x0c, true);
        this.subkey = dv.getUint16(0x0e, true);
        let ftell = 0x10;
        this.hcaFiles = Array.from({ length: this.totalSubsongs }, () => {
            const offset = ftell;
            ftell += this.waveIdAlignment;
            return { waveID: dv.getUint16(offset, true) };
        }).map((o) => {
            const offset = ftell;
            ftell += this.offsetSize * 2;
            switch (this.offsetSize) {
                case 0x04:
                    return {
                        waveID: o.waveID,
                        offset: dv.getUint32(offset, true),
                        next: dv.getUint32(offset + this.offsetSize, true),
                    };
                case 0x02:
                    return {
                        waveID: o.waveID,
                        offset: dv.getUint16(offset, true),
                        next: dv.getUint16(offset + this.offsetSize, true),
                    };
                default:
                    throw new Error(`AWB: unknown offset size`);
            }
        }).map((o) => {
            // offset are absolute but sometimes misaligned (specially first that just points to offset table end)
            o.offset += (o.offset % this.offsetAlignment) ?
                this.offsetAlignment - (o.offset % this.offsetAlignment) : 0;
            o.next += (o.next % this.offsetAlignment) && o.next < awb.byteLength ?
                this.offsetAlignment - (o.next % this.offsetAlignment) : 0;
            return { waveID: o.waveID, file: awb.subarray(o.offset, o.next) };
        });
    }
    static isAWB(file) {
        const dv = new DataView(file.buffer, file.byteOffset, file.byteLength);
        const magic = 0x41465332; // "AFS2" in Uint32BE
        return dv.getUint32(0, false) == magic;
    }
}

// WebAudio-based loop player
class HCAWebAudioLoopPlayer {
    constructor(info, bufSrc, audioCtx, unlocked, gainNode, volume) {
        this.bufSrcStarted = false;
        this.closed = false;
        this.playInBackground = false; // FIXME
        this.requestedToPlay = false;
        this.visibilityChangeListener = () => {
            switch (document.visibilityState) {
                case 'visible':
                    if (this.requestedToPlay) {
                        this._play();
                    }
                    break;
                case 'hidden':
                default:
                    if (!this.playInBackground) {
                        this._pause();
                    }
            }
        };
        this.info = info;
        this.bufSrc = bufSrc;
        this.audioCtx = audioCtx;
        this._unlocked = unlocked;
        this.gainNode = gainNode;
        this.volume = volume;
        document.addEventListener('visibilitychange', this.visibilityChangeListener);
    }
    get unlocked() {
        return this._unlocked;
    }
    get volume() {
        return this.gainNode.gain.value;
    }
    set volume(val) {
        if (isNaN(val))
            return;
        if (val > 1.0)
            val = 1.0;
        if (val < 0)
            val = 0;
        this.gainNode.gain.value = val;
    }
    static async create(decrypted, worker, volume = 100) {
        const info = new HCAInfo(decrypted);
        if (info.cipher != 0)
            throw new Error("only decrypted hca is accepted");
        const audioCtx = new AudioContext({
            sampleRate: info.format.samplingRate,
        });
        const wav = await worker.decode(decrypted, 16); // first
        const unlocked = await suspendAudioCtxIfUnlocked(audioCtx);
        const buffer = await audioCtx.decodeAudioData(wav.buffer);
        const bufSrc = audioCtx.createBufferSource();
        bufSrc.buffer = buffer;
        if (info.loop != null && info.loop.end > info.loop.start) {
            bufSrc.loopStart = info.loopStartTime;
            bufSrc.loopEnd = info.loopEndTime;
            bufSrc.loop = true;
        }
        const gainNode = audioCtx.createGain();
        bufSrc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        return new HCAWebAudioLoopPlayer(info, bufSrc, audioCtx, unlocked, gainNode, volume);
    }
    // not supposed to be used directly
    _play() {
        if (this.audioCtx.state !== "running")
            this.audioCtx.resume();
        if (!this.bufSrcStarted) {
            this.bufSrc.start();
            this.bufSrcStarted = true;
        }
        // mark as unlocked
        if (!this._unlocked) {
            this._unlocked = true;
            console.warn(`audio context for sampleRate=${this.audioCtx.sampleRate} is now resumed/unlocked`);
        }
    }
    _pause() {
        if (this.audioCtx.state !== "running")
            return;
        this.audioCtx.suspend();
    }
    play() {
        this.requestedToPlay = true;
        this._play();
    }
    pause() {
        this.requestedToPlay = false;
        this._pause();
    }
    async stop() {
        if (!this._unlocked)
            throw new Error("audio context is not unlocked, cannot stop and destroy");
        if (this.closed)
            return;
        try {
            document.removeEventListener('visibilitychange', this.visibilityChangeListener);
        }
        catch (e) {
            console.error(e);
        }
        this.requestedToPlay = false;
        this.bufSrc.disconnect();
        await this.audioCtx.close();
        this.closed = true;
    }
}

export { AWBArchive, HCA, HCAInfo, HCAWebAudioLoopPlayer, HCAWorker };
