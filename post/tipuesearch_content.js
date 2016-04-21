var tipuesearch = {"pages":[{"url":"http://2015fallhw.github.io/cdw2/post/pages/about/","tags":"misc","text":"CDW2 gh-pages 網頁 CDW2 倉儲: https://github.com/2015fallhw/cdw2 線上分組程式: http://simpleflask-2014openshift.rhcloud.com/option","title":"About"},{"url":"http://2015fallhw.github.io/cdw2/post/40123134-hui-bao-bg1-40123134-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg1","text":"Author: kmol bg1 組員40123134 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2bg1-40123156.rhcloud.com/bg1/scrum40123134_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123134-回報 bg1 40123134 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/user1-ce-shi-content-mu-lu-xia-de-md-dang-an-zhuan-huan.html","tags":"ag1","text":"網站類別分為 ag1~ag10, bg1~bg10, 與 MISC, 各組員必須透過 Leo Editor, Pelican, 與 Github pull requests 完成. CDW2 網頁: http://2015fallhw.github.io/cdw2/ 二甲文章類別: ag1~ag10 二乙文章類別: bg1~bg10 本網頁將 Pelican 設定分為本地端與 gh-pages 端的原因在於 disqus 設定, 本地端無需 disqus 討論功能, 而 gh-pages 端則需要網址全稱才能正確與 disqus 設定連結, 因此所有使用者在近端檢視時, 必須採用近端的按鈕, 而要送到遠端前則必須要用遠端按鈕產生所需要的 post 目錄下的所有資料後, 再提交推送. 以下為圖片引用方法, 建議放到 files 目錄下, 並且用相對目錄引用各自放在以用戶名稱命名的子目錄中, 以避免多用戶因採相同檔名而覆寫: 得到結果如下: 以下資料則從原先的 cdw2 gh-pages 分支中的 index.html 取出: cdw2 所在倉儲: https://github.com/2015fallhw/cdw2 以下繪圖由 s2a 的 g100 組所完成, 其中包括 s2b 的 g99 協同繪圖 (藍色零件). http://cdw2-ladisai.rhcloud.com/ag100/task2 以下則為4個零件中的第一個弧參數設定比較: 0(表示 x 軸轉角為0), 1(第一個選擇長度較大的弧), 0(且以右手向內畫弧) 0(表示 x 軸轉角為0), 0(第一個選擇長度較小的弧), 0(且以右手向內畫弧) 0(表示 x 軸轉角為0), 1(第一個選擇長度較大的弧), 1(且以右手向外畫弧) 0(表示 x 軸轉角為0), 0(第一個選擇長度較小的弧), 1(且以右手向外畫弧) http://cdw2-ladisai.rhcloud.com/bg99/fourchain Task1 相關: https://cmsimply-cadlab.rhcloud.com/get_page?heading=2016springCD 鍊條零件製造流程: 組立流程: 如何協同編輯 CDW2 gh-pages 網頁: 首先必須要認清的是 gh-pages 網頁位於 https://github.com/2015fallhw/cdw2 倉儲中的 gh-pages 分支, 與 master 分支中的資料不可弄混. CDW2 倉儲中的 master 分支中的資料為 Python3 wsgi 應用程式, 各組必須協同完成任務之後, 將 master 分支中的程式以 git remote add 的方式推送到各組的 OpenShift Python3 應用程式, 然後再將各組的應用程式連結與任務操作過程資料回報到 gh-pages 網頁. gh-pages 分支中各組分別使用 users 目錄下的 .md 檔, 以本地端按鈕產生本地端檢查用的網頁資料, 若沒有錯誤, 再提交推送到遠端, 若倉儲回應需要 pull 回資料, 一定要使用 git pull origin gh-pages 的方式, 明確取回 gh-pages 的分支合併, 若 content 目錄中的檔案能夠自動合併, 即可再用近端 Pelican 按鈕建立網頁資料, 檢查無誤後, 記得要再用遠端 Pelican 專用按鈕建立網頁後提交推送. 另外建議各組員在 content 目錄下建立文章標題時, 可以在標題最前方加上學號, 因為目前的設定會使用各 .md 檔案中的標題, 以拼音的方式建立對應的 html 網頁檔案, 假如有兩份 .md 檔案擁有相同的 Title, 則 Pelican 將會報錯, 一直到使用者修正後才能再正確進行 .md -> .html 檔案轉換的工作. 採用 pull requests 尋求 gh-pages 合併時, 因為網頁中的許多檔案都將產生衝突, 因此通常無法直接在 Github 中直接合併, 各組組長必須要根據系統的提示, 將資料拉到本地端後, 再視實際狀況處理 .md 的衝突 (千萬不要以手動處理 .html 檔案的衝突), 然後再用本地端按鈕建立網頁, 檢視無誤後再用遠端按鈕建立網頁資料後, 執行提交推送流程, 假如各組組長在處理衝突過程, 已經有其他組對遠端的倉儲版本進行更版, 則前述拉回處理衝突與合併的動作, 就必須再重複一遍. 祝大家協同愉快!!!","title":"user1-測試 content 目錄下的 md 檔案轉換"},{"url":"http://2015fallhw.github.io/cdw2/post/40123128-hui-bao-bg4-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg4","text":"bg4 組員 40123128 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2bg4-40323201.rhcloud.com/bg4/scrum1_task1 其中已經在主程式中導入 scrum6_task1.py 中的 scrum6_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123128-回報 bg4 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323208-hui-bao-bg4-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg4","text":"bg4 組員 40323208 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2bg4-40323201.rhcloud.com/bg4/scrum1_task1 其中已經在主程式中導入 scrum5_task1.py 中的 scrum5_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323208-回報 bg4 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323253scrum5-hui-bao-bg5-scrum5-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg5","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323253scrum5-回報 bg5 scrum5 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323203-hui-bao-bg4-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg4","text":"bg4 組員 40323203已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2bg4-40323201.rhcloud.com/bg4/scrum1_task1 其中已經在主程式中導入 scrum3_task1.py 中的 scrum3_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323203-回報 bg4 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323205-hui-bao-bg4-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg4","text":"bg4 組員 40323205 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2bg4-40323201.rhcloud.com/bg4/scrum1_task1 其中已經在主程式中導入 scrum4_task1.py 中的 scrum4_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323205-回報 bg4 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323202-hui-bao-bg4-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg4","text":"bg4 組員 40323202 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2bg4-40323201.rhcloud.com/bg4/scrum1_task1 其中已經在主程式中導入 scrum2_task1.py 中的 scrum2_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323202-回報 bg4 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123226scrum1-hui-bao-g2-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg2","text":"請注意: 這個 .md 檔案應該要放到 s2b/g2目錄中, 而且用學號作為 Tags 分類讓使用者可以較容易透過 Tags 找到某一學員所提供的所有內容. bg2 已經在 cdw2 倉儲中的 master 分支建立對應的組員 g2.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-cadp13ag35.rhcloud.com/g2/scrum1_task40123235 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123226scrum1-回報 g2 scrum1 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123232scrum1-hui-bao-g2-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg2","text":"請注意: 這個 .md 檔案應該要放到 s2b/g2目錄中, 而且用學號作為 Tags 分類讓使用者可以較容易透過 Tags 找到某一學員所提供的所有內容. bg2 已經在 cdw2 倉儲中的 master 分支建立對應的組員 g2.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-cadp13ag35.rhcloud.com/g2/scrum1_task40123235 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123232scrum1-回報 g2 scrum1 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123134scrum1-hui-bao-g1-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg1","text":"請注意: 這個 .md 檔案應該要放到 s2b/g1目錄中, 而且用學號作為 Tags 分類讓使用者可以較容易透過 Tags 找到某一學員所提供的所有內容. bg1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 g1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2bg1-40123156.rhcloud.com/bg1/scrum40123134_task1/ 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123134scrum1-回報 g1 scrum1 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123217scrum1-hui-bao-g2-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg2","text":"請注意: 這個 .md 檔案應該要放到 s2b/g2目錄中, 而且用學號作為 Tags 分類讓使用者可以較容易透過 Tags 找到某一學員所提供的所有內容. bg2 已經在 cdw2 倉儲中的 master 分支建立對應的組員 g2.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-cadp13ag35.rhcloud.com/g2/scrum1_task40123235 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123217scrum1-回報 g2 scrum1 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123131scrum1-hui-bao-g1-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg1","text":"請注意: 這個 .md 檔案應該要放到 s2b/g1目錄中, 而且用學號作為 Tags 分類讓使用者可以較容易透過 Tags 找到某一學員所提供的所有內容. bg1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 g1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2bg1-40123156.rhcloud.com/bg1/scrum40123134_task1/ 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123131scrum1-回報 g1 scrum1 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123244scrum1-hui-bao-g2-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg2","text":"請注意: 這個 .md 檔案應該要放到 s2b/g2目錄中, 而且用學號作為 Tags 分類讓使用者可以較容易透過 Tags 找到某一學員所提供的所有內容. bg2 已經在 cdw2 倉儲中的 master 分支建立對應的組員 g2.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-cadp13ag35.rhcloud.com/g2/scrum1_task40123235 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123244scrum1-回報 g2 scrum1 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123216-hui-bao-ag7-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag7","text":"ag7 組員 40123216 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://python-40123149.rhcloud.com/ag7/a40123216_task0 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123216-回報 ag7 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123255-hui-bao-ag7-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag7","text":"ag7 組員 40123255 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://python-40123149.rhcloud.com/ag7/a40123255_task0 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123255-回報 ag7 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123141-hui-bao-ag7-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag7","text":"ag7 組員 40123141 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://python-40123149.rhcloud.com/ag7/a40123141_task0 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123141-回報 ag7 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123149-hui-bao-ag7-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag7","text":"ag7 組員 40123149 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://python-40123149.rhcloud.com/ag7/a40123149_task0 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123149-回報 ag7 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123119-hui-bao-ag7-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag7","text":"ag7 組員 40123119 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://python-40123149.rhcloud.com/ag7/a40123119_task0 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123119-回報 ag7 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123202scrum1-hui-bao-g2-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg2","text":"請注意: 這個 .md 檔案應該要放到 s2b/g2目錄中, 而且用學號作為 Tags 分類讓使用者可以較容易透過 Tags 找到某一學員所提供的所有內容. bg2 已經在 cdw2 倉儲中的 master 分支建立對應的組員 g2.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-cadp13ag35.rhcloud.com/g2/scrum1_task40123235 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123202scrum1-回報 g2 scrum1 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40023234-hui-bao-ag7-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag7","text":"ag7 組員 40023234 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://python-40123149.rhcloud.com/ag7/a40023234_task0 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40023234-回報 ag7 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123227-hui-bao-ag7-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag7","text":"ag7 組員 40123227 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://python-40123149.rhcloud.com/ag7/a40123227_task0 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123227-回報 ag7 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/ag7-qi-zhong-bao-gao-2d-lian-tiao-hui-tu.html","tags":"ag7","text":"ag7 完成 2D鏈條繪圖 目前所完成的 OpenShift 對應繪圖連結為: http://python-40123149.rhcloud.com/ag7/ag7_task1>","title":"ag7 期中報告 2D 鏈條繪圖"},{"url":"http://2015fallhw.github.io/cdw2/post/40123235scrum1-hui-bao-g2-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg2","text":"請注意: 這個 .md 檔案應該要放到 s2b/g2目錄中, 而且用學號作為 Tags 分類讓使用者可以較容易透過 Tags 找到某一學員所提供的所有內容. bg2 已經在 cdw2 倉儲中的 master 分支建立對應的組員 g2.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-cadp13ag35.rhcloud.com/g2/scrum1_task40123235 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123235scrum1-回報 g2 scrum1 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323212scrum1-hui-bao-bg07-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg07","text":"請注意: 這個 .md 檔案應該要放到 s2b/g6 目錄中, 而且用學號作為 Tags 分類讓使用者可以較容易透過 Tags 找到某一學員所提供的所有內容. bg06 組員 40323212 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323212.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323212scrum1-回報 bg07 scrum1 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323250-qi-zhong-bao-gao.html","tags":"bg9","text":"期中報告 Gh-pages : 在 gh-pages 裡的user/組別 目錄下 新增個人leo檔案，並將.md檔路徑放在content，至於紅色框框為檔案名稱，很多人都使用日期導致檔案一直覆寫。 和上學期個人md檔相同作法，編輯個人學期心得，並顯示於 cdw2首頁 Master : 用於儲存繪圖程式檔案，並將檔案傳上openshift，能夠在遠端直接顯示圖檔，並能夠導入組員零件，已達成協同要求。 近端要在cdw2目錄下，使用python wsgi.py指令，才能夠在localhost5000顯示個人圖檔。 繪圖須註冊藍圖，包括組別與個人，註冊位置在cdw2目錄下之simpleflask.leo 繪圖 : 此部分依照你的需求，若是使用你的藍圖為主畫布，則使用此串原始碼 若為被導入之零件則刪除(尾端/script也要記得刪) 個人檔案 可以使用多個畫布，但導入圖檔畫布要相同 會依照導入順序顯示圖形 若傳上openshift後，幾天沒有開啟會導致頁面暫時關閉，只需按下重啟即可","title":"40323250 - 期中報告"},{"url":"http://2015fallhw.github.io/cdw2/post/40323250-hui-bao-bg9-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg9","text":"bg9 組員 40323250 已經在 cdw2 倉儲中的 master 分支建立對應的組員 暫時完成繪圖AB字母 目前所完成的 OpenShift 對應繪圖連結: bg9藍圖 個人畫布 : scrum1_50_ABCD 目前完成字母，但是都以非常耗時的方式繪圖，在旋轉零件部分較為複雜，與組員的座標定位也要精確，否則會導致圖形組不起來 繪圖要注意自己的圖形的起始位置，以及複製圖形的旋轉中心，能夠掌握這兩點就能減少繪圖的出錯率。 暫時先做到這邊。","title":"40323250-回報 bg9 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123214scrum1-hui-bao-g2-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg2","text":"請注意: 這個 .md 檔案應該要放到 s2b/g2目錄中, 而且用學號作為 Tags 分類讓使用者可以較容易透過 Tags 找到某一學員所提供的所有內容. bg2 已經在 cdw2 倉儲中的 master 分支建立對應的組員 g2.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-cadp13ag35.rhcloud.com/g2/scrum1_task40123235 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123214scrum1-回報 g2 scrum1 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123129-hui-bao-bg1-40123129-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg1","text":"Author: kmol bg1 組員40123129 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2bg1-40123156.rhcloud.com/bg1/task2 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123129-回報 bg1 40123129 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323153-hui-bao-ag9-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag9","text":"ag9 組員 40323153 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323153-回報 ag9 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323150-hui-bao-ag9-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag9","text":"ag9 組員 40323150 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323150-回報 ag9 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323149-hui-bao-ag9-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag9","text":"ag9 組員 40323149 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323149-回報 ag9 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323126-hui-bao-ag9-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag9","text":"ag9 組員 40323126 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323126-回報 ag9 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323132-hui-bao-ag9-40323132-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag9","text":"ag4 組員 40323132 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323132.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323132-回報 ag9 40323132 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323125-hui-bao-ag9-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag9","text":"ag9 組員 40323125 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323125-回報 ag9 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323154-hui-bao-ag8chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag8","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323154-回報 ag8初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323143-hui-bao-ag8chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag8","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323143-回報 ag8初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323145-hui-bao-ag8chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag8","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323145-回報 ag8初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323137-hui-bao-ag8chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag8","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323137-回報 ag8初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323131-hui-bao-ag8chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag8","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323131-回報 ag8初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323111-hui-bao-ag6-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag6","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323111-回報 ag6  初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323123-qi-zhong-bao-gao-nei-rong.html","tags":"ag8","text":"ag8 組員 40323123 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323123.leo 並且完成 其中自評 2D協同繪圖設計: 目前所完成的 OpenShift 對應繪圖連結為: http://dwa-40323123.rhcloud.com/ag8/task1All 導入openshift並啟動2D協同繪圖的wsgi 步驟: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 1.先git clone cdw2的程式碼 2.確定可以用python wsgi.py執行 3.開啟OpenShift並且新增一個python3的程式 4.在中間可以看到open source URL →URL填你copy的網址 5.如果順利成功可以看到網頁已經建立成功了~接著打你們的網址列就可以看到2D的圖形顯示了 6.如果要進行修改，必須進入setting新增公私鑰(public key) (private key) 7.如果沒有，使用putty genrate去產生key，複製public key到網址上add public key的地方 8.Export OpenSSH到 Home/.ssh/id_rsa 9.接著就可以進行存取git clone ssh/~~~~~ 10.進去資料夾下git rm -rf * (強制刪除全部) 11.在將更改好的資料複製到資料夾，下git push 就會更新OpenShift中的網站 ※主要下git rm all的原因是因為怕資料衝突，那部分要解比較困難，因為有些要遵守的規則和設定上的使用。 協同畫完的ABCD Onshape組裝與繪畫 由組員進行協同分配繪畫零組件與設計 組合圖如下圖所示 四個零組件ABCD 組裝影片","title":"40323123-期中報告內容"},{"url":"http://2015fallhw.github.io/cdw2/post/40323113-hui-bao-ag5-40323113-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag5","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323113-回報 ag5 40323113 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323116-hui-bao-ag5-40323116-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag5","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323116-回報 ag5 40323116 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123145-hui-bao-ag5-40123145-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag5","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123145-回報 ag5 40123145 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323138-hui-bao-ag4-40323138-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag4","text":"ag4 組員 40323138 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323138.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323138-回報 ag4 40323138 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323144-hui-bao-ag4-40323144-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag4","text":"ag4 組員 40323144 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323144.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323144-回報 ag4 40323144 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323136-hui-bao-ag4-40323136-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag4","text":"ag4 組員 40323136 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323136.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323136-回報 ag4 40323136 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323135-hui-bao-ag4-40323135-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag4","text":"ag4 組員 40323135 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323135.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323135-回報 ag4 40323135 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323109-hui-bao-ag4-40323109-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag4","text":"ag10 組員 40323109 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323109.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323109-回報 ag4 40323109 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323130-hui-bao-ag4-40323130-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag4","text":"ag4 組員 40323130 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323130.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323130-回報 ag4 40323130 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323124-hui-bao-ag3-40323124-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag3","text":"ag3 漂亮組員 40323124 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323124.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323124-回報 ag3 40323124 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323108-hui-bao-ag3-40323108-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag3","text":"ag3 組員 40323108 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323108.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323108-回報 ag3 40323108 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323103-hui-bao-ag3-40323103-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag3","text":"ag3 組員 40323103 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323103.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323103-回報 ag3 40323103 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323101-hui-bao-ag3-40323101-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag3","text":"ag3 組員 40323101 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323101.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323101-回報 ag3 40323101 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323102-hui-bao-ag3-40323102-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag3","text":"ag3 組員 40323102 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323102.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323102-回報 ag3 40323102 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123254-hui-bao-ag3-40123254-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag3","text":"ag3 組員 40123254 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40123254.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123254-回報 ag3 40123254 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323217scrum3-hui-bao-bg5-scrum3-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg5","text":"ag100 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323217scrum3-回報 bg5 scrum3 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/scrum2-hui-bao-ag100-scrum2-yu-scrum1-hui-tu-jie-he.html","tags":"ag100","text":"ag100 組員 scrum2 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum2.leo 並且完成 Task1 的繪圖藍圖建立與註冊 已經將 scrum2 繪圖的部份納入, 並且塗上淡綠色: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum2_task1.py 中的 scrum2_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"scrum2-回報 ag100 scrum2 與 scrum1 繪圖結合"},{"url":"http://2015fallhw.github.io/cdw2/post/scrum2-zai-ci-li-yong-pull-request-yao-qiu-he-bing-gh-pages-fen-zhi-zhong-de-gai-ban-zi-liao.html","tags":"ag100","text":"假如各組員分別在各自同時段 fork 的版本持續工作, 則組長必須擔負以手動解決合併的工作 各組員在建立 pull request 時, 一定要確定 base fork 與 head fork 的對應分支, master 對 master, gh-pages 對 gh-pages, 而且基本的請求是要從 head fork 將版本要求合併到 base fork 中.","title":"scrum2-再次利用 pull request 要求合併 gh-pages 分支中的改版資料"},{"url":"http://2015fallhw.github.io/cdw2/post/scrum2-xi-wang-cai-pull-request-fang-shi-he-bing-gh-pages-wang-ye-zi-liao.html","tags":"ag100","text":"目前 scrum2 只能透過 pull request 將新版本資料合併到全班的 gh-pages 網頁, 這一篇就是希望測試流程中的實際操作步驟 以及組員與組長必須在流程中操作的步驟. 因為 gh-pages 中的 Pelican 靜態網頁可能無法直接在線上合併, 但是各用戶只要把握以 content 目錄中的 md 檔案為主, 而其他 post 目錄下的各 html 與頁面檔案, 都是從 .md 檔案與設定檔案, 透過 pelican 指令產生, 因此解決衝突的重點在 content 目錄中的 .md 檔案而非 post 目錄中的檔案.","title":"scrum2-希望採 pull request 方式合併 gh-pages 網頁資料"},{"url":"http://2015fallhw.github.io/cdw2/post/40323206scrum2-lian-jie-ce-shi.html","tags":"bg5","text":"bg5組員scrum2已連上組別 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323206scrum2-連結測試"},{"url":"http://2015fallhw.github.io/cdw2/post/scrum1-hui-bao-bg5-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"bg5","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"scrum1-回報 bg5 scrum1 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/scrum1-onshape-lian-tiao-zu-jian.html","tags":"ag100","text":"Scrum1 已經完成 Onshape 基本鏈條組件的繪圖. bicycle chain Onshape Document Onshpae 鏈條組立件","title":"scrum1-Onshape 鏈條組件"},{"url":"http://2015fallhw.github.io/cdw2/post/40323115-hui-bao-ag10-scrum1-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag10","text":"bg5 組員 scrum1 已經在 cdw2 倉儲中的 master 分支建立對應的組員 scrum1.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323115-回報 ag10 scrum1 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323139-hui-bao-ag10-40323139-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag10","text":"ag10 組員 40323139 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323139.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://g10-40323139.rhcloud.com/ag10/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323139-回報 ag10 40323139 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323141-hui-bao-ag10-40323141-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag10","text":"ag10 組員 40323141 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323141.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://g10-40323139.rhcloud.com/ag10/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323141-回報 ag10 40323141 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323129-hui-bao-ag10-40323129-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag10","text":"ag10 組員 40323129 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323129.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://g10-40323139.rhcloud.com/ag10/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323129-回報 ag10 40323129 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323128-hui-bao-ag10-40323128-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag10","text":"ag10 組員 40323128 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323128.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://g10-40323139.rhcloud.com/ag10/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323128-回報 ag10 40323128 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323115-hui-bao-ag10-40323115-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag10","text":"ag10 組員 40323115已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323115.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://g10-40323139.rhcloud.com/ag10/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323115-回報 ag10 40323115 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323127-hui-bao-ag10-40323127-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag10","text":"ag10 組員 40323127 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323127.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://g10-40323139.rhcloud.com/ag10/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40323127-回報 ag10 40323127 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123218-hui-bao-ag10-40123218-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag10","text":"ag10 組員 40123218已經在 cdw2 倉儲中的 master 分支建立對應的組員 40123218.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://g10-40323139.rhcloud.com/ag10/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123218-回報 ag10 40123218 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40123254-hui-bao-ag1-40123254-chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag1","text":"Author: kmol ag1 組員40123254 已經在 cdw2 倉儲中的 master 分支建立對應的組員 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務.","title":"40123254-回報 ag1 40123254 初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323146-hui-bao-ag1chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag1","text":"ag1 組員 40323146 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323146.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務. 2016.04.18","title":"40323146-回報 ag1初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323148-hui-bao-ag1chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag1","text":"ag1 組員 40323148 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323148.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務. 2016.04.18","title":"40323148-回報 ag1初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323107-hui-bao-ag1chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag1","text":"ag1 組員 40323107 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323107.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務. 2016.04.18","title":"40323107-回報 ag1初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323106-hui-bao-ag1chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag1","text":"ag1 組員 40323106 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323106.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務. 2016.04.18","title":"40323106-回報 ag1初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40223153-hui-bao-ag1chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag1","text":"ag1 組員 40223153 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40223153.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務. 2016.04.18","title":"40223153-回報 ag1初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323105.html","tags":"ag1","text":"ag1 組員 40323105 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40323105.leo 並且完成 其中自評 test1111","title":"40323105"},{"url":"http://2015fallhw.github.io/cdw2/post/40023139-hui-bao-ag1chu-bu-hui-tu-zhu-ji-yu-lian-jie.html","tags":"ag1","text":"ag1 組員 40023139 已經在 cdw2 倉儲中的 master 分支建立對應的組員 40023139.leo 並且完成 Task1 的繪圖藍圖建立與註冊 目前所完成的 OpenShift 對應繪圖連結為: http://cdw2-ag100.rhcloud.com/ag100/scrum1_task1 其中已經在主程式中導入 scrum1_task1.py 中的 scrum1_task1 藍圖變數, 並且複製範例中的鏈條繪圖 ,準備進一步完成 Task1 協同任務. 2016.04.18","title":"40023139-回報 ag1初步繪圖主機與連結"},{"url":"http://2015fallhw.github.io/cdw2/post/40323123-qing-da-jia-yao-jiang-xian-zai-jin-duan-que-ding-nei-rong-zheng-que-hou-zai-ti-jiao-tui-song.html","tags":"ag8","text":"各位要在 Title 中加入自己的學號, 目的在於避免兩位學員採用相同的標題檔名, 而讓 pelican 無Z法正確將 md 檔案轉為 html. 假如在過程中產生錯誤, 都可以從命令列中看到錯誤訊息, 請各組員務必要確定網誌內容正確無誤後再提交推送, 否則大家的內容都將會受到影響.","title":"40323123-請大家要將先在近端確定內容正確後再提交推送"}]};