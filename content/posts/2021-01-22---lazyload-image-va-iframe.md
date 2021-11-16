---
template: post
title: Lazyload Image Và Iframe
date: "2021-01-22T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Javascript
tags:
  - Lazyload
  - Image
  - Iframe
  - Javascript
slug: /2021/01/lazyload-image-va-iframe
thumbnail: "/images/lazyload-image-va-iframe.jpg"
description: Ở các bài trước mình đã hướng dẫn các bạn lazyload các script, ở bài này mình sẽ hướng dẫn cách lazyload image và iframe.
fbCommentUrl: /2021/01/lazyload-image-va-iframe
---

Ở các bài trước mình đã hướng dẫn các bạn lazyload các script, ở bài này mình sẽ hướng dẫn cách lazyload image và iframe.

![Lazyload Image Và Iframe](/images/lazyload-image-va-iframe.jpg)

- [Sử dụng Jquery](#tại-sao-phải-tối-ưu-css-và-javascript)
- [Bắt đầu cài đặt Lazyload](#bắt-dầu-code-lại-css-và-javascript)
- [Chèn vào mã nguồn](#đặt-tên-các-file-css-và-javascript-cho-dễ-phân-biệt)
- [Thêm class lazyload cho image và iframe](#thêm-class-lazyload-cho-image-và-iframe)

## Sử dụng Jquery

Để sử dụng được các hàm có Jquery thì bạn cần phải sử dụng thêm thư viện Jquery để các script đó có thể hoạt động ổn định được.

```html
<html>
    <head>
        <title>Demo</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
        .
    </body>
</html>
```

Với Jquery bạn để đầu hay cuối cùng đều được nhưng với cá nhân mình, mình để nó ở trên đầu vì nó cũng chẳng ảnh hưởng gì mấy tới tốc độ.

## Bắt đầu cài đặt Lazyload

Script hỗ trợ lazyload image và iframe mà mình muốn nhắc đến đó chính là lazySizes. lazySizes là một lazyloader script được phát triển bởi Alexander Farkas. Lazysizes rất nhanh và nhẹ. Script này hỗ trợ đầy đủ cho hình ảnh, iframe, scripts/widget… LazySizes sẽ tự động ưu tiên tải các tải nguyên quan trọng giúp cải thiện đáng kể hiệu suất của trang web.

Các tính năng nổi bật của lazySizes:

- Hiệu năng cao: script nhẹ, hoạt động mượt mà với số lượng lớn ảnh/iframe
- Linh hoạt: script cung cấp nhiều tiện ích mở rộng cho các tính năng nâng cao. Ví dụ như hiệu ứng LQIP/blurry
- SEO friendly: lazysizes không ẩn ảnh và tài nguyên của bạn khỏi Google. Nên sẽ không sự có khác biệt dù có sử dụng hay không với các bộ máy tìm kiếm.
- Độ tương thích cao: script hoạt động tốt với hầu hết các trình duyệt và hệ điều hành

Để cài đặt Lazyload lazySizes bạn truy cập vào [https://afarkas.github.io/lazysizes/lazysizes.min.js](https://afarkas.github.io/lazysizes/lazysizes.min.js) sau đó tải về máy hoặc copy toàn bộ script bên trong dán vào file js riêng của bạn.

## Chèn vào mã nguồn

Tiếp theo bạn chèn vào mã nguồn

```html
<html>
    <head>
        <title>Demo</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
    .
    <img src="https://cdn.staticaly.com/gh/tuanducteam/blog/master/static/images/lazyload-image-va-iframe.jpg" />
    <script src="https://cdn.staticaly.com/gh/aFarkas/lazysizes/gh-pages/lazysizes.min.js" async defer></script>
    </body>
</html>
```

## Thêm class lazyload cho image và iframe

Đoạn trên bạn chỉ mới thêm javascript vào thôi nên thuộc tính images chưa có gì thay đổi chúng ta cần thêm một functions để làm điều đó.

```html
<html>
    <head>
        <title>Demo</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
    .
    <img src="https://cdn.staticaly.com/gh/tuanducteam/blog/master/static/images/lazyload-image-va-iframe.jpg" />
    <script src="https://cdn.staticaly.com/gh/aFarkas/lazysizes/gh-pages/lazysizes.min.js" async defer></script>
    <script>$("images").each(function(){$(this).attr("src",$(this).attr("src").replace("http://","https://")),$(this).addClass("lazyload"),$(this).attr("data-src",$(this).attr("src")),$(this).removeAttr("src")}),$("source").each(function(){$(this).attr("srcset",$(this).attr("srcset").replace("http://","https://")),$(this).addClass("lazyload"),$(this).attr("data-srcset",$(this).attr("srcset")),$(this).removeAttr("srcset")}),$("iframe").each(function(){$(this).addClass("lazyload"),$(this).attr("data-src",$(this).attr("src")),$(this).removeAttr("src")});</script>
    </body>
</html>
```

Vậy là xong bạn lưu file rồi mở trang chủ ra để kiểm tra.

Chúc các bạn thành công.
