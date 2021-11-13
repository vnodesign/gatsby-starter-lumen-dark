---
template: post
title: Mẫu Config Module PageSpeed trên máy chủ LiteSpeed
date: "2021-10-05T00:00:00.000-07:00"
authorName: Tuan Duc Design
category: Server
tags:
  - VPS
  - LiteSpeed
  - Module PageSpeed
  - Ubuntu
  - Debian
  - CentOS
slug: /snippet/mau-config-module-pagespeed-tren-may-chu-litespeed
thumbnail: "/images/mau-config-module-pagespeed-tren-may-chu-litespeed.png"
description: Trong snippet này mình sẽ chia sẻ với các bạn mẫu config Module PageSpeed trên máy chủ LiteSpeed.
fbCommentUrl: /snippet/mau-config-module-pagespeed-tren-may-chu-litespeed
---

Trong snippet này mình sẽ chia sẻ với các bạn mẫu config Module PageSpeed trên máy chủ LiteSpeed.

![Mẫu Config Module PageSpeed trên máy chủ LiteSpeed](/images/mau-config-module-pagespeed-tren-may-chu-litespeed.png)

- [Thư mục cấu hình của LiteSpeed](#thư-mục-cấu-hình-của-litespeed)
- [Cấu hình Module PageSpeed lên LiteSpeed](#cấu-hình-module-pagespeed-lên-litespeed)
- [Kiểm tra xem Module PageSpeed đã hoạt động hay chưa](#kiểm-tra-xem-module-pagespeed-đã-hoạt-động-hay-chưa)

## Thư mục cấu hình của LiteSpeed

Thư mục cấu hình của LiteSpeed nằm trong ``/usr/local/lsws``

```bash
cd /usr/local/lsws
```

Mọi thông tin mà bạn cần cấu hình nó sẽ nằm ở trong thư mục này.

## Cấu hình Module PageSpeed lên LiteSpeed

Để cấu hình được Module PageSpeed lên máy chủ LiteSpeed, thì bạn cần phải cài đặt gói ``ols-pagespeed``

Trong cửa sổ Terminal (Mình khuyến kích bạn sử dụng Termius để sử dụng dễ dàng hơn), bạn gõ

Nếu bạn sử dụng CentOS:

```bash
yum install ols-pagespeed
```

Nếu bạn sử dụng Ubuntu và Debian:

```bash
apt install ols-pagespeed
```

Sau khi cài đặt thành công, tệp modulepagespeed.so của bạn sẽ nằm trong thư mục ``/usr/local/lsws/modules``

Chúng ta chuyển qua bước tiếp theo là truy cập vào trang dashboard của LiteSpeed

**xx.xxx.xxx.xxx:7080** trong đó xx.xxx.xxx.xxx là IP VPS của bạn

Nếu bạn truy cập không được tức là do bạn chưa mở port cho port 7080 và bạn cần tạo lại thông tin đăng nhập cho trang dashboard của LiteSpeed

Để mở port 7080 thì bạn gõ lệnh sau vào cửa sổ Terminal (Mình khuyên bạn dùng Termius vì nó có rất nhiều tính năng mà bạn cần khám phá)

```bash
firewall-cmd --zone=public --add-port=7080/tcp --permanent && firewall-cmd --reload && firewall-cmd --list-all
```

Với thay đổi thông tin đăng nhập vào dashboard LiteSpeed

```bash
/usr/local/lsws/admin/misc/admpass.sh
```

Sau đó bạn thử reload lại trang và đăng nhập xem được chưa nhé! Trong dashboard của LiteSpeed bạn tìm đến các mục sau:

WebAdmin Console → Server Configuration → Modules, trong Modules bạn bấm vào nút Add

![Trang dashboard của LiteSpeed](/images/trang-dashboard-cua-litespeed.png)

Sau đó bạn nhập ``modpagespeed`` vào ô Modules, trong ô Modules Parameters bạn copy dòng sau rồi dán vào:

```bash
pagespeed on
pagespeed InPlaceResourceOptimization off
pagespeed FetchHttps enable
pagespeed FileCachePath /tmp/lshttpd/pagespeed/
pagespeed EnableFilters remove_comments
pagespeed EnableFilters local_storage_cache
pagespeed EnableFilters extend_cache_pdfs
pagespeed EnableFilters combine_css
pagespeed EnableFilters rewrite_css
pagespeed EnableFilters extend_cache,rewrite_images
pagespeed EnableFilters rewrite_javascript
pagespeed FetcherTimeoutMs 5000
pagespeed EnableFilters collapse_whitespace;
pagespeed EnableFilters combine_heads;
pagespeed EnableFilters hint_preload_subresources;
pagespeed FileCacheSizeKb            102400;
pagespeed FileCacheCleanIntervalMs   3600000;
pagespeed FileCacheInodeLimit        500000;
pagespeed RedisServer "127.0.0.1:6379";
pagespeed EnableFilters lazyload_images;
pagespeed EnableFilters include_js_source_maps;
pagespeed UseExperimentalJsMinifier on;
pagespeed EnableFilters insert_image_dimensions;
```

![Thêm Module PageSpeed](/images/them-modpagespeed.png)

Bên trong đoạn config mình có sử dụng RedisServer nếu bạn không dùng Redis thì xoá dòng đó đi nhé! Tiếp theo bạn tích chọn Yes ở Enable Hooks rồi bấm save nhé.

![Thêm Module PageSpeed vào Modules Parameters](/images/module-parameters.png)

Sau đó bạn cần restart lại LiteSpeed để các thông tin được cập nhật. Bạn để ý phía trên bên phải có dòng chữ **LSWS PID** bạn bấm vào cái icon rồi bấm vào Go để restart lại máy chủ LiteSpeed nhé.

![Khởi động lại máy chủ LiteSpeed](/images/khoi-dong-lai-may-chu-litespeed.png)

## Kiểm tra xem Module PageSpeed đã hoạt động hay chưa

Có hai cách để bạn kiểm tra xem Module PageSpeed đã hoạt động hay chưa:

- Bạn click chuột phải chọn Inspect → Network rồi reload lại trang, sau đó khéo thanh cuộn lên phía trên cao rồi chọn domain của bạn rồi bấm vào Headers nếu kết quả hiển thị ra như sau là bạn đã config thành công.

```text
x-ls-pagespeed: 2.2-1.11.33.4
```

- Bạn click chuột phải chọn View Page Source Code bạn kéo chuột từ từ xuống xem có đoạn Script như này không, nếu có là bạn đã config thành công.

```javascript
(function(){function d(b){var a=window;if(a.addEventListener)a.addEventListener("load",b,!1);else if(a.attachEvent)a.attachEvent("onload",b);else{var c=a.onload;a.onload=function(){b.call(this);c&&c.call(this)}}}var p=Date.now||function(){return+new Date};window.pagespeed=window.pagespeed||{};var q=window.pagespeed;function r(){this.a=!0}r.prototype.c=function(b){b=parseInt(b.substring(0,b.indexOf(" ")),10);return!isNaN(b)&&b<=p()};r.prototype.hasExpired=r.prototype.c;r.prototype.b=function(b){return b.substring(b.indexOf(" ",b.indexOf(" ")+1)+1)};r.prototype.getData=r.prototype.b;r.prototype.f=function(b){var a=document.getElementsByTagName("script"),a=a[a.length-1];a.parentNode.replaceChild(b,a)};r.prototype.replaceLastScript=r.prototype.f;
r.prototype.g=function(b){var a=window.localStorage.getItem("pagespeed_lsc_url:"+b),c=document.createElement(a?"style":"link");a&&!this.c(a)?(c.type="text/css",c.appendChild(document.createTextNode(this.b(a)))):(c.rel="stylesheet",c.href=b,this.a=!0);this.f(c)};r.prototype.inlineCss=r.prototype.g;
r.prototype.h=function(b,a){var c=window.localStorage.getItem("pagespeed_lsc_url:"+b+" pagespeed_lsc_hash:"+a),f=document.createElement("images");c&&!this.c(c)?f.src=this.b(c):(f.src=b,this.a=!0);for(var c=2,k=arguments.length;c<k;++c){var g=arguments[c].indexOf("=");f.setAttribute(arguments[c].substring(0,g),arguments[c].substring(g+1))}this.f(f)};r.prototype.inlineimages=r.prototype.h;
function t(b,a,c,f){a=document.getElementsByTagName(a);for(var k=0,g=a.length;k<g;++k){var e=a[k],m=e.getAttribute("data-pagespeed-lsc-hash"),h=e.getAttribute("data-pagespeed-lsc-url");if(m&&h){h="pagespeed_lsc_url:"+h;c&&(h+=" pagespeed_lsc_hash:"+m);var l=e.getAttribute("data-pagespeed-lsc-expiry"),l=l?(new Date(l)).getTime():"",e=f(e);if(!e){var n=window.localStorage.getItem(h);n&&(e=b.b(n))}e&&(window.localStorage.setItem(h,l+" "+m+" "+e),b.a=!0)}}}
function u(b){t(b,"images",!0,function(a){return a.src});t(b,"style",!1,function(a){return a.firstChild?a.firstChild.nodeValue:null})}
q.i=function(){if(window.localStorage){var b=new r;q.localStorageCache=b;d(function(){u(b)});d(function(){if(b.a){for(var a=[],c=[],f=0,k=p(),g=0,e=window.localStorage.length;g<e;++g){var m=window.localStorage.key(g);if(!m.indexOf("pagespeed_lsc_url:")){var h=window.localStorage.getItem(m),l=h.indexOf(" "),n=parseInt(h.substring(0,l),10);if(!isNaN(n))if(n<=k){a.push(m);continue}else if(n<f||0==f)f=n;c.push(h.substring(l+1,h.indexOf(" ",l+1)))}}k="";f&&(k="; expires="+(new Date(f)).toUTCString());
document.cookie="_GPSLSC="+c.join("!")+k;g=0;for(e=a.length;g<e;++g)window.localStorage.removeItem(a[g]);b.a=!1}})}};q.localStorageCacheInit=q.i;})();
pagespeed.localStorageCacheInit();
```

Chúc các bạn thành công
