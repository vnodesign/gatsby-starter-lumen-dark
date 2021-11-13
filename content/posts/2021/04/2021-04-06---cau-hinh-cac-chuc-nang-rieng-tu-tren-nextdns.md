---
template: post
title: Cấu hình các chức năng riêng tư trên NextDNS
date: "2021-04-06T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Series
tags:
  - Blocklists
  - Adblock
  - NextDNS
slug: /series/cau-hinh-cac-chuc-nang-rieng-tu-tren-nextdns
thumbnail: "/media/cau-hinh-cac-chuc-nang-rieng-tu-tren-nextdns.png"
description: Trong bài viết này mình sẽ hướng dẫn các bạn cách cấu hình các chức năng riêng tư trên NextDNS.
fbCommentUrl: /series/cau-hinh-cac-chuc-nang-rieng-tu-tren-nextdns
---

Ở bài viết trước chúng ta đã biết cách kích hoạt các chức năng bảo mật cần thiết trên NextDNS, trong bài viết này mình sẽ hướng dẫn các bạn cách cấu hình các chức năng riêng tư trên NextDNS

Lưu ý: Đây là danh sách hướng dẫn sử dụng NextDNS gồm 10 phần xem danh sách series ở đây: [Series hướng dẫn sử dụng NextDNS](https://tuanducdesign.com/series-nextdns)

![Cấu hình các chức năng riêng tư trên NextDNS](/media/cau-hinh-cac-chuc-nang-rieng-tu-tren-nextdns.png)

- [Các chức năng riêng tư trên NextDNS](#các-chức-năng-riêng-tư-trên-nextdns)
- [Blocklists](#blocklists)
- [Native Tracking Protection](#native-tracking-protection)
- [Block Disguised Third-Party Trackers](#block-disguised-third-party-trackers)
- [Allow Affiliate & Tracking Links](#allow-affiliate--tracking-links)
- [Cấu hình danh sách chặn](#cấu-hình-danh-sách-chặn)
- [Khuyên dùng](#khuyên-dùng)
- [Chức năng của Native Tracking Protection](#chức-năng-của-native-tracking-protection)
- [Chức năng của Block Disguised Third-Party Trackers](#chức-năng-của-block-disguised-third-party-trackers)
- [Chức năng của Allow Affiliate & Tracking Links](#chức-năng-của-allow-affiliate-tracking-links)
- [Kết](#kết)

## Các chức năng riêng tư trên NextDNS

Các bạn chú ý khi sử dụng **Blocklists**, vì nó sẽ chặn một số tên miền của Google.

### Blocklists

![Blocklists](/media/blocklists.png)

Chặn quảng cáo & trình theo dõi bằng cách sử dụng các danh sách chặn phổ biến nhất hiện có - tất cả đều được cập nhật theo thời gian thực. Ở đây mặc định NextDNS đã sử dụng bộ chặn quảng cáo & trình theo dõi rồi.

Chức năng này rất mạnh các bạn lưu ý trước khi sử dụng nhé.

### Native Tracking Protection

![Native Tracking Protection](/media/native-tracking-protection.png)

Chặn các trình theo dõi phổ rộng - thường hoạt động ở cấp hệ điều hành - theo dõi hoạt động của bạn trên thiết bị. Điều này có thể bao gồm tất cả các trang web bạn truy cập, mọi thứ bạn nhập hoặc vị trí của bạn mọi lúc.

Chức năng này còn ở trong phiên bản BETA nên còn thiếu một số hãng điện thoại, nhưng mình thấy như vậy cũng là quá đủ rồi.

### Block Disguised Third-Party Trackers

![Block Disguised Third-Party Trackers](/media/block-disguised-third-party-trackers.png)

Tự động phát hiện và chặn các trình theo dõi của bên thứ ba giả dạng thành bên thứ nhất để phá vỡ các biện pháp bảo vệ quyền riêng tư của trình duyệt gần đây như ITP.

### Allow Affiliate & Tracking Links

![Allow Affiliate & Tracking Links](/media/allow-affiliate-tracking-links.png)

Cho phép tên miền liên kết & theo dõi phổ biến trên các trang web giao dịch, trong email hoặc trong kết quả tìm kiếm. Những người đó thường chỉ được gọi sau khi nhấp vào một liên kết theo cách thủ công.

Chức năng này mình chưa sử dụng nên chưa bên công dụng của nó như nào.

## Cấu hình danh sách chặn

![Add a blocklist](/media/add-a-blocklist.png)

Ở đây NextDNS đã chọn sẵn trình chặn quảng cáo của mình rồi, nếu bạn thấy như vậy vẫn chưa đủ thì có thể cấu hình thêm.

Trong đây mình sẽ liệt kê ra một số danh sách cần thiết như:

- NextDNS Ads & Trackers Blocklist - Danh sách chặn toàn diện để chặn quảng cáo và trình theo dõi ở tất cả các quốc gia. Đây là danh sách chặn bắt đầu được đề xuất. Cái này mặc định của NextDNS nên mình sẽ không thay đổi.
- Disconnect (Ads) - Giải phóng bản thân khỏi sự theo dõi không mong muốn. Tận hưởng Internet nhanh hơn, an toàn hơn.
- WindowsSpyBlocker (Spy) - Chặn gián điệp và theo dõi trên hệ thống Windows.
- UncheckyAds - Chặn nguồn quảng cáo trên trình cài đặt Windows.
- Perflyst's Smart-TV Blocklist - Chặn TV thông minh gửi siêu dữ liệu về nhà, đôi khi có thêm lợi ích là chặn quảng cáo trên giao diện cho các ứng dụng và dịch vụ phim.
- hostsVN - Hosts block ads of Vietnamese - Hosts chặn quảng cáo của người Việt. Cái này mình từng dùng trên IOS và Android rồi, nó chặn một số trang quảng cáo của Việt Nam.
- Goodbye Ads - Được thiết kế đặc biệt để bảo vệ quảng cáo trên điện thoại di động.
- oisd - Danh sách chặn tên miền số 1 của Internet. Chặn Quảng cáo, Quảng cáo trên Điện thoại di động, Lừa đảo, Quảng cáo độc hại, Phần mềm độc hại, Theo dõi, Đo từ xa, CryptoJacking, Phân tích, Phần mềm gián điệp, Ransomware, Thám hiểm, Gian lận, Lạm dụng, Lừa đảo, Spam, Hijack, Tiếp thị gây hiểu lầm.
- Energized Ultimate - Chặn nghiêm ngặt quảng cáo, phần mềm độc hại, thư rác, thống kê & trình theo dõi trên cả duyệt web và ứng dụng. Gói bảo vệ hàng đầu khỏi sự bảo vệ tràn đầy năng lượng.

Ngoài ra còn một số bộ chặn quảng cáo khác nữa, các bạn có thể tìm hiểu thêm.

## Khuyên dùng

- Perflyst's Smart-TV Blocklist (Chặn ADS trên TV)
- WindowsSpyBlocker (Spy) (Chặn gián điệp và theo dõi trên hệ thống Windows.)
- UncheckyAds (Chặn nguồn quảng cáo trên trình cài đặt Windows.)
- Disconnect (Ads)

## Chức năng của Native Tracking Protection

Dựa trên theo dõi gốc của các thiết bị, NextDNS sẽ dựa vào đó để bảo mật theo dõi gốc cho bạn.

## Chức năng của Block Disguised Third-Party Trackers

Nó sẽ nguỵ trang và chặn các trình theo dõi bên thứ ba.

## Chức năng của Allow Affiliate & Tracking Links

Cho phép các tên miền liên kết & theo dõi liên kết phổ biến trên các trang web giao dịch, trong email hoặc trong kết quả tìm kiếm. Những người đó thường chỉ được gọi sau khi nhấp vào một liên kết theo cách thủ công.

## Kết

Như mình đã đề cập ở đề bài chức năng **Blocklists** rất mạnh cho nên vì thế sau khi thêm bộ chặn quảng cáo nào vào thì bạn cũng phải coi logs, để xem nó chặn những tên miền nào. Mình bị mấy phát rồi, trong đó có các trang chủ yếu liên quan đến seo như:

**Google Analytics**, **Google Tag Manager** và **Google Optimize**.
