halte = {}

window.onload =function(){
        var paper = Raphael(0,0,1200,963);
        //frame
        halte["kode"] = paper.rect(0,0,1200,963)
          .attr({
            stroke:"black",
            'stroke-width':3
          });
        var koridorwidth = 1;
        //Harmoni
        var HarmoniL =377;
        var HarmoniT =195;
        
        halte["kode"] = paper.rect(377,195,50,50,[5])
          .attr({'stroke-width':2
                })
          .toFront();
        
        //Koridor 1
        paper.path("M399 90V 195"+"M399 245V 670"+"M401 90V195"+"M401 245 V670")
          .attr({
            stroke:"#ff001c",
            'stroke-width':koridorwidth
          });
        
        //Koridor 2
        paper.path("M427 232 H500 L520 252 H580 L620 292 H643"+
                   "M655 298 H958"+
                   "M655 296 H958"+
                   "M643 299 H435 L414 278 V245")
          .attr({stroke:"#002b81",
                 'stroke-width':koridorwidth
                });
        
        //Koridor 2A
        paper.path("M407 625 V265 L442 235 H498 L518 255 H578 L618 295 H643"+
                   "M655 303 H958"+
                   "M409 625 V305 H958")
          .attr({stroke:"#0daad3",
                 'stroke-width':koridorwidth
                });
        
        
        //Koridor 2B
        paper.path("M20 209 H377"+
                   "M20 211 H377"+
                   "M427 229 H502 L522 249 H582 L622 289 H643"+
                   "M655 289 H958"+
                   "M655 291 H958"+
                   "M643 302 H433 L410 279 V245")
          .attr({stroke:"#3ee709",
                 'stroke-width':koridorwidth})
          
          //Koridor 3
          paper.path("M20 216 H377"+
                     "M427 208 H575"+
                     "M20 218 H377"+
                     "M427 210 H575")
            .attr({stroke:"#eeb113",
                   'stroke-width':koridorwidth})
            .toBack();
        
        //Koridor 3A
        paper.path("M20 223 H377"+
                   "M20 225 H377"+
                   "M391 245 V625"+
                   "M393 245 V625")
          .attr({stroke:"#46007a",
                 'stroke-width':koridorwidth})
          .toBack();
        
        //Koridor 4
        paper.path("M423 430 H612 L662 380 H887 L957 320"+
                   "M423 432 H613 L663 382 H888 L957 323")
          .attr({'stroke-width':koridorwidth,
                 stroke:"#26075b"
                });
        
        //Koridor 5
        paper.path ("M631 40 V390 L681 440 V513"+
                    "M633 40 V390 L683 440 V490 L691 498 H752 V513 H681")
          .attr({stroke:"#a74b00",
                 'stroke-width':koridorwidth
                }); 
        
        //Koridor 5A      
        paper.path("M617 40 V200 H425"+
                   "M619 40 V190 H538 L 526 202 H425")
          .attr({stroke:"#88ae03",
                 'stroke-width':koridorwidth
                });
        
        
        //Koridor 6
        paper.path("M423 425 H480 V380 H515 V427 H482 V915"+
                   "M423 427 H480 V915")
          .attr({'stroke-width':koridorwidth,
                 stroke:"#269635" 
                });
        
        //Koridor 6A
        paper.path("M 383 273 V415 H473 V915"+
                   "M 385 273 V413 H475 V915")
          .attr({stroke:"#1bbb51",
                 'stroke-width':koridorwidth
                });
        
        //Koridor 6B
        paper.path("M487 915 V385 H520 V421 H612 L662 371 H888 L958 312"+
                   "M489 915 V423 H613 L663 373 H889 L958 315")
          .attr({'stroke-width':koridorwidth,
                 stroke:"#ff4e02"
                });
        
        //Koridor 7
        paper.path("M687 515 V925 L667 905 L685 887 V515 ")
          .attr({stroke:"#f5417a",
                 'stroke-width':koridorwidth
                });
        
        //Koridor 7A
        paper.path("M427 222 H595 L619 246 V390 L669 440 V490 L684 505 H744 V517 H709 L669 557 V750 L644 775"+
                   "M427 224 H565 L575 234 H605 L617 246 V390 L667 440 V670 L642 695 L667 720 V780")
          .attr({'stroke-width':koridorwidth,
                 stroke:"#49e0e2"
                });
        
        //Koridor 7B
        paper.path ("M626 40 V390 L676 440 V490 L687 501 H749 V521 H711 L676 556 V739 L642 773"+
                    "M624 40 V390 L674 440 V673 L652 695 L674 717 V780")
          .attr({stroke:"#ff6905",
                 'stroke-width':koridorwidth
                });
        
        //Koridor 8
        paper.path("M377 230 H208 V833 L186 851 L210 870 V232 H377")
          .attr({
            stroke:"magenta",
            'stroke-width':koridorwidth
          });
        
        //Koridor 8A
        paper.path("M295 256 L320 281 L354 240 H377"+
                   "M295 254 L320 279 L354 238 H377"+
                   "M427 216 H489"+
                   "M427 218 H489")
          .attr({stroke:"#52183b"
                })
          .toBack(); 
        
        //Koridor 9
        paper.path("M275 30 V248 L316 289 V526 H390 L492 628 H639 L665 654"+
                   "M277 30 V248 L318 289 V524 H391 L493 626 H639 L667 654"+
                   "M695 655 H725 V775 H780"+
                   "M780 777 H723 V728 L690 695 V655")
          .attr({stroke:"#225b54",
                 'stroke-width':koridorwidth})
          .toBack();
        
        //Koridor 9A
        paper.path("M283 267 L308 292 V533 H390 L490 633 H639 L660 654 V750 L640 770"+
                   "M285 267 L310 292 V531 H391 L491 631 H639 L662 654 V750 L642 770")
          .attr({stroke:"#6f7e05",
                 'stroke-width':koridorwidth
                });
        
        //Koridor 10
        paper.path("M756 56 H809 V320 L775 354 V638 L743 670 H682 V745 L647 780"+
                   "M756 58 H807 V320 L773 354 V638 L743 668 H680 V744 L645 779")
          .attr({stroke:"#6e0f00",
                 'stroke-width' :koridorwidth
                });
        
        //Koridor 11
        paper.path("M1100 535 H690 V485 H760 V533 H1100")
          .attr({stroke:"#204686",
                 'stroke-width':koridorwidth
                });
        
        
        //Koridor 12
        paper.path("M283 30 V45 H326 V80 H361 L366 89 H390"+
                   "M410 91 H640 V221 H692 L721 190 H776 V237 H804 V61 H756"+
                   "M756 V63 H802 V188 H721 L692 219 H642 V89 H410"+
                   "M390 91 H281 V30")
          .attr({stroke:"#23a93e",
                 'stroke-width' :koridorwidth
                });
        
        
        
        
        
        var font = 7;
        
        
        
        
        
        //Sawah Besar
        halte["Sawah Besar"] = paper.circle(400,175,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(410,175,'Sawah Besar')
          .attr({'font-size':font,
                 'text-anchor':"start"});
        
        //Mangga Besar
        halte["kode"] = paper.circle(400,153,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(410,153,'Mangga Besar')
          .attr({'font-size':font,
                 'text-anchor':"start"});
        //Olimo
        halte["kode"] = paper.circle(400,131,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(410,131,'Olimo')
          .attr({'font-size':font,
                 'text-anchor':"start"});
        //Glodok
        halte["kode"] = paper.circle(400,109,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(410,109,'Glodok')
          .attr({'font-size':font,
                 'text-anchor':"start"});
        
        //Grogol 1
        halte["kode"] = paper.rect(300,200,13,40)
          .attr({fill:"white",
                 'stroke-width':2});
        
        //Grogol 2
        halte["kode"] = paper.rect(270,261,28.284,14.142)
          .attr({fill:"white",
                 'stroke-width':2})
          .transform("t0,0r-45,270,261t0,0");
        
        //Grogol 1/Grogol 2
        paper.path("M300 200 H313 V240 H303 L296 247 L300 251 L280 271 L270 261 L290 241 L294 245 L299 240 H 297 V200 H300 z")
          .attr ({fill:"white",
                  'stroke-width':1.5,
                 });
        
        //Lebak Bulus
        halte["kode"] = paper.circle(209,870,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(218,870,'Lebak Bulus')
          .attr({'font-size':font,
                 'text-anchor':"start"});
        
        //Pondok Pinang
        halte["kode"] = paper.circle(186,851,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(177,851,'Pondok Pinang')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        
        //Pondok Indah 1
        halte["kode"] = paper.circle(209,833,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(218,833,'Pondok Indah 1')
          .attr({'font-size':font,
                 'text-anchor':"start"});
        
        //Pondok Indah 2
        halte["kode"] = paper.circle(209,790,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(200,790,'Pondok Indah 2')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        
        //Tanah Kusir Kodim
        halte["kode"] = paper.circle(209,747,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(200,747,'Tanah Kusir Kodim')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        //Kebayoran Lama Bungur
        halte["kode"] = paper.circle(209,704,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(200,704,'Kebayoran Lama Bungur')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        //Ps. Kebayoran Lama
        halte["kode"] = paper.circle(209,661,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(200,661,'Ps. Kebayoran Lama')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        //Simprug
        halte["kode"] = paper.circle(209,618,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(200,618,'Simprug')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        //Permata Hijau
        halte["kode"] = paper.circle(209,575,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(200,575,'Permata Hijau')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        //Permata Hijau Rs. Medika
        halte["kode"] = paper.circle(209,532,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(200,532,'Permata Hijau Rs. Medika')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        //Pos Pengumben
        halte["kode"] = paper.circle(209,489,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(200,489,'Pos Pengumben')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        //Kelapa Dua Sasak
        halte["kode"] = paper.circle(209,446,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(200,446,'Kelapa Dua Sasak')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        //Kebon Jeruk
        halte["kode"] = paper.circle(209,403,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(200,403,'Kebon Jeruk')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        //Duri Kepa
        halte["kode"] = paper.circle(209,360,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(200,360,'Duri Kepa')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        //Kedoya Assiddiqiyah
        halte["kode"] = paper.circle(209,317,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(200,317,'Kedoya Assiddiqiyah')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        //Kedoya Green Garden
        halte["kode"] = paper.circle(209,274,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(200,274,'Kedoya Green Garden')
          .attr({'font-size':font,
                 'text-anchor':"end"});
        
        
        //Kalideres-Jelambar
        for (var i=0;i<8;i+=1){
          var multiplier = i*26
              halte["kode"] = paper.rect((19+multiplier),207,8,20,[5])
                .attr({
                  fill:"white",
                  'stroke-width':2
                });
        }
        
        for (var i=1;i<3;i+=1){
          var multiplier = i*26
              halte["kode"] = paper.rect((202+multiplier),207,8,27,[5])
                .attr({
                  fill:"white",
                  'stroke-width':2
                });
        }
        
        //RS. Sumber Waras
        halte["kode"] = paper.rect(340,207,8,20,[5])
          .attr({
            fill:"white",
            'stroke-width':2
          });
        
        //Pluit
        halte["kode"] = paper.rect(268,24,22,10,[5])
          .attr({fill:"white",
                 'stroke-width':2
                });
        //Pluit Landmark Auto Plaza
        halte["kode"] = paper.circle(305,45,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        
        //Pakin
        halte["kode"] = paper.circle(326,55,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        
        //Gedong Panjang
        halte["kode"] = paper.circle(326,72,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        
        //Museum Fatahillah
        halte["kode"] = paper.circle(340,80,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        
        //Kali Besar Barat
        halte["kode"] = paper.circle(355,91,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        
        //Bandengan Pekojan
        halte["kode"] = paper.circle(315,91,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        
        //Kota
        halte["kode"] = paper.rect(390,85,20,10,[5])
          .attr({fill:"white",
                 'stroke-width':2
                });
        paper.text(400,78,'Kota')
          .attr({'font-size':7});
        
        //S.Parman Podomoro City
        halte["kode"] = paper.rect(287,279,31,10,[5])
          .attr({fill:"white",
                 'stroke-width':2})
          .transform("t0,0r-45,287,279t0,0");
        
        
        //Senen Sentral
        halte["kode"] = paper.rect(629,270,8,10)
          .attr({fill:"white",
                 'stroke-width':2
                });
        
        //Senen
        halte["kode"] = paper.rect(640,280,15,33)
          .attr({fill:"white",
                 'stroke-width':2
                });
        
        //Senen Sentral/Senen
        paper.path("M629 270 H637 V277 L640 280 H655 V313 H640 V284 L636 280 H629 V270 z")
          .attr({fill:"white",
                 'stroke-width':1.5
                });
        
        //BNN
        halte["kode"] = paper.rect(655,650,40,10,[5])
          .attr({fill:"white",
                 'stroke-width':2
                });
        
        //Tomang Mandala-Petojo
        halte["kode"] = paper.circle(330,268,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        
        halte["kode"] = paper.circle(340,256,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        
        halte["kode"] = paper.circle(350,244,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        
        
        //RS. Harapan Kita-Slipi Petamburan
        halte["kode"] = paper.rect(303,324,20,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"});
        halte["kode"] = paper.rect(303,356,20,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"});
        halte["kode"] = paper.rect(303,388,20,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"});
        
        //Senayan JCC      
        halte["kode"] = paper.rect(303,510,20,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"});
        //Semanggi
        halte["kode"] = paper.rect(360,513,20,30)
          .attr({'stroke-width':2,
                 fill:"white"});
        
        //Bendungan Hilir
        halte["kode"] = paper.rect(385,500,30,17)
          .attr({'stroke-width':2,
                 fill:"white"});
        
        //Semanggi/Bendungan Hilir
        paper.path("M360 513 H385 V500 H415 V517 H380 V543 H360 V513 z")
          .attr({fill:"white",
                 'stroke-width':1.5
                });
        
        
        //Monas
        halte["kode"] = paper.rect(378,266,41,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        paper.text(432,271,'Monas')
          .attr({'font-size':7});
        
        //Bank Indonesia
        halte["kode"] = paper.rect(378,300,43,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        paper.text(363,305,'Bank\nIndonesia')
          .attr({'font-size':7});
        //Sarinah
        halte["kode"] = paper.rect(378,325,37,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        paper.text(430,330,'Sarinah')
          .attr({'font-size':7});
        
        //Bundaran HI
        halte["kode"] = paper.rect(378,350,37,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        paper.text(437,355,'Bundaran HI')
          .attr({'font-size':7});
        //Tosari ICBC
        halte["kode"] = paper.rect(388,375,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        paper.text(435,380,'Tosari ICBC')
          .attr({'font-size':7});
        
        //Setiabudi
        halte["kode"] = paper.rect(388,450,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        paper.text(370,455,'Setiabudi')
          .attr({'font-size':7});
        
        //Karet
        halte["kode"] = paper.rect(388,475,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        paper.text(375,480,'Karet')
          .attr({'font-size':7});
        
        //Polda Metro Jaya
        halte["kode"] = paper.rect(388,565,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        paper.text(358,570,'Polda Metro Jaya')
          .attr({'font-size':7});
        
        //Gelora Bung Karno
        halte["kode"] = paper.rect(388,590,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        paper.text(365,595,'Gelora\nBung Karno')
          .attr({'font-size':7});
        
        //Bundaran Senayan
        halte["kode"] = paper.rect(388,615,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        paper.text(365,620,'Bundaran\nSenayan') 
          .attr({'font-size':7});
        
        //Masjid Agung
        halte["kode"] = paper.circle(400,643,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(370,643,'Masjid Agung')
          .attr({'font-size':7});
        
        //Blok M
        halte["kode"] = paper.circle(400,665,5.5)
          .attr({fill:"white",
                 'stroke-width':2});
        paper.text(380,665,'Blok M')
          .attr({'font-size':7});
        
        
        //Dukuh Atas 1
        halte["kode"] = paper.rect(388,421,25,16)
          .attr({fill:"white",
                 'stroke-width':2});
        //Dukuh Atas 2
        halte["kode"] = paper.rect(420,421,10,16)
          .attr({fill:"white",
                 'stroke-width':2});
        
        
        //Dukuh Atas 1/Dukuh Atas 2
        paper.path("M388 421 H413 V428 H420 V421 H430 V437 H420 V431 H413 V437 H388 V420 z")
          .attr({fill:"white",
                 'stroke-width':1.5});
        
        //Ragunan
        halte["kode"] = paper.rect(470,915,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Departemen Pertanian
        halte["kode"] = paper.rect(470,890,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //SMK 57
        halte["kode"] = paper.rect(470,865,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Jatipadang
        halte["kode"] = paper.rect(470,840,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pejaten
        halte["kode"] = paper.rect(470,815,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Buncit Indah
        halte["kode"] = paper.rect(470,790,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Warung Jati
        halte["kode"] = paper.rect(470,765,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Imigrasi
        halte["kode"] = paper.rect(470,740,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Duren Tiga
        halte["kode"] = paper.rect(470,715,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Mampang Prapatan
        halte["kode"] = paper.rect(470,690,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Patra Kuningan
        halte["kode"] = paper.rect(470,570,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Departemen Kesehatan
        halte["kode"] = paper.rect(470,545,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //GOR Sumantri
        halte["kode"] = paper.rect(470,520,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Karet Kuningan
        halte["kode"] = paper.rect(470,495,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Kuningan Madya
        halte["kode"] = paper.rect(470,470,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Setiabudi Utara AINI
        halte["kode"] = paper.rect(470,445,22,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Tanjung Priok
        halte["kode"] = paper.rect(756,50,10,20,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Enggano
        halte["kode"] = paper.rect(780,50,10,20,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Permai Koja
        halte["kode"] = paper.rect(796,75,20,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Walikota Jakarta Utara
        halte["kode"] = paper.rect(796,105,20,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Plumpang Pertamina
        halte["kode"] = paper.rect(796,135,20,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Sunter Kelapa Gading
        halte["kode"] = paper.rect(796,165,20,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Sunter Boulevard Barat
        halte["kode"] = paper.rect(796,215,20,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Yos Sudarso Kodamar
        halte["kode"] = paper.circle(808,250,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Cempaka Putih
        halte["kode"] = paper.circle(808,320,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pulomas Bypass
        halte["kode"] = paper.circle(791,337,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Kayu Putih Rawasari
        halte["kode"] = paper.circle(774,354,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Utan Kayu Rawamangun
        halte["kode"] = paper.circle(774,430,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Ahmad Yani Bea Cukai
        halte["kode"] = paper.circle(774,480,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pedati Prumpung
        halte["kode"] = paper.circle(774,570,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Cipinang Kebon Nanas
        halte["kode"] = paper.circle(774,600,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Penas Kalimalang
        halte["kode"] = paper.circle(774,630,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Cawang Sutoyo
        halte["kode"] = paper.rect(720,660,10,20,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Cawang UKI
        halte["kode"] = paper.rect(658,691,35,8,[4])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //BKN
        halte["kode"] = paper.rect(658,726,32,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //PGC 2
        halte["kode"] = paper.rect(640,763,23,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                })
          .transform("t0,0r45,635,760t0,0");
        //PGC 1
        halte["kode"] = paper.rect(663,780,29,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Ps. Kramat Jati
        halte["kode"] = paper.circle(686,805,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Ps. Induk Kramat Jati
        halte["kode"] = paper.circle(686,832,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //RS. Harapan Bunda
        halte["kode"] = paper.circle(686,857,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Flyover Raya Bogor
        halte["kode"] = paper.circle(686,887,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Kampung Rambutan
        halte["kode"] = paper.circle(686,925,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Tanah Merdeka
        halte["kode"] = paper.circle(667,905,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pinang Ranti
        halte["kode"] = paper.circle(780,776,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Garuda Taman Mini
        halte["kode"] = paper.circle(745,776,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Cawang Otista
        halte["kode"] = paper.rect(663,626,29,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Gelanggang Remaja
        halte["kode"] = paper.rect(663,601,29,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Bidara Cina
        halte["kode"] = paper.rect(663,576,29,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Kampung Melayu
        halte["kode"] = paper.rect(663,509,33,14,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pulogadung
        halte["kode"] = paper.rect(957,280,20,50,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Bermis
        halte["kode"] = paper.rect(925,285,10,24,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pulomas
        halte["kode"] = paper.rect(900,285,10,24,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //ASMI
        halte["kode"] = paper.rect(875,285,10,24,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pedongkelan
        halte["kode"] = paper.rect(850,285,10,24,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //RS. Islam
        halte["kode"] = paper.rect(775,285,10,24,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Cempaka Tengah
        halte["kode"] = paper.rect(750,285,10,24,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Ps. Cempaka Putih
        halte["kode"] = paper.rect(725,285,10,24,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Rawa Selatan
        halte["kode"] = paper.rect(700,285,10,24,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Galur
        halte["kode"] = paper.rect(675,285,10,24,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Kwitang
        halte["kode"] = paper.rect(525,291,10,20,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Gambir
        halte["kode"] = paper.rect(500,291,10,20,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Balaikota
        halte["kode"] = paper.rect(475,291,10,20,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Atrium
        halte["kode"] = paper.rect(598,272,14,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                })
          .transform("t0,0r-45,605,277t0,0");
        
        //RSPAD
        halte["kode"] = paper.rect(583,257,14,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                })
          .transform("t0,0r-45,590,262t0,0");
        
        //Deplu
        halte["kode"] = paper.rect(565,245,10,15,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Gambir 1
        halte["kode"] = paper.rect(543,245,10,15,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Istiqlal
        halte["kode"] = paper.rect(520,245,10,15,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Pecenongan
        halte["kode"] = paper.rect(458,195,10,45,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Juanda
        halte["kode"] = paper.rect(485,195,10,45,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Gatot Subroto LIPI
        halte["kode"] = paper.rect(420,570,18,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                })
          .transform("t0,0r-45,420,570t0,0");
        //Gatot Subroto Jamsostek
        halte["kode"] = paper.rect(440,590,18,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                }) 
          .transform("t0,0r-45,440,590t0,0");
        //Tegal Parang
        halte["kode"] = paper.rect(522,621,10,16,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pancoran Barat
        halte["kode"] = paper.rect(544,621,10,16,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                }); 
        //Pancoran Tugu
        halte["kode"] = paper.rect(566,621,10,16,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });  
        //Tebet BKPM
        halte["kode"] = paper.rect(588,621,10,16,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });  
        //Cikoko Stasiun Cawang
        halte["kode"] = paper.rect(610,621,10,16,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });  
        //Cawang Ciliwung
        halte["kode"] = paper.rect(632,621,10,16,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });  
        //Penjaringan
        halte["kode"] = paper.rect(270,55,17,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                }); 
        //Jembatan Tiga
        halte["kode"] = paper.circle(276,100,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                }); 
        //Jembatan Dua
        halte["kode"] = paper.circle(276,125,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                }); 
        //Jembatan Besi
        halte["kode"] = paper.circle(276,150,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                }); 
        //Latumenten Stasiun Grogol
        halte["kode"] = paper.circle(276,175,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                }); 
        
        //Pangeran Jayakarta
        halte["kode"] = paper.circle(470,90,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                }); 
        //Mangga Dua
        halte["kode"] = paper.circle(530,90,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                }); 
        
        //Ancol
        halte["kode"] = paper.rect(612,40,26,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                }); 
        //Pademangan
        halte["kode"] = paper.rect(612,65,26,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Gunung Sahari Mangga Dua
        halte["kode"] = paper.rect(612,100,35,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Jembatan Merah
        halte["kode"] = paper.rect(612,150,35,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Kemayoran Landas Pacu Timur
        halte["kode"] = paper.circle(665,220,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Danau Agung
        halte["kode"] = paper.circle(692,220,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //SMP 140
        halte["kode"] = paper.circle(721,189,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Sunter Karya
        halte["kode"] = paper.circle(750,189,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pasar Baru
        halte["kode"] = paper.rect(575,195,10,32,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Latuharhari
        halte["kode"] = paper.rect(497,372,10,20,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Pasar Baru Timur
        halte["kode"] = paper.rect(612,195,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Budi Utomo
        halte["kode"] = paper.rect(620,230,18,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Pal Putih
        halte["kode"] = paper.rect(613,320,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Kramat Sentiong NU
        halte["kode"] = paper.rect(613,340,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Salemba UI
        halte["kode"] = paper.rect(613,360,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Salemba Carolus
        halte["kode"] = paper.rect(613,380,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Tegalan
        halte["kode"] = paper.rect(660,430,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Slamet Riyadi
        halte["kode"] = paper.rect(663,450,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Kebon Pala
        halte["kode"] = paper.rect(663,470,25,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Pulogebang
        halte["kode"] = paper.circle(1100,534,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Walikota Jakarta Timur
        halte["kode"] = paper.circle(1075,534,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Penggilingan
        halte["kode"] = paper.circle(1050,534,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Perumnas Klender
        halte["kode"] = paper.circle(1025,534,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Flyover Radin Inten
        halte["kode"] = paper.circle(1000,534,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Buaran
        halte["kode"] = paper.circle(975,534,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Kampung Sumur
        halte["kode"] = paper.circle(950,534,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Flyover Klender
        halte["kode"] = paper.circle(925,534,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Stasiun Klender
        halte["kode"] = paper.circle(900,534,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Cipinang
        halte["kode"] = paper.circle(875,534,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Imigrasi Jakarta Timur
        halte["kode"] = paper.circle(850,534,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Ps. Enjo
        halte["kode"] = paper.circle(825,534,5.5)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Ps. Pulogadung
        halte["kode"] = paper.rect(937,323,18,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                })
          .transform("t0,0r45,937,323t0,0");
        //TU Gas
        halte["kode"] = paper.rect(917,340,18,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                })
          .transform("t0,0r45,917,340t0,0");
        //Layur
        halte["kode"] = paper.rect(897,358,18,10,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                })
          .transform("t0,0r45,897,358t0,0");
        //Pemuda Rawamangun
        halte["kode"] = paper.rect(870,366,10,21,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Velodrome
        halte["kode"] = paper.rect(845,366,10,21,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Sunan Giri
        halte["kode"] = paper.rect(820,366,10,21,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //UNJ
        halte["kode"] = paper.rect(795,366,10,21,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pramuka LIA
        halte["kode"] = paper.rect(725,366,10,21,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Utan Kayu
        halte["kode"] = paper.rect(700,366,10,21,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pasar Genjing
        halte["kode"] = paper.rect(675,366,10,21,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Manggarai
        halte["kode"] = paper.rect(580,415,10,22,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pasar Rumput
        halte["kode"] = paper.rect(555,415,10,22,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Halimun
        halte["kode"] = paper.rect(497,417,10,20,[5])
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Kuningan Timur
        halte["kode"] = paper.rect(471,590,22,10)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Kuningan Barat
        halte["kode"] = paper.rect(500,605,15,33)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Kuningan Timur/Kuningan Barat
        paper.path("M471 590 H493 V597 L503 605 H515 V638 H500 V608 L490 600 H471 V590 z")           .attr({'stroke-width':1.5,
                                                                                                            fill:"white"
                                                                                                           });
        
        //St. Jatinegara
        halte["kode"] = paper.rect(770,510,20,10)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Flyover Jatinegara
        halte["kode"] = paper.rect(790,530,10,10)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //St. Jatinegara/Flyover Jatinegara
        paper.path("M770 510 H790 V517 L793 530 H800 V540 H790 V533 L787 520 H770 V510 z")
          .attr({'stroke-width':1.5,
                 fill:"white"
                });
        
        //Pasar Jatinegara
        halte["kode"] = paper.rect(740,495,15,28)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //St. Jatinegara 2
        halte["kode"] = paper.rect(755,530,10,10)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Pasar Jatinegara/St. Jatinegara 2
        paper.path("M740 495 H755 V520 L758 530 H765 V540 H755 V533 L752 523 H740 V495 z")
          .attr({'stroke-width':1.5,
                 fill:"white"
                });
        //Cempaka Timur
        halte["kode"] = paper.rect(820,285,10,24)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Cempaka Mas 2
        halte["kode"] = paper.rect(800,270,20,10)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Cempaka Timur/Cempaka Mas 2
        paper.path("M800 270 H820 V277 L823 285 H830 V309 H820 V288 L817 280 H800 V270 z")
          .attr({'stroke-width':1.5,
                 fill:"white"
                });
        
        //Pramuka BPKP
        halte["kode"] = paper.rect(750,366,15,21)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pemuda Pramuka
        halte["kode"] = paper.rect(764,395,20,15)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        //Pramuka BPKP/Permuda Pramuka
        paper.path("M750 366 H765 V384 L767 395 H784 V410 H764 V398 L762 387 H750 V366 z")
          .attr({'stroke-width':1.5,
                 fill:"white"
                });
        
        //Matraman 2
        halte["kode"] = paper.rect(650,366,15,32)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Matraman 1
        halte["kode"] = paper.rect(640,410,25,12)
          .attr({'stroke-width':2,
                 fill:"white"
                });
        
        //Matraman 2/Matraman 1
        paper.path("M650 366 H665 V398 H659 V410 H665 V422 H640 V410 H656 V398 H650 V366 z")
          .attr({'stroke-width':1.5,
                 fill:"white"
                });
        
        
        
        
        
        
        
        
        
        
        
        
        
      };