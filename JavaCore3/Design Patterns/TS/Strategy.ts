interface Strategy{
    login(user: string, password: string): boolean;
}

class LoginContext{
    private strategy: Strategy;

    constructor(strategy: Strategy){
        this.setStrategy(strategy)
    }

    setStrategy(strategy: Strategy){
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean{
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy{
    login(user: string, password: string) {
    console.log("Nos dirigimos a un servicio de autenticacion");
    if(user === 'admin' && password === 'entra'){
        return true;
    }
    return false;
    }
}

const auth = new LoginContext(new LoginDBStrategy());
auth.login('admin', 'entra');
auth.setStrategy(new LoginDBStrategy());
auth.login('admin', 'entra');