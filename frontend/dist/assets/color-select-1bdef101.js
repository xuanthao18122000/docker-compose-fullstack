import{a as e,x as i,F as r,v as a,I as l,S as n,e as m,g as o,y as c,h as d,z as h}from"./index-f34e1a2a.js";import{f as u}from"./array-28fcc5c3.js";import{C as p}from"./custom-descriptions-319ef308.js";const I=({data:t})=>{const s=[{labelText:"Ảnh đại diện",descriptionElement:e(r.Item,{name:["images","avatar"],className:"m-auto text-center",children:e(i,{})})},{isRequired:!0,labelText:"Họ và tên",descriptionElement:e(r.Item,{name:"name",className:"mb-0",rules:a("required"),children:e(l,{placeholder:"Họ và tên"})})},{isRequired:!0,labelText:"Số điện thoại",descriptionElement:e(r.Item,{name:"phone",className:"mb-0",rules:a(["required","number"]),children:e(l,{placeholder:"Nhập số điện thoại"})})},{isRequired:!0,labelText:"Chức vụ",descriptionElement:e(r.Item,{name:"type",className:"mb-0",rules:a("required"),children:e(n,{options:m,placeholder:"Chọn chức vụ"})})},{isRequired:!0,labelText:"Địa chỉ",descriptionElement:e(r.Item,{name:"address",className:"mb-0",rules:a("required"),children:e(l,{placeholder:"Nhập địa chỉ"})})},{isShow:!!t,labelText:"Trạng thái",descriptionElement:e(r.Item,{name:"status",className:"mb-0",children:e(S,{options:o,className:"!w-40"})})},{isShow:!!t,labelText:"Thời điểm tạo",descriptionElement:c(t==null?void 0:t.createdAt).format("DD/MM/YYYY HH:mm:ss")},{isShow:!t,labelText:"Mật khẩu",descriptionElement:e(r.Item,{name:"password",className:"mb-0",rules:a(["required","noWhiteSpace"]).concat(d("minAndMax")(8,16)),children:e(l.Password,{placeholder:"Nhập mật khẩu"})})}];return e(p,{data:s,labelStyle:{width:200}})},S=({options:t,...s})=>s.value?e(h,{color:u(t,s.value).color,options:t,...s}):e("span",{});export{I as U};