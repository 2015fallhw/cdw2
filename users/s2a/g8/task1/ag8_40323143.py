# 各組分別在各自的 .py 程式中建立應用程式 (第1步/總共3步)
from flask import Blueprint, render_template

# 利用 Blueprint建立 ag1, 並且 url 前綴為 /ag1, 並設定 template 存放目錄
ag8_40323143 = Blueprint('ag8_40323143', __name__, url_prefix='/ag8_40323143', template_folder='templates')

@ag8_40323143.route('/ag8_40323143_tesk.1')
def task0():
    return "ag8_40323143_tesk.1"
    
@ag8_40323143.route('/task1')
def task1():
    #return "ag100 task1"
    return render_template('task1.html', var1="來自 ag100 的 task1 變數")

# 展示傳回 Brython 程式
@ag8_40323143.route('/task2')
def task2():
    outstring = '''
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>網際 2D 繪圖</title>
    <!-- IE 9: display inline SVG -->
    <meta http-equiv="X-UA-Compatible" content="IE=9">
<script type="text/javascript" src="http://brython.info/src/brython_dist.js"></script>
<script type="text/javascript" src="http://cptocadp-2015fallhw.rhcloud.com/static/Cango-8v03.js"></script>
<script type="text/javascript" src="http://cptocadp-2015fallhw.rhcloud.com/static/Cango2D-6v13.js"></script>
<script type="text/javascript" src="http://cptocadp-2015fallhw.rhcloud.com/static/CangoAxes-1v33.js"></script>

</head>
<body>

<script>
window.onload=function(){
brython(1);
}
</script>

<canvas id="plotarea" width="800" height="800"></canvas>

<script type="text/python">
from javascript import JSConstructor
from browser import window
import math

cango = JSConstructor(window.Cango)
cobj = JSConstructor(window.Cobj)
shapedefs = window.shapeDefs
obj2d = JSConstructor(window.Obj2D)
cgo = cango("plotarea")

cgo.setWorldCoords(-250, -250, 500, 500) 

# 決定要不要畫座標軸線
cgo.drawAxes(0, 240, 0, 240, {
    "strokeColor":"#aaaaaa",
    "fillColor": "#aaaaaa",
    "xTickInterval": 20,
    "xLabelInterval": 20,
    "yTickInterval": 20,
    "yLabelInterval": 20})
        
#cgo.drawText("使用 Cango 繪圖程式庫!", 0, 0, {"fontSize":60, "fontWeight": 1200, "lorg":5 })

deg = math.pi/180  
def O(x, y, rx, ry, rot, color, border, linewidth):
    # 旋轉必須要針對相對中心 rot not working yet
    chamber = "M -6.8397, -1.4894 \
                     A 7, 7, 0, 1, 0, 6.8397, -1.4894 \
                     A 40, 40, 0, 0, 1, 6.8397, -18.511 \
                     A 7, 7, 0, 1, 0, -6.8397, -18.511 \
                     A 40, 40, 0, 0, 1, -6.8397, -1.4894 z"
    cgoChamber = window.svgToCgoSVG(chamber)
    cmbr = cobj(cgoChamber, "SHAPE", {
            "fillColor": color,
            "border": border,
            "strokeColor": "tan",
            "lineWidth": linewidth })

    # 複製 cmbr, 然後命名為 basic1
    basic1 = cmbr.dup()
    basic1.rotate(166)
    basic1.translate(0, 0)
    
    basic2 = cmbr.dup()
    basic2.rotate(0)
    basic2.translate(0, -20)
    
    basic3 = cmbr.dup()
    basic3.rotate(166)
    basic3.translate(20*math.sin(14*deg),20*math.cos(14*deg))
    
    basic4 = cmbr.dup()
    basic4.rotate(90)
    basic4.translate(40*math.sin(14*deg), 40*math.cos(14*deg))
    
    basic5 = cmbr.dup()
    basic5.rotate(90)
    basic5.translate(20, -20)
    
    basic6 = cmbr.dup()
    basic6.rotate(90)
    basic6.translate(0, -20)
    
    basic7 = cmbr.dup()
    basic7.rotate(180)
    basic7.translate(40, -40)
    
    basic8 = cmbr.dup()
    basic8.rotate(180)
    basic8.translate(40, -20)
    
    basic9 = cmbr.dup()
    basic9.rotate(15)
    basic9.translate(20+40*math.sin(14*deg), 40*math.cos(14*deg))
     
    basic10 = cmbr.dup()
    basic10.rotate(195)
    basic10.translate(40, 0)
     
    basic11 = cmbr.dup()
    basic11.rotate(180)
    basic11.translate(40, -20)
    
    basic21 = cmbr.dup()
    basic21.rotate(166)
    basic21.translate(60, 0)
    
    basic22 = cmbr.dup()
    basic22.rotate(0)
    basic22.translate(60, -20)
    
    basic23 = cmbr.dup()
    basic23.rotate(166)
    basic23.translate(60+20*math.sin(14*deg),20*math.cos(14*deg))
    
    basic24 = cmbr.dup()
    basic24.rotate(90)
    basic24.translate(60+40*math.sin(14*deg), 40*math.cos(14*deg))
    
    basic25 = cmbr.dup()
    basic25.rotate(90)
    basic25.translate(80, -20)
    
    basic26 = cmbr.dup()
    basic26.rotate(90)
    basic26.translate(60, -20)
    
    basic27 = cmbr.dup()
    basic27.rotate(180)
    basic27.translate(60+40, -40)
    
    basic28 = cmbr.dup()
    basic28.rotate(180)
    basic28.translate(60+40, -20)
    
    basic29 = cmbr.dup()
    basic29.rotate(15)
    basic29.translate(60+20+40*math.sin(14*deg), 40*math.cos(14*deg))
     
    basic210 = cmbr.dup()
    basic210.rotate(195)
    basic210.translate(60+40, 0)
     
    basic211 = cmbr.dup()
    basic211.rotate(180)
    basic211.translate(60+40, -20)
    
    basic212 = cmbr.dup()
    basic212.rotate(0)
    basic212.translate(60, 0)
    
    basic31 = cmbr.dup()
    basic31.rotate(166)
    basic31.translate(60+60, 0)
    
    basic32 = cmbr.dup()
    basic32.rotate(0)
    basic32.translate(60+60, -20)
    
    basic33 = cmbr.dup()
    basic33.rotate(166)
    basic33.translate(60+60+20*math.sin(14*deg),20*math.cos(14*deg))
    
    basic34 = cmbr.dup()
    basic34.rotate(90)
    basic34.translate(60+60+40*math.sin(14*deg), 40*math.cos(14*deg))
    
    basic35 = cmbr.dup()
    basic35.rotate(90)
    basic35.translate(60+80, -20)
    
    basic36 = cmbr.dup()
    basic36.rotate(90)
    basic36.translate(60+60, -20)
    
    basic37 = cmbr.dup()
    basic37.rotate(180)
    basic37.translate(60+60+40, -40)
    
    basic38 = cmbr.dup()
    basic38.rotate(180)
    basic38.translate(60+60+40, -20)
    
    basic39 = cmbr.dup()
    basic39.rotate(15)
    basic39.translate(60+60+20+40*math.sin(14*deg), 40*math.cos(14*deg))
     
    basic310 = cmbr.dup()
    basic310.rotate(195)
    basic310.translate(60+60+40, 0)
     
    basic311 = cmbr.dup()
    basic311.rotate(180)
    basic311.translate(60+60+40, -20)
    
    basic312 = cmbr.dup()
    basic312.rotate(0)
    basic312.translate(60+60, 0)
    
    basic41 = cmbr.dup()
    basic41.rotate(166)
    basic41.translate(60+60+60, 0)
    
    basic42 = cmbr.dup()
    basic42.rotate(0)
    basic42.translate(60+60+60, -20)
    
    basic43 = cmbr.dup()
    basic43.rotate(166)
    basic43.translate(60+60+60+20*math.sin(14*deg),20*math.cos(14*deg))
    
    basic44 = cmbr.dup()
    basic44.rotate(90)
    basic44.translate(60+60+60+40*math.sin(14*deg), 40*math.cos(14*deg))
    
    basic45 = cmbr.dup()
    basic45.rotate(90)
    basic45.translate(60+60+80, -20)
    
    basic46 = cmbr.dup()
    basic46.rotate(90)
    basic46.translate(60+60+60, -20)
    
    basic47 = cmbr.dup()
    basic47.rotate(180)
    basic47.translate(60+60+60+40, -40)
    
    basic48 = cmbr.dup()
    basic48.rotate(180)
    basic48.translate(60+60+60+40, -20)
    
    basic49 = cmbr.dup()
    basic49.rotate(15)
    basic49.translate(60+60+60+20+40*math.sin(14*deg), 40*math.cos(14*deg))
     
    basic410 = cmbr.dup()
    basic410.rotate(195)
    basic410.translate(60+60+60+40, 0)
     
    basic411 = cmbr.dup()
    basic411.rotate(180)
    basic411.translate(60+60+60+40, -20)
    
    basic412 = cmbr.dup()
    basic412.rotate(0)
    basic412.translate(60+60+60, 0)
    
    
    cmbr.appendPath(basic1)
    cmbr.appendPath(basic2)
    cmbr.appendPath(basic3)
    cmbr.appendPath(basic4)
    cmbr.appendPath(basic5)
    cmbr.appendPath(basic6)
    cmbr.appendPath(basic7)
    cmbr.appendPath(basic8)
    cmbr.appendPath(basic9)
    cmbr.appendPath(basic10)
    cmbr.appendPath(basic11)
    
    cmbr.appendPath(basic21)
    cmbr.appendPath(basic22)
    cmbr.appendPath(basic23)
    cmbr.appendPath(basic24)
    cmbr.appendPath(basic25)
    cmbr.appendPath(basic26)
    cmbr.appendPath(basic27)
    cmbr.appendPath(basic28)
    cmbr.appendPath(basic29)
    cmbr.appendPath(basic210)
    cmbr.appendPath(basic211)
    cmbr.appendPath(basic212)
    
    cmbr.appendPath(basic31)
    cmbr.appendPath(basic32)
    cmbr.appendPath(basic33)
    cmbr.appendPath(basic34)
    cmbr.appendPath(basic35)
    cmbr.appendPath(basic36)
    cmbr.appendPath(basic37)
    cmbr.appendPath(basic38)
    cmbr.appendPath(basic39)
    cmbr.appendPath(basic310)
    cmbr.appendPath(basic311)
    cmbr.appendPath(basic312)
    
    cmbr.appendPath(basic41)
    cmbr.appendPath(basic42)
    cmbr.appendPath(basic43)
    cmbr.appendPath(basic44)
    cmbr.appendPath(basic45)
    cmbr.appendPath(basic46)
    cmbr.appendPath(basic47)
    cmbr.appendPath(basic48)
    cmbr.appendPath(basic49)
    cmbr.appendPath(basic410)
    cmbr.appendPath(basic411)
    cmbr.appendPath(basic412)

    
    # hole 為原點位置
    hole = cobj(shapedefs.circle(4), "PATH")
    cmbr.appendPath(hole)

    # 表示放大 3 倍
    #cgo.render(cmbr, x, y, 3, rot)
    # 放大 5 倍
    cgo.render(cmbr, x, y, 1, rot)

O(0, 0, 0, 0, 0, "green", True, 4)
</script>
<!-- 以協同方式加上 ag100 的 task3 程式碼 -->
<script type="text/python" src="/ag100/task3"></script>
<!-- 以協同方式加上 bg99 的 task3 程式碼 -->
<script type="text/python" src="/bg99/task3"></script>
</body>
</html>
'''
    return outstring
    
