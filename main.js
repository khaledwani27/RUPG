function loadData() {
    managerAPI.fetchData()
}

function displayData() {
    const  data = managerAPI.getData();
    renderObj.render(data);
}
const renderObj =new Renderer()
const managerAPI = new APIManager()




