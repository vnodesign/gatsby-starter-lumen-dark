---
template: post
title: Cài đặt MongoDB lên Ubuntu
date: 2022-01-08T00:00:00+07:00
authorName: Tuan Duc Design
category: MongoDB
tags:
- Ubuntu
- MongoDB
slug: "/series/cai-dat-mongodb-len-ubuntu"
thumbnail: "/images/cai-dat-mongodb-tren-ubuntu.jpeg"
description: Trong bài viết này chúng ta cùng tìm hiểu về cách cài đặt MongoDB lên
  hệ điều hành Ubuntu
fbCommentUrl: "/series/cai-dat-mongodb-len-ubuntu"

---
**Cài đặt MongoDB trên Ubuntu** - Trong hướng dẫn này, chúng ta sẽ học cách cài đặt MongoDB Community Edition trên Ubuntu 16.04. Quá trình này sẽ được giữ nguyên cho các phiên bản 64 bit của Ubuntu 14.04 và Ubuntu 12.04.

Sau đây là tổng quan nhanh về các bước chúng ta trải qua khi **cài đặt MongoDB trên Ubuntu**.

* Nhập khóa công khai MongoDB GPG
* Tạo tệp danh sách cho MongoDB
* Tải lại cơ sở dữ liệu gói cục bộ
* Cài đặt các gói MongoDB
* Khởi động MongoDB
* Dừng MongoDB

Sau đây là hướng dẫn chi tiết từng bước để cài đặt MongoDB trên Ubuntu.

![Cài đặt MongoDB lên Ubuntu](/images/cai-dat-mongodb-tren-ubuntu.jpeg)

## Nhập khóa công khai MongoDB GPG

Mở ứng dụng Terminal lên và chạy lệnh sau để nhập khóa công khai MongoDB GPG.

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
```

## Tạo tệp danh sách cho MongoDB

Tệp danh sách thay đổi từ bản phát hành Ubuntu sang bản phát hành.

Chạy lệnh tương ứng trong ứng dụng Terminal cho phiên bản Ubuntu của bạn.

Khi chạy cho Ubuntu 12.04 (Precise)

```bash
echo “deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.4 multiverse” | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```

Khi chạy cho Ubuntu 14.04 (Trusty)

```bash
echo “deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse” | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```

Khi chạy cho Ubuntu 16.04 (Xenial)

```bash
echo “deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse” | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```

## Tải lại cơ sở dữ liệu gói cục bộ

Chạy lệnh sau trong terminal để tải lại cơ sở dữ liệu gói cục bộ.

```bash
sudo apt-get update
```

## Cài đặt các gói MongoDB

Chạy lệnh sau sẽ cài đặt Gói MongoDB.

```bash
sudo apt-get install -y mongodb-org
```

## Khởi động MongoDB

Để khởi động MongoDB, hãy chạy lệnh sau trong Terminal.

```bash
sudo service mongod start
```

Để xác minh xem MongoDB đã bắt đầu hay chưa, hãy kiểm tra file mongodb.log có vị trí là /var/log/mongodb/mongodb.log

MongoDB sẽ được khởi động và chờ kết nối vào cổng 27017.

## Dừng MongoDB

Để dừng MongoDB, hãy chạy lệnh sau trong Terminal

```bash
sudo service mongod stop
```

## Kết

Trong Hướng dẫn MongoDB - **Cài đặt MongoDB trên Ubuntu** này, chúng ta đã học cách cài đặt MongoDB trên Ubuntu, khởi động MongoDB và dừng MongoDB.
