# 各組分別在各自的 .py 程式中建立應用程式 (第1步/總共3步)
from flask import Blueprint, render_template

# 利用 Blueprint建立 ag1, 並且 url 前綴為 /ag1, 並設定 template 存放目錄
ag8_40323145_3 = Blueprint('ag8_40323145_3', __name__, url_prefix='/ag8_40323145_3', template_folder='templates')

@ag8_40323145_3.route('/ag8_40323145_3_tesk.1')
def task0():
    return "ag8_40323145_3_tesk.1"
    
@ag8_40323145_3.route('/task1')
def task1():
    #return "ag100 task1"
    return render_template('task1.html', var1="來自 ag100 的 task1 變數")

# 展示傳回 Brython 程式
@ag8_40323145_3.route('/task1')
def task1():
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
    basic1.rotate(90)
    basic1.translate(0, 20)
    
    basic2 = cmbr.dup()
    basic2.rotate(180)
    basic2.translate(0, 0)
    
    basic3 = cmbr.dup()
    basic3.rotate(60)
    basic3.translate(20*math.cos(30*deg), 20*math.sin(30*deg))
    
    basic4 = cmbr.dup()
    basic4.rotate(60)
    basic4.translate(40*math.cos(30*deg), 0*math.sin(30*deg))
    
    basic5 = cmbr.dup()
    basic5.rotate(90)
    basic5.translate(20, 20)
    
    basic6 = cmbr.dup()
    basic6.rotate(0)
    basic6.translate(40, 40)
    
    basic7 = cmbr.dup()
    basic7.rotate(180)
    basic7.translate(40, 0)
    
    basic8 = cmbr.dup()
    basic8.rotate(0)
    basic8.translate(0, 40)
    
    basic9 = cmbr.dup()
    basic9.rotate(-14)
    basic9.translate(20*math.cos(76*deg),60)
    
    basic10 = cmbr.dup()
    basic10.rotate(-14)
    basic10.translate(40*math.cos(76*deg),80)
    
    basic11 = cmbr.dup()
    basic11.rotate(270)
    basic11.translate(40*math.cos(76*deg)+20,80)
    
    basic12 = cmbr.dup()
    basic12.rotate(15)
    basic12.translate(40*math.cos(75*deg)+20,80)   
    
    basic13 = cmbr.dup()
    basic13.rotate(14)
    basic13.translate(60*math.cos(75*deg)+20,60)
    
    basic14 = cmbr.dup()
    basic14.rotate(90)
    basic14.translate(60, 20)
    
    basic15 = cmbr.dup()
    basic15.rotate(180)
    basic15.translate(60, 0)
    
    basic16 = cmbr.dup()
    basic16.rotate(90)
    basic16.translate(20+60, 20)
    
    basic17 = cmbr.dup()
    basic17.rotate(0)
    basic17.translate(40+60, 40)
    
    basic18 = cmbr.dup()
    basic18.rotate(180)
    basic18.translate(40+60, 0)
    
    basic19 = cmbr.dup()
    basic19.rotate(0)
    basic19.translate(0+60, 40)
    
    basic20 = cmbr.dup()
    basic20.rotate(-14)
    basic20.translate(20*math.cos(76*deg)+60,60)
    
    basic21 = cmbr.dup()
    basic21.rotate(-14)
    basic21.translate(40*math.cos(76*deg)+60,80)
    
    basic22 = cmbr.dup()
    basic22.rotate(270)
    basic22.translate(40*math.cos(76*deg)+20+60,80)
    
    basic23 = cmbr.dup()
    basic23.rotate(15)
    basic23.translate(40*math.cos(75*deg)+20+60,80)   
    
    basic24 = cmbr.dup()
    basic24.rotate(14)
    basic24.translate(60*math.cos(75*deg)+20+60,60)
    
    basic25 = cmbr.dup()
    basic25.rotate(90)
    basic25.translate(60+120, 20)
    
    basic26 = cmbr.dup()
    basic26.rotate(180)
    basic26.translate(60+120, 0)
    
    basic27 = cmbr.dup()
    basic27.rotate(90)
    basic27.translate(20+60+120, 20)
    
    basic28 = cmbr.dup()
    basic28.rotate(0)
    basic28.translate(40+60+120, 40)
    
    basic29 = cmbr.dup()
    basic29.rotate(180)
    basic29.translate(40+60+120, 0)
    
    basic30 = cmbr.dup()
    basic30.rotate(0)
    basic30.translate(0+60+120, 40)
    
    basic31 = cmbr.dup()
    basic31.rotate(-14)
    basic31.translate(20*math.cos(76*deg)+60+120,60)
    
    basic32 = cmbr.dup()
    basic32.rotate(-14)
    basic32.translate(40*math.cos(76*deg)+60+120,80)
    
    basic33 = cmbr.dup()
    basic33.rotate(270)
    basic33.translate(40*math.cos(76*deg)+20+60+120,80)
    
    basic34 = cmbr.dup()
    basic34.rotate(15)
    basic34.translate(40*math.cos(75*deg)+20+60+120,80)   
    
    basic35 = cmbr.dup()
    basic35.rotate(14)
    basic35.translate(60*math.cos(75*deg)+20+60+120,60)
    
    basic36 = cmbr.dup()
    basic36.rotate(90)
    basic36.translate(60+120-60, 20)
    
    basic37 = cmbr.dup()
    basic37.rotate(180)
    basic37.translate(60+120-60, 0)
    
    basic38 = cmbr.dup()
    basic38.rotate(90)
    basic38.translate(20+60+120-60, 20)
    
    basic39 = cmbr.dup()
    basic39.rotate(0)
    basic39.translate(40+60+120-60, 40)
    
    basic40 = cmbr.dup()
    basic40.rotate(180)
    basic40.translate(40+60+120-60, 0)
    
    basic41 = cmbr.dup()
    basic41.rotate(0)
    basic41.translate(0+60+120-60, 40)
    
    basic42 = cmbr.dup()
    basic42.rotate(-14)
    basic42.translate(20*math.cos(76*deg)+60+120-60,60)
    
    basic43 = cmbr.dup()
    basic43.rotate(-14)
    basic43.translate(40*math.cos(76*deg)+60-60+120,80)
    
    basic44 = cmbr.dup()
    basic44.rotate(270)
    basic44.translate(40*math.cos(76*deg)+20+60-60+120,80)
    
    basic45 = cmbr.dup()
    basic45.rotate(15)
    basic45.translate(40*math.cos(75*deg)+20+60-60+120,80)   
    
    basic46 = cmbr.dup()
    basic46.rotate(14)
    basic46.translate(60*math.cos(75*deg)+20-60+60+120,60)
    
    
    
    
    
    
    
    \
    
    cmbr.appendPath(basic1)
    cmbr.appendPath(basic2)

    cmbr.appendPath(basic5)
    cmbr.appendPath(basic6)
    cmbr.appendPath(basic7)
    cmbr.appendPath(basic8)
    cmbr.appendPath(basic9)
    cmbr.appendPath(basic10)
    cmbr.appendPath(basic11)
    cmbr.appendPath(basic12)
    cmbr.appendPath(basic13)
    cmbr.appendPath(basic14)
    cmbr.appendPath(basic15)
    cmbr.appendPath(basic16)
    cmbr.appendPath(basic17)
    cmbr.appendPath(basic18)
    cmbr.appendPath(basic19)
    cmbr.appendPath(basic20)
    cmbr.appendPath(basic21)
    cmbr.appendPath(basic22)
    cmbr.appendPath(basic23)
    cmbr.appendPath(basic24)
    cmbr.appendPath(basic25)
    cmbr.appendPath(basic26)
    cmbr.appendPath(basic27)
    cmbr.appendPath(basic28)
    cmbr.appendPath(basic29)
    cmbr.appendPath(basic30)
    cmbr.appendPath(basic31)
    cmbr.appendPath(basic32)
    cmbr.appendPath(basic33)
    cmbr.appendPath(basic34)
    cmbr.appendPath(basic35)
    cmbr.appendPath(basic36)
    cmbr.appendPath(basic37)
    cmbr.appendPath(basic38)
    cmbr.appendPath(basic39)
    cmbr.appendPath(basic40)
    cmbr.appendPath(basic41)
    cmbr.appendPath(basic42)
    cmbr.appendPath(basic43)
    cmbr.appendPath(basic44)
    cmbr.appendPath(basic45)
    cmbr.appendPath(basic46)
    
    
    # hole 為原點位置
    hole = cobj(shapedefs.circle(4), "PATH")
    cmbr.appendPath(hole)

    # 表示放大 3 倍
    #cgo.render(cmbr, x, y, 3, rot)
    # 放大 5 倍
    cgo.render(cmbr, x, y, 1, rot)

O(0, 0, 0, 0, 0, "lightgreen", True, 4)
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
@ag8_40323145_3.route('/task1')
def task1():
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
