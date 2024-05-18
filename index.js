
class ClasseCharacter {
    constructor(name, age, kind){
        this.name = name;
        this.age = age;
        this.kind = ["Guerreiro","Mago", "Monge","Ninja"]
        }
    
    
    attack(mode) {
        if(mode === 1){
            return "usando a Espada";
        }else if (mode === 2){
            return "usando Magia";
        }else if(mode === 3){
            return "usando o Bastão"
        }else if(mode === 4){
            return"usando uma Shuriken";
            }
    }
        
}

const newCharacter = new ClasseCharacter('Guts', 32)
console.log(`O ${newCharacter.kind[1]} atacou ${newCharacter.attack(2)}`)