import { useStore } from "./index";
import { addListener } from "@/libs/interactive/interactive.web";

const store = useStore()

addListener("openFile", (filePaths: string[]) => {
    // 更新当前视频地址
    store.currentVideoPath = filePaths[0]
    // 更新所有视频列表
    store.videoList = filePaths
})
