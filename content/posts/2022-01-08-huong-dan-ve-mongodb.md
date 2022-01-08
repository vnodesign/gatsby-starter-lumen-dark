---
template: post
title: Hướng dẫn về MongoDB
date: 2022-01-08T00:00:00+07:00
authorName: Tuan Duc Design
category: MongoDB
tags:
- Mongodb
slug: "/series/huong-dan-ve-mongodb"
thumbnail: "/images/huong-dan-ve-mongodb.png"
description: Tìm hiểu MongoDB từ những điều cơ bản bao gồm Mongo Shell, Cài đặt MongoDB,
  MongoDB Script, Tài liệu và Hoạt động CRUD của chúng, Bộ sưu tập, Cơ sở dữ liệu,
  Bộ bản sao, Tìm kiếm văn bản, MapReduce, Sao lưu và Khôi phục, MongoDB giao tiếp
  với Java, Kotlin, NodeJS; Câu hỏi phỏng vấn MongoDB, v.v.
fbCommentUrl: "/series/huong-dan-ve-mongodb"

---
Trong Hướng dẫn về MongoDB này, chúng ta sẽ tìm hiểu các kiến thức cơ bản về MongoDB, các Thao tác CRUD khác nhau có sẵn cho Tài liệu, Collection và Cơ sở dữ liệu MongoDB và tích hợp MongoDB với các ứng dụng được phát triển bằng các ngôn ngữ lập trình như Java, Python, Kotlin, Java Script, v.v. Chúng ta cũng sẽ thực hiện bạn thông qua các ví dụ MongoDB khác nhau để hiểu rõ hơn về cú pháp.

![Hướng dẫn về MongoDB](/images/huong-dan-ve-mongodb.png)

## Mục lục hướng dẫn MongoDB

1. **Bắt đầu với MongoDB** - Trong các hướng dẫn về MongoDB sau đây, chúng ta sẽ cài đặt MongoDB và bắt đầu với Mongo Shell. Chúng tôi cũng sẽ học cách viết mã trong các tệp JavaScript.
   * Cài đặt MongoDB trên Ubuntu
   * Cài đặt Mongo Shell
   * Cài đặt MongoDB Script
2. **Cơ sở dữ liệu MongoDB** - Sau các hướng dẫn về MongoDB cung cấp ý tưởng về MongoDB là gì, cách tạo và xóa nếu không cần thiết.
   * Cơ sở dữ liệu MongoDB
   * Tạo cơ sở dữ liệu MongoDB
   * Xoá cơ sở dữ liệu MongoDB
3. **MongoDB Collection** - MongoDB Collection tương tự như một bảng trong SQL. Nếu chứa nhiều tài liệu (hồ sơ). Sau đây là các hướng dẫn về MongoDB sẽ giúp bạn hiểu rõ hơn về Collection MongoDB, cách tạo và xóa bộ sưu tập MongoDB.
   * MongoDB Collection
   * Tạo MongoDB Collection
   * Xoá MongoDB Collection
4. **Tài liệu MongoDB** - Tài liệu MongoDB chứa các cặp khóa/giá trị như thuộc tính/giá trị trong một bảng. Sau đây là các Hướng dẫn về MongoDB sẽ giúp bạn với các thao tác CRUD mà bạn có thể thực hiện trên tài liệu MongoDB và các khái niệm nâng cao hơn như nhân bản, v.v.
   * Tài liệu trong MongoDB
   * Chèn tài liệu trong MongoDB
   * Truy vấn tài liệu trong MongoDB
   * Cập nhật tài liệu trong MongoDB
   * Xoá tài liệu trong MongoDB
   * Giới hạn tài liệu trong MongoDB
   * Bỏ qua tài liệu trong MongoDB
   * Sắp xếp các tài liệu trong MongoDB
   * Thiết lập nhân bản trong MongoDB
5. **Các khái niệm về MongoDB** - MongoDB thực sự hiện đại. Nó sử dụng các chức năng như Tìm kiếm văn bản, MapReduce, Sao lưu, v.v., ở cốt lõi của nó.
   * Tìm kiếm văn bản trong MongoDB
   * MapReduce trong MongoDB
   * Sao lưu dữ liệu trong MongoDB
6. **Tích hợp MongoDB với các ngôn ngữ lập trình khác** - Nếu bạn muốn tích hợp ứng dụng MongoDB của mình với các ứng dụng được viết bằng ngôn ngữ lập trình như Java, Kotlin, Python, v.v., các hướng dẫn sau của MongoDB sẽ giúp bạn trong quá trình tích hợp.
   * Kết nối với MongoDB từ Java
   * Kết nối với MongoDB từ Python
   * Kết nối với MongoDB từ Kotlin
   * **MongoDB Khác** - Sau đây là các Hướng dẫn về MongoDB khác.
     * Gỡ cài đặt MongoDB khỏi Ubuntu

## Một số điều mà bạn cần biết trước khi bắt đầu

