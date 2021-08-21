import { isRef, Ref, ref } from "vue"
import { MaybeRef } from "@/utils/index"

class VideoStore {
    // 当前视频路径
    private _currentVideoPath: Ref<string>
    // 所有视频列表
    private _videoList: Ref<string[]>

    constructor(currentVideoPath: MaybeRef<string>, videoList: MaybeRef<string[]>) {
        this._currentVideoPath = isRef(currentVideoPath) ? currentVideoPath : ref(currentVideoPath)
        this._videoList = isRef(videoList) ? videoList : ref(videoList)
    }

    public get currentVideoPath(): string {
        return this._currentVideoPath.value
    }

    public get videoList(): string[] {
        return this._videoList.value
    }

    public set currentVideoPath(newCurrentVideoPath: string) {
        this._currentVideoPath.value = newCurrentVideoPath
    }

    public set videoList(newVideoList) {
        this._videoList.value = newVideoList
    }
}

const store = new VideoStore("", [])

export const useStore = () => store