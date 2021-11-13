---
template: post
title: Hướng dẫn cấu hình và sử dụng NextDNS trên Modem
date: "2021-04-04T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Series
tags:
  - Network
  - Modem
  - Adblock
  - Module
  - Cloudflare
  - DNS
  - IOS
  - MacOS
  - Windows
  - Linux
  - Chrome OS
  - Browers
  - Routers
  - NextDNS
slug: /series/huong-dan-cau-hinh-va-su-dung-nextdns-tren-modem
thumbnail: "/images/huong-dan-cau-hinh-va-su-dung-nextdns-tren-modem.jpeg"
description: NextDNS là sự lựa chọn hoàn hảo để thay thế DNS Cloudflare, Khi sử dụng NextDNS thì bạn sẽ được bảo vệ toàn diện từ các chức năng nổi bật của NextDNS.
fbCommentUrl: /series/huong-dan-cau-hinh-va-su-dung-nextdns-tren-modem
---

Mình vừa tìm được một dịch vụ DNS khá hay, nên trước khi viết bài này mình cũng đã thử áp dụng và đã thành công. Dịch vụ mà mình muốn nhắc đến ở đây đó là [NextDNS](https://nextdns.io/).

Lưu ý: Đây là danh sách hướng dẫn sử dụng NextDNS gồm 10 phần, xem danh sách series ở đây: [Series hướng dẫn sử dụng NextDNS](https://tuanducdesign.com/series-nextdns)

![Hướng dẫn cấu hình và sử dụng NextDNS trên Modem](/images/huong-dan-cau-hinh-va-su-dung-nextdns-tren-modem.jpeg)

Lưu ý: Một số IP có thể khác nhau nên các bạn đừng thắc mắc tại sao nhé.

- [NextDNS là gì](#nextdns-là-gì)
- [Các tính năng nổi bật trên NextDNS](#các-chức-năng-nổi-bật-trên-nextdns)
- [Bảo vệ](#bảo-vệ)
- [Bảo vệ bạn trước phần mềm độc hại và các cuộc tấn công lừa đảo, tấn công tiền điện tử và hơn thế nữa](#bảo-vệ-bạn-trước-phần-mềm-độc-hại-và-các-cuộc-tấn-công-lừa-đảo-tấn-công-tiền-điện-tử-và-hơn-thế-nữa)
- [Riêng tư](#riêng-tư)
- [Chặn quảng cáo và trình theo dõi trên các trang web và trong ứng dụng - bao gồm cả những quảng cáo và trình theo dõi khó hiểu nhất](#chặn-quảng-cáo-và-trình-theo-dõi-trên-các-trang-web-và-trong-ứng-dụng--bao-gồm-cả-những-quảng-cáo-và-trình-theo-dõi-khó-hiểu-nhất)
- [Kiểm soát từ cha mẹ](#kiểm-soát-từ-cha-mẹ)
- [Bảo vệ con bạn và kiểm soát những gì chúng có thể truy cập trực tuyến và khi nào](#bảo-vệ-con-bạn-và-kiểm-soát-những-gì-chúng-có-thể-truy-cập-trực-tiếp-và-khi-nào)
- [Phân tích & nhật ký theo dõi](#phân-tích--nhật-ký-theo-dõi)
- [Xem những gì đang xảy ra trên thiết bị của bạn bằng phân tích chuyên sâu và nhật ký thời gian thực](#xem-những-gì-đang-xảy-ra-trên-thiết-bị-của-bạn-bằng-phân-tích-chuyên-sâu-và-nhật-ký-thời-gian-thực)
- [Cài đặt dễ dàng](#cài-đặt-dễ-dàng)
- [Được hỗ trợ cố định trên tất cả các nền tảng chính - chỉ mất vài giây để thiết lập](#được-hỗ-trợ-cố-định-trên-tất-cả-các-nền-tảng-chính--chỉ-mất-vài-giây-để-thiết-lập)
- [Một số tính năng nổi bật khác](#một-số-tính-năng-nổi-bật-khác)
- [Cấu hình không giới hạn](#cấu-hình-không-giới-hạn)
- [Tuỳ chỉnh danh sách từ chối / Danh sách cho phép](#tuỳ-chỉnh-danh-sách-từ-chối--danh-sách-cho-phép)
- [Tuỳ chỉnh chặn trang](#tuỳ-chỉnh-chặn-trang)
- [Rewrites](#rewrites)
- [DNSSEC](#dnssec)
- [Handshake](#handshake)
- [Ưu điểm](#ưu-điểm)
- [Nhược điểm](#nhược-điểm)
- [Cấu hình NextDNS](#cấu-hình-nextdns)
- [Thông tin cấu hình trên NextDNS](#thông-tin-cấu-hình-trên-nextdns)
- [Endpoints](#endpoints)
- [Linked IP](#linked-ip)
- [Hướng dẫn thiết lập](#hướng-dẫn-thiết-lập)
- [Với Android](#với-android)
- [Với Private DNS trên Android](#với-private-dns-trên-android)
- [Tải về thông qua Google Play](#tải-về-thông-qua-google-play)
- [Thêm IPv6 vào mạng trên Android](#thêm-ipv6-vào-mạng-trên-android)
- [Thêm IPv4 vào mạng trên Android với IP được liên kết](#thêm-ipv4-vào-mạng-trên-android-với-ip-được-liên-kết)
- [Với IOS](#với-ios)
- [Tải về thông qua AppStore trên IOS](#tải-về-thông-qua-appstore-trên-ios)
- [Thêm IPv6 vào mạng trên IOS](#thêm-ipv6-vào-mạng-trên-ios)
- [Thêm IPv4 vào mạng trên IOS với IP được liên kết](#thêm-ipv4-vào-mạng-trên-ios-với-ip-được-liên-kết)
- [Với Windows](#với-windows)
- [Tải về thông qua trang chủ của NextDNS](#tải-về-thông-qua-trang-chủ-của-nextdns)
- [Thêm IPv6 vào mạng trên Windows](#thêm-ipv6-vào-mạng-trên-windows)
- [Thêm IPv4 vào mạng trên Windows với IP được liên kết](#thêm-ipv4-vào-mạng-trên-windows-với-ip-được-liên-kết)
- [YogaDNS](#yogadns)
- [Với MacOS](#với-macos)
- [Tải về thông qua AppStore trên MacOS](#tải-về-thông-qua-appstore-trên-macos)
- [Thông qua Cấu hình profile trên MacOS](#thông-qua-cấu-hình-profile-trên-macos)
- [Thêm IPv6 vào mạng trên MacOS](#thêm-ipv6-vào-mạng-trên-macos)
- [Thêm IPv4 vào mạng trên MacOS với IP được liên kết](#thêm-ipv4-vào-mạng-trên-macos-với-ip-được-liên-kết)
- [Thông qua Terminal trên MacOS](#thông-qua-terminal-trên-macos)
- [Với Linux](#với-linux)
- [Thông qua Terminal trên Linux](#thông-qua-terminal-trên-linux)
- [Thêm IPv6 vào mạng trên Linux](#thêm-ipv6-vào-mạng-trên-linux)
- [Thêm IPv4 vào mạng trên Linux với IP được liên kết](#thêm-ipv4-vào-mạng-trên-linux-với-ip-được-liên-kết)
- [Với Chrome OS](#với-chrome-os)
- [Tải về thông qua Chrome Web Store](#tải-về-thông-qua-chrome-web-store)
- [Thêm IPv6 vào mạng trên Chrome OS](#thêm-ipv6-vào-mạng-trên-chrome-os)
- [Thêm IPv4 vào mạng trên Chrome OS với IP được liên kết](#thêm-ipv4-vào-mạng-trên-chrome-os-với-ip-được-liên-kết)
- [Với Browers](#với-browers)
- [Trình duyệt Google Chrome](#trình-duyệt-google-chrome)
- [Trình duyệt Firefox](#trình-duyệt-firefox)
- [Trình duyệt Microsoft Edge](#trình-duyệt-microsoft-edge)
- [Trình duyệt Brave](#trình-duyệt-brave)
- [Với Routers](#với-routers)
- [Thêm IPv6 vào mạng trên Routers](#thêm-ipv6-vào-mạng-trên-routers)
- [Thêm IPv4 vào mạng trên Routers với IP được liên kết](#thêm-ipv4-vào-mạng-trên-routers-với-ip-được-liên-kết)
- [Kết](#kết)

## NextDNS là gì

NextDNS là một DNS mạng tương tự như các DNS mạng khác, NextDNS sẽ bảo vệ bạn khỏi tất cả các loại mối đe dọa bảo mật, chặn quảng cáo và trình theo dõi trên các trang web và trong ứng dụng, đồng thời cung cấp Internet an toàn và được giám sát cho trẻ em trên tất cả các thiết bị và trên tất cả các mạng.

## Các tính năng nổi bật trên NextDNS

### Bảo vệ

![Bảo vệ](/images/bao-ve.png)

#### Bảo vệ bạn trước phần mềm độc hại và các cuộc tấn công lừa đảo, tấn công tiền điện tử và hơn thế nữa

Xác định mô hình mối đe dọa của bạn và tinh chỉnh chiến lược bảo mật của bạn bằng cách bật hơn 10 loại bảo vệ khác nhau. Sử dụng nguồn cấp dữ liệu tình báo về mối đe dọa đáng tin cậy nhất chứa hàng triệu miền độc hại - tất cả đều được cập nhật theo thời gian thực. Vượt ra ngoài miền - chúng tôi phân tích các câu hỏi và câu trả lời DNS ngay lập tức (trong khoảng thời gian nano giây) để phát hiện và chặn hành vi độc hại. Thường chỉ có vài giờ từ khi đăng ký miền đến khi bắt đầu tấn công, hệ thống tình báo về mối đe dọa của chúng tôi được xây dựng để bắt các miền độc hại sớm hơn các giải pháp bảo mật cổ điển.

Threat Intelligence Feeds, Google Safe Browsing, Cryptojacking, DNS Rebinding, IDN Homographs, Typosquatting, Domain Generation Algorithms (DGAs), Newly Registered Domains (NRDs), Parked Domains, Top-Level Domains (TLDs), Child Sexual Abuse Material.

### Riêng tư

![Riêng tư](/images/rieng-tu.png)

#### Chặn quảng cáo và trình theo dõi trên các trang web và trong ứng dụng - bao gồm cả những quảng cáo và trình theo dõi khó hiểu nhất

Sử dụng danh sách chặn quảng cáo & trình theo dõi phổ biến nhất - hàng triệu tên miền đều được cập nhật theo thời gian thực. Với tính năng Bảo vệ theo dõi gốc, chặn các trình theo dõi phổ rộng ghi lại hoạt động của bạn trên thiết bị ở cấp hệ điều hành. Phát hiện và chặn các trình theo dõi của bên thứ ba giả dạng thành bên thứ nhất để phá vỡ các biện pháp bảo vệ quyền riêng tư của các trình duyệt như ITP.

### Kiểm soát từ cha mẹ

![Kiểm soát từ cha mẹ](/images/kiem-soat-tu-cha-me.jpg)

#### Bảo vệ con bạn và kiểm soát những gì chúng có thể truy cập trực tuyến và khi nào

Chặn tất cả các trang web chứa nội dung khiêu dâm, bạo lực, vi phạm bản quyền và hơn thế nữa. Thực thi Tìm kiếm an toàn - lọc kết quả khiêu dâm trên tất cả các công cụ tìm kiếm, bao gồm cả hình ảnh và video. Thực thi Chế độ hạn chế của YouTube - lọc các video dành cho người lớn trên YouTube và các trang web khác. Chặn các trang web, ứng dụng và trò chơi cụ thể - Facebook, Tinder, Fortnite và nhiều hơn nữa. Với Giờ giải trí, chỉ cho phép truy cập vào một số trang web, ứng dụng hoặc trò chơi trong thời gian cụ thể mỗi ngày.

### Phân tích & nhật ký theo dõi

![Phân tích & nhật ký theo dõi](/images/phan-tich-va-nhat-ky-theo-doi.jpg)

#### Xem những gì đang xảy ra trên thiết bị của bạn bằng phân tích chuyên sâu và nhật ký thời gian thực

Đo lường hiệu quả của các chiến lược bảo mật, quyền riêng tư và kiểm soát của phụ huynh. Quyết định thời gian lưu giữ nhật ký của bạn - từ một giờ đến hai năm - hoặc tắt hoàn toàn ghi nhật ký để có trải nghiệm không có nhật ký. Đáp ứng các yêu cầu về nơi cư trú dữ liệu của bạn bằng cách chọn nơi lưu trữ nhật ký của bạn - Hoa Kỳ, Liên minh Châu Âu, Vương quốc Anh hoặc Thụy Sĩ. Với Tracker Insights, xem ai đang theo dõi bạn, họ đang theo dõi bao nhiêu lưu lượng truy cập web của bạn và hơn thế nữa.

### Cài đặt dễ dàng

![Cài đặt dễ dàng](/images/cai-dat-de-dang.jpg)

#### Được hỗ trợ cố định trên tất cả các nền tảng chính - chỉ mất vài giây để thiết lập

Tận hưởng các lợi ích về quyền riêng tư và bảo mật của DNS-over-HTTPS và DNS-over-TLS - các giao thức DNS hiện đại và được mã hóa. Bao phủ tất cả các mạng - tại nhà, trên mạng di động, tại cơ quan và trên Wi-Fi công cộng. Không ảnh hưởng đến CPU, bộ nhớ hoặc tuổi thọ pin của bạn - tất cả được thực hiện ở cấp DNS, không phải trên thiết bị của bạn.

### Một số tính năng nổi bật khác

#### Cấu hình không giới hạn

Tạo nhiều cấu hình khác nhau như bạn muốn trong tài khoản của mình - mỗi cấu hình có cài đặt riêng.

#### Tuỳ chỉnh danh sách từ chối / Danh sách cho phép

Chặn hoặc cho phép số lượng miền không giới hạn theo cách thủ công.

#### Tuỳ chỉnh chặn trang

Tùy chỉnh trang tùy chọn hiển thị khi miền đang bị chặn.

#### Rewrites

Đặt hoặc ghi đè phản hồi DNS cho bất kỳ miền nào.

#### DNSSEC

Tự động xác nhận tính xác thực của các câu trả lời DNS.

#### Handshake

Hãy thử hệ thống đặt tên gốc ngang hàng thử nghiệm.

## Ưu điểm

Ưu điểm là bạn được sử dụng miễn phí nhưng bị giới hạn, bạn chỉ có 300.000 truy vấn/1 tháng.

## Nhược điểm

Bạn không được hỗ trợ qua email, thay vào đó thì bạn được hỗ trợ từ cộng đồng.

## Cấu hình NextDNS

Để có thể sử dụng NextDNS thì bạn cần phải tạo tài khoản. Các bạn truy cập vào đường dẫn sau: [https://my.nextdns.io/login](https://my.nextdns.io/login)

Tiếp theo các bạn bấm vào đăng ký và điền đầy đủ thông tin của mình vào đó, sau khi đăng ký thành công bạn sẽ được chuyển vào trang dashboard.

Thông báo sẽ hiển thị như sau:

![Cấu hình NextDNS](/images/cau-hinh-nextdns.png)

Là bạn chưa sử dụng DNS mạng do NextDNS cung cấp, để sử dụng được DNS mạng do NextDNS cung cấp thì trước tiên bạn phải thay đổi DNS Servers.

## Thông tin cấu hình trên NextDNS

### Endpoints

Tại đây bạn có một bảng thông tin như sau:

![Endpoints](/images/endpoints.png)

Đây là thông tin trên NextDNS của bạn, với ID thì nó sẽ được sử dụng trong 7 cách, sử dụng thiết bị chạy hệ điều hành **Android**, **IOS**, **Windows**, **MacOS**, **Linux**, **ChromeOS** và sử dụng trên **trình duyệt**. IPv6 cũng là thông tin tuỳ chọn để cấu hình trong 8 cách trên.

### Linked IP

Lưu ý: phần này vô cùng quan trọng.

Tại đây bạn có một bảng thông tin như sau:

![Linked IP](/images/linked-ip.png)

Đây là thông tin bắt buộc mà bạn cần phải liên kết địa chỉ IP của mạng để sử dụng dịch vụ của NextDNS với 8 cách ở mục Setup Guide.

- DNS Servers (Tuỳ chỉnh máy chủ DNS trên mạng mà bạn đang sử dụng).
- Linked IP (Địa chỉ IP trên mạng mà bạn đang sử dụng. Nếu mạng bị nhổ dây hoặc thiết lập chế độ tự khởi động lại, thì bạn cần phải liên kết lại IP).
- Show advanced options (Hiển thị thêm tuỳ chọn khác, sử dụng DDNS hoặc sử dụng đường dẫn để liên kết lại IP).

## Hướng dẫn thiết lập

Ở mục Setup Guide thì bạn có 8 cách, sử dụng thiết bị chạy hệ điều **Android**, **IOS**, **Windows**, **MacOS**, **Linux**, **ChromeOS**, sử dụng trên **trình duyệt** và sử dụng trên **Routers** (tức thay đổi DNS Servers trong modem).

### Với Android

#### Với Private DNS trên Android

Cách này áp dụng với Android 9 trở lên.

- Đi tới Settings → Network & internet → Advanced → Private DNS.
- Chọn tùy chọn tên máy chủ của nhà cung cấp Private DNS.
- Nhập xxxxxx.dns.nextdns.io và nhấn Save.

Chú ý: thay xxxxxx thành ID của bạn, ID ở trong mục Endpoints.

#### Tải về thông qua Google Play

- Bạn mở Google Play lên cài đặt [NextDNS For Android](https://play.google.com/store/apps/details?id=io.nextdns.NextDNS).
- Trong ứng dụng NextDNS, nhập xxxxxx trong Settings → Configuration ID, sau đó kết nối.

Chú ý: thay xxxxxx thành ID của bạn, ID ở trong mục Endpoints.

#### Thêm IPv6 vào mạng trên Android

Chú ý: Mạng của bạn không hỗ trợ IPv6

- Đi tới Settings → Wi-Fi.
- Nhấn và giữ mạng bạn đã kết nối, sau đó nhấn vào Modify Network.
- Trên một số thiết bị, bạn có thể cần chọn hộp Advanced để xem các cài đặt khác. Để điều chỉnh cài đặt DNS của mình, bạn sẽ cần chuyển cài đặt IP từ DHCP sang Tĩnh.
- Nhập 2a07:a8c0::af:1fd7 cho DNS 1 và 2a07:a8c1::af:1fd7 cho DNS 2
- Sau đó nhấn Save.

#### Thêm IPv4 vào mạng trên Android với IP được liên kết

- Đi tới Settings → Wi-Fi.
- Nhấn và giữ mạng bạn đã kết nối, sau đó nhấn vào Modify Network.
- Trên một số thiết bị, bạn có thể cần chọn hộp Advanced để xem các cài đặt khác. Để điều chỉnh cài đặt DNS của mình, bạn sẽ cần chuyển cài đặt IP từ DHCP sang Static.
- Nhập 45.90.28.16 cho DNS 1 và 45.90.30.16 cho DNS 2.
- Sau đó nhấn Save.

### Với IOS

#### Tải về thông qua AppStore trên IOS

- Bạn mở AppStore lên cài đặt [NextDNS For IOS](https://apps.apple.com/app/nextdns/id1463342498).
- Mở ứng dụng, sau đó đi tới Settings và chuyển đổi "Use Custom Configuration". Nhập xxxxxx cho Configuration ID.
- Sau khi đã làm đầy đủ thì bạn tiến hành kích hoạt NextDNS.

Chú ý: thay xxxxxx thành ID của bạn, ID ở trong mục Endpoints.

#### Thông qua Cấu hình profile trên IOS

Cách này áp dụng với IOS 14 trở lên

- Sử dụng Trình tạo hồ sơ cấu hình Apple của NextDNS có sẵn tại [https://apple.nextdns.io/?configuration=xxxxxx](https://apple.nextdns.io/?configuration=xxxxxx)

Chú ý: thay xxxxxx thành ID của bạn, ID ở trong mục Endpoints.

#### Thêm IPv6 vào mạng trên IOS

Chú ý: Mạng của bạn không hỗ trợ IPv6

- Mở ứng dụng Settings, sau đó truy cập Wi-Fi.
- Nhấn vào biểu tượng ⓘ ở phía bên phải của mạng Wi-Fi mà bạn chọn.
- Trong phần DNS, chuyển đến Configure DNS.
- Chọn Manual.
- Trong danh sách DNS SERVERS, hãy xóa tất cả địa chỉ (nếu có), sau đó thêm 2a07:a8c0::af:1fd7 và 2a07:a8c1::af:1fd7.
- Sau đó nhấn Save.

#### Thêm IPv4 vào mạng trên IOS với IP được liên kết

- Mở ứng dụng Settings, sau đó truy cập Wi-Fi.
- Nhấn vào biểu tượng ⓘ ở phía bên phải của mạng Wi-Fi mà bạn chọn.
- Trong phần DNS, chuyển đến Configure DNS.
- Chọn Manual.
- Trong danh sách DNS SERVERS, hãy xóa tất cả địa chỉ (nếu có), sau đó thêm 45.90.28.16 và 45.90.30.16.
- Sau đó nhấn Save.

### Với Windows

#### Tải về thông qua trang chủ của NextDNS

- Tải xuống trình cài đặt [NextDNS](https://nextdns.io/download/windows/stable).
- Sau khi cài đặt, nhấp chuột phải vào biểu tượng NextDNS trong Systray rồi mở Settings. Đặt xxxxxx cho Configuration ID.
- Nhấp chuột phải vào biểu tượng NextDNS trong Systray, sau đó nhấp vào Enable.

Chú ý: thay xxxxxx thành ID của bạn, ID ở trong mục Endpoints.

#### Thêm IPv6 vào mạng trên Windows

Chú ý: Mạng của bạn không hỗ trợ IPv6

- Nhấp vào Start menu, sau đó nhấp vào Control Panel.
- Nhấp vào Network và Internet, sau đó nhấp vào Sharing Center.
- Nhấp vào Change Adapter Settings.
- Nhấp chuột phải vào mạng Wi-Fi bạn đang kết nối, sau đó nhấp vào Properties.
- Lựa chọn Internet Protocol Version 6.
- Nhấp vào Properties.
- Nhấp vào Sử dụng Following DNS Server Addresses.
- Thay thế các địa chỉ hiện tại (nếu có) bằng 2a07:a8c0::af:1fd7 và 2a07:a8c1::af:1fd7.
- Nhấp vào OK, sau đó nhấp vào Close. Bạn có thể phải khởi động lại trình duyệt của mình.

#### Thêm IPv4 vào mạng trên Windows với IP được liên kết

- Nhấp vào Start menu, sau đó nhấp vào Control Panel.
- Nhấp vào Network và Internet, sau đó nhấp vào Sharing Center.
- Nhấp vào Change Adapter Settings.
- Nhấp chuột phải vào mạng Wi-Fi bạn đang kết nối, sau đó nhấp vào Properties.
- Lựa chọn Internet Protocol Version 4.
- Nhấp vào Properties.
- Nhấp vào Use Following DNS Server Addresses.
- Thay thế các địa chỉ hiện tại (nếu có) bằng 45.90.28.16 và 45.90.30.16.
- Nhấp vào OK, sau đó nhấp vào Close. Bạn có thể phải khởi động lại trình duyệt của mình.

#### YogaDNS

- Cài đặt YogaDNS từ [https://yogadns.com](https://yogadns.com).
- Làm theo hướng dẫn cho NextDNS tại [https://yogadns.com/docs/nextdns](https://yogadns.com/docs/nextdns) và sử dụng xxxxxx cho Configuration ID.

Chú ý: thay xxxxxx thành ID của bạn, ID ở trong mục Endpoints.

### Với MacOS

#### Tải về thông qua AppStore trên MacOS

- Bạn mở AppStore lên cài đặt [NextDNS For MacOS](https://apps.apple.com/app/nextdns/id1464122853).
- Mở ứng dụng, sau đó nhấp vào Preferences trong menu thanh trạng thái ứng dụng và chuyển đến tab Configuration.
- Kiểm tra "Use Custom Configuration" và nhập xxxxxx cho Configuration ID.
- Sau khi đã làm đầy đủ thì bạn tiến hành kích hoạt NextDNS.

Chú ý: thay xxxxxx thành ID của bạn, ID ở trong mục Endpoints.

#### Thông qua Cấu hình profile trên MacOS

Cách này áp dụng với MacOS Big Sur trở lên

- Sử dụng Trình tạo hồ sơ cấu hình Apple của NextDNS có sẵn tại [https://apple.nextdns.io/?configuration=xxxxxx](https://apple.nextdns.io/?configuration=xxxxxx)

Chú ý: thay xxxxxx thành ID của bạn, ID ở trong mục Endpoints.

#### Thêm IPv6 vào mạng trên MacOS

Chú ý: Mạng của bạn không hỗ trợ IPv6

- Mở System Preferences, sau đó nhấp vào Network.
- Chọn mạng bạn được kết nối, sau đó nhấp vào nút Advanced.
- Chuyển đến phần DNS.
- Trong danh sách DNS SERVERS, hãy xóa tất cả địa chỉ (nếu có), sau đó thêm 2a07:a8c0::af:1fd7 và 2a07:a8c1::af:1fd7.
- Bấm OK, sau đó bấm Apply.

#### Thêm IPv4 vào mạng trên MacOS với IP được liên kết

- Mở System Preferences, sau đó nhấp vào Network.
- Chọn mạng bạn được kết nối, sau đó nhấp vào nút Advanced.
- Chuyển đến phần DNS.
- Trong danh sách DNS SERVERS, hãy xóa tất cả địa chỉ (nếu có), sau đó thêm 45.90.28.16 và 45.90.30.16.
- Bấm OK, sau đó bấm Apply.

#### Thông qua Terminal trên MacOS

Bạn tổ hợp phím  **Command + Space Bar** sau đó gõ Terminal.app rồi bấm Enter.

Trong cửa sổ của Terminal bạn gõ:

```sh -c "$(curl -sL https://nextdns.io/install)"```

Kế tiếp là bạn làm theo chỉ dẫn.

Ngoài ra bạn cũng có thể truy cập vào kho lưu trữ mã nguồn mở của NextDNS tại [https://github.com/nextdns/nextdns/wiki](https://github.com/nextdns/nextdns/wiki) để biết hướng dẫn cài đặt thủ công.

### Với Linux

#### Thông qua Terminal trên Linux

Bạn tổ hợp phím **Ctrl + Alt + T** để mở cửa sổ Terminal lên.

Trong cửa sổ của Terminal bạn gõ:

```sh -c "$(curl -sL https://nextdns.io/install)"```

Kế tiếp là bạn làm theo chỉ dẫn.

Ngoài ra bạn cũng có thể truy cập vào kho lưu trữ mã nguồn mở của NextDNS tại [https://github.com/nextdns/nextdns/wiki](https://github.com/nextdns/nextdns/wiki) để biết hướng dẫn cài đặt thủ công.

#### Thêm IPv6 vào mạng trên Linux

Chú ý: Mạng của bạn không hỗ trợ IPv6

- Thay đổi máy chủ DNS của bạn thành 2a07:a8c0::af:1fd7 và 2a07:a8c1::af:1fd7.

#### Thêm IPv4 vào mạng trên Linux với IP được liên kết

- Thay đổi máy chủ DNS của bạn thành 45.90.28.16 và 45.90.30.16.

### Với Chrome OS

#### Tải về thông qua Chrome Web Store

- Bạn mở trình duyệt lên và cài đặt [NextDNS for Chrome OS](https://chrome.google.com/webstore/detail/nextdns/pkdcfcnohogmdmhllilgaheobbjadggl).
- Trong Settings, nhập xxxxxx cho Configuration ID, sau đó kết nối.

Chú ý: thay xxxxxx thành ID của bạn, ID ở trong mục Endpoints.

#### Thêm IPv6 vào mạng trên Chrome OS

Chú ý: Mạng của bạn không hỗ trợ IPv6

- Thay đổi máy chủ DNS của bạn thành 2a07:a8c0::af:1fd7 và 2a07:a8c1::af:1fd7.

#### Thêm IPv4 vào mạng trên Chrome OS với IP được liên kết

- Thay đổi máy chủ DNS của bạn thành 45.90.28.16 và 45.90.30.16.

### Với Browers

#### Trình duyệt Google Chrome

- Đi tới Settings.
- Trong phần Privacy and security, nhấp vào Security.
- Trong phần Advanced, enable Use secure DNS.
- Chọn With: Custom, sau đó nhập ```https://dns.nextdns.io/xxxxxx```.

Chú ý: thay xxxxxx thành ID của bạn, ID ở trong mục Endpoints.

#### Trình duyệt Firefox

Phiên bản chỉ dành cho Windows, macOS và Linux

- Mở Preferences.
- Cuộn xuống phần Network Settings và nhấp vào Settings.
- Cuộn xuống và kiểm tra Enable DNS over HTTPS.
- Chọn Custom, nhập ```https://dns.nextdns.io/xxxxxx``` và nhấp OK.
- Nhập "about:config" vào thanh địa chỉ (và nhấp vào Accept the risk! nếu được hỏi).
- Đặt chế độ network.trr.mode thành 3.

Chú ý: thay xxxxxx thành ID của bạn, ID ở trong mục Endpoints.

#### Trình duyệt Microsoft Edge

- Mở Settings.
- Chuyển đến phần Privacy, search, and services.
- Trong Security, enable Use secure DNS to specify để chỉ định cách tra cứu địa chỉ mạng cho các trang web.
- Chọn Choose a service provider, sau đó nhập ```https://dns.nextdns.io/xxxxxx```.

Chú ý: thay xxxxxx thành ID của bạn, ID ở trong mục Endpoints.

#### Trình duyệt Brave

- Mở Settings.
- Trong phần Privacy and security (trong Additional settings), hãy chuyển đến Security.
- Trong phần Advanced, enable Use secure DNS.
- Chọn With: Custom, sau đó nhập ```https://dns.nextdns.io/xxxxxx```.

Chú ý: thay xxxxxx thành ID của bạn, ID ở trong mục Endpoints.

### Với Routers

Ở đây thì mình sẽ chọn cách sử dụng là Routers, vì nếu mình cấu hình trong đây, thì tất cả các thiết bị dùng mạng này đều có thế truy cập an toàn được.

Đối với cách sử dụng Routers này, thì bạn phải có thông tin đăng nhập vào trang quản lý của modem (thường thì là 192.168.1.1 và 192.168.0.1), thường thì người lắp đặt mạng cho bạn đều cung cấp cho bạn thông tin đăng nhập vào modem khi cần.

Sau khi truy cập thành công, thì bạn nhập tài khoản và mật khẩu mà nhân viên lắp đặt mạng cung cấp cho bạn rồi tiến hành đăng nhập.

#### Thêm IPv6 vào mạng trên Routers

Tìm DNS settings bên trong giao diện, xóa tất cả các địa chỉ (nếu có) rồi nhập hai địa chỉ IP sau vào:

2a07:a8c0::af:1fd7 và 2a07:a8c1::af:1fd7.

Một số routers có thể không hỗ trợ IPv6 ở trên. Trong trường hợp đó, bạn hãy sử dụng:

2a07:a8c0:0000:0000:0000:0000:00af:1fd7 và 2a07:a8c1:0000:0000:0000:0000:00af:1fd7.

#### Thêm IPv4 vào mạng trên Routers với IP được liên kết

Tìm DNS settings bên trong giao diện, xóa tất cả các địa chỉ (nếu có) rồi nhập hai địa chỉ IP sau vào:

45.90.28.16 và 45.90.30.16.

Sau khi đã nhập đầy đủ địa chỉ cho cả IPv6 và IPv4 xong thì bạn lưu lại, và khởi động lại routers để kiểm tra thay đổi.

Đây là kết quả mà mình đã làm được sau khi cấu hình thành công trên routers GPON ONT (Igate GW020).

![Cấu hình thành công NextDNS trên routers](/images/cau-hinh-thanh-cong-nextdns-tren-routers.png)

## Kết

Qua bài viết này thì mình cùng với các bạn đã biết cách cấu hình, sử dụng NextDNS trên các thiết bị rồi phải không nào?

Ở các bài viết tiếp theo thì mình sẽ hướng dẫn các bạn cấu hình một số chức năng trên NextDNS nhé.
