/* alert("this is an alter");
if(count = 3){
    alert("hi");
} */

//输出语句
//警告框
window.alert("this as alert");

//写入HTML，在浏览器展示
// document.write("this is dwrite");

//写入浏览器控制台
console.log("this is log");

//使用var 声明变量
//变量可以不同类型，但是不能数字开局
// //这个作用域比较大，全局变量
// {
//     var a = 20;
//     a = "张三";
// }
// //不论是不是在代码块定义，都是全局
// alert(a);
// //可以重复定义


/*
let 局部变量 不克重复定义 
 */

{
    let x = 3;
}
// alert(x);

/* 
const只读 一旦声明 不可改变
*/
const cx = 1;
// cx = 3;
document.write(cx);


