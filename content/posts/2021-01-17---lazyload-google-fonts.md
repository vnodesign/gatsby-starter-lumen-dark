---
template: post
title: Lazyload Google Fonts
date: "2021-01-17T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Javascript
tags:
  - Lazyload
  - Google Fonts
  - Javascript
slug: /2021/01/lazyload-google-fonts
thumbnail: "/images/lazyload-google-fonts.jpg"
description: Tiếp nối các chuỗi Lazyload scripts bên ba thì hôm nay mình xin hướng dẫn các bạn cách Lazyload khi sử dụng Google Fonts.
---

Tiếp nối các chuỗi Lazyload scripts bên ba thì hôm nay mình xin hướng dẫn các bạn cách Lazyload khi sử dụng Google Fonts.

![Lazyload Google Fonts](/images/lazyload-google-fonts.jpg)

Đầu tiên thì chúng ta cùng tìm hiểu về đoạn CSS mặc định mà Google cung cấp cho chúng ta khi thêm fonts vào website nhé.

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;700&display=swap" rel="stylesheet">
```

Trên là đoạn code Google Fonts mẫu mà mình đã chọn trên trang chủ của Google Fonts.

Và đây là đoạn Javascript chuyển Google Fonts load dưới dạng webfonts.

```javascript
WebFontConfig = {
      google: {
          families: ['Roboto Condensed:300,700&display=swap']
      }
   };
   (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
      s.parentNode.insertBefore(wf, s);
   })(document);
```

Tiếp theo sẽ là đoạn Javascript giúp xử lý các vấn đề trên:

```javascript
WebFontConfig={google:{families:['Roboto Condensed:300,700&display=swap']}};function td_webfonts(){var t=document.createElement("script");t.async=!0,t.defer=!0,t.src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js",document.body.appendChild(t)}window.addEventListener?window.addEventListener("load",td_webfonts,!1):window.attachEvent?window.attachEvent("onload",td_webfonts):window.onload=td_webfonts;
```

Trong đoạn hai đoạn đầu ở trên và đoạn dưới bạn thấy nó khác nhau chứ? Đoạn dưới mình đã thêm thuộc tính async và defer để nó load sau khi trang tải xong.

Để tối ưu thêm thì bạn có thể áp dụng thêm link rel preload cho các fonts ở bên trong. Với cú pháp:

```html
<link rel="preload" href="https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCkYb9lecyVC4A.woff2" type="fonts/woff2" crossorigin/>
```

Để biết có bao nhiêu fonts sẽ load ở web thì bài sau mình sẽ hướng dẫn các bạn cách kiểm tra chúng.

Chúc các bạn thành công.
