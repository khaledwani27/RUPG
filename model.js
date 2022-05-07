class UserInfo {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

class AdvanceUserInfo extends UserInfo {
    constructor(firstName, lastName, image, city, state) {
        super(firstName, lastName)
        this.image = image
        this.city = city
        this.state = state
        this.friends = []
    }

    myFriends(friends) {
        for (let i = 1; i < friends.length; i++) {
            this.friends.push(new UserInfo(friends[i].name.first, friends[i].name.last))
        }
    }
}