Không có gì đặc biệt mà bạn nên biết trước khi bắt đầu với loạt Hướng dẫn về MongoDB này. Nhưng nó có thể hữu ích, nếu bạn biết một chút về khái niệm Cơ sở dữ liệu quan hệ và Cơ sở dữ liệu NoSQL.

## MongoDB là gì

MongoDB là một chương trình cơ sở dữ liệu

* **Miễn phí** - Bạn không phải trả giá để sử dụng nó trong ứng dụng của mình.
* **Nguồn mở** - Nguồn mở và cộng đồng nguồn mở đóng góp vào sự phát triển của chương trình cơ sở dữ liệu MongoDB.
* **Đa nền tảng** - MongoDB xây dựng trên một nền tảng (chẳng hạn như Linux) hoạt động trên các nền tảng khác (Windows, MacOS, v.v.) mà không cần bất kỳ sửa đổi nào đối với mã.
* **Định hướng tài liệu** - MongoDB lưu trữ các bản ghi ở dạng JSON giống như tài liệu. Có rất nhiều lợi thế khi làm như vậy. Một ưu điểm đáng chú ý là việc thêm các tính năng mới (các cột trong cơ sở dữ liệu quan hệ) vào cơ sở dữ liệu không yêu cầu phức tạp.
* **NoSQL (Không chỉ SQL)** - MongoDB sử dụng cơ sở dữ liệu dựa trên tài liệu trong đó mỗi tài liệu là một khóa có giá trị phức tạp. Giá trị tài liệu có thể chứa nhiều cặp khóa-giá trị.

MongoDB được viết bằng ngôn ngữ C ++.

## MongoDB tốt hơn như thế nào so với Cơ sở dữ liệu quan hệ

MongoDB đóng gói những ưu điểm của NoSQL. Các khái niệm cơ sở dữ liệu NoSQL được phát triển để làm cho các ứng dụng hiện đại hơn và nhanh hơn. Cơ sở dữ liệu NoSQL khắc phục được những nhược điểm của SQL.

* **Dữ liệu có cấu trúc** - MongoDB có thể xử lý dữ liệu có cấu trúc (như bảng tính hoặc bảng), dữ liệu bán cấu trúc và dữ liệu phi cấu trúc (dữ liệu không có quy tắc, ví dụ là nội dung đa phương tiện).
* **Phát triển Agile** - Tất cả các tính năng NoSQL của MongoDB làm cho nó hoàn toàn phù hợp với phương pháp Agile để phát triển các ứng dụng. Các ứng dụng hiện đại được thiết kế để có ít thời gian phát triển hơn và cập nhật nhanh chóng cho các yêu cầu luôn kết thúc.
* **Khả năng mở rộng** - MongoDB có thể mở rộng theo chiều ngang và do đó có thể đáp ứng các yêu cầu ứng dụng ngày càng tăng với chi phí thấp hơn.

## Một số tính năng khác của MongoDB

* **Nhân bản** - Bạn có thể thiết lập sao chép dữ liệu giữa các cá thể MongoDB. Khi một cá thể gặp sự cố, cá thể khác có thể xử lý các yêu cầu với cùng một dữ liệu có sẵn.
* **MapReduce** - Bạn có thể áp dụng thuật toán MapReduce trên Collection của MongoDB để đưa ra một số báo cáo hữu ích.

## Khi nào sử dụng MongoDB trong ứng dụng của bạn?

Bạn có thể tự hỏi, với vô số cơ sở dữ liệu hiện nay, tại sao bạn nên chọn MongoDB hoặc yêu cầu của dự án nào đòi hỏi việc sử dụng MongoDB.

Cố gắng trả lời các câu hỏi sau và nếu bạn nhận được câu trả lời cho hầu hết các câu hỏi đó, thì bạn hãy chọn MongoDB.

* Dữ liệu của bạn có cấu trúc hay không? Có cấu trúc!
* Ứng dụng của bạn có cần khả năng mở rộng không? nói riêng theo chiều ngang!
* Bạn có muốn thiết kế lượt đồ của mình linh hoạt không?
* Các đối tượng dữ liệu của bạn có di chuyển xung quanh ứng dụng dưới dạng JSON không?
* Bạn không yêu cầu JOINS trên các bộ sưu tập khác nhau?

## Các ứng dụng của MongoDB

Sau đây là một số Ứng dụng của MongoDB được biết đến trong sản xuất:

* **Phân tích nhật ký ứng dụng** - Tính năng không có lược đồ của MongoDB làm cho nó phù hợp nhất để phân tích nhật ký ứng dụng trong đó bản ghi của lượt đồ có thể thay đổi theo thời gian.
* **Tự động xóa** - Collection có giới hạn của MongoDB giúp bạn xóa các bản ghi cũ một cách tự động.

Với chuyến tham quan giới thiệu ngắn gọn về MongoDB, chúng ta hãy cùng nhau đi sâu vào để làm việc với MongoDB.