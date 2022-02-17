//main.js는 import함

// default로 하는 경우 임포트 {} 하지 않아도 사용 정의 가능 그외엔 해야함 필수임.
// {}를 사용하면 여러가지 import할수있음 - 당연히 그건 export가 걸려야지?
//import * as module from "./module/js"; -// 이런식으로 전체 export 도 가능
// 그러면 이 부분에 선언한 이름으로 사용 module.something

import { plus } from "./module.js";
import m from "./module.js";

console.log(plus());
console.log(m());
function run(){
    alert(111);
}

