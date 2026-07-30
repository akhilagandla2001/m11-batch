import loginddt from '../testdata/login.json'

export class loginclass{
    constructor(page){
        this.page=page;
        this.username = page.locator('//input[@name="user_name"]');
        this.password = page.locator('//input[@name="user_password"]');
        this.button = page.getByRole('button',{name:'Login'})
    }
    async launchurl(){
       await this.page.goto(loginddt.url)
    }
    async details(){
        await this.username.fill(loginddt.username)
        await this.password.fill(loginddt.password)
        await this.button.click()
    }
}