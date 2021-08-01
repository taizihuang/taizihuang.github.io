
var chart = Highcharts.chart('container',{
        exporting:{
                enabled: true,
                filename: 'chart',
        },
        chart: {
                renderTo: 'container',
        height: (12 / 8 * 100) + '%' // 16:9 ratio
    },
    tooltip:{
    formatter: function () {
        return '<b>' + this.point.parent + '</b>：'+this.point.name+' <br><b>' +
                '</b>比上周增长：<br><b>' + this.point.change+'</b> %';
}
},
    series: [{
            type: "treemap",
            layoutAlgorithm: 'stripes',
            alternateStartingDirection: true,
            levels: [{
                    level: 1,
                    layoutAlgorithm: 'sliceAndDice',
                    dataLabels: {
                            enabled: true,
                            align: 'left',
                            verticalAlign: 'top',
                            style: {
                                    fontSize: '15px',
                                    fontWeight: 'bold'
                            },
                    }
            },
            {level: 2,
            dataLabels: {
                    enabled: true,
                    style: {
                                    fontSize: '13px',
                                    fontWeight: 'regular'
                            },
                 formatter: function () {return this.point.name+'<b> ' + this.point.change+'</b> %';},
            }}],
            data: [{'id': '黑链', 'name': '黑链'}, {'name': '螺纹钢', 'parent': '黑链', 'value': 73.41, 'color': 'rgb(251.41176470588238, 162.52941176470586, 91.70588235294116)', 'change': 1.74}, {'name': '硅铁', 'parent': '黑链', 'value': 12.16, 'color': 'rgb(165.0, 0.0, 38.0)', 'change': 6.34}, {'name': '锰硅', 'parent': '黑链', 'value': 14.99, 'color': 'rgb(190.49019607843138, 24.470588235294116, 38.509803921568626)', 'change': 3.58}, {'name': '热轧卷板', 'parent': '黑链', 'value': 29.64, 'color': 'rgb(222.96078431372553, 241.50980392156865, 147.15686274509807)', 'change': -0.66}, {'name': '铁矿石', 'parent': '黑链', 'value': 33.83, 'color': 'rgb(33.45098039215686, 155.62745098039215, 81.86274509803921)', 'change': -3.11}, {'name': '焦炭', 'parent': '黑链', 'value': 70.24, 'color': 'rgb(165.0, 0.0, 38.0)', 'change': 7.86}, {'name': '焦煤', 'parent': '黑链', 'value': 35.52, 'color': 'rgb(165.0, 0.0, 38.0)', 'change': 5.22}, {'name': '动力煤', 'parent': '黑链', 'value': 8.09, 'color': 'rgb(203.00000000000006, 232.96078431372553, 129.94117647058826)', 'change': -1.01}, {'id': '化工', 'name': '化工'}, {'name': '天然橡胶', 'parent': '化工', 'value': 41.94, 'color': 'rgb(249.29411764705884, 147.23529411764702, 84.64705882352939)', 'change': 1.93}, {'name': '聚乙烯', 'parent': '化工', 'value': 17.38, 'color': 'rgb(169.00000000000009, 218.29411764705884, 107.94117647058829)', 'change': -1.55}, {'name': 'PTA', 'parent': '化工', 'value': 49.89, 'color': 'rgb(165.0, 0.0, 38.0)', 'change': 3.97}, {'name': '聚氯乙烯', 'parent': '化工', 'value': 16.47, 'color': 'rgb(239.35294117647058, 248.41176470588235, 169.58823529411768)', 'change': -0.33}, {'name': '聚丙烯', 'parent': '化工', 'value': 25.07, 'color': 'rgb(132.11764705882356, 202.1764705882353, 102.29411764705883)', 'change': -2.02}, {'id': '有色', 'name': '有色'}, {'name': '铜', 'parent': '有色', 'value': 47.67, 'color': 'rgb(165.0, 0.0, 38.0)', 'change': 5.63}, {'name': '铝', 'parent': '有色', 'value': 20.75, 'color': 'rgb(237.1764705882353, 94.64705882352939, 60.41176470588235)', 'change': 2.57}, {'name': '锌', 'parent': '有色', 'value': 17.75, 'color': 'rgb(254.58823529411765, 242.23529411764707, 169.58823529411765)', 'change': 0.32}, {'name': '铅', 'parent': '有色', 'value': 6.92, 'color': 'rgb(254.54901960784312, 241.01960784313727, 167.54901960784312)', 'change': 0.35}, {'name': '镍', 'parent': '有色', 'value': 77.84, 'color': 'rgb(165.0, 0.0, 38.0)', 'change': 7.13}, {'name': '锡', 'parent': '有色', 'value': 16.46, 'color': 'rgb(237.1764705882353, 94.64705882352939, 60.41176470588235)', 'change': 2.58}, {'id': '油脂', 'name': '油脂'}, {'name': '豆一', 'parent': '油脂', 'value': 9.44, 'color': 'rgb(252.11764705882354, 167.6274509803921, 94.05882352941174)', 'change': 1.66}, {'name': '豆二', 'parent': '油脂', 'value': 2.28, 'color': 'rgb(45.37254901960784, 161.4313725490196, 84.84313725490196)', 'change': -2.98}, {'name': '豆粕', 'parent': '油脂', 'value': 24.43, 'color': 'rgb(19.372549019607845, 139.76470588235293, 73.62745098039215)', 'change': -3.4}, {'name': '豆油', 'parent': '油脂', 'value': 64.68, 'color': 'rgb(254.90196078431373, 251.9607843137255, 185.9019607843137)', 'change': 0.07}, {'name': '油菜籽', 'parent': '油脂', 'value': 0.0, 'color': 'rgb(254.7058823529412, 245.88235294117646, 175.7058823529412)', 'change': 0.23}, {'name': '菜籽粕', 'parent': '油脂', 'value': 19.73, 'color': 'rgb(0.0, 104.0, 55.0)', 'change': -5.17}, {'name': '棕榈油', 'parent': '油脂', 'value': 61.36, 'color': 'rgb(165.0, 0.0, 38.0)', 'change': 4.01}]
        }],
    title: {
            'text': '热力图'
    }
});
