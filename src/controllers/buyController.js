class BuyController {
  sucess(req, res) {

    id_user = req.params.id_user;
    messege = req.params.messege;
    console.log(messege);
    req.io.emit(id_user, messege);

  }

  pending(req, res) {

    id_user = req.params.id_user;
    messege = req.params.messege;
    console.log(messege);
    req.io.emit(id_user, messege);

  }

  failure(req, res){

    
    id_user = req.params.id_user;
    messege = req.params.messege;
    console.log(messege);
    req.io.emit(id_user, messege);

  }

}

export default new BuyController();
