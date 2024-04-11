const HCAKnownKeys: [number, number][] = [
    // [lower 32 bits, higher 32 bits]
    // eg. 6615518E8ECED447 => [0x8ECED447, 0x6615518E]
    // source: https://github.com/vgmstream/vgmstream/blob/36f4dfeab41adf8f8ff08477dc062f8c76b003d8/src/meta/hca_keys.h
    [0x00222F1F,0xE0748978], //CRI HCA decoder default
    [0xCC554639,0x30DBE1AB], //Phantasy Star Online 2
    [0x00DBE1AB,0xCC554639], //Old Phantasy Star Online 2
    [0x00000000,0x012C9A53], //Jojo All Star Battle (PS3)
    [0x00000000,0x77EDF21C], //Ro-Kyu-Bu! Himitsu no Otoshimono (PSP)
    [0x00000000,0x49913556], //VRIDGE Inc. games
    [0x00003657,0xF27E3B22], //THE iDOLM@STER / Cinderella Girls: Starlight Stage / Shadowverse (iOS/Android)
    [0x0011DCDD,0x0DC57F48], //Grimoire ~Shiritsu Grimoire Mahou Gakuen~ (iOS/Android)
    [0x00000000,0x00000978], //Idol Connect (iOS/Android)
    [0x00688884,0xA11CCFB0], //Kamen Rider Battle Rush (iOS/Android)
    [0x00001B85,0xA6AD6125], //SD Gundam Strikers (iOS/Android)
    [0x00000000,0x012FCFDF], //Sonic Runners (iOS/Android)
    [0x00000000,0x00003039], //Fate/Grand Order (iOS/Android) base assets
    [0x7E896318,0x92EBF464], //Fate/Grand Order (iOS/Android) downloaded assets
    [0x00000000,0x02B99F1A], //Raramagi (iOS/Android)
    [0x0002B875,0xBC731A85], //THE iDOLM@STER Million Live! / THE iDOLM@STER SideM GROWING STARS (Android)
    [0x29AFE911,0xF5816A2A], //Kurokishi to Shiro no Maou (iOS/Android)
    [0x00000000,0x01395C51], //Puella Magi Madoka Magica Side Story: Magia Record / Hortensia Saga (iOS/Android)
    [0x002055C8,0x634B5F07], //The Tower of Princess (iOS/Android)
    [0x02051AF2,0x5990FB5E], //Fallen Princess (iOS/Android)
    [0x7CEC81F7,0xC3091366], //Diss World (iOS/Android)
    [0x00A06A0B,0x8D0C10FD], //Ikemen Vampire - Ijin-tachi to Koi no Yuuwaku (iOS/Android)
    [0x0000968A,0x97978A96], //Super Robot Wars X-Omega (iOS/Android)
    [0x00000000,0x000022CE], //BanG Dream! Girls Band Party! (iOS/Android)
    [0xFDAE531A,0xAB414BA1], //Tokyo 7th Sisters (iOS/Android) *unconfirmed
    [0x00000000,0x001D149A], //One Piece Dance Battle (iOS/Android)
    [0x00000000,0x012EBCCA], //Derby Stallion Masters (iOS/Android)
    [0x43E4EA62,0xB8E6C6D2], //World Chain (iOS/Android)
    [0x438BF1F8,0x83653699], //Yuuki Yuuna wa Yuusha de aru - Hanayui no Kirameki / Yuyuyui (iOS/Android)
    [0xFFFFFFFF,0xFFFFFFFF], //Tekken Mobile (iOS/Android)
    [0x00000000,0x009134FC], //Tales of the Rays (iOS/Android)
    [0x0000000B,0x7235CB29], //Skylock - Kamigami to Unmei no Itsutsuko (iOS/Android)
    [0x00189DFB,0x1024ADE9], //Tokyo Ghoul: Re Invoke (iOS/Android)
    [0x0002354E,0x95356C72], //Azur Lane (iOS/Android)
    [0x00000000,0x000004C8], //One Piece Treasure Cruise (iOS/Android)
    [0xDB5B61B8,0x343D0000], //Schoolgirl Strikers ~Twinkle Melodies~ (iOS/Android)
    [0x00000000,0x0E62BEF0], //Bad Apple Wars (PSVita)
    [0x00000000,0x0E88473C], //Koi to Senkyo to Chocolate Portable (PSP)
    [0x00000000,0x77EDA13A], //Custom Drive (PSP)
    [0x00057F78,0xB05F9BA3], //Root Letter (PSVita)
    [0x00000000,0x00D77A01], //Pro Evolution Soccer 2018 / Winning Eleven 2018 (Android)
    [0x00B6A392,0x8706E529], //Kirara Fantasia (Android/iOS)
    [0x00000000,0x367F34CB], //A3! (iOS/Android)
    [0x00000000,0x00B2A913], //Weekly Shonen Jump: Ore Collection! (iOS/Android)
    [0xB1E30F34,0x6415B475], //Monster Gear Versus (iOS/Android)
    [0x00000000,0x00003852], //Yumeiro Cast (iOS/Android)
    [0x00000000,0x000003E8], //Ikki Tousen: Straight Striker (iOS/Android)
    [0xD2E836E6,0x62F20000], //Zero kara Hajimeru Mahou no Sho (iOS/Android)
    [0x00000000,0xAB465692], //Soul Reverse Zero (iOS/Android)
    [0x82021286,0x4CAB35DE], //Jojo's Bizarre Adventure: Diamond Records (iOS/Android) [additional data]
    [0x00FF00FF,0x00FF00FF], //HUNTER x HUNTER: World Hunt (iOS/Android)
    [0x0000002E,0xEC8D972C], //Comepri/ Comedy Prince (iOS/Android)
    [0x00000000,0x00D0DC26], //Puzzle of Empires (iOS/Android)
    [0x00000489,0x5C56FFA9], //Aozora Under Girls! (iOS/Android)
    [0x00000000,0x013351F0], //Castle & Dragon / Gunbit (Android)
    [0x00000000,0x7E87D606], //Uta no Prince sama Shining Live (iOS/Android)
    [0x00000092,0x8CCB8334], //Sevens Story (iOS/Android)
    [0x0005149A,0x5FF67AE2], //MinGol: Everybody's Golf (iOS/Android)
    [0x0B886206,0xBC1BA7FB], //AKB48 Group Tsui ni Koushiki Otoge demashita. (iOS/Android)
    [0x00000012,0xF1EED2FF], //Sen no Kaizoku (iOS/Android)
    [0x00000000,0x00003490], //I Chu (iOS/Android)
    [0x0520A931,0x35808594], //Shinobi Nightmare (iOS/Android)
    [0x16FA54B0,0xC09F7661], //Bungo Stray Dogs: Mayoi Inu Kaikitan (iOS/Android)
    [0x000E4657,0xD7266AFA], //Super Sentai Legend Wars (iOS/Android)
    [0x01639DC8,0x7B30C6DB], //Metal Saga: The Ark of Wastes (iOS/Android)
    [0x00000497,0x222AAA84], //Taga Tame no Alchemist (iOS/Android)
    [0x00000475,0x61F95FCF], //Shin Tennis no Ouji-sama: Rising Beat / UNI'S ON AIR (iOS/Android)
    [0x18BC2F74,0x63867524], //Kai-ri-Sei Million Arthur (Vita)
    [0x00000000,0x0713706D], //Dx2 Shin Megami Tensei Liberation (iOS/Android)
    [0x00000000,0x02C4EECE], //Oira (Cygames) [iOS/Android]
    [0x65CD6839,0x24EE7F38], //Dragon Ball Legends (Bandai Namco) [iOS/Android]
    [0x00000000,0x0030D9E8], //Princess Connect Re:Dive (iOS/Android/PC)
    [0x00000000,0x0CFA624F], //PriPara: All Idol Perfect Stage (Takara Tomy) [Switch]
    [0x00000015,0x46B0E028], //Space Invaders Extreme (Taito Corporation, Backbone Entertainment) [PC]
    [0x00000000,0x03DCFAE3], //CR Another God Hades Advent (Universal Entertainment Corporation) [iOS/Android]
    [0x00000000,0x00001A0B], //Onsen Musume: Yunohana Kore Kushon (Android) voices
    [0x6D8EFB70,0x0870FCD4], //Libra of Precatus (Android)
    [0x55D11D33,0x49495204], //Mashiro Witch (Android)
    [0x00DC71D5,0x479E1E1A], //Iris Mysteria! (Android)
    [0x00000000,0x012EE5DC], //Kotodaman (Android)
    [0x00000052,0xC7E5C0DC], //Puchiguru Love Live! (Android)
    [0x00008B8D,0x2A3AA076], //Dolls Order (Android)
    [0x00000000,0x075BCD15], //Fantasy Life Online (Android)
    [0x006CCC56,0x9EB1668D], //Wonder Gravity (Android)
    [0x00000000,0x0389CA93], //Ryu ga Gotoku Online (Android)
    [0x000000C2,0xC7CE8E59], //Sengoku BASARA Battle Party (Android)
    [0x03030201,0x0100080D], //DAME x PRINCE (Android)
    [0x0581B687,0x44C5F5F5], //Uta Macross SmaPho De Culture (Android)
    [0x00136B0A,0x6A5D13A9], //Touhou Cannonball (Android)
    [0x5A2F6F6F,0x0192806D], //Love Live! School idol festival ALL STARS (Android)
    [0x0000001C,0x5E0D3154], //BLACKSTAR -Theater Starless- (Android)
    [0x0013F11B,0xC5510101], //Nogizaka46 Rhythm Festival (Android)
    [0x76A34A72,0xE15B928D], //IDOLiSH7 (Android)
    [0x00777563,0xE571B513], //Phantom of the Kill (Android)
    [0x36EB3E4E,0xE38E05B2], //Dankira!!! Boys, be DANCING! (Android)
    [0xA86BF72B,0x4C852CA7], //Idola: Phantasy Star Saga (Android)
    [0x00000000,0x247F1F17], //Arca Last (Android)
    [0x00000083,0x64311631], //ArkResona (Android)
    [0x00000000,0xC59E7114], //Kemono Friends 3 (Android)
    [0xC436E037,0x37D55B5F], //Inazuma Eleven SD (Android)
    [0x104F6430,0x98E3F700], //Detective Conan Runner / Case Closed Runner (Android)
    [0x13E3D8C4,0x5778A500], //I Chu EtoileStage (Android)
    [0x00000000,0x013416BA], //22/7 Ongaku no Jikan (Android)
    [0x00023890,0xC8252FC3], //Cardcaptor Sakura: Happiness Memories (Android)
    [0x283553DC,0xE3FD5FB9], //Digimon Story: Cyber Sleuth (PC)
    [0x82C3C951,0xC561F736], //Alice Re:Code (Android)
    [0xFDAE531A,0xAB414BA1], //Tokyo 7th Sisters (Android)
    [0x009A7263,0xCA658CA5], //High School Fleet: Kantai Battle de Pinch! (Mobile)
    [0x00000000,0xAC8E352D], //Disney's Twisted Wonderland (Android)
    [0xAAED297D,0xDEF1D9F6], //B-PROJECT Kaikan Everyday (Android)
    [0x04546195,0xF85DF052], //HELIOS Rising Heroes (Android)
    [0x00B51DB4,0x932A963B], //World Ends's Club (iOS)
    [0x001626EE,0x22C887C7], //Kandagawa Jet Girls (PC)
    [0x165CF4E2,0x138F7BDA], //Re:Zero - Lost in Memories (Android)
    [0x00DC78FA,0xEFA76ADC], //Toji no Miko: Kizamishi Issen no Tomoshibi (Android)
    [0x112210F4,0xB16C1CB1], //Readyyy! (Android)
    [0x0000125F,0x45B9D640], //HoneyWorks Premium Live (Android)
    [0x00168E6C,0x99510101], //Assault Lily Last Bullet (Android)
    [0x00000000,0x0005D727], //Sakura Kakumei (iOS/Android)
    [0x0000450D,0x608C479F], //Uma Musume (Android)
    [0x7500DA1B,0x7FBA5FCD], //Fantasia Re: Build (Android)
    [0x525F1D62,0x44274B52], //SaGa Frontier Remastered (multi)
    [0xAA700C29,0x2CFCAB24], //Mushoku Tensei: Game ni Nattemo Honki Dasu (Android)
    [0x000002B2,0xE7889CAD], //Dragalia Lost (iOS/Android)
    [0x7F455149,0x9DF55E68], //maimai DX Splash (AC)
    [0x2CE32BD9,0xB36A98DE], //Dragon Quest Tact (Android)
    [0x0000016C,0x54B92503], //Alchemy Stars (Android)
    [0x0575ACEC,0xA945A444], //D4DJ Groovy Mix (Android) [base files]
    [0x59F44935,0x4D063308], //D4DJ Groovy Mix (Android) music_0000001
    [0xF19D4CB8,0x4172F7AB], //D4DJ Groovy Mix (Android) music_0000004
    [0xC4276FFA,0xEE4AADEC], //D4DJ Groovy Mix (Android) music_0000005
    [0x683D739B,0xE9679E61], //D4DJ Groovy Mix (Android) music_0000006
    [0xA3ADC531,0xC32BB128], //D4DJ Groovy Mix (Android) music_0000007
    [0x52D065D9,0xCCDB8696], //D4DJ Groovy Mix (Android) music_0110001
    [0xBA26E589,0x23A5DA5D], //D4DJ Groovy Mix (Android) music_0110002
    [0x5B877AF6,0xE52AF19B], //D4DJ Groovy Mix (Android) music_0110003
    [0x55B7B258,0x21375A02], //D4DJ Groovy Mix (Android) music_0110004
    [0x87025D78,0xA57AF15B], //D4DJ Groovy Mix (Android) music_0110005
    [0x8815D2DF,0xFD77A71E], //D4DJ Groovy Mix (Android) music_0110006
    [0xB9CEDC6D,0x6738D481], //D4DJ Groovy Mix (Android) music_0110008
    [0x8EFA09C6,0xDF3991A4], //D4DJ Groovy Mix (Android) music_0110009
    [0xC05F8E4E,0xA8C3E487], //D4DJ Groovy Mix (Android) music_0110010
    [0xBF7712E1,0x75C0B265], //D4DJ Groovy Mix (Android) music_0110011
    [0xF74CF8D4,0xA5D008CE], //D4DJ Groovy Mix (Android) music_0110012
    [0xFCCE3164,0xDB70522D], //D4DJ Groovy Mix (Android) music_0110013
    [0x47F52330,0xDF2EAD11], //D4DJ Groovy Mix (Android) music_0110014
    [0x2F778C73,0x6A8A4597], //D4DJ Groovy Mix (Android) music_0110015
    [0x0A90C8EB,0xF8463D05], //D4DJ Groovy Mix (Android) music_0110016
    [0x750BEAF2,0x2DDC700B], //D4DJ Groovy Mix (Android) music_0110018
    [0x16CCC93F,0x976A8329], //D4DJ Groovy Mix (Android) music_0110019
    [0x9F7A0810,0x034669FE], //D4DJ Groovy Mix (Android) music_0110020
    [0xE8333D53,0xD2779E38], //D4DJ Groovy Mix (Android) music_0110021
    [0x2CDCAC4F,0x44F67075], //D4DJ Groovy Mix (Android) music_0110022
    [0x670C738C,0x8171210B], //D4DJ Groovy Mix (Android) music_0110023
    [0xD7359FA9,0xEC49E2C2], //D4DJ Groovy Mix (Android) music_0110024
    [0xD91127E6,0xC2F22539], //D4DJ Groovy Mix (Android) music_0110025
    [0x120DB58E,0x6C835175], //D4DJ Groovy Mix (Android) music_0110026
    [0x3613E2A7,0xFDFC0784], //D4DJ Groovy Mix (Android) music_0110027
    [0xC239D244,0xB6D3B722], //D4DJ Groovy Mix (Android) music_0110028
    [0x2575C136,0xA260E723], //D4DJ Groovy Mix (Android) music_0110029
    [0xFB647D07,0x4E53FAB6], //D4DJ Groovy Mix (Android) music_0120001
    [0xC24049B9,0xF7ED3105], //D4DJ Groovy Mix (Android) music_0120002
    [0x0DC128F2,0xFD48BF4B], //D4DJ Groovy Mix (Android) music_0120003
    [0xAEF2954D,0xC3657336], //D4DJ Groovy Mix (Android) music_0120004
    [0x567D2958,0x28F1B08A], //D4DJ Groovy Mix (Android) music_0120005
    [0x1BBAD843,0xD5971358], //D4DJ Groovy Mix (Android) music_0120006
    [0xF6B0DC07,0xEA8EBEB7], //D4DJ Groovy Mix (Android) music_0120007
    [0xDB03ECCA,0x6A0151E2], //D4DJ Groovy Mix (Android) music_0120008
    [0x260A354B,0x925AFEAF], //D4DJ Groovy Mix (Android) music_0120009
    [0x8032F83C,0xBF0076A1], //D4DJ Groovy Mix (Android) music_0120010
    [0xE4A1737F,0xA3D34CCB], //D4DJ Groovy Mix (Android) music_0120011
    [0xD0ED8E94,0x0D8ED705], //D4DJ Groovy Mix (Android) music_0120012
    [0x6BA36CAD,0xF1E045CF], //D4DJ Groovy Mix (Android) music_0120013
    [0xB9678662,0x1E27DAF3], //D4DJ Groovy Mix (Android) music_0120014
    [0xA2C543B2,0x27B8E5E2], //D4DJ Groovy Mix (Android) music_0120015
    [0x845437EC,0x4E367A13], //D4DJ Groovy Mix (Android) music_0120016
    [0xADFECFAF,0x25CFE2CE], //D4DJ Groovy Mix (Android) music_0120017
    [0x3674ABA8,0xDA7BC84B], //D4DJ Groovy Mix (Android) music_0120018
    [0xFD61F2C3,0xB89F3888], //D4DJ Groovy Mix (Android) music_0120019
    [0x514FA987,0x9FD07278], //D4DJ Groovy Mix (Android) music_0120021
    [0x3841DD34,0x67659916], //D4DJ Groovy Mix (Android) music_0120022
    [0x4FFFEE40,0x65D22BEC], //D4DJ Groovy Mix (Android) music_0210001
    [0x7678588B,0x0ADF59DF], //D4DJ Groovy Mix (Android) music_0210002
    [0xA0316B53,0x6C8B7540], //D4DJ Groovy Mix (Android) music_0210003
    [0x76254D1E,0xF50C004C], //D4DJ Groovy Mix (Android) music_0210004
    [0x22EF086D,0x7D6CE520], //D4DJ Groovy Mix (Android) music_0210005
    [0x2F2C0FF3,0xFF235BD6], //D4DJ Groovy Mix (Android) music_0210006
    [0x6867CC75,0x639EE0C3], //D4DJ Groovy Mix (Android) music_0210007
    [0x73621A0D,0x321E60C2], //D4DJ Groovy Mix (Android) music_0210008
    [0xFF04547F,0xE629C8BF], //D4DJ Groovy Mix (Android) music_0210009
    [0x5EF795CD,0xBCDCBA91], //D4DJ Groovy Mix (Android) music_0210010
    [0x868ACC01,0x02C59A38], //D4DJ Groovy Mix (Android) music_0210011
    [0x6DC5FF77,0x263450A5], //D4DJ Groovy Mix (Android) music_0210012
    [0x01DCA436,0xAFDD18D9], //D4DJ Groovy Mix (Android) music_0210013
    [0xAECEE65D,0x0F181D3B], //D4DJ Groovy Mix (Android) music_0210014
    [0x2822BBA0,0xA5C4F18C], //D4DJ Groovy Mix (Android) music_0210015
    [0xFF579D3F,0xCFA8453A], //D4DJ Groovy Mix (Android) music_0210016
    [0x3CAA61E8,0xB958F6D8], //D4DJ Groovy Mix (Android) music_0210017
    [0x15BB78C3,0x1DB0A0B6], //D4DJ Groovy Mix (Android) music_0220001
    [0x59B12572,0x42C40109], //D4DJ Groovy Mix (Android) music_0220002
    [0xDB402BD0,0x8D522F34], //D4DJ Groovy Mix (Android) music_0220003
    [0xA76262C2,0x557BE76F], //D4DJ Groovy Mix (Android) music_0220004
    [0xA139C29E,0x97FCEFB4], //D4DJ Groovy Mix (Android) music_0220005
    [0xB18FB83E,0xE356FB94], //D4DJ Groovy Mix (Android) music_0220006
    [0xD2CB7692,0xD690B3A7], //D4DJ Groovy Mix (Android) music_0220007
    [0x2B4A83E7,0xD54D0554], //D4DJ Groovy Mix (Android) music_0220008
    [0xA691936C,0xAF4D91D0], //D4DJ Groovy Mix (Android) music_0220009
    [0x0D40CCBA,0x5E10385A], //D4DJ Groovy Mix (Android) music_0220010
    [0xF0C624DC,0x0385ADAE], //D4DJ Groovy Mix (Android) music_0220011
    [0xCE0796D2,0xA956DC5A], //D4DJ Groovy Mix (Android) music_0220012
    [0xF9D6FB07,0xC0B4E967], //D4DJ Groovy Mix (Android) music_0220013
    [0x04AA31E0,0xC4F787A8], //D4DJ Groovy Mix (Android) music_0220014
    [0x94466DB0,0xD3C10F4B], //D4DJ Groovy Mix (Android) music_0220015
    [0xE6D1FD6E,0xFFA46736], //D4DJ Groovy Mix (Android) music_0220017
    [0xD23BDACD,0x616FC4C9], //D4DJ Groovy Mix (Android) music_0220018
    [0xFCEAA732,0x48868EC5], //D4DJ Groovy Mix (Android) music_0220019
    [0x3B6B0023,0xA2DD8C3D], //D4DJ Groovy Mix (Android) music_0220020
    [0x318F65F5,0x64DAA549], //D4DJ Groovy Mix (Android) music_0220021
    [0x3DAC12B2,0x6997F628], //D4DJ Groovy Mix (Android) music_0220022
    [0x6A15A961,0x0D10D210], //D4DJ Groovy Mix (Android) music_0310001
    [0x57111C24,0x801B44A1], //D4DJ Groovy Mix (Android) music_0310002
    [0x40443974,0xA0A86B8B], //D4DJ Groovy Mix (Android) music_0310003
    [0xCEDE8477,0x21873FC2], //D4DJ Groovy Mix (Android) music_0310004
    [0xC40C398F,0x7E80D184], //D4DJ Groovy Mix (Android) music_0310005
    [0x68D576C6,0x31E61265], //D4DJ Groovy Mix (Android) music_0310006
    [0x21778249,0x5C8B2972], //D4DJ Groovy Mix (Android) music_0310007
    [0x6699616B,0xE2C50115], //D4DJ Groovy Mix (Android) music_0310008
    [0xB7A52971,0x98A73155], //D4DJ Groovy Mix (Android) music_0310009
    [0xDD9CA800,0xA7123D6F], //D4DJ Groovy Mix (Android) music_0310010
    [0xC86F8564,0xE0B9078C], //D4DJ Groovy Mix (Android) music_0310011
    [0xCC5610C0,0x9F472CE9], //D4DJ Groovy Mix (Android) music_0310012
    [0xD447A497,0xC5547A1C], //D4DJ Groovy Mix (Android) music_0310013
    [0x227B8594,0x8BB3D899], //D4DJ Groovy Mix (Android) music_0310014
    [0xFFF671F0,0xDDB660B1], //D4DJ Groovy Mix (Android) music_0310015
    [0x22E33DB9,0xB5625A96], //D4DJ Groovy Mix (Android) music_0310016
    [0xB7807080,0x2414DE7A], //D4DJ Groovy Mix (Android) music_0310017
    [0x572AEEED,0x86655119], //D4DJ Groovy Mix (Android) music_0310018
    [0xB921C399,0x2807DADD], //D4DJ Groovy Mix (Android) music_0320001
    [0x38AD99A0,0x45DC971F], //D4DJ Groovy Mix (Android) music_0320002
    [0xF6166425,0x79BA5850], //D4DJ Groovy Mix (Android) music_0320003
    [0x6AA0FF88,0x1DA270E7], //D4DJ Groovy Mix (Android) music_0320004
    [0x5089E16D,0x7A676AB1], //D4DJ Groovy Mix (Android) music_0320005
    [0x8AD213DD,0xDEDC9022], //D4DJ Groovy Mix (Android) music_0320006
    [0x5205A666,0xF976D42F], //D4DJ Groovy Mix (Android) music_0320007
    [0xCCCB5077,0xD978DEF4], //D4DJ Groovy Mix (Android) music_0320008
    [0x290FBC93,0xE184AF1E], //D4DJ Groovy Mix (Android) music_0320009
    [0x230C9509,0xBBC3DF0D], //D4DJ Groovy Mix (Android) music_0320010
    [0x5771A2C7,0x6F36C898], //D4DJ Groovy Mix (Android) music_0320011
    [0x244A9288,0x5AB77B7C], //D4DJ Groovy Mix (Android) music_0320012
    [0xFC3FA77F,0xC33460D4], //D4DJ Groovy Mix (Android) music_0320013
    [0x26EE1359,0x8091B548], //D4DJ Groovy Mix (Android) music_0320014
    [0xF06A6BFD,0xD00C8286], //D4DJ Groovy Mix (Android) music_0320015
    [0x2DF608EF,0x06ACA41C], //D4DJ Groovy Mix (Android) music_0320016
    [0x641AF19C,0x287D4A2E], //D4DJ Groovy Mix (Android) music_0320017
    [0x82DE7B71,0xB30D7BC2], //D4DJ Groovy Mix (Android) music_0320019
    [0x776C4ADE,0xD0BCA5D1], //D4DJ Groovy Mix (Android) music_0410001
    [0xB7BFF4FB,0xF66BE43F], //D4DJ Groovy Mix (Android) music_0410002
    [0x904F50C5,0xCE8EC6E4], //D4DJ Groovy Mix (Android) music_0410003
    [0x465E3032,0x1A4091F2], //D4DJ Groovy Mix (Android) music_0410004
    [0x7C7DD6D9,0xF3761102], //D4DJ Groovy Mix (Android) music_0410005
    [0xC222E70E,0x4A79F7C3], //D4DJ Groovy Mix (Android) music_0410006
    [0x84635546,0x72BFB716], //D4DJ Groovy Mix (Android) music_0410007
    [0x1111D6C1,0x0E509824], //D4DJ Groovy Mix (Android) music_0410008
    [0x2E107D84,0x9959C430], //D4DJ Groovy Mix (Android) music_0410009
    [0x75859A7A,0x2B1ED37D], //D4DJ Groovy Mix (Android) music_0410010
    [0x2E5F57A6,0xC6E9C97F], //D4DJ Groovy Mix (Android) music_0410011
    [0xA144F6D7,0xDE02E000], //D4DJ Groovy Mix (Android) music_0410012
    [0x1DA4370C,0x9C20319C], //D4DJ Groovy Mix (Android) music_0410013
    [0xD8CDD535,0x89AD3634], //D4DJ Groovy Mix (Android) music_0410014
    [0x88007190,0xE0BFA1CE], //D4DJ Groovy Mix (Android) music_0410015
    [0x6FCCDD5C,0x3D0D6E3E], //D4DJ Groovy Mix (Android) music_0410016
    [0x5D1F3FDB,0xBB036F8D], //D4DJ Groovy Mix (Android) music_0420001
    [0xC04264E8,0xF34AD5C0], //D4DJ Groovy Mix (Android) music_0420002
    [0x8F0E96B4,0xF71F724F], //D4DJ Groovy Mix (Android) music_0420003
    [0x79C5F00D,0x243E3097], //D4DJ Groovy Mix (Android) music_0420004
    [0x889D47AD,0xC9595FFA], //D4DJ Groovy Mix (Android) music_0420005
    [0x3F25FE33,0x95B3154C], //D4DJ Groovy Mix (Android) music_0420006
    [0x212BBEE2,0x64BE5B06], //D4DJ Groovy Mix (Android) music_0420007
    [0x867D47A7,0xD8376402], //D4DJ Groovy Mix (Android) music_0420008
    [0xF7E11EC9,0xC94402F1], //D4DJ Groovy Mix (Android) music_0420009
    [0x1BB363AD,0xCF4EB3F8], //D4DJ Groovy Mix (Android) music_0420010
    [0x0D80D3DC,0xC7C75CEA], //D4DJ Groovy Mix (Android) music_0420011
    [0x52723F02,0x6D5238E8], //D4DJ Groovy Mix (Android) music_0420012
    [0x00D13A31,0x5C0005F0], //D4DJ Groovy Mix (Android) music_0420013
    [0x035F2D3C,0xEC84ABA1], //D4DJ Groovy Mix (Android) music_0420014
    [0x0DAD11FE,0x0E397EDE], //D4DJ Groovy Mix (Android) music_0420015
    [0x0C94236C,0x936F50CC], //D4DJ Groovy Mix (Android) music_0420016
    [0xBF8A2D95,0x1BC01DFF], //D4DJ Groovy Mix (Android) music_0420017
    [0xB9455056,0x38F972E4], //D4DJ Groovy Mix (Android) music_0420018
    [0x0DF31E26,0xA7B036A2], //D4DJ Groovy Mix (Android) music_0510001
    [0xB2770DCE,0xD3CFD9A7], //D4DJ Groovy Mix (Android) music_0510002
    [0x6C6C1FD5,0x1E28A1E7], //D4DJ Groovy Mix (Android) music_0510003
    [0xDCD2A403,0xFB01E164], //D4DJ Groovy Mix (Android) music_0510004
    [0x98436383,0x7811B08A], //D4DJ Groovy Mix (Android) music_0510005
    [0x9F6881F6,0xD7A91658], //D4DJ Groovy Mix (Android) music_0510006
    [0x3804D53C,0x43293080], //D4DJ Groovy Mix (Android) music_0510007
    [0x298A0FA0,0x5C3F355F], //D4DJ Groovy Mix (Android) music_0510008
    [0x9EBB5606,0x85327081], //D4DJ Groovy Mix (Android) music_0510009
    [0xD45E8BA3,0x74B45FF7], //D4DJ Groovy Mix (Android) music_0510010
    [0xC5C9BF13,0x8C9E28CE], //D4DJ Groovy Mix (Android) music_0510011
    [0x1980271C,0xFE0DA9BD], //D4DJ Groovy Mix (Android) music_0510012
    [0x75C5BD4E,0x3A01A8A4], //D4DJ Groovy Mix (Android) music_0510013
    [0xEC5F5FBE,0x92BBB771], //D4DJ Groovy Mix (Android) music_0510014
    [0x0B8C3233,0x338AD8E0], //D4DJ Groovy Mix (Android) music_0510015
    [0xDA4CE04D,0xBDA1BD7E], //D4DJ Groovy Mix (Android) music_0510016
    [0x07878DF6,0x0F0549C4], //D4DJ Groovy Mix (Android) music_0510017
    [0x8E5B7068,0x022828E0], //D4DJ Groovy Mix (Android) music_0510018
    [0xB069A5C5,0xE2D93EDF], //D4DJ Groovy Mix (Android) music_0510019
    [0x15F82C16,0x17013C36], //D4DJ Groovy Mix (Android) music_0520001
    [0xC7DA8E6F,0x0E2FE399], //D4DJ Groovy Mix (Android) music_0520002
    [0xE350BFFC,0xDC9CB686], //D4DJ Groovy Mix (Android) music_0520003
    [0xE77AA2F3,0xC90A4E84], //D4DJ Groovy Mix (Android) music_0520004
    [0x57BDC58E,0x4C06FC76], //D4DJ Groovy Mix (Android) music_0520005
    [0xD4C36AB9,0x62153420], //D4DJ Groovy Mix (Android) music_0520006
    [0x9DE6ACE9,0xA0E62F44], //D4DJ Groovy Mix (Android) music_0520007
    [0x35128087,0x963CD5BE], //D4DJ Groovy Mix (Android) music_0520008
    [0xDF30ED86,0xC3D00FFB], //D4DJ Groovy Mix (Android) music_0520009
    [0x0DE49592,0x21BC2675], //D4DJ Groovy Mix (Android) music_0520010
    [0xEEAF8D24,0x58CCDB36], //D4DJ Groovy Mix (Android) music_0520011
    [0xB140168A,0x47D55B92], //D4DJ Groovy Mix (Android) music_0520012
    [0x2E8D1134,0xCE415F8C], //D4DJ Groovy Mix (Android) music_0520013
    [0x1BF43DEF,0x1E4B103A], //D4DJ Groovy Mix (Android) music_0520014
    [0x6721AD51,0x09E4840D], //D4DJ Groovy Mix (Android) music_0520015
    [0x0C488DD6,0x2FC89090], //D4DJ Groovy Mix (Android) music_0520016
    [0xD3D24F1D,0xB0B74363], //D4DJ Groovy Mix (Android) music_0520019
    [0xD2CE91DB,0xFC209B10], //D4DJ Groovy Mix (Android) music_0610001
    [0xA662BE16,0x01E49476], //D4DJ Groovy Mix (Android) music_0610002
    [0xE5E83D31,0xE64273F8], //D4DJ Groovy Mix (Android) music_0610003
    [0xAF9D7A05,0xB0FC3D9E], //D4DJ Groovy Mix (Android) music_0610004
    [0xCEE66D58,0x5D689851], //D4DJ Groovy Mix (Android) music_0610005
    [0x065C2F85,0x00BC12C8], //D4DJ Groovy Mix (Android) music_0610006
    [0x7148DDA3,0xAFA76439], //D4DJ Groovy Mix (Android) music_0610007
    [0x42548FE4,0x544C2ED7], //D4DJ Groovy Mix (Android) music_0610008
    [0x09E68DA7,0x34CC472F], //D4DJ Groovy Mix (Android) music_0610009
    [0xA01C597D,0x1AA13358], //D4DJ Groovy Mix (Android) music_0610010
    [0x06492E77,0x08204838], //D4DJ Groovy Mix (Android) music_0610011
    [0x957E4D39,0x48427952], //D4DJ Groovy Mix (Android) music_0610012
    [0x7081F083,0xAC3D6F0A], //D4DJ Groovy Mix (Android) music_0610013
    [0xFCFA4DBD,0x1EC6CFCB], //D4DJ Groovy Mix (Android) music_0610014
    [0x750AB114,0x87F9D6E8], //D4DJ Groovy Mix (Android) music_0610015
    [0xD22171FD,0xA74C5615], //D4DJ Groovy Mix (Android) music_0610016
    [0x3AA02E0A,0x37543B5C], //D4DJ Groovy Mix (Android) music_0610017
    [0xC451F1DE,0xDDAE08CA], //D4DJ Groovy Mix (Android) music_0610018
    [0xC0FA6669,0xD9904919], //D4DJ Groovy Mix (Android) music_0610019
    [0x8258DDD6,0xA1D0849B], //D4DJ Groovy Mix (Android) music_0620001
    [0x1DD21A12,0x44CA12F1], //D4DJ Groovy Mix (Android) music_0620002
    [0xFDEC74B2,0x3D8B494B], //D4DJ Groovy Mix (Android) music_0620003
    [0x6F9735C0,0x2FAF6AAE], //D4DJ Groovy Mix (Android) music_0620004
    [0x00E978D3,0x94512CFD], //D4DJ Groovy Mix (Android) music_0620005
    [0xABA14763,0x7D52EFBE], //D4DJ Groovy Mix (Android) music_0620006
    [0xE67F4DA6,0x012C5D24], //D4DJ Groovy Mix (Android) music_0620007
    [0xC352BBF3,0xD519256E], //D4DJ Groovy Mix (Android) music_0620008
    [0x037D1452,0xC192B1E6], //D4DJ Groovy Mix (Android) music_0620009
    [0xF7E53533,0xD82D48DD], //D4DJ Groovy Mix (Android) music_0620010
    [0x33848BE1,0x3A2884A3], //D4DJ Groovy Mix (Android) music_0620011
    [0xFAB3596F,0x11CC4D7A], //D4DJ Groovy Mix (Android) music_0620012
    [0xE35D52B6,0xD2C094FB], //D4DJ Groovy Mix (Android) music_0620013
    [0xCDB9BC2A,0xD7024CA2], //D4DJ Groovy Mix (Android) music_0620014
    [0xCF27380A,0x5A949DC1], //D4DJ Groovy Mix (Android) music_0620015
    [0x5DE2B0A3,0x4EEE1C89], //D4DJ Groovy Mix (Android) music_0620016
    [0x5C1195D8,0xAFCB1901], //D4DJ Groovy Mix (Android) music_0620017
    [0x1AD8DB76,0x7D9BA4A7], //D4DJ Groovy Mix (Android) music_0620018
    [0x9BC820AA,0x161B0F08], //D4DJ Groovy Mix (Android) music_0620019
    [0x972B52F3,0xDFAA387A], //D4DJ Groovy Mix (Android) music_0910001
    [0x2A47FEAC,0x8DC3CA9C], //D4DJ Groovy Mix (Android) music_3010001
    [0x9EBBAF63,0xFFE9D9EF], //D4DJ Groovy Mix (Android) music_3010002
    [0xE553DBA6,0x592293D8], //D4DJ Groovy Mix (Android) music_3010003
    [0x031E0726,0x78AD18A3], //D4DJ Groovy Mix (Android) music_3010004
    [0x4BA9A947,0x1F49B74E], //D4DJ Groovy Mix (Android) music_3010005
    [0x0C917CB8,0x64231982], //D4DJ Groovy Mix (Android) music_3010006
    [0x7A708E29,0x1692ABB9], //D4DJ Groovy Mix (Android) music_3010007
    [0x1AB266A4,0xCBB5133A], //D4DJ Groovy Mix (Android) music_3010008
    [0x7D471961,0x5FBB2F4D], //D4DJ Groovy Mix (Android) music_3010009
    [0x28AA75A0,0x1F26A853], //D4DJ Groovy Mix (Android) music_3010010
    [0x7555FEEA,0xA2A8FAC4], //D4DJ Groovy Mix (Android) music_3010011
    [0xA42DE67A,0x89FB3175], //D4DJ Groovy Mix (Android) music_3010012
    [0xBDD0C580,0x62C675D4], //D4DJ Groovy Mix (Android) music_3010014
    [0xEF257F41,0xA265A0AF], //D4DJ Groovy Mix (Android) music_3010015
    [0x5E23D8A2,0x488BC715], //D4DJ Groovy Mix (Android) music_3010016
    [0x198CC607,0xE20DD264], //D4DJ Groovy Mix (Android) music_3010017
    [0xFD3EA450,0x350D666F], //D4DJ Groovy Mix (Android) music_3020001
    [0x5E91A379,0x0C32E2B3], //D4DJ Groovy Mix (Android) music_3020002
    [0x358ADFD1,0xBBD3A95E], //D4DJ Groovy Mix (Android) music_3020003
    [0x1948EDF7,0xFF41E79B], //D4DJ Groovy Mix (Android) music_3020004
    [0x10029372,0x9F35B4DE], //D4DJ Groovy Mix (Android) music_3020005
    [0x140AC59D,0x2B870A13], //D4DJ Groovy Mix (Android) music_3020006
    [0x402B13DF,0x5481D4E6], //D4DJ Groovy Mix (Android) music_3020007
    [0x729EFD67,0xAEDE1A40], //D4DJ Groovy Mix (Android) music_3020008
    [0xB7B9A143,0x742FA51E], //D4DJ Groovy Mix (Android) music_3020009
    [0x0C775032,0x8BCD329F], //D4DJ Groovy Mix (Android) music_3020010
    [0x5761FE74,0x62B17A3B], //D4DJ Groovy Mix (Android) music_3020012
    [0x98C7A1D1,0xC45DF640], //D4DJ Groovy Mix (Android) music_3020013
    [0x3D01826F,0xE053DDDA], //D4DJ Groovy Mix (Android) music_3020014
    [0xA6A6426C,0xAED68F7C], //D4DJ Groovy Mix (Android) music_3020015
    [0xDFAD847A,0x86A126BB], //D4DJ Groovy Mix (Android) music_5030001
    [0x711EF850,0x45B8C26E], //D4DJ Groovy Mix (Android) music_5030002
    [0xFF7640B4,0x6D72B337], //D4DJ Groovy Mix (Android) music_5030003
    [0x420D4DD4,0x13053980], //D4DJ Groovy Mix (Android) music_5030004
    [0x84DC42F5,0xA05F77CF], //D4DJ Groovy Mix (Android) music_5030005
    [0xCB60232F,0x2F27ACE5], //D4DJ Groovy Mix (Android) music_5030006
    [0xD9A00C9B,0xC93014A8], //D4DJ Groovy Mix (Android) music_5030007
    [0xE0B8BB03,0xC74BB3D0], //D4DJ Groovy Mix (Android) music_5030008
    [0xCB3D9329,0xD40490B2], //D4DJ Groovy Mix (Android) music_5030009
    [0x7CE69EED,0x81F01019], //D4DJ Groovy Mix (Android) music_5030010
    [0xFD9FA5BC,0xB347C01B], //D4DJ Groovy Mix (Android) music_5030011
    [0x4A4462CB,0x0375001E], //D4DJ Groovy Mix (Android) music_5030012
    [0xA3711CC0,0x6F9B86C2], //D4DJ Groovy Mix (Android) music_5030013
    [0x0AEBFDF8,0x5AAE4424], //D4DJ Groovy Mix (Android) music_5030014
    [0x1ED521F6,0xDD691255], //D4DJ Groovy Mix (Android) music_5030015
    [0xB2BD99FA,0x559B9062], //D4DJ Groovy Mix (Android) music_5030016
    [0xAFF9DF03,0x0E63E5BA], //D4DJ Groovy Mix (Android) music_5030017
    [0xB30ACD0A,0x43754E5C], //D4DJ Groovy Mix (Android) music_5030018
    [0xA6CEFD44,0x72568948], //D4DJ Groovy Mix (Android) music_5030019
    [0x447D08CA,0x3148599D], //D4DJ Groovy Mix (Android) music_5030020
    [0xFE315172,0x82D40690], //D4DJ Groovy Mix (Android) music_5030021
    [0x0A6A15CC,0x9722257D], //D4DJ Groovy Mix (Android) music_5030022
    [0x55912DB4,0x388961AC], //D4DJ Groovy Mix (Android) music_5030023
    [0x8F5F05C8,0x35F7280E], //D4DJ Groovy Mix (Android) music_5030024
    [0x6750F4D0,0x5183BC01], //D4DJ Groovy Mix (Android) music_5030025
    [0xDA65AF76,0x0E02C6EE], //D4DJ Groovy Mix (Android) music_5030026
    [0xF4093992,0xCADD3708], //D4DJ Groovy Mix (Android) music_5030027
    [0xF965A108,0x6B3179C3], //D4DJ Groovy Mix (Android) music_5030028
    [0x24C0B490,0x97E9EBFF], //D4DJ Groovy Mix (Android) music_5030029
    [0x2ECDF66C,0x680F3A45], //D4DJ Groovy Mix (Android) music_5030030
    [0x54AAADA4,0xA1B8DEEF], //D4DJ Groovy Mix (Android) music_5030031
    [0x46BED365,0x593C560C], //D4DJ Groovy Mix (Android) music_5030032
    [0xA954B315,0x630E3ED0], //D4DJ Groovy Mix (Android) music_5030033
    [0x83286683,0x69631CC1], //D4DJ Groovy Mix (Android) music_5030034
    [0xA5C1ADEB,0x7919845F], //D4DJ Groovy Mix (Android) music_5030035
    [0x8E35D686,0x32FC0D77], //D4DJ Groovy Mix (Android) music_5030036
    [0x4FBC9CAB,0xD12F75A1], //D4DJ Groovy Mix (Android) music_5030037
    [0xD27146E6,0xDE40209A], //D4DJ Groovy Mix (Android) music_5030038
    [0x6ABCC90B,0xE62F2CEC], //D4DJ Groovy Mix (Android) music_5030039
    [0x7F617E39,0x6E9A1E5C], //D4DJ Groovy Mix (Android) music_5030040
    [0xD0471C16,0x3265CA1B], //D4DJ Groovy Mix (Android) music_5030041
    [0xD6899666,0x09595D7D], //D4DJ Groovy Mix (Android) music_5030042
    [0x172171A4,0xFF10FDC1], //D4DJ Groovy Mix (Android) music_5030043
    [0x53C2BDDB,0x0A15D322], //D4DJ Groovy Mix (Android) music_5030044
    [0xCB2C44D5,0x94252491], //D4DJ Groovy Mix (Android) music_5030045
    [0xBDC220BA,0x31087591], //D4DJ Groovy Mix (Android) music_5030046
    [0xE2346E5F,0x5D18228E], //D4DJ Groovy Mix (Android) music_5030047
    [0x458B7384,0x4ED5219E], //D4DJ Groovy Mix (Android) music_5030048
    [0x7D83B8DA,0x9023EF26], //D4DJ Groovy Mix (Android) music_5030049
    [0x32CB728D,0xDAB4D956], //D4DJ Groovy Mix (Android) music_5030050
    [0xBD128C4A,0x4D1F565B], //D4DJ Groovy Mix (Android) music_5030051
    [0x363AA084,0xF3BF7AF1], //D4DJ Groovy Mix (Android) music_5030052
    [0xDFE954B6,0x17357381], //D4DJ Groovy Mix (Android) music_5030053
    [0x52C5DFB6,0x1FE4C87A], //D4DJ Groovy Mix (Android) music_5030054
    [0x3EBBCCAB,0x07C9A9BA], //D4DJ Groovy Mix (Android) music_5030055
    [0x50A01678,0x18F4D51B], //D4DJ Groovy Mix (Android) music_5030056
    [0xCEAED399,0x6196281B], //D4DJ Groovy Mix (Android) music_5030057
    [0xE0590C04,0xEC4906F1], //D4DJ Groovy Mix (Android) music_5030058
    [0x400B11E9,0x30008A58], //D4DJ Groovy Mix (Android) music_5030059
    [0x15AAECC4,0x725A5F70], //D4DJ Groovy Mix (Android) music_5030060
    [0x7A5E0865,0xBA8CAFA7], //D4DJ Groovy Mix (Android) music_5030061
    [0x7679587F,0x7292B057], //D4DJ Groovy Mix (Android) music_5030062
    [0xC9C804E6,0xFED3387C], //D4DJ Groovy Mix (Android) music_5030063
    [0xC72EB23B,0xCDC43F42], //D4DJ Groovy Mix (Android) music_5030064
    [0x0F7CEDD2,0x12A06307], //D4DJ Groovy Mix (Android) music_5030065
    [0x850AD05F,0x415D6018], //D4DJ Groovy Mix (Android) music_5030066
    [0x36F62D41,0xAA4203C9], //D4DJ Groovy Mix (Android) music_5030067
    [0x2174D57B,0xFEAFC637], //D4DJ Groovy Mix (Android) music_5030068
    [0x143A7405,0xEF56E4DF], //D4DJ Groovy Mix (Android) music_5030069
    [0x4A193ED2,0x6D1D10F3], //D4DJ Groovy Mix (Android) music_5030070
    [0x884385AD,0x03F2BD62], //D4DJ Groovy Mix (Android) music_5030071
    [0x9C220B56,0xAB1D56B1], //D4DJ Groovy Mix (Android) music_5030072
    [0x5ED84AEA,0x8AD0D05B], //D4DJ Groovy Mix (Android) music_5030073
    [0xF5074D6D,0xB1CEC319], //D4DJ Groovy Mix (Android) music_5030074
    [0xAE83F69D,0x4D7FF064], //D4DJ Groovy Mix (Android) music_5030075
    [0x29A3D7B0,0x3FE66D8F], //D4DJ Groovy Mix (Android) music_5030076
    [0xB3028865,0x6E565401], //D4DJ Groovy Mix (Android) music_5030077
    [0x5A420864,0xCD1FA3FB], //D4DJ Groovy Mix (Android) music_5030078
    [0xE1C992CC,0x05D8A203], //D4DJ Groovy Mix (Android) music_5030079
    [0x79AD5329,0xB9B46034], //D4DJ Groovy Mix (Android) music_5030080
    [0x1DD99AC6,0xF1A07F00], //D4DJ Groovy Mix (Android) music_5030081
    [0x2FD298AD,0xE03F7F0F], //D4DJ Groovy Mix (Android) music_5030082
    [0xBEB0DF81,0x8F88B99C], //D4DJ Groovy Mix (Android) music_5030083
    [0x0886DF2B,0xDCC645CC], //D4DJ Groovy Mix (Android) music_5030084
    [0x06420FC8,0xD2D67EF1], //D4DJ Groovy Mix (Android) music_5030085
    [0x29D61D19,0x434B640B], //D4DJ Groovy Mix (Android) music_5030086
    [0xF4D7569B,0xB4FA06AB], //D4DJ Groovy Mix (Android) music_5030087
    [0x1DE64CE0,0xC1054A5A], //D4DJ Groovy Mix (Android) music_5030088
    [0xD51E8D88,0xFFF1AA5C], //D4DJ Groovy Mix (Android) music_5030089
    [0xA2EA8181,0x2297BF73], //D4DJ Groovy Mix (Android) music_5030090
    [0x0276F1E2,0x3C97CF8D], //D4DJ Groovy Mix (Android) music_5030091
    [0xB59A0DF1,0x213C36C9], //D4DJ Groovy Mix (Android) music_5030092
    [0xEBF7BFEB,0xB82A4411], //D4DJ Groovy Mix (Android) music_5030093
    [0xB991FCB8,0xB74F46D7], //D4DJ Groovy Mix (Android) music_5030094
    [0x435E2E06,0x4BD48AD5], //D4DJ Groovy Mix (Android) music_5030095
    [0xA9824E9B,0xAAA354E2], //D4DJ Groovy Mix (Android) music_5030096
    [0xC3A72539,0xB831EA6E], //D4DJ Groovy Mix (Android) music_5030097
    [0x8BC6B7B7,0xA2D2BBA3], //D4DJ Groovy Mix (Android) music_5030098
    [0xDBB0F41E,0x90B30452], //D4DJ Groovy Mix (Android) music_5030099
    [0x444DDA6D,0x55D76095], //D4DJ Groovy Mix (Android) music_5040001
    [0xCBF4F132,0x4081E0A6], //D4DJ Groovy Mix (Android) music_5040002
    [0xF1DB3C1D,0x9542063A], //D4DJ Groovy Mix (Android) music_5040003
    [0x114245B9,0x8DCB75BF], //D4DJ Groovy Mix (Android) music_5040004
    [0x6139EDFB,0x8889032D], //D4DJ Groovy Mix (Android) music_5040005
    [0x9CE13DCB,0x2FB389CC], //D4DJ Groovy Mix (Android) music_5040006
    [0x67B89634,0x319C1D36], //D4DJ Groovy Mix (Android) music_5040007
    [0xF877DEA1,0x180B9B90], //D4DJ Groovy Mix (Android) music_5040008
    [0xCD3FB920,0x65D9F373], //D4DJ Groovy Mix (Android) music_5040009
    [0xEE8DA280,0x6A13EECF], //D4DJ Groovy Mix (Android) music_5040010
    [0x0046FD87,0xA21859AC], //D4DJ Groovy Mix (Android) music_5040011
    [0x90FEFCD3,0x50BD2CB8], //D4DJ Groovy Mix (Android) music_5040012
    [0xF7EDC5D7,0x2FDD6CEB], //D4DJ Groovy Mix (Android) music_5040013
    [0x4C7D7C25,0x1C6BFA95], //D4DJ Groovy Mix (Android) music_5040014
    [0x2F3528A4,0xB9EAA0F7], //D4DJ Groovy Mix (Android) music_5040015
    [0x529969B7,0xE1E9AC18], //D4DJ Groovy Mix (Android) music_5040016
    [0xBB7BE9C7,0xC620F504], //D4DJ Groovy Mix (Android) music_5040018
    [0x7ED1FA0B,0x6EC8F9B3], //D4DJ Groovy Mix (Android) music_5040020
    [0xA4481F97,0xA8D4D01C], //D4DJ Groovy Mix (Android) music_5040021
    [0x7465C7C4,0x73E53A40], //D4DJ Groovy Mix (Android) music_5040022
    [0xFADB1B0F,0x28E951E1], //D4DJ Groovy Mix (Android) music_5040023
    [0x05E3EBA3,0x76E0B3DD], //D4DJ Groovy Mix (Android) music_5050001
    [0x0A8EE7A3,0xA20CE822], //D4DJ Groovy Mix (Android) music_5050002
    [0xF42D31B5,0xECD1AEC1], //D4DJ Groovy Mix (Android) music_5050003
    [0x56ECFC7E,0xF4C65BE8], //D4DJ Groovy Mix (Android) music_5050004
    [0xAD071DCE,0x0C070E65], //D4DJ Groovy Mix (Android) music_5050005
    [0x98178A7B,0x6AC7327B], //D4DJ Groovy Mix (Android) music_5050006
    [0xB65D8662,0x4A857788], //D4DJ Groovy Mix (Android) music_5050007
    [0x9FBD8A17,0x2D5BA3E3], //D4DJ Groovy Mix (Android) music_5050008
    [0xDC2680AC,0xFD1B9B64], //D4DJ Groovy Mix (Android) music_5050009
    [0xD0D8557C,0x8EF44DD4], //D4DJ Groovy Mix (Android) music_5050010
    [0x945CDB3C,0xF1F29E52], //D4DJ Groovy Mix (Android) music_5050011
    [0x6461FE08,0xC7744918], //D4DJ Groovy Mix (Android) music_5050012
    [0xE27F90CF,0x77F17DEC], //D4DJ Groovy Mix (Android) music_5050013
    [0xBF5902D5,0x16DB6ED5], //D4DJ Groovy Mix (Android) music_5050015
    [0xEB8AAC34,0xDC178F65], //D4DJ Groovy Mix (Android) music_5050016
    [0xD4D2A706,0xA06377EF], //D4DJ Groovy Mix (Android) music_5050017
    [0xDCE3CD3F,0xFE2D4144], //D4DJ Groovy Mix (Android) music_5050018
    [0xDAAA3A98,0x7E3AA3CA], //D4DJ Groovy Mix (Android) music_5050019
    [0x6CD32143,0xF1A4A2AA], //D4DJ Groovy Mix (Android) music_5050020
    [0x5B92C172,0x83E2B9A0], //D4DJ Groovy Mix (Android) music_5050021
    [0x141E0174,0xDF535976], //D4DJ Groovy Mix (Android) music_5050022
    [0x73667711,0x348F833F], //D4DJ Groovy Mix (Android) music_5050023
    [0xC9F159F6,0x0B065F91], //D4DJ Groovy Mix (Android) music_5050024
    [0x2638971E,0x9D063B5F], //D4DJ Groovy Mix (Android) music_5050025
    [0x6BDF5832,0xEB19FCDF], //D4DJ Groovy Mix (Android) music_5050026
    [0x7F0FEAC6,0xBE7DEF5B], //D4DJ Groovy Mix (Android) music_5050027
    [0x8CC0AA89,0xC75BB821], //D4DJ Groovy Mix (Android) music_5050028
    [0x917E7DD2,0xC5287EDD], //D4DJ Groovy Mix (Android) music_5050029
    [0x71B5FA37,0x61D6726D], //D4DJ Groovy Mix (Android) music_5050030
    [0xE4E11A71,0xFE620E3A], //D4DJ Groovy Mix (Android) music_5050031
    [0xC28331AA,0xB2612584], //D4DJ Groovy Mix (Android) music_5050032
    [0xFF05B24D,0xA2980C99], //D4DJ Groovy Mix (Android) music_5050033
    [0xA7CE246E,0x536B0941], //D4DJ Groovy Mix (Android) music_5050034
    [0xFA842BC0,0x7360137D], //D4DJ Groovy Mix (Android) music_5050035
    [0xF8D72C40,0x5D3F0456], //D4DJ Groovy Mix (Android) music_5050036
    [0xD4D5FA6C,0x87342E6B], //D4DJ Groovy Mix (Android) music_5050037
    [0xD8CBC946,0xFA660944], //D4DJ Groovy Mix (Android) music_5050038
    [0x0FAC3987,0x19CD9E4A], //D4DJ Groovy Mix (Android) music_5050039
    [0x09C4BA79,0x6548A019], //D4DJ Groovy Mix (Android) music_5050040
    [0x7E7C462B,0xA7D473CF], //D4DJ Groovy Mix (Android) music_5050041
    [0x8A9A7AF1,0x379840FB], //D4DJ Groovy Mix (Android) music_5050042
    [0xA0AA0097,0xE5631019], //D4DJ Groovy Mix (Android) music_5050043
    [0xE278ECCF,0x08EB2565], //D4DJ Groovy Mix (Android) music_5050044
    [0x1CF133B2,0x6D8160D1], //D4DJ Groovy Mix (Android) music_5050045
    [0xDA08E9D3,0x961C93F2], //D4DJ Groovy Mix (Android) music_5050046
    [0x58D97E6F,0x3D1AEE86], //D4DJ Groovy Mix (Android) music_5050047
    [0x57353B77,0x1188635E], //D4DJ Groovy Mix (Android) music_5050048
    [0xEB9AD118,0x0D7E1B53], //D4DJ Groovy Mix (Android) music_5050049
    [0xAEC8DBD5,0xF5337A9E], //D4DJ Groovy Mix (Android) music_5050050
    [0x49D08922,0x136334CE], //D4DJ Groovy Mix (Android) music_5050051
    [0x138DF0B8,0x66E902E0], //D4DJ Groovy Mix (Android) music_5050052
    [0xC076E860,0x4740FF5F], //D4DJ Groovy Mix (Android) music_5050053
    [0x69FE38AE,0x5970D450], //D4DJ Groovy Mix (Android) music_5050054
    [0x414200BD,0x8AC11B40], //D4DJ Groovy Mix (Android) music_5050055
    [0xBCE9E85D,0x31089FB2], //D4DJ Groovy Mix (Android) music_5050056
    [0x0817B919,0x679C96D7], //D4DJ Groovy Mix (Android) music_5050057
    [0x3E0E5104,0x3BD7D5E5], //D4DJ Groovy Mix (Android) music_5050058
    [0x86D17E28,0xB2F2B91C], //D4DJ Groovy Mix (Android) music_5050059
    [0x115F906B,0x6B7FB845], //D4DJ Groovy Mix (Android) music_5050060
    [0xA8D5E9B1,0xC6CF1505], //D4DJ Groovy Mix (Android) music_5050061
    [0x69FFD3FE,0xFDF7EE71], //D4DJ Groovy Mix (Android) music_5050062
    [0x571E6467,0x78541F4D], //D4DJ Groovy Mix (Android) music_5050063
    [0xE8B5323E,0xC07608E7], //D4DJ Groovy Mix (Android) music_5050064
    [0x27992DD6,0x21B8A07E], //D4DJ Groovy Mix (Android) music_5050065
    [0x8E2A8439,0xF5628513], //D4DJ Groovy Mix (Android) music_5050066
    [0x8B5BE21E,0x70A84EED], //D4DJ Groovy Mix (Android) music_5050067
    [0x22729741,0x6C6CCC7C], //D4DJ Groovy Mix (Android) music_5050068
    [0xB544DC85,0x24419109], //D4DJ Groovy Mix (Android) music_5050069
    [0x6C2D9160,0x672CBF95], //D4DJ Groovy Mix (Android) music_5050070
    [0x7FF66302,0x86D2D93B], //D4DJ Groovy Mix (Android) music_5050071
    [0xC6DEECD2,0xD1391713], //D4DJ Groovy Mix (Android) music_5050072
    [0x78BEC41D,0xD27D8788], //D4DJ Groovy Mix (Android) music_5050074
    [0x0F86991A,0x3B9AEC2B], //D4DJ Groovy Mix (Android) music_5050075
    [0x8F750FAB,0xAA794130], //D4DJ Groovy Mix (Android) music_5050076
    [0x3C68E810,0x2DBEC720], //D4DJ Groovy Mix (Android) music_5050077
    [0xF653B47B,0xC8D4D1CD], //D4DJ Groovy Mix (Android) music_5050079
    [0xB50F4821,0x49140FDA], //D4DJ Groovy Mix (Android) music_5050080
    [0xD61CC4E1,0x4E7073F4], //D4DJ Groovy Mix (Android) music_5050081
    [0xFBA77B71,0x7E43A39A], //D4DJ Groovy Mix (Android) music_5050082
    [0x85A236B5,0x270BAC29], //D4DJ Groovy Mix (Android) music_5050083
    [0x818D37D3,0x19D4C177], //D4DJ Groovy Mix (Android) music_5050084
    [0xC16FB31C,0x74EB5E59], //D4DJ Groovy Mix (Android) music_5050085
    [0x598E133E,0x0673B1E6], //D4DJ Groovy Mix (Android) music_5050086
    [0x4CB2E810,0x1DF88D6F], //D4DJ Groovy Mix (Android) music_5050087
    [0x3F8ABFCD,0x47711BE2], //D4DJ Groovy Mix (Android) music_5050088
    [0xCDB3F9ED,0xBD51012F], //D4DJ Groovy Mix (Android) music_5050089
    [0xA28C9867,0xB32A60E1], //D4DJ Groovy Mix (Android) music_5050090
    [0xB1E06CF5,0xF6A790C2], //D4DJ Groovy Mix (Android) music_5050091
    [0xCFB9A7E6,0x4443E95C], //D4DJ Groovy Mix (Android) music_5050093
    [0xF9EF74AC,0x89BDFB7D], //D4DJ Groovy Mix (Android) music_5050094
    [0x561E1E17,0xDFB055CE], //D4DJ Groovy Mix (Android) music_5050095
    [0x46967C2B,0xC5D4D050], //D4DJ Groovy Mix (Android) music_5050096
    [0xDCDAEB30,0x67868AD9], //D4DJ Groovy Mix (Android) music_5050097
    [0x18FAB58C,0x80C85580], //D4DJ Groovy Mix (Android) music_5050098
    [0xBA4484D8,0x24FB61AF], //D4DJ Groovy Mix (Android) music_5050099
    [0xB70FE5C5,0xE12C7A1C], //D4DJ Groovy Mix (Android) music_5050100
    [0x7F5D26BA,0x72161054], //D4DJ Groovy Mix (Android) music_5050101
    [0x79C1F27F,0xA0F8C937], //D4DJ Groovy Mix (Android) music_5050103
    [0xE1E4F912,0x5646AA8A], //D4DJ Groovy Mix (Android) music_5050104
    [0xD5CF3CE5,0x81C59E40], //D4DJ Groovy Mix (Android) music_5050105
    [0x5509E33B,0xC008BF09], //D4DJ Groovy Mix (Android) music_5050106
    [0x5ECB21AC,0x94AA4B8F], //D4DJ Groovy Mix (Android) music_5050107
    [0x3786B394,0x0E98628A], //D4DJ Groovy Mix (Android) music_5050108
    [0x54DE3943,0x4BFE4F07], //D4DJ Groovy Mix (Android) music_5050109
    [0x919D24CC,0x51244387], //D4DJ Groovy Mix (Android) music_5050110
    [0x9D020E39,0x5E34DC9D], //D4DJ Groovy Mix (Android) music_5050111
    [0x35CD0DF4,0x18D118D7], //D4DJ Groovy Mix (Android) music_5050112
    [0xF8C3EE3E,0x6A9034F1], //D4DJ Groovy Mix (Android) music_5050113
    [0x77878D37,0xCE7AF3DE], //D4DJ Groovy Mix (Android) music_5050114
    [0xC017329B,0x350ECE41], //D4DJ Groovy Mix (Android) music_5050115
    [0xF593A4ED,0xFF474F67], //D4DJ Groovy Mix (Android) music_5050116
    [0xE1972FBB,0x1F007DDB], //D4DJ Groovy Mix (Android) music_5050117
    [0xFED8DE60,0x81BB79A4], //D4DJ Groovy Mix (Android) music_5050118
    [0x4877977D,0x05B312F3], //D4DJ Groovy Mix (Android) music_5050119
    [0x7EAA69DE,0x94E0EFF1], //D4DJ Groovy Mix (Android) music_5050120
    [0xEE1270B0,0xECF19FA9], //D4DJ Groovy Mix (Android) music_5050121
    [0x194E2CF7,0x9077C167], //D4DJ Groovy Mix (Android) music_5050122
    [0x9DBFAFD7,0x8A550632], //D4DJ Groovy Mix (Android) music_5050123
    [0xF95B5BBF,0x7E04F6F7], //D4DJ Groovy Mix (Android) music_5050124
    [0x72EAB426,0xF4800CDF], //D4DJ Groovy Mix (Android) music_5050125
    [0x0FBAAA06,0x3A92E3FA], //D4DJ Groovy Mix (Android) music_5050126
    [0x1B837C9A,0x98B7D123], //D4DJ Groovy Mix (Android) music_5050127
    [0x94F28E18,0x1640E219], //D4DJ Groovy Mix (Android) music_5050128
    [0x5D931D29,0xD1432B4C], //D4DJ Groovy Mix (Android) music_5050129
    [0xC50B5E9A,0x5ADCAAE4], //D4DJ Groovy Mix (Android) music_5050130
    [0xEB779668,0x4409ADFA], //D4DJ Groovy Mix (Android) music_5050131
    [0x13EF1128,0x9CF31DAD], //D4DJ Groovy Mix (Android) music_5050132
    [0xD446D0EA,0x96DFDF76], //D4DJ Groovy Mix (Android) music_5050133
    [0x04C56EC4,0xE341A717], //D4DJ Groovy Mix (Android) music_5050134
    [0x82523F63,0x86D6A38A], //D4DJ Groovy Mix (Android) music_5050135
    [0x520868BA,0xFA84E471], //D4DJ Groovy Mix (Android) music_5050136
    [0x7AAB4382,0x9C6BE9BE], //D4DJ Groovy Mix (Android) music_5050137
    [0xA00273B3,0xD953E84D], //D4DJ Groovy Mix (Android) music_5050138
    [0x6B3EEB4D,0xEBF6A39C], //D4DJ Groovy Mix (Android) music_5050139
    [0xA679E86E,0xD8E96691], //D4DJ Groovy Mix (Android) music_5050140
    [0x39902539,0x0570EA40], //D4DJ Groovy Mix (Android) music_5050141
    [0xB8489D19,0x21C79D9E], //D4DJ Groovy Mix (Android) music_5050142
    [0xB47249CC,0xC6C7528B], //D4DJ Groovy Mix (Android) music_5050143
    [0xEC5880DA,0xA44D87CE], //D4DJ Groovy Mix (Android) music_5050145
    [0xBDA2730C,0xB81E55E1], //D4DJ Groovy Mix (Android) music_5050146
    [0x1BE3E825,0x5DDE31E3], //D4DJ Groovy Mix (Android) music_5050147
    [0x58B735F1,0xA68C9A81], //D4DJ Groovy Mix (Android) music_5050148
    [0x5B3CB281,0xD89019DB], //D4DJ Groovy Mix (Android) music_5050149
    [0x2B1A0269,0xA3D890D4], //D4DJ Groovy Mix (Android) music_5050151
    [0x74E058FD,0x628364C9], //D4DJ Groovy Mix (Android) music_5050152
    [0x3ADE68D4,0x857395C0], //D4DJ Groovy Mix (Android) music_5050153
    [0x68F7F556,0xAF1C2FC6], //D4DJ Groovy Mix (Android) music_5050154
    [0xAF67059D,0xAAC6C89D], //D4DJ Groovy Mix (Android) music_5050155
    [0xC557FA24,0xC5C887E8], //D4DJ Groovy Mix (Android) music_5050156
    [0xBAD0B0F6,0xDC3B004C], //D4DJ Groovy Mix (Android) music_5050157
    [0x1838300A,0x8BB9B8FF], //D4DJ Groovy Mix (Android) music_5050158
    [0xFFB4AFE3,0x8BB4A3DD], //D4DJ Groovy Mix (Android) music_5050159
    [0x22CFB3E2,0x9832A25A], //D4DJ Groovy Mix (Android) music_5050160
    [0xA86BBFE3,0x5949B53E], //D4DJ Groovy Mix (Android) music_5050161
    [0x6F321ADD,0xE08396E3], //D4DJ Groovy Mix (Android) music_5050163
    [0x58AFA638,0x1EEB1425], //D4DJ Groovy Mix (Android) music_5050164
    [0x751DAF7D,0x1A5401CB], //D4DJ Groovy Mix (Android) music_5050165
    [0xBD6B6682,0x3F854F68], //D4DJ Groovy Mix (Android) music_5050167
    [0xCEB902B9,0x3EBA45D8], //D4DJ Groovy Mix (Android) music_5050168
    [0x2550E145,0xB93723AE], //D4DJ Groovy Mix (Android) music_5050169
    [0xB512188A,0x55B8B698], //D4DJ Groovy Mix (Android) music_5050170
    [0x26E5BF2C,0x66A9898D], //D4DJ Groovy Mix (Android) music_5050171
    [0xD93D0A17,0x64E85D4D], //D4DJ Groovy Mix (Android) music_5050176
    [0x59EFD868,0x058A402E], //D4DJ Groovy Mix (Android) music_5050178
    [0x93075C0F,0xBB31F463], //D4DJ Groovy Mix (Android) music_5050179
    [0xDEDB6AE5,0x18FAAC3D], //D4DJ Groovy Mix (Android) music_5050180
    [0xE997EDAE,0x32A5FA3D], //D4DJ Groovy Mix (Android) music_5050181
    [0xE19E00AE,0xBC8B309B], //D4DJ Groovy Mix (Android) music_5050182
    [0x10574A2A,0xBFE8AB99], //D4DJ Groovy Mix (Android) music_5050183
    [0xBD2F4B5A,0xB481D300], //D4DJ Groovy Mix (Android) music_5050184
    [0x1A253C2F,0x40A38917], //D4DJ Groovy Mix (Android) music_5050185
    [0xC735E9F2,0x8243EA8A], //D4DJ Groovy Mix (Android) music_5050186
    [0x52C250EA,0xDE92393B], //D4DJ Groovy Mix (Android) music_9010001
    [0xF66E6BB5,0xB0599B07], //D4DJ Groovy Mix (Android) music_9010002
    [0x8582B5A6,0x0DBBF948], //D4DJ Groovy Mix (Android) music_9010003
    [0xFEA0D6AD,0xFF136868], //D4DJ Groovy Mix (Android) music_9050001
    [0x19480B94,0x6279507A], //D4DJ Groovy Mix (Android) music_9050002
    [0x6E6FDF59,0xAB704242], //Mini 4WD Hyper Dash Grand Prix (Android)
    [0x00014FCB,0xC385AF6F], //m HOLD'EM (Android)
    [0x000712DC,0x5250B6F7], //Sonic Colors Ultimate (multi)
    [0x003295F7,0x198AE2AE], //ALTDEUS: Beyond Chronos (PC) bgm
    [0x003295F7,0x198AE2C2], //ALTDEUS: Beyond Chronos (PC) se
    [0x003295F7,0x198AE2B8], //ALTDEUS: Beyond Chronos (PC) voice
    [0x00C1FF73,0x963BD6EE], //SHOW BY ROCK!! Fes A Live (Android)
    [0x00141711,0x9B4FD22B], //Touhou Danmaku Kagura (Android)
    [0x0DAA20C3,0x36EEAE72], //Nogizaka 46 Fractal (Android)
    [0x00BD86C0,0xEE8C7342], //NEO: The World Ends With You (PC)
    [0x1E03B570,0xB6145D1D], //THE iDOLM@STER Starlit Season BGM
    [0x1DA915AA,0xA181A461], //THE iDOLM@STER Starlit Season SE
    [0x1C82B6AB,0x7487A5EC], //THE iDOLM@STER Starlit Season Voice
    [0x6D275D36,0x66C2F9C8], //THE iDOLM@STER Starlit Season Sng001
    [0x0F53815D,0xF3044E6D], //THE iDOLM@STER Starlit Season Sng002
    [0x158778E2,0xE2FAB347], //THE iDOLM@STER Starlit Season Sng003
    [0x16B75E8B,0x5247D46B], //THE iDOLM@STER Starlit Season Sng004
    [0x157DF8A6,0x047048FC], //THE iDOLM@STER Starlit Season Sng005
    [0x184D358B,0x50B658D0], //THE iDOLM@STER Starlit Season Sng006
    [0x157FB75A,0xF4DDD983], //THE iDOLM@STER Starlit Season Sng007
    [0x404BA38C,0x3E470827], //THE iDOLM@STER Starlit Season Sng008
    [0x01D0B788,0xA3B60D48], //THE iDOLM@STER Starlit Season Sng009
    [0x021718D5,0x5D0960C9], //THE iDOLM@STER Starlit Season Sng010
    [0x0021C599,0x3D2B901C], //THE iDOLM@STER Starlit Season Sng011
    [0x08237BCB,0x9B711087], //THE iDOLM@STER Starlit Season Sng012
    [0x01AF6040,0x2E1228A5], //THE iDOLM@STER Starlit Season Sng013
    [0x4EEC18AB,0x73A1A634], //THE iDOLM@STER Starlit Season Sng014
    [0x18550998,0x98B11AD9], //THE iDOLM@STER Starlit Season Sng015
    [0x57EF8F2E,0xA5D54DB5], //THE iDOLM@STER Starlit Season Sng016
    [0x17CC6975,0xD67E2A1F], //THE iDOLM@STER Starlit Season Sng017
    [0x0A5D0FC8,0xCC5C4502], //THE iDOLM@STER Starlit Season Sng018
    [0x198EA1A1,0x7416050B], //THE iDOLM@STER Starlit Season Sng019
    [0x2AA3B8AB,0xAD207A1E], //THE iDOLM@STER Starlit Season Sng020
    [0x4EE10A3E,0x3BB19E57], //THE iDOLM@STER Starlit Season Sng021
    [0x08AD2FE1,0x2C79BCA9], //THE iDOLM@STER Starlit Season Sng022
    [0x18488992,0xB1632EF5], //THE iDOLM@STER Starlit Season Sng023
    [0x1175EDBB,0xACC1FC18], //THE iDOLM@STER Starlit Season Sng024
    [0x0E14D06D,0x7F7A6C8C], //THE iDOLM@STER Starlit Season Sng025
    [0x33D98A3A,0x9F9BFDEF], //THE iDOLM@STER Starlit Season Sng026
    [0x2284FD5C,0xA82C78F4], //THE iDOLM@STER Starlit Season Sng027
    [0x178A76B6,0x436D20F0], //THE iDOLM@STER Starlit Season Sng028
    [0x3FF99F2F,0xED65A1ED], //THE iDOLM@STER Starlit Season Sng030
    [0x00000000,0x0134172E], //Ulala: Idle Adventure (Android)
    [0x0000BF32,0x3EBFE0BA], //Girls' Frontline: Project Neural Cloud (Android)
    [0x0017ECFB,0x5201069A], //Super Robot Wars 30 (PC)
    [0x0074FF1F,0xCE264700], //CHUNITHM NEW (AC)
    [0x00000179,0x54022A6F], //Shaman King: Funbari Chronicle (Android)
    [0x6615518E,0x8ECED447], //Heaven Burns Red (Android)
    [0x007BAB95,0x59510100], //Digimon ReArise (Android)
    [0x04DFA8EE,0xEE4903F8], //ANNO: Mutationem (PC)
    [0x0000002B,0x3CEB7781], //Priconne! Grand Masters (iOS/Android)
    [0x000712DC,0x525289CF], //Sonic Origins (multi)
    [0x0007E319,0x291DBE8A], //Pachislot Gyakuten Saiban (iOS/Android)
    [0x00000000,0x06AE5AD9], //Alice Fiction (Android)
    [0x00BAA8AF,0x36327EE6], //Taiko no Tatsujin: Rhythm Festival (Switch)
    [0x04D6CEF0,0x656BF6CF], //Fairy Fencer F: Refrain Chord (multi)
    [0x0F213F15,0x3D026E5F], //Echoes of Mana (Android)
    [0x00234168,0x3D2FDBA6], //Persona 5 Royal (Switch)
    [0x00000000,0x05D1FE07], //P Sengoku Otome 6 ~Akatsuki no Sekigahara~ (Android)
    [0x0076C19B,0xDE43685C], //CHUNITHM International Version (AC)
    [0x00F2AE8D,0xE77F0800], //Star Ocean: The Divine Force (PC)
    [0x3CDD0995,0x259D604C], //Sin Chronicle (Android)
    [0x70A10742,0x24880050], //The Eminence in Shadow: Master of Garden (Android)
];

