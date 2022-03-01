---
template: post
title: Lazyload Google Adsense
date: "2021-02-17T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Javascript
tags:
  - Preload
  - Adsense
  - Javascript
slug: /2021/02/lazyload-google-adsense
thumbnail: "/images/lazyload-google-adsense.jpg"
description: Đây là bài viết thứ sáu liên quan đến Lazyload mà mình viết. Ở bài viết này mình sẽ hướng dẫn các bạn sử dụng Lazyload với Google Adsense.
---

Đây là bài viết thứ sáu liên quan đến Lazyload mà mình viết. Ở bài viết này mình sẽ hướng dẫn các bạn sử dụng Lazyload với Google Adsense.

![Lazyload Google Adsense](/images/lazyload-google-adsense.jpg)

Đầu tiên thì chúng ta cùng tìm hiểu về đoạn Javascript mặc định mà Google Adsense cung cấp cho chúng ta khi chèn ads vào website nhé.

```html
<html>
    <head>
    <title>Demo</title>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </head>
    <body>
    .
    <!-- Homepage Leaderboard -->
    <ins class="adsbygoogle"
    style="display:inline-block;width:728px;height:90px"
    data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
    data-ad-slot="xxxxxxxxxx"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </body>
</html>
```

Tiếp theo chúng ta cùng xem đoạn Javascript của Google Adsense đã được rút ngắn lại để load trang nhanh hơn.

```html
<html>
    <head>
    <title>Demo</title>
    </head>
    <body>
    .
    <!-- Homepage Leaderboard -->
    <ins class="adsbygoogle"
    style="display:inline-block;width:728px;height:90px"
    data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
    data-ad-slot="xxxxxxxxxx"></ins>
    <script>(adsbygoogle=window.adsbygoogle||[]).push({});function td_adsense(){var t=document.createElement("script");t.async=!0,t.defer=!0,t.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",document.body.appendChild(t)}window.addEventListener?window.addEventListener("load",td_adsense,!1):window.attachEvent?window.attachEvent("onload",td_adsense):window.onload=td_adsense;</script>
    </body>
</html>
```

Trong đoạn trên đầu và đoạn dưới bạn thấy nó khác nhau chứ? Đoạn dưới mình đã thêm thuộc tính async và defer để nó load sau khi trang tải xong.

Nếu trong quá trình sử dụng bị lỗi hay không hiện ads, thì bạn bỏ đoạn ```,t.defer=!0``` đi nhé.

Chúc bạn thành công.
