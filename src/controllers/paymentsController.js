const MercadoPago = require('mercadopago');

const getFullUrl = (req) =>{
    const url = req.protocol + '://' + req.get('host');
    console.log(url)
    return url;
}

module.exports = {
    async checkout(req, res){

        console.log("entrou no pagamento");
        MercadoPago.configure({
            sandbox: process.env.SANDBOX == 'true' ? true : false,
            access_token: process.env.MP_ACCESS_TOKEN
        });

        const { id, email, description, amount } = req.params;

        //Create purchase item object template
        const purchaseOrder = {
            items: [
              item = {
                id: id,
                title: description,
                description : description,
                quantity: 1,
                currency_id: 'BRL',
                unit_price: parseFloat(amount)
              }
            ],
            payer : {
              email: email
            },
            auto_return : "all",
            external_reference : id,
            back_urls : {
              success : "http://64.227.5.31:3000/payments/success",
              pending : "http://64.227.5.31:3000/payments/pending",
              failure : "http://64.227.5.31:3000/payments/failure",
            }
          }
      
          //Generate init_point to checkout
          try {
            const preference = await MercadoPago.preferences.create(purchaseOrder);
            return res.redirect(`${preference.body.sandbox_init_point}`);
          }catch(err){
            return res.send(err.message);
          }
    }
}