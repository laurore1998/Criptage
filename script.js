"use strict"

// let data = {
//    non: "Lub Lorry", // kle a ka san giymè
//    "siyati": "Lamysère", // kle a ka nan mitan giymè
//    "kou": "JavaScript",
//    total: 4, // valè a ka antye, oubyen nenpòt lòt tip done ki ekziste,
// }

// let moun = {
//   non: "Jean Bernard Thomas",
//   datKreye: Date.now(), //  Dat nan JavaScript
//   datNesans: new Date("1984-06-25"),
//   totalMen: 2,
//   totalPye: 2,
// }

// let dat = Date.now()
// alert(moun['datKreye']);
//
const balistik = {
  _alph: 'abcdefghijklmnopqrstuvwxyz',
  _salt: "Ux00",
  encrypt: function (str){

  			let a=[];
        let l,s,finish;
        let HYPHEN='U+002D',SPACE='U+0020';

          for(l of str){

                // if(this.isLower(l)){

                //     a.push(this._alph.indexOf(l));

                // }else{

                //     a.push(this.isUpper(l));                                

                // }
                      if(!this._alph.includes(l.toLowerCase()) && l!="-" && l!=" "){

                        return this.ValueError(l,"karaktè sa pa nan alfabè anglè a. ");
                                      
                      }else if(l=="-"){


                            a.push(HYPHEN);


                      }else if(l==" "){

                            a.push(SPACE);

                      }else{

                            this.isLower(l) ? a.push(this._alph.indexOf(l)) : a.push(this.isUpper(l));
                      }

              }

    a.unshift(this._salt);
    a.push(str.length);
    finish=a.join('.');

    return finish;

  },
ValueError: function(str,message){

      const error = new Error(`${str} : ${message}`);

      return error.message;
}
,
SaltError:function(message){

      const error = new Error(`${message}`);

      return error.message;
    
  }
  ,
LengthError:function(message){

        const error = new Error(`${message}`);

        return error.message;
}
,
  decrypt: function (str){

          let l;
          let i=[];
          let a=str.split('.');
          let HYPHEN='U+002D',SPACE='U+0020';


          a.shift();
          a.pop();
          //console.log(a);
          for(l of a ){

              if((l.length==3 || l[0]==0) && l.length==2){

                    i.push(this._alph[parseInt(l)].toUpperCase());

                }else if(l==HYPHEN){


                    i.push("-");


                }else if(l==SPACE){

                    i.push(" ");

                }else{
                      
                    i.push(this._alph[parseInt(l)]);
                }

            // this.islLower(l) ? i.push(this._alph[parseInt(l)]):i.push(this._alph[parseInt(l)].toUpperCase());
          }
            
            let k=i.join("")

          if(str.split('.')[0]!=this._salt){

                  
                    return this.SaltError("pwogram nan pa rekonet kriptaj sa");

              }else if(str.split('.')[str.split('.').length - 1]!=i.length){

                    return this.LengthError("longe yo pa koresponn");
              
              }
          

          return k;

  },
  isLower: function (letter){

//le mwen mete return nan li pa condition li poze let la en minis egal ak let la natirel, lap toujou retounen sam te defini nan return nan, sa ki vin koz fok mwen mete condition an
            if(letter.toLowerCase() === letter){

                return true;

            }else{

              return false;
            }
          },
  isUpper: function (letter){

            if(letter.toUpperCase() === letter){

                  return `0${this._alph.indexOf(letter.toLowerCase())}`;

                }else{

                  return letter;
                    }
          }

}
let va="ole - ola-Football";
let bal=balistik.encrypt(va);
console.log(balistik.encrypt(va));
//console.log(balistik.ValueError('l','ok'));
//console.log(balistik.isLower('n'))
console.log(balistik.decrypt(bal));
//console.log(bal);
//console.log(balistik.encrypt(va));
//console.log(balistik._alph[parseInt('0')].toUpperCase());
//console.log(balistik.decrypt("Ux00.13.8.2.14.3.4.12.7"));



// let _alph='abcdefghijklmnopqrstuvwxy';

// let al='ale';

// let a=[];
// let l;
// let _salt="Ux00";

// for(l of al){

// 	a+=_alph.indexOf(l)+"";

// }


// alert(a);



//alert(_alph.indexOf('a'));



