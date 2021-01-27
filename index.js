class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const avoid = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newString = []
    let array = string.split(" ")
    for (let i = 0; i < array.length; i++) {
      if (i == 0) {
        newString.push(this.capitalize(array[i]))
      } else {
        if (avoid.includes(array[i])) {
          newString.push(array[i])
        } else {
          newString.push(this.capitalize(array[i]))
        }
      }
    }
    return newString.join(' ')
  }
}