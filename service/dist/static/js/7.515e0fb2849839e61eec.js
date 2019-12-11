webpackJsonp([7],{511:function(e,r,t){t(581);var o=t(137)(t(531),t(566),null,null);e.exports=o.exports},518:function(e,r,t){"use strict";var o={emailReg:/^[a-z0-9A-Z]+([-|_|\.]+[a-z0-9A-Z]+)*@([a-z0-9A-Z]+[-|\.])+[a-zA-Z]{2,5}$/,idCardReg:/^(([1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4})|([1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|(X|x))))$/,phoneReg:/^1[34578]\d{9}$/};r.a=o},531:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t(518);r.default={data:function(){var e=this;return{form:{name:"",account:"",email:"",phone:"",card:"",birth:"",sex:""},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],account:[{required:!0,message:"请输入账号",trigger:"blur"}],email:[{validator:function(r,t,a){""===t?a(new Error("请输入邮箱")):o.a.emailReg.test(e.form.email)?a():a(new Error("请输入正确的邮箱"))},trigger:"blur"}],phone:[{validator:function(r,t,a){""===t?a(new Error("请输入手机号")):o.a.phoneReg.test(e.form.phone)?a():a(new Error("请输入正确的手机号"))},trigger:"blur"}],card:[{validator:function(r,t,a){""===t?a(new Error("请输入身份证号")):o.a.idCardReg.test(e.form.card)?a():a(new Error("请输入正确的身份证号"))},trigger:"blur"}],birth:[{required:!0,message:"请输入出生日期",type:"date",trigger:"blur"}],sex:[{required:!0,message:"请输入性别",trigger:"blur"}]}}},methods:{getUserData:function(){var e=this,r=sessionStorage.getItem("ms_user").name;e.$http.get("/api/user/getUser",{name:r}).then(function(r){console.log(r);var t=r.data[0];e.form.name=t.username,e.form.account=t.account,e.form.email=t.email,e.form.phone=t.phone,e.form.card=t.card,e.form.birth=new Date(t.birth),e.form.sex=t.sex,sessionStorage.setItem("ms_userId",t.id)}).then(function(e){console.log(e)})},updateUserData:function(e){var r=this,t={id:parseInt(sessionStorage.getItem("ms_userId")),email:r.form.email,phone:r.form.phone,card:r.form.card,birth:r.form.birth,sex:r.form.sex};r.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;r.$http.post("/api/user/updateUser",t).then(function(e){console.log(e),r.$router.push("/success")}).then(function(e){console.log(e)})})},onCancle:function(){this.$router.push("/userCenter")}},mounted:function(){this.getUserData()}}},541:function(e,r,t){r=e.exports=t(87)(!1),r.push([e.i,".userContent{width:400px;margin:0 auto}.select-sex{width:320px}",""])},566:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-edit"}),e._v(" 个人中心")]),e._v(" "),t("el-breadcrumb-item",[e._v("修改用户")])],1)],1),e._v(" "),t("div",{staticClass:"userContent"},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{prop:"name",label:"用户名称"}},[t("el-input",{attrs:{disabled:""},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"account",label:"账号名称"}},[t("el-input",{attrs:{disabled:""},model:{value:e.form.account,callback:function(r){e.$set(e.form,"account",r)},expression:"form.account"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"email",label:"邮箱"}},[t("el-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"phone",label:"手机"}},[t("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.form.phone,callback:function(r){e.$set(e.form,"phone",r)},expression:"form.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"card",label:"身份证"}},[t("el-input",{attrs:{placeholder:"请输入身份证"},model:{value:e.form.card,callback:function(r){e.$set(e.form,"card",r)},expression:"form.card"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"birth",label:"出生日期"}},[t("el-col",{attrs:{span:24}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.birth,callback:function(r){e.$set(e.form,"birth",r)},expression:"form.birth"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{prop:"sex",label:"性别"}},[t("el-select",{staticClass:"select-sex",attrs:{placeholder:"请选择性别"},model:{value:e.form.sex,callback:function(r){e.$set(e.form,"sex",r)},expression:"form.sex"}},[t("el-option",{attrs:{label:"男",value:"man"}}),e._v(" "),t("el-option",{attrs:{label:"女",value:"woman"}})],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.updateUserData("form")}}},[e._v("确定")]),e._v(" "),t("el-button",{on:{click:function(r){e.onCancle()}}},[e._v("取消")])],1)],1)],1)])},staticRenderFns:[]}},581:function(e,r,t){var o=t(541);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(199)("267eee40",o,!0)}});