# 展示傳回 Brython 程式
@ag8_40323143.route('/task3')
def task3():
    outstring = '''
from javascript import JSConstructor
from browser import window
import math

cango = JSConstructor(window.Cango)
cobj = JSConstructor(window.Cobj)
shapedefs = window.shapeDefs
obj2d = JSConstructor(window.Obj2D)
cgo = cango("plotarea")

cgo.setWorldCoords(-250, -250, 500, 500) 

# 決定要不要畫座標軸線
cgo.drawAxes(0, 240, 0, 240, {
    "strokeColor":"#aaaaaa",
    "fillColor": "#aaaaaa",
    "xTickInterval": 20,
    "xLabelInterval": 20,
    "yTickInterval": 20,
    "yLabelInterval": 20})
        
#cgo.drawText("使用 Cango 繪圖程式庫!", 0, 0, {"fontSize":60, "fontWeight": 1200, "lorg":5 })

deg = math.pi/180  

def task3(x, y, rx, ry, rot, color, border, linewidth):
    # 旋轉必須要針對相對中心 rot not working yet
    chamber = "M -6.8397, -1.4894 \
                     A 7, 7, 0, 1, 0, 6.8397, -1.4894 \
                     A 40, 40, 0, 0, 1, 6.8397, -18.511 \
                     A 7, 7, 0, 1, 0, -6.8397, -18.511 \
                     A 40, 40, 0, 0, 1, -6.8397, -1.4894 z"
    cgoChamber = window.svgToCgoSVG(chamber)
    cmbr = cobj(cgoChamber, "SHAPE", {
            "fillColor": color,
            "border": border,
            "strokeColor": "tan",
            "lineWidth": linewidth })

    # 複製 cmbr, 然後命名為 basic1
    basic1 = cmbr.dup()
    # basic1 轉 -60 度
    basic1.rotate(-60)

    cmbr.appendPath(basic1)
    
    # hole 為原點位置
    hole = cobj(shapedefs.circle(4), "PATH")
    cmbr.appendPath(hole)

    # 表示放大 3 倍
    #cgo.render(cmbr, x, y, 3, rot)
    # 放大 5 倍
    cgo.render(cmbr, x, y, 5, rot)

task3(0, 0, 0, 0, 0, "red", True, 4)
'''
    return outstring
