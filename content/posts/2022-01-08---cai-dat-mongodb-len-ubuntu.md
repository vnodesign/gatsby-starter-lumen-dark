---
template: post
title: Cài đặt MongoDB lên Ubuntu
date: 2022-01-08T00:00:00.000+07:00
authorName: Tuan Duc Design
category: MongoDB
tags:
- Ubuntu
- MongoDB
slug: "/series/cai-dat-mongodb-len-ubuntu"
thumbnail: "/images/cai-dat-mongodb-tren-ubuntu.jpeg"
description: Trong bài viết này chúng ta cùng tìm hiểu về cách cài đặt MongoDB lên hệ điều hành Ubuntu
---
Trong bài viết này chúng ta cùng tìm hiểu về cách cài đặt MongoDB lên hệ điều hành Ubuntu.

![Cài đặt MongoDB lên Ubuntu](/images/cai-dat-mongodb-tren-ubuntu.jpeg)

Sau đây là tổng quan nhanh về các bước chúng ta trải qua khi **cài đặt MongoDB trên Ubuntu**.

* Cài đặt phiên bản cộng đồng MongoDB
* Nhập khóa công khai được sử dụng bởi hệ thống quản lý gói
* Tạo tệp danh sách cho MongoDB
* Tải lại cơ sở dữ liệu gói cục bộ
* Cài đặt các gói MongoDB
* Khởi động MongoDB
* Dừng MongoDB

Sau đây là hướng dẫn chi tiết từng bước để cài đặt MongoDB trên Ubuntu.

MongoDB 5.0 Community Edition hỗ trợ các bản phát hành Ubuntu LTS (hỗ trợ dài hạn) 64-bit sau trên kiến trúc x86_64:

* 20.04 LTS ("Focal")
* 18.04 LTS ("Bionic")
* 16.04 LTS ("Xenial")

MongoDB chỉ hỗ trợ phiên bản 64-bit của các nền tảng này.

MongoDB 5.0 Community Edition trên Ubuntu cũng hỗ trợ kiến ​​trúc ARM64 trên một số nền tảng nhất định.

## Cài đặt phiên bản cộng đồng MongoDB

Làm theo các bước sau để cài đặt MongoDB Community Edition bằng trình quản lý gói apt.

### Nhập khóa công khai được sử dụng bởi hệ thống quản lý gói

Từ ứng dụng Terminal, hãy phát hành lệnh sau để nhập Khoá GPG công khai MongoDB từ [https://www.mongodb.org/static/pgp/server-5.0.asc](https://www.mongodb.org/static/pgp/server-5.0.asc "https://www.mongodb.org/static/pgp/server-5.0.asc"):

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```

Thao tác sẽ phản hồi bằng một OK.

Tuy nhiên, nếu bạn nhận được lỗi cho biết rằng gnupg chưa được cài đặt, bạn có thể:

Cài đặt gnupg và các thư viện bắt buộc của nó bằng lệnh sau:

```bash
sudo apt-get install gnupg
```

Sau khi cài đặt, hãy thử nhập lại khóa:

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```

### Tạo tệp danh sách cho MongoDB

Tệp danh sách thay đổi từ bản phát hành Ubuntu sang bản phát hành.

Chạy lệnh tương ứng trong ứng dụng Terminal cho phiên bản Ubuntu của bạn.

Khi chạy cho Ubuntu 20.04 (Focal)

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
```

Khi chạy cho Ubuntu 18.04 (Bionic)

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
```

Khi chạy cho Ubuntu 16.04 (Xenial)

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
```

### Tải lại cơ sở dữ liệu gói cục bộ

Chạy lệnh sau trong terminal để tải lại cơ sở dữ liệu gói cục bộ.

```bash
sudo apt-get update
```

### Cài đặt các gói MongoDB

Chạy lệnh sau sẽ cài đặt Gói MongoDB.

```bash
sudo apt-get install -y mongodb-org
```

Không bắt buộc. Mặc dù bạn có thể chỉ định bất kỳ phiên bản MongoDB nào khả dụng, apt-get sẽ nâng cấp các gói khi có phiên bản mới hơn. Để tránh nâng cấp ngoài ý muốn, bạn có thể ghim gói ở phiên bản hiện được cài đặt:

```bash
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-database hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-org-shell hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
```

## Khởi động MongoDB

Để khởi động MongoDB, hãy chạy lệnh sau trong Terminal.

```bash
sudo systemctl start mongod
```

Nếu bạn gặp lỗi tương tự như sau khi khởi động mongod:

```bash
Failed to start mongod.service: Unit mongod.service not found.
```

Chạy lệnh sau trước tiên:

```bash
sudo systemctl daemon-reload
```

Sau đó chạy lại lệnh start ở trên.

## Dừng MongoDB

Để dừng MongoDB, hãy chạy lệnh sau trong Terminal

```bash
sudo systemctl stop mongod
```

## Kết

Trong Hướng dẫn MongoDB - **Cài đặt MongoDB trên Ubuntu** này, chúng ta đã học cách cài đặt MongoDB trên Ubuntu, khởi động MongoDB và dừng MongoDB.