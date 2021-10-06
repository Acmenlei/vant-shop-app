import { ref } from "vue"

const title = ref<string>("个性化定制商城");
/* 改变导航的标题 */
function setTitle(name: string) {
    title.value = name;
}

export function useTitle() {
    return {
        setTitle,
        title
    }
}