---
template: post
title: Hướng Dẫn Sử Dụng Thư Viện DeferJS của Mai Nhựt Tân
date: "2021-01-16T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Library
tags:
  - Preload
  - Font
  - Script
  - Style
  - Lazyload
  - PHP
  - Composer
  - Laravel
  - WordPress
  - DeferJS
slug: /2021/01/huong-dan-su-dung-thu-vien-deferjs-cua-mai-nhut-tan
thumbnail: "/images/user-guide-for-deferjs-library-by-mai-nhut-tan.jpg"
description: Đây là một thư viện hiệu suất nguyên bản siêu nhỏ để tải JS, CSS, hình ảnh, iframe . Trì hoãn hầu hết mọi thứ, dễ dàng tăng tốc trang web của bạn.
fbCommentUrl: /2021/01/huong-dan-su-dung-thu-vien-deferjs-cua-mai-nhut-tan
featured: true
priceCurrency: VNĐ
price: 0.00
ratingValue: 5
ratingCount: 1
reviewCount: 1
worstRating: 1
bestRating: 5
---

Tình cờ mình tìm được một thư viện khá hay của bác Mai Nhựt Tân trên GitHub. Trong bài viết ngày hôm nay mình sẽ hướng dẫn các bạn sử dụng thư viện này trên Website của bạn.

![Hướng Dẫn Sử Dụng Thư Viện DeferJS của Mai Nhựt Tân](/images/user-guide-for-deferjs-library-by-mai-nhut-tan.jpg)

