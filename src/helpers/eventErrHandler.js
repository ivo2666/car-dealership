export default (func) => {
     try {
        func()
    } catch (err) {
        console.log( `Error: ${err} / ${func.name}`);
    }
}