import { useStore } from "./index";
import { addListener } from "@/libs/interactive/interactive.web";
import { splitVideoName } from "@/utils";

const store = useStore()

addListener("openFile", (filePaths: string[]) => {
    if (process.env.NODE_ENV === "development") {
        filePaths = filePaths.map(filePath => "http://localhost:5000/" + splitVideoName(filePath))
    }
    // 更新当前视频地址
    store.currentVideoPath = filePaths[0]
    // 更新所有视频列表
    store.videoList = filePaths
})
