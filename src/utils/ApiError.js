class ApiError extends Error{
    constructor(
        satausCode,
        message="Something went wrong",
        errors=[],
        statck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false;
        this.error=errors
    }
}
export {ApiError}