class Formatter {
  static capitalize(str){
    return str.at(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(str){
    let arr = str.split(" ")
    return arr.map(word => {
      let newarr = []
      if (arr[0] == word)
        newarr.push(this.capitalize(word))
      else if (!(word == "the" || word == "a" || word == "an" || word == "but" || word == "of" || word == "and" || word == "for" || word == "at" || word == "by" || word == "from"))
      {
        newarr.push(this.capitalize(word))
      }
      else
        newarr.push(word)
      return newarr
    }).join(" ")
  }
}


console.log(Formatter.titleize( "getting giggles" ))
