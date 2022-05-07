
class Renderer {

    setTemplate(templateID) {
        const source = $(templateID).html();
        return Handlebars.compile(source);
    }

    renderHelper(templateID, htmlID, data) {
        const userHTMl = $(htmlID)
        userHTMl.empty()
        const template = this.setTemplate(templateID)
        userHTMl.append(template(data));
    }
    render(data) {
        this.renderHelper(USER_TEMPLATE, ".user-container", data.userInfo)
        this.renderHelper(TEXT_TEMPLATE, ".quote-container", { text: data.quote })
        this.renderHelper(POKEMON_TEMPLATE, ".pokemon-container", data.pokemon)
        this.renderHelper(MEAT_TEMPLATE, ".meat-container", { meat: data.meat })
        this.renderHelper(FRIENDS_TEMPLATE,".friends-container",{ friends: data.myFriends })

    }
}