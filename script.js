window.addEventListener("load", () => {
    if("serviceWorker" in  navigator) {
        navigator.serviceWorker.register("worker.js")
    }
})