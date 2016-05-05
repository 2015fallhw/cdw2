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
<v t="leo.20160428112536.1"><vh>@clean scrum3-40323217_2.md</vh></v>
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
Title: 40323217-期中報告
Category: bg5
Tags: scrum3, task1
Author: 40323217
@others
 
&lt;!-- PELICAN_END_SUMMARY --&gt;
 &lt;h2&gt;自評分數為:83分&lt;/h2&gt;&lt;br&gt;
&amp;nbsp;&lt;h2&gt;心得:&lt;/h2&gt;
在做期中報告當中遇到許多的問題&lt;br&gt;
&lt;br&gt;
問題１:New pull request的時候沒有選到gh-pages所以在master底下會產生一份和gh-pages一模一樣的
資料，這告訴我下次要New pull request時要注意分支有沒有選好在按下去。&lt;br&gt;
&lt;br&gt;
問題２:.leo檔裡的.md檔要改成自己的scrum在複製的時候要注意，有發生一個狀況是我直接複製標頭也沒改
就直接改裡面的資料。我發現這樣會導致原本檔案擁有者的資料會被我改到。
解決方式:在複製別人資料時不要用ctrl + C 去leo檔裡save as後改檔名也要記的改leo檔裡標頭名稱(非常重要)要不然
會去改到別人的東西。&lt;br&gt;
&lt;br&gt;
問題３:我在 GIT CLONE Openshift時候碰到沒辦法 GIT CLONE原因是沒有設定id_rsa(private key)和public key
這表示沒有權限可以git clone 遠端資料夾，所以透過puttygen產生兩把鑰匙一把放網頁上(private key)一把放我們近端
在git clone 時候兩把鑰匙會互相比對假如正確就可以git clone。&lt;br&gt;
&lt;br&gt;
問題４:我在git push時發現如果資料有更新也有save沒有推送回去電腦不會給切換分支，這點很重要因為我找很久才找到
原因。&lt;br&gt;
&lt;br&gt;
問題５:我在近端(使用者端)沒按法開起pythob wsgi.py(目前還沒有解決方案)&lt;br&gt;
目前能想到的方式就是把它說的衝突的行數刪掉，這會是最快的方式。&lt;br&gt;
&lt;br&gt;
以上是我在做期中報告時候所碰到的問題&lt;br&gt;
&lt;br&gt;
&lt;h2&gt;Openshift 網頁執行結果圖&lt;/h2&gt;&lt;br&gt;
&lt;img src="./../files/bg5/17_1.png"&gt;&lt;br&gt;
&amp;nbsp;這圖主要藉由leo去編輯編輯有分為近端的wsgi.py(藉由python wsgi.py去啟動近端畫布)跟遠端的Openshift畫布(必須確認近端確認圖形OK後上傳至Openshift)。&lt;br&gt;
&lt;br&gt;&lt;h2&gt;設定Openshift圖方式如下&lt;/h2&gt;&lt;br&gt;
&amp;nbsp;第一步&lt;br&gt;
&lt;img src="./../files/bg5/17_2.png"&gt;&lt;br&gt;
&lt;br&gt;&amp;nbsp;第二步&lt;br&gt;
&lt;img src="./../files/bg5/17_3.png"&gt;&lt;br&gt;
&lt;br&gt;&amp;nbsp;第三步&lt;br&gt;
&lt;img src="./../files/bg5/17_4.png"&gt;&lt;br&gt;
&lt;br&gt;&amp;nbsp;第四步&lt;br&gt;
&lt;img src="./../files/bg5/17_5.png"&gt;&lt;br&gt;
&lt;br&gt;&amp;nbsp;第五步:設定public and private key &lt;br&gt;
先設定puttygen產生兩把鑰匙(方式如以前以樣不清楚可以參閱老師以前所拍攝影片)-&gt;到Openshift-&gt;Setting-&gt;Add a new key-&gt;把你的public key放到這-&gt;近端放 id_rsa(private key放在cdw2/home/.ssh-&gt;.ssh資料夾要用命令列創指令為mkdir .ssh)以上步驟完成後就可以git clone  Openshift的倉儲下來近端。&lt;br&gt;
&lt;br&gt;&lt;h2&gt;近端畫布內容介紹(組員須知基本款)&lt;/h2&gt;
&lt;br&gt;
&lt;img src="./../files/bg5/17_6.png"&gt;&lt;br&gt;
&lt;br&gt;
&lt;h2&gt;完成的Onshape的字母圖形&lt;/h2&gt;
&lt;br&gt;
&lt;img src="./../files/bg5/17_7.png"&gt;&lt;br&gt;
&lt;br&gt;
協同的目的是在由大家分配好工作之後分別對於一個專案進行協同，這個Onshape的字母B是由組員所繪製後分配到每個人的作業，這次的作業我是被分配到2D畫布字母B，我發現他和Onshape不同地方是Onshape是藉由限制條件去組立而leo編輯器是藉由調整鏈條方向、位置及角度去達到編輯的目的。&lt;br&gt;
&lt;br&gt;
&lt;h2&gt;期中心得:&lt;/h2&gt;這次期中報告我是被分配到2D平面B字母當中有外型介紹、轉變方向、移動位置我想老師主要的目的是讓我們知道在協同當中你所扮演的角色有的是組長有的是組員所以組長跟組員之間需要溝通也需要互相配合，這次利用Fork來進行協同的過程當中我們需要藉由LEO來進行編輯字母(ABCD)我們一開始沒有把位置制定好所以我的原點在(0,0)但是我們組長後來跟我說我的位置在(0.80)這讓我知道在協同當中溝通真的很重要，要不然有可能做到別人的位置去(意思指0,0位置是別人的)近端部分你必須先確認好你的圖形是正確的再將圖形推送到Openshift而在openshift裡有用到以前的puttygen觀念設定鑰匙，還有怎樣把github的資料複製到openshift上並且把近端的畫布顯示在遠端上。&lt;br&gt;
&lt;h2&gt;註解:&lt;/h2&gt;&lt;br&gt;
期中報告需做項目整理&lt;br&gt;
1.近端畫布(python wsgi.py)及遠端畫布(openshift)倉儲分支在gh-pages。 &lt;br&gt;
2.Onshape(ABCD)功課，依照每個組員所分配到的字母下去畫。&lt;br&gt;
3.master的期中報告內容(依照所學習的狀況下去做)。</t>
</tnodes>
</leo_file>
