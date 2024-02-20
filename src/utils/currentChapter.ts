function saveCurrent(current:string) {
    window.localStorage.setItem('current', current);
}

function getCurrent() {
    return window.localStorage.getItem('current');
}

export { saveCurrent, getCurrent };