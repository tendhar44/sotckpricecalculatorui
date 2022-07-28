export const getSymbolName = (data) => {
    console.log("in dispatch symbol name = " + data)
    return {
        type: "SYMBOL_NAME",
        payload: data
    };
};
