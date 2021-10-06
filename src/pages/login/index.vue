<template>
  <div id="login">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-image
          width="100%"
          height="10rem"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p>个性化定制商城登陆</p>
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
        <div style="margin: 16px">
          <van-button round block color="deeppink" native-type="submit">
            提交
          </van-button>
        </div>
      </van-cell-group>
    </van-form>
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  p {
    text-align: center;
    font-size: 25px;
    color: #666;
  }
}
</style>