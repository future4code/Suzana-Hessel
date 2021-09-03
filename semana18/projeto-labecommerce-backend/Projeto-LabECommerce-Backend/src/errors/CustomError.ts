export class CustomError extends Error {

    private statusCode: number
    
    constructor (errorStatusCode: number, message: string) {
        super(message)
        this.statusCode = errorStatusCode
    }
}

export class NotFoundError extends CustomError {

    constructor () {
        super(404, `Recurso não encontrado`)
    }
}

export class MissingDataError extends CustomError {

    constructor () {
        super(400, `Dados faltando`)
    }
}

export class UnauthorizedError extends CustomError {

    constructor () {
        super(401, `Acesso não autorizado`)
    }
}