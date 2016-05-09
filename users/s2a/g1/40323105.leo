<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<?xml-stylesheet ekr_test ?>
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2" tnodes="0" max_tnode_index="0" clone_windows="0"/>
<globals body_outline_ratio="0.5" body_secondary_ratio="0.5">
	<global_window_position top="50" left="50" height="500" width="700"/>
	<global_log_window_position top="0" left="0" height="0" width="0"/>
</globals>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="amd.20160329211330.1"><vh>因為位於 users/s2a/g100 目錄, 必須跳三層才到外圍</vh></v>
<v t="amd.20160329124554.2" a="E"><vh>@path ./../../../</vh>
<v t="amd.20160329164739.1" a="E"><vh>假如要送到 gh-pages 分支, 使用下列按鈕</vh>
<v t="amd.20160329164739.2"><vh>@button gh-pages pelican</vh></v>
</v>
<v t="amd.20160329163719.1" a="E"><vh>假如要在近端檢視, 使用下列按鈕</vh>
<v t="amd.20160329163719.2"><vh>@button local pelican</vh></v>
</v>
<v t="amd.20160329124849.1"><vh>進入 content 目錄</vh></v>
<v t="amd.20160329124903.1" a="E"><vh>@path content</vh>
<v t="amd.20160329174131.1" a="E"><vh>@path ag1</vh>
<v t="amd.20160329174139.1"><vh>@clean 40323105-20160509.md</vh></v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="amd.20160329124554.2"></t>
<t tx="amd.20160329124849.1"></t>
<t tx="amd.20160329124903.1"></t>
<t tx="amd.20160329163719.1"></t>
<t tx="amd.20160329163719.2">@language python
import os
#os.system("pelican content -o output -s local_publishconf.py -t theme/pelican-bootstrap3")
os.system("pelican content -o post -s local_publishconf.py")
g.es("admin pelican 近端執行完畢")


</t>
<t tx="amd.20160329164739.1"></t>
<t tx="amd.20160329164739.2">@language python
import os
os.system("pelican content -o post -s publishconf.py")
g.es("admin pelican 執行完畢")

</t>
<t tx="amd.20160329174131.1"></t>
<t tx="amd.20160329174139.1">@language md
Title: 40323105-期中報告
Category: ag1
Tags: 40323105, task1
Author: 40323105
@others
ag1 組員 40323105 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323105.leo 並且完成 Task1 的繪圖藍圖建立與註冊

==============================

cdw2期中報告

繪出指定字母

步驟:

1.先git clone cdw2資料夾,創建一個ag1_40323105的py檔,裡面打指定字母

2.在myflaskapp和myflaskapp declarations註冊

&lt;img src="http://imgur.com/DmxCOho.jpg" width="100%" /&gt;

&lt;img src="http://imgur.com/eIWQFiX.jpg" width="100%" /&gt;

3.開始在ag1_40323105.py檔繪圖

4.將畫完的圖傳到openshift,首先先用puttygen創建一把鑰匙,然後再新增一個倉儲,將cdw2的網址貼上,後面打master

&lt;img src="http://imgur.com/n4ZLvbW.jpg" width="100%" /&gt;

&lt;img src="http://imgur.com/foyp355.jpg" width="100%" /&gt;

5.打上網址,就可以看到自己畫的圖了

6.確認完之後git push上去就可以了

======================

AAAA:

&lt;a href="http://cdw110504-40323105.rhcloud.com/ag1_40323105/a"&gt;http://cdw110504-40323105.rhcloud.com/ag1_40323105/a&lt;/a&gt;



&lt;img src="http://imgur.com/I8mPCXZ.png" width="100%" /&gt;

BADC:

&lt;a href="http://cdw110504-40323105.rhcloud.com/ag1_40323105/b"&gt;http://cdw110504-40323105.rhcloud.com/ag1_40323105/b&lt;/a&gt;

&lt;img src="http://imgur.com/dheScXm.png" width="100%" /&gt;

ABCD:

&lt;a href="http://cdw110504-40323105.rhcloud.com/ag1_40323105/C"&gt;http://cdw110504-40323105.rhcloud.com/ag1_40323105/C&lt;/a&gt;


&lt;img src="http://imgur.com/X3ZVgJo.png" width="100%" /&gt;


心得:

首先要產生畫布就很不容易了,因為我發現wsgi檔被刪除。之後還要一個一個找點來畫,重複多次之後終於將ABCD都畫完了,覺得畫完之後成就感頗高,但是因為現在倉儲同時多人在做,所以常常會有衝突的問題,因此除了要會畫圖之外,還必須學習如何解決衝突...

</t>
<t tx="amd.20160329211330.1"></t>
</tnodes>
</leo_file>
