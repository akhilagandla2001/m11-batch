export class leadsclass{
    constructor(page){
        this.page=page
        this.lead = page.getByRole('link',{name:'Leads'})
        this.createlead = page.getByRole('img',{name:'Create Lead...'})
    }
    async det(){
        await this.lead.click()
        await this.createlead.click()
    }
}