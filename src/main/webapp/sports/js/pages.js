/* Page. Last update2017.12.10-18.49 */
(function (a) {
    jQuery.fn.extend({
        Page: function (l, c) {
            var m = a("<ul>");
            var d = a("<ul>");
            var h = "<li>";
            var j = a(this);
            var f = a.extend(true, {
                Page: 1,
                Pages: false,
                PageNum: 5,
                ActiveClass: "page-click",
                Jump: true,
                JumpVal: "跳转",
                EndPage: true,
                HomePage: true,
                EhCondition: 10,
                TopDownPage: true,
                PageTitle: "第x页",
                TopText: "«",
                TopTitle: "上一页",
                DownText: "»",
                DownTitle: "下一页",
                PageOn: false,
                JumpOn: false,
                PageCustom: "page",
                Alert: false,
            }, l);
            if (c) {
                b()
            }
            f.Page = f.Page > f.Pages ? f.Pages : f.Page;
            var g = parseInt(f.Page) + parseInt(f.PageNum / 2);
            g = g > f.Pages ? f.Pages : g;
            var k = parseInt(f.Page) - parseInt(f.PageNum / 2);
            k = k < 1 ? 1 : k;
            for (i = k; i < g + 1; i++) {
                if (i == f.Page) {
                    m.append(a(h).addClass(f.ActiveClass).text(i).attr("title", f.PageTitle.replace(/x/g, i)))
                } else {
                    m.append(a(h).attr(f.PageCustom, i).text(i).attr("title", f.PageTitle.replace(/x/g, i)))
                }
            }
            if (f.EndPage && (f.Pages > f.EhCondition - 1 && f.Page < (f.Pages - parseInt(f.PageNum / 2)))) {
                m.append(a(h).attr(f.PageCustom, f.Pages).text(".." + f.Pages).attr("title", f.PageTitle.replace(/x/g, f.Pages)))
            }
            if (f.HomePage && f.Page > f.EhCondition - 1) {
                m.prepend(a(h).attr(f.PageCustom, 1).text("1..").attr("title", f.PageTitle.replace(/x/g, "1")))
            }
            if (f.TopDownPage && f.Pages) {
                if (f.Page != 1) {
                    m.prepend(a(h).attr(f.PageCustom, parseInt(f.Page) - 1).text(f.TopText).attr("title", f.TopTitle))
                }
                if (f.Page != f.Pages) {
                    m.append(a(h).attr(f.PageCustom, parseInt(f.Page) + 1).text(f.DownText).attr("title", f.DownTitle))
                }
            }
            a(j).html("").append(m);
            if (f.Jump) {
                a(j).append(d.append(a("<input>").attr("type", "text")).append(a("<input>").attr("type", "button").val(f.JumpVal).attr("title", f.JumpVal)))
            }
            m.find("*[Page]").click(function () {
                var e = a(this).attr(f.PageCustom);
                a(j).Page({
                    Page: e,
                    Pages: f.Pages,
                    PageNum: f.PageNum,
                    ActiveClass: f.ActiveClass,
                    Jump: f.JumpJump,
                    JumpVal: f.JumpVal,
                    EndPage: f.EndPage,
                    HomePage: f.HomePage,
                    EhCondition: f.EhCondition,
                    TopDownPage: f.TopDownPage,
                    TopText: f.TopText,
                    DownText: f.DownText,
                    PageOn: f.PageOn,
                    JumpOn: f.JumpOn,
                    PageCustom: f.PageCustom,
                    Alert: f.Alert,
                }, c);
                if (f.PageOn) {
                    f.PageOn(e, f.Pages)
                } else {
                    alert("注意！您未绑定事件")
                }
            });
            d.find("*[type='text']").bind("mouseleave keydown keyup", function () {
                if (isNaN(a(this).val())) {
                    a(this).val("")
                }
            });
            d.find("*[type='button']").click(function () {
                var e = a(this).prevAll().val();
                if (!e || isNaN(e)) {
                    e.val("");
                    return false
                }
                if (e > f.Pages) {
                    if (f.Alert) {
                        f.Alert(e, f.Pages)
                    } else {
                        alert("您输入的值大于总页数")
                    }
                    return false
                }
                a(j).Page({
                    Page: e,
                    Pages: f.Pages,
                    PageNum: f.PageNum,
                    ActiveClass: f.ActiveClass,
                    Jump: f.JumpJump,
                    JumpVal: f.JumpVal,
                    EndPage: f.EndPage,
                    HomePage: f.HomePage,
                    EhCondition: f.EhCondition,
                    TopDownPage: f.TopDownPage,
                    TopText: f.TopText,
                    DownText: f.DownText,
                    PageOn: f.PageOn,
                    JumpOn: f.JumpOn,
                    PageCustom: f.PageCustom,
                    Alert: f.Alert,
                }, c);
                if (f.JumpOn) {
                    f.JumpOn(e, f.Pages)
                } else {
                    alert("注意！您未绑定事件")
                }
            });

            function b() {
                m.addClass("pa1");
                d.addClass("pa2");
                var p = h.substring(1, h.length - 1);
                if (a("style[page]").length > 0) {
                    return false
                }
                var s = ".pa1{float:left;display:inline;box-sizing: border-box;user-select:none;}";
                var r = ".pa2{padding-left: 20px;display:inline;box-sizing: border-box;}";
                var e = ".pa1 " + p + "{transition: all 0.30s ease-in-out;-webkit-transition: all 0.30s ease-in-out;-moz-transition: all 0.30s ease-in-out;-o-transition: all 0.30s ease-in-out;-ms-transition: all 0.30s ease-in-out;display:inline;list-style-type:none;padding: 6px 12px;cursor: pointer;border: #000 1px solid;background-color: #fff;color: #000;margin: 2px;}.pa1 " + p + ":hover{background-color:#000; color:#fff;}";
                var n = ".page-click{background-color: #000!important;color: #fff!important;font-weight: bold!important;}.page-click:hover{background-color:#000!important;color: #fff!important;}";
                var q = ".pa2 input[type='button']{margin-top: 9px;height:30px;background-color: #fff;cursor: pointer;display: inline-block;margin-top: 0px;border:1px solid #000;border-left: none;}";
                var o = ".pa2 input[type='text']{margin-top: 10px;display: inline-block;border:1px solid #000;height:26px;width: 50px;border-right: none;}";
                a("head").append("<style page=1>" + r + q + o + s + e + n + "</style>")
            }
        }
    })
})(jQuery);