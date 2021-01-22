

function kilometerToMeter(kilometer) {
    if (typeof (kilometer) != 'number') {
        return "you should give input as number";
    }
    if (kilometer < 0) {
        return "distance cannot be negative";
    }
    var result = kilometer * 1000;
    return result
}

function budgetCalculator(watch, phone, laptop) {
    if ((typeof (watch) == 'number' && typeof (phone) == 'number') && typeof (laptop) == 'number') {
        if ((watch > 0 && phone > 0) && laptop > 0) {
            var result = 0;
            result = watch * 50 + phone * 100 + laptop * 500;
            return result
        }
        else {
            return "you should select minimum quantity 1 or more of each item"
        }
    }
    else {
        return "you should put number as argument not a string"
    }

}
function hotelCost(days) {
    if (typeof (days) != 'number') {
        result = "you should give input as number";
        return result;
    }
    if (days < 1) {
        var result = "you don't have to pay any cost";
        return result;
    }
    else if (days <= 10) {
        result = days * 100;
        return result;
    }
    else if (days <= 20) {
        result = 10 * 100 + (days - 10) * 80;
        return result;
    }
    else {
        result = 10 * 100 + 10 * 80 + (days - 20) * 50;
        return result;
    }
}

function megaFriend(friends) {
    if (friends.length > 0) {
        var index = 0
        var length = 0
        for (var i = 0; i < friends.length; i++) {
            if (friends[i].length > length) {
                length = friends[i].length;
                index = i;
            }
        }
        return friends[index]
    }
    else {
        return "there is no megaFriend in an empty array"
    }

}
