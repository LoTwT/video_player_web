import { isRef, Ref, ref } from "vue"
import { MaybeRef } from "@/utils/index"

export const enum PlayState {
    PLAY = "play",
    PAUSE = "pause",
    STOP = "stop"
}

class VideoStore {
    // 当前视频路径
    private _currentVideoPath: Ref<string>
    // 所有视频列表
    private _videoList: Ref<string[]>

    // 当前视频播放时间
    private _currentTime: Ref<number> = ref(0)
    // 当前视频时间总长
    private _totalTime: Ref<number> = ref(0)
    // 是否正在播放
    private _playState: Ref<PlayState> = ref(PlayState.STOP)

    constructor(currentVideoPath: MaybeRef<string>, videoList: MaybeRef<string[]>) {
        this._currentVideoPath = isRef(currentVideoPath) ? currentVideoPath : ref(currentVideoPath)
        this._videoList = isRef(videoList) ? videoList : ref(videoList)
    }

    public get currentVideoPath(): string {
        return this._currentVideoPath.value
    }

    public set currentVideoPath(newCurrentVideoPath: string) {
        this._currentVideoPath.value = newCurrentVideoPath
    }

    public get videoList(): string[] {
        return this._videoList.value
    }

    public set videoList(newVideoList) {
        this._videoList.value = newVideoList
    }

    public get currentTime(): number {
        return this._currentTime.value
    }

    public set currentTime(newCurrentTime) {
        this._currentTime.value = newCurrentTime
    }

    public get totalTime(): number {
        return this._totalTime.value
    }

    public set totalTime(newTotalTime) {
        this._totalTime.value = newTotalTime
    }

    public get playState(): PlayState {
        return this._playState.value
    }

    public set playState(newPlayState) {
        this._playState.value = newPlayState
    }
}

const store = new VideoStore("", [])

export const useStore = () => store
