<template>
    <div class="calculator">
        <div class="display">{{ current || '0' }}</div>

        <div @click="clear" class="btnx">C</div>
        <div @click="sign" class="btnx">+/-</div>
        <div @click="percent" class="btnx">%</div>
        <div @click="divide" class="btnx operator">÷</div>

        <div @click="append('7')" class="btnx">7</div>
        <div @click="append('8')" class="btnx">8</div>
        <div @click="append('9')" class="btnx">9</div>
        <div @click="times" class="btnx operator">*</div>

        <div @click="append('4')" class="btnx">4</div>
        <div @click="append('5')" class="btnx">5</div>
        <div @click="append('6')" class="btnx">6</div>
        <div @click="minus" class="btnx operator">-</div>

        <div @click="append('1')" class="btnx">1</div>
        <div @click="append('2')" class="btnx">2</div>
        <div @click="append('3')" class="btnx">3</div>
        <div @click="plus" class="btnx operator">+</div>

        <div @click="append('0')" class="btnx zero">0</div>
        <div @click="dot" class="btnx">.</div>
        <div @click="equal" class="btnx operator">=</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: '',
            prev: 0,
            operator: null,
            operatorClicked: false
        }
    },
    methods: {
        clear() { 
          this.current = '';
          this.prev = '';
          this.operator = '';
        },
        append(number) { 
          if (this.operatorClicked) {
            this.current = '';
            this.operatorClicked = false;
          }
          this.current = `${this.current}${number}`;
        },
        dot() {
          if (this.current.indexOf('.') === -1) {
            this.append('.');
          }
        },
        sign() {
          this.current = (-1 * parseFloat(this.current) || 0).toString()
        },
        percent() {
          this.operator = (a, b) => a * b / 100;
          this.setPrev();
        },
        plus() {
          this.operator = (a, b) => a + b;
          this.setPrev();
        },
        minus() {
          this.operator = (a, b) => a - b;
          this.setPrev();
        },
        times() {
          this.operator = (a, b) => a * b;
          this.setPrev();
        },
        divide() {
          this.operator = (a, b) => a / b;
          this.setPrev();
        },
        setPrev() {
          this.prev = parseFloat(this.current) || 0;
          this.operatorClicked = true;
        },
        equal() {
          var first = parseFloat(this.current) || 0;
          var second = parseFloat(this.prev) || 0;
          this.current = this.operator(second, first);
          this.prev = null;
        }
    },
}
</script>

<style lang="css" scoped>
.calculator {
  margin: 0 auto;
  width: 400px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}
.zero {
  grid-column: 1 / 3;
}
.btnx {
  background-color: #F2F2F2;
  border: 1px solid #999;
  cursor: pointer;
}
.operator {
  background-color: orange;
  color: white;
}
</style>