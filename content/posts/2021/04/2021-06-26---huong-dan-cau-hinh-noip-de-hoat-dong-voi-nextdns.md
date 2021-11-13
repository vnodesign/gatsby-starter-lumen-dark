---
template: post
title: Hướng dẫn cấu hình NOIP để hoạt động với NextDNS
date: "2021-06-26T00:00:00.000-07:00"
authorName: Tuan Duc Design
category: Series
tags:
  - NOIP
  - NextDNS
slug: /series/huong-dan-cau-hinh-noip-de-hoat-dong-voi-nextdns
thumbnail: "/media/huong-dan-cau-hinh-noip-de-hoat-dong-voi-nextdns.png"
description: Để tự động cập nhật địa chỉ IP khi sử dụng NextDNS, thì bạn cần cấu hình DDNS trên cả router và NextDNS.
fbCommentUrl: /series/huong-dan-cau-hinh-noip-de-hoat-dong-voi-nextdns
---

Sau hơn hai tháng tìm hiểu về NextDNS và chức năng DDNS trên NextDNS, hôm nay mình sẽ hướng dẫn các bạn cách cấu hình NOIP để hoạt động với NextDNS.

Lưu ý: Đây là danh sách hướng dẫn sử dụng NextDNS gồm 10 phần xem danh sách series ở đây: [Series hướng dẫn sử dụng NextDNS](https://tuanducdesign.com/series-nextdns)

![Hướng dẫn cấu hình NOIP để hoạt động với NextDNS](/media/huong-dan-cau-hinh-noip-de-hoat-dong-voi-nextdns.png)

Với cách sử dụng này, bạn sẽ rút ngắn thời gian hơn như trước. Thay vì phải làm mới lại IP thủ công thì chúng ta sẽ dùng NOIP, để nó tự động làm mới lại địa chỉ IP.

Trước khi bắt đầu vào nội dung chính thì mình sẽ nói qua về NOIP.

So sánh ưu và nhược điểm của tên miền miễn phí(noip.com) và có phí (dyndns.org).

Tên miền miễn phí.

Ưu điểm

    Ưu điểm lớn nhất của loại này là miễn phí, không mất phí gia hạn và sử dụng hàng năm.
    Tốc độ vẫn đảm bảo như tên miền mất phí.

Nhược điểm

    Phải kích hoạt lại sau 14 ngày việc này rất là mệt mỏi (cứ sau 14 ngày tên miền sẽ kích hoạt lại nếu không tên miền sẽ tự xóa).
    Có rất nhiều các loại tên miền miễn phí xuất hiên trên thị trường hiện nay nhưng nó không được liên kết với các công ty sản xuất thiết bị đầu cuối nên không có phần đăng nhập ở modem (noip.com nói chung bây giờ cũng phổ biến có mặt trên phần đăng nhập của hầu hết các thiết bị modem).

Tên miền có phí.

Ưu điểm

    Hoạt động rất ổn định (ổn định nhất ở trên các loại modem TP-Link).
    Không phải kích hoạt hàng tuần mà sau 1 năm mới gia hạn lại.
    Hầu hết các loại modem hỗ trợ đầy đủ.

Nhược điểm

    Nhược điểm lớn nhất của loại này là phải đăng ký mất tiền khoảng 25$/năm.

- [Hướng dẫn đăng kí tên miền No-IP miễn phí dùng hàng tuần và tự kích hoạt](#hướng-dẫn-đăng-kí-tên-miền-no--ip-miễn-phí-dùng-hàng-tuần-và-tự-kích-hoạt)
- [Cấu hình NOIP lên router](#cấu-hình-noip-lên-router)
- [Cấu hình DDNS hostname của NOIP qua Linked IP](#cấu-hình-ddns-hostname-của-noip-qua-linked-ip)
- [Kết](#kết)

## Hướng dẫn đăng kí tên miền No-IP miễn phí dùng hàng tuần và tự kích hoạt

Bước 1: Vào website chính của nhà đăng ký tên miền miễn phí là: [https://www.noip.com/](https://www.noip.com/).

Sau khi vào các bạn click vào chữ **Sign Up** để đăng kí một tài khoản tên miền miễn phí.

Bước 2: Chúng ta điền đầy đủ thông tin yêu cầu để tạo tài khoản: Tên email, mật khẩu muốn tạo, tên miền muốn tạo. Sau khi nhập đầy đủ thông tin bạn click vào chữ **Free Sign Up** để hoàn tất.

Bước 3: Sau khi nhấn **Free Sign Up** xong bạn sẽ nhận được Email kích hoạt tài khoản. Bạn cần xác nhận tài khoản đã tạo bằng cách click vào “Confirm Account”.

Lúc này nó sẽ chuyển bạn sang một trang khác và có thông báo **Your acc is now active!** là bạn đã hoàn tất đăng ký.

Bước 4: Kiểm tra lại tên miền của chúng ta đăng kí thành công hay chưa bằng cách vào link [https://my.noip.com/#!/dynamic-dns](https://my.noip.com/#!/dynamic-dns).

Nếu có một dòng tên miền tức là ta đã đăng kí thành công tên miền miễn phí rồi.

Bước 5: Tạo tên đăng nhập cho tài khoản bạn vào link này: [https://my.noip.com/#!/account](https://my.noip.com/#!/account).

Chúng ta điền **Username** muốn tạo rồi nhấn **Save** để tạo tài khoản cho tên miền bạn. Nhiều modem yêu cầu tài khoản nên chúng ta bắt buộc phải dùng tài khoản này, dùng email nó sẽ không nhận.

## Cấu hình NOIP lên router

Chú ý: cách này mình làm với router GPON ONT (Igate GW020). Những bạn dùng thiết bị khác, thì có thể lên Google để tìm cách cấu hình NOIP trên thiết bị đó.

Đối với các thiết bị router các bạn vào trang quản lý của modem (thường thì là 192.168.1.1 và 192.168.0.1), thường thì người lắp đặt mạng cho bạn đều cung cấp cho bạn thông tin đăng nhập vào modem khi cần thiết.

Tìm Advanced Features → DNS bên trong giao diện, tìm tiếp Dynamic DNS. Bên trong Dynamic DNS bạn bấm vào **Add**.

- Mục **D-DNS provider** bạn chọn NO-IP, mỗi loại modem có cách đặt riêng.

- Mục **Hostname** nhập vào tên miền bạn cần kết nối.

- Mục **Interface** bạn chọn ppp0.4.

- Trong mục **NO-IP Settings** chúng ta điền tên tài khoản của noip.com chúng ta vừa mới tạo và điền mật khẩu tài khoản noip của bạn vào.

Sau đó bấm **Apply/Save** là được.

## Cấu hình DDNS hostname của NOIP qua Linked IP

Trong mục **Linked IP**, bạn bấm vào **Show advanced options**. Tiếp theo bạn bấm vào **Configure DDNS** trong Configure DDNS, bạn nhập tên miền bạn cần kết nối (tương tự như ở mục Hostname, khi cấu hình NOIP trên router).

Sau đó bấm **Save** để hoàn tất quá trình cấu hình NOIP với NextDNS

## Kết

Đây là Series cuối cùng của chuỗi Series hướng dẫn sử dụng NextDNS, hi vọng gặp lại bạn trong các chuỗi Series khác.

Chúc bạn thành công.
