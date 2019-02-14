const moment = require('moment');
moment.locale('th')
export const DATA = {
    chartOrderData(dataOrder){
        var now = new Date()
        var month = now.getMonth()
        var year = now.getFullYear()        // var year = now.getFullYear()
        var orderNowValue = []
        var orderLastMonthValue = []
        var orderMonthAgoValue = []
        var orderAllValue =[]
        var orderSuccessNow = []
        var orderSuccessLastMonth = []
        var orderSuccessMonthAgo = []
        var orderPaymentNow = []
        var orderPaymentLastMonth = []
        var orderPaymentMonthAgo = []
        var orderDontPay1 = []
        var orderDontPay2 = []
        var orderDontPay3 = []
        // All Order ********************************
        for (let index = 0; index < dataOrder.length; index++) {
            if (parseInt(moment(dataOrder[index].order_date).format("M"), 10)-1 == month && moment(dataOrder[index].order_date).format("YYYY") == year) {
                orderNowValue.push(dataOrder[index])                
            }else if(month == 0){
                if(parseInt(moment(dataOrder[index].order_date).format("M"), 10)-1 == '11'){
                    orderLastMonthValue.push(dataOrder[index])
                }else
                if(parseInt(moment(dataOrder[index].order_date).format("M"), 10)-1 == '10'){
                    orderMonthAgoValue.push(dataOrder[index])
                }       
            }
            else if(month == 1){
                if(parseInt(moment(dataOrder[index].order_date).format("M"), 10)-1 == month-1){
                    orderLastMonthValue.push(dataOrder[index])
                }else if(parseInt(moment(dataOrder[index].order_date).format("M"), 10)-1 == '11'){
                    orderMonthAgoValue.push(dataOrder[index])
                }
            }else if(parseInt(moment(dataOrder[index].order_date).format("M"), 10)-1 == month-1){
                orderLastMonthValue.push(dataOrder[index])
            }else if(parseInt(moment(dataOrder[index].order_date).format("M"), 10)-1 == month-2){
                orderMonthAgoValue.push(dataOrder[index])
            }
        }
        // Success Order ****************************
        for (let i = 0; i < dataOrder.length; i++) {
            if (parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == month && dataOrder[i].order_status == 4) {
                orderSuccessNow.push(dataOrder[i].order_status)
            }else if(month == 0){
                if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == '11' && dataOrder[i].order_status == 4){
                    orderSuccessLastMonth.push(dataOrder[i].order_status)
                }else
                if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == '10' && dataOrder[i].order_status == 4){
                    orderSuccessMonthAgo.push(dataOrder[i].order_status)
                }       
            }
            else if(month == 1){
                if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == month-1 && dataOrder[i].order_status == 4){
                    orderSuccessLastMonth.push(dataOrder[i].order_status)
                }else if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == '11' && dataOrder[i].order_status == 4){
                    orderSuccessMonthAgo.push(dataOrder[i].order_status)
                }
            }else if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == month-1 && dataOrder[i].order_status == 4){
                orderSuccessLastMonth.push(dataOrder[i].order_status)
            }else if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == month-2 && dataOrder[i].order_status == 4){
                orderSuccessMonthAgo.push(dataOrder[i].order_status)
            }
        }
        for (let i = 0; i < dataOrder.length; i++) {
            if(dataOrder[i].order_status == 2 || dataOrder[i].order_status == 3){
                if (parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == month ) {
                    orderPaymentNow.push(dataOrder[i].order_status)
                }else if(month == 0){
                    if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == '11'){
                        orderPaymentLastMonth.push(dataOrder[i].order_status)
                    }else
                    if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == '10'){
                        orderPaymentMonthAgo.push(dataOrder[i].order_status)
                    }       
                }
                else if(month == 1){
                    if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == month-1){
                        orderPaymentLastMonth.push(dataOrder[i].order_status)
                    }else if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == '11'){
                        orderPaymentMonthAgo.push(dataOrder[i].order_status)
                    }
                }else if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == month-1){
                    orderPaymentLastMonth.push(dataOrder[i].order_status)
                }else if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == month-2){
                    orderPaymentMonthAgo.push(dataOrder[i].order_status)
                }
            }
        }
        for (let i = 0; i < dataOrder.length; i++) {
            if(dataOrder[i].order_status == 1){
                if (parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == month ) {
                    orderDontPay1.push(dataOrder[i].order_status)
                }else if(month == 0){
                    if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == '11'){
                        orderDontPay2.push(dataOrder[i].order_status)
                    }else
                    if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == '10'){
                        orderDontPay3.push(dataOrder[i].order_status)
                    }       
                }
                else if(month == 1){
                    if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == month-1 ){
                        orderDontPay2.push(dataOrder[i].order_status)
                    }else if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == '11' ){
                        orderDontPay3.push(dataOrder[i].order_status)
                    }
                }else if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == month-1 ){
                    orderDontPay2.push(dataOrder[i].order_status)
                }else if(parseInt(moment(dataOrder[i].order_date).format("M"), 10)-1 == month-2 ){
                    orderDontPay3.push(dataOrder[i].order_status)
                }
            }
        }
        orderAllValue.push(orderNowValue.length,orderLastMonthValue.length,orderMonthAgoValue.length,orderSuccessNow.length,orderSuccessLastMonth.length,orderSuccessMonthAgo.length
            ,orderPaymentNow.length,orderPaymentLastMonth.length,orderPaymentMonthAgo.length,orderDontPay1.length,orderDontPay2.length,orderDontPay3.length)
        return orderAllValue
    },
    chartUserData(dataUser){
        var now = new Date()
        var month = now.getMonth()
        var year = now.getFullYear()
        var userNowValue = []
        var userLastMonthValue = []
        var userMonthAgoValue = []
        var userAllValue =[]
        
        for (let i = 0; i < dataUser.length; i++) {
            if (moment(dataUesr[i].user_reg_date).format("M")-1 <= month ) {
                userNowValue.push(dataUesr[i].user_reg_date)
            }
        }
        // var s = moment(dataUser[1].user_reg_date).format("YYYY")-1
        console.log('---'+userNowValue)
    },
    chartIncomeData(dataIncome){
        var now = new Date()
        var month = now.getMonth()
        // var year = now.getFullYear()
        var incomeNowValue = []
        var incomeLastMonthValue = []
        var incomerMonthAgoValue = []
        var incomeAllValue =[]
        var incomeNow = 0
        var incomeLast = 0
        var incomerMonthAgo = 0
        var cardIncomeNow = []
        var cardIncomeLastMounth = []
        var cardIncomeMounthAgo = []
        var bookIncomeNow = []
        var bookIncomeLastMounth = []
        var bookIncomeMounthAgo = []
        var cardIncome1 = 0
        var cardIncome2 = 0
        var cardIncome3 = 0
        var bookIncome1 = 0
        var bookIncome2 = 0
        var bookIncome3 = 0
        for (let i = 0; i < dataIncome.length; i++) {
            if (parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == month && dataIncome[i].order_status == '2') {
                    incomeNowValue.push(dataIncome[i].order_price)
            }else if(month == 0){
                if(parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == '11'&& dataIncome[i].order_status == '2'){
                    incomeLastMonthValue.push(dataIncome[i].order_price)
                }else
                if(parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == '10'&& dataIncome[i].order_status == '2'){
                    incomerMonthAgoValue.push(dataIncome[i].order_price)
                }       
            }else if(month == 1){
                if(parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == month-1 && dataIncome[i].order_status == '2'){
                    incomeLastMonthValue.push(dataIncome[i].order_price)
                }else if(parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == '11' && dataIncome[i].order_status == '2'){
                    incomerMonthAgoValue.push(dataIncome[i].order_price)
                }
            }else if(parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == month-1 && dataIncome[i].order_status == '2'){
                incomeLastMonthValue.push(dataIncome[i].order_price)
            }else if(parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == month-2 && dataIncome[i].order_status == '2'){
                incomerMonthAgoValue.push(dataIncome[i].order_price)
            }
        }
        for (let j = 0; j < incomeNowValue.length; j++) {
            incomeNow=Number(incomeNow)+Number(incomeNowValue[j]) 
        }
        for (let j = 0; j < incomeLastMonthValue.length; j++) {
            incomeLast=Number(incomeLast)+Number(incomeLastMonthValue[j])
        }
        for (let j = 0; j < incomerMonthAgoValue.length; j++) {
            incomerMonthAgo=Number(incomerMonthAgo)+Number(incomerMonthAgoValue[j])
        }
        for (let i = 0; i < dataIncome.length; i++) {
            if (parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == month && dataIncome[i].order_status == '2') {
                    if(dataIncome[i].order_type == '1'){
                        cardIncomeNow.push(dataIncome[i].order_price)
                    }else{bookIncomeNow.push(dataIncome[i].order_price)}
            }else if(month == 0){
                if(parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == '11'&& dataIncome[i].order_status == '2'){
                    if(dataIncome[i].order_type == '1'){
                        cardIncomeLastMounth.push(dataIncome[i].order_price)
                    }else{bookIncomeLastMounth.push(dataIncome[i].order_price)}
                }else
                if(parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == '10'&& dataIncome[i].order_status == '2'){
                    if(dataIncome[i].order_type == '1'){
                        cardIncomeMounthAgo.push(dataIncome[i].order_price)
                    }else{bookIncomeMounthAgo.push(dataIncome[i].order_price)}
                }       
            }else if(month == 1){
                if(parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == month-1 && dataIncome[i].order_status == '2'){
                    if(dataIncome[i].order_type == '1'){
                        cardIncomeLastMounth.push(dataIncome[i].order_price)
                    }else{bookIncomeLastMounth.push(dataIncome[i].order_price)}
                }else if(parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == '11' && dataIncome[i].order_status == '2'){
                    if(dataIncome[i].order_type == '1'){
                        cardIncomeMounthAgo.push(dataIncome[i].order_price)
                    }else{bookIncomeMounthAgo.push(dataIncome[i].order_price)}
                }
            }else if(parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == month-1 && dataIncome[i].order_status == '2'){
                if(dataIncome[i].order_type == '1'){
                    cardIncomeLastMounth.push(dataIncome[i].order_price)
                }else{bookIncomeLastMounth.push(dataIncome[i].order_price)}
            }else if(parseInt(moment(dataIncome[i].order_date).format("M"), 10)-1 == month-2 && dataIncome[i].order_status == '2'){
                if(dataIncome[i].order_type == '1'){
                    cardIncomeMounthAgo.push(dataIncome[i].order_price)
                }else{bookIncomeMounthAgo.push(dataIncome[i].order_price)}
            }
        }
        for (let j = 0; j < cardIncomeNow.length; j++) {
            cardIncome1=Number(cardIncome1)+Number(cardIncomeNow[j]) 
        }
        for (let j = 0; j < cardIncomeLastMounth.length; j++) {
            cardIncome2=Number(cardIncome2)+Number(cardIncomeLastMounth[j])
        }
        for (let j = 0; j < cardIncomeMounthAgo.length; j++) {
            cardIncome3=Number(cardIncome3)+Number(cardIncomeMounthAgo[j])
        }
        for (let j = 0; j < bookIncomeNow.length; j++) {
            bookIncome1=Number(bookIncome1)+Number(bookIncomeNow[j]) 
        }
        for (let j = 0; j < bookIncomeLastMounth.length; j++) {
            bookIncome2=Number(bookIncome2)+Number(bookIncomeLastMounth[j])
        }
        for (let j = 0; j < bookIncomeMounthAgo.length; j++) {
            bookIncome3=Number(bookIncome3)+Number(bookIncomeMounthAgo[j])
        }
        incomeAllValue.push(Number(incomeNow),Number(incomeLast),Number(incomerMonthAgo),
        Number(cardIncome1),Number(cardIncome2),Number(cardIncome3),Number(bookIncome1),Number(bookIncome2),Number(bookIncome3))
        
        return incomeAllValue
    },
    StatusDataOrder(dataOrder){
        var allSuccess = []
        var allInprocess = []
        var allPayment = []
        var all = []
        for (let i = 0; i < dataOrder.length; i++) {
            if(dataOrder[i].order_status == '4'){
                allSuccess.push(dataOrder[i].order_status)
            }else if(dataOrder[i].order_status == '3'){
                allInprocess.push(dataOrder[i].order_status)
            }else if(dataOrder[i].order_status == '2'){
                allPayment.push(dataOrder[i].order_status)
            }
        }
        all.push(allSuccess.length,allInprocess.length,allPayment.length)
        return all
    },
    CheckOrderType(type,typeProduct,month,year){
        var typeOfOrder = []
        var card = []
        var photoBook = []
        // var y = new Date()
        // y = y.getFullYear()
        if(month.value == 13 ){
            for (let i = 0; i < type.length; i++) {
                if(type[i].order_type=='1'&& moment(type[i].order_date).format("YYYY") == year){
                    card.push(type[i])
                }else if(type[i].order_type=='2'&& moment(type[i].order_date).format("YYYY")== year){
                    photoBook.push(type[i])
                }
            }
        }
        else {
            for (let i = 0; i < type.length; i++) {
                if(type[i].order_type=='1'&& (moment(type[i].order_date).format("M"))-1 == month.value && moment(type[i].order_date).format("YYYY") == year){
                    card.push(type[i])
                }else if(type[i].order_type=='2' && (moment(type[i].order_date).format("M"))-1 == month.value && moment(type[i].order_date).format("YYYY")== year){
                    photoBook.push(type[i])
                }
            }
        } 
            typeOfOrder.push(card.length,photoBook.length)
        return typeOfOrder
    },
    chartListOrder(data,typeOfProduct,monthProduct,year){
        var allData = []
        var pAllStatus = []
        var pStatus1 = []
        var pStatus2_3 = []
        var pStatus4 = []
        // console.log('getData',typeOfProduct,monthProduct)
        if(monthProduct.value == '13' && typeOfProduct.type == '3'){
            for (let i = 0; i < data.length; i++) {
                if(moment(data[i].order_date).format("YYYY") == year ){
                    pAllStatus.push(data[i])
                    if(data[i].order_status == '1'){
                        pStatus1.push(data[i])
                    }else if(data[i].order_status == '2' || data[i].order_status == '3'){
                        pStatus2_3.push(data[i])
                    }else if(data[i].order_status == '4'){
                        pStatus4.push(data[i])
                    }
                }
            }
        }else if (monthProduct.value == '13') {
                for (let i = 0; i < data.length; i++) {
                if(data[i].order_type==typeOfProduct.type && moment(data[i].order_date).format("YYYY") == year ){
                    pAllStatus.push(data[i])
                    if(data[i].order_status == '1'){
                        pStatus1.push(data[i])
                    }else if(data[i].order_status == '2' || data[i].order_status == '3'){
                        pStatus2_3.push(data[i])
                    }else if(data[i].order_status == '4'){
                        pStatus4.push(data[i])
                    }
                }
        }
        }else if (typeOfProduct.type == '3') {
            for (let i = 0; i < data.length; i++) {
                if((moment(data[i].order_date).format("M"))-1 == monthProduct.value && moment(data[i].order_date).format("YYYY") == year ){
                    pAllStatus.push(data[i])
                    if(data[i].order_status == '1'){
                        pStatus1.push(data[i])
                    }else if(data[i].order_status == '2' || data[i].order_status == '3'){
                        pStatus2_3.push(data[i])
                    }else if(data[i].order_status == '4'){
                        pStatus4.push(data[i])
                    }
                }
            }
        }else {
            for (let i = 0; i < data.length; i++) {
                if((moment(data[i].order_date).format("M"))-1 == monthProduct.value&& data[i].order_type==typeOfProduct.type && moment(data[i].order_date).format("YYYY") == year ){
                    pAllStatus.push(data[i])
                    if(data[i].order_status == '1'){
                        pStatus1.push(data[i])
                    }else if(data[i].order_status == '2' || data[i].order_status == '3'){
                        pStatus2_3.push(data[i])
                    }else if(data[i].order_status == '4'){
                        pStatus4.push(data[i])
                    }
                }
            }
        }
        allData.push(pAllStatus.length,pStatus1.length,pStatus2_3.length,pStatus4.length)
        return allData
    }
}