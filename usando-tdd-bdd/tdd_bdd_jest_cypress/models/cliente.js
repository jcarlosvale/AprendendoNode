module.exports = class Cliente{
    
    constructor(id = 0, nome="", telefone="") {
        this.id = id
        this.nome = nome
        this.telefone = telefone
    
    }

    static primeiro() {
        return new Cliente()
    }
    
    static todos() {
        return [
            new Cliente(1, "Zezim 1", "123456789"),
            new Cliente(2, "Zezim 2", "123456789"),
            new Cliente(3, "Zezim 3", "123456789"),
            new Cliente(4, "Zezim 4", "123456789"),
            new Cliente(5, "Zezim 5", "123456789"),
            new Cliente(6, "Zezim 6", "123456789"),
            new Cliente(7, "Zezim 7", "123456789"),
            new Cliente(8, "Zezim 8", "123456789"),
            new Cliente(9, "Zezim 9", "123456789"),
            new Cliente(10, "Zezim 10", "123456789")
        ]
    }

}