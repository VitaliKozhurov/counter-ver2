export function setStateToLocalStorage<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}

export function getStateFromLocalStorage(key: string) {
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) return JSON.parse(stateAsString)
}