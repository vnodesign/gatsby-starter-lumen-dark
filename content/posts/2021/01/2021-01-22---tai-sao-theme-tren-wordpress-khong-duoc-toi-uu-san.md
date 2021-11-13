---
template: post
title: Tại sao theme trên WordPress không được tối ưu sẵn
date: "2021-01-22T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Website
tags:
  - WordPress
  - Theme
  - Tối ưu
  - PageSpeed
slug: /2021/01/tai-sao-theme-tren-wordpress-khong-duoc-toi-uu-san
thumbnail: "/media/tai-sao-theme-tren-wordpress-khong-duoc-toi-uu-san.jpg"
description: Có thể nói mã nguồn WordPress giờ quá phổ biến với người dùng từ các dự án từ bé đến lớn như bán hàng, blog, dịch vụ, công ty.
fbCommentUrl: /2021/01/tai-sao-theme-tren-wordpress-khong-duoc-toi-uu-san
---

Có thể nói mã nguồn WordPress giờ quá phổ biến với người dùng từ các dự án từ bé đến lớn như bán hàng, blog, dịch vụ, công ty.

![Tại sao theme trên WordPress không được tối ưu sẵn](/media/tai-sao-theme-tren-wordpress-khong-duoc-toi-uu-san.jpg)

- [Code chuẩn](#code-chuẩn)
- [Nhiều CSS và Javascript](#nhiều-css-và-javascript)
- [Cách đơn giản nhất để tối ưu](#cách-đơn-giản-nhất-để-tối-ưu)

## Code chuẩn

Khi design ra một giao diện cho WordPress các lập trình viên đều biết sắp xếp sao cho hợp lý hết cả rồi. Ví dụ như thành phần nào cần bật thành phần nào cần tắt dựa trên các options có sẵn trong giao diện.

## Nhiều CSS và Javascript

Đa số các theme cao cấp hiện nay thì rất nhiều CSS và Javascript đặc biết là mấy theme cao cấp kèm theo các plugin build giao diện

Có thể kể đến như :

- Plugins Elementor (Thằng này cực kỳ nặng vì nó chính là thủ phạm gây ra dom)
- Plugins WooCommerce (Thằng này chuyên về bán hàng nhưng nó có một điểm yếu là cực nặng nếu dùng với theme cao cấp vì mấy theme cao cấp hiện này đều có css cho thằng WooCommerce này)

## Cách đơn giản nhất để tối ưu

Mình có hai cách đơn giản nhất để giúp bạn tối ưu website của bạn khi sử dụng mã nguồn WordPress:

- Sử dụng Plugins [An efficient lazy loader (defer.js)](https://wordpress.org/plugins/shins-pageload-magic/) của tác giả Mai Nhựt Tân và Plugins [WP-Rocket](https://wp-rocket.me/) của nhóm phát triển [WP-Media](https://wp-media.me/)
- Sử dụng VPS Nginx kèm với [Module Pagespeed](https://www.modpagespeed.com/doc/) hoặc sử dụng Plugins [WP-Rocket](https://wp-rocket.me/) với [Rocket Nginx](https://github.com/SatelliteWP/rocket-nginx) trên VPS

Chúc các bạn thành công.
