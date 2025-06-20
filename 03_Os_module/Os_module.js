const os= require("os");

// 1 get the os platform & user info
// returns the os platform (eg, win32,linux,darwin)

console.log("platform",os.platform());//platform win32
console.log("user:",os.userInfo());
// user: [Object: null prototype] {
//   uid: -1,
//   gid: -1,
//   username: 'mayanknautiyal',
//   homedir: 'C:\\Users\\mayanknautiyal',
//   shell: null
// }

//2 get the os cpu architecture
// returns the archi of the cpu(eg x64,arm,ia32)
console.log("cpu architecute:",os.arch());//cpu architecute: x64

//3.get free system memory
//return the amount of free system memory in bytes

console.log("Free memory:",os.freemem(),"bytes");//Free memory: 813072384 bytes

//4 get total system memory
// returns the total amount of system memory in bytes
console.log("total memory:",os.totalmem(),"bytes");//total memory: 7866454016 bytes

//5 get system upline
// return the system uptime in seconds
console.log("system uptime:",os.uptime(),"seconds");//system uptime: 178430.546 seconds

//6 get home directory
// returns the home directory of the current user
console.log("Home directory:",os.homedir());//Home directory: C:\Users\mayanknautiyal

//7 get host name
// returns the hostname of the os
console.log("host name:",os.hostname());//host name: Mayank

//8 get network interfaces
// returns info about the network about the network interfaces of the system
// *console.log("Network Interface:",os.networkInterfaces());

//9 get cpu infor
// returns an array of objects with details about each logical cpu/core
//* console.log("cpu info:",os.cpus());

//10 get temp directory
// returns the os default directory for temprory files
console.log("temprory directory:",os.tmpdir());
//temprory directory: C:\Users\MAYANK~1\AppData\Local\Temp

//11 get os name
// returns the os name as returned by unname(3).for ex,it returns linus on linus ,darwin in macos and window_nt on windows
console.log("os:",os.type());//os: Windows_NT