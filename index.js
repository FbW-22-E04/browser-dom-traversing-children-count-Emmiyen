const wrapper = document.getElementById("wrapper");
Array.from(wrapper.children).forEach((item) => console.log(item.nodeName));
console.log(wrapper.children.length);
console.log(wrapper.childElementCount);
console.log(`----------------------------------------`);
Array.from(wrapper.children).forEach((item) => {
  console.log(`The Length is: ${item.childElementCount}`);
  Array.from(item.children).forEach((el) => {
    console.log(el.nodeName);
  });
});

function checkLength() {
    let result = 0;
    let element = [];
    let obj = {};
    let maxNum = 0;
    Array.from(wrapper.children).forEach((item) => {
      result += item.classList.length;
    });
    Array.from(wrapper.children).forEach((el) => {
      // console.log(el.classList.length);
      element.push(el.classList.length);
      // console.log(element);
      element.sort((a, b) => b - a);
      maxNum = element[0];
    });
    //   console.log(maxNum);
    obj.mostClasses = maxNum;
    obj.totalClasses = result;
    //   console.log(result);
    console.log(obj);
  }
  checkLength();
  
  
  
  
  
  
  
  
  
  