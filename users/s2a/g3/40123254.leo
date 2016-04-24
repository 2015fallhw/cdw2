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
<v t="amd.20160329174131.1" a="E"><vh>@path ag3</vh>
<v t="amd.20160329174139.1"><vh>@clean 40123254-20160418.md</vh></v>
<v t="leo.20160424210531.1"><vh>@clean scrum40123254_2.md</vh></v>
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
Title: 40123254-回報 ag3 40123254 初步繪圖主機與連結
Category: ag3
Tags: 40123254, task1
Author: 40123254
@others
ag3 組員 40123254 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40123254.leo 並且完成 Task1 的繪圖藍圖建立與註冊

&lt;!-- PELICAN_END_SUMMARY --&gt;

目前所完成的 OpenShift 對應繪圖連結為: &lt;a href="http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1"&gt;http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1&lt;/a&gt;

其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.
</t>
<t tx="amd.20160329211330.1"></t>
<t tx="leo.20160424210531.1">@language md
Title: 40123254-ag3期中報告
Category: ag3
Tags: scrum1, task1, 40123254

期中報告

&lt;!-- PELICAN_END_SUMMARY --&gt;

&lt;h2&gt;自評75

&lt;h2&gt;繪圖ABCD

完成後須先在近端測試可否執行

&lt;img src="./../files/ag3/40123254-1.png"&gt;

新建的.py檔都需注冊藍圖才可執行

&lt;img src="./../files/ag3/40123254-2.png"&gt;

&lt;img src="./../files/ag3/40123254-3.png"&gt;

如果可以順利執行的話即可把資料傳送到Openshift遠端執行

將自行創立的py3.3Openshift網站的資料下載下來

&lt;img src="./../files/ag3/40123254-4.png"&gt;

然後把cdw2裡資料複製到Openshift資料夾中

(請不要複製到.git檔)

git add -A

git commit -m "提交訊息"

git push origin gh-pages

照上述指令提交檔案到Openshift

目前所完成的 OpenShift 對應繪圖連結為

&lt;a href="http://python-cadp13bg99.rhcloud.com/ag3/scrum1_week8_abcd"&gt;ag3-openshift&lt;/a&gt;

&lt;h2&gt;建md檔

建在各組別各組員各自的leo檔中

&lt;img src="./../files/ag3/40123254-5.png"&gt;

&lt;img src="./../files/ag3/40123254-6.png"&gt;

md檔建在content目錄各組目錄下

自評內容都在其中
</t>
</tnodes>
</leo_file>
