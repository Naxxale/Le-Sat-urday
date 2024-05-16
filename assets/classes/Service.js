export default class Service {
    data = [];
    constructor(){
    }

    create(instance){}

    read(filter){
        return this.data.filter(filter)
    }

    update(){}

    delete(){}
}