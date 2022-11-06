"use strict"
const balistik = {
  _alph: 'abcdefghijklmnopqrstuvwxyz',
  _salt: "Ux00",
  encrypt: function (str){

  			let a=[];
        let l,s,finish;
        let HYPHEN='U+002D',SPACE='U+0020';

          for(l of str){

                      if(!this._alph.includes(l.toLowerCase()) && l!="-" && l!=" "){

                        return this.ValueError(l,"the English alphabet does not contain this letter");
                                      
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
          }
            
            let k=i.join("")

          if(str.split('.')[0]!=this._salt){

                  
                    return this.SaltError("unacknowledged coding");

              }else if(str.split('.')[str.split('.').length - 1]!=i.length){

                    return this.LengthError("length does not match");
              
              }
          

          return k;

  },
  isLower: function (letter){
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



