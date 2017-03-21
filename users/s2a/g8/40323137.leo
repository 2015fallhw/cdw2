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
<v t="amd.20160329174131.1" a="E"><vh>@path ag8</vh>
<v t="amd.20160329174139.1"><vh>@clean 40323137-20160411.md</vh></v>
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
Title: 40323137-回報 ag8初步繪圖主機與連結
Category: ag8
Tags: 40323137, task1
Author: 40323137
@others
40323137


繪圖: &lt;a href="http://ericaw-40323137.rhcloud.com/ag8_40323145/task2"&gt;http://ericaw-40323137.rhcloud.com/ag8_40323145/task2&lt;/a&gt;

組別 github 倉儲:&lt;a href="https://github.com/40323131/cdw2_g8"&gt;https://github.com/40323131/cdw2_g8&lt;/a&gt;

組別 OpenShift 協同繪圖: &lt;a href="http://dwa-2014w11.rhcloud.com/ag8/ag8_main"&gt;http://dwa-2014w11.rhcloud.com/ag8/ag8_main&lt;/a&gt;

個人github pages 網頁: &lt;a href="https://github.com/40323137/cdw2/tree/gh-pages"&gt;https://github.com/40323137/cdw2/tree/gh-pages&lt;/a&gt;

個人其他連結: &lt;a href="https://cad.onshape.com/documents/a2c4e9862065de2f7d22e489"&gt;https://cad.onshape.com/documents/a2c4e9862065de2f7d22e489&lt;/a&gt;

個人 github 倉儲: &lt;a href="https://github.com/40323137/cdw2"&gt;https://github.com/40323137/cdw2&lt;/a&gt;
&lt;!-- PELICAN_END_SUMMARY --&gt;


心得：經過課程教導，知道協同的重要性，設計不是單打獨鬥，而是懂得分工合作，才能把設計藍圖做到最好。

其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.
</t>
<t tx="amd.20160329211330.1"></t>
</tnodes>
</leo_file>
