module.exports = {
  failure(req, res) {
    id_user = req.params.id_user;
    messege = req.params.messege;
    console.log(messege);
    req.io.emit(id_user, messege);
  }
}