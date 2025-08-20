---
title: '写真データ急増問題をSSD NAS「TERRAMASTER F8 NAS」で解決した話'
draft: false
published: 2025-08-08
tags:
  - 'TERRAMASTER_F8_SSD'
  - 'NAS'
  - 'ストレージ'
  - 'バックアップ'
toc: false
---

高画質なカメラは、良い写真と引き換えに、大量のデータをもたらす。ローカルストレージは圧迫され、バックアップもままならない。この状況を解決するため、SSD NAS「TERRAMASTER F8 SSD」を導入し、ストレージ環境を刷新した。その経緯と具体的な構成について記しておく。

### これまでの課題

元々の環境は以下の通り。

-   **ローカルストレージ:** 1TB SSD
-   **バックアップ先:** 2TB 外付けSSD (TimeMachine用)
-   **データ保管庫:** 8TB HDD NAS (過去の録画データなど)

写真データだけで400GBを超え、ローカルの空き容量は300GBを切っていた。半年以内にパンクするのは、もはや時間の問題だった。

### SSD NAS導入の決め手

まず、一時的な対策としてTimeMachine用だった2TBの外付けSSDを写真保管庫とし、ローカルストレージの逼迫は回避した。しかし、これはMac全体のバックアップ（TimeMachine）を失うことを意味する。

既存の8TB HDD NASをTimeMachine先にすることも考えたが、ランダムアクセスが非常に多いTimeMachineのバックアップは、HDDでは時間がかかりすぎる上に、失敗も頻発していた。バックアップ先としての信頼性に欠け、この選択肢は現実的ではない。

そこで、高速なランダムアクセスが可能で、TimeMachineのバックアップ先として安心して使えるSSD NASを導入することにした。

### 新しいストレージ構成とバックアップ体制

最終的に、以下の構成を新たに組んだ。

-   **NAS:** TERRAMASTER F8 SSD（2TB SSD x 8枚 RAID6）
-   **HDDドライブ:** ロジテック HDD ケース（NASに外付け、8TB HDD x 2個 RAID1）
-   **HDDドライブ:** OMC HDD ケース（NASに外付け、16TB HDD x 1個）

macbookpro（1TBストレージ）━SSD（2TB×1） 
┃
NAS（2TB×8 RAID6）
┃
┣HDD（8TB×2 RAID1）
┗HDD（16TB×1）

これによりTimeMachineサーバを兼ねたファイルサーバ（実効12TB）が手に入った。ファイルサーバはRAID6でSSDの故障に対応し、さらにNASに接続した外付けHDDへ日次バックアップすることで、NAS自体の故障にも備える。

併せてAmazonフォトにもRAW画像をバックアップすることにした。これらの施策によって、得られたメリットは以下の通り。

1.  **信頼性の高いTimeMachine用ストレージの確保**
2.  **導入から10年近く経過したHDD NASの引退**
3.  **データの多重バックアップ体制の確立 (SSD NAS + 外付けHDD + Amazonフォト)**

### 将来の展望

現状のローカル3TB（内蔵1TB + 外付け2TB）で容量が不足する将来も見据えている。TERRAMASTER F8 SSDは10Gbps接続に対応しているため、いずれは屋内配線を10Gbps化し、SSD NASそのものをメインの写真ストレージとして直接利用することも視野に入れている。その時のTimeMachine用ストレージは…まあ、その時にまた最適な方法を考えるだろう。

### 紹介した製品

-   [TERRAMASTER F8 SSD (Amazon)](https://amzn.to/4fryTJz)
-   [SanDisk Extreme 2TB M.2 NVMe SSD (Amazon)](https://amzn.to/40Y8ehw)
-   [ロジテック HDD ケース(Amazon)](https://amzn.to/4moZFoG)