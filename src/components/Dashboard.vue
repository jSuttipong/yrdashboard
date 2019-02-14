<template>
  <div class="fontth">
    <b-container class="bgwhite shadow-box border-box">
      <!-- <b-nav tabs class="mb-3">
    <b-nav-item v-bind:class="{ active: isActive }">ภาพรวม</b-nav-item>
    <b-nav-item >Graph</b-nav-item>
      </b-nav>-->
      <div class="information-box mb-4">
        <b-container>
          <b-row>
            <b-col>
              <b-row>
                <b-col>
                  <v-icon class="left">supervisor_account</v-icon>Total Users
                </b-col>
              </b-row>
              <h1>{{dataUser.length}}</h1>
            </b-col>
            <b-col class="line-front-box">
              <b-row>
                <b-col>
                  <v-icon class="left">shopping_cart</v-icon>Total Order
                </b-col>
              </b-row>
              <h1>{{dataOrder.length}}</h1>
            </b-col>
            <b-col class="line-front-box">
              <b-row>
                <b-col>
                  <v-icon class="left">assignment_turned_in</v-icon>All Success Order
                </b-col>
              </b-row>
              <h1>{{statusOrder[0]}}</h1>
            </b-col>
            <b-col class="line-front-box">
              <b-row>
                <b-col>
                  <v-icon class="left">hourglass_empty</v-icon>Inprocess Order
                </b-col>
              </b-row>
              <h1>{{statusOrder[1]}}</h1>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <b-row>
        <b-col>
          <h5>Order แต่ละเดือน</h5>
          <canvas id="order-chart"></canvas>
        </b-col>
        <b-col>
          <!-- <canvas id="user-chart"></canvas> -->
          <h5>รายได้ต่อเดือน</h5>
          <canvas id="income-chart"></canvas>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="bgwhite shadow-box border-box mt-3">
      <b-row>
        <b-col>
          <b-row>
            <b-col>
              <div class="right ml-3">
                <h5>ปี :</h5>
                <b-dropdown id="ddown1" :text="year" class="mb-3">
                  <b-dropdown-item
                    v-for="(index) in previousYear"
                    :key="index"
                    @click="SelectYear(index)"
                  >{{index}}</b-dropdown-item>
                </b-dropdown>
              </div>
              <div class="right ml-3">
                <h5>เดือน :</h5>
                <b-dropdown id="ddown1" :text="monthProduct.text" class="mb-3">
                  <b-dropdown-item
                    v-for="(index) in previousM"
                    :key="index.value"
                    @click="SelectMonth(index)"
                  >{{index.text}}</b-dropdown-item>
                </b-dropdown>
              </div>
              <div class="right">
                <h5>ประเภท : </h5>
                <b-dropdown id="ddown1" :text="typeOfProduct.name" class="mb-3" >
                    <b-dropdown-item v-for="(index) in dataType" :key="index.type" @click="SelectType(index)">{{index.name}}</b-dropdown-item>
                </b-dropdown>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <!-- ------------------- -->
            <b-col>
              <h5>ชนิดของสินค้าทั้งหมด</h5>
              <canvas id="typeOrder-chart"></canvas>
              <h5>Card :{{chartData[0]}}</h5>
              <h5>Photobook :{{chartData[1]}}</h5>
            </b-col>
            <b-col>
          <h5>สถานะชนิดสินค้า : {{typeOfProduct.name}}</h5>
          <canvas id="listOrder-chart"></canvas>
        </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
const axios = require("axios");
const moment = require("moment");
import { DRAW } from "../js/ChartFilter.js";
import { DATA } from "../js/AllData.js";
import { BASE } from "../js/Base.js";
import Chart from "chart.js";
export default {
  components: {},
  data() {
    return {
      datacollection: null,
      alldata: "",
      dataOrder: "",
      dataUser: "",
      refChartOrder: "",
      refChartuser: "",
      refChartIncome: "",
      refChartType: "",
      refChartListOrder: "",
      statusOrder: "",
      year: "",
      previousYear: [],
      typeOfProduct: [],
      dataType: [],
      monthProduct: [],
      previousM: [],
      chartData: "",
      chartSelectData: '',
      isActive: true
    };
  },
  mounted() {
    axios
    .get("https://fishyutt.xyz/dev/admin/files/api/stat_api/stat_order.php")
      .then(result => {
        console.log("result", result.data);
        this.alldata = result.data;
        this.dataOrder = result.data.order;
        this.dataUser = result.data.user;
        this.statusOrder = DATA.StatusDataOrder(this.dataOrder);
        // console.log("allData",this.alldata)
        this.getDate();
        this.drawChart();
      })
      .catch(error => {
        console.log(error.response);
        this.isLoading = false;
      });
  },
  methods: {
    drawChart() {
      this.refChartOrder = document.getElementById("order-chart");
      // this.refChartuser = document.getElementById('user-chart')
      this.refChartIncome = document.getElementById("income-chart");
      this.refChartType = document.getElementById("typeOrder-chart");
      this.refChartListOrder = document.getElementById("listOrder-chart");
      DRAW.chartDataOrder(this.refChartOrder, this.dataOrder);
      DRAW.chartDataIncome(this.refChartIncome, this.dataOrder);
      // DRAW.chartDataType(this.refChartType,this.dataOrder)
      var d = new Date();
      d = d.getFullYear();
      this.chartData = DRAW.chartDataType(
        this.refChartType,
        this.dataOrder,
        this.typeOfProduct,
        this.monthProduct,
        d
      );
      this.chartSelectData = DRAW.chartListOrder(this.refChartListOrder,this.dataOrder,this.typeOfProduct,this.monthProduct,d)

      // DRAW.chartListOrder(this.refChartListOrder, this.dataUser);
    },
    getDate() {
      var now = new Date();
      var s = now.getFullYear();
      this.year = s.toString();
      for (let i = 0; i < 3; i++) {
        this.previousYear.push(parseInt(this.year) - i);
      }
      for (let i = 0; i < 2; i++) {
        this.dataType = [
          { name: "ทั้งหมด", type: 3 },
          { name: "การ์ด", type: 1 },
          { name: "โฟโต้บุ๊ค", type: 2 }
        ];
      }
      this.typeOfProduct = { name: "ทั้งหมด", type: 3 };
      this.monthProduct = { value: "13", text: "ทั้งหมด" };
      this.previousM = BASE.month;
    },
    SelectType(data) {
      this.typeOfProduct = data;
      this.ChangeChartType(data, this.monthProduct, this.year);
    },
    SelectYear(data) {
      this.year = data.toString();
      this.ChangeChartType(this.typeOfProduct, this.monthProduct, data);
    },
    SelectMonth(data) {
      this.monthProduct = data;
      this.ChangeChartType(this.typeOfProduct, data, this.year);
    },
    ChangeChartType(type, monnth, year) {
      this.chartData = DRAW.chartDataType(this.refChartType,this.dataOrder,type,monnth,year);
      DRAW.chartListOrder(this.refChartListOrder,this.dataOrder,type,monnth,year)
    },
  }
};
</script>
<style>
.small {
  max-width: 500px;
}
</style>