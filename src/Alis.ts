'use strict';
type Buttons={
    up:string,
    right:string,
    down:string,
    left:string,

}
function getAction(btns:Buttons){
    console.log(`Action for button is ${btns.down}`)
    console.log(`Action for button is ${btns.up}`)
    console.log(`Action for button is ${btns.right}`)
    console.log(`Action for button is ${btns.left}`)
}
getAction({up: "go", right: "right", down: "down", left: "left"})