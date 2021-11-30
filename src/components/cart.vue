<template>
    <div class="b-cart" >
        <svg
            class="b-cursore"
            @click="showCart =! showCart"
            width="33"
            height="29"
            viewBox="0 0 33 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M27.199 29C26.5512 28.9738 25.9396 28.6948 25.4952 28.2227C25.0509 27.7506 24.8094 27.1232 24.8225 26.475C24.8356 25.8269 25.1023 25.2097 25.5653 24.7559C26.0283 24.3022 26.6508 24.048 27.2991 24.048C27.9474 24.048 28.5697 24.3022 29.0327 24.7559C29.4957 25.2097 29.7624 25.8269 29.7755 26.475C29.7886 27.1232 29.5471 27.7506 29.1028 28.2227C28.6585 28.6948 28.0468 28.9738 27.399 29H27.199ZM7.75098 26.32C7.75098 25.79 7.90815 25.2718 8.20264 24.8311C8.49712 24.3904 8.91569 24.0469 9.4054 23.844C9.8951 23.6412 10.434 23.5881 10.9539 23.6915C11.4737 23.7949 11.9512 24.0502 12.326 24.425C12.7009 24.7998 12.9562 25.2773 13.0596 25.7972C13.163 26.317 13.1098 26.8559 12.907 27.3456C12.7041 27.8353 12.3606 28.2539 11.9199 28.5483C11.4792 28.8428 10.9611 29 10.431 29C10.0789 29.0003 9.73017 28.9311 9.40479 28.7966C9.0794 28.662 8.78374 28.4646 8.53467 28.2158C8.28559 27.9669 8.08805 27.6713 7.95325 27.3461C7.81844 27.0208 7.74902 26.6721 7.74902 26.32H7.75098ZM11.551 20.686C11.2916 20.6868 11.039 20.6024 10.8322 20.4457C10.6253 20.2891 10.4756 20.0689 10.406 19.819L5.573 2.36401H2.18005C1.86657 2.36401 1.56591 2.23947 1.34424 2.01781C1.12257 1.79614 0.998047 1.49549 0.998047 1.18201C0.998047 0.868519 1.12257 0.567873 1.34424 0.346205C1.56591 0.124537 1.86657 5.81268e-06 2.18005 5.81268e-06H6.46106C6.72055 -0.00080736 6.97309 0.0837201 7.17981 0.240568C7.38653 0.397416 7.53589 0.617884 7.60498 0.868006L12.438 18.323H25.616L29.999 8.27501H15.399C15.2409 8.27961 15.0834 8.25242 14.9359 8.19507C14.7884 8.13771 14.6539 8.05134 14.5404 7.94108C14.4269 7.83082 14.3366 7.69891 14.275 7.55315C14.2134 7.40739 14.1816 7.25075 14.1816 7.0925C14.1816 6.93426 14.2134 6.77762 14.275 6.63186C14.3366 6.4861 14.4269 6.35419 14.5404 6.24393C14.6539 6.13367 14.7884 6.0473 14.9359 5.98994C15.0834 5.93259 15.2409 5.90541 15.399 5.91001H31.812C32.0077 5.90996 32.2003 5.95866 32.3724 6.05172C32.5446 6.14478 32.6908 6.27926 32.798 6.44301C32.9058 6.60729 32.9714 6.79569 32.9889 6.99145C33.0063 7.18721 32.9752 7.38424 32.8981 7.565L27.493 19.977C27.4007 20.1876 27.249 20.3668 27.0565 20.4927C26.864 20.6186 26.6391 20.6858 26.4091 20.686H11.551Z"
                fill="#E8E8E8"
            />
        </svg>
        <div class="b-wrapper-cartList" v-show="showCart">
            <div class="b-container-cartList">
                <div class="b-cartList">
                    <div class="b-cartList-close">
                        <svg 
                        class="b-cartList-close__icon"
                            @click="showCart =! showCart"
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z"
                                fill="#6F6E6E"
                            />
                        </svg>
                    </div>
                    <div class="b-cartList-empty" v-if="goods.length < 1">Your cart is empty</div>
                    <div  class="b-cartList-items" v-else>
                    <template  v-for="good of goods" :key="good">
                        <div class="b-cartList-item">
                            <img class="b-cartList-item__img" :src="good.image" :alt="good.title" />
                            <div class="b-cartList-item__contents">
                                <div class="b-cartList-item__row">
                                    Title:
                                    <span>{{good.title}}</span>
                                </div>
                                <div class="b-cartList-item__row">
                                    Quantity:
                                    <span>{{good.quantity}}</span>
                                </div>
                                <div class="b-cartList-item__row">
                                    Price: $
                                    <span>{{good.price}}</span>
                                </div>
                            </div>
                            <div class="b-cartList-btns">
                            <div class="b-cartList-btns__btn" @click="changeGood('/api/cart/:id', good, 'del')">delete one piece</div>
                                <div class="b-cartList-btns__btn" @click="delGood('/api/cart/:id', good)">delete position</div>
                            </div>
                        </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["goods"],
    emits:["cartJson", "delGood", "changeGood"],
    data() {
        return {
            showCart: false,
        }
    },
    mounted(){
        this.cartJson('/api/cart', 'arrCartGoods')
    },
    methods:{
        cartJson(url, arr){
            this.$emit("cartJson", url, arr)
        },        
        delGood(url, good){
            this.$emit("delGood", url, good)
        },
        changeGood(url,good, operation){
            this.$emit("changeGood", url, good, operation)
        }
    }
}
</script>
<style lang="scss">
.b-cart{
    position: relative;
    display:none;

        @media(min-width: 768px){
            display:inline-block;
        }
}
.b-wrapper-cartList{
    position: absolute;
    top:55px;
    right:0;
    background: white;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    max-height: 764px;
    overflow: auto;
;
}
.b-container-cartList{
    padding:10px;
}
.b-cartList-close{
    display: flex;
    justify-content: flex-end;
    padding:5px;
}
.b-cartList-empty {
    min-width: 200px;
    display: flex;
    justify-content: center;
}
.b-cartList-items{
    display: flex;
    flex-wrap: wrap;
}
.b-cartList-item{
    display: flex;
    align-items: center;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    padding:5px;

    &__img{
        max-width: 100px;
    }
    &__contents{
        padding:5px
    }
    &__row{
        min-width:120px;
    }
}
.b-cartList-btns{
    display: flex;
    min-width: 120px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    &__btn{
        padding:3px;
        background: #3A3838;
        color:white;    
    }
}
</style>