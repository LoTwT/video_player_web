import { Ref } from "vue";

export type MaybeRef<T> = Ref<T> | T

export const splitVideoName = (filePath: string) => {
    const slices = filePath.split(/\\|\//g)
    return slices[slices.length - 1]
}

export const secondToString = (sec: number) => {
    sec = Math.floor(sec)

    const hour = Math.floor(sec / 3600).toString().padStart(2, "0")
    sec %= 3600
    const minute = Math.floor(sec / 60).toString().padStart(2, "0")
    const second = sec.toString().padStart(2, "0")

    return `${hour}:${minute}:${second}`
}