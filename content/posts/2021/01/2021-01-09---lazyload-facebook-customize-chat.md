---
template: post
title: Lazyload Facebook Customize Chat 
date: "2021-01-09T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Javascript
tags:
  - Lazyload
  - Facebook
  - Javascript
slug: /2021/01/lazyload-facebook-customize-chat
thumbnail: "/media/lazyload-facebook-customize-chat.jpg"
description: Trong bài viết đầu tiên ngày hôm nay mình sẽ hướng dẫn các bạn cách Lazyload Facebook Customize Chat để trang tải nhanh hơn.
fbCommentUrl: /2021/01/lazyload-facebook-customize-chat
---

Trong bài viết đầu tiên ngày hôm nay mình sẽ hướng dẫn các bạn cách Lazyload Facebook Customize Chat để trang tải nhanh hơn.

![Lazyload Facebook Customize Chat](/media/lazyload-facebook-customize-chat.jpg)

Đầu tiên thì chúng ta cùng tìm hiểu về đoạn Javascript mặc định mà Facebook cung cấp cho chúng ta khi cài plugins chat vào website nhé.

```html
 <div id="fb-root"></div>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v9.0'
          });
        };
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>
```

Đoạn đầu là thành phần root nơi sẽ trả ra các thuộc tính và giá trị sau khi script load xong, đoạn tiếp theo là các script của Facebook. Đây sẽ là đoạn mà chúng ta cần quan tâm nhất để có thể tải trang được nhanh.

Tiếp theo chúng ta cùng xem đoạn Javascript của Facebook đã được rút ngắn lại để load trang nhanh hơn.

```javascript
window.fbAsyncInit=function(){FB.init({xfbml:!0,version:"v9.0"})};function td_customerchat(){var t=document.createElement("script");t.async=!0,t.defer=!0,t.src="https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js",document.body.appendChild(t)}window.addEventListener?window.addEventListener("load",td_customerchat,!1):window.attachEvent?window.attachEvent("onload",td_customerchat):window.onload=td_customerchat;
```

Trong đoạn trên đầu và đoạn dưới bạn thấy nó khác nhau chứ? Đoạn dưới mình đã thêm thuộc tính async và defer để nó load sau khi trang tải xong.
