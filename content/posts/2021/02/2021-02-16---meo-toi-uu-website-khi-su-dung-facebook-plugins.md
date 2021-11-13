---
template: post
title: Mẹo Tối Ưu Website Khi Sử Dụng Facebook Plugins
date: "2021-02-16T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Javascript
tags:
  - Preload
  - Facebook
  - Javascript
slug: /2021/02/meo-toi-uu-website-khi-su-dung-facebook-plugins
thumbnail: "/media/meo-toi-uu-website-khi-su-dung-facebook-plugins.jpg"
description: Ở bài viết ngày hôm nay mình sẽ hướng dẫn các bạn cách tối ưu website khi sử dụng Facebook plugins.
fbCommentUrl: /2021/02/meo-toi-uu-website-khi-su-dung-facebook-plugins
---

Ở các bài viết trước mình đã hướng dẫn các bạn cách lazyload các scripts bên ba, ở bài viết ngày hôm nay mình sẽ hướng dẫn các bạn cách tối ưu website khi sử dụng Facebook plugins.

![Mẹo Tối Ưu Website Khi Sử Dụng Facebook Plugins](/media/meo-toi-uu-website-khi-su-dung-facebook-plugins.jpg)

- [Truy cập vào đường dẫn tới file JS của Facebook](#truy-cập-vào-đường-dẫn-tới-file-js-của-facebook)
- [Các thành phần cần quan tâm](#các-thành-phần-cần-quan-tâm)
- [Sử dụng link rel preload và link rel dns-prefetch](#sử-dụng-link-rel-preload-và-link-rel-dns-prefetch)

## Truy cập vào đường dẫn tới file JS của Facebook

Đầu tiên thì chúng ta truy cập vào đường dẫn tới file JS của Facebook nhé.

[https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js](https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js)

Tiếp theo bạn tìm các từ khoá liên quan đến đường dẫn ảnh png. Tương tự như ví dụ dưới đây:

```css
.fb_dialog_close_icon{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}
.fb_dialog_close_icon:hover{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}
.fb_dialog_close_icon:active{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}
#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yD\/r\/t-wz8gw1xG1.png);
```

Và tìm tiếp các từ khoá liên quan đến facebook.com. Ví dụ dưới đây sẽ giúp bạn hiểu:

```js
{"locale":"vi_VN","revision":"1003309171","rtl":false,"sdkab":null,"sdkns":"FB","sdkurl":"https:\/\/connect.facebook.net\/vi_VN\/sdk\/xfbml.customerchat.js"});__d("UrlMapConfig",[],{"www":"www.facebook.com","m":"m.facebook.com","business":"business.facebook.com","api":"api.facebook.com","api_read":"api-read.facebook.com","graph":"graph.facebook.com","an":"an.facebook.com","fbcdn":"static.xx.fbcdn.net","cdn":"staticxx.facebook.com","graph_facebook":"graph.facebook.com","graph_gaming":"graph.fb.gg","graph_instagram":"graph.instagram.com"});__d("JSSDKConfig",[],{"features":{"allow_non_canvas_app_events":false,"error_handling":{"rate":4},"e2e_ping_tracking":{"rate":0.1},"xd_timeout":{"rate":1,"value":60000},"use_bundle":false,"should_log_response_error":true,"popup_blocker_scribe_logging":{"rate":100},"https_only_enforce_starting":2538809200000,"https_only_learn_more":"https:\/\/developers.facebook.com\/blog\/post\/2018\/06\/08\/enforce-https-facebook-login\/","https_only_scribe_logging":{"rate":1},"log_perf":{"rate":0.001},"use_x_xd":{"rate":100},"cache_auth_response":{"rate":0}
```

Tại sao chúng ta lại phải lấy đoạn này thì ở bước tiếp theo bạn sẽ hiểu được lý do tại vì sao.

## Các thành phần cần quan tâm

Có hai thành phần trong file JS mà bạn cần quan tâm, đó chính là liên kết hình ảnh và các liên kết của Facebook, liên kết hình ảnh chính là đoạn css ở trên giờ chúng ta tiến hành biên dịch lại liên kết của hình ảnh nhé!

Với class fb_dialog_close_icon và các class cùng tên:

```text
https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png
```

Với id fb_dialog_loader_spinner:

```text
https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png
```

Giờ chúng ta chuyển qua bước tiếp theo để sử dụng ```<link rel="preload" ...>``` và ```<link rel="dns-prefetch" ...>``` nhé.

## Sử dụng link rel preload và link rel dns-prefetch

Vẫn câu lệnh ```Preload``` quen thuộc mà chúng ta đã sử dụng ở các bài viết trước, cú pháp quen thuộc là:

```html
<html>
    <head>
        <title>Demo</title>
        <link rel="preload" href="https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js" as="script" />
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png" as="image" />
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png" as="image" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
        <link rel="dns-prefetch" href="//graph.facebook.com" />
        <link rel="dns-prefetch" href="//static.xx.fbcdn.net" />
        <link rel="dns-prefetch" href="//staticxx.facebook.com" />
    </head>
    <body>
    ...
    <script src="https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js" async="1"></script>
    </body>
</html>
```

Ngoài ra còn một số mẹo nâng cao khác như:

- Chỉ định thời gian script tải.
- Cuộn chuột đến vị trí nhất định thì script sẽ load.
- Với các script được tự động sinh ra từ Facebook sẽ có số phiên bản đằng sau định dạng file, để sử dụng ```<link rel="preload" ../>``` với thành phần này thì hầu như là không được.

Chúc các bạn thành công.
