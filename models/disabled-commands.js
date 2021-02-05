const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const disabledSchema = mongoose.Schema({
guildid: reqString,
commands: Array
})

module.exports = mongoose.model('disabled-commands', disabledSchema)
