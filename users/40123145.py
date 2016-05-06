

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
    # basic1 轉 120 度
    basic1.rotate(90)

    basic2 = cmbr.dup()
    basic2.rotate(90)
    basic2.translate(20, 0)
    
    basic3 = cmbr.dup()
    basic3.rotate(0)
    basic3.translate(40, 0)
    
    basic4 = cmbr.dup()
    basic4.rotate(0)
    basic4.translate(0, 20)
    
    basic5 = cmbr.dup()
    basic5.rotate(0)
    basic5.translate(40, 20)

    basic6 = cmbr.dup()
    basic6.rotate(170)
    basic6.translate(0, 20)

    basic7 = cmbr.dup()
    basic7.rotate(190)
    basic7.translate(40, 20)

    basic8 = cmbr.dup()
    basic8.rotate(160)
    basic8.translate(4, 40)

    basic9 = cmbr.dup()
    basic9.rotate(195)
    basic9.translate(36, 40)

    basic10 = cmbr.dup()
    basic10.rotate(90)
    basic10.translate(11, 59)

    

    basic11 = cmbr.dup()
    basic11.rotate(0)
    basic11.translate(60, 0)

    basic12 = cmbr.dup()
    basic12.rotate(180)
    basic12.translate(60, 0)

    basic13 = cmbr.dup()
    basic13.rotate(180)
    basic13.translate(60, 20)

    basic14 = cmbr.dup()
    basic14.rotate(180)
    basic14.translate(60, 40)

    basic15 = cmbr.dup()
    basic15.rotate(90)
    basic15.translate(60, -20)

    basic16 = cmbr.dup()
    basic16.rotate(120)
    basic16.translate(80, -20)

    basic17 = cmbr.dup()
    basic17.rotate(0)
    basic17.translate(97, 9)

    basic18 = cmbr.dup()
    basic18.rotate(0)
    basic18.translate(99, 7)

    basic19 = cmbr.dup()
    basic19.rotate(235)
    basic19.translate(97, 8)

    basic20 = cmbr.dup()
    basic20.rotate(90)
    basic20.translate(60, 20)

    basic21 = cmbr.dup()
    basic21.rotate(120)
    basic21.translate(80, 20)

    basic22 = cmbr.dup()
    basic22.rotate(0)
    basic22.translate(97, 50)

    basic23 = cmbr.dup()
    basic23.rotate(238)
    basic23.translate(97, 50)

    basic24 = cmbr.dup()
    basic24.rotate(90)
    basic24.translate(60, 60)

    basic25 = cmbr.dup()
    basic25.rotate(90)
    basic25.translate(140, -20)

    basic26 = cmbr.dup()
    basic26.rotate(240)
    basic26.translate(140, -20)

    basic27 = cmbr.dup()
    basic27.rotate(190)
    basic27.translate(123, -10)

    basic28 = cmbr.dup()
    basic28.rotate(180)
    basic28.translate(120, 10)

    basic29 = cmbr.dup()
    basic29.rotate(170)
    basic29.translate(120, 30)

    basic30 = cmbr.dup()
    basic30.rotate(120)
    basic30.translate(123, 50)

    basic31 = cmbr.dup()
    basic31.rotate(90)
    basic31.translate(140, 60)

    basic32 = cmbr.dup()
    basic32.rotate(0)
    basic32.translate(180, 0)

    basic33 = cmbr.dup()
    basic33.rotate(0)
    basic33.translate(180, 20)

    basic34 = cmbr.dup()
    basic34.rotate(0)
    basic34.translate(180, 40)

    basic35 = cmbr.dup()
    basic35.rotate(0)
    basic35.translate(180, 60)

    basic36 = cmbr.dup()
    basic36.rotate(90)
    basic36.translate(180, -20)

    basic37 = cmbr.dup()
    basic37.rotate(120)
    basic37.translate(200, -20)

    basic38 = cmbr.dup()
    basic38.rotate(160)
    basic38.translate(217, -10)

    basic39 = cmbr.dup()
    basic39.rotate(180)
    basic39.translate(224, 10)

    basic40 = cmbr.dup()
    basic40.rotate(190)
    basic40.translate(224, 30)

    basic41 = cmbr.dup()
    basic41.rotate(241)
    basic41.translate(220, 50)

    basic42 = cmbr.dup()
    basic42.rotate(90)
    basic42.translate(180, 60)

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
    cmbr.appendPath(basic12)
    cmbr.appendPath(basic13)
    cmbr.appendPath(basic14)
    cmbr.appendPath(basic15)
    cmbr.appendPath(basic16)
    cmbr.appendPath(basic17)
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




    # hole 為原點位置
    hole = cobj(shapedefs.circle(4), "PATH")
    cmbr.appendPath(hole)

    # 表示放大 3 倍
    #cgo.render(cmbr, x, y, 3, rot)
    # 放大 5 倍
    cgo.render(cmbr, x, y, 1., rot)

O(0, 0, 0, 0, 0, "lightyellow", True, 4)
</script>
<!-- 以協同方式加上 ag100 的 scrum-2 組員所寫的 task1 程式碼 -->
<script type="text/python" src="/ag100/scrum2_task1"></script>
<!-- 以協同方式加上 ag100 的  scrum-3 組員所寫的 task1 程式碼 -->
<!-- <script type="text/python" src="/ag100/scrum3_task1"></script>-->
</body>
</html>

    

    
    
