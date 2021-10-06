<template>
  <div id="login">
    <van-form class="my-form" @submit="onSubmit">
      <van-cell-group inset>
        <div class="login-title">
          <p>FU个性化定制平台</p>
          <p>做自己的产品经理</p>
        </div>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
              <div style="margin: 16px">
          <van-button round block color="var(--van-login-title-background)" native-type="submit">
            立即登录
          </van-button>
        </div>
    </van-form>
    <van-divider dashed>其他登陆方式</van-divider>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import { LoginForm } from "@/types";
import { Toast } from "vant";
import { routerReplace } from "@/router/scripts/router-trigger";

export default defineComponent({
  name: "login",
  setup() {
    const username = ref("");
    const password = ref("");

    const onSubmit = (values: LoginForm) => {
      Toast.loading({ forbidClick: true, message: "正在登陆" });
      setTimeout(() => {
        Toast.clear(true);
        routerReplace("/home");
      }, 2000);
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
});
</script>

<style lang='scss' scoped>
#login {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  left: 50%;
  transform: translateX(-50%);

  .my-form {
    width: 100vw;
    // height: 100vh;
    .van-cell-group {
      width: 100%;
      // height: 100%;
      margin: 0;
    }
  }

  .login-title {
    height: 15rem;
    background: var(--van-login-title-background);

    p {
      text-align: center;
      color: #f8f8f8;
      &:nth-child(1) {
        transform: translateY(250%);
        font-size: 25px;
      }
      &:nth-child(2) {
        font-size: 15px;
        transform: translateY(350%);
      }
    }
  }
}
</style>