Trang chủ thư viện DeferJS trên kho GitHub của Mai Nhựt Tân: [https://github.com/shinsenter/defer.js](https://github.com/shinsenter/defer.js)

- [Bắt đầu](#bắt-đầu)
- [Chuyển type="text/javascript" sang type="deferjs"](#chuyển-typetextjavascript-sang-typedeferjs)
- [Tiến hành lazyload ảnh và video](#tiến-hành-lazyload-ảnh-và-video)
- [Với các mã nguồn PHP](#với-các-mã-nguồn-php)
- [Với PHP thuần](#với-php-thuần)
- [Tính năng nổi bật](#tính-năng-nổi-bật)
- [Cài đặt thông qua Composer](#cài-đặt-thông-qua-composer)
- [Tải thư viện vào chương trình của bạn](#tải-thư-viện-vào-chương-trình-của-bạn)
- [Bắt buộc](#bắt-buộc)
- [Cách sử dụng cơ bản](#cách-sử-dụng-cơ-bản)
- [Tuỳ chọn](#tuỳ-chọn)
- [Bỏ qua tối ưu hóa cho một số thành phần](#bỏ-qua-tối-ưu-hoá-cho-một-số-thành-phần)
- [Stylesheets và JavaScript](#stylesheets-và-javascript)
- [Trang AMP](#trang-amp)
- [Với WordPress](#với-wordpress)
- [Truy cập vào bảng quản trị](#truy-cập-vào-bảng-quản-trị)
- [Settings](#settings)
- [Basic optimizations](#basic-optimizations)
- [Optimizations for elements on the page](#optimizations-for-elements-on-the-page)
- [Other customizations](#other-customizations)
- [Ignore lazy-loading for some elements](#ignore-lazy--loading-for-some-elements)
- [Support for old browsers (IE9)](#truy-cập-vào-bảng-quản-trị)
- [Truy cập vào bảng quản trị](#truy-cập-vào-bảng-quản-trị)
- [Với Laravel](#với-laravel)

## Bắt đầu

Bạn chỉ cần tải thư viện này một lần trên một trang, chèn ngay sau thẻ mở `<head>` như ví dụ dưới đây:

```html
<html>
<head>
  <title>Demo</title>
  <!-- Put defer.min.js here -->
  <script src="https://cdn.jsdelivr.net/npm/@shinsenter/defer.js@2.3.0/dist/defer.min.js"></script>
  <!-- To support older browsers such as Internet Explorer 9 -->
  <!-- You may want to put IntersectionObserver polyfill right after defer.min.js tag -->
  <script>'IntersectionObserver'in window||document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');</script>
</head>
<body>
  .
</body>
</html>
```

Bởi vì [phiên bản rút gọn của defer.js](https://github.com/shinsenter/defer.js/blob/master/dist/defer_plus.min.js) là siêu nhỏ, bạn có thể đưa nội dung của nó trực tiếp vào tài liệu HTML và tránh yêu cầu mạng.

```html
<html>
<head>
  <title>Demo</title>
  <!-- Put defer_plus.min.js here -->
  <script src="https://cdn.jsdelivr.net/npm/@shinsenter/defer.js@2.3.0/dist/defer_plus.min.js"></script>
  <!-- To support older browsers such as Internet Explorer 9 -->
  <!-- You may want to put IntersectionObserver polyfill right after defer.min.js tag -->
  <script>'IntersectionObserver'in window||document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');</script>
</head>
<body>
  .
</body>
</html>
```

## Chuyển type="text/javascript" sang type="deferjs"

Trước khi chuyển:

```html
<script type="text/javascript">/* my inline script */</script>
<script type="text/javascript" src="path/to/my/script.js"></script>
```

Sau khi chuyển:

```html
<script type="deferjs">/* my inline script */</script>
<script type="deferjs" src="path/to/my/script.js"></script>
```

Bạn có thể sử dụng Công cụ dành cho nhà phát triển của trình duyệt (nhấn phím F12) để xem các yêu cầu được gửi như thế nào.

## Tiến hành lazyload ảnh và video

Cách sử dụng cơ bản: Lazyload tất cả các thẻ `<images>` có class là `lazy`

```html
<script>Defer.dom('images.lazy');</script>
<!-- Here may be a very long content -->
<images class="lazy" alt="Photo 1" data-src="https://picsum.photos/200/300?random=1" width="200" height="300" />
<images class="lazy" alt="Photo 2" data-src="https://picsum.photos/200/300?random=2" width="200" height="300" />
<images class="lazy" alt="Photo 3" data-src="https://picsum.photos/200/300?random=3" width="200" height="300" />
```

Cách sử dụng cơ bản: Lazyload hình nền của thẻ div.

```html
<style>
  #my_div {
    width: 300;
    height: 200;
  }
</style>
<script>
  // Lazy load div tag which has `id="my_div"`
  Defer.dom('#my_div');
</script>
<!-- Here may be a very long content -->
<div id="my_div"
  data-style="background: url(https://images.youtube.com/vi/Uz970DggW7E/hqdefault.jpg) 50% 50% / cover no-repeat;">
  <!-- The content -->
</div>
```

Cách sử dụng nâng cao: Trì hoãn Lazyload thẻ `<images>` 200ms sau khi trang đã tải xong. Sau đó, nó sẽ thêm một class `loaded` vào phần tử hình ảnh được tải lazyload.

```html
<script>Defer.dom('images.lazy-extra', 200, 'loaded');</script>
<!-- Here may be a very long content -->
<images class="lazy-extra" alt="Photo 1" data-src="https://picsum.photos/200/300?random=4" width="200" height="300" />
<images class="lazy-extra" alt="Photo 2" data-src="https://picsum.photos/200/300?random=5" width="200" height="300" />
<images class="lazy-extra" alt="Photo 3" data-src="https://picsum.photos/200/300?random=6" width="200" height="300" />
```

Sử dụng nâng cao: Lazyload với [Intersection observer options](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)

```html
<script>
  // Preload images within 200% of the current viewport size.
  Defer.dom("images.lazy-sooner", 200, "loaded", null, {
    rootMargin: "200%"
  });
</script>
<!-- Here may be a very long content -->
<images class="lazy-sooner" alt="Photo 1" data-src="https://picsum.photos/200/300?random=7" width="200" height="300" />
<images class="lazy-sooner" alt="Photo 2" data-src="https://picsum.photos/200/300?random=8" width="200" height="300" />
<images class="lazy-sooner" alt="Photo 3" data-src="https://picsum.photos/200/300?random=9" width="200" height="300" />
```

Chúng ta có thể sử dụng class CSS đã thêm vào phần tử được lazyload để thêm hoạt ảnh vào các phần tử được tải thành công.

```html
<script>Defer.dom('images.fade', 200, 'loaded');</script>
<style>
  images.fade {
    transition: opacity 500ms ease-in-out;
    opacity: 0;
  }
  images.fade.loaded {
    background: none;
    opacity: 1;
  }
</style>
<!-- Here may be a very long content -->
<images class="fade" alt="Photo 1" data-src="https://picsum.photos/200/300?random=10" width="200" height="300" />
<images class="fade" alt="Photo 2" data-src="https://picsum.photos/200/300?random=11" width="200" height="300" />
<images class="fade" alt="Photo 3" data-src="https://picsum.photos/200/300?random=12" width="200" height="300" />
```

Chức năng này có thể được sử dụng tương tự cho các thẻ khác như thẻ `<iframe>`,`<video>`,`<audio>`,`<picture>`

```html
<script>
  // Lazy load all elements which have CSS class `multi-lazy`
  Defer.dom('.multi-lazy', 200, 'loaded');
</script>
<!-- Here may be a very long content -->
<iframe class="multi-lazy" title="Youtube"
  width="400" height="300" allowfullscreen
  allow="accelerometer;autoplay;encrypted-uploads;gyroscope;picture-in-picture"
  data-style="background: url(https://images.youtube.com/vi/Uz970DggW7E/hqdefault.jpg) 50% 50% / cover no-repeat;"
  data-src="https://www.youtube.com/embed/Uz970DggW7E"></iframe>
<picture class="multi-lazy">
  <source uploads="(min-width:800px)" data-srcset="https://picsum.photos/800/1200">
  <source uploads="(min-width:600px)" data-srcset="https://picsum.photos/600/900">
  <images data-src="https://picsum.photos/200/300" alt="Photo" style="width:auto;">
</picture>
<audio class="multi-lazy" controls>
  <source data-src="sound.ogg" type="audio/ogg">
  <source data-src="sound.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
<video class="multi-lazy" width="320" height="240" controls>
  <source data-src="movie.mp4" type="video/mp4">
  <source data-src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

Hoặc thậm chí thực thi một đoạn JavaScript khi người dùng cuộn đến phần tử `#scroll_reveal`

```html
<script>
  // Show an alert when user scrolled to #scroll_reveal
  Defer.dom('#scroll_reveal', null, null, function(element) {
    window.alert('You scrolled to #' + element.id);
  });
</script>
<!-- Here may be a very long content -->
<div id="scroll_reveal">
  This is my content.
</div>
```

## Với các mã nguồn PHP

Bước này dành cho các bạn đang sử dụng mã nguồn PHP.

### Với PHP thuần

Trang chủ của source code này trên kho GitHub của Mai Nhựt Tân: [https://github.com/shinsenter/defer.php](https://github.com/shinsenter/defer.php)

#### Tính năng nổi bật

- [x] Đơn giản hóa các tùy chọn thư viện
- [x] Nhúng thư viện defer.js
- [x] Chuẩn hóa các phần tử DOM
- [x] Sửa các thẻ meta bị thiếu
- [x] Sửa các thuộc tính phương tiện bị thiếu
- [x] Kết nối trước với nguồn gốc bắt buộc
- [x] Tải trước các yêu cầu chính
- [x] Tìm nạp trước các yêu cầu chính
- [x] Lazy-load hình ảnh cấp trình duyệt cho web
- [x] Lazy-load ngoài màn hình và iframe ẩn
- [x] Lazy-load các video ẩn và ngoài màn hình
- [x] Lazy-load các hình ảnh ẩn và ngoài màn hình
- [x] Lazy-load CSS background images
- [x] Giảm tác động của JavaScript
- [x] Trì hoãn các yêu cầu CSS không quan trọng
- [x] Trì hoãn nội dung của bên thứ ba
- [x] Thêm thẻ `<noscript>` dự phòng cho các đối tượng được tải chậm
- [x] Thêm HTML tùy chỉnh trong khi trình duyệt đang hiển thị trang (màn hình hiển thị)
- [x] Bỏ qua thuộc tính và tối ưu các phần tử
- [x] Bỏ qua thuộc tính và lazyload các phần tử
- [x] Tối ưu tài liệu AMP
- [x] Giảm thiểu đầu ra của HTML

#### Cài đặt thông qua Composer

Trong cửa sổ Terminal của thư mục dự án của bạn, bạn dán đoạn sau vào cửa sổ và bấm enter để cài đặt.

```bash
composer require shinsenter/defer.php
```

#### Tải thư viện vào chương trình của bạn

Trong thư mục dự án của bạn, bạn tìm dòng code tương tự như sau:

```php
// Include the library
require_once __DIR__ . '/vendor/autoload.php';
// TODO: your code is from here
```

#### Bắt buộc

Thư viện này yêu cầu **PHP 5.6** trở lên để có hiệu suất và hỗ trợ tốt hơn, vì vậy bạn cần có phiên bản PHP này hoặc phiên bản PHP mới nhất được cài đặt trên hệ thống của mình.

#### Cách sử dụng cơ bản

Trong thư mục dự án của bạn, bạn chèn đoạn code sau vào file vừa tìm lúc nãy ở bước **Tải thư viện vào chương trình của bạn**:

```php
// Include the library
require_once __DIR__ . '/vendor/autoload.php';

// Create a Defer object
$defer = new \AppSeeds\Defer();

// Read HTML source from file
$html_source = file_get_contents('mypage.html');

// Then get the optimized output
$result = $defer->fromHtml($html_source)->toHtml($html);
var_dump($result);

// You can use the same instance to keep loading another HTML and optimize it
$result2 = $defer->fromHtml(file_get_contents('otherpage.html'))->toHtml();
var_dump($result2);
```

#### Tuỳ chọn

Đây là bước tuỳ chọn để cấu hình DeferJS với dự án của bạn.

```php
// Include the library
require_once __DIR__ . '/vendor/autoload.php';

// Declare the options
$options = [
  // Insert debug information inside the output HTML after optimization.
  // Debug information will contain outer HTMLs of tags before being optimized.
  // Default: false (turn off the debug information)
  'debug_mode' => false,

  // Although defer.js is the soul of this library,
  //   in some regions, you may want to serve defer.js library locally
  //   due to The General Data Protection Regulation (EU).
  // See: https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
  // If you need to manually insert the defer.js library yourself,
  //   please enable this option to true.
  // Default: false (always automatically insert defer.js library)
  'manually_add_deferjs' => false,

  // URL to defer.js javascript file.
  // Default: https://cdn.jsdelivr.net/npm/@shinsenter/defer.js@2.4.2/dist/defer_plus.min.js
  'deferjs_src'  => \AppSeeds\DeferConstant::SRC_DEFERJS_CDN,

  // URL to javascript contains fixes.
  // for some older browsers that do not support IntersectionObserver feature.
  // Default: https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver
  'polyfill_src' => \AppSeeds\DeferConstant::SRC_POLYFILL_CDN,

  // Inline the defer.js library to minimize download time in the browser.
  // Default: true (always automatically inline defer.js library)
  'inline_deferjs' => true,

  // ---------------------------------------------------------------------------

  // This option moves all stylesheets to bottom of the head tag,
  //   and moves script tags to bottom of the body tag
  // See: https://web.dev/render-blocking-resources/
  // Default: true (always automatically fix render blocking)
  'fix_render_blocking' => true,

  // Turn on optimization for stylesheets
  // This option applies to style and link[rel="stylesheet"] tags.
  // Best practices: https://web.dev/extract-critical-css/
  // Default: true (automatically optimize stylesheets)
  'optimize_css'        => true,

  // Optimize script tags (both inline and external scripts).
  // Note: The library only minify for inline script tags.
  // See: https://web.dev/unminified-javascript/
  // Default: true (automatically optimize script tags)
  'optimize_scripts'    => true,

  // Optimize images, picture, video, audio and source tags.
  // See: https://web.dev/browser-level-image-lazy-loading/
  // See: https://web.dev/lazy-loading-images/
  // Default: true (automatically optimize)
  'optimize_images'     => true,

  // Optimize iframe, frame, embed tags.
  // See: https://web.dev/lazy-loading-video/
  // Default: true (automatically optimize)
  'optimize_iframes'    => true,

  // Optimize tags that containing CSS for loading images from external sources.
  // For example, style properties contain background-image:url() etc.
  // See: https://web.dev/optimize-css-background-images-with-media-queries/
  // Default: true (automatically optimize)
  'optimize_background' => true,

  // Create noscript tags so lazy-loaded elements can still display
  //   even when the browser doesn't have javascript enabled.
  // This option applies to all tags that have been lazy-loaded.
  // See: https://web.dev/without-javascript/
  // Default: true (automatically create fallback noscript tags)
  'optimize_fallback'   => true,

  // Optimize anchor tags, fix unsafe links to cross-origin destinations
  // See: https://web.dev/external-anchors-use-rel-noopener/
  // Default: true (automatically optimize)
  'optimize_anchors' => true,

  // Add missing meta tags such as meta[name="viewport"], meta[charset] etc.
  // See: https://web.dev/viewport/
  // Default: true (automatically optimize)
  'add_missing_meta_tags' => true,

  // Preconnect to required URL origins.
  // See: https://web.dev/uses-rel-preconnect/
  // Default: true (automatically optimize)
  'enable_dns_prefetch'   => true,

  // Preload key requests such as stylesheets or external scripts.
  // See: https://web.dev/uses-rel-preload/
  // Default: false (do not apply by default)
  'enable_preloading'     => false,

  // Lazy-load all elements like images, videos when possible.
  // See: https://web.dev/lazy-loading/
  // Default: true (automatically optimize)
  'enable_lazyloading'    => true,

  // Minify HTML output.
  // See: https://web.dev/reduce-network-payloads-using-text-compression/
  // Default: false (do not minify HTML by default)
  'minify_output_html'    => false,

  // ---------------------------------------------------------------------------

  // Detect and optimize third-party URLs if possible (experiment).
  // This option also allows entering an array containing the URL origins to be defered.
  // See: https://web.dev/preload-optional-fonts/
  // Default: true (automatically optimize)
  'defer_third_party' => true,

  // Apply fade-in animation to tags after being lazy-loaded.
  // Default: false (do not apply by default)
  'use_css_fadein_effects' => false,

  // Use random background colors for images to be lazy-loaded.
  // Set the value to 'grey' if you want to use greyish background colors.
  // Default: false (do not apply by default)
  'use_color_placeholder'  => false,

  // ---------------------------------------------------------------------------

  // Default placeholder for lazy-loaded images tags.
  // If this value is not set or empty,
  //   an SVG image will be used to avoid CLS related problems.
  // See: https://web.dev/cls/
  // Default: blank string
  'images_placeholder'    => '',

  // Default placeholder for lazy-loaded iframe tags.
  // Default: 'about:blank'
  'iframe_placeholder' => 'about:blank',

  // ---------------------------------------------------------------------------

  // Show custom HTML content (splashscreen)
  //   while browser is rendering the page (experiment).
  // Default: blank string (no splashscreen)
  'custom_splash_screen' => '',

  // ---------------------------------------------------------------------------

  // Do not lazy-load for URLs containing
  //   one of the array's texts (exact match keywords).
  // Default: blank array
  'ignore_lazyload_paths'  => [],

  // Do not lazy-load for tags containing
  //   one of the array's texts (exact match keywords).
  // Default: blank array
  'ignore_lazyload_texts'  => [],

  // Do not lazy-load for tags containing one of these CSS class names.
  // Default: blank array
  'ignore_lazyload_css_class'  => [],

  // Do not lazy-load for tags matching one of these CSS selectors.
  // See: https://www.w3schools.com/cssref/css_selectors.asp
  // Default: blank array
  'ignore_lazyload_css_selectors'  => [
    // 'header images',
    // 'images#logo',
  ],
];

// Create a Defer object
$defer  = new \AppSeeds\Defer($options);
$result = $defer->fromHtml(file_get_contents('mypage.html'))->toHtml();
var_dump($result);

// Change library options
$defer->options()->debug = true;
$defer->options()->minify_output_html = true;

// Keep loading another HTML and optimize it with new options
$result2 = $defer->fromHtml(file_get_contents('otherpage.html'))->toHtml();
var_dump($result2);
```

#### Tối ưu hóa HTML đầu ra cuối cùng của một trang web

Bạn cũng có thể nắm bắt đầu ra cuối cùng do PHP tạo ra và tối ưu hóa nó trước khi đưa nó trở lại trình duyệt.

```php
// Include the library
require_once __DIR__ . '/vendor/autoload.php';

// Create a callback function
function ob_deferphp($html) {
  // Create a Defer object
  $defer = new \AppSeeds\Defer([
    /* declare options here */
  ]);

  return $defer->fromHtml($html)->toHtml();
}

// Call ob_start() function to create an output buffer
//   and pass above callback function name as its argument.
// This function should be called before any other process to print the content.
ob_start('ob_deferphp');

//  (place your PHP code here)

// And call this to flush optimized output HTML
//   right before you send the final HTML to browser.
ob_end_flush();
```

#### Bỏ qua tối ưu hóa cho một số thành phần

Thêm thuộc tính `data-ignore` vào phần tử mà bạn không muốn thư viện tối ưu hóa thuộc tính đó. Thuộc tính này có thể được sử dụng cho tất cả các phần tử HTML.

```html
<!-- Example for add data-ignore for a script tag -->
<script data-ignore>var MY_IMPORTANT_VARIABLE = 'important value';</script>

<!-- Example for add data-ignore for an images tag -->
<images data-ignore src="my_photo.jpeg" alt="Awesome photo" />
```

Thêm thuộc tính `data-nolazy` vào phần tử mà bạn không muốn thư viện tải nó một cách chậm rãi. Các tối ưu hóa khác cho phần tử đó sẽ vẫn được áp dụng ngoại trừ lazy-load. Thuộc tính này có thể được sử dụng cho tất cả `<images>`, `<picture>`, `<video>`, `<audio>`, `<iframe>` và cả thành phần `<link rel="stylesheet">`.

```html
<!-- Example for add data-nolazy for an images tag -->
<images data-nolazy src="my_photo.jpeg" alt="Awesome photo" />
```

#### Stylesheets và JavaScript

Thư viện này hỗ trợ một phương pháp tải lười hiệu quả hơn cho các bảng định kiểu và thẻ JavaScript có chứa thuộc tính `defer`.

```html
<!-- Example for defer an stylesheet -->
<link defer rel="stylesheet" href="some/heavy/fonts.css">

<!-- Examples for defer some heavy script tags -->
<script defer src="some/heavy/libraries.js"></script>
<script defer>someHeavyTask();</script>
```

Ngay cả khi bạn tắt thư viện, thì các thẻ chứa thuộc tính `defer` ở trên vẫn tương thích ngược và hoạt động tốt trong hầu hết các trình duyệt hiện đại. Bạn có thể yên tâm sử dụng nó.

#### Trang AMP

Chỉ một số tùy chọn của thư viện này có thể áp dụng cho các trang AMP (ví dụ: giảm thiểu nội dung HTML).

### Với WordPress

Nếu bạn dùng Server thì nên kết hợp plugins này với [Module Google PageSpeed](https://tuanducdesign.com/2021/01/cai-dat-module-pagespeed-len-may-chu-nginx/), để tăng khả năng tối ưu hơn.

#### Truy cập vào bảng quản trị

Bạn truy cập vào bảng quản trị, tại menu trái bạn truy cập vào Plugins → Add New.

Tiếp theo tại khung tìm kiếm bạn gõ **Defer.js** tiếp theo bạn bấm vào nút Install Now để bắt đầu cài đặt.

Sau khi cài đặt thành công bạn bấm vào Active để kích hoạt Plugins. Kế tiếp bạn bấm vào Setting của Plugins để cấu hình.

#### Settings

#### Basic optimizations

![Basic optimizations](/images/basic-optimizations-wordpress.png)

Bạn bật Minify HTML lên, chú ý nếu bạn có dùng plugins cache cùng chức năng này thì không cần bật lên.

#### Optimizations for elements on the page

![Optimizations for elements on the page](/images/optimizations-for-elements-on-the-page-wordpress.png)

Bạn giữ nguyên các giá trị ở đây.

#### Other customizations

![Other customizations](/images/other-customizations-wordpress.png)

Tại phần này bạn có thể tuỳ biến thêm một số thứ khác.

#### Ignore lazy-loading for some elements

![Ignore lazy-loading for some elements](/images/ignore-lazy-load-for-some-elements-wordpress.png)

Tại phần này bạn có thể loại trừ các phần tử khỏi lazy-loading.

#### Support for old browsers (IE9)

![Support for old browsers (IE9)](/images/support-for-old-browsers-ie9-wordpress.png)

Phần này bạn để nguyên, đây là script hỗ trợ cho trình duyệt trước như IE9.

Sau khi hoàn thành tất cả các bước, thì bạn bấm vào Update All để lưu tất cả các cấu hình.

### Với Laravel

#### Cài đặt

Trong cửa số Terminal, bạn gõ lệnh sau:

```bash
composer require "shinsenter/defer-laravel"
```

#### Sử dụng toàn cầu

Để cho phép `DeferMiddleware` cho tất cả các router của bạn, thêm `DeferMiddleware` ở đầu class $middleware của file app/Http/Kernel.php:

```php
protected $middleware = [
  \AppSeeds\DeferLaravel\DeferMiddleware::class,
    // .
];
```

#### Cấu hình

Các giá trị mặc định được đặt trong config/defer-laravel.php. Xuất bản cấu hình để sao chép tệp vào cấu hình của riêng bạn:

```php
php artisan vendor:publish --tag="defer-laravel"
```

Xem tệp mẫu cấu hình defer-laravel.php sau để biết thêm chi tiết.

```php
/**
 * 🚀 A Laravel package that focuses on minimizing payload size of HTML document
 *    and optimizing processing on the browser when rendering the web page.
 *
 * @copyright 2021 Mai Nhut Tan https://code.shin.company.
 * @package   shinsenter/defer-laravel
 * @see       https://github.com/shinsenter/defer-laravel
 */

return [
    // Insert debug information inside the output HTML after optimization.
    // Debug information will contain outer HTMLs of tags before being optimized.
    // Default: false (turn off the debug information)
    'debug_mode' => false,

    // ---------------------------------------------------------------------------

    // This option moves all stylesheets to bottom of the head tag,
    //   and moves script tags to bottom of the body tag
    // See: https://web.dev/render-blocking-resources/
    // Default: true (always automatically fix render blocking)
    'fix_render_blocking' => true,

    // Turn on optimization for stylesheets
    // This option applies to style and link[rel="stylesheet"] tags.
    // Best practices: https://web.dev/extract-critical-css/
    // Default: true (automatically optimize stylesheets)
    'optimize_css' => true,

    // Optimize script tags (both inline and external scripts).
    // Note: The library only minify for inline script tags.
    // See: https://web.dev/unminified-javascript/
    // Default: true (automatically optimize script tags)
    'optimize_scripts' => true,

    // Optimize images, picture, video, audio and source tags.
    // See: https://web.dev/browser-level-image-lazy-loading/
    // See: https://web.dev/lazy-loading-images/
    // Default: true (automatically optimize)
    'optimize_images' => true,

    // Optimize iframe, frame, embed tags.
    // See: https://web.dev/lazy-loading-video/
    // Default: true (automatically optimize)
    'optimize_iframes' => true,

    // Optimize tags that containing CSS for loading images from external sources.
    // For example, style properties contain background-image:url() etc.
    // See: https://web.dev/optimize-css-background-images-with-media-queries/
    // Default: true (automatically optimize)
    'optimize_background' => true,

    // Create noscript tags so lazy-loaded elements can still display
    //   even when the browser doesn't have javascript enabled.
    // This option applies to all tags that have been lazy-loaded.
    // See: https://web.dev/without-javascript/
    // Default: true (automatically create fallback noscript tags)
    'optimize_fallback' => true,

    // Optimize anchor tags, fix unsafe links to cross-origin destinations
    // See: https://web.dev/external-anchors-use-rel-noopener/
    // Default: true (automatically optimize)
    'optimize_anchors' => true,

    // Add missing meta tags such as meta[name="viewport"], meta[charset] etc.
    // See: https://web.dev/viewport/
    // Default: true (automatically optimize)
    'add_missing_meta_tags' => true,

    // Preconnect to required URL origins.
    // See: https://web.dev/uses-rel-preconnect/
    // Default: true (automatically optimize)
    'enable_dns_prefetch' => true,

    // Preload key requests such as stylesheets or external scripts.
    // See: https://web.dev/uses-rel-preload/
    // Default: false (do not apply by default)
    'enable_preloading' => false,

    // Lazy-load all elements like images, videos when possible.
    // See: https://web.dev/lazy-loading/
    // Default: true (automatically optimize)
    'enable_lazyloading' => true,

    // Minify HTML output.
    // See: https://web.dev/reduce-network-payloads-using-text-compression/
    // Default: false (do not minify HTML by default)
    'minify_output_html' => false,

    // ---------------------------------------------------------------------------

    // Detect and optimize third-party URLs if possible (experiment).
    // This option also allows entering an array containing the URL origins to be defered.
    // See: https://web.dev/preload-optional-fonts/
    // Default: true (automatically optimize)
    'defer_third_party' => true,

    // Apply fade-in animation to tags after being lazy-loaded.
    // Default: false (do not apply by default)
    'use_css_fadein_effects' => false,

    // Use random background colors for images to be lazy-loaded.
    // Set the value to 'grey' if you want to use greyish background colors.
    // Default: false (do not apply by default)
    'use_color_placeholder' => false,

    // ---------------------------------------------------------------------------

    // Default placeholder for lazy-loaded images tags.
    // If this value is not set or empty,
    //   an SVG image will be used to avoid CLS related problems.
    // See: https://web.dev/cls/
    // Default: blank string
    // Example:
    // 'images_placeholder' => 'https://example.com/noimage.jpg',
    'images_placeholder' => '',

    // Default placeholder for lazy-loaded iframe tags.
    // Default: 'about:blank'
    // Example:
    // 'iframe_placeholder' => 'https://example.com/loading.html',
    'iframe_placeholder' => 'about:blank',

    // ---------------------------------------------------------------------------

    // Show custom HTML content (splashscreen)
    //   while browser is rendering the page (experiment).
    // Default: blank string (no splashscreen)
    // Example:
    // 'custom_splash_screen' => '<div id="loading"><div class="indicator"></div></div>',
    'custom_splash_screen' => '',

    // ---------------------------------------------------------------------------

    // Do not lazy-load for URLs containing
    //   one of the array's texts (exact match keywords).
    // Default: blank array
    'ignore_lazyload_paths' => [],

    // Do not lazy-load for tags containing
    //   one of the array's texts (exact match keywords).
    // Default: blank array
    'ignore_lazyload_texts' => [],

    // Do not lazy-load for tags containing
    //   one of these CSS class names.
    // Default: blank array
    'ignore_lazyload_css_class' => [],

    // Do not lazy-load for tags containing
    //   one of these CSS selectors.
    // See: https://www.w3schools.com/cssref/css_selectors.asp
    // Default: blank array
    'ignore_lazyload_css_selectors' => [
        // 'images#logo',
        // 'header images',
    ],
];
```

#### Lumen

Trên Lumen, chỉ cần đăng ký `DeferServiceProvider` theo cách thủ công trong tệp bootstrap/app.php của bạn:

```php
$app->register(\AppSeeds\DeferLaravel\DeferServiceProvider::class);
```

Đồng thời sao chép tệp cấu hình defer-laravel.php vào config/defer-laravel.php và đưa nó vào hoạt động:

```php
$app->configure('defer-laravel');
```

#### Sử dụng toàn cầu cho Lumen

Để cho phép `DeferMiddleware` cho tất cả các router của bạn, hãy thêm `DeferMiddleware` vào trong tệp bootstrap/app.php của bạn:

```php
$app->middleware([
    // .
    \AppSeeds\DeferLaravel\DeferMiddleware::class,
]);
```

Sau khi hoàn thành bạn các bước trên bạn tiến hành gõ `composer fund` và lưu file để kiểm tra.

Chúc các bạn thành công.
