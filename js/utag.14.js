//tealium universal tag - utag.14 ut4.0.202412112136, Copyright 2024 Tealium.com Inc. All Rights Reserved.
var _sf_startpt=_sf_startpt||(new Date()).getTime();var _sf_async_config={};try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={view:1,link:1};u.forceBoolean=function(flag){if(u.typeOf(flag)==='string'){if(flag==='true'||flag==='1'){return true;}else{return false;}}else if(u.typeOf(flag)=='number'){if(flag!==0){return true;}else{return false;}}else{return flag;}}
u.initialized=false;u.map={"page_title":"title","section":"sections","byline":"authors","ch_dashboard_rfa":"domain","dom.pathname":"url"};u.extend=[function(a,b,c,d,e,f,g){if(1){d=b['property_id'];if(typeof d=='undefined')return;c=[{'510':'rfa.burmese'},{'511':'rfa.cantonese'},{'512':'rfa.english'},{'513':'rfa.khmer'},{'514':'rfa.korean'},{'515':'rfa.lao'},{'516':'rfa.mandarin'},{'517':'rfa.tibetan'},{'518':'rfa.uyghur'},{'519':'rfa.vietnamese'},{'777':'test.bbg'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['ch_dashboard_rfa']=c[e][f];m=true};};if(m)break};if(!m)b['ch_dashboard_rfa']='test.bbg';}}];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!='undefined'){for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};u.data={qsp_delim:'&',kvp_delim:'=',base_url:'//static.chartbeat.com/js/chartbeat_video.js',"uid":"62557","domain":"","canonical":"true","is_new_virtual_page":"false","virtual_page_path":"","virtual_page_title":"","sections":"","authors":"","title":"","url":""};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==''){e=u.map[d].split(',');for(f=0;f<e.length;f++){if(!u.data.hasOwnProperty(e[f])){_sf_async_config[e[f]]=b[d];}
u.data[e[f]]=b[d];}}}
u.data.is_new_virtual_page=u.forceBoolean(u.data.is_new_virtual_page);_sf_async_config.uid=u.data.uid;_sf_async_config.domain=u.data.domain;_sf_async_config.useCanonical=((u.data.canonical=="false")?true:false);_sf_async_config.useCanonicalDomain=false;_sf_async_config.authors=u.data.authors;_sf_async_config.sections=u.data.sections;_sf_async_config.title=u.data.title;_sf_async_config.path=u.data.url;if(!u.initialized){u.initialized=true;_sf_endpt=(new Date()).getTime();u.head=document.getElementsByTagName('head')[0];u.scr=document.createElement('script');u.scr.src=u.data.base_url;u.head.appendChild(u.scr);}else{if(u.data.is_new_virtual_page){pSUPERFLY.virtualPage(u.data.virtual_page_path,u.data.virtual_page_title);}}}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('14','bbg.rfa-plone');}catch(e){}