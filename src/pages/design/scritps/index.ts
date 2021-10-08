import { reactive, ref } from "vue"

export function useDesign() {
    const list = reactive<any>([]);
    const loading = ref(false);
    const finished = ref(false);

    function onLoad() {
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                list.push(list.length + 1);
            }
            // 加载状态结束
            loading.value = false;

            // 数据全部加载完成
            if (list.length >= 40) {
                finished.value = true;
            }
        }, 1000);
    };
    return {
        onLoad,
        list,
        loading,
        finished
    }
}