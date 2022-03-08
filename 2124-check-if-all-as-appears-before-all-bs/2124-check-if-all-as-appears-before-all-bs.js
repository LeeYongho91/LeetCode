/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let answer = true;
      // a cannot come after b
    let violation = "ba";
    
    return s.indexOf(violation, 0) == -1;
};