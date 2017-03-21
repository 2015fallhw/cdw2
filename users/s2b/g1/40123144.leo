<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2" tnodes="0" max_tnode_index="0" clone_windows="0"/>
<globals body_outline_ratio="0.5" body_secondary_ratio="0.5">
	<global_window_position top="50" left="50" height="500" width="700"/>
	<global_log_window_position top="0" left="0" height="0" width="0"/>
</globals>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="leo.20160421093132.2"><vh>因為位於 users/s2a/g100 目錄, 必須跳三層才到外圍</vh></v>
<v t="leo.20160421093141.1" a="E"><vh>@path ./../../../</vh>
<v t="leo.20160421093145.1"><vh>假如要送到 gh-pages 分支, 使用下列按鈕</vh>
<v t="leo.20160421093250.1"><vh>@button gh-pages pelican</vh></v>
</v>
<v t="leo.20160421093151.1"><vh>假如要在近端檢視, 使用下列按鈕</vh>
<v t="leo.20160421093257.1"><vh>@button local pelican</vh></v>
</v>
<v t="leo.20160421093157.1"><vh>進入 content 目錄</vh></v>
<v t="leo.20160421093204.1" a="E"><vh>@path content</vh>
<v t="leo.20160421093210.1" a="E"><vh>@path bg1</vh>
<v t="leo.20160421093215.1"><vh>@clean 40123144.md</vh></v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="leo.20160421093132.2"></t>
<t tx="leo.20160421093141.1"></t>
<t tx="leo.20160421093145.1"></t>
<t tx="leo.20160421093151.1"></t>
<t tx="leo.20160421093157.1"></t>
<t tx="leo.20160421093204.1"></t>
<t tx="leo.20160421093210.1"></t>
<t tx="leo.20160421093215.1">Title: 40123144-期中報告
Category: bg1
Tags: scrum1, task1, 40123144
Author: 40123144

bg1期中報告
&lt;!-- PELICAN_END_SUMMARY --&gt;
2d鍊條繪圖

組員先定好A B C D起始座標並分配每個人需要繪製的鏈條，使用老師給的鏈條程式做修改。

進端網路上顯示方法
在cd cdw2下啟動wsgi.py程式
確認啟動後開啟我們組別bg1_task1.py協同程式 http://localhost:5000/bg1/bg1_task1
在bg1_task1.py輸入自己修改的程式路徑便會自動抓到修改的程式並在近端顯示
&lt;img src="./../files/bg1/1.png"&gt;

心得
因為六人一起做的原因，所以在接合上好幾次都在做白工，所以我們組長嚴格定義每條鍊條
的座標與旋轉角度才可以完成此次abcd 2D繪圖，另外使用老師之後寫的相對座標系統會比絕
對座標系統好非常多，使用相對坐標系修改時比較不會有座標錯誤就得全部修改的窘境。


</t>
<t tx="leo.20160421093250.1">@language python
import os
os.system("pelican content -o post -s publishconf.py")
g.es("admin pelican 執行完畢")

</t>
<t tx="leo.20160421093257.1">@language python
import os
#os.system("pelican content -o output -s local_publishconf.py -t theme/pelican-bootstrap3")
os.system("pelican content -o post -s local_publishconf.py")
g.es("admin pelican 近端執行完畢")


</t>
</tnodes>
</leo_file>
