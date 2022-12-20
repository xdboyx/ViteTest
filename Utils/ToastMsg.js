import { toast } from "react-toastify"

export function toastMsg(msg) {
    toast(msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}

export function toastSuccessMsg(msg) {
    toast.success(msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}

export function toastMsgError(msg) {
    toast.error(msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}

export function toastSharepoint(msg) {
    toast(`${msg}`, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: 0,
    });
}


export function toastClear() {
    toast.dismiss()
}
