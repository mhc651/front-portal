webpackJsonp([5],{FVaO:function(e,r){},OgJW:function(e,r){},UhfL:function(e,r,t){e.exports=t.p+"static/img/bkm.234806c.png"},"Xx/s":function(e,r){},cFBI:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("3cXf"),o=t.n(s),n=t("4YfN"),a=t.n(n),i=t("9rMa"),c=t("2Uyi"),l={name:"Login",computed:a()({},Object(i.c)(["qcode"])),data:function(){return{tagsname:"name1",ca_error:"",post:!1,serRandom:123,sessionKey:"110",formInline:{user:"",password:"",code:""},code_error:"",login_error:"",ruleInline:{user:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},mounted:function(){this.sessionKey=this.mathRandow(),this.handleRefreshCode()},created:function(){this.toTabPane2()},methods:a()({},Object(i.b)(["getqcode","login","verifPicCode","getRandom","caLogins","getOrgStatus"]),{toTabPane2:function(){"ca"==this.$route.query.tag&&(this.tagsname="name2")},mathRandow:function(){for(var e=[],r=0;r<36;r++)e[r]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},handleRefreshCode:function(){document.getElementById("verify").src="/dws/pub/vcode/img?sessionKey ="+this.mathRandow()},loginInfo:function(){var e=this,r=c.a.reuuid();null==sessionStorage.getItem("uuid")&&sessionStorage.setItem("uuid",r),this.login({username:this.formInline.user,vcode:this.formInline.code,password:this.formInline.password}).then(function(r){if(r)switch(r.status){case"ORG_NOT_AUDIT_PASS":"HOS"==r.org_type?e.$router.push("/review?mode=1"):"DIS"==r.org_type&&e.$router.push("/review?mode");break;case"ORG_NOT_COMMIT_APPLY":"HOS"==r.org_type?e.$router.push("/register1?reset=1&flag=0"):"DIS"==r.org_type&&e.$router.push("/register?reset=1&flag=0");break;case"ORG_AUDIT_PASS":e.$router.push("/app");break;case"NOT_BINDING_CA":e.$router.push("/compBindCa")}},function(r){if(r)switch(r.errcode){case"NOT_BINDING_CA":e.$router.push("/compBindCa")}e.post=!1,e.login_error=r.errmsg,e.handleRefreshCode()})},handleSubmit:function(e){var r=this;this.$refs[e].validate(function(e){e&&(r.post=!0,r.verifPicCode({code:r.formInline.code}).then(function(e){e.success?r.loginInfo():(r.login_error=e.errmsg,r.post=!1)}))})},getCertBsf:function(){var e;if(0==(r=obj.SOF_Login("",""))){if(""!=(r=obj.SOF_GetUserList())){var r,t=r.length;if(e=r.substr(t-"38","38"),""!=(r=obj.SOF_ExportUserCert(e))){var s=obj.SOF_SignData(e,this.serRandom);if(""!=s)return{strData:this.serRandom,strSign:s,strCert:r}}}}else this.ca_error="未检测到UKey或Ukey未登陆"},caLogin:function(){var e=this,r=document.getElementById("obj");if(null==r||null==r.object)return this.ca_error="您未使用新版证书或未正确安装证书驱动",!1;this.ca_error="";var t=c.a.reuuid();null==sessionStorage.getItem("uuid")&&sessionStorage.setItem("uuid",t),this.getRandom().then(function(r){e.serRandom=r.content;var t=e.getCertBsf();console.log("ca登陆上传参数: "+o()(t)),t&&e.caLogins(t).then(function(r){console.log(o()(r)),r.success&&(e.getOrgStatus().then(function(e){console.log("orgstatus: "+o()(e))}),e.$router.push("/app"))},function(r){console.log(r),"CA_CERT_UNBINDING"==r.errcode?e.ca_error="“UKey”未在系统注册！":"CA_CERT_EXPIRED"==r.errcode?e.ca_error="UKey证书已过期":"CA_ERROR_LOGIN"==r.errcode?e.ca_error="登录KEY出错！":"CA_CERT_ERROR"==r.errcode?e.ca_error="证书错误！":"USER_DISABLED"==r.errcode?e.ca_error="用户被禁用":"ORG_NOT_FOUND"==r.errcode?e.ca_error="机构不存在":"ORG_NOT_VALID"==r.errcode?e.ca_error="机构已过期":"ORG_FORBIDED"==r.errcode&&(e.ca_error="机构被禁用")})})},getServerRandom:function(){this.getRandom().then(function(e){console.log(o()(e))})}})},u={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("section",{staticClass:"login container--fluid",staticStyle:{overflow:"hidden"}},[s("div",{staticClass:"container "},[s("img",{staticClass:"bkm",attrs:{src:t("UhfL")}}),e._v(" "),s("div",{staticClass:"login-main"},[s("Tabs",{attrs:{value:e.tagsname}},[s("TabPane",{attrs:{label:"账号登录",name:"name1"}},[s("Form",{ref:"formInlines",attrs:{model:e.formInline,rules:e.ruleInline}},[s("FormItem",{attrs:{prop:"user"}},[s("Input",{staticClass:"input",attrs:{placeholder:"账号"},model:{value:e.formInline.user,callback:function(r){e.$set(e.formInline,"user",r)},expression:"formInline.user"}})],1),e._v(" "),s("FormItem",{attrs:{prop:"password"}},[s("Input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.formInline.password,callback:function(r){e.$set(e.formInline,"password",r)},expression:"formInline.password"}}),e._v(" "),s("div",{staticClass:"fgpw"},[s("router-link",{staticClass:"pull-right",attrs:{to:"/newpassword"}},[e._v("忘记密码")])],1)],1),e._v(" "),s("FormItem",{attrs:{prop:"code"}},[s("Input",{staticClass:"input",staticStyle:{width:"220px"},attrs:{placeholder:"输入验证码"},model:{value:e.formInline.code,callback:function(r){e.$set(e.formInline,"code",r)},expression:"formInline.code"}}),e._v(" "),s("img",{staticClass:"from_code",attrs:{width:"80",height:"30",src:"/dws/pub/vcode/img",id:"verify"},on:{click:e.handleRefreshCode}})],1),e._v(" "),e.login_error?s("div",{staticClass:"login-error"},[e._v("\n                "+e._s(e.login_error)+"\n              ")]):e._e(),e._v(" "),s("FormItem",[s("Button",{staticClass:"login_btn",attrs:{disabled:e.post,type:"primary",size:"large",long:""},on:{click:function(r){e.handleSubmit("formInlines")},keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.handleSubmit("formInlines")}}},[e._v("\n                立即登录\n              ")])],1)],1)],1),e._v(" "),s("TabPane",{attrs:{label:"CA登录",name:"name2"}},[s("div",{staticClass:"login-ca flex align-items--center"},[s("div",{staticClass:"calogintip"},[e._v("登录前请检查是否已安装CA证书客户端")]),e._v(" "),s("Button",{staticClass:"login_btn caloginbtn",attrs:{type:"primary",size:"large",long:""},on:{click:e.caLogin}},[e._v("\n                立即登录\n              ")]),e._v(" "),s("div",{staticClass:"caerror"},[e._v(e._s(e.ca_error))])],1),e._v(" "),s("p",{staticClass:"login_ca_p"},[e._v("首次登录时，请下载并安装 “"),s("a",{staticStyle:{color:"#1686EA"},attrs:{href:"#"}},[e._v("CA证书客户端")]),e._v("” 仅支持IE浏览器")])])],1)],1)])])},staticRenderFns:[]};var d=t("vSla")(l,u,!1,function(e){t("FVaO"),t("Xx/s"),t("OgJW")},"data-v-acffae9c",null);r.default=d.exports}});
//# sourceMappingURL=5.38eabd028c1412cb6cca.js.map