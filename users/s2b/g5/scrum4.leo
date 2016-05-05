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
<v t="amd.20160329124554.2" a="E"><vh>@path ./../../../</vh>
<v t="amd.20160329164739.1" a="E"><vh>假如要送到 gh-pages 分支, 使用下列按鈕</vh>
<v t="amd.20160329164739.2"><vh>@button gh-pages pelican</vh></v>
</v>
<v t="amd.20160329163719.1" a="E"><vh>假如要在近端檢視, 使用下列按鈕</vh>
<v t="amd.20160329163719.2"><vh>@button local pelican</vh></v>
</v>
<v t="amd.20160329124849.1"><vh>進入 content 目錄</vh></v>
<v t="amd.20160329124903.1" a="E"><vh>@path content</vh>
<v t="amd.20160329174131.1" a="E"><vh>@path bg5</vh>
<v t="leo.20160428112536.1"><vh>@clean scrum4-40323251_2.md</vh></v>
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
<t tx="leo.20160428112536.1">@language md
Title: 40323251-期中報告
Category: bg5
Tags: scrum4, task1
Author: 40323251
@others
 
&lt;!-- PELICAN_END_SUMMARY --&gt;
 
&lt;h3&gt;自評成績:65分&lt;/h3&gt;

&lt;h3&gt;目前所完成的 OpenShift 對應繪圖連結為:&lt;/h3&gt;
 
&lt;a href="http://cdw2bg5-40323251.rhcloud.com/bg5/scrum4_task40323251"&gt;bg5零件繪圖&lt;/a&gt;

&lt;h3&gt;bg5組員畫布 : &lt;/h3&gt;

&lt;a href="http://cdw2bg5-40323251.rhcloud.com/bg5/scrum4_task40323251"&gt;scrum4-40323251-D&lt;/a&gt;



&lt;h3&gt;心得:&lt;/h3&gt;

在這次課程中我擔任的定位是被領導者的組員，聽從組長的意見分配工作給各個組員，將身上所被賦予的任務完成，並且回報狀況，在此次課程中我認為最辛苦的是組長以及能夠同意push的協同者，因為我們的組別中的組長和協同者是不同人，造成回推資料時，總是會多一個步驟。
除了在回推資料方面會造成一些麻煩以外，在繪製字母零件時，需要考慮繪製座標的定位以及原點的偏移量，因為是要與其他組員們協同繪製的，所以在座標位置的精確度必須準確，才不會造成字母重疊的情形發生，而其中在繪製旋轉零件的部分更是複雜，尤其是起點與終點座標，必須要使用計算機使用三角函數進行演算，才可得出長寬高並且換算到座標位置，讓零件的起點與終點準確相接，否則的話圖形無法對齊，會讓圖形不完整，只要掌握這幾個關鍵的重點就能使協同更加順利，也增加繪圖的準確率。



&lt;h3&gt;master主要負責任務 : &lt;/h3&gt;
master的主要任務是繪製畫布以及鍊條，並且將畫布上傳到OpenShift，讓我們所繪製的畫布以及鍊條零件，能夠在網路上直接顯示出來。而在上傳到OpenShift前，必須先在近端的資料中，開啟檔案檢查是否ok？
在近端如何檢查畫布的檔案是否正確時，必須使用python wsgi.py指令，且需要在網址中輸入localhost:5000，就可以在近端檢查所繪製出來的鍊條與畫布是不是正確。
        
&lt;h3&gt;組員畫布截圖畫面 : &lt;/h3&gt;
&lt;img src="./../files/bg5/40323251_1.png"&gt;

&lt;h3&gt;OpenShift截圖畫面 : &lt;/h3&gt;
&lt;img src="./../files/bg5/40323251_2.png"&gt;
&lt;img src="./../files/bg5/40323251_3.png"&gt;



&lt;h3&gt;gh-pages分支頁面主要負責任務 : &lt;/h3&gt;
gh-pages分支頁面最重要的部分是期中報告的leo檔，leo檔的儲存位置.../users/s2b/g5/scrum4.leo，而在leo檔其中，必須.md目錄放在@path content之下的@path bg5的附屬，並且命名時，必須將其改為自己的學號，以避免跟其他組員們衝突，如果沒有更改命名，就進行存檔，則會同時將另一位跟自己檔名一樣的組員的檔案覆蓋掉，造成自己的檔案有兩個，而組員的檔案完全不見的情況，因為務必要改寫其目錄名稱，完成leo檔的編輯後，於@button local pelican按下位於上方列的local-peliacn按鈕，等待完成後即可在近端進行檔案測試，檢查是否有誤，而要進行推送gh-pages分支頁面的時後，必須於@button gh-pages pelican按下於上方列的gh-pages-pelican按鈕，等待完畢後即可進行檔案推送，如此一來期中報告將會顯示在komlab的組別網頁中。

&lt;a href="http://2015fallhw.github.io/cdw2/post/"&gt;cdw2組別網頁首頁&lt;/a&gt;

&lt;h3&gt;gh-pages分支頁面-期中報告的leo檔 : &lt;/h3&gt;
&lt;img src="./../files/bg5/40323251_4.png"&gt;



&lt;h3&gt;在此期中報告中所遇到的bug : &lt;/h3&gt;
以下這兩個問題是我在期中報告時最常遇到的bug，也造成進度完全大延誤。
(1)如果重新clone組長的倉儲並且要轉換gh-pages分支頁面時，輸入git branch時，只會看到master的目錄，這時候如果輸入了git branch gh-pages的話，將會產生新的gh-pages分支，此行為看似沒有問題，但其實會造成之後無法轉換回master主目錄，在這種時候，並不能直接輸入git branch gh-pages，而是應該直接git chechout gh-pages，直接切換到分支，這時候系統會自動偵測到分支的存在並且切換成功，在這種時候的切換才是真正的分支，並且才可以像往常一樣於master&amp;gh-pages之間切換分支。
(2)如果在pull request的時候，一直無法跟組長的進行pull request，導致無法拿取組長倉儲之最新資料,，也無法將組員完成之資料回推之組長倉儲，這種時候最簡單的方法就是直接將倉儲刪除，重新對組長進行一次fork，並且重新進行clone，當然，在clone之前必須先備份已經做好的新資料，以免被覆蓋掉。

&lt;h3&gt;倉儲刪除頁面 : &lt;/h3&gt;
&lt;img src="./../files/bg5/40323251_5.png"&gt;

&lt;h3&gt;按下刪除按鈕後，紅框中必須輸入倉儲名稱，做第二次刪除確認 : &lt;/h3&gt;
&lt;img src="./../files/bg5/40323251_6.png"&gt;

&lt;h3&gt;在組員or老師的倉儲進行fork : &lt;/h3&gt;
&lt;img src="./../files/bg5/40323251_7.png"&gt;

&lt;h3&gt;最後出現於自己的倉儲中，並且已經為fork過的狀態 : &lt;/h3&gt;
&lt;img src="./../files/bg5/40323251_8.png"&gt;
</t>
</tnodes>
</leo_file>
