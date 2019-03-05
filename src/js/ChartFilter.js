import {DATE} from '../js/Date.js'
import {DATA} from '../js/AllData.js'
var numeral = require('numeral');
export const DRAW = {
        chartuser:'',
        chartDataOrder(chartOrder,dataOrder){
            var simpleDate = DATE.getMonth()
            var dataValue = DATA.chartOrderData(dataOrder)
            // var dataValue2 = DATA.chartOrderData(dataOrder)
            var orderChart = new Chart(chartOrder, {
                type: 'bar',
                data: {
                    labels: [simpleDate[2], simpleDate[1], simpleDate[0]],
                    datasets: [{
                    label: 'Order ทั้งหมด',
                    data: [dataValue[2], dataValue[1], dataValue[0],0],
                    borderColor: '#173f5f',
                    backgroundColor: '#173f5f',
                    fill: false
                    },
                    {
                        label: 'Order ที่ดำเนินงานเสร็จสิ้น',
                        data: [dataValue[5], dataValue[4], dataValue[3],0],
                        borderColor: '#20639b',
                        backgroundColor: '#20639b',
                        fill: false
                    },
                    {
                        label: 'Order ที่จ่ายเงินแล้วและกำลังดำเนินงาน',
                        data: [dataValue[8], dataValue[7], dataValue[6],0],
                        borderColor: '#3caea3',
                        backgroundColor: '#3caea3',
                        fill: false
                    },
                    {
                        label: 'Order ที่ยังไม่ได้ชำระเงิน',
                        data: [dataValue[11], dataValue[10], dataValue[9],0],
                        borderColor: '#ed553b',
                        backgroundColor: '#ed553b',
                        fill: false
                    }]
                },
                options: {
                    responsive: true
                }
        })
    },
//     chartDataUser(chartUser,dataUser){
//         var simpleDate = DATE.getMonth()
//         var dataValue = DATA.chartUserData(dataUser)
//         var chartuser = new Chart(chartUser, {
//             type: 'line',
//             data: {
//                 labels: [simpleDate[2], simpleDate[1], simpleDate[0]],
//                 datasets: [{
//                 label: 'จำนวน User ใหม่ทั้งหมด',
//                 data: [61, 122, 100],
//                 borderColor: '#6E7EF5',
//                 fill: false
//                 }]
//             },
//             options: {
//                 responsive: true
//             }
//     })
// }
chartDataIncome(chartIncome,dataIncome){
    var simpleDate = DATE.getMonth()
    var dataValue = DATA.chartIncomeData(dataIncome)
    var chartuser = new Chart(chartIncome, {
        type: 'bar',
        data: {
            labels: [simpleDate[2], simpleDate[1], simpleDate[0]],
            datasets: [{
            label: 'รายได้ต่อเดือน',
            data: [dataValue[2], dataValue[1], dataValue[0],0],
            borderColor: '#3caea3',
            backgroundColor: '#3caea3',
            fill: false
            },
            {
            label: 'รายได้จากการ์ด',
            data: [dataValue[5], dataValue[4], dataValue[3],0],
            borderColor: '#f6d55c',
            backgroundColor: '#f6d55c',
            fill: false
            },
            {
            label: 'รายได้จากโฟโต๊บุ๊ค',
            data: [dataValue[8], dataValue[7], dataValue[6],0],
            borderColor: '#ed553b',
            backgroundColor: '#ed553b',
            fill: false
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return numeral(tooltipItem.yLabel).format('0,0');
                    }
                }
            },
        }
})
},
chartDataType(chartDataType,dataType,type,month,year,update){
    // var simpleDate = DATE.getMonth()
    var dataValue = DATA.CheckOrderType(dataType,type,month,year)
    var chartType = new Chart(chartDataType, {
        type: 'doughnut',
        data: {
            labels: ['Card', 'Photobook'],
            datasets: [{
            label: 'ชนิดของ Order',
            data: [dataValue[0], dataValue[1]],
            borderColor: ['#1d7874','#f4c095'],
            backgroundColor: ['#1d7874','#f4c095'],
            fill: false
            },]
        },
        options: {
            responsive: true
        }
})
    return {chartType,dataValue}
},

chartListOrder(refChart,data,typeOfProduct,monthProduct,year,update){
    // var simpleDate = DATE.getMonth()
    var chartuser
    var dataValue = DATA.chartListOrder(data,typeOfProduct,monthProduct,year)
    // if(update == true){
    //     refChart.remove()
        
    //     document.getElementById('graph-container').append('<canvas id="listOrder-chart"></canvas>');
    //     refChart = document.getElementById("listOrder-chart")
    // }
    // if(update == true){
    //     window.chartuser.destroy()
    // }
    // if (typeof $chartuser !== "undefined") {
    //     $chartuser.destroy();
    //   }
    
chartuser = new Chart(refChart, {
        type: 'horizontalBar',
        data: {
            labels: [monthProduct.text],
            datasets: [{
            label: ['order ทั้งหมด'],
            data: [dataValue[0],0],
            borderColor: '#173f5f',
            backgroundColor: '#173f5f',
            fill: false
            },
            {
            label: ['ยังไม่ได้ชำระเงิน'],
            data: [dataValue[1],0],
            borderColor: '#ed553b',
            backgroundColor: '#ed553b',
            fill: false
            },
            {
            label: ['ชำระเงินเสร็จสิ้นและกำลังดำเนินงาน'],
            data: [dataValue[2],0],
            borderColor: '#3caea3',
            backgroundColor: '#3caea3',
            fill: false
            },{
            label: ['เสร็จสิ้น'],
            data: [dataValue[3],0],
            borderColor: '#20639b',
            backgroundColor: '#20639b',
            fill: false
            }]
        },
        options: {
            responsive: true
        }   
})
return chartuser
}
    // chartuser.update();
}
