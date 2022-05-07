//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    getData() {
        return this.data;
    }

    fetchUserData() {
        $.ajax({
            method: "GET",
            context: this,
            url: `https://randomuser.me/api/?results=${USERS}`,
            success: function (userData) {
                let user = userData.results[0]
                this.data.userInfo = new AdvanceUserInfo(user.name.first, user.name.last, user.picture.large, user.location.city, user.location.state)
                this.data.userInfo.myFriends(userData.results)
                this.data.myFriends = this.data.userInfo.friends
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });


    }
   
    

    fetchPokemonData() {

        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${this.randomNumberGen(POKEMONS_NUM)}`,
            context: this,
            success: function (data) {
                this.data.pokemon = {
                    name: data.name,
                    image: data.sprites.front_default
                }
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });

    }


    fetchQuotes() {
        $.ajax({
            method: "GET",
            url: `https://api.kanye.rest`,
            context: this,
            success: function (data) {
                this.data.quote = data.quote
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    fetchMeatData() {
        $.ajax({
            method: "GET",
            url: `https://baconipsum.com/api/?type=all-meat&paras=${PARAS_NUM}`,
            context: this,
            success: function (data) {
                this.data.meat = data[0]
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    fetchData() {
        this.fetchUserData()
        this.fetchPokemonData()
        this.fetchQuotes()
        this.fetchMeatData()
    }
    randomNumberGen(num) {
        return (Math.floor(Math.random() * num) + 1)
    }


}
