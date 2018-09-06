conf = {
  logo: '',
  errorPage: 'nomenu',
  webName: 'BoCai',
  title: 'BoCai',
  version: "v1.0.0",
  pwReg: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/ //密码正则表达式最少6位，包括至少1个大写字母，1个小写字母，1个数字
}

window.globalConfig = conf;

//window.url = 'http://47.106.13.12:8008';
window.url = ''; 						
//window.url = 'http://192.168.0.105:8888';

// window.login = 'http://login.jwis.cn';
// window.gateway = 'http://gateway.jwis.cn';

// window.gatewayspc = window.gateway+'/smartspc';		//云
//window.gatewayspc = '' 							//201跨域
//window.gatewayspc = 'http://192.168.1.201:8000';	//本地




