var invocation = new XMLHttpRequest();
var url = 'http://img0.imgtn.bdimg.com/it/u=2723611465,1747019427&fm=26&gp=0.jpg';
   
function callOtherDomain() {
  if(invocation) {    
    invocation.open('GET', url, true);
    // invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}

callOtherDomain();