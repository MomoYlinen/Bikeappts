import CustomError from "./CustomError";

class OutBoundError extends CustomError {
    errorCode: number = 400
    errorType: string = "Id outbound error"

    constructor(message: string, private property: string) {
        super(message);

        Object.setPrototypeOf(this, OutBoundError.prototype);
    }

    serializeErrors(){
        return [{message: this.message, property:this.property}]
    }
        
}

export default OutBoundError;