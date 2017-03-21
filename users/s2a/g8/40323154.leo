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
<v t="amd.20160329174139.1"><vh>@clean 40323154-20160411.md</vh></v>
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
Title: 40323154-回報 ag8初步繪圖主機與連結
Category: ag8
Tags: 40323154, task1
Author: 40323154
@others
&lt;!-- PELICAN_END_SUMMARY --&gt;


期中報告內容:
利用2D繪圖程式繪製出4個A、BACD及ABCD

啟動 cdw11 協同專案

期中報告內容:

利用2D繪圖程式繪製出AAAA、BACD及ABCD

任務一(繪製出四個A): 

 &lt;img src="./../files/ag8Files/40323154/1.png"&gt;

首先在下圖圈起來地方的位置註冊藍圖及導入

 &lt;img src="./../files/ag8Files/40323154/2.png"&gt;
&lt;img src="./../files/ag8Files/40323154/3.png"&gt;
 
將2D繪圖程式打開，需要再繪圖的資料夾底下輸入python wsgi.py執行

&lt;img src="./../files/ag8Files/40323154/4.png"&gt;

若在網頁輸入localhost:5000/下圖圈起來的位置1./位置2.，這個名稱自己定，可以任意變更

&lt;img src="./../files/ag8Files/40323154/5.png"&gt;

開啟之後會出現在這個位置底下的東西

 &lt;img src="./../files/ag8Files/40323154/1.png"&gt;

說明如何繪製字母A，首先可以一個一個慢慢接，也可以利用三角函示來接，如下圖

 &lt;img src="./../files/ag8Files/40323154/6.png"&gt;

利用這樣的方法，繪製出一個完整的A，並利用X方向的增量來繪製出4個A

任務二(依序排列BACD): 

根據上面畫A的方法，只是換成B、C及D而已

只是需要注意到的地方是B的寬度要注意一下，否則會更A重疊


 &lt;img src="./../files/ag8Files/40323154/7.png"&gt;



任務三(由上到下排序ABCD):

依照上面所講的方法，再放進A、B、C及D，調整位置就可以完成了

 &lt;img src="./../files/ag8Files/40323154/8.png"&gt;

結果說明:

如何繪製出字母A是靠a很多X、Y軸的變化，經過數學的運算，才會顯示出字母A的形狀

其實除了用到座標軸參數去排列以外，也可以去更改它的鍊條顏色，只要在下圖的地方改成你要的顏色以及畫布的大小

&lt;img src="./../files/ag8Files/40323154/9.png"&gt;

結論與討論:

基本上熟悉了之後，知道要去修改哪邊的數值，才會出現想要的結果，發現字母出現不如預期，大概也知道要去哪裡找問題

pelican 網誌位置: &lt;a href="http://cdw11-2014w11.rhcloud.com/static/"&gt;http://cdw11-2014w11.rhcloud.com/static/&lt;/a&gt;

分組程式: &lt;a href="http://cdw11-ag100.rhcloud.com/option/"&gt;http://cdw11-ag100.rhcloud.com/option/&lt;/a&gt;

fileuploadform: &lt;a href="http://cdw11-ag100.rhcloud.com/fileuploadform/"&gt;http://cdw11-ag100.rhcloud.com/fileuploadform/&lt;/a&gt;

imageuploadform:&lt;a href="http://cdw11-ag100.rhcloud.com/imageuploadform/"&gt;http://cdw11-ag100.rhcloud.com/imageuploadform/&lt;/a&gt;

</t>
<t tx="amd.20160329211330.1"></t>
</tnodes>
</leo_file>
