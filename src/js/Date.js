import {BASE} from '../js/Base.js'
const moment = require('moment');
moment.locale('th')
export const DATE = {
    getMonth(){
        var now = new Date()
        var year = now.getFullYear()
        var monthNow = ''
        var lastMonth = ''
        var monthsAgo = ''
        var threeMonth = []
        var month = now.getMonth()
        for (let index = 0; index < BASE.month.length; index++) {
            if(month == BASE.month[index].value)
            {
                monthNow = BASE.month[index].text +' : '+ year;
                if(BASE.month[index].value == '0'){
                    lastMonth = BASE.month[11].text +' : '+ (Number(year)-1)
                    monthsAgo = BASE.month[10].text +' : '+ (Number(year)-1)
                }else if(BASE.month[index].value == '1'){
                    lastMonth = BASE.month[index-1].text +' : '+year
                    monthsAgo = BASE.month[11].text +' : '+ (Number(year)-1)
                }else{
                    lastMonth = BASE.month[index-1].text +' : '+ year
                    monthsAgo = BASE.month[index-2].text +' : '+ year
                }
            }
        }
        threeMonth.push(monthNow,lastMonth,monthsAgo)
        return  threeMonth
        
    }
}