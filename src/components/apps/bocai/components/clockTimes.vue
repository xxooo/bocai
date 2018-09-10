<template>
	<div id="clockTimes">
    <center>
    <span id="clock">{{timeLeft}}</span>
    </center>
  </div>
</template>


<script>
  import { mapGetters } from 'vuex';

	export default {
		props: {
      bocaiInfoData: {
        type: Object
      }
		},
		data() {
			return {
        timeLeft:'',
        childByTime: ''
			}
		},
    components: {
		},
		async created() {
      this.gettimeLeft();
      console.log('bocaiInfoDatagettimeLeft',this.bocaiInfoData);
    },
    computed:{
          ...mapGetters({
          })
     },
    mounted(){
     },
		methods: {
      childClick () {
        // childByValue是在父组件on监听的方法
        // 第二个参数this.childValue是需要传的值
        this.$emit('childByTime', this.childByTime)
      },
      gettimeLeft() {
        var hourtime="24:00:00";
        var endTime =new Date(new Date().toLocaleDateString()+" "+hourtime);

        var now = new Date();

        var nowYear=now.getFullYear();
        var nowMonth=now.getMonth()+1;
        var nowDay=now.getDate();

        var leftTime = endTime.getTime() - now.getTime();
        var ms = parseInt(leftTime % 1000).toString();
        leftTime = parseInt(leftTime / 1000);
        var o = Math.floor(leftTime / 3600);
        var d = Math.floor(o / 24);
        var m = Math.floor(leftTime / 60 % 60);
        var s = leftTime % 60;

        this.timeLeft = o + ":" + m + ":" + s;

        setTimeout(this.gettimeLeft, 100);
      }
		}
	}

</script>

<style scoped>
#clock {
  font: bold 24pt sans;
  background-color: #f5f5f5;
  padding: 0px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0px 0px 0px 40px;
  color: #130e0e;
}

div.dig, div.hour, div.min, div.sec
    {
      position:absolute;
    }
  div.hour, div.min, div.sec
    {
    width:2px;
    height:2px;
    font-size:2px;
    }
    div.dig
    {
    width:30px;
    height:30px;
    font-family:arial,verdana,sans-serif;
    font-size:10px;
    color:#000000;
    text-align:center;
    padding-top:10px
    }
    div.min
    {
    background:#0000FF;
    }
    div.hour
    {
    background:#000000;
    }
    div.sec
    {
    background:#FF0000;
    }

</style>

<style lang="less">
#clockTimes {
  

}

</style>
