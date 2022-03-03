---
template: post
title: Lazyload Youtube và Responsive Video
date: "2021-03-03T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Javascript
tags:
  - Lazyload
  - Video
  - Responsive
  - Javascript
slug: /2021/03/lazyload-youtube-va-responsive-video
thumbnail: "https://frontend.tuanducdesign.com/assets/blogs/images/lazyload-youtube-va-responsive-video.jpg"
description: Ở các bài viết trước mình đã hướng dẫn các bạn lazyload các script, ở bài này mình sẽ hướng dẫn cách lazyload Youtube và responsive video.
---

Ở các bài viết trước mình đã hướng dẫn các bạn lazyload các script, ở bài này mình sẽ hướng dẫn cách lazyload Youtube và responsive video.

![Lazyload Youtube và Respsonsive Video](/images/lazyload-youtube-va-responsive-video.jpg)

- [Làm thế nào để nhúng video Youtube vào Website](#làm-thế-nào-để-nhúng-video-youtube-vào-website)
- [Bắt đầu cài đặt Lazyload](#bắt-đầu-cài-đặt-lazyload)
- [Làm thế nào để Responsive video từ Youtube](#làm-thế-nào-để-responsive-video-từ-youtube)

## Làm thế nào để nhúng video Youtube vào Website

Cách nhanh nhất và đơn giản nhất để chèn Video Youtube vào trang là sử dụng phần tử iframe:

- Truy cập vào một video bất kì trên Youtube.
- Nhấp vào nút Chia sẻ bên dưới trình phát video.
- Nhấp vào nút Nhúng trong cửa sổ bật lên.
- Sao chép và dán mã vào tài liệu của bạn.

![Làm thế nào để nhúng video Youtube vào Website](/images/lam-the-nao-de-nhung-video-youtube-vao-website.jpg)

### Vấn đề xảy ra khi nhúng video từ Youtube vào Website

- Bạn có thể gặp sự cố về hiệu suất khi nhúng video Youtube bằng iframe.
- Trang web sẽ ngay lập tức tải video Youtube khi tải trang và chặn hiển thị DOM cho đến khi tải xong trình phát video.
- Điều này sẽ làm tăng đáng kể thời gian tải trang và do đó làm hỏng trải nghiệm người dùng.
- Code dùng để chèn video Youtube vào website không hỗ trợ chức năng responsive video khi ta nhúng vào.

## Bắt đầu cài đặt Lazyload

Ở bài viết trước mình đã có một bài viết về Lazyload Image Và Iframe bạn xem lại bài viết đó để sử dụng nó nhé.

[Thêm class lazyload cho image và iframe](https://tuanducdesign.com/2021/01/lazyload-image-va-iframe)

## Làm thế nào để Responsive video từ Youtube

Các trang web như YouTube, Vimeo,… là hai trong những mạng xã hội chia sẻ video lớn nhất thế giới và thông thường các dịch vụ này đều có chức năng cho phép người dùng nhúng video vào trong trang web của mình. Tuy nhiên, code dùng để chèn video Youtube, Vimeo vào website lại không hỗ trợ chức năng responsive video khi ta nhúng vào.

Nghĩa là các video khi được chèn vào thì chúng sẽ không tự động thu nhỏ hoặc phóng ra mỗi khi kích thước màn hình thay đổi. Và đây sẽ làm một sự khó chịu đối với người dùng khi Video trên thiết bị di động cũng như Tablet hiển thị không phù hợp. Và rất có thể, bạn sẽ mất đi một lượng người dùng đối với Website của bạn. Để responsive video thì bạn làm như sau.

Đầu tiên là HTML của thành phần chính.

```html
<html>
    <head>
        <title>Demo</title>
    </head>
    <body>
    .
    <!-- data-embed là tên id của video -->
    <div class="youtube" data-embed="Pz3tm92Zpvs">
        <div class="play-button"></div>
    </div>
    </body>
</html>
```

Tiếp theo là Javascript để hiện thị ra khung video.

```javascript
function () {
    for (var t = document.querySelectorAll(".youtube"), e = 0; e < t.length; e++) {
        var a = "https://images.youtube.com/vi/" + t[e].dataset.embed + "/0.jpg",
            o = new Image;
        o.src = a, o.addEventListener("load", void t[e].appendChild(o)), t[e].addEventListener("click", function () {
            var t = document.createElement("iframe");
            t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", ""), t.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1"), this.innerHTML = "", this.appendChild(t)
        })
    }
}();
```

Cuối cùng là CSS để hiện đầy đủ được bố cục của khung video.

```css
.youtube,
.youtube .play-button,
.youtube images {
    cursor: pointer;
}

.youtube {
    background-color: #000;
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
}

.youtube images {
    width: 100%;
    top: -16.82%;
    left: 0;
    opacity: .7;
}

.youtube .play-button {
    width: 90px;
    height: 60px;
    background-color: #df2229;
    z-index: 1;
    border-radius: 6px;
}

.youtube .play-button:before {
    content: "";
    border-style: solid;
    border-width: 15px 0 15px 26px;
    border-color: transparent transparent transparent #fff;
}

.youtube .play-button,
.youtube .play-button:before,
.youtube iframe,
.youtube images {
    position: absolute;
}

.youtube .play-button,
.youtube .play-button:before {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
}

.youtube iframe {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}
```

Tổng hợp lại thì ta có như sau:

```html
<html>
    <head>
        <title>Demo</title>
        <style>
            .youtube,
            .youtube .play-button,
            .youtube images {
                cursor: pointer;
            }

            .youtube {
                background-color: #000;
                position: relative;
                padding-top: 56.25%;
                overflow: hidden;
            }

            .youtube images {
                width: 100%;
                top: -16.82%;
                left: 0;
                opacity: .7;
            }

            .youtube .play-button {
                width: 90px;
                height: 60px;
                background-color: #df2229;
                z-index: 1;
                border-radius: 6px;
            }

            .youtube .play-button:before {
                content: "";
                border-style: solid;
                border-width: 15px 0 15px 26px;
                border-color: transparent transparent transparent #fff;
            }

            .youtube .play-button,
            .youtube .play-button:before,
            .youtube iframe,
            .youtube images {
                position: absolute;
            }

            .youtube .play-button,
            .youtube .play-button:before {
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
            }

            .youtube iframe {
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
            }
        </style>
    </head>
    <body>
    .
    <!-- data-embed là tên id của video -->
    <div class="youtube" data-embed="Pz3tm92Zpvs">
        <div class="play-button"></div>
    </div>
    <script>
        function () {
            for (var t = document.querySelectorAll(".youtube"), e = 0; e < t.length; e++) {
                var a = "https://images.youtube.com/vi/" + t[e].dataset.embed + "/0.jpg",
                    o = new Image;
                o.src = a, o.addEventListener("load", void t[e].appendChild(o)), t[e].addEventListener("click", function () {
                    var t = document.createElement("iframe");
                    t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", ""), t.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1"), this.innerHTML = "", this.appendChild(t)
                })
            }
        }();
    </script>
    </body>
</html>
```

Dựa vào các kiến thức vốn có từ các bài trước, bạn có thể tối ưu thêm khi chèn video Youtube vào website.

- [Bộ Ba Thư Viện Thần Thánh Giúp Website Tối Ưu](https://tuanducdesign.com/2021/02/bo-ba-thu-vien-than-thanh-giup-website-toi-uu)
- [Tăng Tốc Website Từ Preload](https://tuanducdesign.com/2021/01/tang-toc-website-tu-preload)

Nếu bố cục của khung video quá to hoặc ảnh bị mờ thì bạn chỉnh lại các đoạn sau trong css nhé!

```css
.youtube images {
    width: 100%;
    top: -16.82%;
    left: 0;
    opacity: .7;
}

.youtube iframe {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}
```

Chúc các bạn thành công.