export default class HCACipher {
    static readonly defKey1 = 0x01395C51;
    static readonly defKey2 = 0x00000000;
    private cipherType = 0;
    private encrypt = false;
    private key1buf = new ArrayBuffer(4);
    private key2buf = new ArrayBuffer(4);
    private dv1: DataView;
    private dv2: DataView;
    private _table = new Uint8Array(256);
    private init1(): void {
        for (let i = 1, v = 0; i < 0xFF; i++) {
            v = (v * 13 + 11) & 0xFF;
            if (v == 0 || v == 0xFF) v = (v * 13 + 11) & 0xFF;
            this._table[i] = v;
        }
        this._table[0] = 0;
        this._table[0xFF] = 0xFF;
    }
    private init56(): void {
        let key1 = this.dv1.getUint32(0, true);
        let key2 = this.dv2.getUint32(0, true);
        if (!key1) key2--;
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
            if (a != 0 && a != 0xFF) this._table[t++] = a;
        }
        this._table[0] = 0;
        this._table[0xFF] = 0xFF;
    }
    private createTable(r: Uint8Array, key: number): void {
        let mul = ((key & 1) << 3) | 5;
        let add = (key & 0xE) | 1;
        let t = 0;
        key >>= 4;
        for (let i = 0; i < 0x10; i++) {
            key = (key * mul + add) & 0xF;
            r[t++] = key;
        }
    }
    invertTable(): HCACipher {
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
            if (bitMap[higher4] & flag) throw new Error("_table is not bijective");
            // update table
            this._table[key] = val;
        }
        return this;
    }
    getType(): number {
        return this.cipherType;
    }
    getEncrypt(): boolean {
        return this.encrypt;
    }
    getBytesOfTwoKeys(): Uint8Array {
        let buf = new Uint8Array(8);
        buf.set(new Uint8Array(this.key1buf), 0);
        buf.set(new Uint8Array(this.key2buf), 4);
        return buf;
    }
    private static bigUintMultiplyLE(dv: DataView, factor: number): DataView {
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
                        if (v > 0) v /= 0x100;
                        else break;
                    }
                }
            });
        return result;
    }
    static mixWithSubkey(key1: any, key2: any, subkey: any): { key1: number, key2: number } {
        // https://github.com/vgmstream/vgmstream/blob/84cfeaf993982b4245ce7593dcbb6816c5aee8bc/src/coding/hca_decoder.c#L313
        /*
            if (subkey) {
                keycode = keycode * ( ((uint64_t)subkey << 16u) | ((uint16_t)~subkey + 2u) );
            }
        */

        if (subkey == null) return { key1: key1, key2: key2 };

        key1 = HCACipher.parseKey(key1);
        key2 = HCACipher.parseKey(key2);
        subkey = HCACipher.parseKey(subkey);

        const keydv = new DataView(new ArrayBuffer(8));
        keydv.setUint32(0, key1, true);
        keydv.setUint32(4, key2, true);

        const subkeydv = new DataView(new ArrayBuffer(4));
        subkeydv.setUint16(2, subkey, true);
        if (subkeydv.getUint16(2) == 0) return { key1: key1, key2: key2 }; //unchanged
        subkeydv.setUint16(0, ~subkeydv.getUint16(2, true) + 2, true);
        subkey = subkeydv.getUint32(0, true);

        const mixedkeydv = this.bigUintMultiplyLE(keydv, subkey);

        key1 = mixedkeydv.getUint32(0, true);
        key2 = mixedkeydv.getUint32(4, true);

        return { key1: key1, key2: key2 };
    }
    setKeys(key1: number, key2: number): HCACipher {
        this.dv1.setUint32(0, key1, true);
        this.dv2.setUint32(0, key2, true);
        this.init56();
        this.cipherType = 0x38;
        return this;
    }
    setToDefKeys(): HCACipher {
        return this.setKeys(HCACipher.defKey1, HCACipher.defKey2);
    }
    setToNoKey(): HCACipher {
        this.init1();
        this.cipherType = 0x01;
        return this;
    }
    mask(block: Uint8Array, offset: number, size: number): void {
        // encrypt or decrypt block data
        for (let i = 0; i < size; i++) block[offset + i] = this._table[block[offset + i]];
    }
    static isHCAHeaderMasked(hca: Uint8Array): boolean {
        // fast & dirty way to determine whether encrypted, not recommended
        if (hca[0] & 0x80 || hca[1] & 0x80 || hca[2] & 0x80) return true;
        else return false;
    }
    static parseKey(key: any): number {
        switch (typeof key) {
            case "number":
                return key;
            case "string":
                // avoid ambiguity: always treat as hex
                if (!key.match(/^0x/)) key = "0x" + key;
                key = parseInt(key);
                if (isNaN(key)) throw new Error("cannot parse as integer");
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
    constructor(key1?: any, key2?: any) {
        this.dv1 = new DataView(this.key1buf);
        this.dv2 = new DataView(this.key2buf);
        if (key1 == null) throw new Error("no keys given. use \"defaultkey\" if you want to use the default key");
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
                } else {
                    key2 = HCACipher.parseKey(key2);
                }
                this.setKeys(key1, key2);
        }
    }
}

export { HCAKnownKeys }
