import router from "@/router"
import { useTitle } from "./common/navigator"

const { setTitle } = useTitle();

router.beforeEach((to, from, next) => {
    setTitle((to.meta as any).title);
    next();
})

export default router;