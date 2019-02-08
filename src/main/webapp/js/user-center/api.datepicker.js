/**
 * Created by Zelei on 2017/4/22.
 */
(function ($) {
  $.extend({
    dateformat: function (date, pattern) {
      var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12,
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
      };
      var week = {
        '0': '/u65e5',
        '1': '/u4e00',
        '2': '/u4e8c',
        '3': '/u4e09',
        '4': '/u56db',
        '5': '/u4e94',
        '6': '/u516d'
      };
      if (/(y+)/.test(pattern)) {
        pattern = pattern.replace(RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      if (/(E+)/.test(pattern)) {
        pattern = pattern.replace(RegExp.$1,
            ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f'
                : '/u5468') : '') + week[date.getDay() + '']);
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(pattern)) {
          pattern = pattern.replace(RegExp.$1,
              (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(
                  ('' + o[k]).length)));
        }
      }
      return pattern;
    }
  });
  $.fn.extend({
    datepicker: function (WdatePickerOptions) {
      return $(this).off('click').on('click', function (e) {
        WdatePicker(WdatePickerOptions);
      }).css({
        cursor: 'pointer'
      });
    }
  })
})(jQuery)