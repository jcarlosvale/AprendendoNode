const fetch = require('node-fetch');

class Cielo{ 
    static async compra(body) {
        
        const response = await fetch("https://apisandbox.cieloecommerce.cielo.com.br/1/sales/", {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                "MerchantId": "96a001a9-2f02-4b0e-909d-5f0b51f8d86b",
                "MerchantKey": "KMWNYEPFWPFOKRQLARTVGACIOGZXUWTKAPHEWQXS"
            }
        });
        const data = await response.json();

        console.log(data);
        return data;
    }

    static async captura(paymentId) {
        
        const response = await fetch("https://apisandbox.cieloecommerce.cielo.com.br/1/sales/" + paymentId + "/capture", {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                "MerchantId": "96a001a9-2f02-4b0e-909d-5f0b51f8d86b",
                "MerchantKey": "KMWNYEPFWPFOKRQLARTVGACIOGZXUWTKAPHEWQXS"
            }
        });
        const data = await response.json();

        console.log(data);
        return data;
    }

    static async consulta(paymentId) {
        
        const response = await fetch("https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/" + paymentId, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                "MerchantId": "96a001a9-2f02-4b0e-909d-5f0b51f8d86b",
                "MerchantKey": "KMWNYEPFWPFOKRQLARTVGACIOGZXUWTKAPHEWQXS"
            }
        });
        const data = await response.json();

        console.log(data);
        return data;
    }
}

module.exports = Cielo;