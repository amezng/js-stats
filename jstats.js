module.exports = function(xs){
    this.xs = xs
    this.sum = function(){
        var sum = 0
        for(let x of this.xs){
            sum += x
        }
        return sum
    }
    this.mean = function(){
        return this.sum()/this.xs.length
    }
}

